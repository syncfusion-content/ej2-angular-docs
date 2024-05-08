---
layout: post
title: Template in Angular Uploader component | Syncfusion
description: Learn here all about Template in Syncfusion Angular Uploader component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Template 
documentation: ug
domainurl: ##DomainURL##
---

# Template in Angular Uploader component

You can customize the default appearance of the uploader using a template along with buttons.

## File list template

The `template` property is used to customize the default appearance of each file in the list. It can be represented as the HTML element or string. The selected or dropped files are displayed as per the template layout provided. The remove and progress bar action is handled using the corresponding events when the template is defined.

For example, you can display file type icon along with default UI elements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/template-cs1" %}

## Custom template

You can design the own template by preventing the default file list including buttons.
The `showFileList` property is used to display whether the default file list or own file list when you use custom template to upload or remove the files, pass the custom UI argument as true to call `upload`/`remove` public method as follows:

* UploaderObj.upload(filesData, true);

* UploaderObj.remove(filesData, true);

Refer to the following code sample.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/cus_template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/cus_template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/cus_template-cs1" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-ui-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.

## See Also

* [Customize progress bar](./how-to/customize-progressbar)
* [Customize button with HTML element](./how-to/customize-button-with-html-element)
* [Customize drop area](./how-to/hide-default-drop-area)
