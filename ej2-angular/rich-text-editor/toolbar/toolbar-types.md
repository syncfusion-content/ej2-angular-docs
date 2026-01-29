---
layout: post
title: Toolbar Types in Angular Rich Text Editor component | Syncfusion
description: Learn how to configure Toolbar Types in the Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Toolbar
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar in Angular Rich Text Editor component

The Syncfusion Angular Rich Text Editor provides a powerful toolbar that enables users to format, style, and edit content efficiently. The toolbar includes essential editing tools such as bold, italic, underline, alignment, and lists, along with customization options to suit different use cases.

> To use toolbar feature, configure `ToolbarService` in the provider section.

To get start quickly about customizing the toolbar in Angular Rich Text Editor component, refer to the video below.

{% youtube "https://www.youtube.com/watch?v=zQtXvvPxAJQ" %}

## Toolbar types

The Rich Text Editor allows you to configure different types of toolbar using [type](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#type) field in [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings) property. The types of toolbar are:

1. Expand 
2. MultiRow
3. Scrollable
4. Popup

## Expanding the toolbar

The default mode of the toolbar is `Expand`, configured through [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#type) with `type: 'Expand'`. This mode hides any overflowing toolbar items in the next row, which can viewed by clicking the expand arrow.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/toolbar/expand-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/toolbar/expand-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/toolbar/expand-cs1" %}

## Configuring a multi-row toolbar

Setting the `type` as `MultiRow` in [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#type) will arrange the toolbar items across multiple rows, displaying all configured toolbar items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/toolbar/multirow-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/toolbar/multirow-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/toolbar/multirow-cs3" %}

## Implementing a scrollable toolbar

Setting the `type` to `Scrollable` in [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#type) will display the toolbar items in a single line, enabling horizontal scrolling in the toolbar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/toolbar/scrollable-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/toolbar/scrollable-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/toolbar/scrollable-cs1" %}

## Configuring a popup toolbar

Setting the `type` to `Popup` in [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#type) will display overflowing toolbar items into a popup container, optimizing the toolbar layout for limited space and smaller screens.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/toolbar/popup-toolbar/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/toolbar/popup-toolbar/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/toolbar/popup-toolbar" %}

## Creating a sticky toolbar

By default, the toolbar remains fixed at the top of the Rich Text Editor when scrolling. You can customize the position of this sticky toolbar by setting the [floatingToolbarOffset](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#floatingtoolbaroffset) to adjust its offset from the top of the document.

Additionally, you can enable or disable the floating toolbar using the [enableFloating](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#enablefloating) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/floating-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/floating-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/floating-toolbar-cs1" %}

## See also

* [Customizing Rich Text Editor Toolbar Styles](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/style#customizing-the-rich-text-editors-toolbar)
* [Implementing Inline Editing](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/inline-mode)
* [Customizing Accessibility Shortcut Keys](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/accessibility#keyboard-interaction)