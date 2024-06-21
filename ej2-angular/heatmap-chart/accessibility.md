---
layout: post
title: Accessibility in Angular HeatMap chart component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular HeatMap chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular HeatMap chart component

The HeatMap component follows commonly used accessibility guidelines and standards, such as [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles).

The accessibility compliance for the HeatMap component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |

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

HeatMap component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) patterns to meet the accessibility. The following ARIA attributes are used in the HeatMap component.

| Attributes | Purpose |
| --- | --- |
| `role=img` | It is specified in the legend and border of the HeatMap. This role is provided to specify the information in a visual manner. |
| `role=region` | It specifies the HeatMap areas that do not support interactive functions like cell selection. |
| `aria-label` | Provides an accessible name for the title, legend title, legend item labels, axis labels, cell labels and multilevel labels. |

## Screen reading in HeatMap

HeatMap has built-in accessibility features like screen reading. Screen reading in the HeatMap component allows all users, regardless of ability or disability, to use the component. The following HeatMap elements will be read aloud with screen reading software like Narrator for Windows.

| Elements | Description |
| --- | --- |
| Title | Reads the contents of the HeatMap chart's title. |
| Axis labels | Reads the x and y axis labels of the HeatMap chart. |
| Multilevel labels | Reads the multilevel labels in the x and y axis of the HeatMap chart. |
| Cell labels | Reads the labels from the cells in the Heatmap chart. |
| Legend title | Reads the contents of the legend's title as specified in HeatMap chart. |
| Legend item label | Reads the label of a legend item in HeatMap chart. |

## Ensuring accessibility

The HeatMap component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the HeatMap component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/heat-map.html) in a new window to evaluate the accessibility of the HeatMap component with accessibility tools.

## See also

* [Accessibility in Syncfusion Angular components](../common/accessibility)
