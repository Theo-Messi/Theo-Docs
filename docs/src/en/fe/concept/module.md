# Modular

::: tip What is modularity?

Explanation from Baidu Encyclopedia: Modularization refers to the process of dividing a system into several modules from top to bottom when solving a complex problem. It has a variety of attributes that reflect its internal characteristics.

In programming, modularization is to split a complex application into several files (code blocks) according to certain rules and combine them. The data and implementation inside the file are private, but some interfaces (methods, variables) are exposed to the outside to communicate with other modules.

:::

Benefits of modularity

- Avoid namespace conflicts
- Improve code reusability
- Improve maintainability
- Better separation and on-demand loading

The current mainstream module specification for the front end is

- `CommonJS`
- `ESModule`
- `AMD`
- `CMD`
- `UMD`

## CommonJS

[`CommonJS`](https://www.commonjs.org/) specification is a way to load modules synchronously, which is mainly used on the server side, that is, in `Node`

- `module.exports` is used to specify the external output interface of the current module
- `exports` is a reference to the `module.exports` property
- `require` is used to load module files (read and execute a `JavaScript` file and return the `exports` object of the module)

```js
/* util.js */
const name = 'maomao'
exports.name = name
module.exports.log = function () {
   console.log(name)
}

/* index.js */
const util = require('./util.js)
util.name
util.log()
```

::: tip exports and module.exports

- `exports` is a property of the `module` object
- `exports` is a reference to `module.exports`, by default `module.exports` and `exports` point to the same empty object\*\*
- The module exports `module.exports`

:::

::: tip Features of CommonJS modules

- All code runs in the module scope and will not pollute the global scope
- The module can be loaded multiple times, but it will only be run once when it is loaded for the first time. Then the running results will be cached, and the cached results will be read directly when loading in the future. To make the module run again the cache must be cleared
- Modules are loaded in the order they appear in the code

:::

##ESModule

`ESModule` is a module function implemented by `ES6` at the language standard level, mainly composed of `export` and `import`

- The `export` command is used to specify the external interface of the module
- The `import` command is used to import functions provided by other modules

[ES6 Common Knowledge——ESModule](/fe/es6/#esmodule)

::: tip Differences between ESModule and CommonJS

- `CommonJS` is a dynamic syntax that can be written in the judgment; `ESModule` static syntax can only be written at the top level
- `CommonJS` module outputs a copy of the value; `ESModule` outputs a reference to the value
  - Once the `CommonJS` module outputs a value, changes within the module will not affect the value.
  - When the `ESModule` module encounters the module loading command `import` when the `JavaScript` engine statically analyzes the script, it will generate a read-only reference. When the script is actually executed, it will use this read-only reference to the loaded module. Get the value inside (`ESModule` is a dynamic reference and does not cache the value. The variables in the module are bound to the module in which it is located)
- `CommonJS` module is loaded at runtime; `ESModule` is a compile-time output interface.
  - `CommonJS` loads an object (i.e. `module.exports` property), which will only be generated after the script is run.
  - `ESModule` is not an object. Its external interface is just a static definition, which will be generated during the static analysis phase of the code.
- The `require()` of the `CommonJS` module loads the module synchronously; the `import` command of `ESModule` loads asynchronously, with an independent resolution phase for module dependencies.
- Top-level `this` points to different
  - The top-level `this` in a `CommonJS` module points to the module itself
  - Top-level `this` in the `ESModule` module points to `undefined`
- Cyclic loading of modules
  - The `CommonJS` module will execute the entire script and generate an object in the memory after loading the module. When a module is "loop loaded", only the executed part will be output, and the unexecuted part will not be output.
  - `ESModule` does not care at all whether "cyclic loading" occurs, it just generates a reference to the loaded module. The developer needs to ensure that the value can be obtained when the value is actually obtained.

:::

##AMD

The full name of the `AMD` specification is Asynchronous Module Definition, which is mainly used in browsers. <br>
The `AMD` specification fully describes the module definition, dependencies, reference relationships and loading mechanism. Its representative library is [RequireJS](https://requirejs.org/)

### Related APIs and usage

- `define()`: define module
- `require()`: call module

```js
/* First load RequireJS through script */

/* Define module utils.js */
define(['utils'], function () {
  function log() {}
  return {
    log: log
  }
})

/* Call module */
require(['./utils'], function (utils) {
  utils.log()
})
```

## CMD

The full name of the `CMD` specification is Common Module Definition, which is a common module definition, and its representative library is [SeaJS](https://seajs.github.io/seajs/docs/)

> The `CMD` specification is an improved specification based on the `AMD` specification, which solves the problem of the execution timing of dependent modules in the `AMD` specification.

### Related APIs and usage

- `define()`: define module
- `seajs.use()`: call module

```js
/* First load SeaJS through script */

/* Define module utils.js */
define(function (require, exports, module) {
  function log() {}
  return {
    log: log
  }
})

/* Call module */
seajs.use(['./utils.js'], function (utils) {
  utils.log()
})
```

::: tip The difference between AMD and CMD

- `AMD`
  - Dependency prefix: When defining a module, you need to declare the modules it depends on.
  - After loading the module, the module will be executed. When all modules are loaded and executed, the callback function of require will be entered to execute the main logic.
- `CMD`
  - Nearby dependencies: only load a specific module when it is used
  - After a dependent module is loaded, it is not executed. When all dependent modules are loaded, the main logic is entered, and the corresponding module is executed only when a require statement is encountered.

The biggest difference between the two is the different processing of execution timing of dependent modules

:::

##UMD

`UMD` is just a common way of writing. It was a universal specification produced to solve the problem of multiple popular and inconsistent specifications at that time<br>
`UMD` is actually a combination of **`AMD + CommonJS + global variables`** these three specifications

```js
;(function (root, factory) {
  // CommonJs module specification Node environment
  if (typeof module === 'object') {
    module.exports = factory(require('jquery'))
  }
  // AMD module specification
  else if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory)
  }
  // Mount global variables (global is the global object)
  else {
    root.returnExports = factory(root.jQuery)
  }
})(this, function ($) {
  // define properties
  const name = 'jquery'

  // define method
  function log() {}

  // Expose public methods
  return {
    name,
    log
  }
})
```

## related articles

[In-depth CommonJs and ES6 Module](https://segmentfault.com/a/1190000017878394)
