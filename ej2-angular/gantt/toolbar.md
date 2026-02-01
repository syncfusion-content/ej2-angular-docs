---
layout: post
title: Toolbar in Angular Gantt Chart Component | Syncfusion
description: Learn here all about toolbar in Syncfusion Angular Gantt Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Toolbar 
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar in Angular Gantt Chart Component

The Angular Gantt Chart component includes built-in toolbar support for executing common actions such as editing, searching, and navigating the timeline. The [toolbar](https://ej2.syncfusion.com/angular/documentation/api/gantt#toolbar) property accepts the collection of built-in toolbar items and `ItemModel` objects for custom toolbar items.

To enable toolbar functionality, inject the `ToolbarService` in the `providers` of the component.

## Built-in toolbar items

Built-in toolbar items allow you to perform standard operations directly from the Gantt interface. These items can be added to the toolbar by specifying the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/gantt#toolbar) property as a collection of predefined items. Each toolbar item appears as a button with an associated icon and label for intuitive interaction.

The following table shows built-in toolbar items and its actions.

| Built-in Toolbar Items | Actions |
|------------------------|---------|
| ExpandAll | Expands all the rows.|
| CollapseAll | Collapses all the rows.|
| Add | Adds a new record.|
| Edit | Edits the selected record.|
| Indent | Indent the selected record to one level.|
| Outdent | Outdents the selected record to one level.|
| Update | Updates the edited record.|
| Delete | Deletes the selected record.|
| Cancel | Cancels the edit state.|
| Search | Searches the records by the given key.|
| PrevTimeSpan | Navigate the Gantt timeline to previous time span.|
| NextTimeSpan | Navigate the Gantt timeline to Next time span.|

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/toolbar/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/toolbar/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/toolbar/default-cs1" %}

> * The [toolbar](https://ej2.syncfusion.com/angular/documentation/api/gantt#toolbar) has options to define both built-in and custom toolbar items.

### Customize the built-in toolbar items

You can modify built-in toolbar actions using the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/gantt#toolbarclick) event. The following example disables the default functionality of the **Add** button, allowing you to override its behavior and display a custom message when it's clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/toolbar/customize-custom-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/toolbar/customize-custom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/toolbar/customize-custom-cs1" %}

### Show only icons in built-in toolbar items

To show only icons in the built-in toolbar items, apply custom CSS to hide the text labels. Use the following style:

```css
 .e-gantt .e-toolbar .e-tbar-btn-text, 
 .e-gantt .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn-text {
    display: none;   
  }
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/toolbar/show-only-icons/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/toolbar/show-only-icons/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/toolbar/show-only-icons" %}

## Customize toolbar buttons using CSS

You can customize the appearance of toolbar buttons in the Gantt Chart component using CSS. Use the following class selectors to target the toolbar icons and buttons:

```css
.e-gantt .e-toolbar .e-tbar-btn .e-icons,
.e-gantt .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn {
  background: #add8e6;   
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/toolbar/customize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/toolbar/customize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/toolbar/customize-cs1" %}

## Add toolbar at the bottom of gantt

To reposition the toolbar to the bottom of the Gantt chart, use the [created](https://ej2.syncfusion.com/angular/documentation/gantt/events#created) event to manipulate the DOM. In this event, select the toolbar element and append it to the Gantt container using DOM manipulation. This moves the toolbar to the bottom of the layout.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/toolbar/add-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/toolbar/add-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/toolbar/add-toolbar-cs1" %}

## Custom toolbar items

You can add custom items to the Gantt chart toolbar by setting the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/gantt#toolbar) property with a collection of `ItemModel` objects. The actions associated with these custom toolbar items can be handled using the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/gantt#toolbarclick) event.

By default, custom toolbar items are aligned to the left. However, you can change their position using the `align` property. In the example below, the **Collapse All** toolbar item is aligned to the right.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/toolbar/position-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/toolbar/position-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/toolbar/position-toolbar-cs1" %}

> * If a toolbar item does not match the built-in items, it will be treated as a custom toolbar item.

## Built-in and custom items in toolbar

The Gantt Chart component supports using both built-in and custom toolbar items simultaneously. In this example, **ExpandAll** and **CollapseAll** are built-in items, while **Test** and **Schedule** is a custom item added to the toolbar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/toolbar/builtin-custom-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/toolbar/builtin-custom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/toolbar/builtin-custom-cs1" %}

## Enable/disable toolbar items

You can control toolbar items dynamically using the [enableItems](https://ej2.syncfusion.com/angular/documentation/api/gantt#enableitems) method. This allows you to enable or disable specific items based on user actions or application state.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/toolbar/enable-disable-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/toolbar/enable-disable-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/toolbar/enable-disable-cs1" %}

## Add input elements in toolbar

You can enhance the Gantt toolbar component by adding editor elements such as numeric text boxes, drop-down lists, and date pickers. These input controls improve user interaction by enabling filtering, searching, and other dynamic actions.

The following example demonstrates how to integrate an [AutoComplete](https://ej2.syncfusion.com/angular/documentation/auto-complete/getting-started) component into the toolbar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/toolbar/input-elements-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/toolbar/input-elements-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/toolbar/input-elements-cs1" %}

