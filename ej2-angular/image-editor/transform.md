---
layout: post
title: Transform in Angular Image editor component | Syncfusion
description: Learn here all about Transform in Syncfusion Angular Image editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Transform 
documentation: ug
domainurl: ##DomainURL##
---

# Transform in the Angular Image Editor component

The Image Editor provides a range of transformation options for manipulating both the image and its annotations. These options include rotation, flipping, zooming, and panning. These transformations offer flexibility in adjusting the image and enhancing its visual appearance. 

## Rotate an image

The Image Editor allows to rotate the image and its annotations by a specific number of degrees clockwise or anti-clockwise using [`rotate`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#rotate) method. This method takes a single parameter: the angle of rotation in degrees. A positive value will rotate the image clockwise, while a negative value will rotate it anti-clockwise. 

Here is an example of rotating an image in a button click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs18/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs18/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs18/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs18" %}

## Flip an image

The Image Editor provides the [`flip`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#flip) method, which allows you to flip both the image and its annotations either horizontally or vertically. This method takes a single parameter of type ImageEditorDirection, which specifies the direction in which the flip operation should be applied. 

The [`Direction`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/direction/) parameter accepts two values: 'Horizontal' and 'Vertical'. When you choose 'Horizontal', the image and annotations will be flipped along the horizontal axis, resulting in a mirror effect. On the other hand, selecting 'Vertical' will flip them along the vertical axis, producing a vertical mirror effect. 

Here is an example of flipping an image in a button click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs19/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs19/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs19/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs19" %}

## Zoom in or out an image 

The Image Editor allows to magnify an image using the [`zoom`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#zoom) method. This method allows one to zoom in and out of the image and provides a more detailed view of the image's hidden areas. This method takes two parameters to perform zooming. 

* zoomFactor - Specifies a value to controlling the level of magnification applied to the image. 

* zoomPoint - Specifies x and y coordinates of a point as ImageEditorPoint on image to perform zooming. 

Here is an example of zooming an image in a button click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs20/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs20/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs20/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs20" %} 

### Maximum and Minimum zoom level 

The [`maxZoomFactor`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/zoomSettingsModel/#maxzoomfactor) property is a useful feature in the Image Editor that allows you to define the maximum level of zoom permitted for an image. This property sets a limit on how much the image can be magnified, preventing excessive zooming that may result in a loss of image quality or visibility. 

By default, the [`minZoomFactor`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/zoomSettingsModel/#minzoomfactor) value is set to 10, meaning that the image can be zoomed in up to 10 times its original size. This ensures that the zooming functionality remains within reasonable bounds and maintains the integrity of the image. 

The [`maxZoomFactor`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/zoomSettingsModel/#maxzoomfactor) property allows you to specify the minimum level of zoom that is allowed for an image. By setting this property, you can prevent the image from being zoomed out beyond a certain point, ensuring that it remains visible and usable even at the smallest zoom level. 

By default, the [`maxZoomFactor`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/zoomSettingsModel/#maxzoomfactor) value is set to 0.1, meaning that the image can be zoomed out up to 10 times its original size. 

Here is an example of specifying [`minZoomFactor`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/zoomSettingsModel/#minzoomfactor) and [`maxZoomFactor`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/zoomSettingsModel/#maxzoomfactor) property in [`zoomSettings`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/zoomSettings/) options in an image editor.

## Panning an image

The Image Editor allows to pan an image when the image exceeds the canvas size or selection range. When zooming in on an image or applying a selection for cropping, it is common for the image to exceed the size of the canvas or exceed the selection range. So, the panning is used to view the entire image, by clicking on the canvas and dragging it in the direction they want to move.

### Panning event 

The [`panning`](https://ej2.syncfusion.com/angular/documentation/api/image-editor#panning) event is activated when the user begins dragging the image within the canvas. This event provide an opportunity to perform specific actions, like adjusting the position of an image, in response to the gesture of panning. And these event uses [`PanEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/panEventArgs/) to handle the panning action when the user starts dragging the image. 

The parameter available in the [`PanEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/PanEventArgs/) events are, 

* PanEventArgs.startPoint - The x and y coordinates as ImageEditorPoint for the start point. 

* PanEventArgs.endpoint - The x and y coordinates as ImageEditorPoint for the end point. 

* PanEventArgs.cancel – Specifies the boolean value to cancel the panning action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs21/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs21/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs21/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs21" %}

## Zooming event

The [`zooming`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#zooming) event is triggered when performing zooming the image. This event can be used to perform certain actions, such as updating the position of the image. This event is passed an object that contains information about the zooming event, such as the amount of zooming performed. And this event uses [`ZoomEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/zoomEventArgs/) to handle the zooming action in the image.

The parameter available in the Zooming event is, 

* ZoomEventArgs.zoomPoint - The x and y coordinates as ImageEditorPoint for the zoom point. 

* ZoomEventArgs.previousZoomFactor - The previous zoom factor applied in the image editor. 

* ZoomEventArgs.currentZoomFactor - The current zoom factor to be applied in the image editor. 

* ZoomEventArgs.cancel – Specify a boolean value to cancel the zooming action. 

* ZoomEventArgs.zoomTrigger - The type of zooming performed in the image editor.

## Rotating event 

The [`rotating`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#rotating) event is triggered when performing rotating the image. This event is passed an object that contains information about the rotating event, such as the amount of rotation performed. And this event uses [`RotateEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/rotateEventArgs/) to handle the rotating action in the image.

The parameter available in the [`rotating`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#rotating) event is, 

* RotateEventArgs.PreviousDegree: The degree of rotation before the recent rotation action was applied in the Image Editor. 

* RotateEventArgs.CurrentDegree: The current degree of rotation after the rotation action has been performed in the Image Editor. 

* RotateEventArgs.Cancel – Specifies a boolean value to cancel the rotating action. 

## Flipping event 

The [`flipping`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#flipping) event is triggered when performing flipping the image. This event is passed an object that contains information about the flipping event, such as the amount of flip performed. And this event uses [`FlipEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/flipEventArgs/) to handle the flipping action in the image.

The parameter available in the [`flipping`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#flipping) event is, 

* FlipEventArgs.Direction - The flip direction as ImageEditorDirection to be applied in the image editor. 

* FlipEventArgs.Cancel - Specifies a boolean value to cancel the flip action. 