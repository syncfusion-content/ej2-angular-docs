---
layout: post
title: Include authorization token in Angular Pdfviewer component | Syncfusion
description: Learn here all about Include authorization token in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Include authorization token 
documentation: ug
domainurl: ##DomainURL##
---

# Include the Authorization token

The PDF Viewer library allows you to include the authorization token in the PDF viewer AJAX request using the properties of the ajaxRequest header available in AjaxRequestSettings, and it will be included in every AJAX request send from PDF Viewer.

The following steps are used to include the authorization token to the PDF viewer control.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started/) to create simple PDF Viewer sample in Angular.

**Step 2:** Add the following code snippet to include the authorization token.

```html
<ejs-pdfviewer id="pdfViewer"
               [serviceUrl]='service'
               [documentPath]='document'
               [ajaxRequestSettings]="ajaxSetting"
               style="height:640px;display:block">
</ejs-pdfviewer>
```

```typescript
public ajaxSetting = {
  ajaxHeaders: [
    {
      headerName: "Authorization",
      headerValue: "Bearer 64565dfgfdsjweiuvbiuyhiueygf"
    }
  ],
  withCredentials: false
};
```

Find the Sample [how to include authorization token](https://stackblitz.com/edit/angular-jmn6wf-mpwfjc?file=app.component.ts)