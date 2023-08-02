---
layout: post
title: Open save in Angular Image editor component | Syncfusion
description: Learn here all about Open save in Syncfusion Angular Image editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Open save 
documentation: ug
domainurl: ##DomainURL##
---

# Open and save in the Angular Image Editor component

The Image Editor component supports opening the image by using a hosted/online URL, Image Data, or base64. It also supports save options like image and base64.

## Open

The Image Editor component opens an image by using base64, Image Data, or a hosted/online URL using the [`open`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#open) method. It also opens an image by clicking the open button from the toolbar. The supported file types are PNG, JPEG, SVG, and base64.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs8/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs8/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs8/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs8" %}

## Save

The Image Editor component component saves the edited image as Image Data or images like PNG, JPEG, and SVG.

### Save as ImageData

The [`getImageData`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#getimagedata) method is used to get the image as ImageData and this can be loaded to our Image Editor component using the open method.

### Save as image

The [`export`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#export) method is used to save the modified image as an image, and it accepts a file name and file type as parameters. The file type parameter supports PNG, JPEG, and SVG and the default file type is PNG. It also saves an image by clicking the save button from the toolbar and the supported file types are PNG, JPEG, and SVG.

In the following example, the [`export`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#export) method is used in the button click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs9/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs9/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs9/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs9" %}

## File opened event 

The [`fileOpened`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#fileopened) event is triggered in the Image Editor component after an image is successfully loaded. It provides the [`OpenEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/openeventargs/) as the event argument, which contains two specific arguments: 

* FileName: This argument is a string that contains the file name of the opened image. It represents the name of the file that was selected or provided when loading the image into the Image Editor. 

* FileType: This argument is a string that contains the type of the opened image. It specifies the format or file type of the image that was loaded, such as PNG, JPEG, or SVG. 

By accessing these arguments within the [`fileOpened`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#fileopened) event handler, you can retrieve information about the loaded image, such as its file name and file type. This can be useful for performing additional actions or implementing logic based on the specific image that was opened in the Image Editor component.

## Saving event 

The [`saving`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#saving) event is triggered in the Image Editor component when an image is being saved to the local disk. It provides the [`SaveEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/saveEventArgs/) as the event argument, which includes the following specific arguments: 

* FileName: This argument is a string that holds the file name of the saved image. It represents the name of the file that will be used when saving the image to the local disk. 

* FileType: This argument is a string indicating the type or format of the saved image. It specifies the desired file type in which the image will be saved, such as PNG, JPEG, or SVG. 

* Cancel: This argument is a boolean value that can be set to true in order to cancel the saving action. By default, it is set to false, allowing the saving process to proceed. However, if you want to prevent the saving action from occurring, you can set Cancel to true within the event handler. 

By accessing these arguments within the Saving event handler, you can retrieve information about the file name and file type of the image being saved. Additionally, you have the option to cancel the saving action if necessary.

## Created event 

The [`created`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#created) event is triggered once the Image Editor component is created. This event serves as a notification that the component has been fully initialized and is ready to be used. It provides a convenient opportunity to render the Image Editor with a predefined set of initial settings, including the image, annotations, and transformations. 

## Destroyed event 

The [`destroyed`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#destroyed) event is triggered once the Image Editor component is destroyed or removed from the application. This event serves as a notification that the component and its associated resources have been successfully cleaned up and are no longer active. 


## Reset an image 

The [`reset`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#reset) method in the Image Editor component provides the capability to undo all the changes made to an image and revert it back to its original state. This method is particularly useful when multiple adjustments, annotations, or transformations have been applied to an image and you want to start over with the original, unmodified version of the image. 

By invoking the [`reset`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#reset) method, any modifications or edits made to the image will be undone, and the image will be restored to its initial state. This allows you to easily discard any changes and begin again with the fresh, unaltered image. 
