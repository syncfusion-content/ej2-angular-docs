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

The Gantt chart component provides a [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#template) option that allows you to display custom elements in a column instead of the field value. This can be useful when you need to display images, buttons, or other custom content within a column.

> When using template columns, they are primarily meant for rendering custom content and may not provide built-in support for gantt actions like sorting, filtering, editing unless [field](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#field) property of the column is specified.

## Render image in a column

To render an image in a Gantt column, define a template using the [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#template) property. This property accepts either an HTML element or a function that returns HTML content.

The following example demonstrates how to render an image for the **Resources** field to display an image element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { editingResources } from './data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    GanttModule
  ],
  standalone: true,
  template:`
    <ejs-gantt height="430px" [dataSource]="data" [treeColumnIndex]="1" [taskFields]="taskSettings" [allowResizing]="true" rowHeight="50" [splitterSettings]="splitterSettings" [resourceFields]="resourceFields" [resources]="resources">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Left" width="100"></e-column>
        <e-column field="TaskName" headerText="Task Name" width="290"></e-column>
        <e-column field="resources" headerText="Resources" width="250">
          <ng-template #template let-data>
            <div *ngIf="data.ganttProperties.resourceNames">
              <img src="../assets/images/{{data.TaskID}}.png" style="height:40px;width:40px"/>{{data.ganttProperties.resourceNames}}
              {{data.ganttProperties.resourceNames}}
            </div>
          </ng-template>
        </e-column>
        <e-column field="StartDate" headerText="Start Date" width="150"></e-column>
        <e-column field="Duration" headerText="Duration" width="150"></e-column>
        <e-column field="Progress" headerText="Progress" width="150"></e-column>
      </e-columns>
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
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
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/column-template-cs1" %}

> The [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#template) option allows to define any HTML content within a column.

## Render hyperlink in a column

The Gantt chart compoenent supports hyperlink columns and allows routing on click using the `template` property. This is useful for displaying data that links to another page or website.

To configure a hyperlink column, define a [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#template) within the **e-column** tag using `ng-template` and an `a` tag. The `onClick` function is triggered when the hyperlink is clicked.

The example below demonstrates how to render a hyperlink for the **TaskName** field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings">
      <e-columns>
        <e-column field="TaskID" headerText="TaskID" width="90"></e-column>
        <e-column field="TaskName" headerText="TaskName" width="290">
          <ng-template #template let-data>
            <a href="#" (click)="onClick($event, data.TaskName)">
              {{ data.TaskName }}
            </a>
          </ng-template>
        </e-column>
        <e-column field="Duration" headerText="Duration" width="90"></e-column>
        <e-column field="Progress" headerText="Progress" width="120"></e-column>
      </e-columns>
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  public data?: object[];
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
      position: '75%'
    };
  }

  onClick(event: MouseEvent, taskName: string): void {
    event.preventDefault(); // Prevent default anchor behavior
    const baseUrl = 'https://www.meaningofthename.com/';
    const searchUrl = `${baseUrl}${encodeURIComponent(taskName)}`;
    window.open(searchUrl, '_blank');
  }
}

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/column-template-cs2/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/column-template-cs2" %}

>The window.open() method is a built-in JavaScript function that opens a new browser window or tab with the specified URL.

## Render other components in a column

The column template has options to render a custom component in a gantt column instead of a field value.

### Render LineChart component in a column

The [LineChart](https://ej2.syncfusion.com/angular/documentation/sparkline/getting-started) component from Syncfusion<sup style="font-size:70%">&reg;</sup> offers a clear and effective way to visualize and compare data trends over time using connected data points. It can be integrated into a Gantt column by configuring the [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#template) property in the column configuration.

The following example demonstrates how to render a `LineChart` for the **customData** field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttModule, GanttComponent, ResizeService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { SparklineAllModule, Sparkline } from '@syncfusion/ej2-angular-charts';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, SparklineAllModule],
  providers: [ResizeService, SelectionService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt #gantt height="430px"  [dataSource]="data" (created)="renderGridSparkline()"
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
       </ejs-gantt>
  `
})
export class AppComponent implements OnInit {
  @ViewChild('gantt') public ganttInstance?: GanttComponent;
  public data = GanttData;
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

  public getSparkData(type: string, count: number): number[] {
    return this.lineData[count] as number[];
  }

