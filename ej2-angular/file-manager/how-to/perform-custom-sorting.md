---
layout: post
title: Perform custom sorting in Angular File Manager | Syncfusion
description: Learn how to perform custom sorting in the Angular File Manager for the Large Icons view and Details view columns, with examples for natural sorting.
control: File Manager
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# How to perform custom sorting in Angular File Manager

The File Manager component provides a way to customize the default sort action for the LargeIconsView by defining the[sortComparer](https://ej2.syncfusion.com/angular/documentation/api/file-manager#sortcomparer) property. For sorting individual columns in the DetailsView, the [sortComparer](https://ej2.syncfusion.com/angular/documentation/api/file-manager/column#sortcomparer) property can be defined in the [columns](https://ej2.syncfusion.com/angular/documentation/api/file-manager/column) property.

>Note: To achieve natural sorting like Windows Explorer, you can import the `SortComparer` function from the `'@syncfusion/ej2-angular-filemanager'`. If you want to perform your own custom sorting, you can define your own `SortComparer` function.

The following example demonstrates how to define a custom sort comparer function to achieve natural sorting behavior for the LargeIconsView and the name column in DetailsView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/custom-sorting-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/custom-sorting-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/custom-sorting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/custom-sorting-cs1" %}