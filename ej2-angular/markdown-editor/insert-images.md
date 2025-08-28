---
layout: post
title: Insert Images in Angular Markdown Editor component | Syncfusion
description: Learn how to insert images in the Syncfusion Angular Markdown Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Image Insertion in Markdown Editor
documentation: ug
domainurl: ##DomainURL##
---

# Insert Images in Angular Markdown Editor Component

The Syncfusion Angular Markdown Editor allows users to insert images using the toolbar. This feature enables embedding images from online sources into the editor content.

## Setup and configuration  

Follow these steps to add an image in the Markdown editor:

## Inserting images

Add the `InsertImage` item to `toolbarSettings.items` to enable the image insertion toolbar button. Clicking it opens a dialog to enter an image URL or upload a file.

### Steps to Insert an Image

1. Click the **Insert Image** icon in the toolbar.
2. Enter the **URL** of the image from an online source.
3. Click the **Insert** button in the image dialog.

The image will be added to the editor content at the cursor position.

The following example demonstrates how to enable image insertion in the Syncfusion Angular Markdown Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/markdown-editor/markdown-image-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/markdown-editor/markdown-image-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/markdown-editor/markdown-image-cs1" %}