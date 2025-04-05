---
layout: post
title: Column template in Angular Gantt component | Syncfusion
description: Learn here all about Column template in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column template 
documentation: ug
domainurl: ##DomainURL##
---

# Column template in Angular Gantt component

Gantt chart component provides a [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#template) option that allows you to display custom elements in a column instead of the field value. This can be useful when you need to display images, buttons, or other custom content within a column.

> When using template columns, they are primarily meant for rendering custom content and may not provide built-in support for gantt actions like sorting, filtering, editing unless [field](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#field) property of the column is specified.

## Render image in a column

To render an image in a gantt column, you need to define a template for the column using the [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#template) property. The `template` property expects the HTML element or a function that returns the HTML element.

The following example demonstrates how to define a `template` for the **Resources** field that displays an image element. The `template` property is set to the HTML element that contains an image tag.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { editingResources } from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [treeColumnIndex]='1' [taskFields]="taskSettings" [allowResizing] = 'true' rowHeight='50' [splitterSettings]="splitterSettings" [resourceFields]="resourceFields" [resources]="resources">
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' textAlign= 'Left' width= 100></e-column>
                <e-column field='TaskName' headerText= 'Task Name' width= 290></e-column>
                <e-column field= 'resources' headerText= 'Resources' width= 250>
                    <ng-template #template let-data>
                        <div *ngIf="data.ganttProperties.resourceNames">
                            <img src="../assets/images/{{data.TaskID}}.png" style="height:40px;width:40px"/>{{data.ganttProperties.resourceNames}}
                        </div>
                    </ng-template>
                </e-column>
                <e-column field= 'StartDate' headerText='Start Date' width= 150 ></e-column>
                <e-column field= 'Duration' headerText='Duration' width= 150 ></e-column>
                <e-column field= 'Progress' headerText= 'Progress' width= 150 ></e-column>
            </e-columns></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public resources?: object[];
    public resourceFields?: object;
    public ngOnInit(): void {
        this.data = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0,
                Progress: 30, resources: [1], info: 'Measure the total property area alloted for construction'
            },
            {
                TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '2',
                resources: [2, 3, 5], info: 'Obtain an engineered soil test of lot where construction is planned.' +
                    'From an engineer or company specializing in soil testing'
            },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3', Progress: 30, resources: [9, 11], },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'),
                Duration: 3, Predecessor: '4', Progress: 30, resources: [4],
                info: 'Develop floor plans and obtain a materials list for estimations'
            },
            {
                TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'),
                Duration: 3, Predecessor: '6', resources: [4, 8], info: ''
            },
            {
                TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'),
                Duration: 0, Predecessor: '7', info: ''
            }
        ]
    },
            ];
        this.taskSettings = {
             id: 'TaskID',
            name: 'TaskName',
            resourceInfo: 'resources',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks',
        };
        this.splitterSettings = {
            position: '75%'
        };
        this.resourceFields = {
            id: 'resourceId',
            name: 'resourceName'
        };
        this.resources = editingResources;
    }
}

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/column-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/column-template-cs1" %}

> The [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#template) option allows to define any HTML content within a column.

## Render hyperlink in a column

The Gantt chart component provides support for rendering hyperlink columns and performing routing on click using the [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#template) property. This feature is useful when displaying data that requires a link to another page or website.

The following example demonstrates, how to render hyperlink column in the gantt using the `template` property of the `e-column` tag. To define a `template` for the column,  you can use the `ng-template` with the `a` tag to create the hyperlink. The `onClick` function is triggered when the hyperlink is clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data"
        [taskFields]="taskSettings"  [splitterSettings] = "splitterSettings"> 
        <e-columns>
            <e-column field='TaskID' headerText='TaskID'  width=90></e-column>
            <e-column field='TaskName' headerText='TaskName' width=290 >
            <ng-template #template let-data>
            <div>
                <a href="#" (click)="onClick($event, data.TaskName)">
                {{ data.TaskName }}
                </a>
            </div>
            </ng-template>
            </e-column>
            <e-column field='Duration' headerText='Duration' width=90></e-column>
            <e-column field='Progress' headerText='Progress' width=120 ></e-column>
        </e-columns>   
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    @ViewChild('gantt')
    public gantt?: GanttComponent;
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
            position: '75%'
        };

    }
    onClick(event: MouseEvent, TaskName: string) {
        var url = 'https://www.meaningofthename.com/';
        var searchUrl = url + TaskName;
        window.open(searchUrl);
    }
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/column-template-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/column-template-cs2" %}

