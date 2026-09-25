---
layout: post
title: How to preselect the items in Angular Chips | Syncfusion
description: Preselect Angular Chips by setting the selectedChips property with the indexes of the chips that should be selected.
platform: ej2-angular
control: Preselect the items 
documentation: ug
domainurl: ##DomainURL##
---

# How to preselect the items in Angular Chips

You can preselect the items in the Angular Chips component by utilizing the [selectedChips](https://ej2.syncfusion.com/angular/documentation/api/chips/index-default#selectedchips) property. We have to assign the required Chips index value to the [selectedChips] property. 

The following example shows how to preselect the items.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/chips/preselect-items-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/preselect-items-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.html" %}
{% include code-snippet/chips/preselect-items-cs1/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/preselect-items-cs1" %}