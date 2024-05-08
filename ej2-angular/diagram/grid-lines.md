---
layout: post
title: Grid lines in Angular Diagram component | Syncfusion
description: Learn here all about Grid lines in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Grid lines 
documentation: ug
domainurl: ##DomainURL##
---

# Grid lines in Angular Diagram component

Gridlines are the pattern of lines drawn behind the diagram elements. It provides a visual guidance while dragging or arranging the objects on the diagram surface.

The model’s [`snapSettings`](https://ej2.syncfusion.com/angular/documentation/api/diagram#snapsettings-SnapSettingsModel) property is used to customize the gridlines and control the snapping behavior in the diagram.

## Customize the gridlines visibility

The [`snapSettings.snapConstraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/snapSettings#constraints-SnapConstraints) enables you to show/hide the gridlines. The following code example illustrates how to show or hide gridlines.

If you need to enable snapping, then inject snapping module into the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/gridLines/gridLines-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/gridLines/gridLines-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/gridLines/gridLines-cs1" %}

To show only horizontal/vertical gridlines or to hide gridlines, refer to [`Constraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/snapSettings#constraints-SnapConstraints).

## Appearance

The appearance of the gridlines can be customized by using a set of predefined properties.

* The [`horizontalGridLines`](https://ej2.syncfusion.com/angular/documentation/api/diagram/snapSettings#horizontalgridlines-GridlinesModel) and the [`verticalGridLines`](https://ej2.syncfusion.com/angular/documentation/api/diagram/snapSettings#verticalgridlines-GridlinesModel) properties allow to customize the appearance of the horizontal and vertical gridlines respectively.

* The horizontal gridlines [`lineColor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/gridlines#linecolor-string) and [`lineDashArray`](https://ej2.syncfusion.com/angular/documentation/api/diagram/gridlines#linedasharray-string) properties are used to customizes the line color and line style of the horizontal gridlines.

* The vertical gridlines [`lineColor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/gridlines#linecolor-string) and [`lineDashArray`](https://ej2.syncfusion.com/angular/documentation/api/diagram/gridlines#linedasharray-string) properties are used to customizes the line color and line style of the vertical gridlines.

The following code example illustrates how to customize the appearance of gridlines.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/gridLines/gridlinesAppearance-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/gridLines/gridlinesAppearance-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/gridLines/gridlinesAppearance-cs1" %}

## Line intervals

Thickness and the space between gridlines can be customized by using horizontal gridlines’s [`linesInterval`](https://ej2.syncfusion.com/angular/documentation/api/diagram/gridlines#lineintervals-number) and vertical gridlines’s [`linesInterval`](https://ej2.syncfusion.com/angular/documentation/api/diagram/gridlines#lineintervals-number) properties. In the lines interval collections, values at the odd places are referred as the thickness of lines and values at the even places are referred as the space between gridlines.

The following code example illustrates how to customize the thickness of lines and the line intervals.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/gridLines/gridlinesAppearance-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/gridLines/gridlinesAppearance-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/gridLines/gridlinesAppearance-cs2" %}

## Snapping

## Snap to lines

This feature allows the diagram objects to snap to the nearest intersection of gridlines while being dragged or resized. This feature enables easier alignment during layout or design.

Snapping to gridlines can be enabled/disabled with the [`snapSettings.snapConstraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/snapSettings#constraints-SnapConstraints). The following code example illustrates how to enable/disable the snapping to gridlines.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/gridLines/snapping-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/gridLines/snapping-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/gridLines/snapping-cs1" %}

## Customization of snap intervals

By default, the objects are snapped towards the nearest gridline. The gridline or position towards where the diagram object snaps can be customized with the horizontal gridlines’s [`snapInterval`](https://ej2.syncfusion.com/angular/documentation/api/diagram/gridlines#snapintervals-number) and the vertical gridlines’s [`snapInterval`](https://ej2.syncfusion.com/angular/documentation/api/diagram/gridlines#snapintervals-number) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/gridLines/snapintervals-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/gridLines/snapintervals-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/gridLines/snapintervals-cs1" %}

## Snap to objects

The snap to object provides visual cues to assist with aligning and spacing diagram elements. A node can be snapped with its neighboring objects based on certain alignments. Such alignments are visually represented as smart guides.

The [`snapObjectDistance`](https://ej2.syncfusion.com/angular/documentation/api/diagram/snapSettings/#snapobjectdistance) property allows you to define minimum distance between the selected object and the nearest object.

The [`snapAngle`](https://ej2.syncfusion.com/angular/documentation/api/diagram/snapSettings/#snapangle) property allows you to define the snap angle by which the object needs to be rotated.

The [`snapConstraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/snapSettings/#constraints) property allows you to enable or disable the certain features of the snapping, refer to `snapConstraints`.

The [`snapLineColor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/snapSettings/#snaplinecolor) property allows you to define the color of the snapline.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/gridLines/snapobjects-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/gridLines/snapobjects-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/gridLines/snapobjects-cs1" %}
