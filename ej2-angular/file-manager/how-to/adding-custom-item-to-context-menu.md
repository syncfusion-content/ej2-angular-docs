---
layout: post
title: Adding custom item to context menu in Angular File manager component | Syncfusion
description: Learn here all about Adding custom item to context menu in Syncfusion Angular File manager component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Adding custom item to context menu 
documentation: ug
domainurl: ##DomainURL##
---

# Adding custom item to context menu in Angular File manager component

The context menu can be customized using the [contextMenuSettings](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#contextmenusettings), [menuOpen](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#menuopen), and [menuClick](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#menuclick) events.

The following example shows adding a custom item in the context menu.

The [contextMenuSettings](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#contextmenusettings) is used to add new menu item. The [menuOpen](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#menuopen) event is used to add the icon to the new menu item. The [menuClick](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#menuclick) event is used to add an event handler to the new menu item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/contextmenu-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/file-manager/contextmenu-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/contextmenu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/contextmenu-cs1" %}
