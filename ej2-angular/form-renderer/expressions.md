---
layout: post
title: Expressions in Angular Form Renderer Component | Syncfusion
description: Learn how expression values in the Angular Form Renderer derive field values, including supported syntax, operators, and built-in constants.
control: Expressions
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Expressions in Angular Form Renderer component

Expressions let a field's value be derived from other fields instead of being typed in by the user. A field with an `expressionValue` is recomputed: whenever any of the fields it references change, the renderer re-evaluates the expression and updates the target field automatically. This keeps derived values declarative and removes the need for change handlers.

`expressionValue` is set on a field's properties and holds a string that follows the expression syntax. The example below auto-fills the `name` field with `firstName` and `lastName` joined by a space.

```json
{
  "properties": {
    "firstName": {
      "id": "textbox_1785963401854_567",
      "name": "firstName",
      "type": "string",
      "label": "First Name",
      "textboxType": "text",
      "widget": "textbox"
    },
    "lastName": {
      "id": "textbox_1785963450016_515",
      "name": "lastName",
      "type": "string",
      "label": "Last Name",
      "textboxType": "text",
      "widget": "textbox"
    },
    "name": {
      "id": "textbox_1785963419950_968",
      "name": "name",
      "type": "string",
      "label": "Name",
      "expressionValue": "{firstName} + \" \" + {lastName}",
      "textboxType": "text",
      "widget": "textbox"
    }
  }
}
```

In this example, typing into `firstName` or `lastName` updates the `name` field. The expression `{firstName} + " " + {lastName}` is re-evaluated on every change to the referenced fields.

## Expression syntax

An expression is a string that the renderer parses and evaluates against the current form state. It can be as simple as a single field reference or as involved as a nested arithmetic and boolean expression with grouping and a ternary.

| Aspect | Syntax | Example |
| --- | --- | --- |
| Field Reference | `{fieldName}` | `{firstName}` |
| Array Index | `{multiselect_1}[0]` | `{multiselect_1}[0]` |
| Grouping | `(expression)` | `({qty} * {price}) + ({subtotal} + {tax})` |
| Ternary | `condition ? valueTrue : valueFalse` | `{age} > 18 ? "Adult" : "Minor"` |
| Boolean Operator | `condition1 && condition2` | `{age} >= 18 && {age} <= 60` |

## Operators

### Arithmetic Operators

