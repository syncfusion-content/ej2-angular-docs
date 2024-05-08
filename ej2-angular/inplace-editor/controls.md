---
layout: post
title: Controls in Angular Inplace editor component | Syncfusion
description: Learn here all about Controls in Syncfusion Angular Inplace editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Controls 
documentation: ug
domainurl: ##DomainURL##
---

# Controls in Angular Inplace editor component

**In-place Editor** renders various components based on the [type](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/#type) property and it have built-in and injectable components. To use injectable components, inject the required modules into **`In-place Editor`**. By default, the `type` property set to `Text` and render the `TextBox`.

The following table explains Injectable components module name and built-in components and their types.

| **Injectable Components** | **Built in Components** |
|-----------------------|---------------------|
| [AutoComplete](../auto-complete/)  (`AutoComplete`)        | [TextBox](../textbox/)  (`Text`)             |
| [ComboBox](../combo-box/)  (`ComboBox`)              | [DatePicker](../datepicker/)  (`Date`)        |
| [MultiSelect](../multi-select/)   (`MultiSelect`)        | [DateTimePicker](../datetimepicker/)   (`DateTime`)     |
| [TimePicker](../timepicker/)   (`Time`)         | [DropDownList](../drop-down-list/)  (`DropDownList`)      |
| [DateRangePicker](../daterangepicker/)   (`DateRange`)       | [MaskedTextBox](../maskedtextbox/)   (`Mask`)      |
| [Slider](../range-slider/getting-started/)   (`Slider`)             | [NumericTextBox](../numerictextbox/)   (`Numeric`)    |
| [Rte](../rich-text-editor/)     (`RTE`)              |                     |
| [ColorPicker](../color-picker/)    (`Color`)       |                     |

In the following sample, built-in and injectable based **In-place Editor** components are rendered.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/in-place-editor/controls-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/in-place-editor/controls-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/in-place-editor/controls-cs1" %}

## Model configuration

Component properties and events can be customized using the **In-place Editor** [model](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/#model) property.

In the following code, the [type](../in-place-editor/controls/#types) defined as the `Date` and `DatePicker` properties are configured through [model](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/#model) property to customize the [DatePicker](https://ej2.syncfusion.com/angular/documentation/api/datepicker) component at **In-place Editor**.

```typescript

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
      <ejs-inplaceeditor id="element" type="Date" [model]="dateModel" [value]='dateValue'></ejs-inplaceeditor>
    `
})

export class AppComponent {
  public dateModel: Object = { showTodayButton: true, placeholder: 'Select Date' };
  public dateValue: Date = new Date('04/12/2018');
}

```