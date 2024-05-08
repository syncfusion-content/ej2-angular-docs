---
layout: post
title: Miscellaneous in Angular Rich text editor component | Syncfusion
description: Learn here all about Miscellaneous in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Miscellaneous 
documentation: ug
domainurl: ##DomainURL##
---

# Miscellaneous in Angular Rich text editor component

## Placeholder

Specifies the placeholder for the Rich Text Editor’s content used when the Rich Text Editor body is empty through the [`placeholder`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#placeholder) property.

Through the `e-rte-placeholder` class to define our custom font family, font color, and styles to the placeholder text.

```typescript

.e-richtexteditor .e-rte-placeholder {
    font-family: monospace;
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs18/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs18" %}

## Character count

The Rich Text Editor automatically counts the number of characters in the content are while typing using the [`showCharCount`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#showcharcount) property. The characters count displayed at the bottom of the editor. You can limit the number of characters in your content using the [`maxLength`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#maxlength) property. By default, the editor sets the characters limit value is infinity.

The character count color will be modified based on the characters in the RichTextEditor.

| Status | Description |
|----------------|---------|
| normal | Till 70% of given maxLength count reach, character count color is black.|
| warning | Once the number of character count in the Rich Text Editor reached 70% of given maxLength count, the character count color will be orange, indicating that, the Rich Text Editor value going to reach the maximum count.|
| error | Once the number of character count in the Rich Text Editor reached 90% of given maxLength count, the character count color will be red, indicating that, the Rich Text Editor value reached the maximum count.|

To use quick `Character Count` feature, inject `CountService` in the provider section of `AppModule`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs19/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs19" %}

## Code view

RichTextEditor includes the ability for users to directly edit HTML code via `Source View` in the text area. If you made any modification in Source view directly, the changes will be reflected in the Rich Text Editor's content. So, the users will have more flexibility over the content they have created.

This sample used [`Code mirror`](https://codemirror.net/) plugin helps to highlight the HTML content and when changes happens in code view, the same has been reflected in preview mode.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs20/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## Undo/redo manager

Undo and redo tools allow you to edit the text by disregard/cancel the recently made changes and restore it to previous state. It is a useful tool to restore the performed action which got changed by mistake. By default, upto 30 actions can be undo/redo in the editor.

To undo and redo operations, do one of the following:

* Press the undo/redo button on the toolbar.
* Press the `Ctrl + Z/Ctrl + Y` combination on the keyboard.

Customize the undo/redo step count using the [`undoRedoSteps`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#undoredosteps) property. By default, undo/redo actions take 300ms time interval for store the action to the undoRedoManager. The time interval can be customized by using the [`undoRedoTimer`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#undoredotimer).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs21/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs21/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs21" %}

## Prevention of cross-site scripting (XSS)

The Rich Text Editor allow the users to edit the content with security by preventing cross-site scripting (XSS). By default, provided built-in support to remove the elements from editor content which cause XSS attack. The editor removes the elements based on the attributes if there is possible to execute script.

In the following sample, removed `script` tag and `onmouseover` attribute from content of the Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs22/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs22/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs22" %}

> It's only applicable to editorMode as HTML.

### Custom cross-site scripting

You can also filter the elements and attributes additionally which cause the XSS attack through [`beforeSanitizeHtml`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#beforesanitizehtml) event. Return the value from the event argument `helper` function to apply in the editor. If you want to prevent the built-in support and make own cross-site scripting rules, set `cancel` argument as true.

The following sample demonstrate how to filter `script` tag from value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs23/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs23/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs23" %}

## Resizable support

This feature allows the editor to be resized dynamically. The users can enable or disable this feature using the `enableResize` property in the Rich Text Editor. If `enableResize` is set to true, the Rich Text Editor component creates grip at the bottom right corner, which allows resizing the component in the diagonal direction. The following sample demonstrates the resizable feature.

### Enabling the resizable support

To render the Rich Text Editor in the resizable mode, set the `enableResize` property to true. The above feature is segregated into individual feature-wise module. To use Resizable feature, inject `ResizeService` in the provider section of `AppModule`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/toolbar/multirow-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/toolbar/multirow-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/toolbar/multirow-cs1" %}

### Specifying the Minimum and Maximum width and height for Resize

To have a restricted resizable area for the Rich Text Editor, you need to specify the min-width, max-width, min-height, and max-height CSS properties for the control's wrapper element. By default, the control is capable of resizing upto the current viewport. The `e-richtexteditor` CSS class will be available in the component's wrapper and can be used for applying the above mentioned styles.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/how-to/rename-image-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/how-to/rename-image-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/how-to/rename-image-cs1" %}

## Number and Bullet Format Lists

This feature allows the user to change the appearance of the Numbered and Bulleted lists. Users can also apply different numbering or bullet formats lists such as lowercase greek, upper Alpha, square and circles. You can also customize the style type of the lists to be populated in the dropdown from the toolbar by using the `numberFormatList` and `bulletFormatList` properties in the Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/format-lists-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/format-lists-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/format-lists-cs1" %}