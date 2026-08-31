---
layout: post
title: Localization in Angular Uploader | Syncfusion
description: Localize Angular Uploader labels, status messages, and tooltips by creating a locale object and loading it through the L10n utility for any culture.
platform: ej2-angular
control: Localization 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular Uploader

The Localization library enables you to localize static text content in the Uploader, including action button labels, file status messages, icon titles, tooltips, and drag-area text. To localize the content, create a locale object for your culture and load it using the `L10n.load` method (import `L10n` from `@syncfusion/ej2-base`). Set the Uploader's `locale` property to the culture code you loaded so the component renders the localized strings.

The following table lists the localization keys and their descriptions:

| Key | Default value | Description |
|---|---|---|
| Browse | Browse | Text for the browse button |
| Clear | Clear | Text for the clear button |
| Upload | Upload | Text for the upload button |
| dropFilesHint | Drop files here to upload | Text displayed in the drop area |
| uploadFailedMessage | File failed to upload | Status message when a file fails to upload |
| uploadSuccessMessage | File uploaded successfully | Status message when a file uploads successfully |
| removedSuccessMessage | File removed successfully | Status message when a file is successfully removed from the server |
| removedFailedMessage | File could not be removed | Status message when file removal fails |
| inProgress | Uploading | Status message while upload is in progress |
| readyToUploadMessage | Ready to upload | Status message when a file is selected and ready for upload |
| pauseUpload | Upload paused | Status message when upload is paused (relevant only when chunk upload is enabled) |
| fileUploadCancel | File upload canceled | Status message when upload is canceled (relevant only when chunk upload is enabled) |
| invalidMaxFileSize | File size is too large | Status message when file size exceeds the maximum limit |
| invalidFileType | File type is not allowed | Status message when file type is not allowed |
| invalidMinFileSize | File size is too small | Status message when file size is below the minimum limit |
| remove | Remove | Tooltip text for the remove icon |
| cancel | Cancel | Tooltip text for the cancel icon |
| delete | Delete file | Tooltip text for the delete icon |
| totalFiles | Total files | Tooltip text for total files count |
| size | Size | Tooltip text for file size |

The example below loads French (`fr-CH`) values for several of these keys and sets the Uploader's `locale` to `fr-CH`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/uploader-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/uploader-cs11" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to localize Uploader labels, status messages, and tooltips.
