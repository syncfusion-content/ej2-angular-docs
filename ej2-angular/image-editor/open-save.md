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
{% include code-snippet/image-editor/default-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs8" %}

### Open an image from Base64 format

Users can easily open images in the Image Editor using a Base64-encoded string. This method allows you to load images directly from their Base64 representation, ensuring seamless integration and flexibility in your application. Simply pass the Base64 string to the open method, and the image will be loaded into the editor.

**Note:**: You can obtain the Base64 representation of an image from the Image Editor using the [`getImageData`](https://helpej2.syncfusion.com/angular/documentation/api/image-editor/#getimagedata) method. This process will be explained in the upcoming section.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs42/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs42/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs42" %}

### Open an image from Blob storage.

User can easily open images in the Image Editor from Blob storage. This method allows you to load images directly from Blob storage, ensuring seamless integration and flexibility in your application. Simply retrieve the image Blob from storage and pass it to the open method, and the image will be loaded into the editor.

**Note:**: You can obtain the Base64 representation of an image from the Image Editor using the [`getImageData`](https://helpej2.syncfusion.com/angular/documentation/api/image-editor/#getimagedata) method. This process will be explained in the upcoming section.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs44/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs44/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs44" %}

### Open an image from file uploader

User can easily open images in the Image Editor using a file uploader. This method allows users to upload an image file from their device and load it directly into the editor. Once the image is selected through the file uploader, pass the file to the open method, and the image will be seamlessly loaded into the editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs41/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs41/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs41" %}

### Open and image from File Manager

User can easily open images in the Image Editor using the File Manager. This method allows you to browse and select an image file directly from the File Manager and load it into the editor. Once the image is selected, pass the file to the open method, and the image will be seamlessly loaded into the editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs54/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs54/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs54" %}

### Open an image from Treeview

Users can easily open images in the Syncfusion Image Editor by dragging and dropping nodes from a tree view. This feature allows users to select an image from a tile view interface and load it into the editor. When a node is dropped into the image editor, you can pass the file to the editor’s open method to seamlessly load the image.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs55/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs55/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs55" %}

### Add Watermarks while opening an image

You can utilize the [`fileOpened`](https://helpej2.syncfusion.com/angular/documentation/api/image-editor/#fileopened) event, which triggers once the image is loaded into the image editor. After this event, you can use the ‘drawText’ method to add a watermark. This approach allows the watermark to be automatically drawn on the canvas every time an image is opened in the editor, making it useful for handling copyright-related content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs53/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs53/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs53 %}

## Save

The Image Editor component component saves the edited image as Image Data or images like PNG, JPEG, and SVG.

### Save as ImageData

The [`getImageData`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#getimagedata) method is used to get the image as ImageData and this can be loaded to our Image Editor component using the open method.

### Save as image

The [`export`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#export) method is used to save the modified image as an image, and it accepts a file name and file type as parameters. The file type parameter supports PNG, JPEG, and SVG and the default file type is PNG. It also saves an image by clicking the save button from the toolbar and the supported file types are PNG, JPEG, and SVG. Users are allowed to save an image with a specified file name, file type, and image quality. This enhancement provides more control over the output, ensuring that users can save their work exactly as they need it.

In the following example, the [`export`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#export) method is used in the button click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs9" %}

### Save the image as base64 format

To save an image as a base64 format, use the [`getImageData`](https://helpej2.syncfusion.com/angular/documentation/api/image-editor/#getimagedata) method of the editor to retrieve the image data and convert it into a Data URL, which contains the base64-encoded string. By invoking the open method on the Syncfusion Image Editor instance, you can load this Data URL into the editor. The resulting base64 string can then be embedded directly in HTML or CSS or transmitted over data channels without requiring an external file.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs49/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs49/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs49" %}

### Save the image a byte[]

To save an image as a byte array, use the [`getImageData`](https://helpej2.syncfusion.com/angular/documentation/api/image-editor/#getimagedata) method of the editor to retrieve the image data and convert it into a byte array. You can then invoke the open method on the Syncfusion Image Editor instance to load this byte array into the editor. The resulting byte array can be stored in a database for data management and maintenance.

### Save the image as blob

To save an image as a blob, use the [`getImageData`](https://helpej2.syncfusion.com/angular/documentation/api/image-editor/#getimagedata) method of the editor to retrieve the image data and convert it into a blob. You can then invoke the open method on the Syncfusion Image Editor instance to load this byte array into the editor. The resulting byte array can be stored in a database for data management and maintenance.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs45/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs45/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs45" %}

### Add Watermarks while saving the image

You can utilize the [`fileOpened`](https://helpej2.syncfusion.com/angular/documentation/api/image-editor/#fileopened) event, which triggers once the image is loaded into the image editor. After this event, you can use the [`drawText`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawtext) method to add a watermark. This approach allows the watermark to be automatically drawn on the canvas every time an image is opened in the editor, making it useful for handling copyright-related content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs46/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs46/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs46" %}

### Remove default Save button and add custom button to save the image to server

User can leverage the [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#toolbar) property to replace the default save button with a custom one. By doing so, you can use the [`getImageData`](https://helpej2.syncfusion.com/angular/documentation/api/image-editor/#getimagedata) method to retrieve the image data, convert it to base64 format, and then save it to the server. This approach gives you more control over the image-saving process.

### Prevent default save option and save the image to specific location

User can make use of the [`beforeSave`](https://helpej2.syncfusion.com/angular/documentation/api/image-editor/#beforesave) event, which triggers just before the image is downloaded, to override the default save option by setting [`args.cancel`] to true. Afterward, you can utilize the getImageData method to retrieve the current image data and convert it into a format like byte[], blob, or base64 for further processing. This gives you greater flexibility in handling the image data.

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
