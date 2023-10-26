#Type conversion

::: tip Tips
Read ["JavaScript You Don't Know (Volume 2)"](https://www.ituring.com.cn/book/1563) and the summary summarized in the articles of various experts. **If you have any objection, please press your Understand first**
:::

Converting a value from one type to another is called type conversion <br>
When performing type conversion in `JavaScript`, it can be divided into the following two types according to the calling form:

- **Explicit type conversion**
- **Implicit type conversion**

## Abstract operations (internal type conversion rules)

Before understanding type conversion, we need to know the **abstract operations** (type conversion rules) of `JavaScript`

> **Abstract operations** are operations for internal use only

- `ToPrimitive` converts the reference type into the corresponding basic type value
- `ToString` converts non-string values into strings
- `ToBoolean` converts non-Boolean values into Boolean values
- `ToNumber` converts non-numeric values into numeric values

### ToPrimitive

`ToPrimitive` is used to handle type conversion from reference types to basic types.

::: tip ToPrimitive conversion rules

- Check if `Symbol.toPrimitive()` exists
  - Basic types are returned directly
  - Reference types throw `TypeError`
- Check if `valueOf()` exists
  - Basic types are returned directly
  - For reference types, continue to call `toString()`
- Call `toString()`
  - Basic types are returned directly
  - Reference types throw `TypeError`

:::

::: warning points to note

- The object created using `Object.create(null)` has no prototype, that is, there is no `valueOf()` and `toString()`, and a `TypeError` will be thrown when type conversion is performed on it.
- When doing explicit type conversion, the calling order of `valueOf()` and `toString()` will be adjusted accordingly according to the conversion target.
  - By default, `valueOf()` is called first and then `toString()`
  - When the target to be converted is a string, `toString()` will be called first and then `valueOf()`

:::

<<< @/fe/javascript/code/ToPrimitive.js

### ToString

`ToString` is used to handle non-string to string type conversion

::: tip ToString conversion rules

- basic type
  - `undefined` => `'undefined'`
  - `null` => `'null'`
  - `true` => `'true'`
  - `false` => `'false'`
  - `number`
    - Ordinary values ​​are directly enclosed in quotation marks.
    - Very small and very large numbers will be converted to exponential form strings
    - `+0 0 -0` => `'0'`
    - `Infinity` => `'Infinity'`
- The reference type will first call the `ToPrimitive` logic to convert it into a basic type. If the returned basic type is not a string, then follow the above rules for conversion.

:::

### ToBoolean

`ToBoolean` is used to handle type conversion from non-Boolean values to Boolean values. In `JavaScript`, Boolean types are divided into true values (`true`) and false values (`false`)

- **false**: a value that can be cast to `false`
- **True value**: Value other than false value

::: tip ToBoolean conversion rule

- The following values will be converted to false values (`false`)
  - **`undefined`**
  - **`null`**
  - **`false`**
  - **`+0 0 -0 NaN`**
  - **`''`**
- Values other than false values will be converted to true values (`true`)

:::

### ToNumber

`ToNumber` is used to handle type conversion from non-numeric values to numeric values.

::: tip ToNumber conversion rules

- basic type
  - `undefined` => `NaN`
  - `null` => `0`
  - `true` => `1`
  - `false` => `0`
  - `string`
    - Empty string (`''`) => `0`
    - non-numeric string => `NaN`
- The reference type will first call the `ToPrimitive` logic to convert it into a basic type. If the returned basic type is not a numeric value, it will be converted according to the above rules.

:::

## Explicit type conversion

Explicit type conversion refers to explicitly calling the type conversion method

- Convert to boolean
  - `Boolean()`
- Convert to numerical value
  - `Number()`
  - `parseInt()`
  - `parseFloat()`
- Convert to string
  - `String()`

::: warning Notes

- `Number()` converts the entire value
- `parseInt()` and `parseFloat()` convert partial values, parsing and converting strings one by one. If the parameter passed in is not a string, it will be converted to a string first.

:::

## Implicit type conversion

Implicit type conversion means that during execution, when the actual value of the operation is different from the value expected internally by `JavaScript`, implicit type conversion (ie, imperceptible type conversion) will be performed<br>
Implicit type conversion occurs in the following scenarios in `JavaScript`

- Equality operator (`==`)
- Four arithmetic operators (`+ - * /`)
- Relational operators (`> < >= <=`)
- Logical operators (`&& ||`)
- Conditional judgment statements
  - `if()`
  - `while()`
  - Ternary operator

### Equality operator operation rules (emphasis)

**Why `0 == null` is `false`? **

```js
0 == null // false
```

[Description of equality operators in section 7.2.12 of the ECMA-262 specification](https://www.ecma-international.org/ecma-262/6.0/#sec-abstract-equality-comparison)

1. If `x` is not a normal value (such as throwing an error), interrupt execution;
2. If `y` is not a normal value, interrupt execution;
3. If `Type(x)` is the same as `Type(y)`, perform strict equality operation `x === y`;
4. If `x` is `null` and `y` is `undefined`, return `true`;
5. If `x` is `undefined` and `y` is `null`, return `true`;
6. If `Type(x)` is a numeric value and `Type(y)` is a string, return the result of `x == ToNumber(y)`;
7. If `Type(x)` is a string and `Type(y)` is a numeric value, return the result of `ToNumber(x) == y`;
8. If `Type(x)` is a Boolean value, return the result of `ToNumber(x) == y`;
9. If `Type(y)` is a Boolean value, return the result of `x == ToNumber(y)`;
10. If `Type(x)` is a string or numeric value or `Symbol` value, and `Type(y)` is an object, return the result of `x == ToPrimitive(y)`;
11. If `Type(x)` is an object and `Type(y)` is a string or numeric value or `Symbol` value, return the result of `ToPrimitive(x) == y`;
12. Return `false`.

> [Type(x)](https://262.ecma-international.org/6.0/#sec-ecmascript-data-types-and-values) is the abbreviation of `the type of x`, where `type` Is the ECMAScript language and specification type defined in the ECMA-262 specification

So when calculating `0 == null`, since the type of `0` is numeric, the type of `null` is `Null` (this is the specification [section 4.3.13](https://www.ecma-international. org/ecma-262/6.0/#sec-terms-and-definitions-null-type), which is the result of the internal `Type` operation and has nothing to do with the `typeof` operator);<br />
Therefore, the first 11 steps above will not get the result, and you will not get `false` until step 12.

[Equality Operator - Getting Started with ECMAScript 6](https://es6.ruanyifeng.com/#docs/spec#%E7%9B%B8%E7%AD%89%E8%BF%90%E7%AE%97 %E7%AC%A6)

::: tip Summary of equality operator operation rules

- When comparing the same type, perform strict equality operation `x === y`
- Returns `true` when comparing `undefined` to `null`
- When comparing `string` with `number`, first process `string` with `ToNumber` and then compare it.
- When comparing `boolean` with other types, first process `boolean` with `ToNumber` and then compare it.
- When comparing `reference type` with `basic type`, perform `ToPrimitive` on the `reference type` and then compare
- `undefined` `null` returns `false` when compared with other types

:::

### Four arithmetic operators operation rules

::: tip Four arithmetic operators operation rules

- `-`(subtraction) `*`(multiplication) `/`(division) Operator: first perform `ToNumber` processing on the operand and then perform the operation
- `+`(addition) operator
  - When doing unary operations, perform `ToNumber` processing on the operands
  - When doing binary operations
    - When one of the operands is `string`, perform `ToString` on the other operand and then perform string concatenation
    - When one operand is `number` and the other operand is a basic type, the basic type is processed by `ToNumber` and then the operation is performed.
    - When one operand is `number` and the other operand is a reference type, `ToString` will be processed first and then string concatenation will be performed.

:::

### Relational, logical, conditional operator operation rules

::: tip relational operator operation rules

- Process reference types with `ToPrimitive`
- Perform `Unicode encoding` size comparison if both parameters are of `string` type
- Otherwise, perform `ToNumber` processing on the two parameters, and then compare the numerical values.

:::

::: tip logical operators and conditional judgment statements
`ToBoolean` processing is done in **logical operators** and **conditional judgment statements**
:::
