---
layout: post
title: Resources in Angular Schedule component | Syncfusion
description: Learn here all about Resources in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# Resources in Angular Schedule component

Resources and grouping support allows the Scheduler to be shared by multiple resources. Also, the appointments of each resources are displayed under relevant resources. Each resource in the Scheduler is arranged in a column/row wise order, with individual spacing to display all its respective appointments on a single page. It also supports the multiple levels of grouping of resources, thus enabling the categorization of resources in a hierarchical structure and shows it either in expandable groups (Timeline views) or else vertical hierarchy one after the other (Calendar views).

It is also possible to assign one or more resources to the same appointment, by allowing multiple selection of resource options available in the event editor window.

The HTML5 JavaScript Scheduler groups the resources based on different criteria. It includes grouping appointments based on resources, grouping resources based on dates, and timeline scheduling. Also, the data for resources bind with Scheduler either as a local JSON collection or URL, retrieving data from remote data services.

Learn how to add appointments of multiple resources to the Angular Scheduler from this video:

{% youtube "https://www.youtube.com/watch?v=K_fCX-zHVJQ" %}

## Resource fields

The default options available within the [`resources`](https://ej2.syncfusion.com/angular/documentation/api/schedule/group#resources) collection are as follows,

| Field name |  Type   |   Description   |
|------------|---------|---------------- |
| [`field`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#field) | String | A value that binds to the resource field of event object. |
| [`title`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#title) | String | It holds the title of the resource field to be displayed on the event editor window. |
| [`name`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#name) | String | A unique resource name used for differentiating various resource objects while grouping. |
| [`allowMultiple`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#allowmultiple) | Boolean | When set to `true`, allows multiple selection of resource names, thus creating multiple instances of same appointment for the selected resources. |
| [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#datasource) | Object | Assigns the resource `dataSource`, where data can be passed either as an array of JavaScript objects, or else can create an instance of [`DataManager`](http://ej2.syncfusion.com/documentation/data/api-dataManager) in case of processing remote data and can be assigned to the `dataSource` property. With the remote data assigned to `dataSource`, check the available [adaptors](http://ej2.syncfusion.com/documentation/data/adaptors) to customize the data processing. |
| [`query`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#query) | Query | Defines the external [`query`](http://ej2.syncfusion.com/documentation/data/api-query) that will be executed along with the data processing. |
| [`idField`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#idfield) | String | Binds the resource ID field name from the resources `dataSource`. |
| [`expandedField`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#expandedfield) | String | Binds the `expandedField` name from the resources `dataSource`. It usually holds boolean value which decide whether the resource of timeline views is in collapse or expand state on initial load. |
| [`textField`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#textfield) | String | Binds the text field name from the resources `dataSource`. It usually holds the resource names. |
| [`groupIDField`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#groupidfield) | String | Binds the group ID field name from the resource `dataSource`. It usually holds the value of resource IDs of parent level resources. |
| [`colorField`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#colorfield) | String | Binds the color field name from the resource `dataSource`. The color value mapped in this field will be applied to the events of resources. |
| [`startHourField`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#starthourfield) | String | Binds the start hour field name from the resource `dataSource`. It allows to provide different work start hour for the resources. |
| [`endHourField`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#expandedfield) | String | Binds the end hour field name from the resource `dataSource`. It allows to provide different work end hour for the resources. |
| [`workDaysField`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#workdaysfield) | String | Binds the work days field name from the resources `dataSource`. It allows to provide different working days collection for the resources. |
| [`cssClassField`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#cssclassfield) | String | Binds the custom CSS class field name from the resources `dataSource`. It maps the CSS class written for the specific resources and applies it to the events of those resources. |

## Resource data binding

The data for resources can bind with Scheduler either as a local JSON collection or a service URL, retrieving resource data from remote data services.

### Using local JSON data

The following code example depicts how to bind the local JSON data to the `dataSource` of the `resources` collection.

```typescript
import { Component } from '@angular/core';
import {
    WeekService, MonthService, AgendaService, TimelineViewsService, TimelineMonthService, EventSettingsModel
} from '@syncfusion/ej2-angular-schedule';
import { resourceData } from './datasource.ts';

@Component({
    selector: "app-root",
    providers: [WeekService, MonthService, AgendaService, TimelineViewsService, TimelineMonthService],
    // specifies the template string for the Schedule component
    template: `
    <ejs-schedule width="100%" height="550px" [selectedDate]="selectedDate" [views]="views"
      [eventSettings]="eventSettings">
      <e-resources>
        <e-resource field="OwnerId" title="Owner" name="Owners"
          [dataSource]="ownerDataSource" [allowMultiple]="allowMultipleOwner"
          textField="OwnerText" idField="Id" colorField="OwnerColor">
        </e-resource>
      </e-resources>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 3, 1);
    public views: Array<string> = ['Week', 'Month', 'TimelineWeek', 'TimelineMonth', 'Agenda'];
    public eventSettings: EventSettingsModel = {
        dataSource: resourceData
    };
    public allowMultipleOwner: Boolean = true;
    public ownerDataSource: Object[] = [
        { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
        { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
        { OwnerText: 'Michael', Id: 3, OwnerColor: '#7499e1' }
    ];
}
```

### Using remote data service

The following code example depicts how to bind remote data to the `resources` `dataSource`.

```typescript
import { Component } from '@angular/core';
import {
    WeekService, MonthService, AgendaService, TimelineViewsService, TimelineMonthService, EventSettingsModel
} from '@syncfusion/ej2-angular-schedule';
import { resourceData } from './datasource.ts';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

@Component({
    selector: "app-root",
    providers: [WeekService, MonthService, AgendaService, TimelineViewsService, TimelineMonthService],
    // specifies the template string for the Schedule component
    template: `
    <ejs-schedule width="100%" height="550px" [selectedDate]="selectedDate" [views]="views"
      [eventSettings]="eventSettings">
      <e-resources>
        <e-resource field="OwnerId" title="Owner" name="Owners"
          [dataSource]="resourceDataManager" [allowMultiple]="allowMultipleOwner"
          textField="OwnerText" idField="Id" colorField="OwnerColor">
        </e-resource>
      </e-resources>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 3, 1);
    public views: Array<string> = ['Week', 'Month', 'TimelineWeek', 'TimelineMonth', 'Agenda'];
    public resourceDataManager: DataManager = new DataManager({
        url: 'Home/GetResourceData',
        adaptor: new UrlAdaptor(),
        crossDomain: true
    });
    public eventSettings: EventSettingsModel = {
        dataSource: resourceData
    };
    public allowMultipleOwner: Boolean = true;
}
```

## Scheduler with multiple resources

It is possible to display the Scheduler in default mode without visually showcasing all the resources in it, but allowing to assign the required resources to the appointments through the event editor resource options.

The appointments belonging to the different resources will be displayed altogether on the default Scheduler, which will be differentiated based on the resource color assigned in the **resources** (depicting to which resource that particular appointment belongs) collection.

**Example:** To display the default Scheduler with multiple resource options, define the [`resources`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#resources) property with all its options without using the `group` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/multiple-resource-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/multiple-resource-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/multiple-resource-cs1" %}

![Multiple Resources](images/schedule-multipleresources.png)

> Setting [`allowMultiple`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#allowmultiple) to `true` allows selecting multiple resources in the event editor and creates copies of the same appointment for each selected resource.

## Resource grouping

Resource grouping support allows the Scheduler to group the resources in a hierarchical structure both as an expandable groups (Timeline views) and as vertical hierarchy displaying resources one after the other (Resources view).

Scheduler supports both single and multiple levels of resource grouping that can be customized both in timeline and vertical Scheduler views.

Explore the advanced options available with the multiple resources and grouping concepts of Angular Scheduler by watching this video:

{% youtube "https://www.youtube.com/watch?v=K_fCX-zHVJQ" %}

### Vertical resource view

The following code example displays how the multiple resources are grouped and its events are portrayed in the default calendar views.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/resource-grouping-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/resource-grouping-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/resource-grouping-cs1" %}

![Vertical Resource View](images/schedule-resources-verticalview.png)

### Timeline resource view

The following code example depicts how to group the multiple resources on Timeline Scheduler views and its relevant events are displayed accordingly under those resources.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/resource-grouping-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/resource-grouping-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/resource-grouping-cs2" %}

![Timeline Resource view](images/schedule-resource-timeline.png)

### Grouping single-level resources

This kind of grouping allows the Scheduler to display all the resources at a single level simultaneously. The appointments mapped under resources will be displayed with the colors as per the [`colorField`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#colorfield) defined on the resources collection.

**Example:** To display the Scheduler with single level resource grouping:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/single-level-resource-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/single-level-resource-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/single-level-resource-cs1" %}

![Grouping single-level resources](images/schedule-singlelevel.png)

> The `name` field defined in the **resources** collection namely `Owners` will be mapped within the [`group`](https://ej2.syncfusion.com/angular/documentation/api/schedule#group) property, in order to enable the grouping option with those resource levels on the Scheduler.

### Grouping multi-level resources

It is possible to group the resources of Scheduler in multiple levels, by mapping the child resources to each parent resource. In the following example, there are 2 levels of resources, on which the second level resources are defined with [`groupID`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#groupidfield) mapping to the first level resource's ID so as to establish the parent-child relationship between them.

**Example:** To display the Scheduler with multiple level resource grouping options:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/multiple-level-resource-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/multiple-level-resource-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/multiple-level-resource-cs1" %}

![Grouping multi-level resources](images/schedule-multiplelevel.png)

### One-to-one grouping

In multi-level grouping, Scheduler usually groups the resources on the child level based on the [`GroupID`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#groupidfield) that maps with the `Id` field of parent level resources (as [`byGroupID`](https://ej2.syncfusion.com/angular/documentation/api/schedule/group#bygroupid) set to true by default). There are also option which allows you to group all the child resource(s) against each of its parent resource(s). To enable this kind of grouping, set `false` to the [`byGroupID`](https://ej2.syncfusion.com/angular/documentation/api/schedule/group#bygroupid) option within the [`group`](https://ej2.syncfusion.com/angular/documentation/api/schedule#group) property. In the following code example, there are two levels of resources, on which all the 3 resources at the child level is mapped one to one with each resource on the first level.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/multiple-level-resource-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/multiple-level-resource-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/multiple-level-resource-cs2" %}

![Grouping in Schedule](images/schedule-grouping.png)

### Grouping resources by date

It groups the number of resources under each date and is applicable only on the calendar views such as Day, Week, Work Week, Month, Agenda and Month-Agenda. To enable such grouping, set [`byDate`](https://ej2.syncfusion.com/angular/documentation/api/schedule/group#bydate) option to `true` within the [`group`](https://ej2.syncfusion.com/angular/documentation/api/schedule#group) property.

**Example:** To display the Scheduler with resources grouped by date:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/group-by-date-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/group-by-date-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/group-by-date-cs1" %}

![Grouping Resources by Date in Schedule](images/schedule-resource-by-date.png)

> This kind of grouping by date is not applicable on any of the timeline views.

## Customizing parent resource cells

In timeline view work cells of parent resource can be customized by checking the [`elementType`](https://ej2.syncfusion.com/angular/documentation/api/schedule/renderCellEventArgs#elementtype) as `resourceGroupCells` in the event [`renderCell`](https://ej2.syncfusion.com/angular/documentation/api/schedule#rendercell). In the following code example, background color of the work hours has been changed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs58/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs58/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs58" %}

## Working with shared events

Multiple resources can share the same events, thus allowing the CRUD action made on it to reflect on all other shared instances simultaneously. To enable such option, set [`allowGroupEdit`](https://ej2.syncfusion.com/angular/documentation/api/schedule/group#allowgroupedit) option to `true` within the [`group`](https://ej2.syncfusion.com/angular/documentation/api/schedule/group) property. With this property enabled, a single appointment
object will be maintained within the appointment collection, even if it is shared by more than one resource – whereas the resource fields of such appointment object will be in array which hold the IDs of the multiple resources.

> Any actions such as create, edit or delete held on any one of the shared event instances, will be reflected on all other related instances visible on the UI.

**Example:** To edit all the resource events simultaneously,

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/resource-grouping-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/resource-grouping-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/resource-grouping-cs3" %}

![Grouping Resources as shared events](images/schedule-sharedevents.png)

## Simple resource header customization

It is possible to customize the resource header cells using built-in template option and change the look and appearance of it in both the vertical and timeline view modes. All the resource related fields and other information can be accessed within the resource header template option.

**Example:** To customize the resource header and display it along with designation [`resource field`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/resources), refer the below code example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/resource-header-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/resource-header-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/resource-header-cs1" %}

![Customizing Resources Header in Desktop](images/schedule-custom-resource-header.png)

> To customize the resource header in compact mode properly make use of the class `e-device` as in the code example.

![Resource header template in compact mode](./images/header-template.png)

## Customizing resource header with multiple columns

It is possible to customize the resource headers to display with multiple columns such as Room, Type and Capacity. The following code example depicts the way to achieve it and is applicable only on timeline views.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/resource-header-column-customization-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/resource-header-column-customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/resource-header-column-customization-cs1" %}

![Schedule with Multiple columns](images/schedule-multiple-columns.png)

## Collapse/Expand child resources in timeline views

It is possible to expand and collapse the resources which have child resource in timeline views dynamically. By default, resources are in expanded state with their child resource. We can collapse and expand the child resources in UI by setting [`expandedField`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#expandedfield) option as `false` whereas its default value is `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/resource-grouping-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/resource-grouping-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/resource-grouping-cs5" %}

## Displaying tooltip for resource headers

It is possible to display tooltips over the resource headers showing the resource information. By default, there won't be any tooltips displayed on the resource headers, and to enable it, you need to assign the customized template design to the [`headerTooltipTemplate`](https://ej2.syncfusion.com/angular/documentation/api/schedule/group#headertooltiptemplate) option within the [`group`](https://ej2.syncfusion.com/angular/documentation/api/schedule/group) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/header-tooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/header-tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/header-tooltip-cs1" %}

![tooltip for resource headers](images/schedule-tooltip.png)

## Choosing among resource colors for appointments

By default, the colors defined on the top level resources collection will be applied for the events. In case, if you want to apply specific resource color to events irrespective of its top-level parent resource color, it can be achieved by defining [`resourceColorField`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings#resourcecolorfield) option within the [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings) property.

In the following example, the colors mentioned in the second level will get applied over the events.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/multiple-resource-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/multiple-resource-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/multiple-resource-cs2" %}

![tooltip for resource headers](images/schedule-resource-color.png)

> The value of the `resourceColorField` field should be mapped with the [`name`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#name) value given within the [`resources`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources) property.

## Dynamically add and remove resources

It is possible to add or remove the resources dynamically to and from the Scheduler respectively. In the following example, when the checkboxes are checked and unchecked, the respective resources gets added up or removed from the Scheduler layout. To add new resource dynamically, [`addResource`](https://ej2.syncfusion.com/angular/documentation/api/schedule#addresource) method is used which accepts the arguments such as resource object, resource name (within which level, the resource object to be added) and index (position where the resource needs to be added).

To remove the resources dynamically, [`removeResource`](https://ej2.syncfusion.com/angular/documentation/api/schedule#removeresource) method is used which accepts the index (position from where the resource to be removed) and resource name (within which level, the resource object presents) as parameters.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/dynamic-resource-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/dynamic-resource-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/dynamic-resource-cs1" %}

## Setting different working days and hours for resources

Each resource in the Scheduler can have different ` working hours` as well as different ` working days` set to it. There are default options available within the `resources` collection, to customize the default working hours and days of the Scheduler.

* [Using the work day field for different work days](#Set-different-work-days)
* [Using the start hour and end hour fields for different work hours](#Set-different-work-hours)

### Set different work days

Different `working days` can be set for the resources of Scheduler using the [`workDaysField`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#workdaysfield) property which maps the working days field from the resource dataSource. This field accepts the collection of day indexes (from 0 to 6) of a week. By default, it is set to [1, 2, 3, 4, 5] and in the following example, each resource has been set with different values and therefore each of them will render only those working days. This option is applicable only on the calendar views and is not applicable on timeline views.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/multiple-resource-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/multiple-resource-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/multiple-resource-cs3" %}

![Resources with Different Workdays](images/schedule-resource-workdays.png)

### Set different work hours

Different `working Hours` can be set for the resources of Scheduler using the [`startHourField`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#starthourfield) and [`endHourField`](https://ej2.syncfusion.com/angular/documentation/api/schedule/resources#endhourfield) property which maps the `startHourField` and `endHourField` field from the resource dataSource.

* `startHourField` - Denotes the start time of the working/business hour in a day.
* `endHourField` - Denotes the end time limit of the working/business hour in a day.

Working hours indicates the work hour duration of a day, which is highlighted visually with active color over the work cells. Each resource on the Scheduler can be defined with its own set of working hours as depicted in the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/multiple-resource-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/multiple-resource-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/multiple-resource-cs4" %}

![Resources with Different Workhours](images/schedule-different-workhour.png)

In this example, a resource named `Will Smith` is depicted with working hours ranging from 8.00 AM to 3.00 PM and is visually illustrated with active colors, whereas the other two resources have different working hours set.

## Hide non-working days when grouped by date

In Scheduler, you can set custom work days for each resource and group the Scheduler by date to display these work days. By default, the Scheduler will show all days when it is grouped by date, even if they are not included in the custom work days for the resources. However, you can use the [`hideNonWorkingDays`](../api/schedule/group#hidenonworkingdays) property to only display the custom work days in the Scheduler.

To use the [`hideNonWorkingDays`](../api/schedule/group#hidenonworkingdays) property, you need to include it in the configuration options for your Scheduler component. Set the value of [`hideNonWorkingDays`](../api/schedule/group#hidenonworkingdays) to `true` to enable this feature.

**Example:** To display the Scheduler with resources grouped by date for custom working days,

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/hide-non-working-days-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/hide-non-working-days-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/hide-non-working-days-cs1" %}

![Hide non-working days when grouped by date](images/schedule-hide-non-working-days.png)

> The [`hideNonWorkingDays`](../api/schedule/group#hidenonworkingdays) property only applies when the Scheduler is grouped [`byDate`](../api/schedule/group#bydate).

## Compact view in mobile

Although the Scheduler views are designed keeping in mind the responsiveness of the control in mobile devices, however when using Scheduler with multiple resources - it is difficult to view all the resources and its relevant events at once on the mobile. Therefore, we have introduced a new compact mode specially for displaying multiple resources of Scheduler on mobile devices. By default, this mode is enabled while using Scheduler with multiple resources on mobile devices. If in case, you need to disable this compact mode, set `false` to the [`enableCompactView`](https://ej2.syncfusion.com/angular/documentation/api/schedule/group#enablecompactview) option within the [`group`](https://ej2.syncfusion.com/angular/documentation/api/schedule/group) property. Disabling this option will display the exact desktop mode of Scheduler view on mobile devices.

With this compact view enabled on mobile, you can view only single resource at a time and to switch to other resources, there is a treeview at the left listing out all other available resources - clicking on which will display that particular resource and its related appointments.

![Resources in compact mode](./images/resource-mobile.png)

Clicking on the menu icon before the resource text will show the resources available in the Scheduler as following.

![Resources menu option in compact mode](./images/resource-menu.png)

## Adaptive UI in desktop

By default, the Scheduler layout adapts automatically in the desktop and mobile devices with appropriate UI changes. In case, if the user wants to display the Adaptive scheduler in desktop mode with adaptive enhancements, then the property [`enableAdaptiveUI`](https://ej2.syncfusion.com/angular/documentation/api/schedule#enableadaptiveui) can be set to `true`. Enabling this option will display the exact mobile mode of Scheduler view on desktop devices.

Some of the default changes made for compact Scheduler to render in desktop devices are as follows,
* View options displayed in the Navigation drawer.
* Plus icon is added to the header for new event creation.
* Today icon is added to the header instead of the Today button.
* With Multiple resources – only one resource has been shown to enhance the view experience of resource events details clearly. To switch to other resources, there is a TreeView on the left that lists all other available resources, clicking on which will display that particular resource and its related events.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/resource-grouping-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/resource-grouping-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/resource-grouping-cs4" %}

![Resources in Adaptive UI](images/schedule-adaptiveui.png)

> You can refer to our [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/material/schedule/overview) to knows how to present and manipulate data.
