---
layout: post
title: State management in Angular Grid component | Syncfusion
description: Learn here all about State management in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: State management 
documentation: ug
domainurl: ##DomainURL##
---

# State Management in Angular Grid component

State management in the Angular Grid component allows you to maintain the grid's state even after a browser refresh or when navigating to a different page within the same browser session. This feature is particularly useful for retaining the grid's configuration and data even after a page reload.

To enable state persistence in the Grid, you can utilize the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) property. When this property is set to **true**, the grid will automatically save its state in the browser's [localStorage](https://www.w3schools.com/html/html5_webstorage.asp#), ensuring that the state is preserved across page reloads.

```html
<ejs-grid [dataSource]="data" [enablePersistence]="true"></ejs-grid>
```

> The grid will store the state using the combination of the component name and component ID in the storage. For example, if the component name is **grid** and the ID is **DataGrid**, the state will be stored as **gridDataGrid**.


When enabling state persistence, the following grid settings will persist in the local storage.

| Grid Settings    | Properties persist                                                                                                                                                                                                                                                                                                                                                                                                              | Ignored properties                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pageSettings     | <ul><li>currentPage</li><li>pageCount</li><li>pageSize</li><li>pageSizes</li><li>totalRecordsCount</li></ul>                                                                                                                                                                                                                                                                                                                    | <ul><li>template</li><li>enableQueryString</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| groupSettings    | <ul><li>allowReordering</li><li>columns</li><li>disablePageWiseAggregates</li><li>enableLazyLoading</li><li>showDropArea</li><li>showGroupedColumn</li><li>showToggleButton</li><li>showUngroupButton</li></ul>                                                                                                                                                                                                                 | captionTemplate                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| columns          | <ul><li>allowEditing</li><li>allowFiltering</li><li>allowGrouping</li><li>allowReordering</li><li>allowResizing</li><li>allowSearching</li><li>allowSorting</li><li>autoFit</li><li>disableHtmlEncode</li><li>enableGroupByFormat</li><li>field</li><li>foreignKeyField</li><li>index</li><li>showColumnMenu</li><li>showInColumnChooser</li><li>sortDirection</li><li>type</li><li>uid</li><li>visible</li><li>width</li></ul> | <ul><li>clipMode</li><li>commands</li><li>customAttributes</li><li>dataSource</li><li>defaultValue</li><li>displayAsCheckBox</li><li>edit</li><li>editTemplate</li><li>editType</li><li>filter</li><li>filterBarTemplate</li><li>filterTemplate</li><li>foreignKeyValue</li><li>format</li><li>formatter</li><li>freeze</li><li>headerTemplate</li><li>headerText</li><li>headerTextAlign</li><li>headerValueAccessor</li><li>hideAtMedia</li><li>isFrozen</li><li>isIdentity</li><li>isPrimaryKey</li><li>lockColumn</li><li>maxWidth</li><li>minWidth</li><li>sortComparer</li><li>template</li><li>textAlign</li><li>validationRules</li><li>valueAccessor</li></ul> |
| sortSettings     | -                                                                                                                                                                                                                                                                                                                                                                                                                               | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| filterSettings   | -                                                                                                                                                                                                                                                                                                                                                                                                                               | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| searchSettings   | -                                                                                                                                                                                                                                                                                                                                                                                                                               | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| selectedRowIndex | -                                                                                                                                                                                                                                                                                                                                                                                                                               | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |


The grid will persist only the last selected row index.

## Restore initial Grid state

In the Syncfusion Angular Grid component, you have the capability to restore the grid to its initial state, reverting all changes and configurations made during the interaction. This feature can be particularly useful when you want to reset the grid to its original settings, eliminating any applied filters, sorting, or column reordering.

Here are the steps to reset the grid to its initial state, even when the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) property is enabled:

### Changing component id

If you want to restore the initial state of the grid, consider changing the component ID. This step ensures that the grid is treated as a new instance, effectively reverting to its default settings.

Here is an example code to change the component id dynamically to restore initial grid state.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/state-persistence-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/state-persistence-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/state-persistence-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/state-persistence-cs1" %}

### Clearing local storage

Another method to reset the grid is by clearing the local storage associated with the grid component. This action removes any stored state information, allowing the grid to return to its original configuration.

Here is an example code on how to clear local storage to retain its default state.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/state-persistence-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/state-persistence-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/state-persistence-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/state-persistence-cs2" %}

## Restore to specific state version

