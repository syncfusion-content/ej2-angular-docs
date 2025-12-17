---
layout: post
title: Attachments in Angular Chat UI component | Syncfusion
description: Checkout and learn about attachments with Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI 
documentation: ug
domainurl: ##DomainURL##
---

# File Attachments in ##Platform_Name## Chat UI component

The Chat UI component supports message attachments, enabling users to upload and send files (images, documents, and more) alongside messages for richer, more contextual conversations. Enable this functionality using the [enableAttachments](../api/chat-ui/enableAttachments) property and customize the behavior through the [attachmentSettings](../api/chat-ui/attachmentSettings) configuration.

## Enable file attachments

Enable file attachment support by setting the [enableAttachments](../api/chat-ui/enableAttachments) property to `true`. By default, it is `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/file-attachments/enableAttachments/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/file-attachments/enableAttachments/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/file-attachments/enableAttachments" %}

## Configure attachment settings

Use the [attachmentSettings](../api/chat-ui/attachmentSettings) property to customize file attachment behavior, including upload endpoints, file type restrictions, and size limits.

### Setting saveUrl and removeUrl

Set the [saveUrl](../api/chat-ui/attachmentSettings#saveurl) and [removeUrl](../api/chat-ui/attachmentSettings#removeurl) properties to specify server endpoints for handling file uploads and removals. The `saveUrl` processes file uploads, while the `removeUrl` handles file deletion requests.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/file-attachments/save-remove-url/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/file-attachments/save-remove-url/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/file-attachments/save-remove-url" %}

### Setting file type

Use the [allowedFileTypes](../api/chat-ui/attachmentSettings#allowedfiletypes) property to specify which file types users can upload. This property accepts file extensions (e.g., '.pdf', '.docx') or MIME types to control the types of files that can be attached.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/file-attachments/allowedFileTypes/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/file-attachments/allowedFileTypes/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/file-attachments/allowedFileTypes" %}

### Setting file size

Configure the [maxFileSize](../api/chat-ui/attachmentSettings#maxfilesize) property to define the maximum file size allowed for uploads. Specify the size in bytes. The default value is `30000000` bytes (approximately 30 MB). Files exceeding this limit will not be uploaded.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/file-attachments/maxFileSize/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/file-attachments/maxFileSize/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/file-attachments/maxFileSize" %}

### Setting save format

Control the format used to send files to the server using the [saveFormat](../api/chat-ui/attachmentSettings#saveformat) property when path is not set. It does not change how files are uploaded. The default value is `Blob`.

 - `Blob`: Used for fast, memory‑efficient local previews.
 - `Base64`: Reads the file as a Base64 data URL, useful when you need an inline data URL.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/file-attachments/saveFormat/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/file-attachments/saveFormat/src/main.ts %}
{% endhighlight %}

{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/file-attachments/saveFormat" %}

### Setting server path

The [path](../api/chat-ui/attachmentSettings#path) property specifies the public base URL where uploaded files are (or will be) hosted. When this property is set, it takes precedence over the value defined in `saveFormat`. This means that even if saveFormat includes a different location or structure for storing files, the path property will be used it for generating the file URL.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/file-attachments/path/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/file-attachments/path/src/main.ts %}
{% endhighlight %}
{% endtabs %}

### Enabling drag-and-drop

Toggle drag-and-drop support for attachments via [enableDragAndDrop](../api/chat-ui/attachmentSettings#enabledraganddrop) property. The default value is `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/file-attachments/drag-and-drop/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/file-attachments/drag-and-drop/src/main.ts %}
{% endhighlight %}

{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/file-attachments/drag-and-drop" %}

### Setting maximum count

Restrict how many files can be attached at once using [maximumCount](../api/chat-ui/attachmentSettings#maximumcount). The default value is `10`. If users select more than the allowed count, the maximum count reached error will be displayed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/file-attachments/maximumCount/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/file-attachments/maximumCount/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/file-attachments/maximumCount" %}

## Templates

### Customizing the file preview

Provide a custom UI for previewing selected files using [previewTemplate](../api/chat-ui/attachmentSettings#previewtemplate). Use this to render thumbnails, filenames, progress, remove buttons, or any additional metadata prior to sending.

### Customizing the attachments

Control how attachments appear inside message bubbles with [attachmentTemplate](../api/chat-ui/attachmentSettings#attachmenttemplate). Use this to tailor the display of images, documents, or custom file types once the message is posted.