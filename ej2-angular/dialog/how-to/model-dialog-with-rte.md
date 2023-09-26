---
layout: post
title: Model dialog with rte in Angular Dialog component | Syncfusion
description: Learn here all about Model dialog with rte in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Model dialog with rte 
documentation: ug
domainurl: ##DomainURL##
---

# Model dialog with rte in Angular Dialog component

This section explains how to render model dialog with the Rich Text Editor component. when you render model dialog with the Rich Text Editor component, the first row of the content will be hidden because the dialog container and its wrapper elements are styled with display as none. so, the editor’s toolbar does not get proper offset width and rendered above the edit area container. In this scenario, we could use the `refreshUI` method on the Dialog `open` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/model-dialog-with-rte-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/dialog/model-dialog-with-rte-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/model-dialog-with-rte-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/model-dialog-with-rte-cs1" %}