---
layout: post
title: Animation in Angular Drop down button component | Syncfusion
description: Learn here all about Animation in Syncfusion Angular Drop down button component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Animation 
documentation: ug
domainurl: ##DomainURL##
---

# Animation in Angular Drop down button component

The [`animationSettings`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button/#animationsettings) property is used to customize the animation of the DropDownButton popup. The supported effects for DropDownButton are,

| Effect | Functionality |
| ------------ | ----------------------- |
| None | Specifies the Dropdown popup transform with no animation effect. |
| SlideDown | Specifies the Dropdown popup transform with slide down effect. |
| ZoomIn | Specifies the Dropdown popup transform with zoom in effect. |
| FadeIn | Specifies the Dropdown popup transform with fade in effect. |

In this sample, three different DropDownButtons are rendered, each showcasing a unique animation effect for the dropdown menu:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/drop-down-button/animation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/drop-down-button/animation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/drop-down-button/animation-cs1" %}