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

The MultiSelect component allows customization of selected chip elements through the [`tagging`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#tagging) event. This event provides access to the `setClass` method via the event arguments, enabling the application of custom CSS classes to individual chip elements.

The following sample demonstrates chip customization with the MultiSelect component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/chip-customization-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/chip-customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/chip-customization-cs1" %}