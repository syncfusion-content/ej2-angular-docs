---
layout: post
title: Rows in Angular Gantt component | Syncfusion
description: Learn here all about Rows in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Rows
documentation: ug
domainurl: ##DomainURL##
---

# Row in Angular Gantt component

Each row typically represents a single record or item from a data source. Rows in a Gantt chart are used to present data in both tabular and timeline chart formats. Each row displays a set of values representing the fields of an individual data record. Rows allow users to interact with the data in the Gantt chart. Users can select rows, edit cell values, perform taskbar editing in the chart side of the Gantt, perform sorting or filtering operations, and trigger events based on actions.

## Customize row styles 

Customizing the styles of rows in a Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt chart allows you to modify the appearance of rows to meet your design requirements. This feature is useful when you want to highlight certain rows or change the font style, background color, and other properties of the row to enhance the visual appeal of the gantt chart. To customize the row styles in the gantt, you can use CSS, properties, methods, or event support provided by the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt chart component.

### Using event

You can customize the appearance of the rows by using the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/gantt/#databound) event. This event is triggered after the data has been bound to the Gantt. You can use this event to modify the row's appearance, add custom elements, or perform any other customization. This can be achieved by using the [getRows](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getrows) method of treegrid object in gantt instance and `getChartRows` method of `ganttChartModule` in gantt component.

Here's an example illustrating how you can utilize the `dataBound` event to customize the styles of rows based on the value of the **Progress** column. This example involves inspecting the value of the Progress column for each row and adjusting a row’s style accordingly.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/rowstyle-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/rowstyle-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/rowstyle-cs1" %}

