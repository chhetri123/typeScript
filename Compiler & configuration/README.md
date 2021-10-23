# **_Compiler & Configuration_**

- ## Using watch Mode

```bash
tsc filename --watch
```

- ## Compiling the Entire projects

```bash
tsc init
tsc --watch
```

### **Open the jsconfig.json**

- ## Including and Excluding file

```javascript
// Add this two keys at the end if needed
"include:["filename"],
"exclude":["filename"],
"file":[]

```

- ## Setting Compilation target

```javascript
"target": "es2020" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    "lib": [
      "dom",
      "es2020",
      "dom.iterable",
      "scripthost"
    ] /* Specify a set of bundled library declaration files that describe the target runtime environment. */,

```

- ## Understanding typeScript core library

```javascript
"rootDir": "./Compiler & configuration/src" /* Specify the root folder within your source files. */,
"outDir": "./Compiler & configuration/dist" /* Specify an output folder for all emitted files. */
```

- ## Stop Emitting file on compilation error

```javascript
 "noEmitOnError": false /* Disable emitting files if any type checking errors are reported. */,

```

- ## Strict compilation

```javascript
 "strict": true /* Enable all strict type-checking options. */,
"noImplicitAny": false /* Enable error reporting for expressions and declarations with an implied `any` type.. */,
"strictNullChecks": true,                         /* When type checking, take into account `null` and `undefined`. */
"strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
"strictBindCallApply": true /* Check that the arguments for `bind`, `call`, and `apply` methods match the original function. */,
"strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
"noImplicitThis": true,                           /* Enable error reporting when `this` is given the type `any`. */
"alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */

```

- ## Code quality option

```javascript
"noUnusedLocals": true,                           /* Enable error reporting when a local variables aren't read. */
"noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read */
"exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
"noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
"noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */

```

### Other you can see in app.ts and analytics.ts file
