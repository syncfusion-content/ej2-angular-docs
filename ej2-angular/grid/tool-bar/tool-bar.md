---
layout: post
title: Tool bar in Angular Grid component | Syncfusion
description: Learn here all about Tool bar in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tool bar 
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar in Angular Grid component

The toolbar in the Syncfusion Angular Grid component provides efficient access to data manipulation and export actions such as adding, editing, and deleting records, as well as exporting and importing Grid data in formats like Excel, CSV, or PDF.

Enable the toolbar by injecting **ToolbarService** in the provider section of your **AppModule**. The service provides methods for interacting with toolbar items. Toolbar options are customized using the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) property, which accepts an array of built-in item names (as strings) or custom toolbar items defined with [ItemModel](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel/) objects.

The following example shows how to configure toolbar items in the grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbar-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbar-cs2" %}

## Enable or Disable Toolbar Items

Dynamically enable or disable toolbar items to control user actions based on application logic. Use the [enableToolbarItems](https://ej2.syncfusion.com/angular/documentation/api/grid/#enabletoolbaritems) method to toggle availability of specific toolbar items as needed.

The example below demonstrates how to use the [EJ2 Toggle Switch Button component](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) to enable or disable toolbar items with the `enableToolbarItems` method. Toggling the switch triggers its [change](https://ej2.syncfusion.com/angular/documentation/api/switch/#change) event to update toolbar item states.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbar-enable-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-enable-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbar-enable-cs1" %}

## Add Toolbar at the Bottom of the Grid

Placing the toolbar at the bottom of the Syncfusion Angular Grid keeps key actions accessible at all times. Insert the toolbar at the desired location using the [created](https://ej2.syncfusion.com/angular/documentation/api/grid/#created) event.

The sample below demonstrates how to add toolbar items at the bottom using the grid’s `created` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbar-enable-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-enable-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbar-enable-cs2" %}

## Customize Toolbar Buttons Using CSS

You can style built-in toolbar buttons by applying CSS rules, allowing for a customized and cohesive interface. Modify button appearance with the following style:

```css
.e-grid .e-toolbar .e-tbar-btn .e-icons,
.e-grid .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn {
    background: #add8e6;   
}
```

The following example demonstrates application of custom background color styles to the `Add`, `Edit`, `Delete`, `Update`, and `Cancel` toolbar buttons:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbar-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbar-cs3" %}

## See Also

* [Toolbar Component](https://ej2.syncfusion.com/angular/documentation/toolbar/getting-started)
* [How to add a router link in the toolbar in Angular Grid](https://www.syncfusion.com/forums/154693/how-to-add-a-router-link-in-the-toolbar-in-angular-grid)
* [How to show or hide the delete button in the toolbar in Angular Grid](https://www.syncfusion.com/forums/158052/how-to-show-or-hide-the-delete-button-in-the-toolbar-in-angular-grid)
* [How to display column as radio button in dialog editing in Angular Grid](https://www.syncfusion.com/forums/153052/how-to-display-column-as-radio-button-in-dialog-editing-in-angular-grid)
