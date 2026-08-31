---
layout: post
title: How to render dialog in Angular Image Editor | Syncfusion
description: Learn how to render the Syncfusion Angular Image Editor inside a modal dialog for a focused, pop-up image editing experience without leaving the current page.
platform: ej2-angular
control: Render Image Editor in Dialog
documentation: ug
domainurl: ##DomainURL##
---

# How to render dialog in Angular Image Editor

Rendering the Image Editor in a dialog involves displaying the image editor component within a modal dialog window, allowing users to edit images in a pop-up interface. This can be useful for maintaining a clean layout and providing a focused editing experience without navigating away from the current page.

To render the Image Editor inside a Dialog, follow these steps:

1. Import the `ImageEditorModule` from `@syncfusion/ej2-angular-image-editor` and the `DialogModule` (and `DialogComponent`) from `@syncfusion/ej2-angular-popups` into your standalone component.
2. Add both modules to the component's `imports` array.
3. Place an `<ejs-imageeditor>` element inside the Dialog's `<ng-template #content>` so the Image Editor is rendered as the dialog's content.
4. Configure the Dialog with the desired `width`, `height`, `position`, `showCloseIcon`, and an initial `visible` value of `false` so it is hidden until opened.
5. Add a button (or trigger) that calls the Dialog's `show()` method to open the dialog.
6. After opening the dialog, load an image into the Image Editor using the `open` method (wrap it in a `setTimeout` to ensure the Image Editor is fully rendered inside the dialog before loading the image).

> Ensure the `open` call is delayed (for example, with `setTimeout`) so the Image Editor is fully initialized within the dialog before the image is loaded.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/image-editor/default-cs47/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs47/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs47" %}