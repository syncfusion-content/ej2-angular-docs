---
layout: post
title: Image in Angular Rich text editor component | Syncfusion
description: Learn here all about Image in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Image 
documentation: ug
domainurl: ##DomainURL##
---

# Image in Angular Rich text editor component

Rich Text Editor allows to insert images in your content from online sources as well as local computer. For inserting an image to the Rich Text Editor, the following list of options have been provided in the [`insertImageSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/imageSettingsModel/)

| Options | Description |
|----------------|---------|
| [allowedTypes](https://helpej2.syncfusion.com/angular/documentation/api/rich-text-editor/imageSettings/#allowedtypes) | Specifies the extensions of the image types allowed to insert on bowering and passing the extensions with comma separators. For example, pass allowedTypes as .jpg and .png.|
| [display](https://helpej2.syncfusion.com/angular/documentation/api/rich-text-editor/imageSettings/#display) | Sets the default display for an image when it is inserted in to the Rich Text Editor. Possible options are: 'inline' and 'block'.|
| [width](https://helpej2.syncfusion.com/angular/documentation/api/rich-text-editor/imageSettings/#width) | Sets the default width of the image when it is inserted in the Rich Text Editor.|
| [height](https://helpej2.syncfusion.com/angular/documentation/api/rich-text-editor/imageSettings/#height) | Sets the default height of the image when it is inserted in the Rich Text Editor.|
| [saveUrl](https://helpej2.syncfusion.com/angular/documentation/api/rich-text-editor/imageSettings/#saveurl) | Provides URL to map the action result method to save the image.|
| [path](https://helpej2.syncfusion.com/angular/documentation/api/rich-text-editor/imageSettings/#path) | Specifies the location to store the image.|
| [resize](https://helpej2.syncfusion.com/angular/documentation/api/rich-text-editor/imageSettings/#resize) | To enable resizing for image element.|
| [minWidth](https://helpej2.syncfusion.com/angular/documentation/api/rich-text-editor/imageSettings/#minwidth) | Defines the maximum Width of the image.|
| [maxWidth](https://helpej2.syncfusion.com/angular/documentation/api/rich-text-editor/imageSettings/#maxwidth) | Defines the maximum Width of the image.|
| [minHeight](https://helpej2.syncfusion.com/angular/documentation/api/rich-text-editor/imageSettings/#minheight) | Defines the minimum Height of the image.|
| [maxHeight](https://helpej2.syncfusion.com/angular/documentation/api/rich-text-editor/imageSettings/#maxheight) | Defines the maximum Height of the image.|
| [resizeByPercent](https://helpej2.syncfusion.com/angular/documentation/api/rich-text-editor/imageSettings/#resizebypercent) | Image resizing should be done by percentage calculation.|

## Upload options

Through the `browse` option in the Image dialog, select the image from the local machine and insert into the Rich Text Editor content.

If the path field is not specified in the [`insertImageSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/imageSettingsModel/), the image will be transferred into base 64 and blob url for the image will be created and the generated url will be set to the src property of img tag.

```typescript

<img src="blob:http://ej2.syncfusion.com/3ab56a6e-ec0d-490f-85a5-f0aeb0ad8879" >

```

> If you want to insert a lot of tiny images in the editor and don't want a specific physical location for saving images, you can opt to save format as Base64.

In the following sample, the image has been loaded from the local machine and it will be saved in the given location.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs8/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs8" %}

## Delete Image

To remove an image from the Rich Text Editor content, select the image and click Remove tool from the quick toolbar. It will delete the image from the RTE content as well as from the service location if the `removeUrl` is given.

Once you select the image from the local machine, the URL for the image will be generate. From there,you can remove the image from the service location by clicking the cross icon.

![RTE Image delete](images/image-del.png)

The following sample explains, how to configure `removeUrl` to remove a saved image from the remote service location, when the following image remove actions are performed:

* `delete` key action.
* `backspace` key action.
* Removing uploaded image file from the insert image dialog.
* Deleting image using the quick toolbar `remove` option.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs9/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs9" %}

## Insert from web

To insert an image from the online source like Google, Ping, etc., you should enable the image tool on the editor’s toolbar. By default, the image tool opens a simple dialog which allows you to insert an image from online source.

## Dimension

Sets the default width and height of the image when it is inserted in the Rich Text Editor using [`width`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/imageSettingsModel/#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/imageSettingsModel/#height) of the [`insertImageSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/imageSettingsModel/) property.

Through the quick toolbar, change the width and height using `Change Size` option. Once you click, the Image Size dialog box will open as follows. In that you can specify the width and height of the image in pixel.

![RTE Image dimension](images/image-size.png)

## Caption and Alt Text

Image caption and alternative text can be specified for the inserted image in the Rich Text Editor through the [`quickToolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#quickToolbarSettings) property. It has following two options,
* Image Caption
* Alternative Text.

Through the Alternative Text option, set the alternative text for the image, when the image is not upload successfully into the Rich Text Editor.

By clicking the Image Caption, the image will get wrapped in an image element with a caption. Then, you can type caption content inside the Rich Text Editor.

## Display position

Sets the default display for an image when it is inserted in the Rich Text Editor using [`display`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/imageSettingsModel/#display) field in [`insertImageSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/imageSettingsModel/). It has two possible options: 'inline' and 'block'.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs10/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs10" %}

## Image with link

The hyperlink itself can be an image in Rich Text Editor. If the image given as hyperlink, remove, edit and open link will be added to the quick toolbar of image. For further details about link, see the [`link documentation`](./link) documentation.

![RTE image with link](images/image-link.png)

## Resize

Rich Text Editor has a built-in image inserting support.  The resize points will be appearing on each corner of image when focus. So, users can resize the image using mouse points or thumb through the resize points easily. Also, the resize calculation will be done based on aspect ratio.

![RTE image resize](images/image-resize.png)

## Drag and Drop

By default, the Rich Text Editor allows you to insert images by drag-and-drop from the local file system such as Windows Explorer into the content editor area. And, you can upload the images to the server before inserting into the editor by configuring the saveUrl property. The images can be repositioned anywhere within the editor area by dragging and dropping the image.

In the following sample, you can see feature demo.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs11" %}

### Drag and drop with specific extension images

You can allow the specific images alone to be uploaded using the the allowedTypes property. By default, the Rich Text Editor allows the JPG, JPEG, and PNG formats. You can configure this formats as follows.

``` typescript

    insertImageSettings: {
      allowedTypes: ['.jpg']
    }

```

### Prevent drag and drop action

You can prevent drag-and-drop action by setting the actionBegin argument cancel value to true. The following code shows how to prevent the drag-and-drop.

``` typescript

    actionBegin: function (args: any): void {
        if(args.type === 'drop' || args.type === 'dragstart') {
            args.cancel =true;
        }
    }

```
