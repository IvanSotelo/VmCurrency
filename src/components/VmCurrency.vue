<script>
import AutoNumeric from 'autonumeric/dist/autoNumeric.min'
const defaultOptions = {}

export default {
  name: 'VmCurrency',
  render (h) {
    const isInput = this.tag === 'input'
    let attributes
    if (isInput) {
      attributes = {
        type: 'text',
        placeholder: this.placeholder
      }
    } else {
      attributes = {
        contenteditable: this.hasContentEditable
      }
    }
    const vmIcon = (this.success || this.danger || this.warning) ? h('span', {
      class: {
        'input-icon-validate': true,
        'vm-input--icon-validate': true
      }
    }, [
      h('vm-icon', {
        attrs: {
          icon: this.getIcon()
        }
      })
    ]) : null
    const spanText = this.success ? this.successText : this.danger ? this.dangerText : this.warningText
    const validationText = (this.success || this.danger || this.warning) ? h('div', {
      class: {
        'con-text-validation': true,
        'vm-input--text-validation-span': true,
        'span-text-validation-success': this.success,
        'span-text-validation-danger': this.danger,
        'span-text-validation-warning': this.warning
      }
    }, [
      h('span', {
        class: {
          'span-text-validation': true
        }
      }, spanText)
    ]) : null

    const descriptionText = this.descriptionText ? h('div', {
      class: {
        'con-text-validation': true,
        'vm-input--text-validation-span': true,
        'span-text-validation': true
      }
    }, [
      h('span', {
        class: {
          'span-text-validation': true
        }
      }, this.descriptionText)
    ]) : null

    return h('div', {
      class: {
        'vm-con-input-label': true,
        'vm-input': true,
        'vm-input-primary': true,
        'input-icon-validate-success': this.success,
        'input-icon-validate-danger': this.danger,
        'input-icon-validate-warning': this.warning,
        isFocus: this.isFocus
      }
    }, [
      h('label', {
        class: {
          'vm-input--label': true
        }
      }, this.label),
      h('div', {
        class: {
          'vm-con-input': true
        }
      }, [
        h(this.tag, {
          attrs: attributes,
          class: {
            'vm-inputx': true,
            'vm-input--input': true,
            normal: true
          },
          ref: 'autoNumericElement',
          on: {
            'autoNumeric:rawValueModified': this.updateVModel,
            focus: evt => this.changeFocus(true),
            blur: evt => this.changeFocus(false)
          }
        }),
        vmIcon
      ]),
      validationText,
      descriptionText
    ])
  },
  props: {
    value: {
      required: false,
      validator (val) {
        return typeof val === 'number' || typeof val === 'string' || val === '' || val === null
      }
    },
    options: {
      type: [Object, String, Array],
      required: false,
      default () {
        return defaultOptions
      }
    },
    /**
     * If set to `true`, whenever the `options` prop changes, the AutoNumeric settings are first reset to the AutoNumeric defaults options.
     * This is set to `true` by default so that it allows for users to pass predefined option names and be sure that no previous settings would be kept, resulting in an unusual result (ie. when switching from 'integer' to 'euro', the decimalPlaces would still be `0`).
     */
    resetOnOptions: {
      type: Boolean,
      required: false,
      default: true
    },
    placeholder: { // The <input> placeholder text. This is only used if the generated element is an <input>.
      type: String,
      required: false
    },
    label: {
      default: null,
      type: [String, Number],
      required: false
    },
    tag: {
      type: String,
      required: false,
      default: 'input'
    },
    success: {
      default: false,
      type: Boolean
    },
    danger: {
      default: false,
      type: Boolean
    },
    warning: {
      default: false,
      type: Boolean
    },
    valIconSuccess: {
      default: 'checkmark-circle-outline',
      type: String
    },
    valIconDanger: {
      default: 'close',
      type: String
    },
    valIconWarning: {
      default: 'alert-triangle-outline',
      type: String
    },
    successText: {
      default: null,
      type: String
    },
    dangerText: {
      default: null,
      type: String
    },
    warningText: {
      default: null,
      type: String
    },
    descriptionText: {
      default: null,
      type: String
    }
  },
  data () {
    return {
      isFocus: false,
      // Store the reference to the AutoNumeric object
      anElement: null,
      initialOptions: null, // Store the options that were first used when initializing the component
      hasContentEditable: true // Store if the element should be set as `contenteditable` on initialization
    }
  },
  created () {
    // Manage the options
    /*
      * Currently, the allowed format for the `options` property are :
      * - a string (predefined options)
      * - an object (the option object)
      * - an array of strings and/or objects
      */
    if (Array.isArray(this.options)) {
      // This allows the user to use multiple options (strings or objects) in an array, and overwrite the previous one with the next option element ; this is useful to tune the wanted format
      let optionObjects = {}
      this.options.forEach(optionElement => {
        this.initialOptions = this.manageOptionElement(optionElement)
        optionObjects = Object.assign(optionObjects, this.initialOptions) // Merge each options objects one after the other
      })
      this.initialOptions = optionObjects
    } else {
      this.initialOptions = this.manageOptionElement(this.options)
    }
    // Define if the generated non-input element should have the contenteditable attribute set to `true`
    this.hasContentEditable = !this.initialOptions.readOnly
  },
  mounted () {
    // Initialize the autoNumeric element
    this.anElement = new AutoNumeric(this.$refs.autoNumericElement, this.initialOptions)
    this.anElement.set(this.value)
    // The `v-model` must be updated with that default value on startup
    this.updateVModel() // FIXME Send the `event.timeStamp` info here
  },
  computed: {
    /**
     * This computed property is created in order to be able to watch the changes to both `value` and `options` at the same time.
     * This is important since if both are changed at the same time, `options` needs to be updated *before* `value` (the order here is important, and is respected in the `anInfo` watcher).
     *
     * cf. https://github.com/vuejs/vue/issues/7723#issuecomment-369344926
     *
     * @returns {Object}
     */
    anInfo () {
      return {
        value: this.value,
        options: this.options
      }
    }
  },
  methods: {
    /**
     * Update the v-model value and make the parent aware of that change.
     *
     * @param {Event} event This is needed if we want to use the `event.timeStamp` attribute
     */
    updateVModel (event) {
      if (this.anElement !== null) {
        this.$emit('input', this.anElement.getNumber(), event)
      }
    },
    /**
     * Return an option object, whatever the type of `optionElement`.
     * If `optionElement` is as string, then we retrieve the predefined option object, if it's an object, we use it as is.
     *
     * @param {object|string} optionElement
     * @returns {object}
     */
    manageOptionElement (optionElement) {
      let options
      if (typeof optionElement === 'string' || optionElement instanceof String) {
        options = AutoNumeric.getPredefinedOptions()[optionElement]
        // eslint-disable-next-line no-void
        if (options === void (0) || options === null) {
          // If the given `optionElement` does not exist, we switch back to the default options
          // eslint-disable-next-line no-console
          console.warn(`The given pre-defined options [${optionElement}] is not recognized by AutoNumeric.\nSwitching back to the default options.`)
          options = defaultOptions // Default value
        }
      } else { // A `settings` object
        options = optionElement
      }
      return options
    },
    changeFocus (booleanx) {
      this.isFocus = booleanx
    },
    getIcon () {
      return this.danger ? this.valIconDanger
        : this.warning ? this.valIconWarning
          : this.success ? this.valIconSuccess
            : ''
    }
  },
  /*
    * Here we need to be extra careful when using `watch`, in order to
    * prevent chain reactions when 'linked' v-model starts to change each
    * other when only one is manually modified, including the very one
    * the user interacts with.
    *
    * In order to prevent infinite watch loops when different `vue-autonumeric`
    * components are using the same v-model, we check if the element
    * `rawValue` is different from the new value, and only set it if that's
    * the case.
    * This way we do not need to keep track if the element is being manually
    * used by the user, or only programmatically.
    *
    * The new value detected by `watch` is then only `set` if it comes
    * from a script, effectively preventing updating the input that is
    * currently edited by the user.
    *
    * This can be tested by using `$vm0.$props.options = { currencySymbol : '#' };` in the console
    *
    * Note: If multiple components share the same v-model, this means `set()`
    * will be called as many times as there is an input that is not being
    * used by a human interaction.
    */
  watch: {
    anInfo (newValue, oldValue) {
      // 1) First, check if the options have changed, if that's the case, update those first
      // Compare the new and old options, and only update if they are different
      if (oldValue.options && JSON.stringify(newValue.options) !== JSON.stringify(oldValue.options)) { // TODO Find a better way (without external libraries) to compare the two options objects. Also, the comparison is moot when comparing 'euro' with the actual euro object.
        if (this.resetOnOptions) { // This is needed when using predefined options that do not override previously used options
          this.anElement.options.reset()
        }
        let optionsToUse
        if (Array.isArray(newValue.options)) { // Manage the new options if they are passed in an array
          optionsToUse = AutoNumeric.mergeOptions(newValue.options)
        } else {
          optionsToUse = AutoNumeric._getOptionObject(newValue.options)
        }
        this.anElement.update(optionsToUse)
      }
      // 2) Then check if the value has changed, if it's defined
      // eslint-disable-next-line no-void
      if (newValue.value !== void (0) &&
          // Make sure this is only called when the value is set by an external script, and not from a user input
          this.anElement.getNumber() !== newValue.value &&
          // Compare the 'newValue' with the current 'oldValue' so we do not `set` it again if it's not needed
          newValue.value !== oldValue.value) {
        // The modification comes from a script, so we need to reformat the new value `newValue.value`
        this.anElement.set(newValue.value)
      }
    }
  }
}
</script>
