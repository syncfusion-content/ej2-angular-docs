---
layout: post
title: Accessibility in Angular Timepicker component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Timepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Timepicker component

The web accessibility makes web applications and its content more accessible to people with disabilities without any barriers. Especially it tracks the dynamic value changes and DOM changes.

TimePicker component has covered the [WAI-ARIA](http://www.w3.org/WAI/PF/aria-practices)  specifications with the following list of WAI-ARIA attributes `aria-haspopup`, `aria-selected`, `aria-disabled`, `aria-activedescendant`, `aria-expanded`, `aria-owns`, and `aria-autocomplete`.

Here, the `combobox` as a role for input element and `listbox` as a role for popup element in the TimePicker.

* **Aria-haspopup** : Provides the information about whether this element display a pop-up window or not.

* **Aria-selected** : Indicates the current selected value of the TimePicker component.

* **Aria-disabled** : Indicates disabled state of the TimePicker component.

* **Aria-expanded** : Indicates expanded state of the popup.

* **Aria-autocomplete** : Indicates whether user input completion suggestions are provided or not.

* **Aria-owns** : Attribute that creates a parent/child relationship between two DOM element in the accessibility layer.

* **Aria-activedescendent** : Attribute that helps in managing the current active child of the TimePicker
component.

* **Role** : Attribute that gives assistive technology information for handling each element in a widget.

## Keyboard Interaction

Keyboard accessibility is one of the most important aspects of web accessibility. It will be more useful to all the computer users, as they often allow to interact keyboard more than a mouse.
Among people with disabilities like blind or who have motor disabilities are also can make frequent use of keyboard shortcuts.

The TimePicker component has built-in keyboard accessibility support by following the [WAI-ARIA practices](http://www.w3.org/WAI/PF/aria-practices).

> It supports the following list of shortcut keys to interact the TimePicker control.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Upper Arrow</kbd> | Navigate and select the previous item. |
| <kbd>Down Arrow</kbd> | Navigate and select the next item. |
| <kbd>Left Arrow</kbd> | Move the cursor towards arrow key pressed direction. |
| <kbd>Right Arrow</kbd> | Move the cursor towards arrow key pressed direction. |
| <kbd>Home</kbd> | Navigate and select the first item. |
| <kbd>End</kbd> | Navigate and select the last item. |
| <kbd>Enter</kbd> | Select the currently focused item and close the popup. |
| <kbd>Alt + Upper Arrow</kbd> | Close the popup. |
| <kbd>Alt + Down Arrow</kbd> | Open the popup. |
| <kbd>Esc</kbd> | Close the popup |

The following sample use the `alt+t` keys to focus the TimePicker component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timepicker/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/timepicker/getting-started-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timepicker/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timepicker/getting-started-cs1" %}