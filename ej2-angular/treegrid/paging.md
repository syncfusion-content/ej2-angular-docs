---
layout: post
title: Paging in Angular Treegrid component | Syncfusion
description: Learn here all about Paging in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Paging 
documentation: ug
domainurl: ##DomainURL##
---

# Paging in Angular Treegrid component

Paging provides an option to display TreeGrid data in page segments. To enable paging, set the [`allowPaging`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowpaging) to true. When paging is enabled, pager component renders at the bottom of the treegrid.
Paging options can be configured through the [`pageSettings`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#pagesettings).

To use paging, inject the [`Page`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#pagermodule) module in the treegrid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/page-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/page-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/page-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/page-cs1" %}

> You can achieve better performance by using treegrid paging to fetch only a pre-defined number of records from the data source.
> You can navigate to the target pages programmatically by passing the page number into the [`goToPage`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#gotopage) method in the tree grid.

## Page Size Mode

Two behaviors are available in TreeGrid paging to display certain number of records in a current page. Following are the two types of [`pageSizeMode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettingsModel/#pagesizemode).

* **All** : This is the default mode. The number of records in a page is based on [`pageSize`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettingsModel/#pagesize) property.
* **Root** : The number of root nodes or the 0th level records to be displayed per page is based on [`pageSize`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettingsModel/#pagesize) property.

With [`pageSizeMode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettingsModel/#pagesizemode) property as `Root`, only the root level or the 0th level records are considered in records count.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/page-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/page-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/page-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/page-cs2" %}

## Template

You can use custom elements inside the pager instead of default elements.
The custom elements can be defined by using the [`template`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettingsModel/#template) property.
Inside this template, you can access the [`currentPage`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettingsModel/#currentpage), [`pageSize`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettingsModel/#pagesize), [`pageCount`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettingsModel/#pagecount), `totalPage` and `totalRecordCount` values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/pager-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/pager-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/pager-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/pager-template-cs1" %}

## Pager with Page Size Dropdown

The pager Dropdown allows you to change the number of records in the TreeGrid dynamically. It can be enabled by defining the [`pageSettings.pageSizes`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/pageSettingsModel/#pagesizes) property as true.

```typescript
pageSettings: {pageSize: 7, pageSizes: true},
```

![Page size dropdown](images/pagesizes.png)

## How to render Pager at the Top of the TreeGrid

By default, Pager will be rendered at the bottom of the TreeGrid. You can also render the Pager at the top of the TreeGrid by using the `dataBound` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/page-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/page-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/page-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/page-cs3" %}

> During the paging action, the pager component triggers the below three events.
> * The `created` event triggers when Pager is created.
> * The `click` event triggers when the numeric items in the pager is clicked.
> * The `dropDownChanged` event triggers when pageSize DropDownList value is selected.
> * You can get the pager element by [`getPager`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getpager) method in the tree grid.
> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.