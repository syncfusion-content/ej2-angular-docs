---
layout: post
title: Position popup open in Angular Dropdown Menu | Syncfusion
description: Change Angular Dropdown Menu popup open position by setting top and left values in the open event.
platform: ej2-angular
control: Position popup open 
documentation: ug
domainurl: ##DomainURL##
---

# How to position popup open in Angular Dropdown Menu

Popup open position can be changed according to the requirement. Popup open position can be changed in [`open`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button/#open) event by setting `top` and `left` for the popup element.

In the following example, the `top` position of the popup element is changed in `open` event.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/drop-down-button/position-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/drop-down-button/position-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/drop-down-button/position-cs1" %}