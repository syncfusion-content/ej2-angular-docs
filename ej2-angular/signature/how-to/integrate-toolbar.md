---
layout: post
title: How to integrate toolbar with Angular Signature | Syncfusion
description: Integrate the Angular Toolbar with the Signature component to provide undo, redo, and clear actions with reactive button states.
platform: ej2-angular
control: Integrate toolbar 
documentation: ug
domainurl: ##DomainURL##
---

# How to integrate toolbar with Angular Signature

Integrate a Toolbar with the Signature component to provide undo, redo, and clear functionality. Handle toolbar actions using the `change` event and use the [`canUndo`](https://ej2.syncfusion.com/angular/documentation/api/signature/#canundo), [`canRedo`](https://ej2.syncfusion.com/angular/documentation/api/signature/#canredo), and [`isEmpty`](https://ej2.syncfusion.com/angular/documentation/api/signature/#isempty) methods to manage button states.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/signature/toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/signature/toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/signature/toolbar-cs1" %}