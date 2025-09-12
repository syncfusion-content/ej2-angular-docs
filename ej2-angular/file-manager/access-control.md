---
layout: post
title: Access control in Angular File Manager component | Syncfusion
description: Learn here all about Access control in Syncfusion Angular File Manager component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: File Manager
documentation: ug
domainurl: ##DomainURL##
---

# Access control in Angular File Manager component

Access control in the File Manager allows you to restrict user actions by defining permissions for files and folders. This security feature lets you control who can read, write, download, upload, or copy specific content based on user roles.

* [Access Rules](#access-rules)
* [Permissions](#permissions)

## Access Rules

Access rules define the security permissions for folders and files in the File Manager. The `FileAccessController` class provides the foundation for implementing these rules in your application.

To set up access rules for folders (including their files and sub-folders) and individual files, use the `SetRules()` method in the controller. The rules determine which operations are allowed for specific paths and user roles.

The following table represents the AccessRule properties available for files and folders:

| **Properties** | **Applicable for file** | **Applicable for folder** | **Description** |
| --- | --- | --- | --- |
| Copy | Yes | Yes | Allows access to copy a file or folder. |
| Read | Yes | Yes | Allows access to read a file or folder. |
| Write | Yes | Yes | Allows permission to write a file or folder. |
| WriteContents | No | Yes | Allows permission to write the content of folder. |
| Download | Yes | Yes | Allows permission to download a file or folder. |
| Upload | No | Yes | Allows permission to upload to the folder. |
| Path | Yes | Yes | Specifies the path to apply the rules, which are defined. |
| Role | Yes | Yes | Specifies the role to which the rule is applied. |
| IsFile | Yes | Yes | Specifies whether the rule is specified for folder or file. |

The following example represents the access rules for an Administrator role:

```typescript
// Administrator
// Access Rules for File
new AccessRule { Path = "/*.*", Role = "Administrator", Read = Permission.Allow, Write = Permission.Allow, 
Copy = Permission.Allow, Download = Permission.Allow, IsFile = true },

// Access Rules for folder
new AccessRule { Path = "*", Role = "Administrator", Read = Permission.Allow, Write = Permission.Allow, 
Copy = Permission.Allow, WriteContents = Permission.Allow, Upload = Permission.Allow, Download = Permission.Deny, 
IsFile = false },
```

The following example represents the access rules for a Default user role:

```typescript
// Default User
// Access Rules for File
new AccessRule { Path = "/*.*", Role = "Default User", Read = Permission.Deny, Write = Permission.Deny, 
Copy = Permission.Deny, Download = Permission.Deny, IsFile = true },

// Access Rules for folder
new AccessRule { Path = "*", Role = "Default User", Read = Permission.Deny, Write = Permission.Deny, 
Copy = Permission.Deny, WriteContents = Permission.Deny, Upload = Permission.Deny, Download = Permission.Deny, IsFile = false },
```

## Permissions

This section explains how to apply security permissions to File Manager files or folders using access rules. The File Manager uses two permission values:

| **Value** | **Description** |
| --- | ---|
| Allow | Allows you to do read, write, copy, and download operations. |
| Deny | Denies you to do read, write, copy, and download operations. |

Use the `Role` property to apply created roles to the File Manager. After assigning roles, the File Manager displays folders or files and allows operations based on the permissions defined for each role.

### Examples of Permission Rules

#### Denying write permission for administrator

```typescript
// For file
new AccessRule { Path = "/*.*", Role = "Administrator", Read = Permission.Allow, Write = Permission.Deny, IsFile = true},

// For folder
new AccessRule { Path = "*", Role = "Administrator", Read = Permission.Allow, Write = Permission.Deny, IsFile = false},
```

#### Denying write permission for specific folders or files

```typescript
// Deny writing for particular folder
new AccessRule { Path = "/Documents", Role = "Document Manager", Read = Permission.Allow, Write = Permission.Deny, 
Copy = Permission.Allow, WriteContents = Permission.Deny, Upload = Permission.Deny, Download = Permission.Deny, 
IsFile = false },

// Deny writing for particular file
new AccessRule { Path = "/Pictures/Employees/Adam.png", Role = "Document Manager", Read = Permission.Allow, 
Write = Permission.Deny, Copy = Permission.Deny, Download = Permission.Deny, IsFile = true },
```

#### Denying write and upload permissions for root folder

```typescript
// Folder Rule
new AccessRule { Path = "/", Role = "Document Manager", Read = Permission.Allow, Write = Permission.Deny, 
Copy = Permission.Deny, WriteContents = Permission.Deny, Upload = Permission.Deny, Download = Permission.Deny, 
IsFile = false },
```

The following example demonstrates the File Manager rendered with access control support:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/access-control-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/access-control-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/access-control-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/access-control-cs1" %}