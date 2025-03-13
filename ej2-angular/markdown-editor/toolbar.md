---
layout: post
title: Toolbar Configuration in Angular Markdown editor component | Syncfusion
description: Learn here all about Toolbar Configuration in Syncfusion Angular Markdown editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Toolbar Configuration
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar configuration in Markdown Editor Component

## Default toolbar items

By default, the Angular Markdown Editor displays the following toolbar items:

> `Bold` , `Italic` , `|` , `Formats` , `Blockquote`, `OrderedList` , `UnorderedList` , `|` , `CreateLink` , `Image` , `|` , `SourceCode` , `Undo` , `Redo`

These default items cover essential text editing features, such as text formatting, lists, and linking.

## Type of toolbar 

The Syncfusion Markdown Editor allows you to configure different type of toolbars using the [type](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#type) field in the [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/) property.

The available toolbar types are:

1. Expand
2. MultiRow
3. Scrollable

### Expanding the Toolbar

The default toolbar mode is `Expand`, which is configured using [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#type) with type: `Expand`.

In this mode, any overflowing toolbar items are hidden in the next row. Users can reveal them by clicking the expand arrow.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/markdown-editor/expand-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/markdown-editor/expand-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/markdown-editor/expand-cs1" %}

### Configuring a Multi-row Toolbar

By setting type: `MultiRow` in [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings), the toolbar items are arranged across multiple rows. This ensures that all configured toolbar items are always visible.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/markdown-editor/multirow-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/markdown-editor/multirow-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/markdown-editor/multirow-cs1" %}

### Implementing a Scrollable Toolbar

Use `type: 'Scrollable'` in [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#type) to create a single-line toolbar with horizontal scrolling capability for overflow items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/markdown-editor/scrollable-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/markdown-editor/scrollable-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/markdown-editor/scrollable-cs1" %}

### Creating a Sticky Toolbar

By default, the toolbar remains fixed at the top of the Markdown editor when scrolling.

You can customize its position by setting [floatingToolbarOffset](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#floatingtoolbaroffset) to adjust the offset from the top of the document.

Additionally, you can enable or disable the floating toolbar using the [enableFloating](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#enablefloating) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/markdown-editor/floating-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/markdown-editor/floating-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/markdown-editor/floating-toolbar-cs1" %}

## Custom Toolbar Items

The Markdown Editor allows you to add custom commands to the toolbar using the [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#toolbarSettings) property. These custom commands can be displayed as plain text, icons, or HTML templates. You can define their order and grouping, ensuring a structured and intuitive toolbar layout. Additionally, actions can be bound to these commands by retrieving their instances and handling events accordingly.

In this example, a custom toolbar item (Ω) is added to insert special characters into the editor. When users click the Ω button, a list of special characters appears, allowing them to select and insert a character into the content. This feature enhances the Markdown Editor by providing quick access to special symbols without manually entering character codes.

The following code snippet demonstrates how to configure a custom toolbar item with a tooltip. The item is added to the [items](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#items) field of the `toolbarSettings` property, ensuring seamless integration within the toolbar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/markdown-editor/custom-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/markdown-editor/custom-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/markdown-editor/custom-toolbar-cs1" %}