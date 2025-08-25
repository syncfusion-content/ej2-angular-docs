---
layout: post
title: Custom tool tip for columns in Angular TreeGrid component | Syncfusion
description: Learn how to add custom tooltips for columns in the Syncfusion Angular TreeGrid component of Essential JS 2 by using the Tooltip and queryCellInfo event.
platform: ej2-angular
control: Custom tool tip for columns 
documentation: ug
domainurl: ##DomainURL##
---

# Custom tool tip for columns in Angular TreeGrid component

Custom tooltips can be added to columns in the TreeGrid component by using the [`EJ2 Tooltip`](https://ej2.syncfusion.com/angular/documentation/tooltip/getting-started) component in combination with the [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) event.

Render the Tooltip component for TreeGrid cells by using the following code in the
[`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) event.

```typescript

  public tooltip(args: QueryCellInfoEventArgs){
    const tooltip: Tooltip = new Tooltip({
      content: args.data[args.column.field].toString()
    });
    tooltip.appendTo(args.cell as HTMLElement);
  }

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/refresh-cs4" %}

> For more details, refer to the [`Angular TreeGrid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page. You can also view the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.
