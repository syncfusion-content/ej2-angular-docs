---
layout: post
title: MultiSelect Options in Angular MultiSelect component | Syncfusion
description: Learn here all about what are options available in Syncfusion Angular MultiSelect component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: MultiSelect Options
documentation: ug
domainurl: ##DomainURL##
---

# MultiSelect Options in Angular MultiSelect component

The MultiSelect component provides various configuration options to customize its behavior and appearance.

## Adding value as chip on focusout

By default, the typed value converts into a chip or updates as the component value when you press the Enter key or select from the popup. To convert the typed value into a chip or update as the component value while focusing out of the component, enable the [addTagOnBlur](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#addtagonblur) property. When custom values are enabled, both custom values and values present in the list convert into tags while focusing out of the component. Otherwise, only values present in the list convert into tags while focusing out of the component.

```typescript
 <ejs-multiselect id='multiselect-filtering' #sample [dataSource]='data' [fields]='fields' [addTagOnBlur]='true' [allowCustomValue]='true' [placeholder]='watermarks' >
 </ejs-multiselect>
```

## Trigger ValueChange event immediately

By default, the MultiSelect component triggers the change event while focusing out of the component. To trigger the change event on every value selection and removal, disable the [changeOnBlur](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#changeonblur) property.

```typescript
import { Component, ViewEncapsulation, ViewChild  } from '@angular/core';
import { Query } from '@syncfusion/ej2-data';
import {  MultiSelectChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { MultiSelectComponent, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
@Component({
    selector: 'app-root',
    template: `<ejs-multiselect id='multiselect-filtering' #sample [dataSource]='data' [fields]='fields'  [changeOnBlur]='false' [allowCustomValue]='true'
    [placeholder]='watermarks' (change)="onChangeHandler($event)" ></ejs-multiselect>`,
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [ MultiSelectModule]
})
export class AppComponent {
    @ViewChild('sample')
    public multiSelectObj: MultiSelectComponent;
    // define the JSON of filtering data
    public data: { [key: string]: Object; }[] = [
        { Name: 'Australia', Code: 'AU' },
        { Name: 'Bermuda', Code: 'BM' },
        { Name: 'Canada', Code: 'CA' },
        { Name: 'Cameroon', Code: 'CM' },
        { Name: 'Denmark', Code: 'DK' },
        { Name: 'France', Code: 'FR' },
        { Name: 'Finland', Code: 'FI' },
        { Name: 'Germany', Code: 'DE' },
        { Name: 'Greenland', Code: 'GL' },
        { Name: 'Hong Kong', Code: 'HK' },
        { Name: 'India', Code: 'IN' },
        { Name: 'Italy', Code: 'IT' },
        { Name: 'Japan', Code: 'JP' },
        { Name: 'Mexico', Code: 'MX' },
        { Name: 'Norway', Code: 'NO' },
        { Name: 'Poland', Code: 'PL' },
        { Name: 'Switzerland', Code: 'CH' },
        { Name: 'United Kingdom', Code: 'GB' },
        { Name: 'United States', Code: 'US' }
    ];

    public query: Query = new Query();
    // maps the appropriate column to fields property
    public fields: Object = { text: 'Name', value: 'Code' };
    public watermarks: string = 'Select countries';
     public onChangeHandler(event: MultiSelectChangeEventArgs): void {
        alert('change event triggers')
    }
}
```

## Prevent the popup from closing on selection

To prevent the popup from closing on selection, set the [closePopupOnSelect](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#closepopuponselect) property to false.

```typescript
<ejs-multiselect id='multiselect-filtering' #sample [dataSource]='data' [fields]='fields' [placeholder]='watermarks' [closePopupOnSelect]='false'></ejs-multiselect>
```

## Customize the delimiter separator

To customize the delimiter separator in both default and delimiter mode, use the [delimiterChar](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#delimiterchar) property. The default delimiter character is comma (,).

```typescript
<ejs-multiselect id='multiselect-filtering' #sample [dataSource]='data' [fields]='fields' [placeholder]='watermarks'  [delimiterChar]="';'"></ejs-multiselect>
```

## Display the MultiSelect in Right-to-Left direction

To display the MultiSelect in Right-To-Left direction, use the [enableRtl](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#enablertl) property.

```typescript
<ejs-multiselect id='multiselect-filtering' #sample [dataSource]='data' [fields]='fields' [placeholder]='watermarks'  [enableRtl]="true"></ejs-multiselect>
```

## Display the selected item in MultiSelect Popup

By default, the selected item is removed from the popup list because [hideSelectedItem](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#hideselecteditem) is set to true. To display the selected item in the popup itself, set the [hideSelectedItem](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#hideselecteditem) property to false.

```typescript
<ejs-multiselect id='multiselect-filtering' #sample [dataSource]='data' [fields]='fields'  [placeholder]='watermarks' [hideSelectedItem]="false"></ejs-multiselect>
```

## Adding additional attributes in MultiSelect

To add additional attributes like title and others, use the [htmlAttributes] (https://ej2.syncfusion.com/angular/documentation/api/multi-select/#htmlattributes) property. For more details and code snippets, refer to the [htmlAttributes] (https://ej2.syncfusion.com/angular/documentation/api/multi-select/#htmlattributes) documentation.

## Filter with case sensitivity

To filter the list using exact case matching, set the [ignoreCase](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#ignorecase) property to false. This enables case-sensitive filtering operations.

```typescript
<ejs-multiselect id='multiselect-filtering' #sample [dataSource]='data' [fields]='fields' [placeholder]='watermarks' [ignoreCase]="false"></ejs-multiselect>
```

## Prevent fullscreen popup in mobile devices

By default, when filtering is enabled, the popup opens as fullscreen in mobile devices. To prevent this behavior, set the [isDeviceFullScreen](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#isdevicefullscreen)  property to false.

```typescript
<ejs-multiselect id='multiselect-filtering' #sample [dataSource]='data' [fields]='fields' [allowFiltering]="true" [placeholder]='watermarks' [isDeviceFullScreen]="false">
</ejs-multiselect>
```

## Open the popup on dropdown icon click only

By default, the MultiSelect popup opens on input click. To display the popup only when clicking the dropdown icon and not on input click, set the [openOnClick](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#openonclick) property to false.

```typescript
<ejs-multiselect id='multiselect-filtering' #sample [dataSource]='data' [fields]='fields' [openOnClick]="false" [showDropDownIcon]="true"
></ejs-multiselect>
```

## ReadOnly

To make the MultiSelect input readonly, set the [readOnly](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#readonly) property to true.

```typescript
<ejs-multiselect id='multiselect-filtering' #sample [dataSource]='data' [fields]='fields' [readOnly]="true"
></ejs-multiselect>
```

## Sorting

To change the order of list items in ascending or descending order, use the [sortOrder](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#sortorder) property.

```typescript
<ejs-multiselect id='multiselect-filtering' #sample [dataSource]='data' [fields]='fields' [sortOrder]="'Descending'" 
></ejs-multiselect>
```

## Adding new item 

Adds a new item to the MultiSelect popup list by using the [addItem](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#additem) method. By default, new item appends to the list as the last item, but you can insert based on the index parameter.

| Parameter   | Type                                                                 | Description                                                                 |
|-------------|----------------------------------------------------------------------|-----------------------------------------------------------------------------|
| items       | { : }[] &#124; { : } &#124; string &#124; boolean &#124; number &#124; string[] &#124; boolean[] &#124; number[] | Specifies an array of JSON data or a JSON data.                            |
| itemIndex   | number (optional)                                                    | Specifies the index to place the newly added item in the popup list.       |


```typescript
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Query } from '@syncfusion/ej2-data';
import { MultiSelectChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { MultiSelectComponent, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  template: `
    <ejs-multiselect id="multiselect-filtering" #sample [dataSource]="data" [fields]="fields" [placeholder]="watermarks">
    </ejs-multiselect>
    <button (click)="clickHandler()">Add new item</button>
  `,
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MultiSelectModule]
})
export class AppComponent {
  @ViewChild('sample')
  public multiSelectObj!: MultiSelectComponent;

  public data: { [key: string]: Object }[] = [
    { Name: 'Bermuda', Code: 'BM' },
    { Name: 'Canada', Code: 'CA' },
    { Name: 'Cameroon', Code: 'CM' }
  ];

  public query: Query = new Query();
  public fields: Object = { text: 'Name', value: 'Code' };
  public watermarks: string = 'Select countries';

  public clickHandler(): void {
    this.multiSelectObj.addItem({ Name: 'United States1', Code: 'US' }, 1);
  }
}
```

## Clear the value programmatically

To clear the value programmatically by using the [clear](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#clear) method.

```typescript
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Query } from '@syncfusion/ej2-data';
import { MultiSelectComponent, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  template: `
    <ejs-multiselect id="multiselect-filtering" #sample [dataSource]="data" [fields]="fields" [placeholder]="watermarks" [value]="value">
    </ejs-multiselect>
    <button (click)="clickHandler()">Clear</button>
  `,
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MultiSelectModule]
})
export class AppComponent {
  @ViewChild('sample')
  public multiSelectObj!: MultiSelectComponent;
  public value = ["CA"]
  public data: { [key: string]: Object }[] = [
    { Name: 'Bermuda', Code: 'BM' },
    { Name: 'Canada', Code: 'CA' },
    { Name: 'Cameroon', Code: 'CM' }
  ];

  public query: Query = new Query();
  public fields: Object = { text: 'Name', value: 'Code' };
  public watermarks: string = 'Select countries';

  public clickHandler(): void {
    this.multiSelectObj.clear();
  }
}
```

## Destroy

To destroy the component by using the [destroy](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#destroy) method. This removes the component from the DOM and detaches all its related event handlers. It also removes the attributes and classes.

```typescript
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Query } from '@syncfusion/ej2-data';
import { MultiSelectComponent, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  template: `
    <ejs-multiselect id="multiselect-filtering" #sample [dataSource]="data" [fields]="fields" [placeholder]="watermarks" [value]="value">
    </ejs-multiselect>
    <button (click)="clickHandler()">Destroy</button>
  `,
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MultiSelectModule]
})
export class AppComponent {
  @ViewChild('sample')
  public multiSelectObj!: MultiSelectComponent;
  public value = ["CA"]
  public data: { [key: string]: Object }[] = [
    { Name: 'Bermuda', Code: 'BM' },
    { Name: 'Canada', Code: 'CA' },
    { Name: 'Cameroon', Code: 'CM' }
  ];

  public query: Query = new Query();
  public fields: Object = { text: 'Name', value: 'Code' };
  public watermarks: string = 'Select countries';

  public clickHandler(): void {
    this.multiSelectObj.destroy();
  }
}
```

## Filter

To filter the MultiSelect data from given data source by using the [filter](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#filter) method.

| Parameter | Type | Description |
|-----------|------|-------------|
| dataSource | { : }[] | DataManager | string[] | number[] | boolean[] | Set the data source to filter. |
| query (optional) | Query | Specify the query to filter the data. |
| fields (optional) | FieldSettingsModel | Specify the fields to map the column in the data table. |

```typescript
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Query } from '@syncfusion/ej2-data';
import { MultiSelectComponent, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  template: `
    <ejs-multiselect
      id="multiselect-filtering"
      #sample
      [dataSource]="data"
      [fields]="fields"
      [placeholder]="watermarks"
      [allowFiltering]="true" >
    </ejs-multiselect>

    <br><br><br><br><br><br>
    <button (click)="applyFilter()">Apply Filter (Starts with 'C')</button>
    <button (click)="clearFilter()">Clear Filter</button>
  `,
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MultiSelectModule]
})
export class AppComponent {
  @ViewChild('sample')
  public multiSelectObj!: MultiSelectComponent;

  public data: { [key: string]: Object }[] = [
    { Name: 'Bermuda', Code: 'BM' },
    { Name: 'Canada', Code: 'CA' },
    { Name: 'Cameroon', Code: 'CM' }
  ];

  public fields: Object = { text: 'Name', value: 'Code' };
  public watermarks: string = 'Select countries';

  public applyFilter(): void {
    const query = new Query().where('Name', 'startswith', 'C', true);
    this.multiSelectObj.filter(this.data, query, this.fields);
  }

  public clearFilter(): void {
    this.multiSelectObj.filter(this.data, new Query(), this.fields);
  }
}
```

## Focus In and Focus Out the MultiSelect

To manually focus and blur the MultiSelect by using the [focusIn](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#focusin) and [focusOut](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#focusout) methods.

```typescript
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Query } from '@syncfusion/ej2-data';
import { MultiSelectComponent, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  template: `
    <ejs-multiselect id="multiselect-filtering" #sample [dataSource]="data" [fields]="fields" [placeholder]="watermarks" >
    </ejs-multiselect>
    <button (click)="focusInHandler()">FocusIn</button>
    <button (click)="focusOutHandler()">FocusOut</button>
  `,
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MultiSelectModule]
})
export class AppComponent {
  @ViewChild('sample')
  public multiSelectObj!: MultiSelectComponent;
  public value = ["CA"]
  public data: { [key: string]: Object }[] = [
    { Name: 'Bermuda', Code: 'BM' },
    { Name: 'Canada', Code: 'CA' },
    { Name: 'Cameroon', Code: 'CM' }
  ];

  public query: Query = new Query();
  public fields: Object = { text: 'Name', value: 'Code' };
  public watermarks: string = 'Select countries';

  public focusInHandler(): void {
    this.multiSelectObj.focusIn()
  }
  public focusOutHandler(): void {
    this.multiSelectObj.focusOut()
  }
}
```

## Get Data by Value

Gets the data object that matches the given value using the [getDataByValue](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#getdatabyvalue) method.

| Parameter | Type                          | Description                          |
|-----------|-------------------------------|--------------------------------------|
| value     | string | number | boolean | object | Specifies the value of the list item. |


Returns: The data object corresponding to the provided value.

```typescript
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { MultiSelectComponent, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  template: `
    <ejs-multiselect
      id="multiselect-filtering"
      #sample
      [dataSource]="data"
      [fields]="fields"
      [placeholder]="watermarks"
      [allowFiltering]="true" 
      [value]="value">
    </ejs-multiselect>
    <button (click)="getData()">Get data by value</button>
  `,
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MultiSelectModule]
})
export class AppComponent {
  @ViewChild('sample')
  public multiSelectObj!: MultiSelectComponent;
  public value = ["CA"]
  public data: { [key: string]: Object }[] = [
    { Name: 'Bermuda', Code: 'BM' },
    { Name: 'Canada', Code: 'CA' },
    { Name: 'Cameroon', Code: 'CM' }
  ];

  public fields: Object = { text: 'Name', value: 'Code' };
  public watermarks: string = 'Select countries';

  public getData(): void {
   var value = this.multiSelectObj.getDataByValue("CA");
   console.log(value)
  }

}
```

## Show and Hide Popup

To programmatically show or hide the MultiSelect popup, use the [showPopup](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#showpopup) and [hidePopup](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#hidepopup) methods.

```typescript
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Query } from '@syncfusion/ej2-data';
import { MultiSelectComponent, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  template: `
    <ejs-multiselect id="multiselect-filtering" #sample [dataSource]="data" [fields]="fields" [placeholder]="watermarks" >
    </ejs-multiselect>
    <br> <br> <br> <br> <br> <br>
    <button (click)="show()">ShowPopup</button>
    <button (click)="hide()">HidePopup</button>
  `,
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MultiSelectModule]
})
export class AppComponent {
  @ViewChild('sample')
  public multiSelectObj!: MultiSelectComponent;
  public value = ["CA"]
  public data: { [key: string]: Object }[] = [
    { Name: 'Bermuda', Code: 'BM' },
    { Name: 'Canada', Code: 'CA' },
    { Name: 'Cameroon', Code: 'CM' }
  ];

  public query: Query = new Query();
  public fields: Object = { text: 'Name', value: 'Code' };
  public watermarks: string = 'Select countries';

  public show(): void {
    this.multiSelectObj.showPopup()
  }
  public hide(): void {
    this.multiSelectObj.hidePopup()
  }
}
```

## Show and Hide spinner

To display or hide the loading spinner in the MultiSelect component, use the [showSpinner](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#showspinner) and [hideSpinner](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#hidespinner) methods. The spinner is typically used during asynchronous data loading operations.

```typescript
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Query } from '@syncfusion/ej2-data';
import { MultiSelectComponent, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  template: `
    <ejs-multiselect id="multiselect-filtering" #sample [dataSource]="data" [fields]="fields" [placeholder]="watermarks" >
    </ejs-multiselect>
    <br> <br> <br> <br> <br> <br>
    <button (click)="show()">ShowSpinner</button>
    <button (click)="hide()">HideSpinner</button>
  `,
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MultiSelectModule]
})
export class AppComponent {
  @ViewChild('sample')
  public multiSelectObj!: MultiSelectComponent;
  public value = ["CA"]
  public data: { [key: string]: Object }[] = [
    { Name: 'Bermuda', Code: 'BM' },
    { Name: 'Canada', Code: 'CA' },
    { Name: 'Cameroon', Code: 'CM' }
  ];

  public query: Query = new Query();
  public fields: Object = { text: 'Name', value: 'Code' };
  public watermarks: string = 'Select countries';

  public show(): void {
    this.multiSelectObj.showSpinner()
  }
  public hide(): void {
    this.multiSelectObj.hideSpinner()
  }
}
```

## Select or Deselect All Items

The MultiSelect component allows for the programmatic selection and deselection of all list items. This is achieved using the [`selectAll`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#selectall) method.

*   To **select all** items in the list, call the `selectAll` method with `true` as the parameter.
*   To **deselect all** items, call the `selectAll` method with `false` as the parameter.

The following example demonstrates how to use buttons to trigger both the select all and deselect all actions on the MultiSelect component.

```typescript
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Query } from '@syncfusion/ej2-data';
import { MultiSelectComponent, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-root',
    template: `
        <ejs-multiselect id="multiselect-filtering" #sample [dataSource]="data" [fields]="fields" [placeholder]="watermarks" >
        </ejs-multiselect>
        <div class="e-btn-group">
            <button class="e-btn" (click)="selectAllItems()">Select All</button>
            <button class="e-btn" (click)="deselectAllItems()">Deselect All</button>
        </div>
    `,
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [MultiSelectModule, ButtonModule]
})
export class AppComponent {
    @ViewChild('sample')
    public multiSelectObj!: MultiSelectComponent;
    public data: { [key: string]: Object }[] = [
        { Name: 'Bermuda', Code: 'BM' },
        { Name: 'Canada', Code: 'CA' },
        { Name: 'Cameroon', Code: 'CM' },
        { Name: 'Denmark', Code: 'DK' },
        { Name: 'France', Code: 'FR' }
    ];
    public query: Query = new Query();
    public fields: Object = { text: 'Name', value: 'Code' };
    public watermarks: string = 'Select countries';

    public selectAllItems(): void {
        this.multiSelectObj.selectAll(true);
    }

    public deselectAllItems(): void {
        this.multiSelectObj.selectAll(false);
    }
}
```