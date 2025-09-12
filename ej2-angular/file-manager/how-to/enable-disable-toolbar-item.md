---
layout: post
title: Enable or Disable Toolbar Items in Angular File Manager | Syncfusion
description: Learn here all about Enable disable toolbar item in Syncfusion Angular File Manager component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: File Manager 
documentation: ug
domainurl: ##DomainURL##
---

# Enable or Disable Toolbar Items in Angular File Manager

The File Manager component allows you to dynamically control the availability of toolbar items by enabling or disabling them based on your application requirements. This functionality helps you manage user permissions, implement contextual actions, and create a more intuitive user interface.
You can programmatically enable or disable specific toolbar items using the following methods:

* [enableToolbarItems](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#enabletoolbaritems): Enables specified toolbar items
* [disableToolbarItems](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#disabletoolbaritems): Disables specified toolbar items

These methods accept an array of toolbar item names as strings.

The following example demonstrates how to enable and disable specific toolbar items when clicking buttons:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/toolbar-items-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/toolbar-items-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/toolbar-items-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/toolbar-items-cs1" %}
