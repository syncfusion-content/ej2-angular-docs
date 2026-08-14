---
layout: post
title: How to change caret icon in Angular Dropdown Menu | Syncfusion
description: Swap the Angular Dropdown Menu caret icon on popup open and close using beforeOpen and beforeClose events.
platform: ej2-angular
control: Change caret icon 
documentation: ug
domainurl: ##DomainURL##
---

# How to change caret icon in Angular Dropdown Menu

Dropdown arrow can be customized on popup open and close. It can be handled in
[`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button/#beforeopen) and[`beforeClose`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button/#beforeclose) event.

In the following example, the up arrow is updated on popup close and down arrow is updated on popup open using `beforeOpen` and `beforeClose` event by adding and removing
`e-caret-up` class.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/drop-down-button/updown-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/drop-down-button/updown-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/drop-down-button/updown-cs1" %}