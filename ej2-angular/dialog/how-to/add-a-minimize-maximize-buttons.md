---
layout: post
title: Add a minimize maximize buttons in Angular Dialog component | Syncfusion
description: Learn here all about Add a minimize maximize buttons in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Add a minimize maximize buttons 
documentation: ug
domainurl: ##DomainURL##
---

# Add a minimize maximize buttons in Angular Dialog component

Angular Dialog allows end users to either minimize or maximize the Dialog component. You can add minimize and maximize custom buttons near the close icon in the Dialog header using the [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/dialog/#headertemplate) property and handle the actions in the button click events, as shown in the following sample.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dlg-minimize-maximize-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/dialog/dlg-minimize-maximize-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-minimize-maximize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dlg-minimize-maximize-cs1" %}