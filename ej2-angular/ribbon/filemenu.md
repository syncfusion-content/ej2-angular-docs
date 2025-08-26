---
layout: post
title: File Menu in Angular Ribbon component | Syncfusion
description:  Learn here all about File Menu in Syncfusion Angular Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
---     

# File Menu in the Angular Ribbon

The Syncfusion Angular Ribbon component includes a built-in file menu that allows you to add menu items for performing specific actions like creating, opening, or saving documents. The file menu is highly configurable and can be enabled by defining the [fileMenu](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonFileMenu/) property.

## Visibility 

The visibility of the file menu can be controlled by setting the [visible](https://ej2.syncfusion.com/angular/documentation/api/ribbon/fileMenuSettingsModel/#visible) property to `true`. By default, the file menu is hidden.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Visibility/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Visibility/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Visibility/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Visibility" %}

## Adding Menu Items

Menu items are added to the file menu through the [menuItems](https://ej2.syncfusion.com/angular/documentation/api/ribbon/fileMenuSettingsModel/#menuitems) property, which accepts an array of [MenuItemModel](https://ej2.syncfusion.com/angular/documentation/api/menu/menuItemModel/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/MenuItems/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/MenuItems/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/MenuItems/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/MenuItems" %}

## Open submenu on click

By default, a submenu expands when the user hovers over its parent item. This behavior can be changed to expand on a click by setting the [showItemOnClick](https://ej2.syncfusion.com/angular/documentation/api/ribbon/fileMenuSettingsModel/#showitemonclick) property to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/SubmenuOnClick/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/SubmenuOnClick/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/SubmenuOnClick/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/SubmenuOnClick" %}

## Custom Header Text

The header text can be customized by defining new content in the[text](https://ej2.syncfusion.com/angular/documentation/api/ribbon/fileMenuSettingsModel/#text) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Text/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Text/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Text/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Text" %}