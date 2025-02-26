---
layout: post
title: Grid lines in Angular Diagram component | Syncfusion®
description: Learn here all about Grid lines in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Grid lines 
documentation: ug
domainurl: ##DomainURL##
---

# Grid lines in EJ2 Angular Diagram component

Gridlines are crisscross lines drawn in diagram page like the lines on traditional graph paper. It helps to position the diagram elements on the diagram page.e.

The model’s [`snapSettings`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#snapsettings) property is used to customize the gridlines and control the snapping behavior in the diagram.

## Customize the gridlines visibility

The [`snapConstraints`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/snapSettings/#constraints) enables you to show/hide the gridlines. The following code example illustrates how to show or hide gridlines.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/gridLines/gridLines-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/gridLines/gridLines-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/gridLines/gridLines-cs1" %}

N>If you want to enable snapping, then inject snapping module into the diagram.

To show only horizontal/vertical gridlines or to hide gridlines, refer to [`Constraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/snapSettings#constraints-SnapConstraints).

## Appearance

The appearance of the gridlines can be customized by using a set of predefined properties.

* The [`horizontalGridLines`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/snapSettings/#horizontalgridlines) and the [`verticalGridLines`](https://ej2.syncfusion.com/angular/documentation/api/diagram/snapSettings#verticalgridlines) properties allow to customize the appearance of the horizontal and vertical gridlines respectively.

* The horizontal gridlines [`lineColor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/gridlines#linecolor) and [`lineDashArray`](https://ej2.syncfusion.com/angular/documentation/api/diagram/gridlines#linedasharray) properties are used to customizes the line color and line style of the horizontal gridlines.

* The vertical gridlines [`lineColor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/gridlines#linecolor) and [`lineDashArray`](https://ej2.syncfusion.com/angular/documentation/api/diagram/gridlines#linedasharray) properties are used to customizes the line color and line style of the vertical gridlines.

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

![Line appearance](./images/line-appearance.png)

## Line intervals

Thickness and the space between gridlines can be customized by using horizontal gridlines’s [`linesInterval`](https://ej2.syncfusion.com/angular/documentation/api/diagram/gridlines/#lineintervals) and vertical gridlines’s [`linesInterval`](https://ej2.syncfusion.com/angular/documentation/api/diagram/gridlines/#lineintervals) properties. In the lines interval collections, values at the odd places are referred as the thickness of lines and values at the even places are referred as the space between gridlines.

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

![Line interval](./images/line-interval.png)

## Dot grid patterns

The appearance of the grid lines can be changed into dots by settings [`gridType`](https://ej2.syncfusion.com/angular/documentation/api/diagram/gridType/) of `snapSettings` as Dots.  By default, the grid type is **Lines**.

The following code illustrates how to render grid patterns as Dots.

If you need to enable snapping, then inject snapping module into the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/gridLines/dottedgridline-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/gridLines/dottedgridline-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/gridLines/dottedgridline-cs1" %}

![Dot Grid](./images/grid-dots.png)

## Snapping

When you draw, resize, or move a diagram element on the page, you can set it to align or snap to the nearest intersection, regardless of whether the grid is visible.

## Snap to lines

This feature allows the diagram objects to snap to the nearest intersection of gridlines while being dragged or resized. This feature enables easier alignment during layout or design.

Snapping to gridlines can be enabled or disabled using the [`snapConstraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/snapSettings/#constraints)  property of the SnapSettings class. The default value is All.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/gridLines/snapping-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/gridLines/snapping-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/gridLines/snapping-cs1" %}

![Snap to lines](./images/snapToLines.gif)

## Snap to objects

The snap-to-object feature provides visual cues to assist with aligning and spacing diagram elements. A node can snap to its neighboring objects based on specific alignments, such as the same size and position. These alignments are visually represented by smart guide lines in a cyan shade, with the color code '#07EDE1'.

The [`snapObjectDistance`](https://ej2.syncfusion.com/angular/documentation/api/diagram/snapSettings/#snapobjectdistance) property allows you to define minimum distance between the selected object and the nearest object. By default, the snap object distance is set to 5.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/gridLines/snapobjects-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/gridLines/snapobjects-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/gridLines/snapobjects-cs1" %}

![Snap to object](./images/snapToObject.gif)

## Snap Angle

The [`snapAngle`](https://ej2.syncfusion.com/angular/documentation/api/diagram/snapSettings/#snapangle) property defines the increments by which an object can be rotated within a diagram. 

For example, if the snapAngle is set to 15 degrees, an object can only be rotated to angles that are multiples of 15 degrees, such as 15°, 30°, 45°, and so on. This ensures precise angule alignment and consistent object positioning, enhancing the overall design accuracy. By default, the snap angle is set to 5°

The following code example demonstrates how to set the `snapAngle` property and update it dynamically.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/gridLines/snapangle-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/gridLines/snapangle-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/gridLines/snapangle-cs1" %}

![Snap Angle](./images/snapAngle.gif)

## Snap line color

The [`snapLineColor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/snapSettings/#snaplinecolor) property allows you to define the color of the snapline used in the diagram. By customizing the snapline color, you can enhance the visual contrast and visibility of these guides, making it easier to achieve accurate alignment. 

This property accepts color values in various formats, such as hexadecimal, RGB, or predefined color names, providing flexibility in how you choose to represent the snaplines in your diagramming application. By default the snap line color is set to `'#07EDE1'`.

The following code example demonstrates how to set the `snapLineColor` property and update it dynamically.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/gridLines/snapcolor-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/gridLines/snapcolor-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/gridLines/snapcolor-cs1" %}

## Customization of snap intervals

By default, the objects are snapped towards the nearest gridline. The gridline or position towards where the diagram object snaps can be customized with the horizontal gridlines’s [`snapInterval`](https://ej2.syncfusion.com/angular/documentation/api/diagram/gridlines/#snapintervals) and the vertical gridlines’s [`snapInterval`](https://ej2.syncfusion.com/angular/documentation/api/diagram/gridlines/#snapintervals) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/gridLines/snapintervals-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/gridLines/snapintervals-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/gridLines/snapintervals-cs1" %}

## Snap constraints

The [`snapConstraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/snapSettings/#constraints) property allows you to enable or disable the certain features of the snapping, for detailed information refer to [`constraints`](https://ej2.syncfusion.com/angular/documentation/diagram/constraints#snap-constraints).
