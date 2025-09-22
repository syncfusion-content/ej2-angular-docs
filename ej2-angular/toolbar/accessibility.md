---
layout: post
title: Accessibility in Angular Toolbar component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Toolbar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Toolbar 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Toolbar component

The [Angular Toolbar](https://www.syncfusion.com/angular-ui-components/angular-toolbar) component has been designed keeping in mind the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) specifications, and applies the WAI-ARIA roles, states, and properties along with keyboard support for people who use assistive devices. WAI-ARIA accessibility support is achieved through attributes like `aria-label` and `aria-orientation`. It provides information about elements in a document for assistive technology. The component implements keyboard navigation support by following the [WAI-ARIA practices](https://www.w3.org/WAI/ARIA/apg/), and has been tested in major screen readers.

The accessibility compliance for the Toolbar component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker](https://www.npmjs.com/package/accessibility-checker) Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core](https://www.npmjs.com/package/axe-core) Accessibility Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## ARIA attributes

The Toolbar component is designed by considering [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) standards. Toolbar is supported with ARIA Accessibility which is accessible by screen readers and other assistive technology devices. The following list of attributes are added in the Toolbar.

| **Property** | **Functionalities** |
| --- | --- |
| role="toolbar" | This attribute is set to the Toolbar element and describes the actual role of the element. |
| aria-orientation | This attribute is set to the Toolbar element to indicate the Toolbar orientation. Default value is `horizontal`. |
| aria-label | This attribute is set to the Toolbar element and describes the purpose of the set of toolbar. |
| aria-expanded | This attribute is set to the Toolbar popup element to indicate the expanded state of the popup.|
| aria-haspopup | This attribute is set to the popup element to indicate the popup mode of the Toolbar. Default value is false. When popup mode is enabled, attribute value has to be changed to `true`. |
| aria-disabled | This attribute is set to the Toolbar element to indicate the disabled state of the Toolbar. |

## Keyboard interaction

Keyboard navigation is enabled by default. Possible keys are:

| Key           | Description                                                                         |
|---------------|-------------------------------------------------------------------------------------|
| <kbd>Left</kbd>    | Focuses the previous element. |
| <kbd>Right</kbd>   | Focuses the next element. |
| <kbd>Enter</kbd>         | When focused on a Toolbar command, clicking the key triggers the click of Toolbar element. When popup drop-down icon is focused, the popup opens. |
| <kbd>Esc(Escape)</kbd>           | Closes popup. |
| <kbd>Down</kbd>   | Focuses the next popup element. |
| <kbd>Up</kbd>      | Focuses the previous popup element. |
| <kbd>Home</kbd>    | Moves focus to the first Toolbar element. |
|  <kbd>End </kbd>   | Moves focus to the last Toolbar element. |
| <kbd>Tab</kbd>     | Moves focus through the interactive elements. |
| <kbd>Shift + Tab</kbd> | Moves focus through the interactive elements in reverse order. |

## Ensuring accessibility

The Toolbar component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Toolbar component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/toolbar.html) in a new window to evaluate the accessibility of the Toolbar component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/toolbar.html" %}

## See also

- [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)