>The window.open() method is a built-in JavaScript function that opens a new browser window or tab with the specified URL.

## Render other components in a column

The column template has options to render a custom component in a gantt column instead of a field value.

### Render LineChart component in a column

The [LineChart](https://ej2.syncfusion.com/angular/documentation/sparkline/getting-started) component of Syncfusion<sup style="font-size:70%">&reg;</sup> provides an elegant way to represent and compare data over time. It displays data points connected by straight line segments to visualize trends in data.

In the following example, we rendered the Sparkline Chart component in the Gantt column by defining the [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#template) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Sparkline } from '@syncfusion/ej2-angular-charts';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data" (created)="renderGridSparkline()"
        [taskFields]="taskSettings" [treeColumnIndex]='1'  [splitterSettings] = "splitterSettings">    
            <e-columns>
                <e-column field='TaskID' headerText='TaskID'  width=100></e-column>
                <e-column field='TaskName' headerText='TaskName' width=290 ></e-column>
                <e-column field='customData' headerText='Custom Data' width='280'>
                    <ng-template #template let-ganttdata>
                        <div id="spkline{{ganttdata.TaskID}}"></div>
                    </ng-template>
                 </e-column>
            </e-columns>
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[] = GanttData;
    @ViewChild('gantt')
    public gantt?: GanttComponent;
    public taskSettings?: object;
    public splitterSettings?: object;
    public lineData: object[] = [
        [0, 6, -4, 1, -3, 2, 5],
        [5, -4, 6, 3, -1, 2, 0],
        [6, 4, 0, 3, -2, 5, 1],
        [4, -6, 3, 0, 1, -2, 5],
        [3, 5, -6, -4, 0, 1, 2],
        [1, -3, 4, -2, 5, 0, 6],
        [2, 4, 0, -3, 5, -6, 1],
        [5, 4, -6, 3, 1, -2, 0],
        [0, -6, 4, 1, -3, 2, 5],
        [6, 4, 0, -3, 2, -5, 1],
    ];
    public ngOnInit(): void {
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks',
            customData: 'customData'
        };
        this.splitterSettings = {
            position: '75%'
        };
    }
    public getSparkData(type: string, count: number) {
        return this.lineData[count] as number[];
    }
    public renderGridSparkline(): void {
        setTimeout(() => {
            const length = (this.gantt as GanttComponent).treeGrid.getDataRows().length
            for (let i: number = 1; i <= length; i++) {
                let line: Sparkline = new Sparkline({
                    height: '50px',
                    width: '90%',
                    lineWidth: 2,
                    valueType: 'Numeric',
                    fill: '#3C78EF',
                    dataSource: this.getSparkData('line', i)
                });
                line.appendTo('#spkline' + i);
            }
        }, 100)
    }
}

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/column-template-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/column-template-cs9" %}

### Render ColorPicker component in a column

