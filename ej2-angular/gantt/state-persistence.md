---
layout: post
title: State persistence in Angular Gantt component | Syncfusion
description: Learn here all about State persistence in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: State persistence 
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in Angular Gantt component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt component supports state management to retain its configuration and data after a browser refresh during the same session.

To enable this, set the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enablepersistence) property to **true**. Once enabled, the component saves its state in the browser’s [localStorage](https://www.w3schools.com/html/html5_webstorage.asp#) and restores it automatically after page reloads.

## Restore initial Gantt state

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt component provides options to reset its state, reverting all interactions and configurations to the original setup.  This is useful for clearing filters, sorting, and column arrangements, even when `enablePersistence` is enabled.

### Changing component id

To reset the Gantt to its default state, update the component ID.  This initializes the component as a new instance, restoring its original configuration.

Here is an example code to change the component id dynamically to restore initial gantt state.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/column-persist/column-persist-id/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/column-persist/column-persist-id/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/column-persist/column-persist-id" %}

### Clearing local storage

Clearing the browser’s local storage associated with the Gantt component removes all persisted data, allowing it to load with its initial settings.

Here is an example code on how to clear local storage to retain its default state.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/column-persist/local-storage/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/column-persist/local-storage/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/column-persist/local-storage" %}

## Restore to previous state

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt component allows saving and restoring its state using **local storage**, ensuring retention of configurations like column order, sorting, and filtering.

To implement this functionality, extract the current state using `getPersistData`, store it with `setItem`, retrieve it via `getItem`, and apply it using `setProperties` to restore the saved configuration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/column-persist/restore-state/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/column-persist/restore-state/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/column-persist/restore-state" %}

## Get or set localStorage value

When [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enablepersistence) is set to **true**, the Gantt component state is stored in `window.localStorage`. The stored data can be retrieved or updated using the `getItem` and `setItem` methods available in the browser's `localStorage`.

```typescript
//get the Gantt model.
let value: string = window.localStorage.getItem('ganttGantt'); //"ganttGantt" is component name + component id.
let model: Object = JSON.parse(model);

```

```typescript
//set the Gantt model.
window.localStorage.setItem('ganttGantt', JSON.stringify(model)); //"ganttGantt" is component name + component id.

```

> You can refer to our [Angular Gantt](https://www.syncfusion.com/angular-ui-components/angular-gantt-chart) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Gantt example](https://ej2.syncfusion.com/angular/demos/#/material/gantt/default) to knows how to present and manipulate data.

## Prevent columns from persisting

When [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enablepersistence) is set to **true**, Gantt properties such as [Filtering](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowfiltering), [Sorting](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowsorting), and [Columns](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columns) are automatically saved.  

To prevent specific properties from being persisted, use the `addOnPersist` method.

> When the `enablePersistence` property is set to **true**, the Gantt features such as column template, column formatter, header text, and value accessor will not persist.

The example below shows how to prevent Gantt columns from being persisted. In the [dataBound](https://ej2.syncfusion.com/angular/documentation/gantt/events#databound) event, override the `addOnPersist` method and remove `Columns` from the persistence key list.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/column-prevent/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/column-prevent/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/column-prevent/default-cs1" %}

## Add to persist

Persistence in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt component enables storing and restoring the component state. It supports preserving column layout, sorting, filtering, and configuration elements such as column templates, header templates, and header text, ensuring consistent behavior across sessions.

### Add a new column in persisted columns list

When [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enablepersistence) is set to **true** in the Syncfusion Gantt component, column configurations are saved automatically. To add a new column to the persisted list, update the column collection using `columns.push()`, then call the `refreshColumns` method on the `treeGrid` object in the Gantt instance to update the UI.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/column-prevent/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/column-prevent/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/column-prevent/default-cs1" %}

### Persist the header template and header Text

By default, properties such as column template, header text, header template, formatter, and value accessor are not persisted when [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enablepersistence) is set to **true**, as these are defined at the application level.

To persist these settings, clone the [Columns](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columns) property using `Object.assign`, store it manually along with the persisted data, and reassign it to the Gantt’s `Columns` property during restoration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/column-persist/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/column-persist/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/column-persist/default-cs1" %}
