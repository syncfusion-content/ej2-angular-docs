---
layout: post
title: Wai aria accessibility in Angular Uploader component | Syncfusion
description: Learn here all about Wai aria accessibility in Syncfusion Angular Uploader component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Wai aria accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Wai aria accessibility in Angular Uploader component

The uploader component characterized with complete ARIA accessibility support that helps to be accessible by on-screen readers and other assistive technology devices.

## Keyboard interaction

The following are the standard keys that works on uploader component:

| **Keyboard shortcuts** | **Actions** |
| --- | --- |
| <kbd>Tab</kbd> | Move focus to next element. |
| <kbd>Shift + Tab</kbd> | Move focus to previous element. |
| <kbd>Enter</kbd> | Triggers corresponding action to button element. |
| <kbd>Esc</kbd> | Close the file browser dialog alone and cancels the upload on drop the file. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/uploader-cs16/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/uploader/uploader-cs16/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/uploader-cs16" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-ui-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
