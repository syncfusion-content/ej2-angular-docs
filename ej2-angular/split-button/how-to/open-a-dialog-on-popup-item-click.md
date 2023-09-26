---
layout: post
title: Open a dialog on popup item click in Angular Split button component | Syncfusion
description: Learn here all about Open a dialog on popup item click in Syncfusion Angular Split button component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Open a dialog on popup item click 
documentation: ug
domainurl: ##DomainURL##
---

# Open a dialog on popup item click in Angular Split button component

This section explains about how to open a dialog on SplitButton popup item click. This can be achieved by handling dialog open in [`select`](https://ej2.syncfusion.com/angular/documentation/api/split-button#select) event of the SplitButton.

In the following example, Dialog will open while selecting `Update...` item:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/split-button/dialog-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/split-button/dialog-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/split-button/dialog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/split-button/dialog-cs1" %}