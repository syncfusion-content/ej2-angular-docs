---
layout: post
title: Editor template in Angular Schedule component | Syncfusion
description: Learn here all about Editor template in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# Editor template in Angular Schedule component

The Scheduler component utilizes popups and dialogs to display notifications and provides an editor window with event fields to simplify appointment creation and editing. The editor window and its fields can be easily customized, and validation rules can be applied as needed.

## Event editor

The editor window opens on the Scheduler when a cell or event is double-clicked. When a cell is double-clicked, the editor window appears in "Add new" mode. When an event is double-clicked, it opens in "Edit" mode.

On mobile devices, the detailed editor window opens in edit mode by clicking the edit icon on the popup that appears after tapping an event once. To open the editor in add mode, tap a cell to display a `+` indicator, then tap again to open the editor window.

> To prevent the editor window from opening, render the Scheduler in [`readonly`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#readonly) mode or use code customization within the [`popupOpen`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#popupopen) event.

### How to change the editor window header title and text of footer buttons

You can modify the header title and the text of the footer buttons in the editor window by updating the corresponding localized word collection in the Scheduler.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/editor-window-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/editor-window-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/editor-window-cs1" %}

![Editing Window with Custom Local Words](images/schedule-editing-local-word.png)

### How to change the label text of default editor fields

To change the default labels such as "Subject," "Location," and other field names, use the `title` property within the field option of [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/editor-window-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/editor-window-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/editor-window-cs2" %}

![Editor Window with Custom Label](images/schedule-custom-label.png)

### Field validation

You can validate the required fields in the editor window on the client side before submitting, by adding appropriate validation rules to each field. Appointment fields can accept both `string` and `object` types. To apply validations, specify object values for the event fields.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/editor-window-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/editor-window-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/editor-window-cs3" %}

![Editor window with Validation](images/schedule-validation.png)

> See [form validation](http://ej2.syncfusion.com/documentation/form-validator#validation-rules) documentation for applicable validation rules.

### Adding additional fields to the default editor

The additional fields can be added to the default event editor by making use of the [`popupOpen`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#popupopen) event which gets triggered before the event editor opens on the Scheduler. The [`popupOpen`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#popupopen) is a client-side event that triggers before any of the generic popups opens on the Scheduler. The additional field (any of the form elements) should be added with a common class name `e-field`, so as to handle and process those additional data along with the default event object. In the following example, an additional field `Event Type` has been added to the default event editor and its value is processed accordingly.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/editor-window-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/editor-window-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/editor-window-cs4" %}

### How to prevent the default focus of the editor widow

By default, when the editor window opens, focus is set to the `subject` field. You can prevent this default focusing behavior using the [`popupOpen`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#popupopen) event, as shown in the following code example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/editor-window-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/editor-window-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/editor-window-cs5" %}

### Customizing the default time duration in the editor window

The default event editor calculates start and end time durations based on the `interval` value set in the [`timeScale`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#timescale) property. By default, the [`interval`](https://ej2.syncfusion.com/angular/documentation/api/schedule/timeScaleModel/#interval) value is set to 60 minutes, so the time difference in the event editor is 60 minutes. You can change this duration by updating the [`duration`](https://ej2.syncfusion.com/angular/documentation/api/schedule/popupOpenEventArgs/#duration) option within the [`popupOpen`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#popupopen) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/editor-window-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/editor-window-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/editor-window-cs6" %}

### How to prevent the display of editor and quick popups

You can prevent the display of editor and quick popup windows by setting the `cancel` option to `true` within the [`popupOpen`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#popupopen) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/editor-window-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/editor-window-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/editor-window-cs7" %}

You can also prevent only specific popups by checking the popup type within the [`popupOpen`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#popupopen) event. The following table details the available popup types:

| Type | Description |
|------|-------------|
| Editor | For Detailed editor window.|
| QuickInfo | For Quick popup which opens on cell click.|
| EditEventInfo |For  Quick popup which opens on event click.|
| ViewEventInfo | For Quick popup which opens on responsive mode.|
| EventContainer | For more event indicator popup.|
| RecurrenceAlert | For edit recurrence event alert popup.|
| DeleteAlert | For delete confirmation popup.|
| ValidationAlert | For validation alert popup.|
| RecurrenceValidationAlert | For recurrence validation alert popup.|

### How to prevent the display of editor in cell double click

You can prevent the editor from appearing by handling the [cellDoubleClick](https://ej2.syncfusion.com/angular/documentation/api/schedule/#celldoubleclick) event and setting the `cancel` option to `true`.

`[src/app/app.component.ts]`
```typescript
import { Component } from '@angular/core';
import { scheduleData } from './data';
import { extend } from '@syncfusion/ej2-base';
import { EventSettingsModel, View, DayService, WeekService, WorkWeekService, MonthService, AgendaService, CellClickEventArgs } from '@syncfusion/ej2-angular-schedule';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate' [views]='views' [eventSettings]='eventSettings' (cellDoubleClick)='onCellDoubleClick($event)'></ejs-schedule>`,
  /* custom code end*/
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService
  ],
})
export class AppComponent {
  public data: Record<string, any>[] = ([] = extend([],scheduleData,null,true) as Record<string, any>[]);
  public selectedDate: Date = new Date(2021, 0, 10);
  public eventSettings: EventSettingsModel = { dataSource: this.data };
  public currentView: View = 'Week';
  public onCellDoubleClick(args: CellClickEventArgs): void {
    args.cancel = true;
    // Implement custom dialog if needed
  }
}
```

### Customizing timezone collection in the editor window

By default, the editor window displays built-in timezone collections. You can customize these using the [`timezoneDataSource`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#timezonedatasource) property with a collection of [`TimezoneFields`](https://ej2.syncfusion.com/angular/documentation/api/schedule/timezoneFields/) data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs37/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs37/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs37" %}

## Customizing the event editor using template

The event editor window can be customized using the [`editorTemplate`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#editortemplate) option. Create the custom window with required fields using a script template with type **text/x-template**.

Each field defined within template should contain the **e-field** class, so as to allow the processing of those field values internally. The ID of this customized script template section is assigned to the [`editorTemplate`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#editortemplate) option, so that these customized fields will be replaced onto the default editor window.

> The **e-field** class is supported for the following Syncfusion components: **DropDownList**, **DateTimePicker**, **MultiSelect**, **DatePicker**, **CheckBox**, and **TextBox**. Since we have processed the field values internally for the above mentioned components.

As we are using our Syncfusion<sup style="font-size:70%">&reg;</sup> sub-components within our editor using template in the following example, the custom defined form elements needs to be configured as required Syncfusion<sup style="font-size:70%">&reg;</sup> components such as **DropDownList** and **DateTimePicker** within the [`popupOpen`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#popupopen) event. This particular step can be skipped, if the user needs to simply use the usual form elements.

Learn how to customize the Angular Scheduler's editor window with your own design in this video:

{% youtube "https://www.youtube.com/watch?v=-KJg2d6mdmQ" %}

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/editor-window-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/editor-window-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/editor-window-cs8" %}

### How to customize header and footer using template

The editor window's header and footer can be customized with templates using the [`editorHeaderTemplate`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#editorheadertemplate) and [`editorFooterTemplate`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#editorfootertemplate) options. Create a template script section for each, using **text/x-template**.

In this example, the header is customized to show the appointment's subject via [`editorHeaderTemplate`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#editorheadertemplate), while [`editorFooterTemplate`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#editorfootertemplate) is used to validate fields before saving or canceling the event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/editor-header-footer-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/editor-header-footer-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/editor-header-footer-cs1" %}

### How to add resource options within the editor template

Resource fields can be added to the editor template using a MultiSelect control to enable multiple resource selection.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/resource-field-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/resource-field-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/resource-field-cs1" %}

![Add Resource Options within Editor Template](images/schedule-custom-window-with-resource.png)

### How to add recurrence options within the editor template

The following code example shows how to add recurrence options within the editor template by importing `RecurrenceEditor`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/resource-field-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/resource-field-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/resource-field-cs2" %}

![Add Recurrence Options within Editor Template](images/schedule-custom-window-with-recurrence.png)

### Applying validation to editor template fields

The following code example demonstrates how to apply validation rules to the status field in a custom event editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/resource-field-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/resource-field-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/resource-field-cs3" %}

![Editor Template with Validation](images/schedule-custom-window-validation.png)

### How to save the customized event editor using a template

If the **e-field** class is not added to template fields, set field values manually in the [`popupClose`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#popupclose) event.

Note: Data can be retrieved only on the `save` and `delete` options, not on `close` or `cancel`.

The following example shows how to handle saving event data by handling the [`popupClose`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#popupclose) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/resource-field-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/resource-field-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/resource-field-cs4" %}

To prevent only specific popups within the [`popupClose`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#popupclose) event, check the popup type. Types include:

| Type | Description |
|------|-------------|
| Editor | For Detailed editor window.|
| QuickInfo | For Quick popup which opens on cell click.|
| EditEventInfo |For  Quick popup which opens on event click.|
| ViewEventInfo | For Quick popup which opens on responsive mode.|
| EventContainer | For more event indicator popup.|
| RecurrenceAlert | For edit recurrence event alert popup.|
| DeleteAlert | For delete confirmation popup.|
| ValidationAlert | For validation alert popup.|
| RecurrenceValidationAlert | For recurrence validation alert popup.|

### How to enable save button in customized event editor using template

Initially, the **e-custom-disable** class is added to the Save button. Once all required fields are filled, the class is removed, enabling the button.

The code sample below enables the Save button in a custom event editor by handling `keyup` and `change` events.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/resource-field-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/resource-field-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/resource-field-cs5" %}

## Quick popups

The quick info popups are the ones that gets opened, when a cell or appointment is single clicked on the desktop mode. On single clicking a cell, you can simply provide a subject and save it. Also, while single clicking on an event, a popup will be displayed where you can get the overview of the event information. You can also edit or delete those events through the options available in it.

By default, popups are displayed over cells and appointments. To disable, set [`showQuickInfo`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#showquickinfo) to `false`.

> The quick popup that opens while single clicking on the cells are not applicable on mobile devices.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/editor-window-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/editor-window-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/editor-window-cs9" %}

### How to open QuickInfo popup on multiple cell selection

By default the `QuickInfo` popup will open on single click of the cell. To open the quick info popup on multiple cell selection, you need to select the cells and press `enter` key. You can open this popup immediately after multiple cell selection by setting up `true` to [`quickInfoOnSelectionEnd`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#quickinfoonselectionend) property where as its default value is `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/editor-window-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/editor-window-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/editor-window-cs10" %}

### How to change the watermark text of quick popup subject

By default, `Add Title` text is displayed on the subject field of quick popup. To change the default watermark text, change the value of the appropriate localized word collection used in the Scheduler.

```typescript
L10n.load({
    'en-US': {
        'schedule': {
          'addTitle' : 'New Title'
        }
    }
});
```

### Customizing quick popups

The look and feel of the built-in quick popup window, which opens when single clicked on the cells or appointments can be customized by making use of the [`quickInfoTemplates`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#quickinfotemplates) property of the Scheduler. There are 3 sub-options available to customize them easily,

* header - Accepts the template design that customizes the header part of the quick popup.
* content - Accepts the template design that customizes the content part of the quick popup.
* footer - Accepts the template design that customizes the footer part of the quick popup.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/quick-popup-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/quick-popup-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/quick-popup-cs1" %}

> Quick popups in adaptive mode can also be customized using [`quickInfoTemplates`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#quickinfotemplates) and the `e-device` class.

## More events indicator and popup

When the number of appointments count that lies on a particular time range * default appointment height exceeds the default height of a cell in month view and all other timeline views, a `+ more` text indicator will be displayed at the bottom of those cells. This indicator denotes that the cell contains few more appointments in it and clicking on that will display a popup displaying all the appointments present on that day.

> To disable this option of showing popup with all hidden appointments, while clicking on the text indicator, you can do code customization within the [`popupOpen`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#popupopen) event.

The same indicator is displayed on all-day row in calendar views such as day, week and work week views alone, when the number of appointment count present in a cell exceeds three. Clicking on the text indicator here will not open a popup, but will allow the expand/collapse option for viewing the remaining appointments present in the all-day row.

The following code example shows how to disable the display of such popups while clicking on the more text indicator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/editor-window-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/editor-window-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/editor-window-cs11" %}

![More Event Popup](images/schedule-more-event-popup.png)

### How to customize the popup that opens on more indicator

The following code example shows you how to customize the default more indicator popup in which number of events rendered count on the day has been shown in the header.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/editor-window-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/editor-window-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/editor-window-cs12" %}

### How to customize the appointments rendered on more indicator popup

The following code example shows you how to customize the details shown on the appointments rendered on more indicator popup.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/editor-window-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/editor-window-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/editor-window-cs13" %}

### How to prevent the display of popup when clicking on the more text indicator

To prevent the popup window from appearing, set the `cancel` property to `true` in the [`MoreEventsClick`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#moreeventsclick) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/editor-window-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/editor-window-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/editor-window-cs14" %}

### How to navigate Day view when clicking on more text indicator

The following code example shows you how to customize the [`MoreEventsClick`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#moreeventsclick) property to navigate to the Day view when clicking on the more text indicator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/editor-window-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/editor-window-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/editor-window-cs15" %}

### How to close the editor window manually

You can close the editor window by using [closeEditor](https://ej2.syncfusion.com/angular/documentation/api/schedule/#closeeditor) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/editor-window-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/editor-window-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/editor-window-cs16" %}

### How to open the quick info popup manually

You can open the quick info popup in scheduler by using the [openQuickInfoPopup](https://ej2.syncfusion.com/angular/documentation/api/schedule/#openquickinfopopup) public method. To open the cell quick info popup, you can pass the cell data as an argument to the method. To open the event quick info popup, you should pass the event data object as an argument to the method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/editor-window-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/editor-window-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/editor-window-cs17" %}

### How to close the quick info popup manually

You can close the quick info popup in scheduler by using the [closeQuickInfoPopup](https://ej2.syncfusion.com/angular/documentation/api/schedule/#closequickinfopopup) public method. The following code example demonstrates the how to close quick info popup manually.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/editor-window-cs18/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/editor-window-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/editor-window-cs18" %}

> You can refer to our [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/material/schedule/overview) to knows how to present and manipulate data.
