---
layout: post
title: Accessibility in Angular Gantt Chart Component | Syncfusion
description: Learn here all about accessibility in Syncfusion Angular Gantt Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Gantt Chart Component

The Angular Gantt Chart component is designed with comprehensive accessibility support, adhering to established guidelines and standards including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria#roles). This ensures the component is usable by individuals with disabilities and meets legal accessibility requirements for enterprise applications.

## Accessibility compliance

The accessibility compliance for the Gantt Chart component provides detailed insight into supported features and current limitations. Understanding these compliance levels helps developers implement appropriate accessibility measures and identify areas requiring additional attention.

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker](https://www.npmjs.com/package/accessibility-checker) Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core](https://www.npmjs.com/package/axe-core) Accessibility Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

### WCAG 2.2 compliance details

The Gantt Chart component achieves **Level AA compliance** for most WCAG 2.2 criteria. The **Intermediate** rating reflects specific limitations including complex data relationships where advanced dependency visualizations may not provide complete programmatic relationships for assistive technologies, dynamic content updates where certain real-time data changes in large datasets may require additional ARIA live region implementation, and custom templates where user-defined templates may require additional accessibility considerations depending on content complexity.


## WAI-ARIA attributes

The Gantt Chart component implements comprehensive [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns) patterns to ensure optimal accessibility. These attributes provide semantic information to assistive technologies and enhance the user experience for individuals with disabilities.

### Core ARIA implementation

| Attributes | Purpose | Implementation Context |
| --- | --- | --- |
| `grid (role)` | Applied to the `e-table` element representing the Grid portion of the Gantt Chart component | Provides semantic structure for the data grid area |
| `gridcell (role)` | Applied to `td` elements within the `e-table`, representing individual work cells in the Gantt grid | Enables cell-by-cell navigation for screen readers |
| `columnheader (role)` | Applied to `th` elements within the `e-table`, representing header cells in the Grid table | Provides column identification and sorting information |
| `separator (role)` | Applied to the `e-split-bar` element, representing the splitter between the Grid table and Chart sections | Indicates resizable boundary between interface sections |
| `dialog (role)` | Applied to the `e-dialog` element, representing modal dialog boxes | Manages focus and provides modal interaction patterns |
| `toolbar (role)` | Applied to the `e-gantt-toolbar` element, representing the component's toolbar | Groups related actions and provides toolbar navigation |

### Dynamic ARIA properties

| Attributes | Purpose | Dynamic Behavior |
| --- | --- | --- |
| `aria-label` | Provides descriptive information for UI elements including timeline cells, taskbars, labels, dependency lines, and event markers | Dynamically updates based on task names, dates, progress, and relationships |
| `aria-selected` | Applied to Gantt chart rows with a default value of **false**. Changes to **true** when users select a grid cell or task | Updates during selection changes to maintain current selection state |
| `aria-expanded` | Applied to parent task rows. Value changes to **true** when expanding and **false** when collapsing parent tasks | Reflects hierarchical task structure state changes |
| `aria-grabbed` | Applied to taskbars during taskbar editing operations to indicate drag state | Activated during drag-and-drop operations for accessibility feedback |
| `aria-describedby` | Links tasks to detailed descriptions, tooltips, or error messages | Dynamically associates contextual information with interactive elements |
| `aria-rowindex` | Applied to grid rows to indicate position within the complete dataset | Updates based on current view and virtualization state |
| `aria-colindex` | Applied to grid cells to indicate column position | Maintains column identification during horizontal scrolling |

## Keyboard navigation

The Gantt Chart component provides comprehensive keyboard navigation support following [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns) guidelines. This ensures full functionality for users relying on assistive technologies or keyboard-only navigation patterns.

| **Press** | **To do this** | **Context** |
| --- | --- | --- |
| <kbd>Alt + J</kbd> | Focus Gantt Chart component | Global application shortcut |
| <kbd>Tab / Shift + Tab</kbd> | Focus the next or previous element | Standard tab navigation |
| <kbd>Home</kbd> | Selects the first row | Grid and chart areas |
| <kbd>End</kbd> | Selects the last row | Grid and chart areas |
| <kbd>DownArrow</kbd> | Moves the row selection downward | Row navigation |
| <kbd>UpArrow</kbd> | Moves the row selection upward | Row navigation |
| <kbd>LeftArrow</kbd> | Moves the cell focus/cell selection left side | Cell navigation |
| <kbd>RightArrow</kbd> | Moves the cell focus/cell selection right side | Cell navigation |
| <kbd>Ctrl + Up Arrow</kbd> | Collapses all tasks | Hierarchy management |
| <kbd>Ctrl + Down Arrow</kbd> | Expands all tasks | Hierarchy management |
| <kbd>Ctrl + Shift + Up Arrow</kbd> | Collapses the selected row | Individual task control |
| <kbd>Ctrl + Shift + Down Arrow</kbd> | Expands the selected row | Individual task control |
| <kbd>Enter</kbd> | Saves request | During edit operations |
| <kbd>Esc</kbd> | Cancels request | During edit operations |
| <kbd>Insert</kbd> | Adds a new row | Quick task creation |
| <kbd>Ctrl + Insert</kbd> | Opens addRowDialog | Detailed task creation |
| <kbd>Ctrl + F2</kbd> | Opens editRowDialog | Task editing |
| <kbd>Delete</kbd> | Deletes the selected row | Task removal |
| <kbd>Shift + F5</kbd> | Focus specific task | Task location |
| <kbd>Ctrl + Shift + F</kbd> | Focus search functionality | Data filtering |
| <kbd>Ctrl + Z</kbd> | Undo the last action | Operation reversal |
| <kbd>Ctrl + Y</kbd> | Redo the last action | Operation restoration |
| <kbd>Shift + DownArrow</kbd> | Extends the cell selection downwards | Multi-cell selection |
| <kbd>Shift + UpArrow</kbd> | Extends the cell selection upwards | Multi-cell selection |
| <kbd>Shift + LeftArrow</kbd> | Extends the cell selection to the left side | Multi-cell selection |
| <kbd>Shift + RightArrow</kbd> | Extends the cell selection to the right side | Multi-cell selection |

## Error handling and validation accessibility

The Gantt Chart component provides accessible error handling and validation feedback patterns for Gantt-specific scenarios including dependency validation, resource conflicts, and date constraint violations.


```typescript
@Component({
  template: `
    <ejs-gantt [dataSource]="data" [editSettings]="editSettings" (actionFailure)="onActionFailure($event)">
    </ejs-gantt>
    <div role="alert" aria-live="assertive" class="sr-only" #errorRegion></div>`
})

