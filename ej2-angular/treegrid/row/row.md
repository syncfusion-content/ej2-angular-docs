---
layout: post
title: Row in Angular TreeGrid component | Syncfusion
description: Learn here all about Row in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row 
documentation: ug
domainurl: ##DomainURL##
---

# Row in Angular TreeGrid component

Each row typically represents a single record or item from a data source. Rows in a tree grid are used to present data in a tabular format. Each row displays a set of values representing the fields of an individual data record. Rows allow to interact with the data in the tree grid. You can select rows, edit cell values, perform sorting or filtering operations, and trigger events based on actions.

## Customize row styles 

Customizing the styles of rows in a Syncfusion Tree Grid allows you to modify the appearance of rows to meet your design requirements. This feature is useful when you want to highlight certain rows or change the font style, background color, and other properties of the row to enhance the visual appeal of the tree grid. To customize the row styles in the tree grid, you can use CSS, properties, methods, or event support provided by the Syncfusion Angular TreeGrid component.

### Using event

You can customize the appearance of the rows by using the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdatabound) event. This event triggers for every row when it is bound to the data source. In the event handler, you can get the [RowDataBoundEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDataBoundEventArgs/) object, which contains details of the row. You can use this object to modify the row's appearance, add custom elements, or perform any other customization.

Here's an example illustrating how you can utilize the `rowDataBound` event to customize the styles of rows based on the value of the **duration** column. This example involves inspecting the value of the Duration column for each row and adjusting a row's style accordingly.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-cs1" %}

>The [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) event can also be used to customize cells and is triggered for every cell in the tree grid. It can be useful when you need to customize cells based on certain conditions or criteria.

### Using CSS

You can apply styles to the rows using CSS selectors. The Tree Grid provides a class name for each row element, which you can use to apply styles to that specific row. 

**Customize selected row**

You can customize the appearance of the selected row using CSS. This is useful when you want to highlight the currently selected row for improve the visual appeal of the Tree Grid. By default, the Tree Grid provides the CSS class **.e-selectionbackground** to style the selected row. You can customize this default style by overriding the **.e-selectionbackground** class with your own custom CSS styles.

To change the background color of the selected row, you can add the following CSS code to your application:

```css
.e-treegrid .e-selectionbackground {
    background-color: #f9920b;
}
```

Here's an example of how to use the **.e-selectionbackground** class to style the selected row:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-style-selected-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-style-selected-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-style-selected-cs1" %}

### Using method 

The Tree Grid provides below methods to customize the appearance of the tree grid rows :

1. [getRowByIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getrowbyindex): This method returns the HTML element of a row at the specified index. You can use this method to apply custom styles to a specific row.
2. [getRows](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getrows): This method returns an array of all the row elements in the Tree Grid. You can use this method to apply custom styles to all rows or to a specific set of rows based on some condition.
3. [getRowInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getrowinfo): This method returns the data object and index of the row corresponding to the specified row element. You can use this method to apply custom styles based on the data in a row.
4. [getSelectedRowIndexes](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getselectedrowindexes): This method returns an array of the indexes of the selected rows in the  Tree Grid. You can use this method to apply custom styles to the selected rows.
5. [getSelectedRows](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getselectedrows):This method returns an array of the HTML elements representing the selected rows in the tree grid. You can use this method to directly loop through the selected rows and customize their styles.

The following example demonstrates how to use `getRowByIndex` method to customize the appearance of the row inside the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#databound) event of the tree grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/rows-event-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/rows-event-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/rows-event-cs1" %}

## Styling alternate rows

You can customize the appearance of the alternate rows using CSS. This can be useful for improving the readability of the data and making it easier to distinguish between rows. By default, Syncfusion Tree Grid provides the CSS class **.e-altrow** to style the alternate rows. You can customize this default style by overriding the **.e-altrow** class with your custom CSS styles. 

To change the background color of the alternate rows, you can add the following CSS code to your application's stylesheet:

```css
.e-treegrid .e-altrow {
    background-color: #fafafa;
}
```

Please refer to the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/alt-row-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/alt-row-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/alt-row-cs1" %}

## Styling parent and child rows

You can customize the appearance of the parent and child rows by utilizing the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdatabound) event. This event is triggered for every row when it is bound to the data source. Within the event handler, you can access the [RowDataBoundEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDataBoundEventArgs) object, which contains details of the row. Use this object to modify the parent and child row's appearance, add custom elements, or perform any other customization by using condition.

Here's an example illustrating how to utilize the `rowDataBound` event to customize the styles of parent and child rows based on the hasChildRecords property value in the dataSource object of the tree grid. In this example, the style of each row is adjusted based on the **hasChildRecords** property.

