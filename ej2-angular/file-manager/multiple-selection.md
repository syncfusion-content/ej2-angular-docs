---
layout: post
title: Multiple selection in Angular File manager component | Syncfusion
description: Learn here all about Multiple selection in Syncfusion Angular File manager component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Multiple selection 
documentation: ug
domainurl: ##DomainURL##
---

# Multiple selection in Angular File manager component

The file manager allows you to select multiple files by enabling the [allowMultiSelection](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#allowmultiselection) property (enabled by default). The multiple selection can be done by pressing the `Ctrl` key or `Shift` key and selecting the files. The check box can also be used to do multiple selection. `Ctrl + A` can be used to select all files in the current directory. The [fileSelect](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#fileselect) event will be triggered when the items of file manager control is selected or unselected.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/multiselect-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/multiselect-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/multiselect-cs1" %}

>Note: The File Manager has support to select files and folders initially or dynamically by specifying their names in [selectedItems](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#selecteditems) property.