---
layout: post
title: Override the keyboard shortcuts in Angular Document editor component | Syncfusion
description: Learn here all about Override the keyboard shortcuts in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Override the keyboard shortcuts 
documentation: ug
domainurl: ##DomainURL##
---

# Override the keyboard shortcuts in Angular Document editor component

Document Editor triggers the [`keyDown`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/#keydown) event every time when any key is entered and provides an instance of [`DocumentEditorKeyDownEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/documentEditorKeyDownEventArgs). You can use the [`isHandled`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/documentEditorKeyDownEventArgs/#ishandled) property to override the keyboard shortcut behavior.

## Preventing default keyboard shortcut

The following code shows how to prevent the `CTRL + C` keyboard shortcut for copying selected content in document editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/prevent-keyboard-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/document-editor/prevent-keyboard-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/prevent-keyboard-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/prevent-keyboard-cs2" %}

## Override or define the keyboard shortcut

Override or define a new keyboard shortcut behavior instead of preventing the keyboard shortcut.

For example, `Ctrl + S` keyboard shortcut saves the document in SFDT format by default, and there is no behavior for `Ctrl + Alt + S`. The following code demonstrates how to override the `Ctrl + S` shortcut to save a document in DOCX format and define `Ctrl + Alt + S` to save the document in SFDT format.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/override-keyboard-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/document-editor/override-keyboard-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/override-keyboard-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/override-keyboard-cs2" %}