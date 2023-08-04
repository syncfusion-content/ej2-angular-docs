---
layout: post
title: File Menu in Angular Ribbon component | Syncfusion
description:  Learn here all about File Menu in Syncfusion Angular Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
---     

# File Menu

The Ribbon component provides a built-in file menu that allows you to add menu items for performing specific actions. The file menu can be enabled by setting the [fileMenu](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonFileMenu/) property.

## Visibility 

You can show the file menu by setting the [visible](https://ej2.syncfusion.com/angular/documentation/api/ribbon/fileMenuSettingsModel/#visible) property to `true`. By default, the file menu is hidden.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Visibility/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/Visibility/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Visibility/app/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Visibility/app/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Visibility" %}

## Adding menu items

The menu items can be added to the file menu using the [menuItems](https://ej2.syncfusion.com/angular/documentation/api/ribbon/fileMenuSettingsModel/#menuitems) property as an array of [MenuItemModel](https://ej2.syncfusion.com/angular/documentation/api/menu/menuItemModel/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/MenuItems/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/MenuItems/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/MenuItems/app/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/MenuItems/app/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/MenuItems" %}

## Open submenu on click

You can open the submenu on menu item click, by setting the [showItemOnClick](https://ej2.syncfusion.com/angular/documentation/api/ribbon/fileMenuSettingsModel/#showitemonclick) property to `true`. By default, the submenu will open on mouse hover.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/SubmenuOnClick/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/SubmenuOnClick/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/SubmenuOnClick/app/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/SubmenuOnClick/app/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/SubmenuOnClick" %}

## Custom header text

You can define the file menu header text content by using the [text](https://ej2.syncfusion.com/angular/documentation/api/ribbon/fileMenuSettingsModel/#text) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Text/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/Text/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Text/app/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Text/app/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Text" %}