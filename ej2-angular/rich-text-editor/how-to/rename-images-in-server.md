---
layout: post
title: Rename images in server in Angular Rich text editor component | Syncfusion
description: Learn here all about Rename images in server in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Rename images in server 
documentation: ug
domainurl: ##DomainURL##
---

# Rename Images on the Server in the Angular Rich Text Editor Component

By using the [insertImageSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/imageSettings/#imageSettings) property, you can specify the server handler that uploads the selected image. Then, by binding the [imageUploadSuccess](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/imageSuccessEventArgs/#imageSuccessEventArgs) event, you can receive the renamed file from the server and update it in the Rich Text Editor’s insert image dialog.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/how-to/rename-image/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/how-to/rename-image/src/main.ts %}
{% endhighlight %}
{% endtabs %}

To configure the server-side handler, refer the below code.

```csharp
[AcceptVerbs("Post")]
public void Rename()
{
    try
    {
        var httpPostedFile = System.Web.HttpContext.Current.Request.Files["UploadFiles"];
        imageFile = httpPostedFile.FileName;
        if (httpPostedFile != null)
        {
            var fileSave = System.Web.HttpContext.Current.Server.MapPath("~/Images");
            if (!Directory.Exists(fileSave))
            {
                Directory.CreateDirectory(fileSave);
            }
            var fileName = Path.GetFileName(httpPostedFile.FileName);
            var fileSavePath = Path.Combine(fileSave, fileName);
            while (System.IO.File.Exists(fileSavePath))
            {
                imageFile = "rteImage" + x + "-" + fileName;
                fileSavePath = Path.Combine(fileSave, imageFile);
                x++;
            }
            if (!System.IO.File.Exists(fileSavePath))
            {
                httpPostedFile.SaveAs(fileSavePath);
                HttpResponse Response = System.Web.HttpContext.Current.Response;
                Response.Clear();
                Response.Headers.Add("name", imageFile);
                Response.ContentType = "application/json; charset=utf-8";
                Response.StatusDescription = "File uploaded succesfully";
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