export class AccessibleGanttComponent {
  @ViewChild('errorRegion') errorRegion: ElementRef;

  public onActionFailure(args: FailureEventArgs): void {
    const errorMessage = this.formatErrorMessage(args.error);
    this.errorRegion.nativeElement.textContent = errorMessage;
    
    // Focus management for error scenarios.
    this.manageFocusForError(args);
  }

  private formatErrorMessage(error: any): string {
    return `Error: ${error.message}. Please review your input and try again.`;
  }

  private manageFocusForError(args: FailureEventArgs): void {
    // Return focus to the element that caused the error.
    const targetElement = document.querySelector(`[data-task-id="${args.data?.taskId}"]`);
    if (targetElement) {
      (targetElement as HTMLElement).focus();
    }
  }
}
```

## Mobile and touch accessibility

The Gantt Chart component provides comprehensive accessibility support for mobile and touch devices through the [enableAdaptiveUI](https://ej2.syncfusion.com/angular/documentation/api/gantt#enableadaptiveui) property, ensuring individuals with disabilities can effectively interact with the component across all device types.

Touch gesture accessibility includes single tap equivalent to click for task selection and activation, double tap to open task editing dialog or activate focused elements, long press to open context menu with full keyboard navigation support, swipe gestures for horizontal scrolling through timeline with appropriate announcements, and pinch to zoom for timeline scaling with accessibility feedback. These gestures are optimized for assistive touch technologies and provide haptic feedback where supported by the device platform.

## Testing accessibility

The Gantt Chart component's accessibility compliance is validated through automated testing using [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) tools. These tools help ensure the component meets established accessibility standards during development and testing phases, providing comprehensive coverage of WCAG guidelines and Section 508 compliance requirements.

## Voluntary Product Accessibility Template (VPAT)

The Syncfusion Angular Gantt Chart component includes comprehensive VPAT documentation detailing accessibility conformance across international standards. This documentation provides structured information about compliance with Section 508, WCAG 2.2, and EN 301 549 requirements.

For detailed accessibility conformance information, refer to the [Syncfusion VPAT document](https://ej2.syncfusion.com/accessibility/Syncfusion-VPAT2.5.docx) which provides specific compliance details for all Syncfusion components including the Gantt chart.

## Live accessibility sample

The accessibility compliance of the Gantt Chart component is demonstrated in the following comprehensive sample. This sample showcases all accessibility features, keyboard navigation patterns, and assistive technology support.

{% previewsample "https://ej2.syncfusion.com/accessibility/gantt.html" %}

The sample demonstrates complete keyboard navigation functionality, screen reader announcements and ARIA implementation, focus management during complex operations, accessible error handling and validation, mobile and touch accessibility support, and real-time content update accessibility with appropriate ARIA live region announcements for virtualized content and dynamic data changes.

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)
* [Keyboard Navigation in Angular Gantt Chart component](./keyboard-navigation)
* [WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG22/)
* [Section 508 Standards](https://www.section508.gov/)