---
layout: post
title: How to in Angular Grid component | Syncfusion
description: Learn here all about How to in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: How to 
documentation: ug
domainurl: ##DomainURL##
---

# How to in Angular Grid component

## Refresh the Datasource

You can add/delete the datasource records through an external button. To reflect the datasource changes in grid, you need to invoke the [`refresh`](https://ej2.syncfusion.com/angular/documentation/api/grid/#refresh) method.

Please follow the below steps to refresh the grid after datasource change.

**Step 1**:

Add/delete the datasource record by using the following code.

```typescript
    this.grid.dataSource.unshift(data); // Add a new record.

    this.grid.dataSource.splice(selectedRow, 1); // Delete a record.

```

**Step 2**:

Refresh the grid after the datasource change by using the [`refresh`](https://ej2.syncfusion.com/angular/documentation/api/grid/#refresh) method.

```typescript
    this.grid.refresh(); // Refresh the Grid.

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/change-headertext-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/change-headertext-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/change-headertext-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/change-headertext-cs3" %}

## Enable/Disable Grid and its actions

You can enable/disable the Grid and its actions by applying/removing corresponding CSS styles.

To enable/disable the grid and its actions, follow the given steps:

**Step 1**:

Create CSS class with custom style to override the default style of Grid.

```css
    .disablegrid {
        pointer-events: none;
        opacity: 0.4;
    }
    .wrapper {
        cursor: not-allowed;
    }

```

**Step 2**:

Add/Remove the CSS class to the Grid in the click event handler of Button.

```typescript
    public btnClick():void {
      if (this.Grid.element.classList.contains('disablegrid')) {
          this.Grid.element.classList.remove('disablegrid');
          document.getElementById("GridParent").classList.remove('wrapper');
      }
      else {
          this.Grid.element.classList.add('disablegrid');
          document.getElementById("GridParent").classList.add('wrapper');
      }
    }

```

In the below demo, the button click will enable/disable the Grid and its actions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs36/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs36/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs36/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs36" %}

## Print the expanded state from other pages

By default, the expanded child grids will be printed from the current page alone. You can print the expanded child grids from other pages by using the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event.

In the following example, we have printed expanded child grids form other pages.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/default-cs13/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/default-cs13/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/default-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/default-cs13" %}

## Columns

### Change Column Header Text Dynamically

You can change the column [`headerText`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#headertext) dynamically through an external button.

Follow the given steps to change the header text dynamically:

**Step 1**:

Get the column object corresponding to the field name by using the [`getColumnByField`](https://ej2.syncfusion.com/angular/documentation/api/grid/#getcolumnbyfield) method.
Then change the header Text value.

```typescript
let column = this.grid.getColumnByField('ShipCity'); // Get column object.
column.headerText = 'Changed Text';

```

**Step 2**:

To reflect the changes in the grid header, invoke the [`refreshHeader`](https://ej2.syncfusion.com/angular/documentation/api/grid/#refreshheader) method.

```typescript
this.grid.refreshHeader();

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/change-headertext-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/change-headertext-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/change-headertext-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/change-headertext-cs4" %}

### Customize Column Styles

You can customise the appearance of header and content of the particular column using the [`customAttributes`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#customattributes) property.

To customize the grid column, follow the given steps:

**Step 1**:

Create a css class with custom style to override the default style for rowcell and headercell.

```css
.e-grid .e-rowcell.customcss{
    background-color: #ecedee;
    color: 'red';
    font-family: 'Bell MT';
    font-size: 20px;
}

.e-grid .e-headercell.customcss{
    background-color: #2382c3;
    color: white;
    font-family: 'Bell MT';
    font-size: 20px;
}

```

**Step 2**:

Add the custom css class to particular column by using [`customAttributes`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#customattributes) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-column-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-column-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-column-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-column-cs2" %}

### Custom Tooltip for Columns

You can achieve the custom tooltip([`EJ2 Tooltip`](../../../tooltip/getting-started)) for Grid by using the [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/grid/#querycellinfo) event.
[`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/grid/#querycellinfo) event.

Render the ToolTip component for the grid cells by using the following code in the [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/grid/#querycellinfo) event.

```typescript
tooltip (args: QueryCellInfoEventArgs) {
    let tooltip: Tooltip = new Tooltip({
        content: args.data[args.column.field].toString();
    }, args.cell);
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-tooltip-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-tooltip-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-tooltip-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-tooltip-cs2" %}

### Render other components in a column

You can render any component in a grid column using the [`template`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) property.

Initialize the column template for your custom component. The [`template`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) property renders the custom component.

```
    <div>
        <ejs-dropdownlist value='Order Placed' [dataSource]='dropData' [popupHeight]='150' [popupWidth]='150' ></ejs-dropdownlist>
    </div>

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/column-sync-comp-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/column-sync-comp-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/column-sync-comp-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/column-sync-comp-cs2" %}

### Change the Orientation of Header Text

You can change the orientation of the header text by using the [`customAttributes`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#customattributes) property.

To change the Orientation of Header Text, Ensure the following steps:

**Step 1**:

Create a css class with orientation style for grid header cell.

```css
.orientationcss .e-headercelldiv {
    transform: rotate(90deg);
}

```

**Step 2**:

Add the custom css class to particular column by using [`customAttributes`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#customattributes) property.

```typescript
    <e-column field='Freight' headerText='Freight' textAlign='Center' format='C2' [customAttributes]='customAttributes' width=80></e-column>

```

**Step 3**:

Resize the header cell height by using the following code.

```typescript
setHeaderHeight(args) {
    let textWidth: number = document.querySelector('.orientationcss > div').scrollWidth;//Obtain the width of the headerText content.
    let headerCell: NodeList = document.querySelectorAll('.e-headercell');
    for(let i: number = 0; i < headerCell.length; i++) {
        (<HTMLElement>headerCell.item(i)).style.height = textWidth + 'px'; //Assign the obtained textWidth as the height of the headerCell.
    }
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/header-orientation-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/header-orientation-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/header-orientation-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/header-orientation-cs2" %}

### Customize the icon for column menu

You can customize the column menu icon by overriding the default grid class **.e-icons.e-columnmenu** with a custom property **content** as mentioned below.

```css
.e-grid .e-columnheader .e-icons.e-columnmenu::before {
              content: "\e941";
      }
```

In the below sample, grid is rendered with a customized column menu icon.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-column-menu-icon-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-column-menu-icon-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-column-menu-icon-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-column-menu-icon-cs2" %}

## Editing

### Editing with template column

You can edit template column value by defining [`field`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#field) for that particular column.

In the below demo, the **ShipCountry** column is rendered with the template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs37/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs37/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs37/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs37" %}

### Customize the Edit Dialog

You can customize the appearance of the edit dialog in the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event based on **requestType** as **beginEdit** or **add**.

In the below example, we have changed the dialog's header text for editing and adding records.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs38/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs38/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs38/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs38" %}

### Show or Hide columns in Dialog editing

You can show hidden columns or hide visible column's editor in the dialog while editing the grid record using [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) and [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) events.

In the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event, based on **requestType** as **beginEdit** or  **add**. We can show or hide the editor by using [`column.visible`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#visible) property.

In the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event, based on **requestType** as **save**. We can reset the properties back to the column state.

In the below example, we have rendered the grid columns **CustomerID** as hidden column and **ShipCountry** as visible column. In the edit mode, we have changed the **CustomerID** column to visible state and **ShipCountry** column to hidden state.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs39/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs39/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs39/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs39" %}

### Cascading DropDownList with Grid editing

You can achieve the Cascading DropDownList with grid Editing by using the Cell Edit Template feature.

In the below demo, Cascading DropDownList rendered for **ShipCountry** and **ShipState** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs40/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs40/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs40/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs40" %}

### Provide custom data source and enabling filtering to DropDownList

You can provide data source to the DropDownList by using the [`columns.edit.params`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#edit) property.

While setting new data source using edit params, you must specify a new [`query`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#query) property too for the DropDownList as follows,

```typescript
{
    this.countryParams = {
        params:   {
            allowFiltering: true,
            dataSource: this.country,
            fields: {text:'countryName',value:'countryName'},
            query: new Query(),
            actionComplete: () => false
            }
        }
}

```

You can also enable filtering for the DropDownList by passing the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#allowfiltering) as **true** to the edit params.

In the below demo, DropDownList is rendered with custom Datasource for the **ShipCountry** column and enabled filtering to search DropDownList items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs41/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs41/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs41/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs41" %}

### Use Wizard like Dialog Editing

Wizard helps you create intuitive step-by-step forms to fill. You can achieve the wizard like editing by using the dialog template feature. It support your own editing template by defining [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) as **Dialog** and [`editSettingsTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#template) as template variable to define the editors.

The following example demonstrate the wizard like editing in the grid with the unobtrusive Validation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/wizardtemplate-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/wizardtemplate-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/wizardtemplate-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/wizardtemplate-cs2" %}

### Using Tab Inside the Dialog Editing

You can use [`Tab`](../../../tab/getting-started/) component inside dialog edit UI using dialog template feature. The dialog template feature can be enabled by defining  [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) as **Dialog** and [`editSettingsTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#template) as template variable to define the editors.

To include tab components in the Dialog, please ensure the following steps:

**Step 1**:

Initialize the template for your tab component.

```
        <div id="tab1">
        <div class="form-row">
            <div class="form-group col-md-6">
                <div class="e-float-input e-control-wrapper" [ngClass]="{'e-error': OrderID.invalid && (OrderID.dirty || OrderID.touched)}">
                    <input [(ngModel)]="data.OrderID" required id="OrderID" name="OrderID" type="text" [attr.disabled]="!data.isAdd ? '' : null" #OrderID="ngModel">
                    <span class="e-float-line"></span>
                    <label class="e-float-text e-label-top" for="OrderID"> Order ID</label>
                </div>
                <div id="OrderIDError" *ngIf='OrderID.invalid && (OrderID.dirty || OrderID.touched)'>
                    <label class="e-error" for="OrderID" id="OrderID-info" style="display: block;">*Order ID is required</label>
                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <div class="e-float-input e-control-wrapper" [ngClass]="{'e-error': CustomerID.invalid && (CustomerID.dirty || CustomerID.touched)}">
                    <input [(ngModel)]="data.CustomerID" required id="CustomerID" name="CustomerID" type="text" #CustomerID="ngModel">
                    <span class="e-float-line"></span>
                    <label class="e-float-text e-label-top" for="CustomerID">Customer Name</label>
                </div>
                <div id="CustomerIDError" *ngIf='CustomerID.invalid && (CustomerID.dirty || CustomerID.touched)'>
                    <label class="e-error" for="CustomerID" id="CustomerID-info" style="display: block;">*Customer Name is required</label>
                </div>
            </div>
        </div>
        <button ejs-button type="button" cssClass="e-info e-btn" style="float: right" (click)="nextBtn($event)" >next</button>
    </div>

    <div id="tab2" style='display: none'>
        <div class="form-row" >
            <div class="form-group col-md-6">
                <ejs-dropdownlist id="ShipCountry" name="ShipCountry" [(ngModel)]="data.ShipCountry" [dataSource]='shipCountryDistinctData' [fields]="{text: 'ShipCountry', value: 'ShipCountry' }" placeholder="Ship Country" popupHeight='300px' floatLabelType='Always'></ejs-dropdownlist>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <ejs-checkbox #Verified name="Verified" id="Verified" label="Verified" [checked]="data.Verified" ></ejs-checkbox>
            </div>
        </div>
        <button ejs-button type="button" cssClass="e-info e-btn" style="float: right" (click)='submitBtn($event)'>submit</button>
    </div>

```

**Step 2**:

To render the Tab component, use the [`editSettingsTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#template) of the Grid.

```

    <ejs-tab #tab id="tab_wizard" showCloseButton=false (selecting)='selecting($event)'>
        <e-tabitems>
            <e-tabitem [header]="{ 'text': 'Details' }" content="#tab1"></e-tabitem>
            <e-tabitem [header]="{ 'text': 'Verify' }" content="#tab2"></e-tabitem>
        </e-tabitems>
    </ejs-tab>

```

The following example, we have rendered tab control inside the edit dialog. The tab control has two tabs and once you fill the first tab and navigate to second one. The validation for first tab was done before navigate to second.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/tablikeedit-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/tablikeedit-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/tablikeedit-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/tablikeedit-cs2" %}

### Disable editing for a particular row/cell

You can disable the editing for a particular row by using the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event of Grid based on **requestType** as **beginEdit**.

In the below demo, the rows which are having the value for **ShipCountry** column as "France" is prevented from editing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs42/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs42/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs42/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs42" %}

For batch mode of editing, you can use [`cellEdit`](https://ej2.syncfusion.com/angular/documentation/api/grid/#celledit) event of Grid. In the below demo, the cells which are having the value as "France" is prevented from editing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs43/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs43/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs43/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs43" %}

### Perform Grid actions by keyboard shortcut keys

Using keyboard shortcuts, Grid performs navigation and actions.

In addition, You can also perform grid actions with custom keyboard shortcuts. This operation has to be achieved outside of the grid with the help of **keydown** event.

The following example demonstrates on **Adding** a new row when Enter key is pressed in the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs44/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs44/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs44/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs44" %}

### Make a cell editable on a single click with batch editing

You can make a cell editable on a single click with **batch** mode of editing in Grid, by using the [`editCell`](https://ej2.syncfusion.com/angular/documentation/api/grid/#editcell) method.

Bind the click event for the Grid and in the click event handler call the [`editCell`](https://ej2.syncfusion.com/angular/documentation/api/grid/#editcell) method, based on the clicked target element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs45/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs45/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs45/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs45" %}

## Sort

### Perform single/multi sorting dynamically

You can perform single-column or multi-column sorting dynamically through an external button.

To perform single-column sorting, use the [`sortColumn`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#sortcolumn) method of Grid.

```typescript
    public SingleSort():void {
      this.grid.sortColumn("OrderID","Descending")
    }

```

To perform multi-column sorting, you need to push the columns to be sorted into the [`sortSettings.columns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#sortsettings).

```typescript
    public MultiSort():void {
        this.grid.sortSettings.columns.push({ field: 'CustomerID',  direction: 'Ascending' },{ field: 'ShipName', direction: 'Descending' });
        this.grid.refresh();
    }

```

In the below demo, click on the corresponding button to perform single-column or multi-column sorting.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs46/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs46/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs46/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs46" %}

### Dynamically clear sort for particular/entire sorted columns in Grid

You can clear the sorting for a particular column or the entire sorted columns in Grid dynamically through an external button.

To clear sort for a particular column, you need to splice the particular column from the [`sortSettings.columns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#sortsettings).

```typescript
    public SingleClearSort():void {
        let column: any = this.grid.sortSettings.columns;
        for(let i=0;i < column.length;i++) {
            if(column[i].field == "OrderID") {
                column.splice(i,1);
                this.grid.refresh();
            }
        }
    }
```

To clear sorting for all the sorted columns, use the [`clearSorting`](https://ej2.syncfusion.com/angular/documentation/api/grid/#clearsorting) method of Grid.

```typescript
    public MultiClearSort():void {
        this.grid.clearSorting();
    }

```

In the below demo, click on the corresponding button to clear sort for particular or entire sorted columns in Grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs47/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs47/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs47/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs47" %}

## Foreign Key

### Use Edit Template in Foreign Key Column

By default, foreign key column uses dropdown component for editing.
You can render other than the dropdown by using the [`column.edit`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#edit) property.
The following example demonstrates the way of using edit template in foreign column.

In the following example, The **Employee Name** is a foreign key column and while editing, AutoComplete component is rendered instead of DropDownList.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/foreignkey-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/foreignkey-cs6" %}

### Customizing filter menu operators list

You can customize the default filter operator list by defining the [`filterSettings.operators`](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#operators) property. The available options are:
[`filterSettings.operators`](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#operators) property. The available options are:

* **stringOperator**- defines customized string operator list.
* **numberOperator** - defines customized number operator list.
* **dateOperator** - defines customized date operator list.
* **booleanOperator** - defines customized boolean operator list.

In the following sample, we have customized string filter operators.
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filtering1-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filtering1-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filtering1-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filtering1-cs11" %}

### Customize filter UI in foreign key column

You can create your own filtering UI by using [`column.filter`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filter) property.
The following example demonstrates the way to create a custom filtering UI in the foreign column.

In the following example, The **Employee Name** is a foreign key column. DropDownList is rendered using Filter UI.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/foreignkey-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/foreignkey-cs7" %}

### Use filter bar template in foreign key column

You can use the filter bar template in foreign key column by defining the [`column.filterBarTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filterbartemplate) property.
The following example demonstrates the way to use filter bar template in foreign column.

In the following example, The **Employee Name** is a foreign key column.
This column header shows the custom filter bar template and you can select filter value by using the **DropDown** options.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/foreignkey-cs8/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/foreignkey-cs8" %}

### Perform aggregation in Foreign Key Column

Default aggregations are not supported in a foreign key column.
You can achieve aggregation for the foreign key column by using custom the aggregates.
The following example demonstrates the way to achieve aggregation in foreign key column.

In the following example, The **Employee Name** is a foreign key column and the aggregation for the foreign column was calculated in customAggregateFn.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/foreignkey-cs9/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/foreignkey-cs9" %}

### Bind foreign key dataSource on dropdown edit

When editing, you can bind foreign key datasource to a dropdown list by using [`column.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#datasource) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/foreignkey-cs10/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/foreignkey-cs10" %}

> * By default, the foreign key column's **editType** will be set as **dropdownedit**.

## Exporting

### Exporting Grid in Cordova application

Cordova application does not support direct file download. So we have to use the Blob stream to export the Grid.
You can use corresponding exporting methods and exportComplete events to get the Blob stream.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/exporting-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs3" %}

### Exporting Filtered Data Only

You can export the filtered data by defining the resulted data in [`exportProperties.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#datasource) before export.

In the below Pdf exporting demo, We have gotten the filtered data by applying filter query to the grid data and then defines the resulted data in [`exportProperties.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#datasource) and pass it to [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexport) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-filtered-data-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/exporting-filtered-data-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-filtered-data-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-filtered-data-cs2" %}

## Pager

## Customize Pager DropDown

To customize default values of pager dropdown, you need to define [`pageSizes`](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettingsModel/#pagesizes) as array of strings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-column-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-column-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-column-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-column-cs3" %}

## Hide the expand/collapse icon in parent row when no records in child grid

By default, the expand/collapse icon will be visible even if the child grid is empty.

You can use [`rowDataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdatabound) event to hide the icon when there are no records in child grid.

To hide the expand/collapse icon in parent row when no records in child grid, follow the given steps:

**Step 1**:

Create CSS class with custom style to override the default style of Grid.

```css
    .e-row[aria-selected="true"] .e-customizedExpandcell {
        background-color: #e0e0e0;
    }

    .e-grid.e-gridhover tr[role='row']:hover {
        background-color: #eee;
    }

```

**Step 2**:

Add the CSS class to the Grid in the [`rowDataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdatabound-) event handler of Grid.

```typescript
    public rowDataBound(args:any){
        let filter:string = args.data.EmployeeID;
        let childrecord: any = new DataManager(this.Grid.childGrid.dataSource).executeLocal(new Query().where('EmployeeID', 'equal', parseInt(filter), true));
        if(childrecord.length == 0) {
            //here hide which parent row has no child records
            args.row.querySelector('td').innerHTML=' ';
            args.row.querySelector('td').className = 'e-customizedExpandcell';
        }
    }

```

In the below demo, the expand/collapse icon in the row with **EmployeeID** as **1** is hidden as it does not have record in child Grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/template-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/template-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/template-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/template-cs3" %}