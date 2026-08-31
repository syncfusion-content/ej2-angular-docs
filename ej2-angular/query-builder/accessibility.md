---
layout: post
title: Accessibility in Angular Query Builder UI | Syncfusion
description: Accessibility support in the Syncfusion Angular Query Builder UI, including WCAG 2.2, Section 508, WAI-ARIA roles, keyboard navigation, screen reader support.
control: Accessibility 
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Query Builder UI

The Query Builder component adheres to accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), and [WAI-ARIA](https://www.w3.org/TR/wai-aria/) roles, ensuring an inclusive experience for all users.

The following table outlines the accessibility compliance features of the Query Builder component.

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

WAI-ARIA (Accessibility Initiative – Accessible Rich Internet Applications) provides semantics for describing component roles, states, and functionality. These attributes enhance accessibility for assistive technologies, enabling better support for users with disabilities.

The Query Builder uses the following WAI-ARIA attributes:

| Attributes | Purpose |
| --- | --- |
| `role` | Indicates the query builder component. |
| `aria-label` | Provides an accessible label for the rule, group, and control elements such as fields, operators, values, and buttons. |
| `aria-expanded` | Indicates the expanded or collapsed state of the group. |
| `aria-disabled` | Indicates the disabled state of the controls within the query builder. |

## Keyboard interaction

The Query Builder supports full keyboard navigation, enabling users who rely on assistive technologies or keyboard-only navigation to interact with all features. The following keyboard shortcuts are available:

| Press | To do this |
| --- | --- |
| <kbd>Tab</kbd> | Move focus to the next control within the rule (field, operator, value, connector, or action button). |
| <kbd>Shift + Tab</kbd> | Move focus to the previous control within the rule. |
| <kbd>Enter</kbd> | Open the dropdown for the focused field, operator, or value, or trigger the focused action button (Add condition, Add group, Delete). |
| <kbd>Alt + Down Arrow</kbd> | Open the dropdown list of the focused field, operator, or value editor. |
| <kbd>Alt + Up Arrow</kbd> | Close the open dropdown list. |
| <kbd>Escape</kbd> | Close the open dropdown list and restore the previously selected value. |
| <kbd>Home</kbd> | Move focus to the first control in the focused rule or group. |
| <kbd>End</kbd> | Move focus to the last control in the focused rule or group. |

## Ensuring accessibility

The Query Builder component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

To validate the Query Builder against accessibility standards in your own application:

1. Run the accessibility-checker against any page hosting the Query Builder and review the reported violations against the WCAG 2.2 and Section 508 rule sets.
2. Run axe-core on the rendered Query Builder element and address any reported serious or critical issues.
3. Re-run both tools after any template or style customization, since custom content can introduce new accessibility regressions.

The accessibility compliance of the Query Builder component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/query-builder.html) in a new window to evaluate the accessibility of the Query Builder component with accessibility tools.

The following sample renders the default Query Builder and can be used to run the accessibility validation tools directly against the component:

{% previewsample "page.domainurl/samples/query-builder/default-cs1" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)
