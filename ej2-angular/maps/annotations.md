---
layout: post
title: Annotations in Angular Maps component | Syncfusion
description: Learn here all about Annotations in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Annotations 
documentation: ug
domainurl: ##DomainURL##
---

# Annotations in Angular Maps component

<!-- markdownlint-disable MD013 -->

Annotations are used to mark the specific area of interest in the Maps with texts, shapes, or images. Any number of annotations can be added to the Maps component.

## Annotation

By using the [`content`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel/#content) property of [`annotations`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel), text content or id of an element or an HTML string can be specified to render a new HTML element in Maps.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs1" %}

## Annotation customization

### Changing the z-index

The stack order of an annotation element can be changed using the [`zIndex`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel/#zindex) property in the [`annotations`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs2" %}

### Positioning an annotation

Annotations can be placed anywhere in the Maps by specifying pixel or percentage values to the [`x`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel/#x) and [`y`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel/#y) properties in the [`annotations`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs3" %}

### Alignment of an annotation

Annotations can be aligned using the [`horizontalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel/#horizontalalignment) and [`verticalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel/#verticalalignment) properties in the [`annotations`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel). The possible values can be **Center**, **Far**, **Near** and **None**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs4" %}

## Multiple Annotation

Multiple annotations can be added to the Maps using the [`annotations`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel) in which the properties of annotations are added as an array. The customization for the annotations can be done with the [`annotations`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs5" %}