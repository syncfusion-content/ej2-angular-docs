---
layout: post
title: Managing File Attachments | Syncfusion
description: Learn here all about File attachments in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: File attachments
documentation: ug
domainurl: ##DomainURL##
---

# Managing File Attachments in the Angular Rich Text Editor Component

The Rich Text Editor allows you to attach files through the file upload feature. You can upload files either by selecting them via the file upload dialog or by dragging and dropping them from your local system. When the file upload succeeds, the editor automatically inserts an attachment link into the content.

In the example below, configure the saveUrl and path properties to enable file attachments:

1. saveUrl: Specifies the server endpoint where uploaded files will be saved.
2. path: Defines the location on the server where the uploaded files will be stored.

The following sample demonstrates how to attach a file in the Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/how-to/file-attachments/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/how-to/file-attachments/src/main.ts %}
{% endhighlight %}
{% endtabs %}

To config server-side handler, refer the below code.

``` csharp
int x = 0;
string file;
 [AcceptVerbs("Post")]
        public void Save()
        {
            try
            {
                var httpPostedFile = System.Web.HttpContext.Current.Request.Files["UploadFiles"];
                file = httpPostedFile.FileName;
                if (httpPostedFile != null)
                {
                    Console.WriteLine(System.Web.HttpContext.Current.Server.MapPath("~/Files"));
                    var fileSave = System.Web.HttpContext.Current.Server.MapPath("~/Files");
                    if (!Directory.Exists(fileSave))
                    {
                        Directory.CreateDirectory(fileSave);
                    }
                    var fileName = Path.GetFileName(httpPostedFile.FileName);
                    var fileSavePath = Path.Combine(fileSave, fileName);
                    while (System.IO.File.Exists(fileSavePath))
                    {
                        file = "rte" + x + "-" + fileName;
                        fileSavePath = Path.Combine(fileSave, file);
                        x++;
                    }
                    if (!System.IO.File.Exists(fileSavePath))
                    {
                        httpPostedFile.SaveAs(fileSavePath);
                        HttpResponse Response = System.Web.HttpContext.Current.Response;
                        Response.Clear();
                        Response.Headers.Add("name", file);
                        Response.ContentType = "application/json; charset=utf-8";
                        Response.StatusDescription = "File uploaded succesfully";
                        Response.Headers.Add("url", fileSavePath);
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