---
layout: post
title: Create dual list using Angular ListView | Syncfusion
description: Learn here all about Create dual list from ListView in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView 
documentation: ug
domainurl: ##DomainURL##
---

# Create dual list from ListView in Angular ListView component

A dual list interface consists of two ListView components that enable users to transfer items between two collections through intuitive controls. This pattern is commonly used for selection scenarios where users need to move items from an available list to a selected list and vice versa. The ListView component provides robust support for implementing dual list functionality with built-in events and data manipulation capabilities.

## Use cases

Dual list interfaces are particularly effective for:

* **Stock exchanges management**: Moving stocks between different country portfolios or market categories
* **Job application systems**: Transferring skills between available competencies and selected qualifications
* **User permission management**: Assigning and removing user roles or access rights
* **Product catalog organization**: Moving products between different categories or collections
* **Resource allocation**: Distributing resources between available and assigned pools

## Integration of Dual List

The dual list implementation uses two ListView components positioned side-by-side with transfer controls between them. An ej2-button component provides the transfer functionality, while a TextBox enables filtering capabilities for improved user experience with large datasets.

The dual list architecture supports:

* **Bulk transfer operations**: Moving entire datasets from one list to another
* **Selective item transfer**: Moving individually selected items between lists
* **Real-time filtering**: Dynamically filtering list content based on user input
* **Bidirectional data flow**: Supporting transfers in both directions with appropriate validation

In the ListView component, sorting is enabled using the [sortOrder](https://ej2.syncfusion.com/angular/documentation/api/list-view/#sortorder) property to maintain consistent item ordering across transfers. The [select](https://ej2.syncfusion.com/angular/documentation/api/list-view/#select) event triggers when users interact with items, enabling dynamic button state management and transfer validation.

## Data Transfer Operations

### Moving complete dataset from first to second list (>>)

The bulk forward transfer moves all items from the source ListView to the destination ListView. When users click the forward button, the system extracts all items from the first list using array slicing operations and concatenates them with the second ListView's existing data. This button remains active only when the source ListView contains data, preventing unnecessary operations on empty collections.

### Moving complete dataset from second to first list (<<)

The bulk backward transfer operates identically to the forward transfer but moves data from the second ListView back to the first. This operation maintains data integrity by transferring all items while preserving their original structure and sorting order. The button activation depends on the second ListView containing transferable items.

### Moving selected items between lists (>) and (<)

Individual item transfers rely on the ListView's [select](https://ej2.syncfusion.com/angular/documentation/api/list-view/#select) event to identify user-chosen items. When users select specific items from either list, the corresponding transfer buttons become active, allowing precise control over which items move between collections. This selective approach provides granular control while maintaining the overall list organization.

## Filtering Implementation

The filtering functionality uses a TextBox input to capture user queries and dynamically filter ListView content. The implementation leverages the [`dataManager`](https://ej2.syncfusion.com/angular/documentation/data/getting-started) to query the underlying data source, applying text-based filters that update the ListView display in real-time. This approach ensures efficient data handling while providing responsive user feedback during filtering operations.

## Sorting Behavior

List item sorting in dual list implementations uses the ListView's [sortOrder](https://ej2.syncfusion.com/angular/documentation/api/list-view/#sortorder) property to maintain consistent ordering across both components. When sorting is enabled in one ListView, transferred items retain the same sort order in the destination list, ensuring data consistency and predictable user experience throughout the transfer process.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/dual-list-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/dual-list-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/dual-list-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/dual-list-cs2" %}