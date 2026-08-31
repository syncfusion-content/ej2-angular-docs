---
layout: post
title: How to detect value change source in Angular Dropdown List | Syncfusion®
description: Detect whether an Angular Dropdown List value change came from user interaction or code, using the change event isInteracted flag.
platform: ej2-angular
control: Value change 
documentation: ug
domainurl: ##DomainURL##
---

# How to detect value change source in Angular Dropdown List

You can check whether value change happened by manually or programmatically by
using [`change`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#change) event argument whose name is `isInteracted`.

The following example demonstrates how to check whether value change happened by manually or programmatically.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dropdownlist/manual-programmatic-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/manual-programmatic-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/dropdownlist/manual-programmatic-cs1/src/template.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/manual-programmatic-cs1" %}