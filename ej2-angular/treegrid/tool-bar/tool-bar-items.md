---
layout: post
title: Tool bar items in Angular TreeGrid component | Syncfusion
description: Learn about configuring built-in and custom toolbar items in the Syncfusion Angular TreeGrid component, including actions, alignment, and best practices.
platform: ej2-angular
control: Tool bar items
documentation: ug
domainurl: ##DomainURL##
---

# Tool bar items in Angular TreeGrid component

## Built-in toolbar items

Built-in toolbar items perform standard TreeGrid actions and can be added by setting the [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbar) property to a collection of built-in item names. Each built-in item renders as a button with an icon and text.

The following table lists available built-in toolbar items and their corresponding actions:

| Built-in Toolbar Item | Action |
|----------------------|--------|
| ExpandAll            | Expands all rows. |
| CollapseAll          | Collapses all rows. |
| Add                  | Adds a new record. |
| Edit                 | Edits the selected record. |
| Update               | Updates the edited record. |
| Delete               | Deletes the selected record. |
| Cancel               | Cancels the edit state. |
| Search               | Searches records by the provided key. |
| Print                | Prints the TreeGrid. |
| ColumnChooser        | Opens a dialog to select column visibility.|
| ExcelExport          | Exports the TreeGrid to Excel. |
| PdfExport            | Exports the TreeGrid to PDF. |
| WordExport           | Exports the TreeGrid to Word. |
| Indent               | Increases the hierarchy level of a record. |
| Outdent              | Decreases the hierarchy level of a record. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs38/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs38/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs38" %}

> * The [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbar) property supports both built-in and custom toolbar items.

## Custom toolbar component in a specific position

By default, custom toolbar items are positioned on the left. Change their position using the [`align`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel/#align) property. In the following example, the Collapse All toolbar item is aligned to the right and Expand All to the left.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/custom-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/custom-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/custom-toolbar-cs1" %}