---
layout: post
title: Configuration in Angular Inplace editor component | Syncfusion
description: Learn here all about Configuration in Syncfusion Angular Inplace editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Configuration 
documentation: ug
domainurl: ##DomainURL##
---

# Configuration in Angular Inplace editor component

## Rendering modes

This section explains the supported rendering modes of the **In-place Editor**. Possible Rendering modes are as follows.

    * Popup
    * Inline

> By default, `Popup` mode will be rendered, when opening an editor.

* For `Popup` mode, editable container displays as like tooltip or popover above the element.

* For `Inline` mode, editable container displays as instead of the element. To render `Inline` mode while opening the editor, specify `mode` as `Inline`.

In the following sample, the **In-place Editor** renders with `Inline` mode. You can dynamically switch into another mode by changing the drop-down item value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/in-place-editor/modes-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/in-place-editor/modes-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/in-place-editor/modes-cs1" %}

### Pop-up customization

**In-place Editor** popup mode can be customized by using the [title](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/popupSettings/#title) and [model](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/popupSettings/#model) properties in [popupSettings](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/popupSettings/) API.

Popup mode rendered by using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Tooltip component, so you can use tooltip properties and events to customize the behavior of popup via the [model](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/popupSettings/#model) property of [popupSettings](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/popupSettings/) API.

> For more details, refer the tooltip documentation [section](../tooltip/).

In the following sample, popup [title](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/popupSettings/#title) and [position](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#position) customized using the [popupSettings](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/popupSettings/) property. All possible tooltip position data configured in the drop-down, if we change drop down item, selected value bound to [model](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/popupSettings/#model) property and applied it to [Tooltip](../tooltip/) component. `Tooltip` has following position options.

* TopLeft
* TopCenter
* TopRight
* BottomLeft
* BottomCenter
* BottomRight
* LeftTop
* LeftCenter
* LeftBottom
* RightTop
* RightCenter
* RightBottom

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/in-place-editor/popup-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/in-place-editor/popup-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/in-place-editor/popup-cs1" %}

## Event actions for editing

The event action of the editor that enable in the edit mode based on the [editableOn](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/#editableon) property, by default `Click` is assigned, the following options are also supported.

* **[Click](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/editableType/)**:  The editor will be opened as single click actions.
* **[DblClick](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/editableType/)**: The editor will be opened as double-click actions and it is not applicable for edit icon.
* **[EditIconClick](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/editableType/)**: Disables the editing of event action of input and allows user to edit only through edit icon.

> **In-place Editor** get focus by pressing the `tab` key from previous focusable DOM element and then by pressing `enter` key, the editor will be opened.

In the following sample, when switching drop-down item, the selected value assigned to the `editableOn` property. If you changed to `DblClick`, the editor will open when making a double click on the input.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/in-place-editor/editable-on-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/in-place-editor/editable-on-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/in-place-editor/editable-on-cs1" %}

## Action on focus out

Action to be performed when the user clicks outside the container, that means focusing out of editable content and it can be handled by the [actionOnBlur](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/#actiononblur) property, by default `Submit` assigned. It also has the following options.

* **[Cancel](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/actionBlur/)**: Cancels the editing and resets the old content.
* **[Submit](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/actionBlur/)**: Submits the edited content to the server.
* **[Ignore](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor/actionBlur/)**: No action is performed with this type and allows to edit multiple editors.

In the following sample, when switching drop-down item, the selected value assigned to the `actionOnBlur` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/in-place-editor/action-on-blur-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/in-place-editor/action-on-blur-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/in-place-editor/action-on-blur-cs1" %}

## Display modes

By default, **In-place Editor** input element highlighted with a dotted underline. To remove dotted underline from input element, add `data-underline="false"` attribute at **In-place Editor** root element.

The following sample, denotes intractable and normal display modes with different samples.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/in-place-editor/under-line-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/in-place-editor/under-line-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/in-place-editor/under-line-cs1" %}

## See Also

* [Types of rendering the editor](./how-to/disable-edit-mode/)
* [Animate the editor during popup mode](./how-to/custom-animation/)