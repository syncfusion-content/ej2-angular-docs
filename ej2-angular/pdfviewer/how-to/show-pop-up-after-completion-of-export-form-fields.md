---
layout: post
title: Show pop up in Angular Pdfviewer component | Syncfusion
description: Learn here all about Show pop up after completion of export form fields in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Show pop up after completion of export form fields 
documentation: ug
domainurl: ##DomainURL##
---

# Show pop-up after completion of export form fields

The [exportSuccess](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#exportsuccess) event triggers when an export annotations succeed in the PDF Viewer where you can notify the pop-up message.

Refer the following code to notify the pop-up once export annotations succeed.

{% tabs %}
{% highlight js tabtitle="Standalone" %}

<!--Render PDF Viewer component-->
<ejs-pdfviewer id="pdfViewer"
               [serviceUrl]="service"
               [documentPath]="document"
               (exportSuccess)="fireExportRequestSuccess()"
               style="height:640px;display:block">
</ejs-pdfviewer>

//Method to notify popup once the form is submitted.
public fireExportRequestSuccess() {
  var pdfViewer = (<any>document.getElementById('pdfViewer'))
    .ej2_instances[0];
  //API to notify popup once the form is submitted.
  pdfViewer.viewerBase.openImportExportNotificationPopup(
    'Your form information has been saved. You can resume it at any times.Form Information Saved'
  );
}

{% endhighlight %}

{% highlight js tabtitle="Server-Backed" %}

<!--Render PDF Viewer component-->
<ejs-pdfviewer id="pdfViewer"
               [serviceUrl]="service"
               [documentPath]="document"
               (exportSuccess)="fireExportRequestSuccess()"
               style="height:640px;display:block">
</ejs-pdfviewer>

//Method to notify popup once the form is submitted.
public fireExportRequestSuccess() {
  var pdfViewer = (<any>document.getElementById('pdfViewer'))
    .ej2_instances[0];
  //API to notify popup once the form is submitted.
  pdfViewer.viewerBase.openImportExportNotificationPopup(
    'Your form information has been saved. You can resume it at any times.Form Information Saved'
  );
}

{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Event/Export%20success).