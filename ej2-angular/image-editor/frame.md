---
layout: post
title: Frame in Angular Image Editor | Syncfusion
description: Add decorative borders to images in the Syncfusion Angular Image Editor using mat, bevel, line, hook, and inset frame types with the drawFrame method.
platform: ej2-angular
control: Frame 
documentation: ug
domainurl: ##DomainURL##
---

# Frame in Angular Image Editor

The frame feature in an Image Editor provides users with the capability to add decorative borders or frames around their images. Frames are a visual design element that can enhance the overall appearance and appeal of an image.

## Apply a frame to the image

The [`drawFrame`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#drawframe) method is a function designed to enable the application of various frame options to an image. This method simplifies the process of adding decorative frames, such as mat, bevel, line, hook, and inset, to an image by allowing users to specify their desired frame type.

Depending on the frame type selected, users may have additional customization options, such as adjusting the frame's thickness, color, texture, or other attributes. This allows for fine-tuning the appearance of the frame to match the image's theme or the user's preferences.

The `drawFrame` method in the Image Editor control takes nine parameters to define the properties of the frame:

* frameType: Specifies the frame type (FrameType enum) to apply to the image. Supported values are `Mat`, `Bevel`, `Line`, `Hook`, and `Inset`.
* color: Specifies the color (string) for the frame.
* gradientColor: Specifies the gradient color (string) for the frame.
* size: Specifies the size (number) of the frame.
* inset: Specifies the inset value (number) for line, hook, and inset type frames.
* offset: Specifies the offset value (number) for line and inset type frames.
* borderRadius: Specifies the border radius (number) for line type frames.
* frameLineStyle: Specifies the frame line style for line type frames.
* lineCount: Specifies the line count (number) for the line type frame.

In the following example, you can use the `drawFrame` method in the button click event.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/image-editor/default-cs35/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs35/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/image-editor/default-cs35" %}

## Frame changing event

The [`frameChanging`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#framechange) event is triggered when applying a frame to the image. This event provides information encapsulated within an object, which includes details about the frame applied to an image. This information encompasses:

* Frame Type: Indicates the specific type of frame being applied (mat, bevel, line, hook, or inset).
* Customization Values: Contains information about any adjustments or modifications made to the frame, such as color, size, or style, conveyed within the event object.

The parameters available in the [`FrameChangeEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/framechangeeventargs) are:

* [`FrameChangeEventArgs.previousFrameSetting`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/framechangeeventargs#previousframesetting): The frame settings (including size, color, inset, offset, and gradient color) applied before the frame is changed.
* [`FrameChangeEventArgs.currentFrameSetting`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/framechangeeventargs#currentframesetting): The frame settings (including size, color, inset, offset, and gradient color) to be applied after the frame is changed.
* [`FrameChangeEventArgs.cancel`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/framechangeeventargs#cancel): Specifies a boolean value to cancel the frame changing action (default: `false`).
