---
layout: post
title: Accessibility in Angular Calendar | Syncfusion®
description: Learn how the Syncfusion Angular Calendar supports accessibility with WCAG 2.2, Section 508, WAI-ARIA attributes, and full keyboard navigation.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Calendar

The Calendar component follows the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Calendar component is outlined below.

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

## WAI-ARIA Attributes

The Web accessibility defines a way to make web content and web applications more accessible to disabled people. It especially helps the dynamic content change and advanced user interface controls developed with Ajax, HTML, JavaScript, and related technologies.

Calendar provides built-in compliance with the [WAI-ARIA](https://www.w3.org/TR/wai-aria-practices/) specifications. WAI-ARIA support is achieved through the attributes like `aria-label`,`aria-selected`, `aria-disabled`, `aria-activedescendant` applied for navigation buttons, disabled and active day cells.

It helps to provide the information about the widget for assistive technology to the disabled person in the screen reader. The Calendar component uses `role=grid` and `gridcell` for each day cell.

The following table lists the WAI-ARIA attributes and roles applied to the Calendar component.

| **Attribute / Role** | **Description** |
| --- | --- |
| `aria-label` | Provides the text label for the previous and next month navigation elements. It enables screen readers to announce the element. |
| `aria-selected` | Indicates the currently selected date of the Calendar component. |
| `aria-disabled` | Indicates the disabled state of the Calendar component. |
| `aria-activedescendant` | Helps in managing the current active child of the Calendar component. |
| `role=grid` | Gives assistive technologies information about how to handle the Calendar container element. |
| `gridcell` | Defines the individual day cell that can be focusable and selectable. |

A sample of the rendered WAI-ARIA structure is shown below.

```html
<div role="grid" aria-label="Calendar">
    <div role="presentation">
        <button aria-label="Previous month">‹</button>
        <span aria-label="January 2026">January 2026</span>
        <button aria-label="Next month">›</button>
    </div>
    <div role="row">
        <div class="e-day" role="gridcell" aria-selected="true">1</div>
        <div class="e-day" role="gridcell" aria-disabled="true">2</div>
        <div class="e-day" role="gridcell" aria-activedescendant="e-datepicker-content">3</div>
    </div>
</div>
```

## Keyboard Interaction

You can use the following keys to interact with the Calendar.
The component implements keyboard navigation support by following the [WAI-ARIA practices](https://www.w3.org/TR/wai-aria-practices/).

It supports the below list of shortcut keys.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Up Arrow</kbd>  | Focus the previous week date. |
| <kbd>Down Arrow</kbd>  | Focus the next week date. |
| <kbd>Left Arrow</kbd>  | Focus the previous date. |
| <kbd>Right Arrow</kbd>  | Focus the next date. |
| <kbd>Home</kbd>  | Focus the first date in the month. |
| <kbd>End</kbd>  | Focus the last date in the month. |
| <kbd>Page Up</kbd>  | Focus the same date in the previous month. |
| <kbd>Page Down</kbd>  | Focus the same date in the next month. |
| <kbd>Enter</kbd>  | Select the currently focused date. |
| <kbd>Shift + Page Up</kbd>  | Focus the same date in the previous year. |
| <kbd>Shift + Page Down</kbd>  | Focus the same date in the next year. |
| <kbd>Control + Up Arrow</kbd>  | Move into the inner level of the view like month-year, year-decade |
| <kbd>Control + Down Arrow</kbd>  | Move out from the depth-level view like decade-year, year-month |
| <kbd>Control + Home</kbd>  | Focus the starting date in the current year. |
| <kbd>Control + End</kbd>  | Focus the ending date in the current year. |

> To focus the Calendar component, use the `alt+t` keys. The above shortcut keys work only after the Calendar component receives focus.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/getting-started-cs1" %}

## Ensuring accessibility

The Calendar component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Calendar component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/calendar.html) in a new window to evaluate the accessibility of the Calendar component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/calendar.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)