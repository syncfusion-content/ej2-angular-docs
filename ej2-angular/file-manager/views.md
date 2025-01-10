---
layout: post
title: Views in Angular File Manager component | Syncfusion
description: Learn here all about Views in Syncfusion Angular File Manager component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: File Manager 
documentation: ug
domainurl: ##DomainURL##
---

# Views in Angular File Manager component

View is the section where the files and folders are displayed for the user to browse. The [view](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#view) API can also be used to change the initial view of the File Manager.

 The File Manager has two types of [views](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#view) to display the files and folders.

* [LargeIcons View](#largeicons-view)
* [Details View](#details-view)

## LargeIcons View

By Default, File Manager is rendered with largeicons view. The following example demonstrates this.

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

Details view is an injectable module in the File Manager; therefore, it should be injected before rendering the File Manager to avail its functionality. The default appearance of the File Manager can be changed from largeicons to details view by using the [view](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#view) property. The following example demonstrates the File Manager with details view.

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