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

The Localization library allows you to localize static text content of the uploader.
The static text contains default text content of action buttons, file status, clear icon title, tooltips, and text content of drag area. Define the locale object for a culture and assign it to L10n load method.

The following are the list of keys and its values used in the uploader.

| Key | Description |
|------------------------|---------|
| Browse | To customize the browse button text.|
| Clear | To customize the clear button text.|
| Upload | To customize the upload button text. |
| dropFilesHint | To customize the drop area text. |
| uploadFailedMessage | To customize the status text when  the file is failed to upload.|
| uploadSuccessMessage | To customize the status text when  the file is uploaded successfully.|
| removedSuccessMessage | To customize the status text when  the file is removed the successfully from the server.|
| removedFailedMessage | To customize the status text while the file is failed to remove.|
| inProgress | To customize the status text while the upload is in progress.|
| readyToUploadMessage | To customize the status text when the file is selected and ready to upload.|
| pauseUpload | To customize the status text while the uploading is paused.|
| fileUploadCancel | To customize the status text when uploading is cancelled.|
| invalidMaxFileSize | To customize the status text when the file size is greater than the maximum file size.|
| invalidFileType | To customize the status text when the file type is invalid.|
| invalidMinFileSize | To customize the status text when the file size is less than the minimum file size. |
| remove | To customize tooltip text for remove icon. |
| cancel | To customize tooltip text for cancel icon. |
| delete | To customize tooltip text for delete icon. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/uploader-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/uploader/uploader-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/uploader-cs11" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-ui-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
