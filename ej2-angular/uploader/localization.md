---
layout: post
title: Localization in Angular Uploader component | Syncfusion
description: Learn here all about Localization in Syncfusion Angular Uploader component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Localization 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular Uploader component

The Localization library enables you to localize static text content in the Uploader.
This includes action button labels, file status messages, icon titles, tooltips, and drag-area text. Create a locale object for your culture and assign it using the L10n load method.

The following table lists the localization keys and their descriptions:

| Key | Description |
|---|---|
| Browse | Text for the browse button |
| Clear | Text for the clear button |
| Upload | Text for the upload button |
| dropFilesHint | Text displayed in the drop area |
| uploadFailedMessage | Status message when a file fails to upload |
| uploadSuccessMessage | Status message when a file uploads successfully |
| removedSuccessMessage | Status message when a file is successfully removed from the server |
| removedFailedMessage | Status message when file removal fails |
| inProgress | Status message while upload is in progress |
| readyToUploadMessage | Status message when a file is selected and ready for upload |
| pauseUpload | Status message when upload is paused |
| fileUploadCancel | Status message when upload is canceled |
| invalidMaxFileSize | Status message when file size exceeds the maximum limit |
| invalidFileType | Status message when file type is not allowed |
| invalidMinFileSize | Status message when file size is below the minimum limit |
| remove | Tooltip text for the remove icon |
| cancel | Tooltip text for the cancel icon |
| delete | Tooltip text for the delete icon |
| totalFiles | Tooltip text for total files count |
| size | Tooltip text for file size |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/uploader-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/uploader-cs11" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-ui-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
