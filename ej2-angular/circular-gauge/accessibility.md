---
layout: post
title: Accessibility in Angular Circular gauge component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Circular gauge component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---


# Accessibility in Angular Circular gauge component

Circular Gauge has built-in accessibility features like screen reading and WAI-ARIA attributes.

## WAI-ARIA attributes

The Circular Gauge component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) patterns to meet the accessibility. The following ARIA attributes are used in the Circular Gauge component:

| Attributes | Purpose |
| --- | --- |
| `role=region` | It is specified in the pointer where the interactive drag and drop function is supported to update the pointer value. |
| `aria-label` | Provides an accessible name for the axis labels, legend title, legend item label, text pointer and annotation. |

## Screen reading in Circular Gauge

Accessibility in the Circular Gauge component ensures that all users, regardless of ability or disability, can use screen reading. The following Circular Gauge elements will be read aloud using screen reading software, such as Narrator for Windows.

| Elements | Description |
| --- | --- |
| Axis labels | Reads the axis labels of the Circular Gauge. |
| Legend title | Reads the title of the legend in the Circular Gauge. |
| Legend item label | Reads the label of the legend item in the Circular Gauge. |
| Text pointer | Reads the text content shown as a pointer in Circular Gauge. |
| Annotation | Reads the content specified in the annotation. |

## Ensuring accessibility

The Circular Gauge component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Circular Gauge component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/circular-gauge.html) in a new window to evaluate the accessibility of the Circular Gauge component with accessibility tools.

## See also

* [Accessibility in Syncfusion Angular components](../common/accessibility)
