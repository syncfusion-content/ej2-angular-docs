---
layout: post
title: How to add min and max buttons in Angular Dialog | Syncfusion
description: Add custom minimize and maximize buttons to the Syncfusion Angular Dialog header using the headerTemplate property and click event handlers.
platform: ej2-angular
control: Add a minimize maximize buttons 
documentation: ug
domainurl: ##DomainURL##
---

# How to add minimize and maximize buttons in Angular Dialog

The Angular Dialog component enables users to minimize or maximize the dialog window. Add minimize and maximize custom buttons near the close icon in the dialog header using the [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/dialog/index-default#headertemplate) property, and handle button click events as shown in the following sample.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dialog/dlg-minimize-maximize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-minimize-maximize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dlg-minimize-maximize-cs1" %}