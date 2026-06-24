---
layout: post
title: Nested items in Angular File Manager component | Syncfusion
description: Learn here all about Nested items in Angular File Manager component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: File Manager
documentation: ug
domainurl: ##DomainURL##
---

# Nested items in Angular File Manager component

The File Manager component can be seamlessly rendered inside other Syncfusion components such as Dialog, Tab, and more. This integration capability allows you to create complex interfaces where file management functionality is needed within different UI contexts.

* [Adding File Manager inside a Dialog](#adding-file-manager-inside-the-dialog)
* [Adding File Manager inside a Tab](#adding-file-manager-inside-the-tab)

When nesting the File Manager, consider the parent container's dimensions as they will affect the File Manager's display area. You may need to adjust the width and height properties accordingly to ensure proper visibility and usability.

## Adding File Manager inside a Dialog

The following example demonstrates how to render the File Manager component inside a Dialog. When users click the browse button in the Uploader element, the File Manager opens within a Dialog component, allowing them to select files from the managed file system. Once files are selected, they can be processed according to your application's needs.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/file-dialog-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/file-dialog-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/file-dialog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/samples/file-manager/file-dialog-cs1" %}

## Adding File Manager inside a Tab

The following example demonstrates how to place the File Manager component inside the content area of a Tab element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/file-tab-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/file-tab-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/file-tab-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/file-tab-cs1" %}