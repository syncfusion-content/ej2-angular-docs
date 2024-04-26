---
layout: post
title: Custom tool tip for columns in Angular Treegrid component | Syncfusion
description: Learn here all about Custom tool tip for columns in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom tool tip for columns 
documentation: ug
domainurl: ##DomainURL##
---

# Custom tool tip for columns in Angular Treegrid component

You can achieve the custom tooltip([`EJ2 Tooltip`](https://ej2.syncfusion.com/angular/documentation/tooltip/getting-started)) for Tree Grid by using the [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) event.

Render the ToolTip component for the Tree Grid cells by using the following code in the
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

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.