---
layout: post
title: Change header text dynamically in Angular TreeGrid component | Syncfusion
description: Learn how to change the header text dynamically in the Syncfusion Angular TreeGrid component of Essential JS 2, including step-by-step instructions and API usage.
platform: ej2-angular
control: Change header text dynamically 
documentation: ug
domainurl: ##DomainURL##
---

# Change header text dynamically in Angular TreeGrid component

You can change the column [`headerText`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#headertext) dynamically through an external button.

Follow the steps below to change the header text dynamically:

**Step 1**:

Get the column object corresponding to the field name by using the [`getColumnByField`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnbyfield) method.
Then change the header Text value.

```typescript
/** Get the JSON object of the column corresponding to the field name */
const column = this.treegridObj.getColumnByField("Duration");
/** Assign a new header text to the column */
column.headerText = "Changed Text";
```

**Step 2**:

Invoke the [`refreshColumns`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#refreshcolumns) method to apply and reflect the changes in the TreeGrid header.

```typescript
this.treegridObj.refreshColumns();
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/refresh-cs3" %}

> For additional details, refer to the [`Angular TreeGrid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page. Visit the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to learn more about presenting and manipulating data.
