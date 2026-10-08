---
layout: post
title: Angular Grid Formula Editor | Syncfusion
description: Learn how the default formula editor works in Angular Data Grid and how to allow or prevent editing in formula-enabled columns.
platform: ej2-angular
control: Formula
documentation: ug
domainurl: ##DomainURL##
---

# Formula Editor in Angular Data Grid

The formula editor is used for editing values in formula-enabled columns. Opening a formula cell for editing through this default editor reveals the underlying expression, converted into column-letter and row-number notation, while the calculated value is displayed when editing is complete.

## Enabling default editor

To enable formula editing, register the `EditModule`, set [editSettings.allowEditing](../../api/grid/editsettingsmodel#allowediting) to `true`, enable formulas through set [allowFormula](../../api/grid/column#allowformula) to `true` for the required columns.

The default editor is automatically available for formula-enabled columns in an editable grid. Opening a formula-enabled cell for editing displays the formula expression in column-letter and row-number notation, such as **=D1*E1**.

Cells and ranges referenced by the formula are highlighted while editing. Selecting another cell inserts or updates a reference in the expression. The highlights are removed when editing ends.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/formula-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="main.ts" %}
{% include code-snippet/grid/formula-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/formula-cs3" %}

## Preventing formula cell editor

Editing can be disabled for a formula-enabled column by setting `allowEditing` to `false` on that column. The column still evaluates formulas and displays calculated results, but the user cannot directly edit the formula value from the grid UI.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/formula-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="main.ts" %}
{% include code-snippet/grid/formula-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/formula-cs5" %}

## See also

- [Formulas](./formula)
- [Formula reference](./formula-reference)
- [Custom formula functions](./custom-formula)
- [Editing](../editing/cell-editing)