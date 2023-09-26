---
layout: post
title: Adding custom item to toolbar in Angular File manager component | Syncfusion
description: Learn here all about Adding custom item to toolbar in Syncfusion Angular File manager component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Adding custom item to toolbar 
documentation: ug
domainurl: ##DomainURL##
---

# Adding custom item to toolbar in Angular File manager component

You can modify the items displayed in the toolbar by utilizing the [toolbarItems](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#toolbaritems) API. To display both default and customized items, it's essential to assign a unique **name** to each item. Additionally, you have the flexibility to alter the default items by adjusting properties such as **tooltipText, iconCss, Text, suffixIcon** and more. This level of customization allows you to tailor the toolbar to your specific requirements and design preferences. The names used in the code example below serve as unique identifiers for default toolbar items, while custom items can be assigned any unique name value to distinguish them from the defaults.

For instance, here's an example of how to add a custom checkbox to the toolbar using the **template** property. Here we have modified the default `New Folder` item and added a custom toolbar item for selection.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/toolbar-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/file-manager/toolbar-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/toolbar-cs1" %}