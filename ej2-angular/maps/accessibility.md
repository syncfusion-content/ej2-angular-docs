---
layout: post
title: Accessibility in Angular Maps component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Maps component

Accessibility enables users with disabilities to interact with the Maps component through assistive technologies such as screen readers and keyboard navigation. The Maps component is designed to comply with [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria#roles).

The following table summarizes the accessibility compliance of the Maps component.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | Not Applicable |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) |<img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
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

To meet accessibility standards, the Maps component follows to the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) patterns. In the Maps component, the following ARIA attributes are used:

| Attributes | Purpose |
| --- | --- |
| `role=region` | It specifies the Maps areas that do not support interactive functions such as selection and highlight. |
| `role=button` | It specifies the Maps areas where interactive functions such as selection and highlight are available. |
| `aria-label` | Provides an accessible name for Maps elements such as geometric shapes, title, subtitle, legend title, legend item labels, and data labels. For more details, see the following section. |

## Screen reading in Maps

Accessibility in the Maps component ensures that all users, regardless of ability or disability, can use screen reading. The following Maps elements will be read aloud using screen reading software, such as Narrator for Windows.

| Elements | Description |
| --- | --- |
| Shapes in the layer | Reads the names of the geographical shapes (such as countries, states, and regions) that appear on the Maps. |
| Title | Reads the title content in the Maps. |
| Subtitle | Reads the title below the main title content in the Maps. |
| Legend title | Reads the contents of the legend's title as specified in Maps. |
| Legend item label | Reads the label of a legend item in Maps. |
| Data label | Reads the label specified for the shapes in the Maps layer. |
| Annotation | Reads the content specified in the annotation. |
| Marker template | Reads the content provided in the marker template. |
| Tooltip template | Reads the content provided in the tooltip template. |
| Data label template | Reads the content provided in the data label template. |

## Keyboard navigation

The Maps component supports keyboard navigation to enable users to interact with the map without a mouse. The following table lists the supported key combinations and their corresponding actions.

Interaction Keys |Description
-----|-----
<kbd>Tab</kbd> |Moves to the next focusable element on the map, such as the legend or shape.
<kbd>Shift</kbd> + <kbd>Tab</kbd> |Moves to the previous focusable element on the map, such as the legend or shape.
<kbd> + </kbd> |When zooming is enabled, zoom in operation can be performed.
<kbd> - </kbd> |When zooming is enabled, zoom out operation can be performed.
<kbd>Left arrow</kbd> |When zoomed in, the map can be scrolled to the left.
<kbd>Right arrow</kbd> |When zoomed in, the map can be scrolled to the right.
<kbd>Up arrow</kbd> |When zoomed in, the map can be scrolled upward.
<kbd>Down arrow</kbd> |When zoomed in, the map can be scrolled downward.
<kbd> R </kbd> |When zooming is enabled, reset operation can be performed.
<kbd>Enter</kbd> |The page can be navigated to the next and previous states in legend. Similarly, the selection can be made while navigating over the shape.

## Ensuring accessibility

The Maps component's accessibility levels are ensured using an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Maps component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/maps.html) in a new window to evaluate the accessibility of the Maps component with accessibility tools.

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)
