---
layout: post
title: Annotation in Angular Image editor component | Syncfusion
description: Learn here all about Annotation in Syncfusion Angular Image editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Annotation 
documentation: ug
domainurl: ##DomainURL##
---

# Annotation in the Angular Image Editor component

The Angular Image Editor allows adding annotations to the image, including text, freehand drawings, and shapes like rectangles, ellipses, arrows, paths, and lines. This gives the flexibility to mark up the image with notes, sketches, and other visual elements as needed. These annotation tools can help to communicate and share ideas more effectively. 

## Text annotation

The text annotation feature in the Image Editor provides the capability to add and customize labels, captions, and other text elements directly onto the image. With this feature, you can easily insert text at specific locations within the image and customize various aspects of the text to meet your requirements. 

You have control over the customization options including text content, font family, font style and font size for the text annotation.

### Add a text

The [`drawText`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawtext) method in the Angular Image Editor allows you to insert a text annotation into the image with specific customization options. This method accepts the following parameters:

* x: Specifies the x-coordinate of the text, determining its horizontal position within the image. 

* y: Specifies the y-coordinate of the text, determining its vertical position within the image. 

* text: Specifies the actual text content to be added to the image. 

* fontFamily: Specifies the font family of the text, allowing you to choose a specific typeface or style for the text. 

* fontSize: Specifies the font size of the text, determining its relative size within the image. 

* bold: Specifies whether the text should be displayed in bold style. Set to true for bold text, and false for regular text. 

* italic: Specifies whether the text should be displayed in italic style. Set to true for italic text, and false for regular text. 

* color: Specifies the font color of the text, allowing you to define the desired color using appropriate color values or names.

By utilizing the [`drawText`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawtext) method with these parameters, you can precisely position and customize text annotations within the image. This provides the flexibility to add labels, captions, or other text elements with specific font styles, sizes, and colors, enhancing the visual presentation and clarity of the image. 

Here is an example of adding a text in a button click using [`drawText`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawtext) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs1" %}

### Multiline text

The [`drawText`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawtext) method in the Angular Image Editor component is commonly used to insert text annotations into an image. If the provided text parameter contains a newline character (\n), the text will be automatically split into multiple lines, with each line appearing on a separate line in the annotation. 

Here is an example of adding a multiline text in a button click using [`drawText`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawtext) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs26/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs26/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs26/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs26" %}

### Delete a text

