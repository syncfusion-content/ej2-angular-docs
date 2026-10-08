---
layout: post
title: Angular Grid Formula Reference | Syncfusion
description: Reference for supported operators, built-in functions, and formula errors in Angular Data Grid.
platform: ej2-angular
control: Formula
documentation: ug
domainurl: ##DomainURL##
---

# Formula Reference in Angular Data Grid

The formula reference provides the cell reference syntax, supported operators, built-in functions, and error codes available in formula-enabled columns of the Syncfusion Angular Data Grid.

## Operators

The following operators can be used in formula expressions to perform arithmetic and comparison operations.

| Symbol | Description |
| --- | --- |
| `+` | Addition. |
| `-` | Subtraction (and unary negation). |
| `*` | Multiplication. |
| `/` | Division. Dividing by zero raises `#DIV/0!`. |
| `^` | Raises a value to a power. |
| `=` | Equal to comparison. |
| `<>` | Not equal to comparison. |
| `<` | Less than comparison. |
| `>` | Greater than comparison. |
| `<=` | Less than or equal to comparison. |
| `>=` | Greater than or equal to comparison. |
| `%` | Percentage operator. Divides a value by 100. For example, `50%` evaluates to `0.5`. |

> Exponentiation and text concatenation are provided through the `POWER` and `CONCAT` functions rather than through dedicated operators.

## Functions

Formulas support a set of built-in functions that perform calculations, evaluate conditions, manipulate text, and work with dates. The supported functions are organized into the following categories.

### Aggregate and statistical functions

| Function | Description |
| --- | --- |
| `SUM` | Adds a set of values or ranges. |
| `AVERAGE` | Returns the mean of a set of numeric values. |
| `COUNT` | Counts the numeric values in a set. |
| `COUNTA` | Counts the non-empty values in a set. |
| `COUNTBLANK` | Counts the empty values in a set. |
| `COUNTIF` | Counts the values in a range that match a criteria, such as `">10"` or an exact value. |
| `SUMIF` | Adds the values in a range (or an optional separate sum range) where the criteria range matches a criteria. |
| `MEDIAN` | Returns the median of a set of numeric values. |
| `MIN` | Returns the smallest value in a set. |
| `MAX` | Returns the largest value in a set. |
| `PRODUCT` | Multiplies a set of values. |

### Math functions

| Function | Description |
| --- | --- |
| `ABS` | Returns the absolute value of a number. |
| `ROUND` | Rounds a number to an optional number of digits (defaults to zero digits). |
| `MOD` | Returns the remainder after dividing one number by another. |
| `POWER` | Raises a number to a given exponent. |
| `SQRT` | Returns the square root of a number. |
| `RAND`, `RANDOM`, `RAN` | Returns a random number between `0` and `1`. All three names refer to the same function. |

### Logical function

| Function | Description |
| --- | --- |
| `IF` | Evaluates a condition and returns one value when the condition is true and another, optional, value when it is false. |

### Text functions

| Function | Description |
| --- | --- |
| `CONCAT`, `CONCATENATE` | Joins a set of values into a single text value. Both names refer to the same function. |

### Date functions

| Function | Description |
| --- | --- |
| `TODAY`, `NOW` | Returns the current date and time. Both names refer to the same function. |

### Custom functions

Formula settings support custom functions in addition to the built-in functions. Registered custom functions receive a list of resolved argument values, including values expanded from ranges, and return a computed result.

## Error codes

The following error codes are returned when a formula contains invalid references, syntax errors, or other evaluation issues.

| Error | Description |
| --- | --- |
| `#REF!` | Returned when a formula contains an invalid or broken cell reference. |
| `#VALUE!` | Returned when a formula uses a value with an incompatible data type. |
| `#DIV/0!` | Returned when a formula attempts to divide a value by zero. |
| `#CIRCREF!` | Returned when a formula refers back to its own cell, directly or through a chain of other formula cells. |
| `#PARSE!` | Returned when an expression cannot be tokenized or parsed. |
| `#NAME?` | Returned when a formula calls a function name that is not a recognized built-in or registered custom function. |
| `#ERROR!` | Returned when a formula encounters an unspecified error during evaluation. |

## See also

- [Formulas](./formula)
- [Formula Editor](./formula-editor)
- [Custom formula functions](./custom-formula)
- [Editing](../editing/cell-editing)