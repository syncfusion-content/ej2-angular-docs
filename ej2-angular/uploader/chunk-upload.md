---
layout: post
title: Chunk upload in Angular Uploader component | Syncfusion
description: Learn here all about Chunk upload in Syncfusion Angular Uploader component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Chunk upload 
documentation: ug
domainurl: ##DomainURL##
---

# Chunk upload in Angular Uploader component

The Uploader sends the large file split into small chunks and transmits to the server using AJAX. You can also pause, resume, and retry the failed chunk file.

> * The chunk upload works in asynchronous upload only.
* This feature is available from the Essential Studio Vol 2, 2018 release.

To enable the chunk upload, set the size to [chunkSize](https://ej2.syncfusion.com/angular/documentation/api/uploader/asyncSettingsModel/#chunksize) option of the upload and it receives the value in `bytes`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/chunk-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/chunk-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/chunk-cs1" %}

The chunk upload functionality separates the selected files into blobs of the data or chunks. These chunks are transmitted to the server using an AJAX request.
The chunks are sent in **sequential** order, and the next chunk can be sent to the server according to the [success](https://ej2.syncfusion.com/angular/documentation/api/uploader/#chunksuccess) of the previous chunk. If any one of the chunk failed, then the remaining chunk cannot be sent to the server.
The [chunkSuccess](https://ej2.syncfusion.com/angular/documentation/api/uploader/#chunksuccess) or [chunkFailure](https://ej2.syncfusion.com/angular/documentation/api/uploader/#chunkfailure) &nbsp;event will be triggered when the chunk is sent to the server successfully or failed. If all the chunks are sent to the server successfully, the uploader success event is triggered.

> Chunk upload will work when the selected file size is greater than the specified chunk size. otherwise, it upload the files normally.

## Additional configurations

To modify the chunk upload, the following options can be used.

* **RetryAfterDelay** - If error occurs while sending any chunk request from JavaScript, hold the operation for 500 milliseconds (by default), and retry the operation using chunk. This can be achieved by using the [asyncSettings.retryAfterDelay](https://ej2.syncfusion.com/angular/documentation/api/uploader/asyncSettingsModel/#retryafterdelay) &nbsp;property. You can modify the holding time interval in milliseconds.

* **RetryCount** - Specifies the number of retry actions performed when the file fails to upload. By default, [retry](https://ej2.syncfusion.com/angular/documentation/api/uploader/asyncSettingsModel/#retrycount) action is performed 3 times. If the file fails to upload continuously, the request is aborted and the uploader [failure](https://ej2.syncfusion.com/angular/documentation/api/uploader/#failure) event will trigger.

The following sample specifies the chunk upload delay with 3000 milliseconds and the retry count is 5. The failure event is triggered as the wrong saveUrl is used.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/retry-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/retry-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/retry-cs1" %}

## Resumable upload

Allows you to resume an upload operation after a network failure or manually interrupts (pause) the upload. You can perform pause and resume upload actions using public methods ([pause](https://ej2.syncfusion.com/angular/documentation/api/uploader/#pause) and [resume](https://ej2.syncfusion.com/angular/documentation/api/uploader/#resume)) and UI interaction. The pause icon is enabled after the upload begins.

> This pause and resume features available only when the chunk upload is enabled.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/resumable-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/resumable-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/resumable-cs1" %}

## Cancel upload

The uploader component allows you to cancel the uploading file. This can be achieved by clicking the cancel icon or using the [cancel](https://ej2.syncfusion.com/angular/documentation/api/uploader/#cancel) method. The [cancelling](https://ej2.syncfusion.com/angular/documentation/api/uploader/#cancelling) event will be fired whenever the file upload request is canceled. While canceling the upload request, the partially uploaded file is removed from the server.

When the request fails, the pause icon is changed to retry icon. By clicking the retry icon, sends the failed chunk request again to the server and upload started from where it is failed. You can retry the canceled upload request again using retry UI or [retry](https://ej2.syncfusion.com/angular/documentation/api/uploader/#retry) methods. But, if you retry this, the file upload action again starts from initial.

The following example explains about chunk upload with cancel support.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/cancel-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/cancel-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/cancel-cs1" %}

> The retry action has different working behavior for chunk upload and default upload.
* Chunk upload - Retries to upload the failed request where it is failed previously.
* Default upload - Retries to upload the failed file again from initial.

## Server-Side configurations

The server-side implementation entirely depends on the application requirements and logic. The following code snippet provides the server-side logic to handle the chunk upload using the uploader components.

```csharp
// Server configuration for upload a file.
public void Save()
{
    try
    {
        if (HttpContext.Current.Request.Files.AllKeys.Length > 0)
        {
            var httpPostedChunkFile = HttpContext.Current.Request.Files["chunkFile"];
            if (httpPostedChunkFile != null)
            {
                var saveFile = HttpContext.Current.Server.MapPath("UploadingFiles");
                // Save the chunk file in temporery location with .part extension
                var SaveFilePath = Path.Combine(saveFile, httpPostedChunkFile.FileName + ".part");
                var chunkIndex = HttpContext.Current.Request.Form["chunkIndex"];
                if (chunkIndex == "0")
                {
                    httpPostedChunkFile.SaveAs(SaveFilePath);
                }
                else
                {
                    // Merge the current chunk file with previous uploaded chunk files
                    MergeChunkFile(SaveFilePath, httpPostedChunkFile.InputStream);
                    var totalChunk = HttpContext.Current.Request.Form["totalChunk"];
                    if (Convert.ToInt32(chunkIndex) == (Convert.ToInt32(totalChunk) - 1))
                    {
                        var savedFile = HttpContext.Current.Server.MapPath("UploadedFiles");
                        var originalFilePath = Path.Combine(savedFile, httpPostedChunkFile.FileName);
                        // After all the chunk files completely uploaded, remove the .part extension and move this file into save location
                        System.IO.File.Move(SaveFilePath, originalFilePath);
                    }
                }
                HttpResponse ChunkResponse = HttpContext.Current.Response;
                ChunkResponse.Clear();
                ChunkResponse.ContentType = "application/json; charset=utf-8";
                ChunkResponse.StatusDescription = "File uploaded succesfully";
                ChunkResponse.End();
            }
            var httpPostedFile = HttpContext.Current.Request.Files["UploadFiles"];

            if (httpPostedFile != null)
            {
                var fileSave = HttpContext.Current.Server.MapPath("UploadedFiles");
                var fileSavePath = Path.Combine(fileSave, httpPostedFile.FileName);
                if (!File.Exists(fileSavePath))
                {
                    httpPostedFile.SaveAs(fileSavePath);
                    HttpResponse Response = HttpContext.Current.Response;
                    Response.Clear();
                    Response.ContentType = "application/json; charset=utf-8";
                    Response.StatusDescription = "File uploaded succesfully";
                    Response.End();
                }
                else
                {
                    HttpResponse Response = HttpContext.Current.Response;
                    Response.Clear();
                    Response.Status = "400 File already exists";
                    Response.StatusCode = 400;
                    Response.StatusDescription = "File already exists";
                    Response.End();
                }
            }
        }
    }
    catch (Exception e)
    {
        HttpResponse Response = HttpContext.Current.Response;
        Response.Clear();
        Response.ContentType = "application/json; charset=utf-8";
        Response.StatusCode = 400;
        Response.Status = "400 No Content";
        Response.StatusDescription = e.Message;
        Response.End();
    }
}
// Server configuration for remove a uploaded file
public void Remove()
{
    try
    {
        var fileSave = "";
        if (HttpContext.Current.Request.Form["cancelUploading"] != null)
        {
            fileSave = HttpContext.Current.Server.MapPath("UploadingFiles");
        } else
        {
            fileSave = HttpContext.Current.Server.MapPath("UploadedFiles");
        }
        var fileName = HttpContext.Current.Request.Files["UploadFiles"].FileName;
        var fileSavePath = Path.Combine(fileSave, fileName);
        if (File.Exists(fileSavePath))
        {
            File.Delete(fileSavePath);
        }
    }
    catch (Exception e)
    {
        HttpResponse Response = HttpContext.Current.Response;
        Response.Clear();
        Response.Status = "404 File not found";
        Response.StatusCode = 404;
        Response.StatusDescription = "File not found";
        Response.End();
    }
}
// Merge the current chunk file with previous uploaded chunk files
public void MergeChunkFile(string fullPath, Stream chunkContent)
{
    try
    {
        using (FileStream stream = new FileStream(fullPath, FileMode.Append, FileAccess.Write, FileShare.ReadWrite))
        {
            using (chunkContent)
            {
                chunkContent.CopyTo(stream);
            }
        }
    }
    catch (IOException ex)
    {
        throw ex;
    }
}
```

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-ui-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