  public renderGridSparkline(): void {
    setTimeout(() => {
      const length = (this.ganttInstance as GanttComponent).treeGrid.getDataRows().length
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
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/column-template-cs9" %}

### Render ColorPicker component in a column

The Syncfusion<sup style="font-size:70%">&reg;</sup> [ColorPicker](https://ej2.syncfusion.com/angular/documentation/color-picker/getting-started) component offers a user-friendly interface for selecting colors from a predefined palette or custom options. It is useful in scenarios like theme selection or dynamic element styling.

To render the ColorPicker inside a Gantt column, configure the [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#template) property in the column definition.

The following example demonstrates how to render a `ColorPicker` for the **Change color** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/column-template-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/column-template-cs3/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/column-template-cs3" %}

### Render DropDownList component in a column

To render a DropDownList component in a Gantt column, define a template using the [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#template) property in the column configuration.

The following example demonstrates how to render the [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) component in the **Task Priority** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/column-template-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/column-template-cs4/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/column-template-cs4" %}

### Render Chip component in a column

The Gantt chart compoenent supports rendering the Syncfusion<sup style="font-size:70%">&reg;</sup> [Chips](https://ej2.syncfusion.com/angular/documentation/chips/getting-started) component in a column using the [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#template) property. This is useful for displaying data that benefits from a chip-style visual representation.

The following example demonstrates how to render the Chips component in the **TaskName** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/column-template-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/column-template-cs5/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/column-template-cs5" %}

## Render RadioButton in a column

The Syncfusion<sup style="font-size:70%">&reg;</sup> `RadioButton` component can be rendered in a grid column to display selection options like order statuses or approval choices.

The following example demonstrates rendering `RadioButton` components in the **Order Status** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/column-template-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/column-template-cs10/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/column-template-cs10/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/column-template-cs10" %}


## Using condition template

The conditional column [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#template) allows rendering elements based on specific conditions.

The following example demonstrates how to use the `template` property with the `ng-template` element and apply the `*ngIf` directive to render a checkbox based on the value of the **Discontinued** field. A checkbox will be displayed only in rows where **Discontinued** is set to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/column-template-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/column-template-cs6/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/column-template-cs6" %}

>You can use any template element or custom component instead of the checkbox in the conditional template based on your requirement.

## How to get the row object by clicking on the template element

The Gantt chart component allows retrieving the row object of a selected record when a [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#template) element is clicked. This is useful for performing custom actions based on the selected data.

In the following example, a button is rendered in the **Task Data** column. The `click` event is bound to the `showDetails` method, which receives the data object from the template variable, enabling access to the selected row and displaying it in a dialog popup.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttComponent, GanttModule } from '@syncfusion/ej2-angular-gantt';
import { DialogComponent, DialogModule } from '@syncfusion/ej2-angular-popups';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GanttData, SelectedRecordDataType } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonModule, DialogModule],
  template:
    `<ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]='1'  [splitterSettings] = "splitterSettings">  
      <e-columns>
        <e-column field='TaskID' headerText='Task ID'  width=80></e-column>
        <e-column field='TaskName' headerText='Task Name' width=290 ></e-column>
        <e-column field='TaskData' headerText='Employee Data' width='150' isPrimaryKey='true'>
          <ng-template #template let-data>
            <button class="empData" (click)="showDetails(data)">View</button>
            <div [hidden]="!selectedRecord || selectedRecord !== data">
              <ejs-dialog #Dialog [visible]="false" width="50%" showCloseIcon="true" [header]="header">         
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

export class AppComponent implements OnInit {
    @ViewChild('gantt') public gantt?: GanttComponent;
    @ViewChild('Dialog') public dialog?: DialogComponent;
    public data?: object[];
    public header?: string;
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
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/column-template-cs7" %}

## Use custom helper inside the template

The Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt chart component supports using custom helper functions within the `ng-template` directive of a column. This allows you to build advanced templates by incorporating logic beyond the default `template` syntax.

To use a custom helper function, define it in the template context using the `let` keyword. This creates a reference to the function that can be used within the template.

The following example demonstrates how to use a custom helper function inside the `template` property for the **Progress** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}


import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation,  OnInit} from '@angular/core';
import { GanttData } from './data';

@Component({
    imports: [ GanttModule],
    standalone: true,
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

export class AppComponent implements OnInit {
    public data?: object[];
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

    public formatProgress(value: number): string {
        return value.toFixed(3) + '% ';
    }
}

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/column-template-cs8/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/column-template-cs8" %}

> Custom helpers can only be used inside the ng-template directive of a column.