Syncfusion Angular Grid supports version-based persistence for easy restoration to a specific state. To enable version based persistence, import `enableVersionBasedPersistence` from `@syncfusion/ej2-base` and set it globally to **true**. Define the grid in the template with properties, bind data, and configure persistence using [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) and [ej2state-persistenceVersion](https://ej2.syncfusion.com/angular/documentation/api/grid/#ej2state-persistenceversion). 

In the below example, the `clickHandler` method is responsible for handling button clicks corresponding to different versions. Inside this method, the targeted version is assigned to the grid's `ej2state-persistenceVersion` dynamically. The code checks if there is already a persisted state for the selected version in the local storage. If found, the grid is updated with the settings retrieved from the local storage, including columns, filter settings, group settings, sort settings, page settings, and selected row index. If no persisted state is found, the current grid state is persisted to the local storage using the [getPersistData](https://ej2.syncfusion.com/angular/documentation/api/grid/#getpersistdata) method.

Here is an example of how to integrate version-based persistence into your Angular component and restore to specific state version:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/state-persistence-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/state-persistence-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/state-persistence-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/state-persistence-cs3" %}

## Restore to previous state

The Syncfusion Angular Grid component allows you to save and restore its state using local storage. This feature is helpful when you want to preserve the current state of the Grid, such as column order, sorting, and filtering, so that you can return to your previous work or configurations.

To implement this functionality, use the `getItem` and `setItem` methods for local storage, along with the Grid component's `setProperties` and [getPersistData](https://ej2.syncfusion.com/angular/documentation/api/grid/#getpersistdata) methods.

The provided code demonstrates how to save and restore the previous state of a Syncfusion Angular Grid component using local storage.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/state-persistence-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.html" %}
{% include code-snippet/grid/state-persistence-cs4/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/state-persistence-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/state-persistence-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/state-persistence-cs4" %}

## Maintaining custom query in a persistent state

When [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) is enabled, the Grid does not automatically maintain custom query parameters after a page load. This is because the Grid refreshes its query params for every page load. You can maintain the custom query params by resetting the [addParams](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method in the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/state-persistence-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/state-persistence-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/state-persistence-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## Get or set local storage value

If the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) property is set to **true**, the Grid property value is saved in the **window.localStorage** for reference. You can get or set the localStorage value by using the **getItem** and **setItem** methods in **window.localStorage**.

To retrieve the Grid model from Local Storage, follow these steps:

```typescript
//get the Grid model.
let value: string = window.localStorage.getItem('gridOrders'); //"gridOrders" is component name + component id.
let model: Object = JSON.parse(value);

```

```typescript
//set the Grid model.
window.localStorage.setItem('gridOrders', JSON.stringify(value)); //"gridOrders" is component name + component id.

```

## Prevent columns from persisting

In the Syncfusion Angular Grid component, you may sometimes want to prevent certain settings from being persisted when using the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) feature. When the `enablePersistence` property is set to **true**, the Grid properties such as [Grouping](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/), [Paging](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/), [Filtering](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/), [Sorting](https://ej2.syncfusion.com/angular/documentation/api/grid/sortSettings/), and [Columns](https://ej2.syncfusion.com/angular/documentation/api/grid/column/) will persist. You can use the `addOnPersist` method to prevent these Grid properties from persisting.

The following example demonstrates how to prevent Grid columns from persisting. In the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event of the Grid, you can override the `addOnPersist` method and remove the columns from the key list given for persistence.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/state-persistence-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/state-persistence-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/state-persistence-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/state-persistence-cs6" %}

## Add to persist

Persistence can be added to a Syncfusion Angular Grid component to enhance the user experience. Persistence allows saving and restoring the state of the grid, including column layouts, sorting, filtering, and other user-specific settings. In this documentation, you will explore how to persist column templates, header templates, and header text settings in the Angular Grid.

### Add a new column in persisted columns list

When the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) property is set to true in the Syncfusion Grid component, column configurations are persisted. If you need to add new columns to the existing persisted state, you can achieve this by using the Grid's built-in methods like `column.push`, and then call the [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/#refreshcolumns) method to update the UI with the new columns.

Here's an example of how to add a new column to a list of persisted columns:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/state-persistence-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/state-persistence-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/state-persistence-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/state-persistence-cs7" %}

> * Adding new columns using `ColumnDirectives` directly in the grid initialization is not recommended if you intend to persist the new columns with the existing columns list 

### Persist the column template, header template and header text

By default, when the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) property is set to **true** in the Syncfusion Grid component, certain column properties such as column template, header text, header template, column formatter, and value accessor are not persisted. This is because these properties can be customized at the application level.

To restore these column properties and achieve persistence, you can follow the approach of cloning the grid's columns property using JavaScript Object's assign method and manually storing it along with the persist data. When restoring the settings, this cloned column object must be assigned to the grid's columns property to restore the column settings. The following sample demonstrates this process:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/state-persistence-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/state-persistence-cs8/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/state-persistence-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/state-persistence-cs8" %}
