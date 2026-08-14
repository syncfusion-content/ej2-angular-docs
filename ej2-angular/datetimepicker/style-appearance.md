---
layout: post
title: Style and Appearance in Angular DateTime Picker | Syncfusion®
description: Learn how to style and customize the appearance of the Syncfusion Angular DateTime Picker using CSS for backgrounds, text, and popup.
platform: ej2-angular
control: Style appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in Angular DateTime Picker

The following content provides the exact CSS structure that can be used to modify the control's appearance based on the user preference.

## Customizing the appearance of DateTimePicker wrapper element

Use the following CSS to customize the appearance of wrapper element.

```css
/* To specify height and font size */
.e-input-group input.e-input, .e-input-group.e-control-wrapper input.e-input {
        font-size: 20px;
        height: 40px;
    }
```

## Customizing the DateTimePicker icons element

Use the following CSS to customize the DateTimePicker icons element

```css
/* To specify background color and font size */
.e-datetime-wrapper .e-input-group-icon.e-date-icon, .e-datetime-wrapper .e-input-group-icon.e-time-icon {
        font-size: 16px;
        background-color: blanchedalmond;
    }
```

## Customizing the time picker popup in the DateTimePicker

Use the following CSS to customize the time picker popup in the DateTimePicker

```css
/* To specify height */
.e-datetimepicker.e-popup {
        height: 100px;
}
```

## Customizing the Calendar popup of the DateTimePicker

Please check the below section, to customize the style and appearance of the Calendar component in the DateTimePicker

[Customizing Calendar's style and appearance](../calendar/style-appearance/)

## Full screen mode support in mobiles and tablets

The DateTimePicker component's full-screen mode feature enables users to view the component popup element in full-screen mode on mobile devices with improved visibility and a better user experience. It is important to mention that this feature is exclusively available for mobile and tablet devices in both landscape and portrait orientations. To activate the full screen mode within the DateTimePicker component, simply set the [fullScreenMode](https://ej2.syncfusion.com/angular/documentation/api/datetimepicker#fullScreenMode) API value to `true`. This action will extend the calendar and time popup element to occupy the entire screen on mobile devices.

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<!-- To Render datetimepicker -->
             <ejs-datetimepicker [fullScreenMode]="true"></ejs-datetimepicker>`
})
export class AppComponent  { }
```

![DateTimePickerFullScreen](../images/DateTimePickerFullScreen.gif)