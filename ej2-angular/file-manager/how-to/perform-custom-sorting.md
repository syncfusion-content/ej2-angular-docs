---
layout: post
title: Perform custom sorting in Angular FileManager component | Syncfusion
description: Learn here all about How to perform custom sorting in Syncfusion Angular FileManager component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Perform custom sorting 
documentation: ug
domainurl: ##DomainURL##
---

# Perform custom sorting in Angular FileManager component

The FileManager component provides a way to customize the default sort action for the LargeIconsView by defining the [sortComparer](https://ej2.syncfusion.com/angular/documentation/api/file-manager#sortcomparer) property and for sorting individual columns in the DetailsView by defining the [sortComparer](https://ej2.syncfusion.com/angular/documentation/api/file-manager/column/#sortcomparer) property in the [columns](https://ej2.syncfusion.com/angular/documentation/api/file-manager/column/) property.

>Note: To achieve natural sorting like Windows Explorer, you can import the `SortComparer` function from the `'@syncfusion/ej2-angular-filemanager'`. If you want to perform your own custom sorting, you can define your own `SortComparer` function.

The following example demonstrates how to define custom sort comparer function to achieve natural sorting behavior for the LargeIconsView and name column in DetailsView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/custom-sorting-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/file-manager/custom-sorting-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/custom-sorting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/custom-sorting-cs1" %}