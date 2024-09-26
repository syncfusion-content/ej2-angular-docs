---
layout: post
title: Global local in Angular Gantt component | Syncfusion
description: Learn here all about Global local in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Global local 
documentation: ug
domainurl: ##DomainURL##
---

# Global local in Angular Gantt component

## Localization

The [`Localization`](../common/localization) library allows you to localize default text content of the Gantt.
The Gantt component has static text on some features (like column headers, add and edit dialog, tooltip, toolbar, etc.) that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#locale) value and translation object.

The following list of properties and its values are used in the Gantt.

Locale key words |Text
-----|-----
emptyRecord |No records to display
id |ID
name |Name
startDate |Start Date
endDate |End Date
duration |Duration
progress |Progress
dependency |Dependency
notes |Notes
baselineStartDate| Baseline Start Date
baselineEndDate| Baseline End Date
type| Type
offset | Offset
resourceName | Resources
resourceID | Resource ID
day | day
hour | hour
minute | minute
days | days
hours | hours
minutes | minutes
generalTab | General
customTab | Custom Columns
writeNotes | Write Notes
addDialogTitle | New Task
editDialogTitle | Task Information
add | Add
edit | Edit
update | Update
delete | Delete
cancel | Cancel
search | Search
task | task
tasks | tasks
zoomIn | Zoom in
zoomOut | Zoom out
zoomToFit | Zoom to fit
expandAll | Expand all
collapseAll | Collapse all
nextTimeSpan | Next timespan
prevTimeSpan | Previous timespan
saveButton | Save
taskBeforePredecessor_FS | You moved "{0}" to start before "{1}" finishes and the two tasks are linked. As the result, the links cannot be honored. Select one action below to perform
taskAfterPredecessor_FS | You moved "{0}" away from "{1}" and the two tasks are linked. As the result, the links cannot be honored. Select one action below to perform
taskBeforePredecessor_SS | You moved "{0}" to start before "{1}" starts and the two tasks are linked. As the result, the links cannot be honored. Select one action below to perform
taskAfterPredecessor_SS | You moved "{0}" to start after "{1}" starts and the two tasks are linked. As the result, the links cannot be honored. Select one action below to perform
taskBeforePredecessor_FF | You moved "{0}" to finish before "{1}" finishes and the two tasks are linked. As the result, the links cannot be honored. Select one action below to perform
taskAfterPredecessor_FF | You moved "{0}" to finish after "{1}" finishes and the two tasks are linked. As the result, the links cannot be honored. Select one action below to perform
taskBeforePredecessor_SF | You moved "{0}" away from "{1}" to starts and the two tasks are linked. As the result, the links cannot be honored. Select one action below to perform
taskAfterPredecessor_SF | You moved "{0}" to finish after "{1}" starts and the two tasks are linked. As the result, the links cannot be honored. Select one action below to perform
okText | Ok
confirmDelete | Are you sure you want to Delete Record?
from | From
to | To
taskLink | Task Link
lag | Lag
start | Start
finish | Finish
enterValue | Enter the value
taskInformation | Task Information
deleteTask | Delete Task
deleteDependency | Delete Dependency
convert | Convert
save | Save
above | Above
below | Below
child | Child
milestone | Milestone
toTask | To Task
toMilestone | To Milestone
eventMarkers | Event markers
leftTaskLabel | Left task label
rightTaskLabel | Right task label
timelineCell | Timeline cell
confirmPredecessorDelete | Are you sure you want to remove dependency link?
taskMode | Task Mode
changeScheduleMode | Change Schedule Mode
subTasksStartDate | SubTasks Start Date
subTasksEndDate | SubTasks End Date
scheduleStartDate | Schedule Start Date
scheduleEndDate | Schedule End Date
auto | Auto
manual | Manual
zoomToFit | Zoom to fit
excelExport | Excel export
csvExport | CSV export
pdfExport | Pdf export
unit | Unit
work | Work
taskType | Task Type
unassignedTask | Unassigned Task
group | Group
FF | FF
FS | FS
SF | SF
SS | SS

### Loading translations

To load translation object in an application use [`load`](https://ej2.syncfusion.com/documentation/api/base/l10n/#load) function of [`L10n`](https://ej2.syncfusion.com/documentation/api/base/l10n/) class.

The below example demonstrates the Gantt in **Deutsch** culture.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/global/locale-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/global/locale-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/global/locale-cs1" %}

## Internationalization

The [`Internationalization`](../common/internationalization) library is used to globalize number, date, and time values in gantt component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/global/internationalization-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/global/internationalization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/global/internationalization-cs1" %}

> * In the above sample, `Timeline` is formatted by `NumberFormatOptions` and `DateFormatOptions`.
> * By default, [`locale`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#locale) value is `en-US`. If you want to change `en-US` culture, then set the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#locale).

## Right to left (RTL)

RTL provides an option to switch the text direction and layout of the Gantt component from right to left. It improves the user experiences and accessibility for users who use right-to-left languages (Arabic, Urdu, etc.). To enable RTL Gantt, set the [`enableRtl`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enablertl) to true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/global/rtl-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/global/rtl-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/global/rtl-cs1" %}

## See Also

* [Internationalization](../common/internationalization)
* [Localization](../common/localization)
