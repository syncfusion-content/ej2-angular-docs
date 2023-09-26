---
layout: post
title: Customize empty value cells in Angular Pivotview component | Syncfusion
description: Learn here all about Customize empty value cells in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize empty value cells 
documentation: ug
domainurl: ##DomainURL##
---

# Customize empty value cells in Angular Pivotview component

You can show the custom string in the empty value cells using the `emptyCellsTextContent` string type property in `dataSourceSettings` object of the pivot table. It can be configured through code behind during initial rendering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs162/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs162/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs162/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs162" %}
