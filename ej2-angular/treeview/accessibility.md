---
layout: post
title: Accessibility in Angular TreeView component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular TreeView component

The TreeView component follows accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility. The TreeView implements comprehensive accessibility features to support hierarchical data navigation, state management, and interactive operations for users with assistive technologies.

The accessibility compliance for the TreeView component is outlined below.

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

The TreeView component follows the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/) patterns to meet accessibility requirements. The following ARIA attributes are used in the TreeView component to provide comprehensive context about the tree structure, node states, and interactive capabilities:

| Attributes | Purpose |
| --- | --- |
| `role=tree` | All tree nodes are contained within the element. |
| `role=treeitem `| Specifies the role of each tree node in a selectable TreeView and its containment within the tree. |
| `role=group` | Specifies the role of each parent node container. |
| `role=checkbox` | Indicates checkbox control along with treeitem element. |
| `aria-multiselectable` | Indicates whether the TreeView enables multiple selection or not. |
| `aria-expanded` | Indicates whether the parent node has expanded or not. |
| `aria-selected` | Indicates the selected node. |
| `aria-grabbed` | Indicates the selected state on drag-and-drop of node. |
| `aria-level` | Indicates the level of node in TreeView. |
| `aria-checked` | Indicates the current checked state of TreeView checkbox. |
| `aria-label` | Indicates the contextual message for the TreeView checkbox. |
| `aria-activedescendant` | Identifies the currently active element when focusing on the TreeView. |
| `aria-disabled` | Indicates element is perceivable but disabled. |

## Keyboard interaction

The TreeView component follows the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/#keyboardinteraction) guideline, making it accessible for users who rely on assistive technologies and keyboard navigation. The following keyboard shortcuts support comprehensive TreeView operations across navigation, selection, editing, and state management:

### Navigation Keys
| Interaction Keys | Description |
|------|---------|
| <kbd>Arrow Up</kbd> | Moves focus to the previous visible tree node in the hierarchical order. |
| <kbd>Arrow Down</kbd> | Moves focus to the next visible tree node in the hierarchical order. |
| <kbd>Arrow Right</kbd> | Expands the focused parent node to reveal child nodes. |
| <kbd>Arrow Left</kbd> | Collapses the focused parent node to hide child nodes. |
| <kbd>Home</kbd> | Moves focus to the first tree node in the component. |
| <kbd>End</kbd> | Moves focus to the last visible tree node in the component. |

### Selection and Action Keys
| Interaction Keys | Description |
|------|---------|
| <kbd>Enter</kbd> | Selects the focused tree node or confirms editing operations when in edit mode. |
| <kbd>Space</kbd> | Toggles the checkbox state of the focused node when checkbox functionality is enabled. |
| <kbd>Ctrl + A</kbd> | Selects all tree nodes when multi-selection is enabled. |

### Editing Keys
| Interaction Keys | Description |
|------|---------|
| <kbd>F2</kbd> | Initiates inline editing mode for the focused tree node when editing is enabled. |
| <kbd>Esc</kbd> | Cancels the current editing operation and returns focus to the tree node without saving changes. |
## Ensuring accessibility

The TreeView component's accessibility levels are ensured through comprehensive testing using [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the TreeView component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/treeview.html) in a new window to evaluate the accessibility of the TreeView component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/treeview.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)