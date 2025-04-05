---
layout: post
title: Accessibility in Angular Datetimepicker component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Datetimepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Datetimepicker component

The DateTimePicker component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the DateTimePicker component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## WAI-ARIA attributes

The Web accessibility defines a way to make web content and web applications more accessible to disabled people. It especially helps the dynamic content change and advanced user interface controls developed with Ajax, HTML, JavaScript, and related technologies.

DateTimePicker provides built-in compliance with the [WAI-ARIA](http://www.w3.org/WAI/PF/aria-practices) specifications. WAI-ARIA supports is achieved through the attributes like `aria-expanded`, `aria-disabled`, `aria-activedescendant` applied to the input element.

To know about the accessibility of Calendar refer to the Calendar's [Accessibility](../calendar/accessibility/) section.

It helps to provide information about the widget for assistive technology to the disabled person in
screen reader.

* **Aria-expanded**: attributes indicates the state of a collapsible element.

* **Aria-disabled**: attribute indicates the disabled state of this DateTimePicker component.

* **Aria-activedescendent**: attribute helps in managing the current active child of the DateTimePicker component.

## Keyboard Interaction

You can use the following keys to interact with the DateTimePicker.
The component implements the keyboard navigation support by following the [WAI-ARIA practices](http://www.w3.org/WAI/PF/aria-practices).

DateTimePicker supports the below list of shortcut keys.

## Input Navigation

Before opening the popup, use the below list of keys to `DateTimePicker` component the popup element.

| **Press**                                       | **To do this**           |
| ----------------------------------------------- | ------------------------ |
| <kbd>Alt + Down Arrow</kbd>                     | Open the select popup    |
| <kbd>Alt + Down Arrow + Alt + Down Arrow </kbd> | Toggle between two popup |

## Calendar Navigation

Use the below list of keys to interact with the Calendar after the DatePicker popup has opened.

| **Press**                        | **To do this**                                                   |
| -------------------------------- | ---------------------------------------------------------------- |
| <kbd>Upper Arrow</kbd>           | Focus the previous week date.                                    |
| <kbd>Down Arrow</kbd>            | Focus the next week date.                                        |
| <kbd>Left Arrow</kbd>            | Focus the previous date.                                         |
| <kbd>Right Arrow</kbd>           | Focus the next date.                                             |
| <kbd>Home</kbd>                  | Focus the first date in the month.                               |
| <kbd>End</kbd>                   | Focus the last date in the month.                                |
| <kbd>Page Up</kbd>               | Focus the same date in the previous month.                       |
| <kbd>Page Down</kbd>             | Focus the same date in the next month.                           |
| <kbd>Enter</kbd>                 | Select the currently focused date.                               |
| <kbd>Shift + Page Up</kbd>       | Focus the same date in the previous year.                        |
| <kbd>Shift + Page Down</kbd>     | Focus the same date in the previous year.                        |
| <kbd>Control + Upper Arrow</kbd> | Moves into the inner level of view like month-year, year-decade  |
| <kbd>Control + Down Arrow</kbd>  | Moves out from the depth level view like decade-year, year-month |
| <kbd>Control + Home</kbd>         | Focus the starting date in the current year.                     |
| <kbd>Control + End</kbd>          | Focus the ending date in the current year.                       |

Use the below list of shortcut keys to interact with the TimePicker after the TimePicker Popup has opened.

| **Press**                    | **To do this**                                         |
| ---------------------------- | ------------------------------------------------------ |
| <kbd>Upper Arrow</kbd>       | Navigate and select the previous item.                 |
| <kbd>Down Arrow</kbd>        | Navigate and select the next item.                     |
| <kbd>Left Arrow</kbd>        | Move the cursor towards arrow key pressed direction.   |
| <kbd>Right Arrow</kbd>       | Move the cursor towards arrow key pressed direction.   |
| <kbd>Home</kbd>              | Navigate and select the first item.                    |
| <kbd>End</kbd>               | Navigate and select the last item.                     |
| <kbd>Enter</kbd>             | Select the currently focused item and close the popup. |
| <kbd>Alt + Upper Arrow</kbd> | Close the popup.                                       |
| <kbd>Alt + Down Arrow</kbd>  | Open the popup.                                        |
| <kbd>Esc</kbd>               | Close the popup.                                       |

> To focus the DateTimePicker component use the `alt+t` keys.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datetimepicker/accessibility-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datetimepicker/accessibility-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datetimepicker/accessibility-cs1" %}

## Ensuring accessibility

The DateTimePicker component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the DateTimePicker component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/date-time-picker.html) in a new window to evaluate the accessibility of the DateTimePicker component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/date-time-picker.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)