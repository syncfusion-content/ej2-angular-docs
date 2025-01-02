---
layout: post
title: Accessibility in Angular Dropdown Tree component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Dropdown Tree component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dropdown Tree
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Dropdown Tree component

The Dropdown Tree component follows the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Dropdown Tree component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker](https://www.npmjs.com/package/accessibility-checker) Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
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

The Dropdown Tree component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) patterns to meet the accessibility. The following ARIA attributes are used in the Dropdown Tree component:

| Attributes | Purpose |
| --- | --- |
| `role=listbox` | All list items are contained within the element. |
| `aria-disabled` | Indicates element is perceivable but disabled. |
| `aria-owns` | This attribute contains the ID of the popup list to indicate popup as a child element. |
| `aria-haspopup` | Indicates whether the Dropdown Tree input element has a popup list or not. |
| `aria-expanded` | Indicates the state of the popup list for Dropdown Tree and the parent node's expansion status for TreeView. |
| `aria-activedescendent` | This attribute holds the ID of the active list item to focus its descendant child element. |
| `aria-labelledby` | This attribute points to the element(s) labeling the element it's applied to. |
| `aria-decribedby` | This attribute points to the element(s) describing the one it's set on. |
| `role=tree` | All tree nodes are contained within the element. |
| `role=treeitem`| Specifies the role of each tree node in a selectable TreeView and its containment within the tree. |
| `role=group` | Specifies the role of each parent node container in the TreeView. |
| `role=checkbox` | Indicates checkbox control along with treeitem element. |
| `aria-multiselectable` | Indicates whether the TreeView enables multiple selection or not. |
| `aria-selected` | Indicates the selected node. |
| `aria-level` | Indicates the level of node in TreeView. |
| `aria-checked` | Indicates the current checked state of TreeView checkbox. |
| `aria-label` | Indicates the contextual message for the TreeView checkbox and Dropdown Tree. |
| `aria-activedescendant` | Identifies the currently active element when focusing on the TreeView. |

## Keyboard interaction

The Dropdown Tree component follows the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the Dropdown Tree component.

| Interaction Keys | Description |
|------|---------|
| <kbd>Alt + Down</kbd> | Opens the popup. |
| <kbd>Alt + Up</kbd> | Closes the popup. |
| <kbd>Esc(Escape)</kbd> | Closes the popup when it is in an open state. |
| <kbd>Arrow Up</kbd> | Goes to the previous item in the popup. |
| <kbd>Arrow Down</kbd> | Goes to the next item in the popup. |
| <kbd>Arrow Right</kbd> | Expands the current item in the popup. |
| <kbd>Arrow Left</kbd> | Collapses the current item in the popup. |
| <kbd>Home</kbd> | Goes to the first item in the popup. |
| <kbd>End</kbd> | Goes to the last item in the popup. |
| <kbd>Enter</kbd> | Selects the focused item in the popup. |
| <kbd>Space</kbd> | Checks the current item in the popup. |

## Ensuring accessibility

The accessibility levels of the Dropdown Tree component are verified using [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Dropdown Tree component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/drop-down-tree.html) in a new window to evaluate the accessibility of the Dropdown Tree component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/drop-down-tree.html" %}

## See also

* [Accessibility in Syncfusion Angular components](../common/accessibility)
