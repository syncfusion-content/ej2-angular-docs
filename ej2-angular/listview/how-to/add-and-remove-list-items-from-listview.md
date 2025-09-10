---
layout: post
title: Add and remove items in Angular ListView | Syncfusion
description: Learn here all about Add and remove list items from ListView in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView
documentation: ug
domainurl: ##DomainURL##
---

# Add and remove list items from ListView in Angular ListView component

You can dynamically add or remove list items from the ListView component using the [`addItem`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#additem) and [`removeItem`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#removeitem) methods. This functionality is essential for creating interactive applications such as task managers, shopping lists, or any scenario where users need to modify list content in real-time.

The following implementation demonstrates how to create a complete add and remove functionality with proper event handling and user interface elements.

## Implementation steps

Follow these steps to implement dynamic add and remove functionality:

**Step 1: Configure the ListView with template**

Render the ListView with your data source and use the [`template`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#template) property to create a custom layout that includes a delete icon for each list item. The template allows you to embed interactive elements directly within each list item.

**Step 2: Handle list item removal**

Bind a click event handler to the delete icon created in the template. When triggered, this handler will identify the specific list item and pass it to the [`removeItem`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#removeitem) method to remove it from the ListView.

**Step 3: Implement add functionality**

Create an "Add Item" button and bind a click event handler. In the event handler, prepare the new item data (including a unique identifier) and pass it to the [`addItem`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#additem) method to append the new item to the ListView.

**Step 4: Configure event handling**

Use the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#actioncomplete) event to handle post-operation tasks such as updating UI state or performing additional validations after items are successfully added or removed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/addItem-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/addItem-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/addItem-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/addItem-cs2" %}