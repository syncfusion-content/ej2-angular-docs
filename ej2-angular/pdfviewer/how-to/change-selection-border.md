---
layout: post
title: Change selection border in Angular Pdfviewer component | Syncfusion
description: Learn here all about Change selection border in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Change selection border 
documentation: ug
domainurl: ##DomainURL##
---

# Customize the selection border

The PDF Viewer library allows you to customize the annotations selection borders using the [**annotationSelectorSettings**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/annotationSelectorSettingsModel/#annotationselectorsettingsmodel) Property.

The following steps are used to customize the selection border.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started/) to create simple PDF Viewer sample in Angular.

**Step 2:** Add the following code snippet in app.component.html and app.component.ts files to customize selection borders.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
```html

<ejs-pdfviewer id="pdfViewer"
               [documentPath]='document'
               [freeTextSettings]="annotationsettings"
               [rectangleSettings]="annotationsettings"
               [stampSettings]="annotationsettings"
               style="height:640px;display:block">
</ejs-pdfviewer>

```
{% endhighlight %}

{% highlight html tabtitle="Server-Backed" %}
```html

<ejs-pdfviewer id="pdfViewer"
               [serviceUrl]='service'
               [documentPath]='document'
               [freeTextSettings]="annotationsettings"
               [rectangleSettings]="annotationsettings"
               [stampSettings]="annotationsettings"
               style="height:640px;display:block">
</ejs-pdfviewer>

```
{% endhighlight %}
{% endtabs %}

```typescript

public annotationsettings: any = {
  annotationSelectorSettings: {
    selectionBorderColor: 'yellow',
    resizerShape: 'Circle',
    selectorLineDashArray: 9
  }
};
  
```

Find the Sample [how to customize the selection border](https://stackblitz.com/edit/angular-ifpsqg-mc9c7m?devtoolsheight=33&file=app.component.ts)