---
layout: post
title: Change menu items dynamically in Angular Context menu component | Syncfusion
description: Learn here all about Change menu items dynamically in Syncfusion Angular Context menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Change menu items dynamically 
documentation: ug
domainurl: ##DomainURL##
---

# Change menu items dynamically in Angular Context menu component

The items visible in the ContextMenu can be changed dynamically based on the target in which you open the ContextMenu. To achieve this behavior, initialize ContextMenu with all items using [`items`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#items) property and then based on the context you open hide/show required items using [`hideItems`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#hideitems)/ [`showItems`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#showitems) method in [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#beforeopen) event.

In the following example, the datasource for Clipboard div is `Cut`, `Copy`, `Paste` and for the Editor div is `Add`, `Edit`, `Delete` is changed on [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#beforeopen) event using [`hideItems`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#hideitems) and [`showItems`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#showitems) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/dynamic-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/context-menu/dynamic-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/dynamic-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/dynamic-cs1" %}
