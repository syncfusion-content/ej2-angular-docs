---
layout: post
title: How to reset an image in Angular Image Editor | Syncfusion
description: Learn here all about How to Reset an image in Syncfusion ##Platform_Name## Image Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Reset an Image 
documentation: ug
domainurl: ##DomainURL##
---

# How to reset an image in Angular Image Editor

The [`reset`](https://ej2.syncfusion.com/angular/documentation/api/image-editor#reset) method in the Image Editor control reverts all changes made to an image and restores it to its original state. It is particularly useful when multiple adjustments, annotations, or transformations have been applied and you want to start over with the unmodified image.

To reset the image:

1. Obtain a reference to the Image Editor component (for example, using `@ViewChild`).
2. Call the `reset` method on the Image Editor instance to undo all edits and restore the original image.

> Ensure an image is loaded before calling `reset`. If no image has been opened or no edits have been applied, calling `reset` has no effect.