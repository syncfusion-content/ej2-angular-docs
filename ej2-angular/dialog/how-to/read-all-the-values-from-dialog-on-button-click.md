---
layout: post
title: Read all the values from dialog on button click in Angular Dialog component | Syncfusion
description: Learn here all about Read all the values from dialog on button click in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Read all the values from dialog on button click 
documentation: ug
domainurl: ##DomainURL##
---

# Read dialog values on button click in Angular Dialog component

Read dialog element values by binding an action handler to the footer buttons. The [buttons](https://ej2.syncfusion.com/angular/documentation/api/dialog/#buttons) property provides options to bind events to action buttons.
For detailed information about buttons, refer to the [footer](../template/#footer) section.
The following sample captures the values of input elements within the dialog in the footer button click event and displays the values in a confirmation dialog.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dlg-values-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-values-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dlg-values-cs1" %}