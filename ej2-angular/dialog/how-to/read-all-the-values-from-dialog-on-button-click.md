---
layout: post
title: How to read values on button click in Angular Dialog | Syncfusion
description: Read input values from a Syncfusion Angular Dialog by binding click events to the footer buttons and surfacing the values in a confirmation popup.
platform: ej2-angular
control: Read all the values from dialog on button click 
documentation: ug
domainurl: ##DomainURL##
---

# How to read Dialog values on button click in Angular Dialog

Read dialog element values by binding an action handler to the footer buttons. The [buttons](https://ej2.syncfusion.com/angular/documentation/api/dialog/index-default#buttons) property provides options to bind events to action buttons.
For detailed information about buttons, refer to the [footer](../template#footer) section.
The following sample captures the values of input elements within the dialog in the footer button click event and displays the values in a confirmation dialog.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dialog/dlg-values-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-values-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dlg-values-cs1" %}