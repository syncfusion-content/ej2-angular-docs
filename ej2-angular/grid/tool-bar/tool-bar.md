---
layout: post
title: Angular Grid - Toolbar | Syncfusion
description: Angular Grid toolbar provides default buttons, configuration options, and examples for common operations like adding records, exporting data, and searching.
platform: ej2-angular
control: Toolbar 
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar in Angular Grid Component

The toolbar in the Angular Data Grid component offers several general use cases to enhance data manipulation and overall experience. Actions such as adding, editing, and deleting records within the grid can be performed, providing efficient data manipulation capabilities. The toolbar also facilitates data export and import functionality, allowing users to generate downloadable files in formats like Excel, CSV, or PDF.

Enable the toolbar by injecting `ToolbarService` in the providers section. This service provides the necessary methods to interact with the toolbar items. The toolbar can be customized with built-in toolbar items or custom toolbar items using the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbar) property. The `toolbar` property accepts an array of strings representing the built-in toolbar items or an array of [ItemModel](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel) objects for custom toolbar items.

The following example demonstrates enabling toolbar items in the grid:

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

Dynamically enable or disable toolbar items to control user actions based on application logic. Use the [enableToolbarItems](https://ej2.syncfusion.com/angular/documentation/api/grid#enabletoolbaritems) method to toggle availability of specific toolbar items as needed.

In the following example, the [EJ2 Toggle Switch Button component](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) is added to enable and disable the toolbar items using `enableToolbarItems` method. When the switch is toggled, the [change](https://ej2.syncfusion.com/angular/documentation/api/switch#change) event is triggered and the toolbar items are updated accordingly.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbar-enable-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-enable-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbar-enable-cs1" %}

## Add toolbar at the bottom of the Grid

By default, the toolbar is placed at the top of the Angular Data Grid. Adding the toolbar at the bottom of the grid keeps important actions and functionality consistently visible and easily accessible, eliminating the need for scrolling to locate toolbar operations.

To add the toolbar at the bottom of the grid, use the [created](https://ej2.syncfusion.com/angular/documentation/api/grid#created) event. By handling this event, the toolbar items can be dynamically inserted at the desired position in the grid layout.

The following example shows adding toolbar items at the bottom using the grid's `created` event.

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

Enhance the visual presentation of toolbar buttons in the Angular Data Grid by modifying their appearance with CSS styles. This flexible approach creates a cohesive user interface tailored to application design requirements.

The appearance of the built-in toolbar buttons can be modified by applying the following CSS styles.

```css
.e-grid .e-toolbar .e-tbar-btn .e-icons,
.e-grid .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn {
    background: #add8e6;   
}
```

The following example demonstrates changing the background color of the `Add`, `Edit`, `Delete`, `Update`, and `Cancel` toolbar buttons by applying CSS styles.

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
* [Add router link in toolbar](https://www.syncfusion.com/forums/154693/how-to-add-a-router-link-in-the-toolbar-in-angular-grid)
* [Show/hide delete button in toolbar](https://www.syncfusion.com/forums/158052/how-to-show-or-hide-the-delete-button-in-the-toolbar-in-angular-grid)
* [Display column as radio button in dialog editing](https://www.syncfusion.com/forums/153052/how-to-display-column-as-radio-button-in-dialog-editing-in-angular-grid)
