---
layout: post
title: Accessibility in Angular Chart component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Chart component

The Chart component follows the accessibility guidelines and standards, including [ADA](https://www.ada.gov), [Section 508](https://www.section508.gov), [WCAG 2.2](https://www.w3.org/TR/WCAG22), and relevant [WAI-ARIA](https://www.w3.org/TR/wai-aria/#roles) roles.

The Chart component's accessibility compliance is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508](https://www.section508.gov) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
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


## WAI-ARIA attributes

The Chart component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/alert) patterns to meet the accessibility. The following ARIA attributes are used in the Chart component:

* img (role)
* button (role)
* region (role)
* aria-label (attribute)
* aria-hidden (attribute)
* aria-pressed (attribute)

## Keyboard interaction

The Chart component follows the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert#keyboardinteraction) guidelines, making it easier for assistive technology users and keyboard-only users to navigate the chart. The following keyboard shortcuts are supported by the Chart component.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Alt + J</kbd> | Moves the focus to the chart element. |
| <kbd>Tab</kbd> | Moves the focus to the next element in the chart. |
| <kbd>Shift + Tab</kbd> | Moves the focus to the previous element in the chart. |
| <kbd>Down Arrow</kbd> | Moves the focus to the data point left side from the selected point. |
| <kbd>Up Arrow</kbd> | Moves the focus to the data point right side from the selected point. |
| <kbd>Left Arrow</kbd> | Moves the focus to the next series in the chart. |
| <kbd>Right Arrow</kbd> | Moves the focus to the previous series in the chart. |
| <kbd>ESC</kbd> | Cancel the tooltip for the data point. |
| <kbd>Enter/Space</kbd> | Selects the data point in the series. |
| <kbd>Down/Left Arrow</kbd> | Moves the focus to the legend left side from the selected legend. |
| <kbd>Up/Right Arrow</kbd> | Moves the focus to the legend right side from the selected legend. |
| <kbd>Enter/Space</kbd> | Toggles the visibility of the corresponding series. |
| <kbd>Ctrl + +</kbd> | Zoom in the chart. |
| <kbd>Ctrl + -</kbd> | Zoom out the chart. |
| <kbd>Down/Up Arrow</kbd> | Pan the chart vertically. |
| <kbd>Left/Right Arrow</kbd> | Pan the chart horizontally. |
| <kbd>R</kbd> | Reset the zoomed chart. |
| <kbd>Ctrl + P</kbd> | Prints the Chart. |

## Ensuring accessibility

The Chart component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Chart component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/chart.html) in a new window to evaluate the accessibility of the Chart component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/chart.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)