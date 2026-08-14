---
layout: post
title: How to open a dialog on popup item click in Angular Split Button | Syncfusion
description: Open a Dialog control when an Angular Split Button popup item is selected using the select event.
platform: ej2-angular
control: Open a dialog on popup item click 
documentation: ug
domainurl: ##DomainURL##
---

# How to open a dialog on popup item click in Angular Split Button

This section explains about how to open a dialog on SplitButton popup item click. This can be achieved by handling dialog open in [`select`](https://ej2.syncfusion.com/angular/documentation/api/split-button#select) event of the SplitButton.

In the following example, Dialog will open while selecting `Update...` item:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/split-button/dialog-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/split-button/dialog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/split-button/dialog-cs1" %}