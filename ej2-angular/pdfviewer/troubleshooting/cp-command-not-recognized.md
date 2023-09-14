---
layout: post
title: Troubleshoot 'cp' is not recognized as a command in ##Platform_Name## PDF Viewer control | Syncfusion
description: Learn here all about how to solve 'cp' is not recognized as a command in Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: PDF Viewer 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Troubleshoot error 'cp' is not recognized as a command

The error message you're seeing, "'cp' is not recognized as an internal or external command," is because the `cp` command you're trying to use is not recognized on Windows command prompt. 

On Windows, you should use the `copy` command to copy files and directories instead of `cp`. The equivalent command in Windows to copy a directory and its contents recursively is:

```batch
xcopy /s /e /i .\node_modules\@syncfusion\ej2-pdfviewer\dist\ej2-pdfviewer-lib src\assets\ej2-pdfviewer-lib
```

Here, `/s` indicates that you want to copy directories and subdirectories recursively. Also, note that Windows uses backslashes `\` as path separators, not forward slashes `/`.

Make sure to run this command in the appropriate directory where you want to perform the copy operation.

**Note:** If you encounter other issues or error messages while working with the Windows Command Prompt, make sure to double-check your command syntax and file paths for accuracy. Additionally, ensure that you have the necessary permissions to perform the copy operation in the specified directories.