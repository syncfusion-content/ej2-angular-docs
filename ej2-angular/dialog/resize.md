---
layout: post
title: Resizing in Angular Dialog | Syncfusion
description: Enable resizing on the Syncfusion Angular Dialog by setting enableResize to true and choosing the allowed resize handles and target container.
platform: ej2-angular
control: Resize 
documentation: ug
domainurl: ##DomainURL##
---

# Resizing in Angular Dialog

The Dialog supports resizing. Drag the resize handle (the small grip at the bottom-right corner) to resize the dialog in any of the enabled directions within the target container.

Create a resizable dialog by setting the [enableResize](https://ej2.syncfusion.com/angular/documentation/api/dialog/index-default#enableresize) property to `true`. This allows you to change the dialog size dynamically and view content in expanded mode. The [resizeHandles](https://ej2.syncfusion.com/angular/documentation/api/dialog/index-default#resizehandles) property configures the directions in which the dialog can be resized. When you set the target property along with [enableResize](https://ej2.syncfusion.com/angular/documentation/api/dialog/index-default#enableresize), the dialog resizes within the specified target container.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dialog/getting-started-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/getting-started-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/getting-started-cs9" %}
