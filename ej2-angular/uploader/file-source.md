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

The Uploader component allows you to upload files by selecting or dragging files from your file system. It also supports pasting images directly from the clipboard. You can upload any image currently copied in your clipboard.

> When you paste an image, it is saved on the server with the default filename `image.png`. You can rename the file on the server side. Use the `getUniqueID` method to generate a unique filename.
Refer to the following example for implementation details.

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

The Uploader component allows you to upload all files in a directory (and its subdirectories) to the server using the [directoryUpload](https://ej2.syncfusion.com/angular/documentation/api/uploader/#directoryupload) property. When enabled, the Uploader iterates through all files and subdirectories in the selected folder.
This feature allows you to select entire folders instead of individual files.

> Directory upload is supported only in browsers that support HTML5 directory selection. In Microsoft Edge, you can use drag-and-drop to upload directories.
Refer to the following example to implement directory upload functionality.

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

The Uploader component supports drag-and-drop file uploads.
You can drag files from your file system and drop them into the drop area.
By default, the Uploader component itself acts as the drop area.
The drop area is highlighted when you drag files over it.

### Custom drop area

The Uploader component allows you to set an external HTML element as the drop area using the `dropArea` property.
The element can be specified as an HTML element reference or an element ID string.

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

customize the drop area's appearance by overriding the default styles.
Use the **e-upload-drag-hover** CSS class to style the drop area when files are dragged over it.

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
