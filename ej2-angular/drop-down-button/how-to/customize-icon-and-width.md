---
layout: post
title: Customize icon and width in Angular Dropdown Menu | Syncfusion
description: Customize Angular Dropdown Menu icon position, button width, and icon size using cssClass and iconPosition.
platform: ej2-angular
control: Customize icon and width 
documentation: ug
domainurl: ##DomainURL##
---

# How to customize icon and width in Angular Dropdown Menu

Width of the DropDownButton can be customized by setting required width to the dropdown element.

The following UI can be achieved by setting [`iconPosition`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button/#iconposition) as `Top`, width as `85px`
and size of the font icon as `40px` by adding `e-custom` class.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/drop-down-button/custom-width-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/drop-down-button/custom-width-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/drop-down-button/custom-width-cs1" %}