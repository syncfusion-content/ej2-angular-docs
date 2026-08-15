---
layout: post
title: How to customize popup width in Angular Dropdown Menu | Syncfusion
description: Set a fixed width for Angular Dropdown Menu popup using the popupWidth property in pixels or CSS units.
platform: ej2-angular
control: Customize popup width 
documentation: ug
domainurl: ##DomainURL##
---

# How to customize popup width in Angular Dropdown Menu

The dropdown popup width can be customized using the [popupWidth](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button/#popupwidth) property of the DropDownButton component. By default, the popup's width adjusts based on the content. However, this property allows setting a specific width, ensuring consistency and alignment with design requirements. The width can be specified using common CSS units or as a raw pixel value.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/drop-down-button/popup-width-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/drop-down-button/popup-width-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/drop-down-button/popup-width-cs1" %}