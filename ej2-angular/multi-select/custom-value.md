---
layout: post
title: Custom value in Angular Multi select component | Syncfusion
description: Learn here all about Custom value in Syncfusion Angular Multi select component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom value 
documentation: ug
domainurl: ##DomainURL##
---

# Custom value in Angular Multi select component

The MultiSelect allows user to add a new non-present option to the component value when [`allowCustomValue`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#allowcustomvalue) is enabled. while selecting the new custom value [`customValueSelection`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#customvalueselection) event will be triggered.

The following sample demonstrates configuration of custom value support with the MultiSelect component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/getting-started-cs2" %}