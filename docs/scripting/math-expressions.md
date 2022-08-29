---
sidebar_position: 3
---

import ScriptEventPreview from '@site/src/components/ScriptEventPreview';

# Math Expressions

The [Evaluate Math Expression](/docs/scripting/script-glossary/math#evaluate-math-expression) and [If Math Expression](/docs/scripting/script-glossary/math#if-math-expression) events allow mathematical expressions to be used for performing calculations.

<ScriptEventPreview title={"If Math Expression"} fields={[{"key":"expression","label":"Expression","description":"The expression to evaluate.","type":"matharea","rows":5,"placeholder":"e.g. $health >= 0...","defaultValue":""},{"key":"true","label":"True","description":"The script to run if the condition is true.","type":"events"},{"key":"__collapseElse","label":"Else","type":"collapsable","defaultValue":true,"conditions":[{"key":"__disableElse","ne":true}]},{"key":"false","label":"False","description":"The script to run if the condition is false.","conditions":[{"key":"__collapseElse","ne":true},{"key":"__disableElse","ne":true}],"type":"events"}]} />

Expressions allow you to use many mathematical operations such as:
-  `+` add
-  `-` subtract
-  `*` multiply
-  `/` divide
- `==` Equal to
- `!=` Not equal to
- `>=` Greater than or equal to

You are also able to use the following functions
- `min(a, b)` return the minimum of two values a and b
- `max(a, b)` return the maximum of two values a and b
- `abs(a)` return the absolute value of a

You can use variables in expressions by typing `$` and searching for the variable's name.
