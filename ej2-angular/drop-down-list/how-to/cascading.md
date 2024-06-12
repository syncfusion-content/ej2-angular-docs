---
layout: post
title: Cascading in Angular Dropdown List Component | Syncfusion
description: Learn here all about cascading in Syncfusion Essential Angular Dropdown List component, it's elements and more details.
platform: ej2-angular
control: Cascading 
documentation: ug
domainurl: ##DomainURL##
---

# Cascading in Angular Dropdown List Component

The cascading DropDownList is a series of DropDownList, where the value of one DropDownList depends upon  another's value. This can be configured by using the [`change`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event of the parent DropDownList. Within that change event handler, data has to be loaded to the child DropDownList based on the selected value of the parent DropDownList.

To get started quickly with cascading in angular DropDownList component, you can check the video below.

{% youtube "https://www.youtube.com/watch?v=4XwHXuLuovo" %}

The following example, shows the cascade behavior of country, state, and city
DropDownList. Here, the `dataBind` method is used to reflect the property changes immediately to the DropDownList.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/cascading-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/dropdownlist/cascading-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/cascading-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="cascading.html" %}
{% include code-snippet/dropdownlist/cascading-cs1/src/cascading.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/cascading-cs1" %}