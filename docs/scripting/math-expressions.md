---
sidebar_position: 5
---

import ScriptEventPreview from '@site/src/components/ScriptEventPreview';

# Math Expressions

The [Evaluate Math Expression](/docs/scripting/script-glossary/math#evaluate-math-expression) and [If Math Expression](/docs/scripting/script-glossary/math#if-math-expression) events as well as any events supporting [Script Values](/docs/scripting/script-values) allow mathematical expressions to be used for performing calculations.

<ScriptEventPreview title={"If Math Expression"} fields={[{"key":"expression","label":"Expression","description":"The expression to evaluate.","type":"matharea","rows":5,"placeholder":"e.g. $health >= 0...","defaultValue":""},{"key":"true","label":"True","description":"The script to run if the condition is true.","type":"events"},{"key":"**collapseElse","label":"Else","type":"collapsable","defaultValue":true,"conditions":[{"key":"**disableElse","ne":true}]},{"key":"false","label":"False","description":"The script to run if the condition is false.","conditions":[{"key":"__collapseElse","ne":true},{"key":"__disableElse","ne":true}],"type":"events"}]} />

Expressions allow you to use many mathematical operations such as:

- `+` add
- `-` subtract
- `*` multiply
- `/` divide
- `==` equal to
- `!=` not equal to
- `>=` greater than or equal to

You are also able to use the following functions:

- `min(a, b)` return the minimum of two values `a` and `b`
- `max(a, b)` return the maximum of two values `a` and `b`
- `abs(a)` return the absolute value of `a`
- `atan2(a, b)` return the [2-argument arctangent](https://en.wikipedia.org/wiki/Atan2) of `a` and `b`
- `isqrt(a)` return the square root of `a` rounded down to nearest integer
- `rnd(a)` return a random number greater than `0` and less than `a`

You can use variables in expressions by typing `$` and searching for the variable's name.

When you want to combine multiple conditions in your code, you can use boolean logic operators:

- `||` **or**: This operator is used when you want to check if at least one of the conditions is true.  
  For example, if you write `$Local0 == 0 || $Local1 == 0`, it means "if either variable Local0 equals 0 or variable Local1 equals 0".

- `&&` **and**: This operator is used when you want to check if all conditions are true.
  For example, if you write `$Local0 == 0 && $Local1 == 0`, it means "if both variable Local0 equals 0 and variable Local1 equals 0".

- `!` **not**: This operator is used when you want to invert the truth value of a condition.  
  For example, if you write `!($Local0 == 0)`, it means "if variable Local0 does not equal 0".
