---
layout: post
title: Items in Angular Speed dial component | Syncfusion
description: Learn here all about Items in Syncfusion Angular Speed dial component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Items 
documentation: ug
domainurl: ##DomainURL##
---

# Items in Angular Speed dial component

The Angular Speed Dial action items can be added by using [`items`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#items) property.

| Fields | Type | Description |
|------|------|-------------|
| [`text`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/speedDialItemModel/#text) | `string` | Defines the text content of SpeedDialItem. |
| [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/speedDialItemModel/#iconcss) | `string` | Defines one or more CSS classes to include an icon or image in Speed Dial item. |
| [`disabled`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/speedDialItemModel/#disabled) | `boolean` | Defines whether to enable or disable the SpeedDialItem. |
| [`id`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/speedDialItemModel/#id) | `string` | Defines a unique value for the SpeedDialItem which can be used to identify the item in event args. |
| [`title`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/speedDialItemModel/#title) | `string` | Defines the title of SpeedDialItem to display tooltip. |

## Icons in Speed Dial items

You can customize the icon and text of Speed Dial action items using [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/speedDialItemModel/#iconcss) and [`text`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/speedDialItemModel/#text) properties.

### Icon only

You can show icon only in SpeedDial items by setting [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/speedDialItemModel/#iconcss) property. You can show tooltip on hover to show additional details to end-user by setting [`title`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/speedDialItemModel/#title) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/speed-dial/items-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/speed-dial/items-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/speed-dial/items-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/speed-dial/items-cs1" %}

### Text only

You can show only text in Speed Dial items by setting [`text`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/speedDialItemModel/#text) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/speed-dial/items-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/speed-dial/items-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/speed-dial/items-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/speed-dial/items-cs2" %}

### Icon with text

You can show icon along with text in Speed Dial items by setting [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/speedDialItemModel/#iconcss) and [`text`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/speedDialItemModel/#text) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/speed-dial/items-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/speed-dial/items-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/speed-dial/items-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/speed-dial/items-cs3" %}

### Disabled

You can disable Speed Dial items by setting [`disabled`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/speedDialItemModel/#disabled) property as `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/speed-dial/items-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/speed-dial/items-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/speed-dial/items-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/speed-dial/items-cs4" %}

## Animation

The Speed Dial items can be animated during the opening and closing of the popup action items. You can customize the animation's `effect`, `delay`, and `duration` by setting [`animation`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#animation) property. By default, Speed Dial animates with a `fade` effect and supports all [`speeddialanimation`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/speedDialAnimationEffect/) effects.

Below example demonstrates the Speed Dial items with applied Zoom effect.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/speed-dial/items-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/speed-dial/items-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/speed-dial/items-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/speed-dial/items-cs5" %}

## Template

The Speed Dial supports to customize the action items and entire pop-up container by setting [itemTemplate](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#itemtemplate) and [popupTemplate](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#popuptemplate) properties. For more details about templates, check out the link [here](https://ej2.syncfusion.com/angular/documentation/speed-dial/template/).
