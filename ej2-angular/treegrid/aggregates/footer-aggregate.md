---
layout: post
title: Footer aggregate in Angular Treegrid component | Syncfusion
description: Learn here all about Footer aggregate in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Footer aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Footer aggregate in Angular Treegrid component

Footer aggregate value is calculated for all the rows, and it is displayed in the footer cells. Use the [`footerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#footertemplate) property to render the aggregate value in footer cells.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/aggregate-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/aggregate-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/aggregate-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/aggregate-cs3" %}

> The aggregate values must be accessed inside the template using their corresponding [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#type) name.
> Get the footer content element by using [`getFooterContent`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getfoootercontent) method in the tree grid.
> Get the footer content table element by using [`getFooterContenTable`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getfootercontenttable) method in the tree grid.

## How to format aggregate value

You can format the aggregate value result by using the [`format`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#type) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/aggregate-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/aggregate-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/aggregate-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/aggregate-cs4" %}