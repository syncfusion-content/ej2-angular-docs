---
layout: post
title: How to upload files programmatically in Angular Uploader | Syncfusion
description: Trigger file uploads programmatically in the Angular Uploader by calling the upload method on selected files from getFilesData, with or without arguments.
platform: ej2-angular
control: Achieve file upload programmatically 
documentation: ug
domainurl: ##DomainURL##
---

# How to upload files programmatically in Angular Uploader

Upload files programmatically using the [upload](https://ej2.syncfusion.com/angular/documentation/api/uploader/index-default#upload) method. Retrieve the selected files using the public [getFilesData](https://ej2.syncfusion.com/angular/documentation/api/uploader/index-default#getfilesdata) method.

To call these methods, first obtain the Uploader instance using the `@ViewChild` decorator, where the selector must match the template reference variable assigned to the `ejs-uploader` element (for example, `#defaultupload`).

> Programmatic upload is useful when `autoUpload` is set to `false`. In that case, selected files are not uploaded automatically and must be uploaded manually via the `upload` method.

The upload method behaves differently based on its arguments.
* If this method receives a specific file (or array of files) as an argument, only those files start to upload. For example, passing `getFilesData()[0]` uploads the first selected file.
* If called with no argument, all the selected files will start to upload. Passing the full `getFilesData()` array as the argument produces the same result.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/dynamic-upload-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/dynamic-upload-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/dynamic-upload-cs1" %}

> You can also explore the [Angular File Upload](https://www.syncfusion.com/angular-ui-components/angular-file-upload) feature tour page for its groundbreaking features. Explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse and select the files which you want to upload to the server.
