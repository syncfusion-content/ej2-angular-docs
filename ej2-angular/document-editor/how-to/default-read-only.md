---
layout: post
title: Default read only in Angular Document editor component | Syncfusion
description: Learn here all about Default read only in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Default read only 
documentation: ug
domainurl: ##DomainURL##
---

# Default read only in Angular Document editor component

In this article, we are going to see how to open a document in read only mode by default in Document Editor & Document Editor Container.

## Opening a document in read only mode by default in DocumentEditor

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/document-editor/getting-started-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/getting-started-cs2" %}

## Opening a document in ready only mode by default in DocumentEditorContainer

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/document-editor-container-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/document-editor/document-editor-container-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/document-editor-container-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/document-editor-container-cs3" %}

Note: You can use the `restrictEditing` in `DocumentEditorContainer` and `isReadOnly` in `DocumentEditor` based on your requirement to change component to read only mode.