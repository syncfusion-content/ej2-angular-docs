---
layout: post
title: Api listView in Angular ListView component | Syncfusion
description: Learn here all about Api listView in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Api listView 
documentation: ug
domainurl: ##DomainURL##
---

# Api listView in Angular ListView component

Represents the EJ2 ListView control.
```html
<div id="listview">
<ul>
<li>Favourite</li>
<li>Documents</li>
<li>Downloads</li>
</ul>
</div>
```
```typescript
  var lvObj = new ListView({});
  lvObj.appendTo("#listview");
```

## Properties

### animation [`AnimationSettings`](https://ej2.syncfusion.com/angular/documentation/api-animationSettings.html)

It is used to apply the animation to sub list navigation of list items.

Defaults to *{ effect: 'SlideLeft', duration: 400, easing: 'ease' }*

### checkBoxPosition `checkBoxPosition`

It is used to set the position of check box in an item.

Defaults to *'Left'*

### cssClass `string`

This cssClass property helps to use custom skinning option for ListView component, by adding the mentioned class name into root element of ListView.

Defaults to *''*

### dataSource ``Object`[]` &#124;  `string[]` &#124;  `DataManager`

It provides the data to render the ListView component which is mapped with the fields of ListViewhttps://ej2.syncfusion.com/angular/documentation

Defaults to *[]*

### enable `boolean`

It specifies enabled state of ListView component.

Defaults to *true*

### enablePersistence `boolean`

Enable or disable persisting component's state between page reloads.

Defaults to *false*

### enableRtl `boolean`

Enable or disable rendering component in right to left direction.

Defaults to *false*

### fields [`FieldSettingsModel`](./api-fieldSettingsModel.html)

It is used to map keys from the dataSource which extracts the appropriate data from the dataSource with specified mapped with the column fields to render the ListView.

Defaults to *ListBase.defaultMappedFields*

### groupTemplate `string`

