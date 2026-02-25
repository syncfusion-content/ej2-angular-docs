---
layout: post
title: Accessibility in Angular Dialog component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Dialog component

The Dialog component follows accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) used to evaluate accessibility.

The accessibility compliance for the Dialog component is outlined below.

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

## WAI-ARIA attributes

The Dialog is characterized by complete ARIA accessibility support, enabling screen readers and other assistive technology devices to access the component. This component is designed based on the guidelines documented in [WAI-ARIA Accessibility Practices](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal).

The Dialog component uses the `Dialog` role and the following ARIA properties on its elements based on their state.

| **Property** | **Functionalities** |
| --- | --- |
| aria-describedby | Indicates that the dialog content description is conveyed to the user through assistive technologies. |
| aria-labelledby | Identifies the dialog title to assistive technologies. |
| aria-modal | Set to `true` for modal dialogs and `false` for non-modal dialogs. |
| aria-grabbed | Set to `true` when the dialog is being dragged and `false` when dragging stops. |

## Keyboard interaction

The Dialog component's keyboard interaction is designed based on [WAI-ARIA Practices](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal) for dialogs.
Users can interact with the Dialog using the following shortcut keys.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Keyboard shortcuts</b></td><td>
<b>Actions</b></td></tr>
<tr>
<td>
<kbd>Esc</kbd></td><td>
Closes the Dialog. This functionality can be controlled by using
[closeOnEscape](https://ej2.syncfusion.com/angular/documentation/api/dialog/#closeonescape) </td></tr>
<tr>
<td>
<kbd>Enter</kbd></td><td>
When a dialog button or any input field (except text area) has focus, pressing Enter triggers the click event on the primary button. Enter does not work when the dialog content contains a text area with initial focus.</td></tr>
<tr>
<td>
<kbd>Ctrl + Enter</kbd></td><td>
When the dialog content contains a text area with focus, press Ctrl + Enter to trigger the click event on the primary button.</td></tr>
<tr>
<td>
<kbd>Tab</kbd></td><td>
Focus will be changed within the Dialog elements</td></tr>
<tr>
<td>
<kbd>Shift + Tab</kbd></td><td>
Moves focus to the previous focusable element within the dialog. When the first focusable element has focus, pressing Shift + Tab moves focus to the last focusable element.</td></tr>
</table>

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/keyboard-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/keyboard-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/keyboard-cs1" %}

## See Also

* [Show dialog with full-screen](./how-to/show-dialog-with-full-screen)

## Ensuring accessibility

The Dialog component's accessibility is validated using [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) tools during automated testing.

The following sample demonstrates the accessibility compliance of the Dialog component. Open the [sample](https://ej2.syncfusion.com/accessibility/dialog.html) in a new window to evaluate the Dialog component's accessibility with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/dialog.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)