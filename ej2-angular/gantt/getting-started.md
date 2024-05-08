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

This section explains you the steps required to create a simple Gantt component and demonstrate the basic usage of the Gantt component in an Angular environment.

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

## Adding Syncfusion Gantt package

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

To install Gantt component, use the following command.

```bash
ng add @syncfusion/ej2-angular-gantt --save
```

> The **--save** will instruct NPM to include the gantt package inside of the `dependencies` section of the `package.json`.

## Registering Gantt Module

Import Gantt module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-gantt` [src/app/app.module.ts].

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the GanttModule for the Gantt component
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of ej2-angular-gantt module into NgModule
  imports:      [ BrowserModule, GanttModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

## Adding CSS reference

The following CSS files are available in `../node_modules/@syncfusion` package folder.
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
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../node_modules/@syncfusion/ej2-treegrid/styles/material.css';
@import '../node_modules/@syncfusion/ej2-gantt/styles/material.css';
```

## Add Gantt component

Modify the template in [src/app/app.component.ts] file to render the gantt component.
Add the Angular Gantt by using `<ejs-gantt>` selector in `template` section of the app.component.ts file.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
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

Bind data for the Gantt component by using [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#datasource) property.
It accepts either array of JavaScript object or `DataManager` instance.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<ejs-gantt [dataSource]='data'> </ejs-gantt>`
})
export class AppComponent implements OnInit {

    public data: Object[];

    ngOnInit(): void {
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
    }
}

```

## Module injection

The Gantt component was segregated into individual feature-wise modules. To use its feature, you need to inject its feature service in the AppModule.
Find the relevant feature modules and descriptions as follows:

* [`Edit`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#editmodule) : Inject this module to use the editing feature.
* [`Filter`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#filtermodule): Inject this module to use the filtering feature.
* [`Sort`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#sortmodule) : Inject this module to use the sorting feature.
* [`Selection`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#selectionmodule) : Inject this module to use the selection feature.
* [`Toolbar`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#toolbar) : Inject this module to use the toolbar items.
* [`DayMarkers`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#daymarkersmodule) : Inject this module to highlight the days.

Now, import the above-mentioned modules from the Gantt package and inject them into `provider` section of `AppModule` like following code:

 ```javascript
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent } from './app.component';
    import { GanttComponent, EditService , FilterService, SortService, SelectionService, ToolbarService,DayMarkersService } from '@syncfusion/ej2-angular-gantt';

    @NgModule({
        imports: [
            BrowserModule,
        ],
        declarations: [AppComponent, GanttComponent],
        bootstrap: [AppComponent],
        providers: [ EditService , FilterService, SortService, SelectionService,ToolbarService,DayMarkersService ]
    })

 ```

## Mapping task fields

The data source fields that are required to render the tasks are mapped to the Gantt control using the [`taskFields`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskfields) property.

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
