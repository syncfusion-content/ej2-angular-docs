---
layout: post
title: Angular Grid Customize Pager Drop Down | Syncfusion
description: Learn how to customize pager drop down values in Angular Data Grid using the pageSizes property to provide flexible page size options.
platform: ej2-angular
control: Customize pager drop down 
documentation: ug
domainurl: ##DomainURL##
---

# Customize Pager Drop Down in Angular Data Grid

You can customize the default values available in the pager dropdown of the Syncfusion Angular Grid by defining the [`pageSizes`](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettingsModel/#pagesizes) property as an array of strings or numbers within the Grid's `pageSettings` configuration. This property determines the selectable page size options in the pager dropdown, allowing you to tailor the Grid’s pagination experience to your application's needs.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-column-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-column-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-column-cs4" %}
