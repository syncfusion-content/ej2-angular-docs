---
layout: post
title: File operations in Angular File Manager component | Syncfusion
description: Learn here all about File operations in Syncfusion Angular File Manager component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: File Manager
documentation: ug
domainurl: ##DomainURL##
---

# File operations in Angular File Manager component

The File Manager component is used to browse, manage, and organize the files and folders in a file system through a web application. All basic file operations like creating a new folder, uploading and downloading of files in the file system, and deleting and renaming of existing files and folders are available in the File Manager component.  Additionally, previewing of image files is also provided in the File Manager component.

This guide explains the core file operations available in the File Manager component and demonstrates how to implement and customize them in your Angular application.

The following table outlines the fundamental operations supported by the File Manager:

|Operation Name|Function|
|----|----|
|read|Retrieves file and folder details from a specified path in the file system, enabling users to browse content.|
|create|Creates a new folder in the current path of the file system.|
|delete|Removes selected files or folders from the file server.|
|rename|Renames a selected file or folder in the file system.|
|search|Searches for items matching the specified criteria in current and child directories.|
|details|Retrieves detailed information about selected item(s) from the file server.|
|copy|Copies selected files or folders in the file system.|
|move|Cuts selected files or folders for relocation in the file server.|
|upload|Uploads files to the current directory in the file system.|
|download|Downloads selected files from the server (multiple files are downloaded as ZIP files).|

>Note: The *CreateFolder*, *Remove*, and *Rename* operations will only be reflected in the File Manager interface after a successful response from the server.

## Folder Upload support

