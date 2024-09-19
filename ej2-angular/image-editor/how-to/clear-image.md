---
layout: post
title: Clear an Image in ##Platform_Name## Image Editor component | Syncfusion
description: Learn here all about How to Clear an Image in Syncfusion ##Platform_Name## Image Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Clear Image
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Clear an Image

The [`clearImage`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#clearimage) method in the image editor control is indeed useful for scenarios where you need to ensure that the image editor is emptied before reopening it, especially if the editor is used within a dialog. By using clearImage before closing the dialog, you can ensure that the editor does not retain the previously loaded image when the dialog is reopened. This allows users to start fresh with a new image selection.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs48/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs48/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs48" %}