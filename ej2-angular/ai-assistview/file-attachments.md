---
layout: post
title: Attachments in ##Platform_Name## AI AssistView control | Syncfusion
description: Checkout and learn about attachments with ##Platform_Name## AI AssistView component of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: AI AssistView 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# File Attachments in ##Platform_Name## AI AssistView component

The AI AssistView component supports file attachments, allowing users to include files along with their prompts to provide additional context and enhance interactions. Users can upload documents, images, and other file types to supplement their queries. Enable this functionality using the `enableAttachments` property and customize the behavior through the `attachmentSettings` configuration.

## Enable file attachments

Enable file attachment support by setting the `enableAttachments` property to `true`. By default, it is disabled.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/file-attachments/enable-attachment/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/file-attachments/enable-attachment/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/ai-assistview/file-attachments/enable-attachment" %}

## Configure attachment settings

Use the [attachmentSettings](../api/ai-assistview/attachmentSettings/) property to customize file attachment behavior, including upload endpoints, file type restrictions, and size limits.

### Setting saveUrl and removeUrl

Set the [saveUrl](../api/ai-assistview/attachmentSettings/#saveurl) and [removeUrl](../api/ai-assistview/attachmentSettings/#removeurl) properties to specify server endpoints for handling file uploads and removals. The `saveUrl` processes file uploads, while the `removeUrl` handles file deletion requests.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/file-attachments/save-remove-url/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/file-attachments/save-remove-url/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/ai-assistview/file-attachments/save-remove-url" %}

### Setting file type

Use the [allowedFileType](../api/ai-assistview/attachmentSettings/#allowedfiletypes) property to specify which file types users can upload. This property accepts file extensions (e.g., '.pdf', '.docx') or MIME types to control the types of files that can be attached.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/file-attachments/file-type/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/file-attachments/file-type/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/ai-assistview/file-attachments/file-type" %}

### Setting file size

Configure the [maxFileSize](../api/ai-assistview/attachmentSettings/#maxfilesize) property to define the maximum file size allowed for uploads. Specify the size in bytes. The default value is `2000000` bytes (2 MB). Files exceeding this limit will not be uploaded.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/file-attachments/file-size/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/file-attachments/file-size/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/ai-assistview/file-attachments/file-size" %}