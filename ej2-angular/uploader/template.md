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

You can customize the Uploader's appearance using templates and custom buttons.

## File list template

The `template` property customizes the appearance of each file in the list. You can provide an HTML element or string template. Selected or dropped files display according to your template layout. Remove and progress bar actions are handled through corresponding events when a template is defined.

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

You can create a completely custom template by hiding the default file list and buttons.
Set the `showFileList` property to control whether to display the default or custom file list. When using a custom template for upload or remove operations, pass `true` as the second parameter to the `upload` and `remove` methods:

* `UploaderObj.upload(filesData, true);`
* `UploaderObj.remove(filesData, true);`

Refer to the following example for implementation:

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
