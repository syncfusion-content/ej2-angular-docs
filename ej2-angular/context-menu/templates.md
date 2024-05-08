---
layout: post
title: Templates in Angular Context menu component | Syncfusion
description: Learn here all about Templates in Syncfusion Angular Context menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Templates 
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Angular Context menu component

## Template

The ContextMenu items can be customized using the [`beforeItemRender`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#beforeitemrender) property. The item render event triggers while rendering each menu item. The event argument will be used to identify the menu item and customized it based on the requirement. In the following sample, the menu item is rendered with keycode for specified action in ContextMenu using the template. Here, the keycode is specified for Save as, View page source, and Inspect in the right side corner of the menu items by adding span element in the [`beforeItemRender`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#beforeitemrender) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/template-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/template-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/template-cs4" %}

> To create span element, `createElement` utility function used from `ej2-base`.

## Multilevel nesting

The Multiple level nesting supports in ContextMenu. It can be achieved by mapping the [`items`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/menuItemModel#items) property inside the parent [`menuItems`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#items). In the following sample, three level nesting of ContextMenu is provided.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/template-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/template-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/template-cs5" %}

> To open sub menu items only on click, [`showItemOnClick`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#showitemonclick) property should be set as `true`.

## See Also

* [Populate menu items with data source](./how-to/populate-menu-items-with-data-source)
