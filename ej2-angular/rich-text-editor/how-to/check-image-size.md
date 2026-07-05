---
layout: post
title: Check image size in Angular Rich Text Editor component | Syncfusion
description: Learn here all about checking image size in the Syncfusion Angular Rich Text Editor component of Essential JS 2 and more.
platform: ej2-angular
control: Check image size 
documentation: ug
domainurl: ##DomainURL##
---

# Check the Image Size in the Angular Rich Text Editor Component

By using the Rich Text Editor's [imageUploading](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#imageuploading) event, you can get the image size before uploading and restrict the upload if the image size is greater than the allowed size.

In the following example, we validate the image size before uploading and determine whether the image is uploaded or not.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/how-to/check-image-size-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/how-to/check-image-size-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/how-to/check-image-size-cs1" %}