---
layout: post
title: Adding custom item in Angular File Manager component | Syncfusion
description: Learn how to add, customize, and implement custom toolbar items in Angular File Manager component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: File Manager
documentation: ug
domainurl: ##DomainURL##
---

# Adding custom item to toolbar in Angular File Manager component

The File Manager component allows you to customize the toolbar by modifying existing items or adding new custom items to enhance functionality according to your application requirements.

## Customizing the toolbar items

You can modify the items displayed in the toolbar by using the [toolbarItems](https://ej2.syncfusion.com/angular/documentation/api/file-manager#toolbaritems) API. To display both default and customized items, it's Essential<sup style="font-size:70%">&reg;</sup> to assign a unique **name** to each item. Additionally, you have the flexibility to alter the default items by adjusting properties such as **tooltipText, iconCss, Text, suffixIcon** and more. This level of customization allows you to tailor the toolbar to your specific requirements and design preferences. The names used in the code example below serve as unique identifiers for default toolbar items, while custom items can be assigned any unique name value to distinguish them from the defaults.

The following example demonstrates how to:
1. Modify the default `New Folder` item by changing its properties
2. Add a custom checkbox item to the toolbar using the **template** property

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/toolbar-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/toolbar-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/toolbar-cs1" %}