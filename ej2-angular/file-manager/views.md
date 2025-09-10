---
layout: post
title: Views in Angular File Manager component | Syncfusion
description: Learn how to use and customize different view modes (LargeIcons and Details) in the Syncfusion Angular File Manager component.
platform: ej2-angular
control: File Manager 
documentation: ug
domainurl: ##DomainURL##
---

# Views in Angular File Manager Component

The view section in the File Manager displays files and folders for users to browse and manage. The File Manager component offers two distinct view modes to present your content, each optimized for different use cases:

* [LargeIcons View](#largeicons-view) - Displays files and folders as a icons (default view)
* [Details View](#details-view) - Presents files and folders in a grid format with additional information

You can set the initial view of the File Manager using the [view](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#view) property.


## LargeIcons View

LargeIcons view is the default presentation mode that displays files and folders as a icons. This view is ideal for visual browsing and when you need to quickly identify files by their thumbnails.

The following example demonstrates the File Manager with details view.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/large-icons-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/large-icons-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/large-icons-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/large-icons-cs1" %}

## Details View


Details view displays files and folders in a grid format with additional information such as size, type, and modified date. This view is particularly useful when managing large numbers of files or when you need to sort and filter based on file properties.

Details view is an injectable module in the File Manager; therefore, it must be injected before rendering the File Manager to enable its functionality. You can set the File Manager to display in details view by setting the [view](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#view) property to 'Details'.
 
The following example demonstrates the File Manager with details view.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/details-view-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/details-view-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/details-view-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/details-view-cs1" %}