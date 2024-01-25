---
layout: post
title: Accessibility in Angular Daterangepicker component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Daterangepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Daterangepicker component

The DateRangePicker component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the DateRangePicker component is outlined below.

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

The web accessibility makes web content and web applications more accessible for disabled people.
It especially helps in dynamic content change and development of advanced user interface controls  with AJAX, HTML, JavaScript, and related technologies.
DateRangePicker provides built-in compliance with [WAI-ARIA](http://www.w3.org/WAI/PF/aria-practices) specifications. WAI-ARIA supports is achieved through the attributes like `aria-expanded`, `aria-disabled`, `aria-activedescendant` applied to the input element.

To know about the accessibility of Calendar refer to the Calendar's [Accessibility](../calendar/accessibility) section.

It helps disabled persons by providing information about the widget for assistive technology  in the screen readers.
DateRangePicker component contains grid role and grid cell for each day cell.

* **Aria-expanded**: attributes indicates the state of a collapsible element.

* **Aria-disabled**:  Indicates the disabled state of the DateRangePicker component.

## Keyboard Interaction

You can use the following keys to interact with the DateRangePicker.
This component implements the keyboard navigation support by following the  [WAI-ARIA practices](http://www.w3.org/WAI/PF/aria-practices).

It supports the following list of shortcut keys:

## Input Navigation

Before opening the popup, use the below list of keys to control the popup element.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Alt +  Down Arrow</kbd> | Opens the popup. |
| <kbd>Alt +  Up Arrow</kbd> | Closes the popup (if component's input element is in focused state).|
| <kbd>Esc</kbd> | closes the popup. |

## Calendar Navigation

Use the following list of keys to navigate the currently focused Calendar after the popup has opened.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Upper Arrow</kbd>  | Focuses the same day of the previous week. |
| <kbd>Down Arrow</kbd>  | Focuses the same day of the next week. |
| <kbd>Left Arrow</kbd>  | Focuses the day before. |
| <kbd>Right Arrow</kbd>  | Focuses the next day. |
| <kbd>Home</kbd>  | Focuses the first day of the month. |
| <kbd>End</kbd>  | Focuses the last day of the month. |
| <kbd>Page Up</kbd>  | Focuses the same date of the previous month. |
| <kbd>Page Down</kbd>  | Focuses the same date of the next month. |
| <kbd>Enter</kbd>  | Selects the currently focused date. |
| <kbd>Shift + Page Up</kbd>  | Focuses the same date for the previous year. |
| <kbd>Shift + Page Down</kbd>  | Focuses the same date for the next year. |
| <kbd>Control + Home</kbd>  | Focuses the first date of the current year. |
| <kbd>Control + End</kbd>  | Focuses the last date of the current year. |
| <kbd>Alt + Right</kbd>  | Focuses through out the pop-up container in forward direction. |
| <kbd>Alt + Left</kbd>  | Focuses through out the pop-up container in backward direction. |
> To focus the DateRangePicker component, use the `alt+t` keys.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/daterangepicker/getting-started-cs1" %}

## Ensuring accessibility

The DateRangePicker component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the DateRangePicker component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/date-range-picker.html) in a new window to evaluate the accessibility of the DateRangePicker component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/date-range-picker.html" %}

## See also

* [Accessibility in Syncfusion Angular components](../common/accessibility)