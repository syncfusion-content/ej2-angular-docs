---
layout: post
title: Selection cropping in Angular Image editor component | Syncfusion
description: Learn here all about Selection cropping in Syncfusion Angular Image editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Selection cropping 
documentation: ug
domainurl: ##DomainURL##
---

# Selection cropping in the Angular Image Editor component

The cropping feature in the Image Editor allows you to select and crop specific regions of an image. It offers different selection options, including custom shapes, squares, circles, and various aspect ratios such as 3:2, 4:3, 5:4, 7:5, and 16:9. 

To perform a selection, you can use the [`select`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#select) method, which allows you to define the desired selection area within the image. Once the selection is made, you can then use the [`crop`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#crop) method to crop the image based on the selected region. This enables you to extract and focus on specific parts of the image while discarding the rest.

## Insert custom / square / circle region 

The [`select`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#select) method allows to perform selection based on the type of selection. Here, the [`select`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#select) method is used to perform the selection as custom, circle, or square. The selection region can also be customized using the select method based on the parameters below. 

type - Specify the type of selection 

startX - Specify the x-coordinate of the selection region’s starting point 

startY - Specify the y-coordinate of the selection region’s starting point 

width - Specify the width of the selection region 

height - Specify the height of the selection region 

Here is an example of square selection using the [`select`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#select) method.   

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs11/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs11/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs11/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs11" %}

## Insert selection based on aspect ratio 

The [`select`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#select) method is used to perform the selection with the various aspect ratios such as 3:2, 4:3, 5:4, 7:5, and 16:9. The selection region can also be customized using the [`select`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#select) method based on the parameters below. 

type - Specify the type of selection 

startX - Specify the x-coordinate of the selection region’s starting point 

startY - Specify the y-coordinate of the selection region’s starting point 

Here is an example of ratio selection using the [`select`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#select) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs13/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs13/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs13/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs13" %}

## Resize selections 

The selection region can be changed programmatically by using [`selectionChanging`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#selectionchanging) event. This event is activated during resizing the selection using mouse, and it allows for alterations to the selection region by adjusting the specified properties. 

The [`SelectionChangeEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/selectionChangeEventArgs/#selectionchangeeventargs) is used in these events to customize the selection and it has the following parameters. 

SelectionChangeEventArgs.cction - The type of action such as inserting or resizing 

SelectionChangeEventArgs.cancel - Specifies to cancel the selection. 

SelectionChangeEventArgs.currentSelectionPoint - Represents all the details of the selection including its type, position, width, and height after the current action as CropSelectionSettings. 

SelectionChangeEventArgs.previousSelectionPoint - Represents all the details of the selection including its type, position, width, and height before this current action as CropSelectionSettings 

Here is an example of changing the selection region using the [`SelectionChangeEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/selectionChangeEventArgs/) event.

## Crop an image 

The [`crop`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#crop) method allows cropping based on the selected region. Here is an example of cropping the selection region using the [`crop`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#crop) method. 

Here is an example of circle cropping using the [`select`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#select) and [`crop`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#crop) method.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs14/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs14/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs14/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs14" %}

## Cropping event 

The [`cropping`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#croppingevent) event is triggered when performing cropping on the image. This event is passed an object that contains information about the cropping event, such as the start and end point of the selection region. And this event uses [`CropEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/cropEventArgs/) to handle the cropping action in the image.

The parameter available in the [`cropping`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#croppingevent) event is, 

CroppingEventArgs.startPoint – The x and y coordinates of a start point as [`ImageEditorPoint`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#imageeditorpoint) of the selection region. 

CroppingEventArgs.endPoint - The x and y coordinates of an end point as [`ImageEditorPoint`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#imageeditorpoint) of the selection region. 

CroppingEventArgs.cancel - To cancel the cropping action. 
