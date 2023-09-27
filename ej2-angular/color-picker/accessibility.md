---
layout: post
title: Accessibility in Angular Color picker component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Color picker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Color picker component

## ARIA attributes

The web accessibility makes web content and web applications more accessible for people with disabilities. It especially helps in dynamic content change and development of advanced user interface controls with AJAX, HTML, JavaScript, and related technologies. It helps to provide information about the widget for assistive technology to the disabled person in screen reader.

ColorPicker provides built-in compliance with the [WAI-ARIA](http://www.w3.org/WAI/PF/aria-practices) specifications. WAI-ARIA supports is achieved through the attributes like `aria-label`and `aria-selected` applied to the color palette tiles.

To know about the accessibility of SplitButton, refer to the SplitButton [`Accessibility`](./../split-button/accessibility#accessibility) section.

| Properties | Functionality |
| ------------ | ----------------------- |
| role | Specified as `gridcell` for the tiles in the color palette. |
| aria-label | Holds the color of the tile. |
| aria-selected | Indicates the current selected state of the tile. |

## Keyboard interaction

To know about the keyboard interaction of SplitButton, refer to the SplitButton [`Keyboard interaction`](./../split-button/accessibility#keyboard-interaction) section.

The following list of keys can be used to interact with the ColorPicker after the popup has opened.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Upper Arrow</kbd>  | Moves the handler/tile up from the current position. |
| <kbd>Down Arrow</kbd>  | Moves the handler/tile down from the current position. |
| <kbd>Left Arrow</kbd>  | Moves the handler/tile left from the current position. |
| <kbd>Right Arrow</kbd>  | Moves the handler/tile right from the current position. |
| <kbd>Enter</kbd>  | Apply the selected color value. |
| <kbd>Tab</kbd>  | To focus the next focusable element in the ColorPicker popup.  |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/getting-started/default-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/colorpicker/getting-started/default-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/getting-started/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/getting-started/default-cs1" %}
