---
layout: post
title: Selection and Cropping in Angular Image Editor | Syncfusion
description: Select and crop image regions in the Syncfusion Angular Image Editor using custom, square, circle, or aspect ratio selections such as 16:9 and 4:3.
platform: ej2-angular
control: Selection cropping 
documentation: ug
domainurl: ##DomainURL##
---

# Selection and Cropping in Angular Image Editor

The cropping feature in the Image Editor allows you to select and crop specific regions of an image. It offers different selection options, including custom shapes, squares, circles, and various aspect ratios such as 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 5:7, 7:5, 9:16, and 16:9.

To perform a selection, you can use the [`select`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#select) method, which allows you to define the desired selection area within the image. Once the selection is made, you can then use the [`crop`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#crop) method to crop the image based on the selected region. This enables you to extract and focus on specific parts of the image while discarding the rest.

## Insert custom, square, or circle region 

The [`select`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#select) method allows you to perform a selection based on the selection type. Here, the `select` method is used to perform the selection as custom, circle, or square. The selection region can also be customized using the `select` method based on the parameters below. 

- `type` - Specify the type of selection. The supported values are `Custom`, `Square`, and `Circle`.
- `startX` - Specify the x-coordinate of the selection region's starting point.
- `startY` - Specify the y-coordinate of the selection region's starting point.
- `width` - Specify the width of the selection region.
- `height` - Specify the height of the selection region.

Here is an example of square selection using the `select` method.   

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/image-editor/default-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs11" %}

## Insert selection based on aspect ratio 

The [`select`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#select) method is used to perform the selection with various aspect ratios such as 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 5:7, 7:5, 9:16, and 16:9. The selection region can also be customized using the `select` method based on the parameters below. 

type - Specify the type of selection 

startX - Specify the x-coordinate of the selection region’s starting point 

startY - Specify the y-coordinate of the selection region’s starting point 

Here is an example of ratio selection using the `select` method.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/image-editor/default-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs13" %}

## Crop an image 

The [`crop`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#crop) method allows cropping based on the selected region. Before calling `crop`, a selection must first be made using the [`select`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#select) method to define the region to be cropped.

Here is an example of circle cropping using the [`select`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#select) and `crop` methods.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/image-editor/default-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs14" %}

## Cropping event 

The [`cropping`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#croppingevent) event is triggered when performing cropping on the image. This event is passed an object that contains information about the cropping event, such as the start and end points of the selection region. This event uses [`CropEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/cropeventargs) to handle the cropping action in the image.

The parameters available in the `cropping` event are: 

- `CroppingEventArgs.startPoint` - The x and y coordinates of the start point as [`ImageEditorPoint`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#imageeditorpoint) of the selection region. 
- `CroppingEventArgs.endPoint` - The x and y coordinates of the end point as [`ImageEditorPoint`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#imageeditorpoint) of the selection region. 
- `CroppingEventArgs.cancel` - To cancel the cropping action (set `args.cancel = true`).
- `CroppingEventArgs.preventScaling` - Set to `true` to prevent the cropped image from being scaled/enlarged within the UI and to retain its original cropping size when saved.

### Maintaining original image size during cropping

In the image editor, when an image is cropped, it is usually enlarged or scaled to improve visibility within the user interface. If you want to prevent this scaling and maintain the original cropping size, you can bind to the ‘cropping’ event and set the preventScaling value to true. This not only keeps the image size consistent during cropping but also ensures that the saved image retains its original cropping size without being enlarged.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/image-editor/default-cs43/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs43/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs43" %}

## SelectionChanging event

The selection region can be changed programmatically by using [`selectionChanging`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#selectionchanging) event. This event is activated during resizing the selection using mouse, and it allows for alterations to the selection region by adjusting the specified properties. 

The [`SelectionChangeEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/selectionchangeeventargs#selectionchangeeventargs) is used in these events to customize the selection and it has the following parameters. 

- `SelectionChangeEventArgs.action` - The type of action such as inserting or resizing.
- `SelectionChangeEventArgs.currentSelectionPoint` - Represents all the details of the selection including its type, position, width, and height after the current action as CropSelectionSettings.
- `SelectionChangeEventArgs.previousSelectionPoint` - Represents all the details of the selection including its type, position, width, and height before this current action as CropSelectionSettings.

### Locking selection area during cropping

When selecting an area for cropping, users can typically resize the selection from all corners and edges. To prevent resizing, handle the [`selectionChanging`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#selectionchanging) event, check if the action is `resize`, and if it is, set `previousSelectionPoint` to `currentSelectionPoint`. This will lock the selection area, preventing any adjustments to its size.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/image-editor/default-cs50/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs50/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs50" %}

### Cropping with custom ratio selection

Users can perform cropping either through the toolbar or by using our public methods. While predefined ratio selections are available in the toolbar, users can also crop with custom ratios using our public method, [`select`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#select). Regardless of the ratio type used, the selection will adhere to the specified ratio, even when resizing the selection area.

Here is an example of cropping with a custom ratio selection using the [selectionChanging](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#selectionchanging) event.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/image-editor/default-cs52/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs52/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs52" %}