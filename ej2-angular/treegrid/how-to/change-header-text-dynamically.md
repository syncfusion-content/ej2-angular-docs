---
layout: post
title: Change header text dynamically in Angular Treegrid component | Syncfusion
description: Learn here all about Change header text dynamically in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Change header text dynamically 
documentation: ug
domainurl: ##DomainURL##
---

# Change header text dynamically in Angular Treegrid component

You can change the column [`headerText`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#headertext) dynamically through an external button.

Follow the given steps to change the header text dynamically:

**Step 1**:

Get the column object corresponding to the field name by using the [`getColumnByField`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnbyfield) method.
Then change the header Text value.

```typescript
      /** get the JSON object of the column corresponding to the field name */
      const column = this.treegridObj.getColumnByField("Duration");
      /** assign a new header text to the column */
      column.headerText = "Changed Text";
```

**Step 2**:

To reflect the changes in the Tree Grid header, invoke the [`refreshColumns`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#refreshcolumns) method.

```typescript

      this.treegridObj.refreshColumns();

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/refresh-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/refresh-cs3" %}

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.
