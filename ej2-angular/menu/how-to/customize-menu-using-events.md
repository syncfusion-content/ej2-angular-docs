---
layout: post
title: Customize menu using events in Angular Menu component | Syncfusion
description: Learn here all about Customize menu using events in Syncfusion Angular Menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Menu
documentation: ug
domainurl: ##DomainURL##
---

# Customize menu using events in Angular Menu component

This section demonstrates how to customize the behavior of the Angular Menu component using events such as `beforeOpen`, `beforeClose`, `onOpen`, `onClose`, `select`, and `created`. These events allow dynamic modification of menu behavior, such as altering submenu content or handling item selection.

The following table summarizes the available events and their purposes:

| Event | Event Argument | Purpose |
|-------|----------------|---------|
| [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/menu/#beforeopen) | `BeforeOpenCloseMenuEventArgs` | Triggered before a submenu opens, allowing modification of content (cancelable with `args.cancel = true`). |
| [`beforeClose`](https://ej2.syncfusion.com/angular/documentation/api/menu/#beforeclose) | `BeforeOpenCloseMenuEventArgs` | Triggered before a submenu closes, allowing cancellation with `args.cancel = true`. |
| [`onOpen`](https://ej2.syncfusion.com/angular/documentation/api/menu/#onopen) | `OpenCloseMenuEventArgs` | Triggered after a submenu opens, useful for post-open adjustments. |
| [`onClose`](https://ej2.syncfusion.com/angular/documentation/api/menu/#onclose) | `OpenCloseMenuEventArgs` | Triggered after a submenu closes, useful for cleanup tasks. |
| [`select`](https://ej2.syncfusion.com/angular/documentation/api/menu/#select) | `MenuEventArgs` | Triggered when a menu item is selected, enabling custom navigation or actions. |
| [`created`](https://ej2.syncfusion.com/angular/documentation/api/menu/#created) | `Event` | Triggered after the Menu is initialized, useful for setup tasks. |

This example renders a menu with custom event handling for item selection.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/handle-event-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/handle-event-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/handle-event-cs1" %}
