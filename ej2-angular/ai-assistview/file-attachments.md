---
layout: post
title: Attachments in ##Platform_Name## AI AssistView control | Syncfusion
description: Checkout and learn about attachments with ##Platform_Name## AI AssistView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: AI AssistView 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Attachments in ##Platform_Name## AI AssistView control

The `Attachment` support in AI AssistView specifies user to include file attachments along with their prompts in the AI AssistView. This enhances the interaction by allowing users to provide additional context through files. You can enable this feature using the `enableAttachments` property, and customize its behavior using the `attachmentSettings` configuration.

## Enable attachment

You can enable the attachment by using the `enableAttachments` property. By default, the value is `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/file-attachments/enable-attachment/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/file-attachments/enable-attachment/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/file-attachments/enable-attachment" %}

## Configuring attachments

You can use the `attachmentSettings` property to configure the attachments in the AI AssistView.

### Setting saveUrl and removeUrl

You can use the `saveUrl` and `removeUrl` property to add the save and remove the URL for the file uploaded in the AI AssistView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/file-attachments/save-remove-url/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/file-attachments/save-remove-url/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/file-attachments/save-remove-url" %}

### Setting file type

You can use the `allowedFileType` property to upload the specific file types in the attachment.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/file-attachments/file-type/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/file-attachments/file-type/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/file-attachments/file-type" %}

### Setting file size

You can use the `maxFileSize` property to allow the maximum file size of the upload file in the AI AssistView. By default, the value is `2000000` bytes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/file-attachments/file-size/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/file-attachments/file-size/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/file-attachments/file-size" %}