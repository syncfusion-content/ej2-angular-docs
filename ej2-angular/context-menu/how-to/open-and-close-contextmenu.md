---
layout: post
title: Open and close contextmenu in Angular Context menu component | Syncfusion
description: Learn here all about Open and close contextmenu in Syncfusion Angular Context menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Open and close contextmenu 
documentation: ug
domainurl: ##DomainURL##
---

# Open and close contextmenu in Angular Context menu component

ContextMenu can be opened and closed programmatically whenever required by using open and close methods.

In the following example, the ContextMenu is opened using the [`open`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#open) method at the specified position using `top` and `left`. Also, ContextMenu is closed using [`close`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#close) method on ContextMenu item click or document click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/how-to-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/how-to-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/how-to-cs1" %}
