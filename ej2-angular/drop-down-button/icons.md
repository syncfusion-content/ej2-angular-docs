---
layout: post
title: Icons in Angular Dropdown Menu | Syncfusion
description: Add and position icons on Angular Dropdown Menu buttons using iconCss and customize placement with iconPosition.
platform: ej2-angular
control: Icons 
documentation: ug
domainurl: ##DomainURL##
---

# Icons in Angular Dropdown Menu

## Angular Dropdown Menu icons

Angular Dropdown Menu can have an icon to provide the visual representation of the action. To place the icon on a Angular Dropdown Menu, set the [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button/#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is positioned to the left side of the Angular Dropdown Menu. You can customize the icon's position using the [`iconPosition`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button/#iconposition) property.

In the following example, the Angular Dropdown Menu with default iconPosition and iconPosition as `Top` is showcased.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/drop-down-button/dd-icons-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/drop-down-button/dd-icons-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/drop-down-button/dd-icons-cs1" %}

### Icon only Angular Dropdown Menu

Icon only Angular Dropdown Menu can be achieved by using [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button/#iconcss) property and to hide drop
down arrow `e-caret-hide` class is added using [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button/#cssclass) property.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/drop-down-button/icon-only-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/drop-down-button/icon-only-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/drop-down-button/icon-only-cs1" %}

> The Essential<sup style="font-size:70%">&reg;</sup> JS 2 provides a set of icons that can be loaded by applying `e-icons` class name to the element.
You can also use third party icons on the Angular Dropdown Menu using the [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button/#iconcss) property.

### Angular Dropdown Menu with sprite image

Sprite images can be loaded in Angular Dropdown Menu instead of font icons using [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button/#iconcss) property.

In this following example, `e-image` class is added with background url of the sprite image along with X and Y positions. The `width` and `height` of the element set as `32px`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/drop-down-button/sprite-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/drop-down-button/sprite-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/drop-down-button/sprite-cs1" %}

> The Essential<sup style="font-size:70%">&reg;</sup> JS 2 provides a set of icons that can be loaded by applying `e-icons` class name to the element.
You can also use third party icons on the Angular Dropdown Menu using the [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button/#iconcss) property.

## Vertical button

Vertical button in Angular Dropdown Menu can be achieved by adding `e-vertical` class
using [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button/#cssclass) property.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/drop-down-button/vertical-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/drop-down-button/vertical-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/drop-down-button/vertical-cs1" %}

## See Also

* [Dropdown popup with icons](./popup-items#icons)
* [Customized icon size](./how-to/customize-icon-and-width)