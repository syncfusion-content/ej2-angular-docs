---
layout: post
title: Redact in Angular Image Editor | Syncfusion
description: Redact sensitive regions of an image in the Syncfusion Angular Image Editor by applying blur or pixelate effects to protect privacy and meet compliance.
platform: ej2-angular
control: Redact
documentation: ug
domainurl: ##DomainURL##
---

# Redact in Angular Image Editor

The redact feature in an Image Editor is a valuable tool that empowers users to conceal sensitive information by applying blur or pixel effects to specific areas of an image. This feature is particularly valuable for protecting privacy and complying with data protection regulations, making it easier to securely share images without compromising sensitive information.

## Apply a redact to the image

The Image Editor control includes a [`drawRedact`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#drawredact) method, which allows you to draw redaction on an image. This method takes six parameters that define how the redact should be carried out. It returns a string representing the id of the created redact:

* type: Specifies the type of redaction (RedactType enum) to be drawn on the image, such as `Blur` or `Pixelate`. If not specified, the redaction drawing is initiated with the default blur value.
* x: Specifies the x-coordinate (number) of the redaction. If not specified, the redaction is drawn starting from the center point of the image.
* y: Specifies the y-coordinate (number) of the redaction. If not specified, the redaction is drawn starting from the center point of the image.
* width: Specifies the width (number) of the redaction. The default value is 100.
* height: Specifies the height (number) of the redaction. The default value is 50.
* value: Specifies the blur value (number) for blur-type redaction, or the pixel size (number) for pixelate-type redaction. Defaults to 20 since the default redaction is blur.

## Selecting a redact

The Image Editor control includes a [`selectRedact`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#selectredact) method, which allows you to select a redaction based on the given redaction id. Use the [`getRedacts`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#getredacts) method to retrieve the redaction id, which is then passed to perform selection. This method takes one parameter that defines the redact to be selected:

* id: Specifies the shape id (string) to select a redact on an image.

## Deleting a redact

The Image Editor control includes a [`deleteRedact`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#deleteredact) method, which allows you to delete a redaction based on the given redaction id. Use the [`getRedacts`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#getredacts) method to retrieve the redaction id, which is then passed to perform deletion. This method takes one parameter that defines the redact to be deleted:

* id: Specifies the shape id (string) to delete a redact on an image.

## Updating a redact

The Image Editor control includes an [`updateRedact`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#updateredact) method, which allows you to update existing redacts by changing their height, width, blur, and pixel size in the component. Use the [`getRedacts`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#getredacts) method to retrieve the redacts, which are then passed to change the options of the redacts. This method takes two parameters that define how the redact should be updated:

* setting: Specifies the redact settings (RedactSettings) to be updated for the shape on an image.
* isSelected: Specifies whether to show the updated redact in the selected state (boolean).

## Getting redacts

The Image Editor control includes a [`getRedacts`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#getredacts) method, which allows you to get all the redact details that are drawn on an image in the editor. It returns an array of `RedactSettings` objects describing each redact.

Here's an example demonstrating how to draw, select, delete, update, and get redacts on an image using the [`drawRedact`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#drawredact), [`selectRedact`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#selectredact), [`deleteRedact`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#deleteredact), [`updateRedact`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#updateredact), and [`getRedacts`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#getredacts) methods.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/image-editor/default-cs56/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs56/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs56" %}