Please refer to the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/alt-row-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/alt-row-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/alt-row-cs2" %}

## Row height

The Syncfusion Tree Grid allows you to customize the height of rows based on your needs. This feature can be useful when you need to display more content in a row or when you want to reduce the height of rows to fit its content. You can achieve this by using the [rowHeight](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowheight) property of the TreeGrid component. This property allows you to change the height of the entire tree grid row to your desired value.

In the following example, the demonstration illustrates how to dynamically alter the row height using the `rowHeight` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-height-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-height-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-height-cs1" %}

>* The `rowHeight` property can only be used to set the height of the entire tree grid row. It cannot be used to set the height of individual cells within a row.
>* The `rowHeight` property applies the height to all rows in the tree grid, including the header and footer rows.
>* You can also set the height for a specific row using the `rowHeight` property of the corresponding row object in the `rowDataBound` event.

### Customize row height for particular row 

Customizing the row height for a particular row can be useful when you want to display more content in a particular row, reduce the height of a row to fit its content, or make a specific row stand out from the other rows in the tree grid. This can be achieved by using the [rowHeight](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowheight) property of the TreeGrid component along with the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdatabound) event.

The `rowHeight` property of the TreeGrid component allows you to set the height of all rows in the tree grid to a specific value. However, if you want to customize the row height for a specific row based on the row data, you can use the `rowDataBound` event. This event is triggered every time a request is made to access row information, element, or data, and before the row element is appended to the Tree Grid element.

In the below example, the row height for the row with **taskID** as '5' is set as '90px' using the `rowDataBound` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-height-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-height-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-height-cs2" %}

