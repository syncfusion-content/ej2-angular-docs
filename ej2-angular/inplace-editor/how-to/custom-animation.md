---
layout: post
title: Custom animation in Angular Inplace editor component | Syncfusion
description: Learn here all about Custom animation in Syncfusion Angular Inplace editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom animation 
documentation: ug
domainurl: ##DomainURL##
---

# Custom animation in Angular Inplace editor component

In popup mode, the **In-place Editor** rendered with the Essential JS 2 `Tooltip` component. You can use tooltip properties and events to customize the popup by configure properties into the [model](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/popupSettings/#model) property inside the [popupSettings](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/popupSettings/) API.

In the following sample, popup animation can be customized by passing animation effect using the `model` property and the dynamic animation effect changes configured from the Essential JS 2 `DropDownList` component `change` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/in-place-editor/custom-animation-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/in-place-editor/custom-animation-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/in-place-editor/custom-animation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/in-place-editor/custom-animation-cs1" %}