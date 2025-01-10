---
layout: post
title: Nested items in Angular File Manager component | Syncfusion
description: Learn here all about Nested items in Syncfusion Angular File Manager component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: File Manager
documentation: ug
domainurl: ##DomainURL##
---

# Nested items in Angular File Manager component

File Manager can be rendered inside other components like Tab, Dialog, and more.

* [Adding File Manager inside the Dialog](#adding-file-manager-inside-the-dialog)
* [Adding  File Manager inside the Tab](#adding-file-manager-inside-the-tab)

## Adding File Manager inside a Dialog

The following example shows the File Manager component rendered inside the Dialog. Click the browse button in the Uploader element to open the File Manager inside a Dialog component.

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

## Adding File Manager inside the Tab

The following example demonstrates that the File Manager component is placed inside the content area of a Tab element.

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