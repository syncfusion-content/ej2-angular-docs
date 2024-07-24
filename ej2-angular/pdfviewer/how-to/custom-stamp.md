---
layout: post
title: Add the custom stamp based on the free text bounds | Syncfusion
description: Learn how to add the custom stamp based on the free text bounds in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Add the custom stamp based on the free text bounds 
documentation: ug
domainurl: ##DomainURL##
---

# Add the custom stamp based on the free text bounds

To add a custom stamp in the Syncfusion PDF viewer based on the free text bounds, obtain the value of the bound for the free text in the Pixel in the [**annotationAdd**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#annotationadd) event while adding the free text. However, when a custom stamp is added programmatically, the offset values are set in points. So, you must convert the value of the bound for the free text into a point to add the custom stamp to the free text bounds position.

Here is an example of how you can add the custom stamp based on the free text bounds:

```typescript

  public annotationAdd(args) {
    if (args.annotationType === 'FreeText') {
      this.x = (args.annotationBound.left * 72) / 96;
      this.y = (args.annotationBound.top * 72) / 96;
      console.log(args);
    }
  }

```

Find the sample [how to add the custom stamp based on the free text bounds](https://stackblitz.com/edit/angular-dxub1a-sm6c5g?file=app.component.ts).