---
layout: post
title: How to enable and disable the delete button based on annotation selection and unselection events | Syncfusion
Description: Learn to enable and disable delete button based on annotation events in Syncfusion Angular Pdfviewer component of Essential JS 2 and more.
platform: ej2-angular
control: How to enable and disable the delete button based on annotation selection and unselection events
documentation: ug
domainurl: ##DomainURL##
---

# How to enable and disable the delete button based on annotation selection and unselection events

In the Syncfusion PDF viewer, enable and disable the delete button while selecting and unselecting annotations by using the **annotationSelect** and **annotationUnSelect** events.

Here is an example of how you can enable and disable the delete button while selecting and unselecting annotations:

```html
<ejs-pdfviewer #pdfviewer id='pdfViewer'
    [serviceUrl]='service'
    [documentPath]='document'
    [enableToolbar]=false
    [enableNavigationToolbar]=false
    (annotationSelect)="annotationSelect($event)"
    (annotationUnSelect)="annotationUnSelect($event)"
    style="height:640px; display: block">
</ejs-pdfviewer>
```

```html
<ejs-toolbar id='topToolbar' #customToolbar>
    <e-item
        prefixIcon="e-delete-1"
        tooltipText="Delete annotation"
        id ="DeleteButton"
        disabled="true"
        (click)="deleteSelectedAnnotation()">
    </e-items>
</ejs-toolbar>
```

```typescript

public annotationSelect(e: any): void {
    this.customToolbar.items[1].disabled = false;
}

public annotationUnSelect(e: any): void {
    this.customToolbar.items[1].disabled = true;
}

public deleteSelectedAnnotation(): void {
    this.pdfviewerControl.annotation.deleteAnnotation();
    this.customToolbar.items[1].disabled = true;
}

```

Find the sample [how to enable and disable the delete button while selecting and unselecting annotations](https://stackblitz.com/edit/angular-g94gvs-hsrjna?file=app.component.ts).