---
layout: post
title: Rows in Angular Gantt Chart Component | Syncfusion
description: Learn here all about Rows in Syncfusion Angular Gantt Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Rows
documentation: ug
domainurl: ##DomainURL##
---

# Row in Angular Gantt Chart Component

Each row typically represents a single record or item from a data source. Rows in a Gantt chart are used to present data in both tabular and timeline chart formats. Each row displays a set of values representing the fields of an individual data record. Rows allow you to interact with the data in the Gantt chart. You can select rows, edit cell values, perform taskbar editing in the chart side of the Gantt, perform sorting or filtering operations, and trigger events based on actions.

## Customize row styles 

Customizing row styles in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt chart allows you to modify the appearance of rows to meet design requirements, such as highlighting specific rows or adjusting font styles, background colors, and other visual properties. This can be achieved using CSS, built-in properties, methods, or event support provided by the component, offering flexibility for both static and dynamic styling.

### Using event

You can customize the row appearance in the Angular Gantt Chart component by using the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/gantt/events#rowdatabound) event. This event allows you to apply styles or perform other row-level modifications based on the data or specific logic requirements.

The following example demonstrates how to customize row styles based on the value of the **Progress** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/rowstyle-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/rowstyle-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/rowstyle-cs1" %}

>* The [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt#querycellinfo) event can also be used to customize grid cells and is triggered for every cell in the grid part of the Gantt chart. It can be useful when you need to customize cells based on certain conditions or criteria. 

### Using CSS

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt chart allows row-level customization through CSS. Each row is assigned specific class names, enabling precise styling to improve readability and visual presentation.

**Customize selected row:**

To highlight the currently selected row, you can override the default styles applied by the Gantt chart. The following CSS classes are used by default:

```css
.e-gantt .e-selectionbackground, .e-gantt .e-gantt-chart .e-active, .e-gantt .e-active > .e-chart-row-border {
  background-color: #f9920b !important;
  border: 1px solid red !important;
}
```

**Alternate row customization:**

To create a visual separation between consecutive rows, you can style alternate rows using the **.e-altrow** class.

```css
.e-gantt .e-altrow {
  background-color: #fafafa;
}

```

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

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt Chart component provides methods to customize the appearance of rows in both the grid and chart sections. These methods are accessible through the `treeGrid` object and the Gantt instance.

To customize rows in the grid section, you can use the following methods:

- `getRowByIndex`: Returns the HTML element of a row at a specific index.
- `getRows`: Returns all row elements in the grid.
- `getRowInfo`: Provides the data and index for a row element.
- `getSelectedRowIndexes`: Returns indexes of selected rows.
- `getSelectedRows`: Returns HTML elements of selected rows.

To customize rows in the chart section, the following methods are available:

- `getRowByIndex`: Returns the HTML element of a chart row at a specific index.
- `getChartRows`: Returns all chart row elements.

The following example demonstrates how to use the `getRowByIndex` method of the `treegrid` object in the Gantt instance and the `getRowByIndex` method of the Gantt chart component to customize the appearance of a row within the [dataBound](https://ej2.syncfusion.com/angular/documentation/gantt/events#databound) event of the Gantt chart.

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

You can customize the styling of parent and child rows in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt chart by handling the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/gantt/events#rowdatabound) event, which is triggered as each row is rendered. Within this event, the `hasChildRecords` property can be used to identify parent rows, allowing you to apply distinct styles that visually separate them from child rows.

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

You can enable automatic scrolling to the corresponding taskbar in the timeline when a row is clicked in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt chart by using the [`autofocustasks`](https://ej2.syncfusion.com/angular/documentation/api/gantt#autofocustasks) property. This feature ensures that the selected task is brought into view within the timeline area, improving navigation and focus during interaction.

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

You can customize row height in the Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt chart by setting the [rowHeight](https://ej2.syncfusion.com/angular/documentation/api/gantt#rowheight) property. This helps display additional content within a row or reduce its height to align with the content size.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/rowstyle-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/rowstyle-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/rowstyle-cs5" %}

>*	The `rowHeight` property can only be used to set the height of the entire Gantt row. It cannot be used to set the height of individual cells within a row.
>*  The `rowHeight` property applies the height to all rows in the Gantt chart, including the header rows.

### Customize row height for particular row 

You can customize the height of a specific row in the Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt chart using the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/gantt/events#rowdatabound) event. Within this event, conditionally apply a height value to the [rowHeight](https://ej2.syncfusion.com/angular/documentation/api/gantt#rowheight) property for rows based on their data.

In the example below, the row height is set to **90px** for the row where **TaskID** is 2.

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
>* You can customize the row height of multiple rows by checking the relevant criteria in the [dataBound](https://ej2.syncfusion.com/angular/documentation/gantt/events#databound) event and setting the `rowHeight` property accordingly.

## Row hover with custom action or items

You can execute custom actions or display items on row hover in the Gantt chart by using the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/gantt#databound) event.

The following demonstrates how to implement a custom action using the `dataBound` event. In this event, when hovering over a row, a tooltip containing a button is displayed. Clicking the button reveals a custom message.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';
import { Tooltip } from '@syncfusion/ej2-popups';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonModule],
  template: `
    <div style="padding: 0 0 20px 0;"></div>
    <p id="message">{{ message }}</p>
    <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings" (dataBound)="dataBound()">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
      </e-columns>
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public gantt?: GanttComponent;
  public data?: object[];
  public message: string = '';
  public taskSettings?: object;
  public splitterSettings?: object;

  ngOnInit(): void {
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

  dataBound(): void {
    const ganttElement = (this.gantt as GanttComponent).getRootElement() as HTMLElement;
    ganttElement.addEventListener('mouseover', (mouseargs: MouseEvent) => {
      let target: any;
      if (
        mouseargs.target &&
        ((mouseargs.target as HTMLElement).classList.contains('e-rowcell') ||
          (mouseargs.target as HTMLElement).classList.contains('e-chart-row-cell'))
      ) {
        target = mouseargs.target as HTMLElement;
      }
      if (target) {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Row details';
        const tooltip = new Tooltip({
          content: buttonElement,
          width: '100px',
          height: '40px',
          opensOn: 'Hover'
        }, target);
        buttonElement.addEventListener('click', () => {
          const rowElement = target.closest('.e-row') || target.closest('.e-chart-row');
          if (rowElement) {
            const rowIndex = rowElement.getAttribute('aria-rowindex');
            if (rowIndex !== null && this.gantt) {
              const rowInfo = this.gantt.treeGrid.getRowInfo(target);
              const rowData = rowInfo?.rowData as any;
              if (rowData) {
                this.message = `Button clicked for Task ID: ${rowData['TaskID']}`;
              }
            }
          }
        });
      }
    });
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

The Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt chart allows adding a new row programmatically using the `addRecord` method. This is useful when you want to insert a record without manually entering data. The method accepts three parameters:

- A **data object** representing the new row  
- A **newRowPosition**, which controls where the row is inserted based on the `newRowPosition` property.  
- An **index** to specify the insertion position; if not provided, the new row will be added at the top of the Gantt chart by default.  

Supported `newRowPosition` values:

  - **Top**: Adds the row at the beginning of the chart.
  - **Bottom**: Adds the row at the end of the chart.
  - **Above**: Inserts the row above a specified target row.
  - **Below**: Inserts the row below a specified target row.
  - **Child**: Adds the row as a child under a specified parent row, enabling hierarchical structure.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/addrow-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/addrow-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/addrow-cs1" %}

>* If you want to add a new record to the beginning of the data source, you can pass **0** as the third parameter to the [addRecord](https://ej2.syncfusion.com/angular/documentation/api/gantt#addrecord) method.
>* If you do not specify an index, the new row will be added at the top of the Gantt.

## Show or hide a row using an external actions

You can show or hide specific rows in the Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt chart based on external actions like a checkbox click, which is useful for temporarily hiding rows without changing the data source. This can be achieved using `getRowByIndex` from the `treeGrid` object and Gantt chart component, and `getRowsObject` from the Gantt instance, along with the [change](https://ej2.syncfusion.com/angular/documentation/api/check-box#change) event to manage row visibility dynamically.

In this example, the `onCheckBoxChange` method checks the checkbox state and uses `getRowsObject` to iterate through all grid rows. If the **TaskName** value is **Perform Soil test**, the row is hidden using `getRowByIndex` by setting its display style to **none**, and its index is stored in a `hiddenRows` array. When the checkbox is unchecked, the method loops through `hiddenRows` to show each row by resetting its display style and then clears the array.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/hiderow-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/hiderow-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/hiderow-cs1" %}

## See Also

* [Render parent rows in collapsed state](https://ej2.syncfusion.com/angular/documentation/gantt/columns/treecolumn#render-parent-rows-in-collapsed-state)  
* [Retain expanded and collapsed state](https://ej2.syncfusion.com/angular/documentation/gantt/columns/treecolumn#retain-expanded-and-collapsed-state) 
* [Persist expanded collapsed state on page refresh using localStorage](https://ej2.syncfusion.com/angular/documentation/gantt/columns/treecolumn#persist-expanded-and-collapsed-state-on-page-refresh-using-localstorage)
* [Programmatically expand and collapse a row](https://ej2.syncfusion.com/angular/documentation/gantt/columns/treecolumn#programmatically-expand-and-collapse-a-row)
* [Expand and Collapse action events](https://ej2.syncfusion.com/angular/documentation/gantt/columns/treecolumn#expand-and-collapse-action-events)
