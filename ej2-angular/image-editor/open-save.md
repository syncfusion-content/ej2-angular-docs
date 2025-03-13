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

To import an image into the canvas, it must first be converted into a blob object. The Uploader component can be used to facilitate the process of uploading an image from the user interface. Once the image has been uploaded, it can then be converted into a blob and drawn onto the canvas. 

To save an edited image in the Image Editor component, use the toBlob method to convert it to a blob object. This will save the image with any annotations or filters that have been applied during the editing process. The saved image can be stored as raw image data or as an image file.

## Supported image formats

The Image Editor control supports four common image formats: PNG, JPEG, SVG, and WEBP. These formats allow you to work with a wide range of image files within the Image Editor.

When it comes to saving the edited image, the default file type is set as PNG. This means that when you save the edited image without specifying a different file type, it will be saved as a PNG file. However, it's important to note that the Image Editor typically provides options or methods to specify a different file type if desired. This allows you to save the edited image in formats other than the default PNG, such as JPEG, SVG, or WEBP, based on your specific requirements or preferences.

## Open an image

The [`open`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#open) method in the Image Editor control offers the capability to open an image by providing it in different formats. This method accepts various types of arguments, such as a base64-encoded string, raw image data, or a hosted/online URL. You can pass either the file name or the actual image data as an argument to the `open` method, and it will load the specified image into the Image Editor control. This flexibility allows you to work with images from different sources and formats, making it easier to integrate and manipulate images within the Image Editor control.

### Opening local images in the Image Editor 

Users can easily open local images in the Image Editor. Simply place the image in the same folder as the sample. By specifying the local file name directly in the open method, the image will be loaded seamlessly into the editor. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs8" %}

### Open an image from base64 format

Users can easily open images in the Image Editor using a Base64-encoded string. This method allows you to load images directly from their Base64 representation, ensuring seamless integration and flexibility in your application. Simply pass the Base64 string to the `open` method, and the image will be loaded into the editor.

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

### Open an image from Blob storage

User can easily open images in the Image Editor from Blob storage. This method allows you to load images directly from Blob storage, ensuring seamless integration and flexibility in your application. Simply retrieve the image Blob from storage and pass it to the `open` method, and the image will be loaded into the editor.

**Note:**: You can obtain the Blob URL representation of an image from the Image Editor using the [`getImageData`](https://helpej2.syncfusion.com/angular/documentation/api/image-editor/#getimagedata) method. This process will be explained in the upcoming section.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs44/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs44/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs44" %}

### Open an image from File Uploader

User can easily open images in the Image Editor using a file uploader. This method allows users to upload an image file from their device and load it directly into the editor. Once the image is selected through the file uploader, pass the file to the `open` method, and the image will be seamlessly loaded into the editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs41/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs41/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs41" %}

### Open an image from File Manager

User can easily open images in the Image Editor using the File Manager. This method allows you to browse and select an image file directly from the File Manager and load it into the editor. Once the image is selected, pass the file to the `open` method, and the image will be seamlessly loaded into the editor.

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

Users can open images in the Syncfusion Image Editor by selecting a node from a tree view. When a user clicks on an image node, the corresponding image is loaded into the editor using the `open` method. This allows for a seamless image editing experience directly from the TreeView component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs55/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs55/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs55" %}

### Add watermarks while opening an image

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

### Save as image

The [`export`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#export) method in the Image Editor component enables you to save the modified image as a file on the local device. This method accepts two parameters: the file name and the file type. 

By providing a file name, you can specify the desired name for the saved image file. Additionally, you can also specify the file type to determine the format in which the image should be saved. This allows you to save the image according to your specific requirements or preferences, such as PNG, JPEG, SVG, and WEBP. Users are allowed to save an image with a specified file name, file type, and image quality. This enhancement provides more control over the output, ensuring that users can save their work exactly as they need it.

By utilizing the `export` method with the appropriate file name and file type, you can conveniently save the modified image as a file on the local device, ensuring that it is easily accessible and shareable.

In the following example, the `export` method is used in the button click event.

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

To save an image as a base64 format, use the [`getImageData`](https://helpej2.syncfusion.com/angular/documentation/api/image-editor/#getimagedata) method of the editor to retrieve the image data and convert it into a Data URL, which contains the base64-encoded string. By invoking the `open` method on the Syncfusion Image Editor instance, you can load this Data URL into the editor. The resulting base64 string can then be embedded directly in HTML or CSS or transmitted over data channels without requiring an external file.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs49/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs49/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs49" %}

### Save the image as byte[]

To save an image as a byte array, use the [`getImageData`](https://helpej2.syncfusion.com/angular/documentation/api/image-editor/#getimagedata) method of the editor to retrieve the image data and convert it into a byte array. You can then invoke the `open` method on the Syncfusion Image Editor instance to load this byte array into the editor. The resulting byte array can be stored in a database for data management and maintenance.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs59/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs59/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs59" %}

### Save the image as Blob

To save an image as a blob, use the [`getImageData`](https://helpej2.syncfusion.com/angular/documentation/api/image-editor/#getimagedata) method of the editor to retrieve the image data and convert it into a blob. You can then invoke the `open` method on the Syncfusion Image Editor instance to load this byte array into the editor. The resulting byte array can be stored in a database for data management and maintenance.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs45/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs45/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs45" %}

### Add watermarks while saving the image

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

### Remove default save button and add custom button to save the image to server

User can leverage the [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#toolbar) property to replace the default save button with a custom one. By doing so, you can use the [`getImageData`](https://helpej2.syncfusion.com/angular/documentation/api/image-editor/#getimagedata) method to retrieve the image data, convert it to base64 format, and then save it to the server. This approach gives you more control over the image-saving process.

### Prevent default save option and save the image to specific location

User can make use of the [`beforeSave`](https://helpej2.syncfusion.com/angular/documentation/api/image-editor/#beforesave) event, which triggers just before the image is downloaded, to override the default save option by setting [`args.cancel`] to true. Afterward, you can utilize the getImageData method to retrieve the current image data and convert it into a format like byte[], blob, or base64 for further processing. This gives you greater flexibility in handling the image data.

## Events to handle save actions 

The Image Editor provides several events related to opening and saving images. These events offer detailed control over the image handling process. For comprehensive information about these events, including their triggers and usage, please refer to the dedicated section on open and save support. This section will provide you with the specifics needed to effectively utilize these events in your application. 

### File opened event 

The [`fileOpened`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#fileopened) event is triggered in the Image Editor component after an image is successfully loaded. It provides the [`OpenEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/openeventargs/) as the event argument, which contains two specific arguments: 

* FileName: This argument is a string that contains the file name of the opened image. It represents the name of the file that was selected or provided when loading the image into the Image Editor. 

* FileType: This argument is a string that contains the type of the opened image. It specifies the format or file type of the image that was loaded, such as PNG, JPEG, SVG, or WEBP. 

By accessing these arguments within the `fileOpened` event handler, you can retrieve information about the loaded image, such as its file name and file type. This can be useful for performing additional actions or implementing logic based on the specific image that was opened in the Image Editor component.

### Saving event 

The [`saving`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#saving) event is triggered in the Image Editor component when an image is being saved to the local disk. It provides the [`SaveEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/saveEventArgs/) as the event argument, which includes the following specific arguments: 

* FileName: This argument is a string that holds the file name of the saved image. It represents the name of the file that will be used when saving the image to the local disk. 

* FileType: This argument is a string indicating the type or format of the saved image. It specifies the desired file type in which the image will be saved, such as PNG, JPEG, SVG, or WEBP. 

* Cancel: This argument is a boolean value that can be set to true in order to cancel the saving action. By default, it is set to false, allowing the saving process to proceed. However, if you want to prevent the saving action from occurring, you can set Cancel to true within the event handler. 

By accessing these arguments within the Saving event handler, you can retrieve information about the file name and file type of the image being saved. Additionally, you have the option to cancel the saving action if necessary.

### Created event 

The [`created`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#created) event is triggered once the Image Editor component is created. This event serves as a notification that the component has been fully initialized and is ready to be used. It provides a convenient opportunity to render the Image Editor with a predefined set of initial settings, including the image, annotations, and transformations. 

### Destroyed event 

The [`destroyed`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#destroyed) event is triggered once the Image Editor component is destroyed or removed from the application. This event serves as a notification that the component and its associated resources have been successfully cleaned up and are no longer active. 
