---
layout: post
title: Annotations in Angular Linear gauge component | Syncfusion
description: Learn here all about Annotations in Syncfusion Angular Linear gauge component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Annotations 
documentation: ug
domainurl: ##DomainURL##
---

# Annotations in Angular Linear gauge component

<!-- markdownlint-disable MD013 -->

Annotations are used to mark the specific area of interest in the Linear Gauge with text, HTML elements, or images. Any number of annotations can be added to the Linear Gauge component.

## Adding annotation

To render the custom HTML elements in the Linear Gauge component, use the [`content`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation/#content) property in the [`e-annotation`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation). The annotation can be rendered either by specifying the id of the element or specifying the code to create a new element that needs to be displayed in the gauge area.

<!-- markdownlint-disable MD036 -->

 ```
<script id='fruits' type="text/x-template">
    <div id='apple'>
        <img src='src/lineargauge/images/apple.png'>
    </div>
</script>

```

```typescript

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
     <ejs-lineargauge id="gauge-container">
        <e-annotations>
            <e-annotation zIndex='1' content='#fruits' x=100 y=-70></e-annotation>
        </e-annotations>
    </ejs-lineargauge>`
})
export class AppComponent {
    ngOnInit(): void {
    }
}

```

## Customization

The following properties are used to customize the annotation.

* [`zIndex`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation/#zindex) - Bring the annotation to the front or back, when annotation overlaps with another element.
* [`axisValue`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation/#axisvalue) - To place the annotation in the specified axis value with respect to the provided axis index.
* [`axisIndex`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation/#axisindex) - To place the annotation in the specified axis with respect to the provided axis value.
* [`horizontalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation/#horizontalalignment-string) - To place the annotation horizontally.
* [`verticalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation/#verticalalignment-string) - To place the annotation vertically.
* [`x`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation/#x), [`y`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation/#y) - To place the annotation in the specified location.

### Changing the z-index

To change the stack order of an annotation element, the [`zIndex`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation/#zindex) property of the [`e-annotation`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation) can be used.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/annotations-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/linear-gauge/annotations-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/annotations-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/annotations-cs1" %}

<!-- markdownlint-disable MD036 -->

### Positioning an annotation

The annotation can be placed anywhere in the Linear Gauge by setting the pixel value to the [`x`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation/#x) and [`y`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation/#y) properties in the [`e-annotation`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/annotations-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/linear-gauge/annotations-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/annotations-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/annotations-cs2" %}

<!-- markdownlint-disable MD036 -->

### Alignment of annotation

The annotation can be aligned horizontally and vertically by using the [`horizontalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation/#horizontalalignment) and [`verticalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation/#verticalalignment) properties respectively. The possible values can be **Center**, **Far**, **Near**, and **None**. The [`horizontalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation/#horizontalalignment) and [`verticalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation/#verticalalignment) properties are not applicable when the [`x`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation/#x) and [`y`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation/#y) properties are set in the [`e-annotation`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/annotations-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/linear-gauge/annotations-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/annotations-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/annotations-cs3" %}

## Multiple annotations

Multiple annotations can be added to the Linear Gauge component by adding the multiple [`e-annotation`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation) in the [`e-annotations`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#annotations) and customization for the annotation can be done with the [`e-annotation`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/annotation).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/annotations-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/linear-gauge/annotations-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/annotations-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/annotations-cs4" %}