To enable directory (folder) upload functionality in the File Manager, set the [directoryUpload](https://ej2.syncfusion.com/documentation/api/file-manager/uploadSettings/#directoryupload) property to true within the `uploadSettings` property. This setting determines whether users can upload entire folders or just individual files.

The directory upload feature is supported for the following file service providers:
* Physical file service provider
* Azure file service provider
* NodeJS file service provider
* Amazon file service provider

The following example demonstrates how to enable or disable directory upload using a DropDownButton selection:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/directory-upload-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/directory-upload-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/directory-upload-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/directory-upload-cs1" %}

### Physical file service provider

To implement directory upload in the physical file service provider, add the following code to the `IActionResult Upload` method in your `Controllers/FileManagerController.cs` file:

```typescript
[Route("Upload")]
public IActionResult Upload(string path, IList<IFormFile> uploadFiles, string action)
{
    try
    {
        FileManagerResponse uploadResponse;
        foreach (var file in uploadFiles)
        {
            var folders = (file.FileName).Split('/');
            // checking the folder upload
            if (folders.Length > 1)
            {
                for (var i = 0; i < folders.Length - 1; i++)
                {
                    string newDirectoryPath = Path.Combine(this.basePath + path, folders[i]);
                    // checking the directory traversal
                    if (Path.GetFullPath(newDirectoryPath) != (Path.GetDirectoryName(newDirectoryPath) + Path.DirectorySeparatorChar + folders[i]))
                    {
                        throw new UnauthorizedAccessException("Access denied for Directory-traversal");
                    }
                    if (!Directory.Exists(newDirectoryPath))
                    {
                        this.operation.ToCamelCase(this.operation.Create(path, folders[i]));
                    }
                    path += folders[i] + "/";
                }
            }
        }
        uploadResponse = operation.Upload(path, uploadFiles, action, size, null);
        if (uploadResponse.Error != null)
        {
            Response.Clear();
            Response.ContentType = "application/json; charset=utf-8";
            Response.StatusCode = Convert.ToInt32(uploadResponse.Error.Code);
            Response.HttpContext.Features.Get<IHttpResponseFeature>().ReasonPhrase = uploadResponse.Error.Message;
        }
    }
    catch (Exception e)
    {
        ErrorDetails er = new ErrorDetails();
        er.Message = e.Message.ToString();
        er.Code = "417";
        er.Message = "Access denied for Directory-traversal";
        Response.Clear();
        Response.ContentType = "application/json; charset=utf-8";
        Response.StatusCode = Convert.ToInt32(er.Code);
        Response.HttpContext.Features.Get<IHttpResponseFeature>().ReasonPhrase = er.Message;
        return Content("");
    }
    return Content("");
}
```

Refer to the [GitHub repository](https://github.com/SyncfusionExamples/ej2-aspcore-file-provider/blob/master/Controllers/FileManagerController.cs#L76) for more details.

Additionally, add this code snippet to the `FileManagerResponse Upload` method in your `Models/PhysicalFileProvider.cs` file:

```typescript
string[] folders = name.Split('/');
string fileName = folders[folders.Length - 1];
var fullName = Path.Combine((this.contentRootPath + path), fileName);
```

Refer to the [GitHub repository](https://github.com/SyncfusionExamples/ej2-aspcore-file-provider/blob/master/Models/PhysicalFileProvider.cs#L1317) for more details.

### Azure file service provider

For Azure file service provider, no additional customization is required for directory upload. The default upload method implementation supports this functionality out of the box.

Refer to the [GitHub repository](https://github.com/SyncfusionExamples/azure-aspcore-file-provider/blob/master/Controllers/AzureProviderController.cs) for more details.

### NodeJS file service provider

To implement directory upload in the NodeJS file service provider, add the following code to the `app.post` method in your `filesystem-server.js` file:

```typescript
var folders = (path.normalize(req.body.filename).replace(/^(\.\.[\/\\])+/, '').replace(/\\/g, "/")).split('/');
var filepath = path.normalize(req.body.path).replace(/^(\.\.[\/\\])+/, '').replace(/\\/g, "/");
var uploadedFileName = folders[folders.length - 1];
// checking the folder upload
if (folders.length > 1)
{
    for (var i = 0; i < folders.length - 1; i++)
    {
        var newDirectoryPath = path.join(contentRootPath + filepath, folders[i]);
        const fullPath = (contentRootPath + filepath + folders[i]).replace(/[\\/]/g, "\\");
        const isValidatePath = fullPath == newDirectoryPath ? true : false;
        // checking the directory traversal
        if(!isValidatePath){
            var errorMsg = new Error();
            errorMsg.message = "Access denied for Directory-traversal";
            errorMsg.code = "401";
            response = { error: errorMsg };
            response = JSON.stringify(response);
            res.setHeader('Content-Type', 'application/json');
            res.json(response);
        }
        if (!fs.existsSync(newDirectoryPath)) {
            fs.mkdirSync(newDirectoryPath);
            (async () => {
               await FileManagerDirectoryContent(req, res, newDirectoryPath).then(data => {
                    response = { files: data };
                    response = JSON.stringify(response);
               });
            })();
        }
        filepath += folders[i] + "/";
    }
    fs.rename('./' + uploadedFileName, path.join(contentRootPath, filepath + uploadedFileName), function (err) {
        if (err) {
            if (err.code != 'EBUSY') {
                errorValue.message = err.message;
                errorValue.code = err.code;
            }
        }
    });
}
```

Refer to the [GitHub repository](https://github.com/SyncfusionExamples/ej2-filemanager-node-filesystem/blob/master/filesystem-server.js#L969) for more details.

### Amazon file service provider

To implement directory upload in the Amazon file service provider, add the following code to the `IActionResult AmazonS3Upload` method in your `Controllers/AmazonS3ProviderController.cs` file:

```typescript
foreach (var file in uploadFiles)
{
    var folders = (file.FileName).Split('/');
    // checking the folder upload
    if (folders.Length > 1)
    {
        for (var i = 0; i < folders.Length - 1; i++)
        {
            if (!this.operation.checkFileExist(path, folders[i]))
            {
                this.operation.ToCamelCase(this.operation.Create(path, folders[i], dataObject));
            }
            path += folders[i] + "/";
        }
    }
}
```

Refer to the [GitHub repository](https://github.com/SyncfusionExamples/amazon-s3-aspcore-file-provider/blob/master/Controllers/AmazonS3ProviderController.cs#L88) for more details.

Additionally, add this code to the `AsyncUpload` method in your `Models/AmazonS3FileProvider.cs` file:

```typescript
string[] folders = file.FileName.Split('/');
string name = folders[folders.Length - 1];
```

Refer to the [GitHub repository](https://github.com/SyncfusionExamples/amazon-s3-aspcore-file-provider/blob/master/Models/AmazonS3FileProvider.cs#L681) for more details.

## File operation request and response Parameters

This section details the request parameters sent by the File Manager and the response parameters expected by the component for various file operations.

### Read

The following table outlines the request parameters for *read* operations:

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|read|Name of the file operation.|
|path|String|-|Relative path from which the data has to be read.|
|showHiddenItems|Boolean|-|Defines show or hide the hidden items.|
|data|FileManagerDirectoryContent|-|Details about the current path (directory).|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of data*.

*Example:*

```typescript
{
    action: "read",
    path: "/",
    showHiddenItems: false,
    data: []
}
```

The following table outlines the response parameters for *read* operations:

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|cwd|FileManagerDirectoryContent|-|Path (Current Working Directory) details.|
|files|FileManagerDirectoryContent[]|-|Details of files and folders present in given path or directory.|
|error|ErrorDetails|-|Error Details|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of cwd, files, and error*.

*Example:*

```typescript
{
    cwd:
    {
        name:"Download",
        size:0,
        dateModified:"2019-02-28T03:48:19.8319708+00:00",
        dateCreated:"2019-02-27T17:36:15.812193+00:00",
        hasChild:false,
        isFile:false,
        type:"",
        filterPath:"\\Download\\"
    },
    files:[
        {
            name:"Sample Work Sheet.xlsx",
            size:6172,
            dateModified:"2019-02-27T17:23:50.9651206+00:00",
            dateCreated:"2019-02-27T17:36:15.8151955+00:00",
            hasChild:false,
            isFile:true,
            type:".xlsx",
            filterPath:"\\Download\\"
        }
    ],
    error:null,
    details:null
}
```

### Create

The following table outlines the request parameters for *create* operations:

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|create|Name of the file operation.|
|path|String|-|Relative path in which the folder has to be created.|
|name|String|-|Name of the folder to be created.|
|data|FileManagerDirectoryContent|-|Details about the current path (directory).|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of data*

*Example:*

```typescript
{
    action: "create",
    data: [
        {
            dateCreated: "2019-02-27T17:36:15.6571949+00:00",
            dateModified: "2019-03-12T10:17:31.8505975+00:00",
            filterPath: "\",
            hasChild: true,
            isFile: false,
            name: files,
            nodeId: "fe_tree",
            size: 0,
            type: ""
        }
    ],
    name: "Hello",
    path: "/"
}
```

The following table outlines the response parameters for *create* operations:

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|files|FileManagerDirectoryContent[]|-|Details of the created folder|
|error|ErrorDetails|-|Error Details|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of files and error*.

*Example:*

```typescript
{
    cwd: null,
    files: [
        {
            dateCreated: "2019-03-15T10:25:05.3596171+00:00",
            dateModified: "2019-03-15T10:25:05.3596171+00:00",
            filterPath: null,
            hasChild: false,
            isFile: false,
            name: "New",
            size: 0,
            type: ""
        }
    ],
    details: null,
    error: null
}
```

### Rename

The following table outlines the request parameters for *rename* operations:

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|rename|Name of the file operation.|
|path|String|-|Relative path in which the item is located.|
|name|String|-|Current name of the item to be renamed.|
|newname|String|-|New name for the item.|
|data|FileManagerDirectoryContent|-|Details of the item to be renamed.|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of data*.

*Example:*

```typescript
{
    action: "rename",
    data: [
        {
            dateCreated: "2019-03-20T05:22:34.621Z",
            dateModified: "2019-03-20T08:45:56.000Z",
            filterPath: "\Pictures\Nature\",
            hasChild: false,
            iconClass: "e-fe-image",
            isFile: true,
            name: "seaviews.jpg",
            size: 95866,
            type: ".jpg"
        }
    ],
    newname: "seaview.jpg",
    name: "seaviews.jpg",
    path: "/Pictures/Nature/"
}
```

The following table outlines the response parameters for *rename* operations:

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|files|FileManagerDirectoryContent[]|-|Details of the renamed item.|
|error|ErrorDetails|-|Error Details|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of files and error*.

*Example:*

```typescript
{
    cwd:null,
    files:[
        {
            name:"seaview.jpg",
            size:95866,
            dateModified:"2019-03-20T08:45:56+00:00",
            dateCreated:"2019-03-20T05:22:34.6214847+00:00",
            hasChild:false,
            isFile:true,
            type:".jpg",
            filterPath:"\\Pictures\\Nature\\seaview.jpg"
        }
    ],
    error:null,
    details:null
}
```

### Delete

The following table outlines the request parameters for *delete* operations:

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|delete|Name of the file operation.|
|path|String|-|Relative path where the items to be deleted are located.|
|names|String[]|-|List of the items to be deleted.|
|data|FileManagerDirectoryContent|-|Details of the item to be deleted.|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of data*.

*Example:*

```typescript
{
    action: "delete",
    path: "/Hello/",
    names: ["New"],
    data: []
}
```

The following table outlines the response parameters for *delete* operations:

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|files|FileManagerDirectoryContent[]|-|Details about the deleted item(s).|
|error|ErrorDetails|-|Error Details|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of files and error*.

*Example:*

```typescript
{
    cwd: null,
    details: null,
    error: null,
    files: [
        {
            dateCreated: "2019-03-15T10:13:30.346309+00:00",
            dateModified: "2019-03-15T10:13:30.346309+00:00",
            filterPath: "\Hello\folder",
            hasChild: true,
            isFile: false,
            name: "folder",
            size: 0,
            type: ""
        }
    ]
}
```

### Details

The following table outlines the request parameters for *details* operations:

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|details|Name of the file operation.|
|path|String|-|Relative path where the items are located.|
|names|String[]|-|List of the items to get details.|
|data|FileManagerDirectoryContent|-|Details of the selected item.|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of data*.

*Example:*

```typescript
{
    action: "details",
    path: "/FileContents/",
    names: ["All Files"],
    data: []
}
```

The following table outlines the response parameters for *details* operations:

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|details|FileManagerDirectoryContent|-|Details of the requested item(s).|
|error|ErrorDetails|-|Error Details|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of details and error*.

*Example:*

```typescript
{
    cwd:null,
    files:null,
    error:null,
    details:
    {
        name:"All Files",
        location:"\\Files\\FileContents\\All Files",
        isFile:false,
        size:"679.8 KB",
        created:"3/8/2019 10:18:37 AM",
        modified:"3/8/2019 10:18:39 AM",
        multipleFiles:false
    }
}
```

### Search

The following table outlines the request parameters for *search* operations:

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|search|Name of the file operation.|
|path|String|-|Relative path to the directory where the files should be searched.|
|showHiddenItems|Boolean|-|Defines show or hide the hidden items.|
|caseSensitive|Boolean|-|Defines search is case sensitive or not.|
|searchString|String|-|String to be searched in the directory.|
|data|FileManagerDirectoryContent|-|Details of the searched item.|

*Example:*

```typescript
{
    action: "search",
    path: "/",
    searchString: "*nature*",
    showHiddenItems: false,
    caseSensitive: false,
    data: []
}
```

The following table outlines the response parameters for *search* operations:

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|cwd|FileManagerDirectoryContent|-|Path (Current Working Directory) details.|
|files|FileManagerDirectoryContent[]|-|Files and folders in the searched directory that matches the search input.|
|error|ErrorDetails|-|Error Details|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of cwd, files and error.*

*Example:*

```typescript
{
    cwd:
    {
        name:files,
        size:0,
        dateModified:"2019-03-15T10:07:00.8658158+00:00",
        dateCreated:"2019-02-27T17:36:15.6571949+00:00",
        hasChild:true,
        isFile:false,
        type:"",
        filterPath:"\\"
    },
    files:[
        {
            name:"Nature",
            size:0,
            dateModified:"2019-03-08T10:18:42.9937708+00:00",
            dateCreated:"2019-03-08T10:18:42.5907729+00:00",
            hasChild:true,
            isFile:false,
            type:"",
            filterPath:"\\FileContents\\Nature"
        }
    ],
    error:null,
    details:null
}
```

### Copy

The following table outlines the request parameters for *copy* operations:

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|copy|Name of the file operation.|
|path|String|-|Relative path to the directory where the files should be copied.|
|names|String[] |-|List of files to be copied.|
|targetPath|String|-|Relative path where the items to be pasted are located.|
|data|FileManagerDirectoryContent|-|Details of the copied item.|
|renameFiles|String[]|-|Details of the renamed item.|

*Example:*

```typescript
{
    action: "copy",
    path: "/",
    names: ["6.png"],
    renameFiles: ["6.png"],
    targetPath: "/Videos/"
}
```

The following table outlines the response parameters for *copy* operations:

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|cwd|FileManagerDirectoryContent|-|Path (Current Working Directory) details.|
|files|FileManagerDirectoryContent[]|-|Details of copied files or folders|
|error|ErrorDetails|-|Error Details|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of cwd, files and error.*

*Example:*

```typescript
{
    cwd:null,
    files:[
        {
            path:null,
            action:null,
            newName:null,
            names:null,
            name:"justin.mp4",
            size:0,
            previousName:"album.mp4",
            dateModified:"2019-06-21T06:58:32+00:00",
            dateCreated:"2019-06-24T04:22:14.6245618+00:00",
            hasChild:false,
            isFile:true,
            type:".mp4",
            id:null,
            filterPath:"\\"
        }
    ],
    error:null,
    details:null
}
```

### Move

The following table outlines the request parameters for *move* operations:

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|move|Name of the file operation.|
|path|String|-|Relative path to the directory where the files should be copied.|
|names|String[] |-|List of files to be moved.|
|targetPath|String|-|Relative path where the items to be pasted are located.|
|data|FileManagerDirectoryContent|-|Details of the moved item.|
|renameFiles|String[]|-|Details of the renamed item.|

*Example:*

```typescript
{
    action: "move",
    path: "/",
    names: ["6.png"],
    renameFiles: ["6.png"],
    targetPath: "/Videos/"
}
```

The following table outlines the response parameters for *move* operations:

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|cwd|FileManagerDirectoryContent|-|Path (Current Working Directory) details.|
|files|FileManagerDirectoryContent[]|-|Details of cut files or folders|
|error|ErrorDetails|-|Error Details|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of cwd, files and error.*

*Example:*

```typescript
{
    cwd:null,
    files:[
        {
            path:null,
            action:null,
            newName:null,
            names:null,
            name:"justin biber.mp4",
            size:0,
            previousName:"justin biber.mp4",
            dateModified:"2019-06-21T06:58:32+00:00",
            dateCreated:"2019-06-24T04:26:49.2690476+00:00",
            hasChild:false,
            isFile:true,
            type:".mp4",
            id:null,
            filterPath:"\\Videos\\"
        }
    ],
    error:null,
    details:null
}
```

### Upload

The following table outlines the request parameters for *Upload* operations:

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|Save|Name of the file operation.|
|path|String|-|Relative path to the location where the file has to be uploaded.|
|uploadFiles|`IList<IFormFile>`|-|File that are uploaded.|

*Example:*

```typescript
uploadFiles: (binary),
path: /,
action: Save,
data: {
    path:null,
    action:null,
    newName:null,
    names:null,
    name:"Downloads",
    size:0,
    previousName:null,
    dateModified:"2019-07-22T11:23:46.7153977 00:00",
    dateCreated:"2019-07-22T11:26:13.9047229 00:00",
    hasChild:false,
    isFile:false,
    type:"",
    id:null,
    filterPath:"\\",
    targetPath:null,
    renameFiles:null,
    uploadFiles:null,
    caseSensitive:false,
    searchString:null,
    showHiddenItems:false,
    _fm_iconClass:null,
    _fm_id:"fe_tree_1",
    _fm_pId:null,
    _fm_selected:false,
    _fm_icon:null,
    data:null,
    targetData:null,
    permission:null
}
```

The upload response is an empty string.

### Download

The following table outlines the request parameters for *download* operations:

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|download|Name of the file operation|
|path|String|-|Relative path to location where the files to download are present.|
|names|String[]|-|Name list of the items to be downloaded.|
|data|FileManagerDirectoryContent|-|Details of the download item.|

*Example:*

```typescript
{
    action:"download",
    path:"/",
    names:["1.png"],
    data:[
        {
            path:null,
            action:null,
            newName:null,
            names:null,
            name:"1.png",
            size:49792,
            previousName:null,
            dateModified:"2019-07-22T12:15:45.0972405+00:00",
            dateCreated:"2019-07-22T12:15:45.0816042+00:00",
            hasChild:false,
            isFile:true,
            type:".png",
            id:null,
            filterPath:"\\",
            targetPath:null,
            renameFiles:null,
            uploadFiles:null,
            caseSensitive:false,
            searchString:null,
            showHiddenItems:false,
            _fm_iconClass:"e-fe-image",
            _fm_id:null,
            _fm_pId:null,
            _fm_selected:false,
            _fm_icon:null,
            data:null,
            targetData:null,
            permission:null,
            _fm_created:"2019-07-22T12:15:45.081Z",
            _fm_modified:"2019-07-22T12:15:45.097Z",
            _fm_imageUrl:"https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage?path=/1.png",
            _fm_imageAttr:
            {
                alt:"1.png"
            },
            _fm_htmlAttr:
            {
                class:"e-large-icon"
            }
        }
    ]
}
```

The response downloads the requested items from the file server.

### GetImage

The following table outlines the request parameters for *GetImage* operations:

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|path|String|-|Relative path to the image file|

The response returns the image as a file stream.

>Note: You can customize File Manager requests using the [beforeSend](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#beforesend) event. This allows you to pass additional information to the File Manager in file operation responses for customization purposes.

## File request and response contents

The following table outlines the common properties in *data, cwd, and files* objects in File Manager requests and responses:

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|name|String|-|File name|
|dateCreated|String|-|Date in which file was created (UTC Date string)|
|dateModified|String|-|Date in which file was last modified (UTC Date string)|
|filterPath|String|-|Relative path to the file or folder|
|hasChild|Boolean|-|Indicates if this folder has any child folder or not|
|isFile|Boolean|-|Indicates whether the item is a file or folder|
|size|Number|-|File size|
|type|String|-|File extension|

The following table outlines the properties in the *error* object in File Manager requests and responses:

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|code|String|-|Error code|
|message|String|-|Error message|
|fileExists|String[]|-|List of duplicate file names|

The following table outlines the properties in the *details* object in File Manager requests and responses:

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|name|String|-|File name|
|dateCreated|String|-|Date in which file was created (UTC Date string)|
|dateModified|String|-|Date in which file was last modified (UTC Date string)|
|filterPath|String|-|Relative path to the file or folder|
|hasChild|Boolean|-|Indicates if this folder has any child folder or not|
|isFile|Boolean|-|ndicates whether the item is a file or folder|
|size|Number|-|File size|
|type|String|-|File extension|
|multipleFiles|Boolean|-|Indicates whether the details are for a single file or multiple files|

## Action Buttons

The File Manager includes various menu buttons for accessing file operations. The following table describes the available menu buttons and their behaviors:

|Menu Button|Behavior|
|----|----|
|SortBy| Opens the sub menu to choose the sorting order and sorting parameter|
|View| Opens the sub menu to choose the View|
|Open| Navigates to the selected folder. Opens the preview for image files|
|Refresh| Initiates the read operation for the current directory and displays the updated directory content|
|NewFolder| Opens the new folder dialog box to receive the name for the new folder|
|Rename| Opens the rename dialog box to receive the new name for the selected item|
|Delete| Opens the delete dialog box to confirm the removal of the selected items from the file system|
|Upload| Opens the upload box to select the items to upload to the file system|
|Download| Downloads the selected item(s)|
|Details| Get details about the selected items and display them in details dialog box|
|SelectAll| Selects all the files and folders displayed in the view section|

These action buttons appear in both the toolbar and context menu. The toolbar displays buttons based on the number of selected items, while the context menu provides options relevant to the clicked item.

### Toolbar

The toolbar is divided into left and right sections. When toolbar buttons exceed the available space, buttons from the left section automatically move to a toolbar popup menu.

The following table shows which toolbar buttons appear based on selection state:

<!-- markdownlint-disable MD033 -->
<table border="1">
    <tr>
        <th>Selected Items Count</th>
        <th>Left section</th>
        <th>Right section</th>
    </tr>
    <tr>
        <td>`0` (none of the items)</td>
        <td>
            <ul>
                <li>SortBy</li>
                <li>Refresh</li>
                <li>NewFolder</li>
                <li>Upload</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>View</li>
                <li>Details</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>`1` (single item selected)</td>
        <td>
            <ul>
                <li>Delete</li>
                <li>Download</li>
                <li>Rename</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Selected items count</li>
                <li>View</li>
                <li>Details</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>`>1` (multiple selection)</td>
        <td>
            <ul>
                <li>Delete</li>
                <li>Download</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Selected items count</li>
                <li>View</li>
                <li>Details</li>
            </ul>
        </td>
    </tr>
</table>

### Context menu

The following table shows the default context menu items and their corresponding target areas:

<!-- markdownlint-disable MD033 -->
<table border="1">
    <tr>
        <th>Menu Name</th>
        <th>Menu Items</th>
        <th>Target</th>
    </tr>
    <tr>
        <td>Layout</td>
        <td>
            <ul>
                <li>SortBy</li>
                <li>View</li>
                <li>Refresh</li>
                <li>NewFolder</li>
                <li>Upload</li>
                <li>Details</li>
                <li>Select all</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Empty space in the view section (details view and large icon view area)</li>
                <li>Empty folder content</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Folders</td>
        <td>
            <ul>
                <li>Open</li>
                <li>Delete</li>
                <li>Rename</li>
                <li>Downloads</li>
                <li>Details</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Folders in treeview, details view, and large icon view</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Files</td>
        <td>
            <ul>
                <li>Open</li>
                <li>Delete</li>
                <li>Rename</li>
                <li>Downloads</li>
                <li>Details</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Files in details view and large icon view</li>
            </ul>
        </td>
    </tr>
</table>