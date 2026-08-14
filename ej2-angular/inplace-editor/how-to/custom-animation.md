---
layout: post
title: How to set custom animation in Angular In-place Editor | Syncfusion
description: Set a custom animation effect for the Angular In-place Editor popup mode by configuring the model inside popupSettings with a Tooltip effect.
platform: ej2-angular
control: Custom animation 
documentation: ug
domainurl: ##DomainURL##
---

# How to set custom animation in Angular In-place Editor

In popup mode, the **In-place Editor** rendered with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 `Tooltip` component. You can use tooltip properties and events to customize the popup by configure properties into the [model](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/popupSettings#model) property inside the [popupSettings](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/popupSettings) API.

In the following sample, popup animation can be customized by passing animation effect using the `model` property and the dynamic animation effect changes configured from the Essential<sup style="font-size:70%">&reg;</sup> JS 2 `DropDownList` component `change` event.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/in-place-editor/custom-animation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/in-place-editor/custom-animation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/in-place-editor/custom-animation-cs1" %}