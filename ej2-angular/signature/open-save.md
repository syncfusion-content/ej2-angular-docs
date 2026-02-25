---
layout: post
title: Open save in Angular Signature component | Syncfusion
description: Learn here all about Open save in Syncfusion Angular Signature component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Open save 
documentation: ug
domainurl: ##DomainURL##
---

# Open and save signatures in Angular Signature component

The Signature component supports opening pre-drawn signatures from base64 or hosted URLs, and saving signatures in multiple formats including images, base64, and blob.

## Open Signature

Load a pre-drawn signature using the [`load`](https://ej2.syncfusion.com/angular/documentation/api/signature/#load) method. It accepts base64-encoded images or hosted/online URLs. Supported formats: PNG, JPEG, and SVG base64 encoding.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/signature/open-save/open-base-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/signature/open-save/open-base-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/signature/open-save/open-base-cs1" %}

## Save Signature

Save signatures in multiple formats using the Signature component.

### Save as Base64

Use the `getSignature` method to export the signature as base64. This format supports PNG, JPEG, and SVG types and can be reloaded using the [`load`](https://ej2.syncfusion.com/angular/documentation/api/signature/#load) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/signature/open-save/save-base-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/signature/open-save/save-base-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/signature/open-save/save-base-cs1" %}

### Save as Blob

Use the [`saveAsBlob`](https://ej2.syncfusion.com/angular/documentation/api/signature/#saveasblob) method to export the signature as binary blob data for storage in databases or backend systems.

### Save as Image

Use the [`save`](https://ej2.syncfusion.com/angular/documentation/api/signature/#save) method to download the signature as an image file. This method accepts filename and file type parameters. Supported formats: PNG (default), JPEG, and SVG.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/signature/open-save/save-image-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/signature/open-save/save-image-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/signature/open-save/save-image-cs1" %}

## Save With Background

Use the [`saveWithBackground`](https://ej2.syncfusion.com/angular/documentation/api/signature/#savewithbackground) property to include or exclude the background when saving. Default value: `true` (background is saved by default).

The following example sets a purple background and saves the signature with it.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/signature/open-save/save-image-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/signature/open-save/save-image-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/signature/open-save/save-image-cs2" %}