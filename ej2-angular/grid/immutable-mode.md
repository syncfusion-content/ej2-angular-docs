---
layout: post
title: Immutable mode in Angular Grid component | Syncfusion
description: Learn here all about Immutable mode in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Immutable mode 
documentation: ug
domainurl: ##DomainURL##
---

# Immutable mode in Angular Grid component

The immutable mode optimizes the Grid re-rendering performance by using the object reference and [`deep compare`](https://dmitripavlutin.com/how-to-compare-objects-in-javascript/#4-deep-equality) concept. When performing the Grid actions, it will only re-render the modified or newly added rows and prevent the re-rendering of the unchanged rows.

To enable this feature, you have to set the [`enableImmutableMode`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enableImmutableMode) property as **true**.

> This feature uses the primary key value for data comparison. So, you need to provide the [`isPrimaryKey`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isprimarykey) column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/immutable-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% include code-snippet/grid/immutable-cs1/src/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/immutable-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/immutable-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/immutable-cs1" %}

## Limitations

The following features are not supported in the immutable mode:

* Frozen rows and columns
* Row Template
* Detail Template
* Hierarchy Grid
* Column reorder
* Virtual scroll
* Infinite scroll
* Grouping

## See also

* [How to update data without re-rendering an entire Grid](https://www.syncfusion.com/blogs/post/how-to-update-data-without-rerendering-an-entire-grid-in-angular.aspx)
