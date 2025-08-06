---
layout: post
title: Getting started with Angular Gantt component | Syncfusion
description:  Checkout and learn about Getting started with Angular Gantt component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Gantt component

This guide provides a comprehensive walkthrough for initiating and using the Syncfusion Angular Gantt component. It includes steps for setting up the environment, installing necessary packages, adding components, and utilizing various Gantt features.

## Dependencies

To use the Angular Gantt component effectively, ensure the following packages are included:
``` bash
|-- @syncfusion/ej2-angular-gantt
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-gantt
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-data
        |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-grids
        |-- @syncfusion/ej2-treegrid
```

## Setup Angular Environment

You can use [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications.
To install Angular CLI use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
cd my-app
```
## Installing Syncfusion® Angular Gantt Package
Syncfusion® packages are available on npm under the @syncfusion scope. These packages include both Ivy-compatible and ngcc-compiled versions for various Angular versions. Here's how to add the Angular Gantt package to your project:

## Ivy Library Distribution Package Format
Syncfusion® Angular packages (version 20.2.36 and above) are compatible with the Angular Ivy rendering engine, supporting Angular version 12 and above. Ivy packages offer improved build performance and a smaller bundle size.

To add the Ivy-compatible Gantt package to your application, use the following command:
```bash
npm install @syncfusion/ej2-angular-gantt --save
```

## Angular Compatibility Compiler (ngcc) Package
For applications using Angular versions below 12, Syncfusion® provides packages compiled with the Angular compatibility compiler (ngcc). These packages ensure compatibility with the legacy Angular compilation and rendering pipeline.

To add the Gantt ngcc package, use this command:
```bash
npm install @syncfusion/ej2-angular-gantt@ngcc --save
```
> The **--save** will instruct NPM to include the gantt package inside of the `dependencies` section of the `package.json`.

To specify the ngcc package in your package.json, append -ngcc to the package version as shown:
```bash
"@syncfusion/ej2-angular-gantt": "20.2.38-ngcc"
```
`Note:`  If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning. Verify that your Angular application's version is compatible with the Gantt package version to ensure optimal performance, reducing chances for runtime errors due to incompatibility.

## Adding CSS reference

By incorporating the following CSS files from Syncfusion's package, you ensure that your Gantt Chart adheres to the designed themes, ensuring visual consistency and feature visibility. The following CSS files are available in `../node_modules/@syncfusion` package folder.
This can be referenced in [src/styles.css] using following code.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../node_modules/@syncfusion/ej2-treegrid/styles/material.css';
@import '../node_modules/@syncfusion/ej2-gantt/styles/material.css';
```

## Add Gantt component

Integrate the Gantt component into your application by modifying the `app.component.ts` file. Use `<ejs-gantt>` to initiate the Gantt chart display. It takes configuration through properties and bindings to display project management data effectively.

```typescript
import { Component, OnInit } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt'

@Component({
    imports: [
        GanttModule
    ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Gantt component
    template: `<ejs-gantt> </ejs-gantt>`
})
export class AppComponent implements OnInit {

    ngOnInit(): void {
    }
}

```

## Binding Gantt with data

Bind data for the Gantt component by using [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#datasource) property. It accepts either array of JavaScript object or `DataManager` instance. The [taskFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskfields) mapping ensures that each project task is correctly represented with essential fields like `TaskName`, `StartDate`, and `Duration`.

```typescript
import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
imports: [
         GanttModule
    ],

standalone: true,
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskFields" ></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskFields?: object;

    public ngOnInit(): void {
        this.data = [
            {
                TaskID: 1,
                TaskName: 'Project Initiation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    {  TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
                    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                ]
            },
            {
                TaskID: 5,
                TaskName: 'Project Estimation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
                ]
            },
        ];
        this.taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        };
    }
}

```

## Module injection

The module injection enhances the Gantt component. This setup ensures that each module, like editing or sorting, is available to be used within the Gantt component, allowing for enhanced interactive capabilities.

Find the relevant feature modules and descriptions as follows:

* [`EditService`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#editmodule) : Inject this module to use the editing feature.
* [`FilterService`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#filtermodule): Inject this module to use the filtering feature.
* [`SortService`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#sortmodule) : Inject this module to use the sorting feature.
* [`SelectionService`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#selectionmodule) : Inject this module to use the selection feature.
* [`ToolbarService`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#toolbar) : Inject this module to use the toolbar items.
* [`DayMarkersService`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#daymarkersmodule) : Inject this module to highlight the days.


To use its feature, these modules should be injected into the providers section of root `NgModule` or component class. In the following code, the Gantt component's editing feature is enabled by injecting the `EditService` in the `providers` section.

 ```javascript
    import { GanttModule } from '@syncfusion/ej2-angular-gantt';
    import { Component } from '@angular/core';
    import { EditService , FilterService, SortService, SelectionService, ToolbarService, DayMarkersService } from '@syncfusion/ej2-angular-gantt';

    @Component({
        imports: [
            GanttModule
        ],
        standalone: true,
        providers: [ EditService , FilterService, SortService, SelectionService, ToolbarService, DayMarkersService ]
    })

 ```
> Additional feature modules are available [here](https://ej2.syncfusion.com/angular/documentation/gantt/module).

## Mapping task fields

The data source fields that are required to render the tasks are mapped to the Gantt control using the [`taskFields`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskfields) property. Mapping fields reflect your project's task details, ensuring accurate representation and functionality.

 {% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/binding-data-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/binding-data-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/getting-started/binding-data-cs1" %}

## Defining timeline

The Gantt has an option to define timeline using [`timelineSettings`](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/) property with various options. Using this property we can customize the Gantt timeline.
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/timeline-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/timeline-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/getting-started/timeline-cs1" %}

## Enabling toolbar

The [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#toolbar) property is used to add the toolbar items like Add, Remove, Edit, Update, Delete, Expand All,Collapse All in Gantt.

To use toolbar, inject the `ToolbarService` in the provider section of `AppModule`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/getting-started/toolbar-cs1" %}

## Enabling editing

The editing feature enables you to edit the tasks in Gantt component. It can be enabled by using the [`editSettings.allowEditing`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowediting) and [`editSettings.allowTaskbarEditing`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowtaskbarediting) properties

To edit the tasks, inject the [`EditService`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#editmodule) in the provider section of `AppModule`.

The following editing options are available to update the tasks in Gantt:

* Cell
* Dialog
* Taskbar
* Connector line

### Cell editing

Modify the task details through cell editing by setting the edit [`mode`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#mode) property as `Auto`. To enable edit support `Edit` module should be injected in Gantt. If `Edit` module is not injected, you cannot do any editing action in Gantt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/editing-cell-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/editing-cell-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/getting-started/editing-cell-cs1" %}

`Note:` When the edit mode is set to `Auto`, you can change the cells to editable mode by double-clicking anywhere at the TreeGrid and edit the task details in the edit dialog by double-clicking anywhere at the chart.

### Dialog editing

Modify the task details through dialog by setting edit [`mode`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#mode) property as `Dialog`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/editing-dialog-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/editing-dialog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/getting-started/editing-dialog-cs1" %}

`Note:` In dialog editing mode, the edit dialog will appear while performing double-click action in both TreeGrid and chart sides.

### Taskbar editing

Modify the task details through user interaction such as resizing and dragging the taskbar by enabling the [`allowTaskbarEditing`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowtaskbarediting) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/editing-taskbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/editing-taskbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/getting-started/editing-taskbar-cs1" %}

### Dependency editing

Modify the task dependencies using mouse interactions by enabling the [`allowTaskbarEditing`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowtaskbarediting) property along with mapping the task dependency data source field to the [`dependency`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#dependency) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/editing-dependency-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/editing-dependency-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/getting-started/editing-dependency-cs1" %}

## Enabling predecessors or task relationships

Predecessor or task dependency in the Gantt component is used to depict the relationship between the tasks.

Start to Start (SS) : You cannot start a task until the dependent task starts.
Start to Finish (SF) : You cannot finish a task until the dependent task finishes.
Finish to Start (FS) : You cannot start a task until the dependent task completes.
Finish to Finish (FF) : You cannot finish a task until the dependent task completes.

You can show the relationship in tasks, by using the [`dependency`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#dependency) property as shown in the following code example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/task-relationship-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/task-relationship-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/getting-started/task-relationship-cs1" %}

## Assigning resources

You can display and assign the resource for each task in the Gantt control. Create a collection of JSON object, which contains id, name, unit and group of the resources and assign it to the [`resources`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#resources) property.
Map these fields to the Gantt control using the [`resourceFields`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#resourceFields) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/resources-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/resources-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/getting-started/resources-cs1" %}

## Enable filtering

The filtering feature enables you to view reduced amount of records based on filter criteria. Gantt provides support for menu filtering support for each columns. It can be enabled by setting the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowfiltering) property to `true` along with injecting the `Filter` module module as shown in the following code example. Filtering feature can also be customized using the [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/gantt/filterSettings/) property.

To use filter, inject the `FilterService` in the provider section of `AppModule`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/filtering-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/filtering-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/getting-started/filtering-cs1" %}

## Enable sorting

The sorting feature enables you to order the records. It can be enabled by setting the [`allowSorting`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowsorting) property to `true`. Provide the `Sort` module as follows. If `Sort` module is not provided, you cannot sort when a header is clicked. The sorting feature can be customized using the `sortSettings`(../../api/gantt/sortSettings/) property.

To use sort, inject the [`SortService`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#sortmodule) in the provider section of `AppModule`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/sorting-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/sorting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/getting-started/sorting-cs1" %}

## Defining eventmarkers

The [`eventMarkers`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#eventmarkers) property in Gantt component is used to highlight the important event in Gantt chart part. By using this feature, you can add the lines and label to highlight important days in your project.

To highlight the days, inject the `DayMarkersService` in the provider section of `AppModule`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/event-markers-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/event-markers-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/getting-started/event-markers-cs1" %}

## Run the application

Use the following command to run the application in the web browser:

```javascript
ng serve --open
```

The following example shows a basic Gantt:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/getting-started/run-application-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/getting-started/run-application-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/getting-started/run-application-cs1" %}

## Error handling

Error handling is used to identify errors, display them and develop recovery strategies to handle errors from gantt. In Gantt, error handling is done by using the [actionFailure](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actionfailure) event. Some of the scenarios that this event handles are:
* Invalid duration : The [duration](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#duration) field accepts only numerical values with an optional decimal point. Entering non-numerical values triggers the `actionFailure` event and displays issue information in the event argument.
* Invalid dependency: The [dependency](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#dependency) field accepts only a number followed by a predecessor type (FS, FF, SS, SF).  Entering invalid values, such as special characters or incorrect predecessor types, triggers the `actionFailure` event and displays issue information in the event argument.
* Invalid offset : The [offset](https://ej2.syncfusion.com/angular/documentation/api/gantt/iPredecessor/#offset) accepts only numerical values or their word equivalents followed by a unit. Entering invalid values, such as special characters triggers `actionFailure` event and displays issue information in the event argument.
* Failure to map task fields : The data source fields necessary for rendering tasks should be mapped to the Gantt control using the [taskFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/) property. Failure to map `taskFields` in the sample triggers `actionFailure` event and displays issue information in the event argument.
* Failure to map resource fields : To assign resources to a task, resource fields should be mapped to the Gantt control using the [resourceFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/resourceFields/). Failure to map `resourceFields` in the sample triggers `actionFailure` event and displays issue information in the event argument.
* Failure to map `isPrimaryKey` : [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#isprimarykey) field is crucial for CRUD operations. Failure to map [id](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#id) column in gantt column collection or [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#isprimarykey) field in one of the columns will trigger `actionFailure` event and display issue information in the event argument.
* Invalid date format : [format](https://ej2.syncfusion.com/angular/documentation/api/gantt/iTimelineFormatter/) property under `topTier` and `bottomTier` determines how the timelines are displayed in the top tier and bottom tier of the Gantt chart timeline. If the `format` does not contain a valid standard [date format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), it triggers the `actionFailure` event, displaying issue information in the event argument.
* Failure to map `hasChildMapping` : [hasChildMapping](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#haschildmapping) property should configured for [load-on-demand](https://ej2.syncfusion.com/angular/documentation/gantt/data-binding#load-child-on-demand). Ensure it properly configured in the [taskFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/). Failure to map `hasChildMapping` in the `load-on-demand` sample triggers `actionFailure` event and displays issue information in the event argument.
* Invalid day in event markers : [day](https://ej2.syncfusion.com/angular/documentation/api/gantt/eventMarker/#day) should configured in [eventMarkers](https://ej2.syncfusion.com/angular/documentation/api/gantt/eventMarker/) to render striplines in a particular day. Failure to configure the `day` in `eventMarkers` triggers `actionFailure` event and displays issue information in the event argument.

> Additionally, TreeGrid side error handling information is also displayed from the Gantt `actionFailure` event. For more details on TreeGrid side error handling, refer [here](https://ej2.syncfusion.com/angular/documentation/treegrid/getting-started#handling-errors).

The following code example shows how to use the [actionFailure](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actionfailure) event in the Gantt control to display an exception when `isPrimaryKey` is not configured properly in the Gantt Chart column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excpetion-handling/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excpetion-handling/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excpetion-handling" %}

The following screenshot represents the Gantt Exception handling in `actionFailure` event.

![Error Handling](images/error-handling.PNG)

## Troubleshooting

- **Angular version matches package requirements:** Use compatible versions as mismatched versions can lead to errors or unexpected behaviors.
- **Correct module imports and providers:** Missing imports can disable functionality, leading to issues during runtime.
- **Task and resource mapping:** Incorrect mappings lead to data display failures, ensure mappings are precise and consistent with the data structure.

> You can refer to our [Angular Gantt chart](https://www.syncfusion.com/angular-components/angular-gantt-chart) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Gantt chart example](https://ej2.syncfusion.com/angular/demos/#/fluent2/gantt/overview) that demonstrates various capabilities like task scheduling, resource allocation, critical path analysis, and handling dependencies. This will enhance your understanding of how to effectively present and manage project data using the Gantt chart component.