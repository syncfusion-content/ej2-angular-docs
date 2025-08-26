---
layout: post
title: Ribbon Backstage in Angular Ribbon component | Syncfusion
description:  Learn here all about Ribbon Backstage in Syncfusion Angular Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
---     

# Backstage in Angular Ribbon Component

The Angular Ribbon component includes a Backstage view, which serves as a comprehensive replacement for the traditional file menu. It is designed to display application-level information and settings, such as user details, document properties, or options pages. The Backstage view is enabled by configuring the [backStageMenu](https://ej2.syncfusion.com/angular/documentation/api/ribbon/#backstagemenu) property.

When active, backstage options are displayed in a list on the left, and the content for the selected option appears on the right.

## Adding backstage items

Define and add items to the Backstage view by populating the [items](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backStageMenuModel/#items) property. To display the Backstage, set the [visible](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backStageMenuModel/#visible) property to `true`. By default, the Backstage view is hidden.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Backstage-Items/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Backstage-Items/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Backstage-Items/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Backstage-Items" %}

## Adding footer items

To designate an item as a footer menu item, set its [isFooter](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backstageItemModel/#isfooter) property in the [items](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backStageMenuModel/#items) collection to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Footer-Items/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Footer-Items/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Footer-Items/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Footer-Items" %}

## Adding a separator

Separators are horizontal lines used to visually group related items within the Backstage view. To add a separator, set the [separator](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backstageItemModel/#separator) property of a Backstage item to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Separator/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Separator/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Separator/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Separator" %}

## Back button customization

Customize the text and icon of the Backstage view's close button using the [backButton](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backStageMenuModel/#backbutton) property. The button's text is set with the [text](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backstageBackButtonModel/#text) property and its icon with the [iconCss](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backstageBackButtonModel/#iconcss) property. The back button is displayed by setting its [visible](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backstageBackButtonModel/#visible) property to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Back-Button/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Back-Button/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Back-Button/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Back-Button" %}

## Backstage target element

The [target](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backStageMenuModel/#target) property specifies the selector for the element where the Backstage view will be displayed. The target element must have its CSS `position` set to `relative`. If it does not, the Backstage will be positioned relative to the nearest parent element that has this styling. By default, the Backstage is positioned relative to the Ribbon element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Target/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Target/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Target/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Target" %}

## Customizing with templates

The [template](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backStageMenuModel/#template) property allows for complete customization of the Backstage view's menu items and their corresponding content area.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Template/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Template/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Template" %}

## Setting width and height

The height and width of the Backstage view can be explicitly set using the [height](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backStageMenuModel/#height) and [width](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backStageMenuModel/#width) properties. If not set, the dimensions are calculated automatically based on the content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Customization/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Customization/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Customization/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Customization" %}

> [Adding Backstage events](./events#backStageItemClick)