---
layout: post
title: Resize in Angular Dialog component | Syncfusion
description: Learn here all about Resize in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Resize 
documentation: ug
domainurl: ##DomainURL##
---

# Resize in Angular Dialog component

The Dialog supports resizing. Resize the dialog by selecting and dragging its handle (grip) or any of its edges or borders within the container.

Create a resizable dialog by setting the [enableResize](https://ej2.syncfusion.com/angular/documentation/api/dialog/#enableresize) property to `true`. This allows you to change the dialog size dynamically and view content in expanded mode. The [resizeHandles](https://ej2.syncfusion.com/angular/documentation/api/dialog/#resizehandles) property configures the directions in which the dialog can be resized. When you set the target property along with [enableResize](https://ej2.syncfusion.com/angular/documentation/api/dialog/#enableresize), the dialog resizes within the specified target container.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/getting-started-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/getting-started-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/getting-started-cs9" %}
