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

The toolbar in the Syncfusion Angular Grid component offers several general use cases to enhance data manipulation and overall experience. Actions such as adding, editing, and deleting records within the grid can be performed, providing efficient data manipulation capabilities. The toolbar also facilitates data export and import functionality, allowing you to generate downloadable files in formats like Excel, CSV, or PDF. 

To enable the toolbar functionality, you need to inject the **ToolbarService** in the provider section of your **AppModule**. This service provides the necessary methods to interact with the toolbar items. The toolbar can be customized with built-in toolbar items or custom toolbar items using the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) property. The `toolbar` property accepts an array of strings representing the built-in toolbar items or an array of [ItemModel](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel/) objects for custom toolbar items.

The following example demonstrates how to enable toolbar items in the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbar-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbar-cs2" %}

## Enable or disable toolbar items

Enabling or disabling toolbar items dynamically in Syncfusion Angular Grid is to provide control over the availability of specific functionality based on application logic. This feature allows you to customize the toolbar based on various conditions or individuals interactions. 

You can enable or disable toolbar items dynamically by using the [enableToolbarItems](https://ej2.syncfusion.com/angular/documentation/api/grid/#enabletoolbaritems) method. This method allows you to control the availability of specific toolbar items based on your application logic.

In the following example, the [EJ2 Toggle Switch Button component](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) is added to enable and disable the toolbar items using `enableToolbarItems` method. When the switch is toggled, the [change](https://ej2.syncfusion.com/angular/documentation/api/switch/#change) event is triggered and the toolbar items are updated accordingly.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbar-enable-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-enable-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbar-enable-cs1" %}

## Add toolbar at the bottom of grid

By adding the toolbar at the bottom of the Syncfusion Angular Grid, important actions and functionality remain consistently visible and easily accessible, providing easy access to actions and operations without the need for scrolling.

To add the toolbar at the bottom of the Grid, you can utilize the [created](https://ej2.syncfusion.com/angular/documentation/api/grid/#created) event. By handling this event, you can dynamically insert the toolbar items at the desired position in the grid layout.

The following example shows how to add the toolbar items at the bootom using `created` event of the grid.
 
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbar-enable-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-enable-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbar-enable-cs2" %}

## Customize toolbar buttons using CSS

Customizing toolbar buttons in Syncfusion Angular Grid using CSS involves modifying the appearance of built-in toolbar buttons by applying CSS styles. This provides a flexible and customizable way to enhance the visual presentation of the toolbar and create a cohesive interface.

The appearance of the built-in toolbar buttons can be modified by applying the following CSS styles.

```css
.e-grid .e-toolbar .e-tbar-btn .e-icons,
.e-grid .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn {
    background: #add8e6;   
}
```

The following example demonstrates how to change the background color of the `Add`, `Edit`, `Delete`, `Update` and `Cancel` toolbar buttons by applying CSS styles

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