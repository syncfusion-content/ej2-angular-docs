---
layout: post
title: Convert image into binary format in Angular Uploader | Syncfusion
description: Learn here all about convert image into binary format after uploading in Syncfusion Angular Uploader component, it's elements, and more.
platform: ej2-angular
control: Convert image into binary format after uploading 
documentation: ug
domainurl: ##DomainURL##
---

# Convert Image into Binary Format in Angular Uploader

By default, the Uploader component saves uploaded image files to physical directories. You can also convert images to binary format on the server before saving them.
To obtain binary data for an uploaded image, read the file's input stream on the server using a BinaryReader and call ReadBytes.

Refer to the server-side code snippet below.

```csharp

[AcceptVerbs("Post")]
public void Save()
{
    try
    {
        if (System.Web.HttpContext.Current.Request.Files.AllKeys.Length > 0)
        {
            var httpPostedFile = System.Web.HttpContext.Current.Request.Files["UploadFiles"];

            if (httpPostedFile != null)
            {
                byte[] fileBytes;
                using (BinaryReader br = new BinaryReader(httpPostedFile.InputStream))
                {
                    fileBytes = br.ReadBytes((int)httpPostedFile.InputStream.Length);
                    // bytes will be stored in variable fileBytes
                }
                HttpResponse Response = System.Web.HttpContext.Current.Response;
                Response.Clear();
                Response.ContentType = "application/json; charset=utf-8";
                Response.StatusCode = 200;
                Response.Status = "200 Success";
                Response.End();
            }
        }
    }
    catch (Exception e)
    {
        HttpResponse Response = System.Web.HttpContext.Current.Response;
        Response.Clear();
        Response.ContentType = "application/json; charset=utf-8";
        Response.StatusCode = 204;
        Response.Status = "204 No Content";
        Response.StatusDescription = e.Message;
        Response.End();
    }
}

```

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/uploader/default) to understand how to browse the files which you want to upload to the server.
