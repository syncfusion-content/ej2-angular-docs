---
layout: post
title: Change caret icon in Angular Drop down button component | Syncfusion
description: Learn here all about Change caret icon in Syncfusion Angular Drop down button component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Change caret icon 
documentation: ug
domainurl: ##DomainURL##
---

# Change caret icon in Angular Drop down button component

Dropdown arrow can be customized on popup open and close. It can be handled in
[`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button/#beforeopen) and[`beforeClose`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button/#beforeclose) event.

In the following example, the up arrow is updated on popup close and down arrow is updated on popup open using `beforeOpen` and `beforeClose` event by adding and removing
`e-caret-up` class.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/drop-down-button/updown-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/drop-down-button/updown-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/drop-down-button/updown-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/drop-down-button/updown-cs1" %}