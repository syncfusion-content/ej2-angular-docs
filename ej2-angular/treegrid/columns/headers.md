---
layout: post
title: Headers in Angular Treegrid component | Syncfusion
description: Learn here all about Headers in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Headers 
documentation: ug
domainurl: ##DomainURL##
---

# Headers in Angular Treegrid component

## Header text

By default, column header title is displayed from column [`field`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#field) value. To override the default header title, you have to define the [`headerText`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#headertext) value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs25/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs25/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs25/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs25" %}

> * If both the [`field`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#field) and [`headerText`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#headertext) are not defined in the column, the column renders with “empty” header text.

## Header template

You can customize the header element by using the [`headerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#headerTemplate) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-header-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-header-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-header-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-header-cs1" %}

### Header template for stacked header column

By using the headerTemplate template reference for the ng template, you can customize a stacked header element in the Tree Grid column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-header-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-header-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-header-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-header-cs2" %}

> You can get the header table element by using the [`getHeaderTable`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getheadertable) method in tree grid.
> You can get the column header element by field by using the [`getColumnHeaderByField`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnheaderbyfield) method in tree grid. In this method you need to pass the field name as parameter.
> You can get the column header element by index by using the [`getColumnHeaderByIndex`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnheaderbyindex) method in tree grid. In this method you need to pass the index as parameter.
> You can get the column header element by uid by using the [`getColumnHeaderByUid`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnheaderbyuid) method in tree grid. In this method you need to pass the column header uid as parameter.