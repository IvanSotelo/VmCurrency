# vm-currency

> A input currency type


[![NPMVERSION](https://img.shields.io/npm/v/vm-currency.svg)](http://npmjs.com/package/vm-currency) [![GITHUBSTARS](https://img.shields.io/github/stars/IvanSotelo/VmCurrency.svg)](https://github.com/IvanSotelo/VmCurrency/stargazers) [![BUILD](https://travis-ci.org/IvanSotelo/VmCurrency.svg?branch=master)](https://travis-ci.org/IvanSotelo/VmCurrency) [![DOWNLOADS](https://img.shields.io/npm/dt/vm-currency.svg)](https://npmjs.com/package/vm-currency)

## Installation

``` bash
# Install with npm
$ npm install --save vm-currency

# or yarn
$ yarn add vm-currency
```


## Usage

``` vue
<template>
  <div class="app">
    <vm-currency v-model="data"/>
  </div>
</template>

<script>
  import { VmCurrency } from 'vm-currency';
  export default {
    name: 'demo',
    components: {
      VmCurrency
    }
  };
</script>
```


## License

```
The MIT License (MIT)

Copyright (c) 2020 Ivan Sotelo Vargas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
