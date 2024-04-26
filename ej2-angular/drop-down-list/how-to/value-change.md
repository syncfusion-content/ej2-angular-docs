---
layout: post
title: Value change in Angular Drop down list component | Syncfusion
description: Learn here all about Value change in Syncfusion Angular Drop down list component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Value change 
documentation: ug
domainurl: ##DomainURL##
---

# Value change in Angular Drop down list component

You can check about whether value change happened by manual or programmatic by
using [`change`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event argument that argument name is `isInteracted`.

The following example demonstrate, how to check whether value change happened by manual or programmatic.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
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