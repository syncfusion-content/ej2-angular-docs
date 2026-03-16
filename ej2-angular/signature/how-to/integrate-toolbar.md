---
layout: post
title: Integrate toolbar in Angular Signature component | Syncfusion
description: Learn here all about Integrate toolbar in Syncfusion Angular Signature component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Integrate toolbar 
documentation: ug
domainurl: ##DomainURL##
---

# Integrate toolbar in Angular Signature component

Integrate a Toolbar with the Signature component to provide undo, redo, and clear functionality. Handle toolbar actions using the `change` event and use the [`canUndo`](https://ej2.syncfusion.com/angular/documentation/api/signature/#canundo), [`canRedo`](https://ej2.syncfusion.com/angular/documentation/api/signature/#canredo), and [`isEmpty`](https://ej2.syncfusion.com/angular/documentation/api/signature/#isempty) methods to manage button states.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/signature/toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/signature/toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/signature/toolbar-cs1" %}