[`deleteShape`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#deleteshape) method in the Angular Image Editor allows you to remove a text annotation from the image editor. To use this method, you need to pass the [`shapeId`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#shapeid) of the annotation as a parameter. 

The [`shapeId`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#shapeid) is a unique identifier assigned to each text annotation within the image editor. It serves as a reference to a specific annotation, enabling targeted deletion of the desired text element. By specifying the shapeId associated with the text annotation you want to remove, you can effectively delete it from the image editor.

To retrieve the inserted text annotations, you can utilize the [`getShapeSetting`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#getshapesetting) method, which provides a collection of annotations represented by [`ShapeSettings`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/shapeSettings/). This method allows you to access and work with the annotations that have been inserted into the image.

Here is an example of deleting a text in a button click using [`deleteShape`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#deleteshape) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs25/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs25/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs25/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs25" %}

### Customize font family and text color

The [shapeChanging](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#shapechanging) event in the Image Editor component is triggered when a text annotation is being modified or changed through the toolbar interaction. This event provides an opportunity to make alterations to the text's color and font family by adjusting the relevant properties. 

By leveraging the [shapeChanging](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#shapechanging) event, you can enhance the customization options for text annotations and provide a more tailored and interactive experience within the Image Editor component. 

Here is an example of changing the text’s color and its font family using the [shapeChanging](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#shapechanging) event. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs32/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs32/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs32/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs32" %}

## Freehand drawing

The Freehand Draw annotation tool in the Angular Image Editor component is a versatile feature that allows users to draw and sketch directly on the image using mouse or touch input. This tool provides a flexible and creative way to add freehand drawings or annotations to the image. 

The [`freehandDraw`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#freehanddraw) method is used to enable or disable the freehand drawing option in the Angular Image Editor component. 

Here is an example of using the [`freeHandDraw`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#freehanddraw) method in a button click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs2" %}

### Adjust the stroke width and color 

The [shapeChanging](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#shapechanging) event in the Angular Image Editor component is triggered when a freehand annotation is being modified or changed through the toolbar interaction. This event provides an opportunity to make alterations to the freehand annotation's color and stroke width by adjusting the relevant properties. 

By leveraging the [shapeChanging](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#shapechanging) event, you can enhance the customization options for freehand annotations and provide a more tailored and interactive experience within the Image Editor component. 

Here is an example of changing the freehand draw stroke width and color using the [shapeChanging](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#shapechanging) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs4" %}

### Delete a freehand drawing

The [`deleteShape`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#deleteshape) method in the Angular Image Editor allows you to remove a freehand annotation from the image editor. To use this method, you need to pass the [`shapeId`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#shapeid) of the annotation as a parameter. 

The [`shapeId`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#shapeid) is a unique identifier assigned to each freehand annotation within the image editor. It serves as a reference to a specific annotation, enabling targeted deletion of the desired annotation. By specifying the [`shapeId`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#shapeid) associated with the freehand annotation you want to remove, you can effectively delete it from the image editor.

To retrieve the inserted freehand annotations, you can utilize the [`getShapeSetting`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#getshapesetting) method, which provides a collection of annotations represented by [`ShapeSettings`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/shapeSettings/). This method allows you to access and work with the annotations that have been inserted into the image.

Here is an example of deleting a freehand annotation in a button click using [`deleteShape`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#deleteshape) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs26/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs26/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs26/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs26" %}

## Shape annotation

The Image Editor component provides the ability to add shape annotations to an image. These shape annotations include rectangles, ellipses, arrows, paths, and lines, allowing you to highlight, emphasize, or mark specific areas or elements within the image.

### Add a rectangle /ellipse / line / arrow / path

The [`drawRectangle`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawrectangle)  method is used to insert a rectangle to the Angular Image Editor component. Rectangle annotations are valuable tools for highlighting, emphasizing, or marking specific areas of an image to draw attention or provide additional context.

The [`drawRectangle`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawrectangle) method in the Angular Image Editor component takes seven parameters to define the properties of the rectangle annotation: 

* x: Specifies the x-coordinate of the top-left corner of the rectangle. 

* y: Specifies the y-coordinate of the top-left corner of the rectangle. 

* width: Specifies the width of the rectangle. 

* height: Specifies the height of the rectangle. 

* strokeWidth: Specifies the stroke width of the rectangle's border. 

* strokeColor: Specifies the stroke color of the rectangle's border. 

* fillColor: Specifies the fill color of the rectangle.

The [`drawEllipse`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawellipse) method is used to insert a ellipse to the Angular Image Editor component. Ellipse annotations are valuable for highlighting, emphasizing, or marking specific areas of an image.

The [`drawEllipse`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawellipse) method in the Image Editor component takes seven parameters to define the properties of the ellipse annotation: 

* x: Specifies the x-coordinate of the center of the ellipse. 

* y: Specifies the y-coordinate of the center of the ellipse. 

* radiusX: Specifies the horizontal radius (radiusX) of the ellipse. 

* radiusY: Specifies the vertical radius (radiusY) of the ellipse. 

* strokeWidth: Specifies the width of the ellipse's stroke (border). 

* strokeColor: Specifies the color of the ellipse's stroke (border). 

* fillColor: Specifies the fill color of the ellipse. 

The [`drawLine`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawline) method is used to insert a line to the Angular Image Editor component. Line annotations are valuable for highlighting, emphasizing, or marking specific areas of an image.

The [`drawLine`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawline) method in the Angular Image Editor component takes seven parameters to define the properties of the ellipse annotation: 

* startX - Specifies the x-coordinate of the start point. 

* startY - Specifies the y-coordinate of the start point. 

* endX - Specifies the x-coordinate of the end point. 

* endY - Specifies the y-coordinate of the end point. 

* strokeWidth - Specifies the stroke width of the line. 

* strokeColor - Specifies the stroke color of the line. 


The [`drawArrow`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawarrow) method is used to insert a arrow to the Angular Image Editor component. Arrow annotations are valuable for highlighting, emphasizing, or marking specific areas of an image.

The [`drawArrow`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawarrow) method in the Angular Image Editor component takes seven parameters to define the properties of the ellipse annotation: 

* startX - Specifies the x-coordinate of the start point. 

* startY - Specifies the y-coordinate of the start point. 

* endX - Specifies the x-coordinate of the end point. 

* endY - Specifies the y-coordinate of the end point. 

* strokeWidth - Specifies the stroke width of the arrow. 

* strokeColor - Specifies the stroke color of the arrow. 

* arrowStart - Specifies the arrowhead as ImageEditorArrowHeadType at the start of arrow.

* arrowEnd - Specifies the arrowhead as ImageEditorArrowHeadType at the end of the arrow.

The [`drawPath`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawpath) method is used to insert a path to the Angular Image Editor component. Path annotations are valuable for highlighting, emphasizing, or marking specific areas of an image.

The [`drawPath`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawpath) method in the Angular Image Editor component takes three parameters to define the properties of the ellipse annotation: 

* points - Specifies collection of x and y coordinates as ImageEditorPoint to draw a path. 

* strokeWidth - Specifies the stroke width of the path. 

* strokeColor - Specifies the stroke color of the path. 

Here is an example of inserting rectangle, ellipse, arrow, path, and line in a button click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/image-editor/default-cs3" %}

## Delete a shape 

The [`deleteShape`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#deleteshape) method in the Angular Image Editor allows you to remove a shape annotation from the image editor. To use this method, you need to pass the [`shapeId`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#shapeid) of the annotation as a parameter. 

The [`shapeId`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#shapeid) is a unique identifier assigned to each shape annotation within the image editor. It serves as a reference to a specific annotation, enabling targeted deletion of the desired annotation. By specifying the [`shapeId`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#shapeid) associated with the shape annotation you want to remove, you can effectively delete it from the image editor.

To retrieve the inserted shape annotations, you can utilize the [`getShapeSetting`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#getshapesetting) method, which provides a collection of annotations represented by [`ShapeSettings`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/shapeSettings/). This method allows you to access and work with the annotations that have been inserted into the image.

Here is an example of deleting rectangle, ellipse, arrow, path, and line in a button click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/image-editor/default-cs5" %}


