---
layout: post
title: Tooltip open or display modes in Angular Tooltip component | Syncfusion
description: Learn here all about Tooltip open or display modes in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip open or display modes 
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip open or display modes in Angular Tooltip component

The open mode property of tooltip can be defined on a target that is hovering, focusing, or clicking.
Tooltip component have the following types of open mode:

    * Auto
    * Hover
    * Click
    * Focus
    * Custom

** Auto **

Tooltip appears when you hover over the target or when the target element receives the focus.

** Hover **

Tooltip appears when you hover over the target.

** Click **

Tooltip appears when you click a target element.

** Focus **

Tooltip appears when you focus (say through tab key) on a target element.

** Custom **

Tooltip is not triggered by any default action. So, bind your own events and use either open or close public methods.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/open-mode-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/open-mode-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/open-mode-cs2" %}
