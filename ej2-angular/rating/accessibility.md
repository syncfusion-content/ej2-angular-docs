---
layout: post
title: Accessibility with Angular Rating component | Syncfusion
description:  Learn here all about Accessibility with Angular Rating component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Accessibility
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Rating component

The Rating component conforms to accessibility standards and guidelines, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) commonly used to evaluate accessibility.

The accessibility compliance for the Rating component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Accessibility Checker](https://www.npmjs.com/package/accessibility-checker) Validation | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Axe-core](https://www.npmjs.com/package/axe-core) Accessibility Validation | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/landing-page/intermediate.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/landing-page/no.png" alt="No"> - The component does not meet the requirement.</div>

## WAI-ARIA attributes

The Rating component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/slider/) patterns to meet the accessibility. The following ARIA attributes are used in the Rating component:

| Attributes | Purpose |
| ------------ | ----------------------- |
| `role=slider` | Defines an interactive input where users select values within a specified range. |
| `role=button` | Identifies the reset button as a clickable element that resets the rating to its minimum value. |
| `aria-label` | Provides an accessible name for the Rating component. |
| `aria-valuemin` | Indicates the minimum value of the rating. |
| `aria-valuemax` | Indicates the maximum value of the rating. |
| `aria-valuenow` | Indicates the current value of the rating. |
| `aria-hidden` | Specifies whether the reset button is interactive. |

## Keyboard interaction

The Rating component follows [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/slider/#keyboardinteraction) guidelines to support users of assistive technologies and keyboard-only navigation. The following keyboard shortcuts enable efficient rating control.

| Keyboard shortcuts | Actions |
|------------|-------------------|
| <kbd>Space</kbd> | When **Reset Button** is focused, resets to `min` value. |
| <kbd>Arrow Up</kbd> | Increases the value. |
| <kbd>Arrow Left</kbd> | Decreases the value; in RTL mode, increases the value. |
| <kbd>Arrow Down</kbd> | Decreases the value. |
| <kbd>Arrow Right</kbd> | Increases the value; in RTL mode, decreases the value. |

## Ensuring accessibility

The Rating component's accessibility standards compliance is verified using the [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) tools during automated testing. The following sample demonstrates the accessibility features of the Rating component. Open the [sample](https://ej2.syncfusion.com/accessibility/rating.html) in a new window to evaluate component accessibility with accessibility validation tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/rating.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)