Arithmetic operators perform numeric math. When either side of `+` is a string, `+` performs concatenation instead. Constants such as `PI` can be used on the right-hand side (see [Available Constants](#available-constants)).

| Operator | Name | Usage | Example | Result Type |
| --- | --- | --- | --- | --- |
| `+` | Addition | `{num1} + {num2}` | `10 + 5` | number |
| `+` | Concatenation | `{str1} + {str2}` | `"Hello" + " World"` | string |
| `+` | Concatenation with custom string | `{str1} + " - " + {str2}` | `"Hello" + " - " + " World"` | string |
| `-` | Subtraction | `{num1} - {num2}` | `10 - 3` | number |
| `*` | Multiplication | `{num1} * {num2}` | `4 * 5` | number |
| `/` | Division | `{num1} / {num2}` | `20 / 4` | number |
| `%` | Modulo | `{num1} % {num2}` | `10 % 3` | number |
| `^` | Exponent | `{num1} ^ {num2}` | `2 ^ 3` | number |

### Comparison Operators

Comparison operators compare two values and return a boolean. They are commonly used to feed a ternary or a boolean combination. The strict variants `===` and `!==` also check that the two sides have the same type, while `==` and `!=` only check value equality.

| Operator | Name | Usage | Example |
| --- | --- | --- | --- |
| `==` | Equals | `{value} == 10` | `5 == 5` |
| `!=` | Not Equals | `{value} != 10` | `5 != 10` |
| `===` | Strict Equals | `{value} === 10` | `5 === 5` |
| `!==` | Strict Not Equals | `{value} !== 10` | `5 !== "5"` |
| `<` | Less Than | `{age} < 18` | `15 < 18` |
| `>` | Greater Than | `{age} > 18` | `25 > 18` |
| `<=` | Less Than or Equal | `{value} <= 100` | `100 <= 100` |
| `>=` | Greater Than or Equal | `{value} >= 50` | `50 >= 50` |

### Logical Operators

Logical operators combine or invert boolean sub-expressions. `!` negates a single condition, while `&&` and `||` are written inline (see [Expression syntax](#expression-syntax)) and are the boolean counterparts of `AND` and `OR`.

| Operator | Name | Usage | Example | Result |
| --- | --- | --- | --- | --- |
| `!` | NOT | `!condition` | `!{isDeleted}` | Boolean |

### Available Constants

Constants are reserved tokens that the renderer recognizes by name. Use them on the right-hand side of a comparison or as operands in arithmetic. The `Math` object is also exposed so that any of its methods (`Math.sqrt`, `Math.round`, `Math.max`, and so on) can be called inside an expression.

| Constant | Type | Value | Usage |
| --- | --- | --- | --- |
| `PI` | number | `3.14159...` | `{{radius} * PI}` |
| `TRUE` | boolean | `true` | `{{enabled} == TRUE}` |
| `FALSE` | boolean | `false` | `{{disabled} === FALSE}` |
| `NULL` | null | `null` | `{{value} == NULL}` |
| `UNDEFINED` | undefined | `undefined` | `{{value} != UNDEFINED}` |
| `Math` | object | Math object | `{Math.sqrt({num})}` |

## Available Functions

Functions are built-in helpers you can call from inside an `expressionValue`. They cover aggregates over arrays, numeric rounding and roots, common string transforms, and date arithmetic. All function names are case-sensitive and must be written in upper case as shown below.

### Aggregate Functions

Aggregate functions operate on an array of values - a comma-separated list, or a hand-written array literal. They always return a single value.

| Function | Syntax | Parameters | Returns | Example | Usage |
| --- | --- | --- | --- | --- | --- |
| `SUM` | `SUM(array)` | `array: number[]` | number | `SUM([10, 20, 30])` → `60` | `SUM([{numA} , {numb}])` |
| `AVG` | `AVG(array)` | `array: number[]` | number | `AVG([10, 20, 30])` → `20` | `AVG([{numA} , {numB}])` |
| `MIN` | `MIN(array)` | `array: number[]` | number | `MIN([10, 20, 30])` → `10` | `MIN([{numA} , {numB}])` |
| `MAX` | `MAX(array)` | `array: number[]` | number | `MAX([10, 20, 30])` → `30` | `MAX([{numA} , {numB}])` |
| `COUNT` | `COUNT(array)` | `array: any[]` | number | `COUNT([1, 2, 3])` → `3` | `COUNT([{numA} , {numB}])` |

### Math Functions

Math functions apply a single numeric transform to their input. `ROUND` takes an optional second argument to control the number of decimal places; all others take a single value.

| Function | Syntax | Parameters | Returns | Example | Usage |
| --- | --- | --- | --- | --- | --- |
| `ROUND` | `ROUND(value, decimals)` | `value: number`, `decimals: number` (optional) | number | `ROUND(3.7)` → `4` | `ROUND({num})` |
| `FLOOR` | `FLOOR(value)` | `value: number` | number | `FLOOR(3.7)` → `3` | `FLOOR({num})` |
| `CEIL` | `CEIL(value)` | `value: number` | number | `CEIL(3.2)` → `4` | `CEIL({num})` |
| `ABS` | `ABS(value)` | `value: number` | number | `ABS(-5)` → `5` | `ABS({num})` |
| `SQRT` | `SQRT(value)` | `value: number` | number | `SQRT(16)` → `4` | `SQRT({num})` |

### String Functions

String functions transform or inspect a text value. `CONCAT` accepts two or more arguments and joins them in order; `SUBSTRING` takes a `start` index and an optional `length`.

| Function | Syntax | Parameters | Returns | Example | Usage |
| --- | --- | --- | --- | --- | --- |
| `UPPER` | `UPPER(text)` | `text: string` | string | `UPPER("hello")` → `"HELLO"` | `UPPER({name})` |
| `LOWER` | `LOWER(text)` | `text: string` | string | `LOWER("HELLO")` → `"hello"` | `LOWER({name})` |
| `CONCAT` | `CONCAT(str1, str2, ...)` | `str1, str2, ...: string` | string | `CONCAT("Hello", " ", "World")` → `"Hello World"` | `CONCAT({name}, "you")` |
| `LENGTH` | `LENGTH(text)` | `text: string` | number | `LENGTH("hello")` → `5` | `LENGTH({name})` |
| `TRIM` | `TRIM(text)` | `text: string` | string | `TRIM(" hello ")` → `"hello"` | `TRIM({name})` |
| `SUBSTRING` | `SUBSTRING(text, start, length)` | `text: string`, `start: number`, `length: number` (optional) | string | `SUBSTRING("hello", 1, 3)` → `"ell"` | `SUBSTRING({name}, 1, 3)` |

### Date Functions

Date functions read or transform a date value. `TODAY` takes no arguments and returns the current date as a string; `AGE` and `DATEDIFF` return numbers (years and days respectively); `DATEFORMAT`, `ADDDAYS`, and `SUBDAYS` return a date string.

| Function | Syntax | Parameters | Returns | Example | Usage |
| --- | --- | --- | --- | --- | --- |
| `TODAY` | `TODAY()` | none | string (date) | `TODAY()` → `"05/25/2026"` | `{date} == TODAY() ? "yes" : "no"` |
| `AGE` | `AGE(birthDate)` | `birthDate: Date \| string` | number | `AGE("2000-01-15")` → `26` | `AGE({date})` |
| `DATEFORMAT` | `DATEFORMAT(date, format)` | `date: Date \| string`, `format: string` | string | `DATEFORMAT({birthDate}, "yyyy-MM-dd")` | `DATEFORMAT({date}, "yyyy-MM-dd")` |
| `DATEDIFF` | `DATEDIFF(date1, date2)` | `date1: Date \| string`, `date2: Date \| string` | number (days) | `DATEDIFF({startDate}, {endDate})` → `30` | `DATEDIFF({startDate}, {endDate})` |
| `ADDDAYS` | `ADDDAYS(date, days)` | `date: Date \| string`, `days: number` | string (date) | `ADDDAYS({date}, 5)` → date + 5 days | `ADDDAYS({date}, 5)` |
| `SUBDAYS` | `SUBDAYS(date, days)` | `date: Date \| string`, `days: number` | string (date) | `SUBDAYS({date}, 5)` → date − 5 days | `SUBDAYS({date}, 5)` |
