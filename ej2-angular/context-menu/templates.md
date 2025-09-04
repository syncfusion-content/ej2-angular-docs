---
layout: post
title: Templates in Angular Context menu component | Syncfusion
description: Learn here all about Templates in Syncfusion Angular Context menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Context Menu 
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Angular Context menu component

## Item template

The [itemTemplate](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#itemtemplate) property in the ContextMenu component allows you to define custom templates for displaying menu items. This feature enables you to customize the appearance, layout, and content of menu items beyond the default text-based display. Use item templates when you need to include icons, formatted text, additional metadata, or complex HTML structures within menu items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/template-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/template-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/template-cs6" %}

## Customize specific menu items

ContextMenu items can be customized using the [`beforeItemRender`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#beforeitemrender) event. This event triggers while rendering each menu item, providing access to the item element and menu item data for customization based on specific requirements. The following example demonstrates how to add keyboard shortcuts to specific menu items by appending span elements during the rendering process.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/template-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/template-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/template-cs4" %}

> To create span elements, the `createElement` utility function from `@syncfusion/ej2-base` is used.

## Multi-level nesting

The ContextMenu component supports multiple levels of nesting for creating hierarchical menu structures. Achieve this by mapping the [`items`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/menuItemModel/#items) property within parent [`menuItems`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#items). The following example demonstrates a three-level nested ContextMenu structure.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/template-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/template-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/template-cs5" %}

> To open sub menu items only on click, set the [`showItemOnClick`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#showitemonclick) property to `true`.

## See Also

* [Populate menu items with data source](./how-to/populate-menu-items-with-data-source)