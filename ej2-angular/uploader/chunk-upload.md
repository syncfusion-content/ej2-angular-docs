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

The Uploader splits large files into smaller chunks and transmits them to the server using AJAX. You can pause, resume, and retry failed chunk uploads.

> * Chunk upload works only with asynchronous upload mode.
* This feature is available from Essential Studio<sup style="font-size:70%">&reg;</sup> Vol 2, 2018 release and later.

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

The chunk upload functionality divides selected files into manageable data chunks. These chunks are transmitted to the server sequentially using AJAX requests.
Chunks are sent in sequential order; the next chunk is transmitted only after the previous chunk succeeds. If any chunk fails, the remaining chunks are not sent to the server.
The [chunkSuccess](https://ej2.syncfusion.com/angular/documentation/api/uploader/#chunksuccess) or [chunkFailure](https://ej2.syncfusion.com/angular/documentation/api/uploader/#chunkfailure) event is triggered when each chunk is successfully transmitted or fails. When all chunks are successfully uploaded, the `success` event is triggered.

> Chunk upload is used only when the selected file size exceeds the specified chunk size. Files smaller than the chunk size are uploaded normally without chunking.

## Additional configurations

To customize chunk upload behavior, the following options are available:

* **RetryAfterDelay** — When a chunk request fails, the Uploader waits 500 milliseconds (by default) before retrying. Configure this delay using the [asyncSettings.retryAfterDelay](https://ej2.syncfusion.com/angular/documentation/api/uploader/asyncSettingsModel/#retryafterdelay) property. You can modify the delay duration in milliseconds.

* **RetryCount** — Specifies the number of retry attempts for failed uploads. By default, the [retry](https://ej2.syncfusion.com/angular/documentation/api/uploader/asyncSettingsModel/#retrycount) action is performed up to 3 times. If the upload continues to fail after all retries, the request is aborted and the [failure](https://ej2.syncfusion.com/angular/documentation/api/uploader/#failure) event is triggered.

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

The Uploader allows you to resume upload operations after network interruptions or manual pauses. You can pause and resume uploads using the public methods [pause](https://ej2.syncfusion.com/angular/documentation/api/uploader/#pause) and [resume](https://ej2.syncfusion.com/angular/documentation/api/uploader/#resume), or through the UI interaction. The pause icon appears after the upload begins.

> Pause and resume functionality is available only when chunk upload is enabled.

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

The Uploader allows you to cancel file uploads by clicking the cancel icon or using the [cancel](https://ej2.syncfusion.com/angular/documentation/api/uploader/#cancel) method. The [canceling](https://ej2.syncfusion.com/angular/documentation/api/uploader/#cancelling) event is triggered when an upload is canceled. When canceled, partially uploaded files are removed from the server.

When a chunk upload fails, the pause icon changes to a retry icon. Click the retry icon to resend the failed chunk and resume uploading from the failure point. You can retry canceled uploads using the retry UI or the [retry](https://ej2.syncfusion.com/angular/documentation/api/uploader/#retry) method. If you retry, the file upload restarts from the beginning.

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

> The retry action behaves differently depending on the upload mode:
* **Chunk upload** — Resumes from the failed chunk without restarting the entire file.
* **Default upload** — Restarts the file upload from the beginning.

## Server-side configuration

Server-side implementation varies based on your application requirements and business logic. The following code example demonstrates how to handle chunk uploads on the server using the Uploader component.

> The `chunk-index` and `total-chunk` values are accessible through form data using `Request.Form`, which retrieves these values from the incoming upload request.
* `chunk-index` - Indicates the index of the current chunk being received.
* `total-chunk` - Represents the total number of chunks for the file being uploaded.

```csharp
public string uploads = Path.Combine(Directory.GetCurrentDirectory(), "Uploaded Files"); // Set your desired upload directory path

public async Task<IActionResult> Save(IFormFile UploadFiles)
{
    try
    {
        if (UploadFiles.Length > 0)
        {
            var fileName = UploadFiles.FileName;

            // Create upload directory if it doesn't exist
            if (!Directory.Exists(uploads))
            {
                Directory.CreateDirectory(uploads);
            }

            if (UploadFiles.ContentType == "application/octet-stream") //Handle chunk upload
            {
                // Fetch chunk-index and total-chunk from form data
                var chunkIndex = Request.Form["chunk-index"];
                var totalChunk = Request.Form["total-chunk"];

                // Path to save the chunk files with .part extension
                var tempFilePath = Path.Combine(uploads, fileName + ".part");

                using (var fileStream = new FileStream(tempFilePath, chunkIndex == "0" ? FileMode.Create : FileMode.Append))
                {
                    await UploadFiles.CopyToAsync(fileStream);
                }

                // If all chunks are uploaded, move the file to the final destination
                if (Convert.ToInt32(chunkIndex) == Convert.ToInt32(totalChunk) - 1)
                {
                    var finalFilePath = Path.Combine(uploads, fileName);

                    // Move the .part file to the final destination without the .part extension
                    System.IO.File.Move(tempFilePath, finalFilePath);

                    return Ok(new { status = "File uploaded successfully" });
                }

                return Ok(new { status = "Chunk uploaded successfully" });
            }
            else //Handle normal upload
            {
                var filePath = Path.Combine(uploads, fileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await UploadFiles.CopyToAsync(fileStream);
                }

                return Ok(new { status = "File uploaded successfully" });
            }
        }

        return BadRequest(new { status = "No file to upload" });
    }
    catch (Exception ex)
    {
        return StatusCode(500, new { status = "Error", message = ex.Message });
    }
}

// Method to handle file removal (optional if needed)
public async Task<IActionResult> Remove(string UploadFiles)
{
    try
    {
        var filePath = Path.Combine(uploads, UploadFiles);

        if (System.IO.File.Exists(filePath))
        {
            System.IO.File.Delete(filePath);
            return Ok(new { status = "File deleted successfully" });
        }
        else
        {
            return NotFound(new { status = "File not found" });
        }
    }
    catch (Exception ex)
    {
        return StatusCode(500, new { status = "Error", message = ex.Message });
    }
}
```

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/uploader/default) to understand how to browse the files which you want to upload to the server.
