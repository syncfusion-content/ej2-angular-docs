---
layout: post
title: How to clear an Image in Angular Image Editor | Syncfusion
description: Learn how to empty the Syncfusion Angular Image Editor canvas with the clearImage method, so the editor is ready for a fresh image when reopened in a dialog.
platform: ej2-angular
control: Clear Image
documentation: ug
domainurl: ##DomainURL##
---

# How to clear an Image in Angular Image Editor

The [`clearImage`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#clearimage) method empties the image editor canvas, removing the currently loaded image. This is useful for scenarios where you need to ensure that the image editor is emptied before reopening it, especially if the editor is used within a dialog. By using `clearImage` before closing the dialog, you can ensure that the editor does not retain the previously loaded image when the dialog is reopened. This allows users to start fresh with a new image selection. To clear the image, call the `clearImage` method as shown in the following example.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/image-editor/default-cs48/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs48/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs48" %}