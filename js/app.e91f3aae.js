(function(t){function e(e){for(var i,o,r=e[0],l=e[1],u=e[2],p=0,d=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/VmCurrency/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i,a,s=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("vm-currency",{attrs:{label:"Hola",placeholder:"hhb"},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}}),n("p",[t._v(t._s(t.price))])],1)},r=[],l=(n("4160"),n("a9e3"),n("159b"),n("4db3")),u=n.n(l),c={},p={name:"VmCurrency",render:function(t){var e,n=this,i="input"===this.tag;e=i?{type:"text",placeholder:this.placeholder}:{contenteditable:this.hasContentEditable};var a=this.success||this.danger||this.warning?t("span",{class:{"input-icon-validate":!0,"vm-input--icon-validate":!0}},[t("vm-icon",{attrs:{icon:this.getIcon()}})]):null,s=this.success?this.successText:this.danger?this.dangerText:this.warningText,o=this.success||this.danger||this.warning?t("div",{class:{"con-text-validation":!0,"vm-input--text-validation-span":!0,"span-text-validation-success":this.success,"span-text-validation-danger":this.danger,"span-text-validation-warning":this.warning}},[t("span",{class:{"span-text-validation":!0}},s)]):null,r=this.descriptionText?t("div",{class:{"con-text-validation":!0,"vm-input--text-validation-span":!0,"span-text-validation":!0}},[t("span",{class:{"span-text-validation":!0}},this.descriptionText)]):null;return t("div",{class:{"vm-con-input-label":!0,"vm-input":!0,"vm-input-primary":!0,"input-icon-validate-success":this.success,"input-icon-validate-danger":this.danger,"input-icon-validate-warning":this.warning,isFocus:this.isFocus}},[t("label",{class:{"vm-input--label":!0}},this.label),t("div",{class:{"vm-con-input":!0}},[t(this.tag,{attrs:e,class:{"vm-inputx":!0,"vm-input--input":!0,normal:!0},ref:"autoNumericElement",on:{"autoNumeric:rawValueModified":this.updateVModel,focus:function(t){return n.changeFocus(!0)},blur:function(t){return n.changeFocus(!1)}}}),a]),o,r])},props:{value:{required:!1,validator:function(t){return"number"===typeof t||"string"===typeof t||""===t||null===t}},options:{type:[Object,String,Array],required:!1,default:function(){return c}},resetOnOptions:{type:Boolean,required:!1,default:!0},placeholder:{type:String,required:!1},label:{default:null,type:[String,Number],required:!1},tag:{type:String,required:!1,default:"input"},success:{default:!1,type:Boolean},danger:{default:!1,type:Boolean},warning:{default:!1,type:Boolean},valIconSuccess:{default:"checkmark-circle-outline",type:String},valIconDanger:{default:"close",type:String},valIconWarning:{default:"alert-triangle-outline",type:String},successText:{default:null,type:String},dangerText:{default:null,type:String},warningText:{default:null,type:String},descriptionText:{default:null,type:String}},data:function(){return{isFocus:!1,anElement:null,initialOptions:null,hasContentEditable:!0}},created:function(){var t=this;if(Array.isArray(this.options)){var e={};this.options.forEach((function(n){t.initialOptions=t.manageOptionElement(n),e=Object.assign(e,t.initialOptions)})),this.initialOptions=e}else this.initialOptions=this.manageOptionElement(this.options);this.hasContentEditable=!this.initialOptions.readOnly},mounted:function(){this.anElement=new u.a(this.$refs.autoNumericElement,this.initialOptions),this.anElement.set(this.value),this.updateVModel()},computed:{anInfo:function(){return{value:this.value,options:this.options}}},methods:{updateVModel:function(t){null!==this.anElement&&this.$emit("input",this.anElement.getNumber(),t)},manageOptionElement:function(t){var e;return"string"===typeof t||t instanceof String?(e=u.a.getPredefinedOptions()[t],void 0!==e&&null!==e||(console.warn("The given pre-defined options [".concat(t,"] is not recognized by AutoNumeric.\nSwitching back to the default options.")),e=c)):e=t,e},changeFocus:function(t){this.isFocus=t},getIcon:function(){return this.danger?this.valIconDanger:this.warning?this.valIconWarning:this.success?this.valIconSuccess:""}},watch:{anInfo:function(t,e){var n;e.options&&JSON.stringify(t.options)!==JSON.stringify(e.options)&&(this.resetOnOptions&&this.anElement.options.reset(),n=Array.isArray(t.options)?u.a.mergeOptions(t.options):u.a._getOptionObject(t.options),this.anElement.update(n));void 0!==t.value&&this.anElement.getNumber()!==t.value&&t.value!==e.value&&this.anElement.set(t.value)}}},d=p,f=n("2877"),h=Object(f["a"])(d,i,a,!1,null,null,null),g=h.exports,v={name:"App",components:{VmCurrency:g},data:function(){return{price:1200}}},m=v,y=(n("7faf"),Object(f["a"])(m,o,r,!1,null,null,null)),b=y.exports;s["a"].config.productionTip=!1,s["a"].use(g),new s["a"]({components:{VmCurrency:g},render:function(t){return t(b)}}).$mount("#app")},"7faf":function(t,e,n){"use strict";var i=n("b7f3"),a=n.n(i);a.a},b7f3:function(t,e,n){var i=n("e7ed");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("499e").default;a("49f64b73",i,!0,{sourceMap:!1,shadowMode:!1})},e7ed:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"#app{font-family:-apple-system,BlinkMacSystemFont,San Francisco,Roboto,Oxygen,Segoe UI,Fire Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;text-rendering:optimizeLegibility}#app button,#app input,#app optgroup,#app select,#app textarea{font-family:inherit}#app p{color:#fff}",""]),t.exports=e}});
//# sourceMappingURL=app.e91f3aae.js.map