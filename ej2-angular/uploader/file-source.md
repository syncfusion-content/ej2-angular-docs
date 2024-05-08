---
layout: post
title: File source in Angular Uploader component | Syncfusion
description: Learn here all about File source in Syncfusion Angular Uploader component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: File source 
documentation: ug
domainurl: ##DomainURL##
---

# File source in Angular Uploader component

## Paste to upload

The uploader component allows you to upload the files using the select or drop files option from the file explorer.  It also supports pasting to upload the image files. You can upload any currently copied images in the clipboard.

> When you paste the image, it will be saved in the server with the filename as `image.png`. The file name can be renamed in the server end. You can generate a random name for the file name using `getUniqueID` method.
Refer to the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/uploader-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/uploader-cs7" %}

### Save action for paste to upload

```csharp
public void Save() {
    var httpPostedFile = System.Web.HttpContext.Current.Request.Files["UploadFiles"];
    var fileSave = System.Web.HttpContext.Current.Server.MapPath("UploadedFiles");
    var fileSavePath = Path.Combine(fileSave, httpPostedFile.FileName);

    if (!System.IO.File.Exists(fileSavePath)) {
        httpPostedFile.SaveAs(fileSavePath);
        var newName = System.Web.HttpContext.Current.Request.Form["fileName"];
        var filePath = Path.Combine(fileSavePath.Substring(0, fileSavePath.LastIndexOf("//")), newName);
        // Rename the file
        System.IO.File.Move(fileSavePath, newName);
        HttpResponse Response = System.Web.HttpContext.Current.Response;
        Response.Clear();
        Response.ContentType = "application/json; charset=utf-8";
        Response.StatusDescription = fileSavePath;
        Response.End();
        }
    }
```

## Directory upload

The uploader component allows you to upload all files in the folders to server by using the [directoryUpload](https://ej2.syncfusion.com/angular/documentation/api/uploader/#directoryupload) property. When this property is enabled, the uploader component processes the files by iterating through the files and sub-directories in a directory.
It allows you to select only folders instead of files to upload.

> The directory upload is available only in browsers that supports **HTML5 directory**. The uploader will process directory upload by dragging and dropping in the Edge browser.
Refer to the following example to upload files to the server.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/directory-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/directory-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/directory-cs1" %}

### Save action for directory upload

```csharp
public void Save() {
    var httpPostedFile = HttpContext.Current.Request.Files["UploadFiles"];
    var fileSave = HttpContext.Current.Server.MapPath("UploadedFiles");
    // split the folders by using file name
    string[] folders = httpPostedFile.FileName.Split('/');
    string fileSavePath = "";
    if (folders.Length > 1)
    {
        for (var i = 0; i < folders.Length - 1; i++)
        {
            var newFolder = Path.Combine(fileSave, folders[i]);
            // create folder
            Directory.CreateDirectory(newFolder);
            fileSave = newFolder;
        }
        fileSavePath = Path.Combine(fileSave, folders[folders.Length - 1]);
    }
    else
    {
        fileSavePath = Path.Combine(fileSave, httpPostedFile.FileName);
    }
    if (!System.IO.File.Exists(fileSavePath))
    {
        // save file in the corresponding server location
        httpPostedFile.SaveAs(fileSavePath);
        HttpResponse Response = System.Web.HttpContext.Current.Response;
        Response.Clear();
        Response.ContentType = "application/json; charset=utf-8";
        // Sending the file path to client side
        Response.StatusDescription = fileSavePath;
        Response.End();
    }
}
```

## Drag and drop

The uploader component allows you to drag and drop the files to upload.
You can drag the files from file explorer and drop into the drop area.
By default, the Uploader component act as drop area element.
The drop area gets highlighted when you drag the files over drop area.

### Custom drop area

The uploader component allows you to set external target element as drop area using the `dropArea` property.
The element can be represented as HTML element or element’s ID.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/draganddrop-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/draganddrop-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/draganddrop-cs1" %}

### Customize drop area

You can customize the appearance of drop area by overriding the default drop area styles.
The class **e-upload-drag-hover** is available to handle this customization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/cus_draganddrop-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/cus_draganddrop-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/cus_draganddrop-cs1" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.

## See Also

* [Achieve file upload programmatically](./how-to/achieve-file-upload-programmatically)
* [Validate image/* on drop](./how-to/validate-image-on-drop)
