---
layout: post
title: Accessibility in Angular AutoComplete | Syncfusion®
description: Make Angular AutoComplete accessible with WAI-ARIA roles, full keyboard navigation, and WCAG 2.2, ADA, and Section 508 compliance out of the box.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular AutoComplete

The AutoComplete component follows the `WAI-ARIA` specifications and applies the `WAI-ARIA` roles, states, and properties along with comprehensive keyboard support. It provides complete keyboard interaction and ARIA accessibility features that ensure usability for people who use assistive technologies (AT) or rely entirely on keyboard navigation.

The AutoComplete component adheres to accessibility guidelines and standards, including [ADA](https://www.ada.gov), [Section 508](https://www.section508.gov), [WCAG 2.2](https://www.w3.org/TR/WCAG22) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the AutoComplete component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
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

The AutoComplete component uses the `combobox` role and each list item has an `option` role. The following `ARIA Attributes` denote the AutoComplete state.

| **Property** | **Functionalities** |
| --- | --- |
| aria-haspopup | Indicates whether the AutoComplete input element has a suggestion list or not. |
| aria-expanded | Indicates whether the suggestion list has expanded or not. |
| aria-selected | Indicates the selected option from the list. |
| aria-readonly | Indicates the readonly state of the AutoComplete element. |
| aria-disabled | Indicates whether the AutoComplete component is in a disabled state or not.|
| aria-activedescendent | This attribute holds the ID of the active list item to focus its descendant child element. |
| aria-owns | This attribute contains the ID of the suggestion list to indicate popup as a child element. |
| aria-autocomplete | This attribute contains the ‘both’ to a list of options shows and the currently selected suggestion also shows inline. |

## Keyboard interaction

You can use the following key shortcuts to access the AutoComplete without interruptions.

| **Keyboard shortcuts** | **Actions** |
| --- | --- |
| <kbd>Arrow Down</kbd> | In popup-hidden state, opens the suggestion list. In popup-open state, focuses the first item when no item is selected; otherwise, focuses the item next to the currently selected item. |
| <kbd>Arrow Up</kbd> | In popup-hidden state, opens the suggestion list. In popup-open state, focuses the last item when no item is selected; otherwise, focuses the item previous to the currently selected one. |
| <kbd>Page Down</kbd> | Scrolls down to the next page and focuses the first item when the popup list opens. |
| <kbd>Page Up</kbd> | Scrolls up to the previous page and focuses the first item when the popup list is open. |
| <kbd>Enter</kbd> | Selects the focused item and sets it in the AutoComplete component. |
| <kbd>Tab</kbd> | Focuses on the next tab-indexed element when the popup is closed. Otherwise, closes the popup list and keeps focus on the component if it is in an open state. |
| <kbd>Shift + Tab</kbd> | Focuses the previous tab-indexed element when the popup is closed. Otherwise, closes the popup list and keeps focus on the component if it is in an open state. |
| <kbd>Alt + Down</kbd> | Opens the popup list. |
| <kbd>Alt + Up</kbd> | In popup-hidden state, opens the popup list. In popup-open state, closes the popup list. |
| <kbd>Esc</kbd> | Closes the popup list when it is in an open state, then removes the selection. |
| <kbd>Home</kbd> | Moves the cursor to the beginning of the input. |
| <kbd>End</kbd> | Moves the cursor to the end of the input. |

> In the sample below, focus the AutoComplete component using <kbd>Alt + T</kbd> keys.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs1" %}

## Ensuring accessibility

The AutoComplete component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the AutoComplete component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/auto-complete.html) in a new window to evaluate the accessibility of the AutoComplete component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/auto-complete.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)