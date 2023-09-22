---
layout: post
title: Paging in Angular Grid component | Syncfusion
description: Learn here all about Paging in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Paging 
documentation: ug
domainurl: ##DomainURL##
---

# Paging in Angular Grid component

Paging provides an option to display Grid data in page segments. To enable paging, set the [`allowPaging`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowpaging) to true. When paging is enabled, pager component renders at the bottom of the grid. Paging options can be configured through the [`pageSettings`](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings). In the below sample, [`pageSize`](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagesize) is calculated based on the grid height by using the [`load`](https://ej2.syncfusion.com/angular/documentation/api/grid/#load) event.

To use Paging, you need to inject **PageService** in the provider section of **AppModule**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/paging1-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs5" %}

> You can achieve better performance by using grid paging to fetch only a pre-defined number of records from the data source.

## Template

You can use custom elements inside the pager instead of default elements. The custom elements can be defined by using [`pagerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#template). Inside this template, you can access the [`CurrentPage`](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#currentpage), [`pageSize`](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagesize), [`pageCount`](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagecount), **totalPage** and **totalRecordCount** values.

Inside this template, you can access the [`CurrentPage`](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#currentpage), [`pageSize`](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagesize), [`pageCount`](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagecount),**totalPage** and **totalRecordCount** values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/pager-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% include code-snippet/grid/pager-template-cs1/src/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/pager-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/pager-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/pager-template-cs1" %}

## Pager with Page Size Dropdown

The pager Dropdown allows you to change the number of records in the Grid dynamically. It can be enabled by defining the [`pageSettings.pageSizes`](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagesizes) property as true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/paging1-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs6" %}

## Render Pager at the Top of the Grid

By default, Pager will be rendered at the bottom of the Grid. You can also render the Pager at the top of the Grid by using the [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/paging1-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/paging1-cs7" %}

> During the paging action, the pager component triggers the below three events.
> * The [`created`](https://ej2.syncfusion.com/angular/documentation/api/pager/pagerModel/#created) event triggers when Pager is created.
> * The [`click`](https://ej2.syncfusion.com/angular/documentation/api/pager/pagerModel/#click) event triggers when the numeric items in the pager is clicked.
> * The [`dropDownChanged`](https://ej2.syncfusion.com/angular/documentation/api/pager/pagerModel/#dropdownchanged) event triggers when pageSize DropDownList value is selected.

## See Also

* [Group with Paging](./grouping/grouping/#group-with-paging)