>* The [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#querycellinfo) event can also be used to customize grid cells and is triggered for every cell in the grid part of the gantt chart. It can be useful when you need to customize cells based on certain conditions or criteria. 
>* Similarly, [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdatabound) event can also be used to customize grid rows and is triggered for every row in the grid part of the gantt chart. It can be useful when you need to customize rows based on certain conditions or criteria.

### Using CSS

You can apply styles to the rows using CSS selectors. The Gantt chart provides a class name for each row element, which you can use to apply styles to that specific row. 

**Customize selected row**

You can customize the appearance of the selected row using CSS. This is useful when you want to highlight the currently selected row for improve the visual appeal of the Gantt chart. By default, the Gantt provides the CSS classes **.e-selectionbackground**, **.e-active** to style the selected row. You can customize this default style by overriding the **.e-selectionbackground** and **.e-active** classes with your own custom CSS styles.

To change the background color of the selected row, you can add the following CSS code to your application:

```css
 .e-gantt .e-selectionbackground, .e-gantt .e-active  {
                background-color: #f9920b !important;
            }
```

Here's an example of how to use the **.e-selectionbackground** and **.e-active** classes to style the selected row:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/rowstyle-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/rowstyle-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/rowstyle-cs3" %}

### Using method 

The Gantt chart provides below methods of treegrid object in gantt instance to customize the appearance of the rows in grid part :

1. [getRowByIndex](https://ej2.syncfusion.com/documentation/api/treegrid/#getrowbyindex): This method returns the HTML element of a row at the specified index. You can use this method to apply custom styles to a specific row.
2. [getRows](https://ej2.syncfusion.com/documentation/api/treegrid/#getrows): This method returns an array of all the row elements in the grid part. You can use this method to apply custom styles to all rows or to a specific set of rows based on some condition.
3. [getRowInfo](https://ej2.syncfusion.com/documentation/api/treegrid/#getrowinfo): This method returns the data object and index of the row corresponding to the specified row element. You can use this method to apply custom styles based on the data in a row.
4. [getSelectedRowIndexes](https://ej2.syncfusion.com/documentation/api/treegrid/#getselectedrowindexes): This method returns an array of the indexes of the selected rows in the grid part. You can use this method to apply custom styles to the selected rows.
5. [getSelectedRows](https://ej2.syncfusion.com/documentation/api/treegrid/#getselectedrows): This method returns an array of the HTML elements representing the selected rows in the grid part. You can use this method to directly loop through the selected rows and customize their styles.

Also the Gantt chart provides below methods to customize the appearance of the rows in chart part :

1. [getRowByIndex](https://ej2.syncfusion.com/documentation/api/gantt/#getrowbyindex): This method returns the HTML element of a chart row at the specified index. You can use this method to apply custom styles to a specific row.
2. `getChartRows`: This method returns an array of all the row elements in the chart part. You can use this method to apply custom styles to all rows or to a specific set of rows based on some condition.

The following example demonstrates how to use `getRowByIndex` method of treegrid object in gantt instance and `getRowByIndex` method of gantt chart component to customize the appearance of the row inside the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/gantt/#databound) event of the gantt chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/rowstyle-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/rowstyle-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/rowstyle-cs4" %}

## Styling parent and child rows

You can customize the appearance of the parent and child rows by utilizing the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/gantt/#databound) event. This event is triggered after the data has been bound to the Gantt. Use this event to modify the parent and child row's appearance, add custom elements, or perform any other customization by using condition. This can be achieved by using the [getRows](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getrows) method of treegrid object in gantt instance and `getChartRows` method of `ganttChartModule` in gantt component.

Here's an example illustrating how to utilize the `dataBound` event to customize the styles of parent and child rows based on the hasChildRecords property value in the dataSource object of the gantt. In this example, the style of each row is adjusted based on the **hasChildRecords** property.

Please refer to the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/rowstyle-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/rowstyle-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/rowstyle-cs2" %}

## Auto focus taskbar on row click 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt chart allows you to auto-scroll to the taskbar position in timeline when clicking the particular row. You can control this behaviour by using the [autofocustasks](https://ej2.syncfusion.com/angular/documentation/api/gantt/#autofocustasks) property of the Gantt chart component.

Here's an example of how you can utilize the `autofocustasks` property to auto-scroll the taskbar on row click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/rowfocus-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/rowfocus-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/rowfocus-cs1" %}

## Row height

The Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt chart allows you to customize the height of rows based on your needs. This feature can be useful when you need to display more content in a row or when you want to reduce the height of rows to fit its content. You can achieve this by using the [rowHeight](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowheight) property of the Gantt chart component. This property allows you to change the height of the entire gantt row to your desired value.

In the following example, the demonstration illustrates how to dynamically alter the row height using the `rowHeight` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/rowstyle-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/rowstyle-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/rowstyle-cs5" %}

>*	The `rowHeight` property can only be used to set the height of the entire gantt row. It cannot be used to set the height of individual cells within a row.
>*  The `rowHeight` property applies the height to all rows in the gantt chart, including the header rows.
>*	You can also set the height for a specific row using the `rowHeight` property of the corresponding grid row object in the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdatabound) event.

### Customize row height for particular row 

Customizing the row height for a particular row can be useful when you want to display more content in a particular row, reduce the height of a row to fit its content, or make a specific row stand out from the other rows in the gantt chart. This can be achieved by modifying CSS style `height` property of the particular row along with the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/gantt/#databound) event of the Gantt chart component, [getRowByIndex](https://ej2.syncfusion.com/documentation/api/treegrid/#getrowbyindex) method of the treegrid object in gantt instance and [getRowByIndex](https://ej2.syncfusion.com/documentation/api/gantt/#getrowbyindex) method of gantt chart component.

In the below example, the row height for the row with **TaskID** as '2' is set as '90px' using the `dataBound` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/rowstyle-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/rowstyle-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/rowstyle-cs6" %}

>* In virtual scrolling mode, it is not applicable to set different row heights.
>* You can customize the row height of multiple rows by checking the relevant criteria in the `dataBound` event and setting the `rowHeight` property accordingly.

## Row hover with custom action or items

You can execute custom actions or display custom items when hovering over rows by using the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/gantt/#databound) event of the gantt chart.

The `dataBound` event is triggered after the data has been bound to the Gantt chart.

Here's an illustrative example demonstrating how to implement a custom action using the `dataBound` event. In this event, when hovering over a row, a tooltip with a button is displayed. Clicking the button reveals a custom message.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from "@syncfusion/ej2-angular-buttons";

import { Component, ViewEncapsulation, OnInit, ViewChild, NgModule } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';
import { Tooltip } from '@syncfusion/ej2-popups';

@Component({
    imports: [
        GanttModule, ButtonModule
   ],
standalone: true,
    selector: 'app-root',
    template:
        `<div id='show' style="padding:0px 0px 20px 0px;" >
        </div>
        <p id="message">{{message}}</p>
        <ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data" 
        [taskFields]="taskSettings" [treeColumnIndex]='1' [splitterSettings] = "splitterSettings" (dataBound)='dataBound()'>     
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 ></e-column>
                <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=290></e-column>
                <e-column field='Progress' headerText='Progress' textAlign='Right' width=120></e-column>
                <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=120 ></e-column>
                <e-column field='Duration' headerText='Duration' textAlign='Right' width=90 ></e-column>
            </e-columns>
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    @ViewChild('gantt')
    public gantt?: GanttComponent;
    public message: string = '';
    public taskSettings?: object;
    public splitterSettings?: object;
    public ngOnInit(): void {
        this.data = GanttData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.splitterSettings = {
            position: '50%'
        };
    }
    dataBound() {
        //Here bind mouse over event while hovering over the row
        ((this.gantt as GanttComponent).getRootElement() as HTMLElement).addEventListener(
            'mouseover',
            (mouseargs: MouseEvent) => {
                //Here button creation
                const buttonId = 'element_' + '1';
                const buttonElement = document.createElement('button');
                buttonElement.id = buttonId;
                buttonElement.textContent = 'Row details';
                let target: any;

                //Set tooltip target
                if (mouseargs && mouseargs.target != null) {
                    if ((mouseargs.target as any).classList.contains('e-rowcell') || (mouseargs.target as any).classList.contains('e-chart-row-cell')
                    ) {
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
                    let rowIndex;
                    if(target.closest('.e-row') !== null){
                        rowIndex = target.closest('.e-row').getAttribute('data-rowindex');
                    }else{
                        rowIndex = target.closest('.e-chart-row').getAttribute('data-rowindex');
                    }
                    // Handle button click here
                    const data: any = (this.gantt as GanttComponent).currentViewData[rowIndex].ganttProperties;
                    this.message = `Button clicked for Task ID: ${ data.taskId }`;
                });
            }
        );
    }
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/rowhover-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/rowhover-cs1" %}

## Adding a new row programmatically

The Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt chart provides a way to add a new row to the gantt chart programmatically. This feature is useful when you want to add a new record to the gantt without having manually enter data in the gantt. This can be done using the [addRecord](https://ej2.syncfusion.com/angular/documentation/api/gantt/#addrecord) method of the Gantt chart.

The `addRecord` method takes three parameters:

* The **data** object representing the new row to be added
* The **new row position**, which determines where the new row should be inserted based on the [newRowPosition](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#newrowposition) property.
* The **index** at which the new row should be inserted. If no index is specified, the new row will be added at the top of the Gantt chart.

In the gantt chart, the `newRowPosition` property offers the following positions to add the row:

* **Top** : When you set `newRowPosition` to **Top**, the new row will be positioned at the top of the Gantt chart.
* **Bottom** : When you set `newRowPosition` to **Bottom**, the new row will be positioned at the bottom of the Gantt chart.
* **Above** : Setting `newRowPosition` to **Above** allows you to position the new row above a specified target row. This is particularly useful when you want to insert a row above an existing one.
* **Below** : Setting `newRowPosition` to **Below** allows you to position the new row below a specified target row. This is beneficial for inserting a row immediately after another.
* **Child** : Selecting **Child** for `newRowPosition` designates the new row as a child of a specified parent row. This is useful for creating hierarchical structures within the Gantt chart, where the new row becomes a subordinate of the specified parent row.

Here's an example of how to add a new row using the `addRecord` method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/addrow-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/addrow-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/addrow-cs1" %}

>* If you want to add a new record to the beginning of the data source, you can pass **0** as the third parameter to the `addRecord `method.
>* If you do not specify an index, the new row will be added at the top of the gantt.

## Show or hide a row using an external actions

In a Syncfusion<sup style="font-size:70%">&reg;</sup> gantt chart, you can show or hide a particular row based on some external action, such as a checkbox click. This can be useful in scenarios where you want to hide certain rows from the gantt temporarily, without removing them from the underlying data source. This can be achieved by using  the [getRowByIndex](https://ej2.syncfusion.com/documentation/api/treegrid/#getrowbyindex) method of treegrid object in gantt instance, [getRowByIndex](https://ej2.syncfusion.com/documentation/api/gantt/#getrowbyindex) method of gantt chart component and `getRowsObject` method of grid object within the gantt instance along with the [change](https://ej2.syncfusion.com/angular/documentation/api/check-box/#change) event of the checkbox

The `getRowsObject` method returns an array of row objects that represents all the rows in the grid part. You can use this method to iterate through all the rows and access their data and index.

The `getRowByIndex` method returns the HTML element of a row at the specified index. You can use this method to get a specific row and apply changes to it.

In the following example, the **onCheckBoxChange** method is used to check whether the checkbox is checked or not. If it is checked, the method iterates through all the rows in the grid part using the `getRowsObject` method. For each row, it checks whether the value in the **TaskName** column is equal to "Perform Soil test". If it is, the index of that row is obtained using the `getRowByIndex` method and hidden by setting its display style to "none". The index of the hidden row is also added to an array called hiddenRows.

If the checkbox is unchecked, the method iterates through the hiddenRows array and shows each row by setting its display style to an empty string. The hiddenRows array is also cleared.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/hiderow-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/hiderow-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/hiderow-cs1" %}

## How to get the row data and element

Gantt chart provides several methods to retrieve row data and elements. This feature is useful when you need to access specific rows, perform custom operations, or manipulate the data displayed in the gantt.

1. [getRowByIndex](https://ej2.syncfusion.com/documentation/api/treegrid/#getrowbyindex): This method returns the HTML element of a grid row at the specified index. It can be used to retrieve the element of a specific row in the grid part.

    ```ts
    const rowElement = this.gantt.treeGrid.getRowByIndex(rowIndex);
    ```

2. [getRowInfo](https://ej2.syncfusion.com/documentation/api/treegrid/#getrowinfo): This method allows you to retrieve row information based on a cell target element.

    ```ts
    const rowInformation = this.gantt.treeGrid.getRowInfo(targetElement);
    ```

3. [getRows](https://ej2.syncfusion.com/documentation/api/treegrid/#getrows): This method returns an array of all the row elements in the grid part. If you need to retrieve row data and elements, you can combine the `getRows` method with the `getRowInfo` method.

    ```ts
     const rowElements = this.gantt.treeGrid.getRows();
    ```

5. [getSelectedRowIndexes](https://ej2.syncfusion.com/documentation/api/treegrid/#getselectedrowindexes): This method allows you to retrieve the collection of indexes of the selected rows. However, it does not directly provide the row elements and associated data. To access the row elements and data of the selected rows, you can combine the `getSelectedRowIndexes` method with `getRowByIndex` and `getRowInfo` method.

    ```ts
    const selectedIndexes = this.gantt.treeGrid.getSelectedRowIndexes();
    ```
6. [getSelectedRows](https://ej2.syncfusion.com/documentation/api/treegrid/#getselectedrows): This method returns an array of HTML elements representing the selected rows in the grid part. By iterating over this array, you can access each row element and data using the `getRowInfo` method. This way, you can access both the row elements and their associated data for the selected rows.

    ```ts
    const selectedRowElements = this.gantt.treeGrid.getSelectedRows();
    ```
7. [getRowByIndex](https://ej2.syncfusion.com/documentation/api/gantt/#getrowbyindex): This method returns the HTML element of a chart row at the specified index. It can be used to retrieve the element of a specific row in the chart part.

    ```ts
     const rowElement = this.gantt.getRowByIndex(rowIndex);
    ```

## See Also

* [Render parent rows in collapsed state](https://ej2.syncfusion.com/angular/documentation/gantt/columns/treecolumn#render-parent-rows-in-collapsed-state)  
* [Retain expanded and collapsed state](https://ej2.syncfusion.com/angular/documentation/gantt/columns/treecolumn#retain-expanded-and-collapsed-state) 
* [Persist expanded collapsed state on page refresh using localStorage](https://ej2.syncfusion.com/angular/documentation/gantt/columns/treecolumn#persist-expanded-and-collapsed-state-on-page-refresh-using-localstorage)
* [Programmatically expand and collapse a row](https://ej2.syncfusion.com/angular/documentation/gantt/columns/treecolumn#programmatically-expand-and-collapse-a-row)
* [Expand and Collapse action events](https://ej2.syncfusion.com/angular/documentation/gantt/columns/treecolumn#expand-and-collapse-action-events)
