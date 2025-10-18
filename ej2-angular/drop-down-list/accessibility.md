---
layout: post
title: Accessibility in Angular Drop down list component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Drop down list component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: DropDownList
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Drop down list component

The DropDownList component is designed with WAI-ARIA specifications, applying the necessary roles, states, and properties to support keyboard interaction. This ensures that the component is fully accessible to users who rely on assistive technologies (AT) or keyboard navigation.

The DropDownList component adheres to accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WAI-ARIA roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the DropDownList component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
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

The component's design implements the `listbox` role for the main wrapper and the `option` role for each item in the popup list. The following ARIA attributes provide detailed information about the DropDownList's state for assistive technologies.

| **Properties** | **Functionalities** |
| --- | --- |
| `aria-haspopup` | Announces to assistive technologies that the component's input element will trigger a popup list. |
| `aria-expanded` | Communicates the current state (expanded or collapsed) of the popup list. |
| `aria-selected` | Identifies the currently selected item within the list, ensuring the user knows their choice. |
| `aria-readonly` | Specifies that the DropDownList is in a read-only state, preventing user interaction. |
| `aria-disabled` | Informs assistive technologies that the DropDownList is disabled and not interactive. |
| `aria-activedescendent` | Holds the ID of the currently focused list item, allowing assistive technologies to track keyboard focus as the user navigates the popup. |
| `aria-owns` | Programmatically links the input element to the popup list, establishing a parent-child relationship for screen readers. |

## Keyboard Interaction

You can use the following key shortcuts to interact with the DropDownList component.

| **Keyboard shortcuts** | **Actions** |
| --- | --- |
| <kbd>Down Arrow</kbd> | If no item is selected, selects the first item in the DropDownList. Otherwise, moves focus to the next item. |
| <kbd>Up Arrow</kbd> | Moves focus to the previous item. |
| <kbd>Page Down</kbd> | When the popup is open, scrolls down one page and selects the first item in the visible view. |
| <kbd>Page Up</kbd> | When the popup is open, scrolls up one page and selects the first item in the visible view. |
| <kbd>Enter</kbd> | Toggles the popup list. If the popup is open, it selects the focused item and closes the popup. |
| <kbd>Tab</kbd> | If the popup is closed, moves focus to the next focusable element. If the popup is open, it closes the popup, and focus remains on the component. |
| <kbd>Shift + Tab </kbd> | If the popup is closed, moves focus to the previous focusable element. If the popup is open, it closes the popup, and focus remains on the component. |
| <kbd>Alt + Down Arrow</kbd> | Opens the popup list. |
| <kbd>Alt + Up Arrow</kbd> | Closes the popup list. |
| <kbd>Escape</kbd> | Closes the popup list if it is open, retaining the currently selected item. |
| <kbd>Home</kbd> | Selects the first item in the list. |
| <kbd>End</kbd> | Selects the last item in the list. |
| <kbd>A-Z</kbd> or <kbd>0-9</kbd> | Jumps to the next list item that starts with the typed character. |

> In the following sample, <kbd>alt+t</kbd> keys are used to focus the DropDownList component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/getting-started-cs1" %}

## Ensuring accessibility

The DropDownList component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the DropDownList component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/drop-down-list.html) in a new window to evaluate the accessibility of the DropDownList component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/drop-down-list.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)