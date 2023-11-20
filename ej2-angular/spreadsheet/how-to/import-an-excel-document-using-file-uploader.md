---
layout: post
title: Import an excel document using file uploader in Angular Spreadsheet component | Syncfusion
description: Learn here all about importing an excel document using file uploader in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Spreadsheet 
documentation: ug
domainurl: ##DomainURL##
---

# Import an excel document using file uploader in ##Platform_Name## Spreadsheet component

If you explore your machine to select and upload an excel document using the file uploader, you will receive the uploaded document as a raw file in the [success](https://ej2.syncfusion.com/angular/documentation/api/uploader/#success) event of the file uploader. In this `success` event, you should pass the received raw file as an argument to the Spreadsheet's [open](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#open) method to see the appropriate output.

The following code example shows how to import an excel document using file uploader in spreadsheet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/open-save-cs7/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/spreadsheet/open-save-cs7/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/open-save-cs7/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/open-save-cs7" %}