>* In virtual scrolling mode, it is not applicable to set different row heights.
>* You can customize the row height of multiple rows by checking the relevant criteria in the `rowDataBound` event and setting the `rowHeight` property accordingly.
>* In the `rowDataBound` event handler, you can access the current row using the [args.row](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDataBoundEventArgs/#row) property and set the `rowHeight` property for that row using the setAttribute method.

## Row hover

The Row Hover feature in Tree Grid provides a visual effect when the mouse pointer hovers over the rows, making it easy to highlight and identify the selected row. This feature can also improve the readability of data in the tree grid. The row hover effect can be enabled or disabled using the [enableHover](https://ej2.syncfusion.com/documentation/api/treegrid/#enablehover) property of the TreeGrid component.

By default, the `enableHover` property is set to **true**, which means that the row hovering effect is enabled. To disable the row hover effect, set the `enableHover` property to **false**.

Here is an example that demonstrates how to enable/disable the Row Hover feature:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-hover-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-hover-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-hover-cs1" %}

> The `enableHover` property applies to the entire tree grid, not individual rows or columns.

### Custom actions or items on row hover 

You can execute custom actions or display custom items when hovering over rows by using the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdatabound) event of the tree grid.

The `rowDataBound` event is triggered every time a request is made to access row information, element, or data, before the row element is appended to the Tree Grid element.

Here's an illustrative example demonstrating how to implement a custom action using the `rowDataBound` event. In this event, when hovering over a row, a tooltip with a button is displayed. Clicking the button reveals a custom message.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { RowDataBoundEventArgs } from '@syncfusion/ej2-grids';
import { sampleData } from './datasource';
import { Tooltip } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';

@Component({
  selector: 'app-container',
  template: `<div id='show' style="padding:0px 0px 20px 0px;" >
            </div>
            <p id="message">{{message}}</p>
            <ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='315' childMapping='subtasks' (rowDataBound)='rowDataBound($event)' >
                  <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                  </e-columns>
            </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];
  @ViewChild('treegrid')
  public treegrid: TreeGridComponent | undefined;
  public message: string = '';

  ngOnInit(): void {
    this.data = sampleData;
  }

  rowDataBound(args: RowDataBoundEventArgs): void {
    //Here bind mouse over event while hovering over the row
    (args.row as HTMLElement).addEventListener(
      'mouseover',
      (mouseargs: MouseEvent) => {
        //Here button creation
        const buttonId = 'element_' + (args.data as any)['taskID'];
        const buttonElement = document.createElement('button');
        buttonElement.id = buttonId;
        buttonElement.textContent = 'Row details';
        let target: any;

        //Set tooltip target
        if (mouseargs && mouseargs.target != null) {
          if ((mouseargs.target as any).classList.contains('e-rowcell')) {
            target = mouseargs.target;
          } else {
            target = null;
          }
        }
        
        //Tooltip creation
        const tooltip: Tooltip = new Tooltip(
          {
            content: buttonElement,
            width: '100px',
            height: '40px',
            opensOn: 'Hover',
          },
          target
        );
        
        //Button click event
        buttonElement.addEventListener('click', () => {
          // Handle button click here
          this.message = `Button clicked for task ID: ${
            (args.data as any)['taskID']
          }`;
        });
      }
    );
  }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-hover-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-hover-cs3" %}

### How to get the row information when hovering over the cell

You can retrieve row information when hovering over a specific cell. This can be useful if you want to display additional details or perform some action based on the data in the row. This can be achieved by using the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdatabound) event and the [getRowInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getrowinfo) method of the Tree Grid.

* The `rowDataBound` event is triggered every time a request is made to access row information, element, or data, before the row element is appended to the Tree Grid element.
* The `getRowInfo` method is used to retrieve the row information when hovering over a specific cell. This method takes a single parameter, which is the target element that is being hovered over.

Here's an example that demonstrates how to use the `rowDataBound` event and `getRowInfo` method to retrieve the row information when hovering over a cell in the Syncfusion Tree Grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-hover-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-hover-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-hover-cs2" %}

>The `getRowInfo` method can only be used in the `rowDataBound` event. Attempting to use it elsewhere will result in an error.

## Adding a new row programmatically

The Syncfusion Tree Grid provides a way to add a new row to the tree grid programmatically. This feature is useful when you want to add a new record to the tree grid without having the manually enter data in the tree grid. This can be done using the [addRecord](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#addrecord) method of the Tree Grid.

The `addRecord` method takes three parameters:

* The **data** object representing the new row to be added
* The **index** at which the new row should be inserted. If no index is specified, the new row will be added at the end of the Tree Grid.
* The **new row position**, which determines where the new row should be inserted based on the [newRowPosition](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#newrowposition) property.

In the tree grid, the `newRowPosition` property offers the following positions to add the row:

* **Top** : When you set `newRowPosition` to **Top**, the new row will be positioned at the top of the Tree Grid.
* **Bottom** : When you set `newRowPosition` to **Bottom**, the new row will be positioned at the bottom of the Tree Grid.
* **Above** : Setting `newRowPosition` to **Above** allows you to position the new row above a specified target row. This is particularly useful when you want to insert a row above an existing one.
* **Below** : Setting `newRowPosition` to **Below** allows you to position the new row below a specified target row. This is beneficial for inserting a row immediately after another.
* **Child** : Selecting **Child** for `newRowPosition` designates the new row as a child of a specified parent row. This is useful for creating hierarchical structures within the Tree Grid, where the new row becomes a subordinate of the specified parent row.

Here's an example of how to add a new row using the `addRecord` method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/add-new-row-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/add-new-row-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/add-new-row-cs1" %}

>* If you want to add a new record to the beginning of the data source, you can pass **0** as the second parameter to the `addRecord `method.
>* If you do not specify an index, the new row will be added at the end of the tree grid.

## Show or hide a row using an external actions

In a Syncfusion tree grid, you can show or hide a particular row based on some external action, such as a checkbox click. This can be useful in scenarios where you want to hide certain rows from the tree grid temporarily, without removing them from the underlying data source. This can be achieved by using  the [getRowByIndex](https://ej2.syncfusion.com/documentation/api/treegrid/#getrowbyindex) method of the treegrid and `getRowsObject` method of the grid object within the tree grid instance along with the [change](https://ej2.syncfusion.com/angular/documentation/api/check-box/#change) event of the checkbox.

The `getRowsObject` method returns an array of row objects that represents all the rows in the tree grid. You can use this method to iterate through all the rows and access their data and index.

The `getRowByIndex` method returns the HTML element of a row at the specified index. You can use this method to get a specific row and apply changes to it.

In the following example, the **onCheckBoxChange** method is used to check whether the checkbox is checked or not. If it is checked, the method iterates through all the rows in the tree grid using the `getRowsObject` method. For each row, it checks whether the value in the **Duration** column is equal to '0'. If it is, the index of that row is obtained using the `getRowByIndex` method and hidden by setting its display style to "none". The index of the hidden row is also added to an array called hiddenRows.

If the checkbox is unchecked, the method iterates through the hiddenRows array and shows each row by setting its display style to an empty string. The hiddenRows array is also cleared.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  EditSettingsModel,
  TreeGridComponent,
} from '@syncfusion/ej2-angular-treegrid';
import { RowDataBoundEventArgs } from '@syncfusion/ej2-grids';
import { sampleData } from './datasource';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';

@Component({
  selector: 'app-container',
  encapsulation: ViewEncapsulation.None,
  template: `<div style="padding:2px 0px 0px 0px">
             <ejs-checkbox #checkbox label='Show / Hide Row' 
                  (change)="onCheckBoxChange($event)"></ejs-checkbox>
            </div>
            <div><p id="message"  style="color:red; text-align:center;font-weight: bold;">{{ message }}</p> </div>

            <ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='315' childMapping='subtasks' >
                  <e-columns>
                      <e-column field='taskID' headerText='Task ID' textAlign='Right' isPrimaryKey="true" width=90></e-column>
                      <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                      <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                      <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                  </e-columns>
            </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public rowIndex?: number;
  public hiddenRows: number[] = [];
  @ViewChild('treegrid')
  public treegrid: TreeGridComponent | undefined;
  public message?: string = '';

  ngOnInit(): void {
    this.data = sampleData;
  }
  public onCheckBoxChange(args: ChangeEventArgs) {
    if (args.checked) {
      for (let i = 0; i < (this.treegrid as TreeGridComponent).grid.getRowsObject().length;i++) {
        if (((this.treegrid as TreeGridComponent).grid.getRowsObject()[i].data as any).duration === 0
        ) {
          // check the row value
          this.rowIndex = (this.treegrid as TreeGridComponent).grid.getRowsObject()[i].index; 
          //get particular row index
          ((this.treegrid as TreeGridComponent).getRowByIndex(this.rowIndex) as HTMLElement).style.display = 'none'; //hide row
          this.hiddenRows.push(this.rowIndex as number); // add row index to hiddenRows array
        }
      }
      if (this.hiddenRows.length > 0) {
       this.message = `Rows with a duration column value of '0' have been hidden`;
      }
    } else {
      // Show hidden rows
      this.hiddenRows.forEach((rowIndex: number) => {
        ((this.treegrid as TreeGridComponent).getRowByIndex(rowIndex) as HTMLElement).style.display = '';
      });
      this.hiddenRows = [];
      this.message = 'Show all hidden rows';
    }
  }
}

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-treegrid-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-treegrid-cs1" %}

## How to get the row data and element

The Tree Grid provides several methods to retrieve row data and elements. This feature is useful when you need to access specific rows, perform custom operations, or manipulate the data displayed in the grid.

1. [getRowByIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getrowbyindex): This method returns the HTML element of a row at the specified index. It can be used to retrieve the element of a specific row in the tree grid.

    ```ts
    const rowElement = this.treegrid.getRowByIndex(rowIndex);
    ```

2. [getRowInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getrowinfo): This method allows you to retrieve row information based on a cell target element.

    ```ts
    const rowInformation = this.treegrid.getRowInfo(targetElement);
    ```

3. [getRows](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getrows): This method returns an array of all the row elements in the Tree Grid. If you need to retrieve row data and elements, you can combine the `getRows` method with the `getRowInfo` method.

    ```ts
     const rowElements = this.treegrid.getRows();
    ```

4. [getSelectedRowIndexes](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getselectedrowindexes): This method allows you to retrieve the collection of indexes of the selected rows. However, it does not directly provide the row elements and associated data. To access the row elements and data of the selected rows, you can combine the `getSelectedRowIndexes` method with `getRowByIndex` and `getRowInfo` method.

    ```ts
    const selectedIndexes = this.treegrid.getSelectedRowIndexes();
    ```
5. [getSelectedRows](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getselectedrows): This method returns an array of HTML elements representing the selected rows in the tree grid.By iterating over this array, you can access each row element and data using the `getRowInfo` method. This way, you can access both the row elements and their associated data for the selected rows.

    ```ts
    const selectedRowElements = this.treegrid.getSelectedRows();
    ```
## See also 

* [Render parent rows in collapsed state](https://ej2.syncfusion.com/angular/documentation/treegrid/columns/tree-column#render-parent-rows-in-collapsed-state)  
* [Retain expanded and collapsed state](https://ej2.syncfusion.com/angular/documentation/treegrid/columns/tree-column#retain-expanded-and-collapsed-state) 
* [Persist expanded collapsed state on page refresh using localStorage](https://ej2.syncfusion.com/angular/documentation/treegrid/columns/tree-column#persist-expanded-and-collapsed-states-on-page-refresh-using-localstorage)
* [Programmatically expand and collapse a row](https://ej2.syncfusion.com/angular/documentation/treegrid/columns/tree-column#programmatically-expand-and-collapse-a-row)
* [Expand and Collapse action events](https://ej2.syncfusion.com/angular/documentation/treegrid/columns/tree-column#expand-and-collapse-action-events)