The [ColorPicker](https://ej2.syncfusion.com/angular/documentation/color-picker/getting-started) component of Syncfusion<sup style="font-size:70%">&reg;</sup> provides a user-friendly way to select colors from a pre-defined color palette or custom colors. It can be used in a variety of scenarios such as picking a theme color or changing the color of an element on a page.

In the following code, we rendered the ColorPicker component in the Gantt column by defining the [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#template) property.

```
<div>
    <input ejs-colorpicker #colorPicker id="color-picker" type="color" [mode]="modeSettings" (change)="change($event)"/>
</div>

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/column-template-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/column-template-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/column-template-cs3" %}

### Render DropDownList component in a column

To render a custom component in a gantt column, you need to define a template for the column using the [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#template) property. In the following code, we rendered the [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) component in the **Task Priority** column by defining the `template` property.

```
<div>
    <ejs-dropdownlist [value]='data.Priority' width="100" [dataSource]='dropData' [popupHeight]='150' [popupWidth]='150' ></ejs-dropdownlist>
</div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/column-template-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/column-template-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/column-template-cs4" %}

### Render Chip component in a column

The Gantt chart component provides support for rendering [Chips](https://ej2.syncfusion.com/angular/documentation/chips/getting-started) component in a column using the [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#template) property. This feature is useful when displaying data that requires a chip component to be rendered in a column.

In the following code, we rendered the Chips component in the Gantt **TaskName** column by defining the `template` property.

```
<div>
    <ejs-chiplist id="chip" [text]="data.TaskName"></ejs-chiplist>
</div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/column-template-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/column-template-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/column-template-cs5" %}

## Using condition template

The conditional column [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#template) allows you to display template elements based on specific conditions.

The following example demonstrates how to use the `template` property with the `ng-template` element and add `*ngIf` directive to render the checkbox based on the value of the **Discontinued** field. The **Discontinued** field will render a checkbox in each row for which the value of the **Discontinued** field is **true**. 

```
<e-column field='Discontinued' headerText='Discontinued' width='150' textAlign='Center'>
                <ng-template #template let-data>
                    <div *ngIf="data.Discontinued; else elseblock">
                            <input type="checkbox" checked>
                    </div>
                </ng-template>
                <ng-template #elseblock><input type="checkbox"></ng-template>
            </e-column>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/column-template-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/column-template-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/column-template-cs6" %}

>You can use any template element or custom component instead of the checkbox in the conditional template based on your requirement.

## How to get the row object by clicking on the template element

The Gantt chart component allows you to retrieve the row object of the selected record when clicking on a [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#template) element. This feature can be useful when you need to perform custom actions based on the selected record.

In the following code, the button element is rendered in the **Task Data** column and `click` event binding is used to call the showDetails method when the template element is clicked. The showDetails method is passed the data object as an argument from the template variable, which allows you to access the selected row object and display it in the dialog popup.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { GanttData, SelectedRecordDataType } from './data';

@Component({
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data"
        [taskFields]="taskSettings" [treeColumnIndex]='1'  [splitterSettings] = "splitterSettings">  
            <e-columns>
                <e-column field='TaskID' headerText='Task ID'  width=90></e-column>
                <e-column field='TaskName' headerText='Task Name' width=290 ></e-column>
                <e-column field='TaskData' headerText='Task Data' width='150' isPrimaryKey='true'>
                    <ng-template #template let-data>
                        <button class="empData" (click)="showDetails(data)">View</button>
                        <div [hidden]="!selectedRecord || selectedRecord !== data">
                            <ejs-dialog
                                #Dialog
                                [visible]="false"
                                width="50%"
                                showCloseIcon="true"
                                [header]="header"
                            >         
                                <p><b>TaskID:</b> {{ selectedRecord?.TaskID }}</p>
                                <p><b>TaskName:</b> {{ selectedRecord?.TaskName }}</p>
                                <p><b>Duration:</b> {{ selectedRecord?.Duration }}</p>
                            </ejs-dialog>
                        </div>
                    </ng-template>
                </e-column>
                <e-column field='Duration' headerText='Duration' width=90></e-column>
                <e-column field='Progress' headerText='Progress' width=120 ></e-column>
            </e-columns>  
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    public header?: string;
    @ViewChild('gantt')
    public gantt?: GanttComponent;
    @ViewChild('Dialog')
    public dialog?: DialogComponent;
    public taskSettings?: object;
    public splitterSettings?: object;
    public selectedRecord?: SelectedRecordDataType;
    public ngOnInit(): void {
        this.data = GanttData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            taskdata: 'TaskData',
            child: 'subtasks'
        };
        this.splitterSettings = {
            position: '75%'
        };
        this.header = 'Selected Row Details';
    }
    showDetails(data: SelectedRecordDataType) {
        (this.dialog as DialogComponent).visible = true;
        this.selectedRecord = data;
    }
}

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/column-template-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/column-template-cs7" %}

## Use custom helper inside the template

The Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt chart allows you to use custom helpers inside the `ng-template` directive of a column. This feature allows you to create complex templates that can incorporate additional helper functions that are not available through the default [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#template) syntax.

To use the custom helper function inside a column template, you must first add the function to the template's context. This can be done by using the let keyword to create a new variable that references the function.

The following example demonstrates how to use a custom helper function inside the `template` property, using the `ng-template` element for the Progress column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data"
        [taskFields]="taskSettings" [treeColumnIndex]='1'  [splitterSettings] = "splitterSettings">  
            <e-columns>
                <e-column field='TaskID' headerText='TaskID'  width=80></e-column>
                <e-column field='TaskName' headerText='TaskName' width=290 ></e-column>
                <e-column field='Progress' headerText='Progress' width=120 >
                <ng-template #template let-data>
                        {{ formatProgress(data.Progress) }}
                </ng-template>
                </e-column>
                <e-column field='Duration' headerText='Duration' width=90></e-column>
            </e-columns>  
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    @ViewChild('gantt')
    public gantt?: GanttComponent;
    public taskSettings?: object;
    public splitterSettings?: object;
    public formatProgress(value: number): string {
        return value.toFixed(3) + '% ';
    }
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
            position: '75%'
        };
    }
}

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/column-template-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/column-template-cs8" %}

> Custom helpers can only be used inside the ng-template directive of a column.