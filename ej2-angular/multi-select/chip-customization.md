---
layout: post
title: Chip customization in Angular Multi select component | Syncfusion
description: Learn here all about Chip customization in Syncfusion Angular Multi select component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Chip customization 
documentation: ug
domainurl: ##DomainURL##
---

# Chip customization in Angular Multi select component

The MultiSelect allows the user to customize the selected chip element through the [`tagging`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#tagging) event. In that event, you can set the custom classes to chip element via that event argument of `setClass` method.

The following sample demonstrates chip-customization with the MultiSelect component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/chip-customization-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/chip-customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/chip-customization-cs1" %}