The ListView has an option to custom design the group header title with the help of groupTemplate property.
Refer the documentation
 {@link http://ej2.syncfusion.com/15.4.23/documentation/list-view/customizing-templates.html?lang=typescript#group-template here}
 to know more about this property with demo.

Defaults to *null*

### headerTitle `string`

It is used to set the title of ListView component.

Defaults to *""*

### height `number` &#124;  `string`

It is used to set the height of the ListView component.

Defaults to *''*

### htmlAttributes ``Object``

Defines the HTML attributes such as id, class, etc., for the ListView.

Defaults to *{}*

### locale `string`

Overrides the global culture and localization value for this component. Default global culture is 'en-US'.

Defaults to *undefined*

### query `Query`

It is used to fetch the specific data from dataSource by using where, select key words.
Refer the documentation
 {@link http://ej2.syncfusion.com/documentation/list-view/data-binding.html?lang=typescript#bind-to-remote-data here}
 to know more about this property with demo.

Defaults to *null*

### showCheckBox `boolean`

Using this property, we can show or hide the `checkbox`.

Defaults to *false*

### showHeader `boolean`

Using this property, we can show or hide the header of ListView component.

Defaults to *false*

### showIcon `boolean`

Using this property, we can show or hide the icon of list item.

Defaults to *false*

### sortOrder `string`

It is used to enable the sorting of list items to be ascending or descending.

Defaults to *'None'*

### template `string`

The ListView supports to customize the content of each list items with the help of template property.
Refer the documentation
 {@link http://ej2.syncfusion.com/documentation/list-view/customizing-templates.html?lang=typescript here}
 to know more about this property with demo.

Defaults to *null*

### width `number` &#124;  `string`

It sets the width to the ListView component.

Defaults to *''*

## Methods

### addEventListener

Adds the handler to the given event listener.

Returns *void*

### addItem

It adds new item to current ListView. To add a new item in the list view, we need to pass ‘data’ as array or object and ‘fields’ as object.
For example fields: { text: 'Name', tooltip: 'Name', id:'id'}

Returns *void*

### appendTo

Appends the control within the given HTML element

| Parameter | Type | Description |
|------|------|-------------|
| selector (*optional*) |  `string` &#124;  `HTMLElement` | Target element where control needs to be appended<br> |

Returns *void*

### back

It helps to switch back from navigated sub list.

Returns *void*

### dataBind

When invoked, applies the pending property changes immediately to the component.

Returns *void*

### destroy

It is used to destroy the ListView component.

Returns *void*

### disableItem

It is used to disable the list items based on passed element.

| Parameter | Type | Description |
|------|------|-------------|
| obj |  [`Fields`](https://ej2.syncfusion.com/angular/documentation/api-fields.html) &#124;  `HTMLElement` | We can pass element Object or Fields as Object with ID and Text fields.<br> |

Returns *void*

### enableItem

A function that used to enable the disabled list items based on passed element.

| Parameter | Type | Description |
|------|------|-------------|
| obj |  [`Fields`](https://ej2.syncfusion.com/angular/documentation/api-fields.html) &#124;  `HTMLElement` | We can pass element Object or Fields as Object with ID and Text fields.<br> |

Returns *void*

### findItem

It is used to find out an item details from the current list.

| Parameter | Type | Description |
|------|------|-------------|
| obj |  [`Fields`](https://ej2.syncfusion.com/angular/documentation/api-fields.html) &#124;  `HTMLElement` | We can pass element Object or Fields as Object with ID and Text fields.<br> |

Returns [*SelectedItem*](https://ej2.syncfusion.com/angular/documentation/api-selectedItem.html)

### getSelectedItems

It is used to get the currently
 {@link http://ej2.syncfusion.com/documentation/list-view/api-selectedItem.html?lang=typescript selected}
 item details from the list items.

Returns [*SelectedItem*](https://ej2.syncfusion.com/angular/documentation/api-selectedItem.html) &#124;  [*SelectedCollection*](https://ej2.syncfusion.com/angular/documentation/api-selectedCollection.html)

### hideItem

It is used to hide an item from the ListView.

| Parameter | Type | Description |
|------|------|-------------|
| obj |  [`Fields`](https://ej2.syncfusion.com/angular/documentation/api-fields.html) &#124;  `HTMLElement` | We can pass element Object or Fields as Object with ID and Text fields.<br> |

Returns *void*

### refresh

Applies all the pending property changes and render the component again.

Returns *void*

### removeEventListener

Removes the handler from the given event listener.

Returns *void*

### removeItem

A function that removes the item from data source based on passed element like fields: { text: 'Name', tooltip: 'Name', id:'id'}

| Parameter | Type | Description |
|------|------|-------------|
| obj |  `Element` &#124;  [`Fields`](https://ej2.syncfusion.com/angular/documentation/api-fields.html) | We can pass element Object or Fields as Object with ID and Text fields.<br> |

Returns *void*

### removeMultipleItems

A function that removes multiple item from list view based on given input.

| Parameter | Type | Description |
|------|------|-------------|
| obj |  `HTMLElement[]` &#124;  `Fields[]` | We can pass array of elements or array of field Object with ID and Text fieldshttps://ej2.syncfusion.com/angular/documentation<br> |

Returns *void*

### render

It is used to Initialize the control rendering.

Returns *void*

### selectItem

It is used to select the list item from the ListView.

| Parameter | Type | Description |
|------|------|-------------|
| obj |  [`Fields`](https://ej2.syncfusion.com/angular/documentation/api-fields.html) &#124;  `HTMLElement` | We can pass element Object or Fields as Object with ID and Text fields.<br> |

Returns *void*

### showItem

It is used to show an list item from the ListView.

| Parameter | Type | Description |
|------|------|-------------|
| obj |  [`Fields`](./api-fields.html) &#124;  `HTMLElement` | We can pass element Object or Fields as Object with ID and Text fields.<br> |

Returns *void*

### Inject

Dynamically injects the required modules to the component.

Returns *void*

## Events

### actionBegin  `EmitType<Object>`

We can trigger `actionBegin` event before every ListView action starts.

### actionComplete  `EmitType<Object>`

We can trigger `actionComplete` event for every ListView action success event with the dataSource parameter.

### actionFailure  `EmitType<Object>`

We can trigger `actionFailure` event for every ListView action failure event with the dataSource parameter.

### select [`EmitType<SelectEventArgs>`](https://ej2.syncfusion.com/angular/documentation/api-selectEventArgs.html)

We can trigger the `select` event when we select the list item in the component.
