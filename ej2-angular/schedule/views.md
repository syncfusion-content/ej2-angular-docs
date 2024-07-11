---
layout: post
title: Views in Angular Schedule component | Syncfusion
description: Learn here all about Views in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Views 
documentation: ug
domainurl: ##DomainURL##
---

# Views in Angular Schedule component

The Scheduler includes wide variety of view modes with unique configuration options for each view. The available view modes are Day, Week, Work Week, Month, Year, Agenda, Month Agenda, Timeline Day, Timeline Week, Timeline Work Week and Timeline Month, Timeline Year, out of which the `Week` view is set as active.

To navigate between different views and dates, the navigation options are available at the Scheduler header bar. The active view option is usually highlighted by default. The date range of the active view will also be displayed at the left corner of the header bar, clicking on which will open a calendar popup for the ease of desired date selection.

Learn how to customize each individual view of Angular Scheduler with different settings by watching this video:

{% youtube "https://www.youtube.com/watch?v=FRwDcpJLWOo" %}

> By default, Scheduler displays the calendar views such as day, week, work week, month and agenda.

## Setting specific view on scheduler

As the Scheduler displays `week` view by default, therefore to change the active view, set [`currentView`](https://helpej2.syncfusion.com/angular/documentation/api/schedule#currentview) property with the desired view name. The applicable view names that the Scheduler accepts are as follows,

* Day
* Week
* WorkWeek
* Month
* Year
* Agenda
* MonthAgenda
* TimelineDay
* TimelineWeek
* TimelineWorkWeek
* TimelineMonth
* TimelineYear

It is necessary to import and inject the appropriate view modules into the application to make use of these view modes on the Scheduler. Also, it is possible to display only the desired views on the Scheduler. To define and configure specific views, use the [`views`](https://ej2.syncfusion.com/angular/documentation/api/schedule/views) property.

In the following example, the Scheduler displays 4 views namely, Week, Month, TimelineWeek and Timeline Month. The appropriate view modules are imported and injected properly to display those views on the Scheduler.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs71/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs71/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs71" %}

To configure Scheduler with simply 2 views, but with different configurations on each view, refer the following code example. Here, the Week view displays the dates in `dd-MM-yyyy` format whereas the Month view hides the weekend days and also displays it in readonly mode.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs72/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs72/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs72" %}

## View specific configuration

There are scenarios where each view may need to have different configurations. For such cases, you can define the applicable scheduler properties within the [`views`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/) Property for each view option as depicted in the following examples. The fields available to be used within each view options are as follows.

|   Property  |  Type  | Description | Applicable views |
|-------------|--------|-------------|------------------|
| [`option`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#option) | View | It accepts the Scheduler view name, based on which we can define its related properties. The view names can be `Day`, `Week` and so on. | All views.|
| [`isSelected`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#isselected) | Boolean | It acts similar to the `currentView` property and defines the active view of the Scheduler.| All views. |
| [`dateFormat`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#dateformat) | Date | By default, Scheduler follows the date format as per the default culture assigned to it. When it is defined under specific view, only those assigned views follows this date format. | All views. |
| [`readonly`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#readonly) | Boolean | When set to `true`, prevents the CRUD actions on the respective view under where it is defined. | All views. |
| [`resourceHeaderTemplate`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#resourceheadertemplate) | String | The template option which is used to customize the resource header cells on the Scheduler. It gets applied only on the views, wherever it is defined.| All views. |
| [`dateHeaderTemplate`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#dayheadertemplate) | String | The template option which is used to customize the date header cells and is applied only on the views, wherever it is defined. | All views. |
| [`eventTemplate`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#eventtemplate) | String | The template option to customize the events background. It will get applied to the events of the view to which it is currently being defined. | All views. |
| [`showWeekend`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#showweekend) | Boolean | When set to `false`, it hides the weekend days of a week from the views on which it is defined.| All views. |
| [`group`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/group/) | [GroupModel](https://ej2.syncfusion.com/angular/documentation/api/schedule/groupModel) | Allows to set different resource grouping options on all available Scheduler view modes. | All views. |
| [`cellTemplate`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#celltemplate) | String | The template option to customize the work cells of the Scheduler and is applied only on the views, on which it is defined. | Applicable on all views except Agenda view. |
| [`workDays`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#workdays) | Number[] | It is used to set the working days on the Scheduler views. | Applicable on all views except Agenda view. |
| [`displayName`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#displayname) | String | When a particular view is customized to display with different intervals, this property allows the user to set different display name for each of the views. | Applicable on all views except Agenda and Month Agenda. |
| [`interval`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#interval) | Number | It allows to customize the default Scheduler views with different set of days, weeks, work weeks or months on the applicable view type. | Applicable on all views except Agenda and Month Agenda. |
| [`startHour`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#starthour) | String | It is used to specify the start hour, from which the Scheduler should be displayed. It accepts the time string in a short skeleton format and also, hides the time beyond the specified start time. | Applicable on Day, Week, Work Week, Timeline Day, Timeline Week and Timeline Work Week views. |
| [`endHour`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#endhour) | String | It is used to specify the end hour, at which the Scheduler ends. It accepts the time string in a short skeleton format. | Applicable on Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week views. |
| [`timeScale`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#timescale) | [TimeScaleModel](https://ej2.syncfusion.com/angular/documentation/api/schedule/timeScaleModel) | Allows to set different timescale configuration on each applicable view modes. | Applicable on Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week views. |
| [`showWeekNumber`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#showweeknumber) | Boolean | When set to `true`, shows the week number on the respective weeks.| Applicable on Day, Week, Work Week, and Month views. |
| [`allowVirtualScrolling`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#allowvirtualscrolling) | Boolean | It is used to enable or disable the virtual scrolling functionality. | Applicable on Agenda and Timeline views. |
| [`headerRows`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#headerrows) | [HeaderRowsModel](https://ej2.syncfusion.com/angular/documentation/api/schedule/headerRowsModel) | Allows defining the custom header rows on timeline views of the Scheduler to display the year, month, week, date and hour label as an individual row. | Applicable only on all timeline views. |

### Day view

Usually a day view displays a single day with all its related appointments. It is possible to customize the day view to display more number of days by extending the [`views`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/) property with [`interval`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#interval) option. You can also define any of the above defined properties within the `views` object definition as depicted in the following code example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs73/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs73/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs73" %}

![Displaying Day View](images/schedule-views-day.png)

> All the above defined properties can be accessed within Day view except [`allowVirtualScrolling`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#allowvirtualscrolling) and [`headerRows`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#headerrows).

### Week view

The Week view displays a count of 7 days (from Sunday to Saturday) with all its related appointments. The first day of the week can be changed using the [`firstDayOfWeek`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#firstdayofweek) which accepts the integer (Sunday=0, Monday=1, Tuesday=2 and so on) value. You can navigate to a particular date in day view from the week view by clicking on the appropriate dates on the date header bar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs74/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs74/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs74" %}

![Displaying Week View](images/schedule-views-week.png)

> All the above defined properties in the table can be accessed within Week and Work week views except [`allowVirtualScrolling`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#allowvirtualscrolling) and [`headerRows`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#headerrows).

### Work Week view

The Work week view displays only the working days of a week (count of 5 days) and its associated appointments. It is possible to customize the working days on the work week view by using the [`workDays`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#workdays) property which accepts an array of integer values (such as Sunday=0, Monday=1, Tuesday=2 and so on). By default, it displays from Monday to Friday (5 days). You can also navigate to a particular date in the day view from the work week view by clicking on the appropriate dates in the date header bar.

The following code example depicts how to change the working days only on the `Work Week` view of the Scheduler.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs75/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs75/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs75" %}

![Displaying Work week View](images/schedule-views-workweek.png)

> The Week, Work week and Day views can display the all-day row appointments in a separate all-day row with an expand/collapse option to view it.

### Month view

A Month view displays the entire days of a particular month and all its related appointments. You can navigate to a particular date in the day view by clicking on the appropriate date text on the month cells.

By default, when you try to create an appointment through Month view, it is considered as created for an entire day. You can explicitly change this behavior by unchecking the `All-day` option from editor window, so that it defaults to the start time duration as 9.00 AM and end time as 9.30 AM.

You can also have the `+ more` text indicator on each day cell of a Month view, clicking on which will allows you to view the hidden appointments of a day.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs76/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs76/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs76" %}

![Displaying Month View](images/schedule-views-month.png)

### Year view

A Year view displays all the days of a particular year with months and all its related appointments. You can navigate to a particular date in the day view by clicking on the appropriate date text on the year cells.

Year view is available in both the `Horizontal` and `Vertical` orientations. You can manage the orientation of year view through [`views`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#orientation) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs77/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs77/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs77" %}

> The year view also has module support. In that, you can get all the months of a particular year in a calendar view format. In that calendar view, appointment contained dates are highlighted with dots placed under the individual date. When you click on the date, the event popup will be displayed and the events will be listed.

### Agenda view

The Agenda view lists out the appointments in a grid-like view for the next 7 days by default from the current date. The count of the days can be changed using the API [`agendaDaysCount`](https://helpej2.syncfusion.com/angular/documentation/api/schedule#agendadayscount). It allows virtual scrolling of dates by enabling the [`allowVirtualScrolling`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#allowvirtualscrolling) property. Also, you can enable or disable the display of days on Scheduler that has no appointments by setting true or false to the [`hideEmptyAgendaDays`](https://helpej2.syncfusion.com/angular/documentation/api/schedule#hideemptyagendadays) property.

The following code example depicts how to customize the display of events within Agenda view alone.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs78/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs78/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs78" %}

![Displaying Agenda View](images/schedule-views-agenda.png)

> Schedule Height is mandatory to set in pixels for Agenda view.

### Month Agenda view

A Month-Agenda view shows a month calendar, where clicking on a particular day will display the appointments present on that date below the calendar. The day with appointments are differentiated with a circular dot below the date of the calendar.

The following code example shows how to hide the weekend days on `MonthAgenda` view as well as the working days list is modified on Month Agenda view alone.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs79/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs79/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs79" %}

![Displaying Month agenda View](images/schedule-views-monthagenda.png)

> Schedule Height is mandatory to set in pixels for Month Agenda view.

### Timeline views – Day, Week, Work Week

Similar to the day view, it shows a single day with all its appointments where the time slots are displayed horizontally. By default, the cell height adjusts as per the height set to Scheduler. When the number of appointments exceeds the visible area of the cells, the `+ more` text indicator will be displayed at the bottom to denote the presence of few more appointments in that time range.

To make use of the timeline views (Timeline Day, Timeline Week and Timeline Work Week) on Scheduler, import and inject the module `TimelineViews` from the `ej2-schedule` package.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs80/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs80/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs80" %}

Similar to the Week view, the timeline week view shows 7 days with its associated appointments with the time slots displayed horizontally.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs81/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs81/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs81" %}

![Displaying Timeline Week View](images/schedule-views-timelineweek.png)

The following code example depicts how to display the timeline work week view on Scheduler,

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs82/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs82/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs82" %}

> Clicking on the dates in the date header bar of Timeline day, Timeline week and Timeline work week will allow you to navigate to the Agenda view.

### Timeline Month view

A Timeline Month view displays the current month days along with its appointments. To make use of the timeline Month view on Scheduler, import and inject `TimelineMonth` module from the `ej2-schedule` package.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs83/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs83/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs83" %}

![Displaying Timeline Month View](images/schedule-views-timelinemonth.png)

> Clicking on the dates in the date header bar of Timeline month will allow you to navigate to the Timeline day view.

### Timeline Year view

In Timeline Year view, each row depicts a single resource. Whereas in the vertical view, each resource is grouped parallelly as columns. Here, the resource grouping follows the tree-view like hierarchical grouping structure and can contain any level of child resources.

To make use of the timeline Year view on Scheduler, import and inject `TimelineYear` module from the `ej2-schedule` package.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs84/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs84/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs84" %}

![Displaying Timeline Year View](images/schedule-views-timelineyear.png)

#### Resource grouping

The following code example depicts how to group the multiple resources on Timeline Year view and its relevant events are displayed accordingly under those resources.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs85/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs85/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs85" %}

#### Auto row height

Timeline Year view supports Auto row height. When the feature [`rowAutoHeight`](https://helpej2.syncfusion.com/angular/documentation/api/schedule#rowautoheight) is enabled, the row height gets auto-adjusted based on the number of overlapping events occupied in the same time range. If you disable the Auto row height, you have the `+ more` text indicator on each day cell of a Timeline Year view, clicking on which will allow you to view the hidden appointments of a day.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs86/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs86/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs86" %}

## Extending view intervals

It is possible to customize the display of default number of days on different Scheduler view modes. For example, a day view can be extended to display 3 days by setting the [`interval`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#interval) option as 3 for the `Day` option within the [`views`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/) property as depicted in the following code example. In the same way, you can also display 2 weeks by setting interval 2 for the `Week` option.

You can provide the alternative display name for such customized views on the Scheduler header bar, by setting the appropriate [`displayName`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#displayname) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs87/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs87/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs87" %}

![Displaying Extending Intervals](images/schedule-views-interval.png)

> The view intervals can be extended on all the Scheduler view modes except Agenda and Month-Agenda views.

## See Also

* [How to restrict view navigation while clicking on dates](./how-to/prevent-date-navigation)

> You can refer to our [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/material/schedule/overview) to knows how to present and manipulate data.
