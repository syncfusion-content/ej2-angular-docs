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

Annotations allow marking specific areas of interest on a map by adding custom content such as text, shapes, images, or HTML elements. Unlike markers and data labels, annotations provide flexibility to overlay any custom HTML content at precise locations. Multiple annotations can be added to the Maps component.

## Adding an annotation

The [`content`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel#content) property of [`annotations`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel), accepts text content, the ID of an HTML element, or an HTML string to render custom content on the map.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs1" %}

## Annotation customization

### Changing the z-index

The [`zIndex`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel#zindex) property in the [`annotations`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel) controls the stack order of annotation elements. A higher z-index value places the annotation above other Maps elements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs2" %}

### Positioning an annotation

Annotations can be placed anywhere in the Maps by specifying pixel or percentage values to the [`x`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel#x) and [`y`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel#y) properties in the [`annotations`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs3" %}

### Alignment of an annotation

Annotations can be aligned using the [`horizontalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel#horizontalalignment) and [`verticalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel#verticalalignment) properties in the [`annotations`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel). The supported values are **Center**, **Far**, **Near**, and **None**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs4" %}

## Multiple annotations

Multiple annotations can be added to the Maps component by defining an array of annotation objects in the [`annotations`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel) property. Each annotation can be customized individually using the [`annotations`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel) settings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs5" %}

## Creating custom annotation templates

Initialize the Maps component with annotation option, text content or ID of an HTML element or an HTML string can be specified to render a new element that needs to be displayed in the Maps by using the [`content`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel#content) property. To specify the content position with [`x`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel#x) and [`y`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel#y) properties as mentioned in the following example.

[`app.module.ts`]

```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MapsModule } from '@syncfusion/ej2-angular-maps';
import { AnnotationsService } from '@syncfusion/ej2-angular-maps';


@NgModule({
  imports:      [ BrowserModule,MapsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AnnotationsService]
})
export class AppModule { }
```

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs41/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs41/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs41" %}