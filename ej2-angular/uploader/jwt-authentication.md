---
layout: post
title: JWT Authentication in Angular Uploader component | Syncfusion
description: Learn here all about File Upload Using JWT Authentication in Syncfusion Angular Uploader component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: JWT Authentication  
documentation: ug
domainurl: ##DomainURL##
---

# File upload using JWT authentication

A JSON Web Token (JWT) is an open standard for securely transmitting information between parties as a JSON object. JWTs are commonly used for authentication and authorization. Clients include a JWT in request headers, which the server validates before processing. This approach adds a security layer, ensuring only authenticated users can upload or remove files.

This guide demonstrates how to implement JWT authentication with the Uploader component in an Angular application. The server-side example uses .NET Core to validate JWT tokens before allowing file uploads or deletions.

## Client-side setup

To implement JWT authentication with the Uploader, use the `uploading` and `removing` events. Configure save and remove URLs using `asyncSettings`. Store the JWT in a component property.

The `currentRequest` property and `setRequestHeader` method are used to add the JWT token to request headers during save and remove operations.

The following code example demonstrates client-side JWT implementation:

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
> Replace `Your.JWT.Token` with a valid JWT from your authentication system for production environments.

## Server-side controller (ASP.NET Core)

The server-side controller receives and validates the JWT from request headers. If the token is valid, the server processes the file operation; otherwise, it returns an unauthorized response.

The `Save` method validates the JWT before saving files to the `Uploaded Files` directory. The `Remove` method verifies JWT authorization before deleting files.

The `IsAuthorized` method extracts and validates the JWT from the `Authorization` header. Replace `Your.JWT.Token` with your token verification logic. The `SaveFileAsync` method handles file persistence, including support for chunked uploads.

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