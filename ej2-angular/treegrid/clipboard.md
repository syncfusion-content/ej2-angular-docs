---
layout: post
title: Clipboard in Angular TreeGrid component | Syncfusion
description: Learn about clipboard operations in the Syncfusion Angular TreeGrid, including copying, pasting, hierarchy modes, and autofill for rows and cells.
platform: ej2-angular
control: Clipboard 
documentation: ug
domainurl: ##DomainURL##
---

# Clipboard in Angular TreeGrid component

The clipboard feature in the Syncfusion Angular TreeGrid provides options to copy and paste selected rows or cell data.

The following keyboard shortcuts are supported in the TreeGrid for clipboard operations:

| Interaction Keys | Description |
|------------------|-------------|
| <kbd>Ctrl + C</kbd>           | Copies selected rows or cell data to the clipboard. |
| <kbd>Ctrl + Shift + H</kbd>   | Copies selected rows or cell data with headers to the clipboard. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/clipboard-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/clipboard-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/clipboard-cs1" %}

## Copy to clipboard using external buttons

To copy selected rows or cell data to the clipboard with an external button, use the [`copy`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/clipboard/#copy) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/copy-method-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/copy-method-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/copy-method-cs1" %}

## Copy hierarchy modes

The TreeGrid supports several copy hierarchy modes, configurable via the [`copyHierarchyMode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#copyHierarchymode) property:

- **Parent** (default): Copies selected records along with their parent records. If no parent exists, only the selected record is copied.
- **Child**: Copies selected records with their child records. If no child exists, only the selected record is copied.
- **Both**: Copies selected records with both parent and child records. If neither exists, only the selected record is copied.
- **None**: Copies only the selected records.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/clipboard-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/clipboard-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/clipboard-cs2" %}

**Limitation:** Only the current view records are available in the clipboard during copy operations.

## AutoFill

The AutoFill feature allows copying and pasting data to adjacent cells by dragging the autofill icon from the edge of a selected cell group. Enable this feature by setting the [`enableAutoFill`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#enableautofill) property to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs1" %}

> - When `enableAutoFill` is set to true, an autofill icon appears on cell selection.
> - Requires the selection `mode` to be `Cell`, `cellSelectionMode` set to `Box`, and batch editing enabled.

**AutoFill limitations:**

- String values are not parsed to number or date types. Dragging string cells to number fields results in **NaN**; to date fields, an **empty cell** is shown.
- Linear series and sequential data generation are not supported with autofill.

## Paste

Content copied from TreeGrid cells can be pasted into other cells using <kbd>Ctrl + V</kbd>. Programmatic paste operations can be performed using the [`paste`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#paste) method, passing data, row index, and column index parameters.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs2" %}

> - For paste functionality, the selection `mode` must be `Cell`, `cellSelectionMode` must be `Box`, and batch editing should be enabled.

**Paste limitations:**

- String values are not parsed to number or date types. Pasting string data into number cells displays **NaN**; into date cells results in an **empty cell**.

---

For more details, visit the [`Angular TreeGrid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour or explore the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) for usage scenarios and data manipulation demonstrations.
