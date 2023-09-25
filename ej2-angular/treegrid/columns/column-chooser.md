---
layout: post
title: Column chooser in Angular Treegrid component | Syncfusion
description: Learn here all about Column chooser in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column chooser 
documentation: ug
domainurl: ##DomainURL##
---

# Column chooser in Angular Treegrid component

The column chooser has options to show or hide the columns dynamically. It can be enabled by defining the
[`showColumnChooser`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#showcolumnchooser) as true.

To get the visible columns programmatically in tree grid, you can use the [`getVisibleColumns`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getvisiblecolumns) method. In this method, you can get the visible columns in the UI.

To get the visible records programmatically in tree grid, you can use the [`getVisibleRecords`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getvisiblerecords) method. In this method, you can get the visible records in the UI.

To use column chooser, inject **ColumnChooserService** in the provider section of **AppModule**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-chooser-cs1" %}

## Open column chooser by external button

The Column chooser can be displayed on a page through an external button by invoking
the [`openColumnChooser`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#opencolumnchooser) method with **X** and **Y** axes positions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-chooser-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-chooser-cs2" %}