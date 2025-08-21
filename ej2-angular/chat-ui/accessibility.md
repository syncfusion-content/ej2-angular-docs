---
layout: post
title: Accessibility in Angular Chat UI component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Chat UI component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Chat UI Component

The Chat UI component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Chat UI component is outlined below.

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

## WAI-ARIA Attributes

The following ARIA attributes are used in the Chat UI component to provide semantic meaning and improve accessibility for screen reader users.

| Attribute | Purpose |
| ------------ | ----------------------- |
| `role=button` | Indicates that an element, such as a toolbar icon, is clickable and triggers an action. |
| `role=toolbar` | Specifies that a container element holds a set of interactive controls, defining it as a toolbar. |
| `aria-label` | Provides an accessible name for interactive elements, such as toolbar buttons, when a visible label is not present. |
| `aria-orientation` | Specifies the orientation of the toolbar (horizontal or vertical) to assistive technologies. |
| `aria-disabled` | Indicates that a toolbar or element is currently non-interactive, preventing user interaction. |
| `aria-multiline` | Communicates to assistive technologies whether the chat input textbox accepts single or multiple lines of text. |

## Keyboard Interaction

The following keyboard shortcuts are supported by the Chat UI component for efficient navigation and interaction.

| Press | To do this |
| --- | --- |
| <kbd>Enter</kbd> | Selects the focused item or sends a message when the input is focused. |
| <kbd>Tab</kbd> | Moves focus forward through the interactive elements. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves focus backward through the interactive elements. |
| <kbd>Page Up</kbd> | Scrolls up through the chat history. |
| <kbd>Page Down</kbd> | Scrolls down through the chat history. |
| <kbd>Ctrl</kbd> + <kbd>Home</kbd> | Scrolls to the first message in the chat view. |
| <kbd>Ctrl</kbd> + <kbd>End</kbd> | Scrolls to the most recent message in the chat view. |

**Chat UI Toolbars**

| Press | To do this |
| --- | --- |
| <kbd>Left Arrow</kbd> | Focuses the previous toolbar element. |
| <kbd>Right Arrow</kbd> | Focuses the next toolbar element. |
| <kbd>Enter</kbd> or <kbd>Space</kbd> | Activates the focused toolbar button. |
| <kbd>Home</kbd> | Moves focus to the first element in the toolbar. |
| <kbd>End</kbd> | Moves focus to the last element in the toolbar. |

## Ensuring Accessibility

The Chat UI component's accessibility levels are ensured by running it through automated testing using the [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools. This process helps us identify and address potential accessibility issues, ensuring that the component provides an inclusive experience for all users.

## See Also

*   [Accessibility in Syncfusion Components](../common/accessibility)
