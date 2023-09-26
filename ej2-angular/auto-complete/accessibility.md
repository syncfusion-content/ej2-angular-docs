---
layout: post
title: Accessibility in Angular Auto complete component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Auto complete component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Auto complete component

The AutoComplete component has been designed, keeping in mind the `WAI-ARIA` specifications, and applies the `WAI-ARIA` roles, states, and properties along with `keyboard support`. This component is characterized by complete keyboard interaction support and ARIA accessibility support that makes it easy for people who
use assistive technologies (AT) or those who completely rely on keyboard navigation.

## ARIA attributes

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
| <kbd>Arrow Down</kbd> | In popup hidden state, opens the suggestion list. In popup open state, selects the first item when no item selected else selects the item next to the currently selected item. |
| <kbd>Arrow Up</kbd> | In popup hidden state, opens the suggestion list. In popup open state, selects the last item when no item selected else selects the item previous to the currently selected one. |
| <kbd>Page Down</kbd> | Scrolls down to the next page and selects the first item when popup list opens. |
| <kbd>Page Up</kbd> | Scrolls up to previous page and select the first item when popup list open. |
| <kbd>Enter</kbd> | Selects the focused item and set to AutoComplete component. |
| <kbd>Tab</kbd> | Focuses on the next tab indexed element when the popup is closed. Otherwise, closes the popup list and remains the focus in component suppose if it is in an open state. |
| <kbd>Shift + tab </kbd> | Focuses the previous tab indexed element when the popup is closed.  Otherwise,closes the popup list and remains the focus in component suppose if it is in an open state. |
| <kbd>Alt + Down</kbd> | Opens the popup list. |
| <kbd>Alt + Up</kbd> | In popup hidden state, opens the popup list. In popup open state, closes the popup list. |
| <kbd>Esc(Escape)</kbd> | Closes the popup list when it is in an open state then remove the selection. |
| <kbd>Home</kbd> | Cursor moves to before of first character in input. |
| <kbd>End</kbd> | Cursor moves to next of last character in input. |

> In the below sample, focus the AutoComplete component using <kbd>alt+t</kbd> keys.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/autocomplete/getting-started-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs1" %}