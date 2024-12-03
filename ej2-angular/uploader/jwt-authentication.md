---
layout: post
title: JWT Authentication in Angular Uploader component | Syncfusion
description: Learn here all about File Upload Using JWT Authentication in Syncfusion Angular Uploader component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: JWT Authentication
documentation: ug
domainurl: ##DomainURL##
---

# File Upload Using JWT Authentication

JSON Web Token (JWT) is an open standard for securely transmitting information between parties as a JSON object. JWTs are commonly used for authorization, where the client includes a JWT in the request header for the server to validate before processing the request. This approach adds an extra layer of security, ensuring only authenticated users can upload or remove files.

This guide covers how to implement JWT authentication in a file upload scenario using the `Uploader` component in a Angular app. The server is set up in .NET Core to validate the JWT token before saving or removing files.

## Client-Side Setup

To set up the file uploader with JWT authentication, we'll use the `uploading` and `removing` events of the uploader component. The `asyncSettings` is used to configure the URLs for saving and removing files on the server. A property named `token` stores the JWT.

Using the `uploading` and `removing` event argument's, `currentRequest` property and `setRequestHeader` method, the JWT token is added to the request header during the save and remove actions.

The following code snippet provides the client-side logic for adding a JWT token during the save and remove actions.

```html
<ejs-uploader
    #defaultupload
    id="defaultfileupload"
    [asyncSettings]="path"
    (uploading)="onFileUploading($event)"
    (removing)="onFileRemove($event)"
></ejs-uploader>
```

```typescript
public token: string = 'Your.JWT.Token'; // Replace with a valid JWT token

public onFileUploading(args: any): void {
    // Add JWT to request header before file upload
    args.currentRequest.setRequestHeader('Authorization',`Bearer ${this.token}`);
}

public onFileRemove(args: any): void {
    // Add JWT to request header before file removal
    args.postRawFile = false;
    args.currentRequest.setRequestHeader('Authorization',`Bearer ${this.token}`);
}
```
> Replace `Your.JWT.Token` with a valid JWT issued by your authentication system for production use.

## Server-Side Controller (ASP.NET Core)

The server-side controller receives and validates the JWT from the request headers. If valid, the server saves or removes the file; otherwise, it returns an unauthorized response.

The `Save` method checks JWT authorization before saving files. If authorized, the file is saved in the `Uploaded Files` directory. The `Remove` method verifies the JWT authorization before attempting to delete a file.

The `IsAuthorized` method extracts and validates the JWT from the `Authorization` header. You can replace `Your.JWT.Token` with a method that verifies tokens. The `SaveFileAsync` method handles file saving, with support for appending data when dealing with chunked uploads.

```csharp
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Threading.Tasks;

public class HomeController : Controller
{
    private readonly string _uploads = Path.Combine(Directory.GetCurrentDirectory(), "Uploaded Files");

    public async Task<IActionResult> Save(IFormFile UploadFiles)
    {
        if (!IsAuthorized())
        {
            return Unauthorized();
        }

        if (UploadFiles == null || UploadFiles.Length == 0)
        {
            return BadRequest("Invalid file.");
        }

        Directory.CreateDirectory(_uploads);

        var filePath = Path.Combine(_uploads, UploadFiles.FileName);
        var append = UploadFiles.ContentType == "application/octet-stream"; // Handle chunk upload
        await SaveFileAsync(UploadFiles, filePath, append);

        return Ok();
    }

    private bool IsAuthorized()
    {
        var authorizationHeader = Request.Headers["Authorization"].ToString();
        if (string.IsNullOrEmpty(authorizationHeader) || !authorizationHeader.StartsWith("Bearer "))
        {
            return false;
        }
        var token = authorizationHeader["Bearer ".Length..];
        return token == "Your.JWT.Token";
    }

    private async Task SaveFileAsync(IFormFile file, string path, bool append)
    {
        await using var fileStream = new FileStream(path, append ? FileMode.Append : FileMode.Create);
        await file.CopyToAsync(fileStream);
    }

    public IActionResult Remove(string UploadFiles)
    {
        if (!IsAuthorized())
        {
            return Unauthorized();
        }

        try
        {
            var filePath = Path.Combine(_uploads, UploadFiles);
            if (System.IO.File.Exists(filePath))
            {
                System.IO.File.Delete(filePath);
                Response.StatusCode = 200;
                Response.HttpContext.Features.Get<IHttpResponseFeature>().ReasonPhrase = "File removed successfully";
            }
            else
            {
                Response.StatusCode = 404;
                Response.HttpContext.Features.Get<IHttpResponseFeature>().ReasonPhrase = "File not found";
            }
        }
        catch (Exception e)
        {
            Response.StatusCode = 500;
            Response.HttpContext.Features.Get<IHttpResponseFeature>().ReasonPhrase = $"Error: {e.Message}";
        }

        return new EmptyResult();
    }
}
```