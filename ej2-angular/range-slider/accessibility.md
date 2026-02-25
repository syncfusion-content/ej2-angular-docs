---
layout: post
title: Accessibility in Angular Range Slider component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Range Slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Range Slider 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Range Slider component

The Range Slider component conforms to accessibility standards and guidelines, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) commonly used to evaluate accessibility.

The accessibility compliance for the Range Slider component is outlined below.

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

## WAI-ARIA attributes

The Range Slider component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/slider/) patterns to meet the accessibility. The following ARIA attributes are used in the Range Slider component:

| Attributes | Purpose |
| --- | --- |
| `role=slider` | Defines the slider as an interactive control for selecting values within a range. |
| `aria-valuemin` | Indicates the minimum value of the slider. |
| `aria-valuemax` | Indicates the maximum value of the slider. |
| `aria-valuenow` | Indicates the current value of the slider. |
| `aria-valuetext` | Returns the current text of the slider. |
| `aria-orientation` | Indicates whether the Slider is oriented horizontally or vertically. |
| `aria-label` | Provides an accessible name for the Slider, serving as label text for the Slider's left and right buttons (for increment and decrement). |

## Keyboard interaction

The Range Slider component follows [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert/#keyboardinteraction) guidelines to support users of assistive technologies and keyboard-only navigation. The following keyboard shortcuts enable efficient slider control.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Right Arrow</kbd>/<kbd>Up Arrow</kbd> | Increase the Slider value. |
| <kbd>Left Arrow</kbd>/<kbd>Down Arrow</kbd> | Decrease the Slider value. |
| <kbd>Home</kbd> | Moves to the start value (for Range Slider when the second thumb is focused and the Home key is pressed, it moves to the first thumb value). |
| <kbd>End | Moves to the end value (for Range Slider when the first thumb is focused and the End key is pressed, it moves to the second thumb value). |
| <kbd>Page Up</kbd> | 	Increases the Slider by `largeStep` value. |
| <kbd>Page Down</kbd> | Decreases the Slider by `largeStep` value. |

## Ensuring accessibility

The Range Slider component's accessibility standards compliance is verified using the [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) tools during automated testing. The following sample demonstrates the accessibility features of the Range Slider component. Open the [sample](https://ej2.syncfusion.com/accessibility/slider.html) in a new window to evaluate component accessibility with accessibility validation tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/slider.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)
