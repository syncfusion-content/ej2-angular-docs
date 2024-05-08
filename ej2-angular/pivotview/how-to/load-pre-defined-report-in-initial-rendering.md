---
layout: post
title: Load desired report from the report list as default in Angular Pivotview component
description: Learn here all about Load desired report from the report list as default in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Load desired report from the report list as default 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->
# Load desired report from the report list as default in Angular Pivotview component

By default, the pivot table is displayed with the report bound at the code-behind. To load a desired report from the previously saved report collection during initial rendering, set the desired report name in the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#databound) event, along with the additional report-based customization code shown below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs317/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs317/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs317" %}