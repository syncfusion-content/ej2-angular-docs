---
layout: post
title: Accessibility in Angular Linear Gauge component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Linear Gauge component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Linear Gauge component

Linear Gauge has built-in accessibility features like screen reading and WAI-ARIA attributes.

## WAI-ARIA attributes

The Linear Gauge component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) patterns to meet the accessibility. The following ARIA attributes are used in the Linear Gauge component:

| Attributes | Purpose |
| --- | --- |
| `role=region` | It is specified in the pointer where the interactive drag and drop function is supported to update the pointer value. |
| `aria-label` | Provides an accessible name for the axis labels, text pointer and annotation. |

## Screen reading in Linear Gauge

Accessibility in the Linear Gauge component ensures that all users, regardless of ability or disability, can use screen reading. The following Linear Gauge elements will be read aloud using screen reading software, such as Narrator for Windows.

| Elements | Description |
| --- | --- |
| Axis labels | Reads the axis labels of the Linear Gauge.|
| Text pointer | Reads the text content shown as a pointer in Linear Gauge. |
| Annotation | Reads the content specified in the annotation. |

## Ensuring accessibility

The Linear Gauge component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Linear Gauge component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/linear-gauge.html) in a new window to evaluate the accessibility of the Linear Gauge component with accessibility tools.

## See also

* [Accessibility in Syncfusion Angular components](../common/accessibility)
