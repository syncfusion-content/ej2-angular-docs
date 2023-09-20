---
layout: post
title: Ribbon Backstage in Angular Ribbon component | Syncfusion
description:  Learn here all about Ribbon Backstage in Syncfusion Angular Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
---     

# Ribbon Backstage

The Ribbon supports backstage view which is an addition to the traditional file menu. It displays information like application settings, user details, etc. The backstage view can be enabled by setting the [backStageMenu](https://ej2.syncfusion.com/angular/documentation/api/ribbon#backstagemenu) property.

The backstage view options are displayed on the left, while the content of each option is shown on the right.

## Adding backstage items

The menu items can be added to the backstage view by using the [items](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backStageMenuModel/#items) property. You can show the backstage view by setting the [visible](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backStageMenuModel/#visible) property to `true`. By default, the backstage view is hidden.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Backstage-Items/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/Backstage-Items/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Backstage-Items/app/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Backstage-Items/app/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Backstage-Items" %}

## Adding footer items

You can use the [isFooter](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backstageItemModel/#isfooter) property in the [items](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backStageMenuModel/#items) collection to add the backstage view footer items. By default, the value is false.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Footer-Items/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/Footer-Items/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Footer-Items/app/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Footer-Items/app/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Footer-Items" %}

## Adding separator

The separators are horizontal lines used to separate the backstage view items. You can use the [separator](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backstageItemModel/#separator) property to split the menu items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Separator/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/Separator/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Separator/app/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Separator/app/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Separator" %}

## Back button

You can use the [backButton](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backStageMenuModel/#backbutton) property to customize the text and icon of the close button using the [text](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backstageBackButtonModel/#text) and [iconCss](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backstageBackButtonModel/#iconcss) property. You can show the back button by setting the [visible](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backstageBackButtonModel/#visible) property to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Back-Button/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/Back-Button/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Back-Button/app/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Back-Button/app/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Back-Button" %}

## Backstage target

The [target](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backStageMenuModel/#target) property specifies the element selector in which backstage will be displayed. The target element should have the position as relative, else the backstage will be positioned nearest to the relative element. By default, the backstage is positioned to ribbon element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Target/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/Target/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Target/app/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Target/app/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Target" %}

## Template

You can use the [template](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backStageMenuModel/#template) property to modify the backstage view menu items and their contents.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Template/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/Template/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Template/app/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Template/app/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Template" %}

## Setting width and height

You can customize the height and width of the backstage view using the [height](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backStageMenuModel/#height) and [width](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backStageMenuModel/#width) property. By default, dimensions are set based on the content added.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Customization/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/Customization/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Customization/app/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Customization/app/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Customization" %}

> [Adding Backstage events](./events#backStageItemClick)