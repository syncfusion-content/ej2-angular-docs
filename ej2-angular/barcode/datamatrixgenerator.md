---
layout: post
title: DataMatrix Generator in Angular Barcode component | Syncfusion®
description: Learn here all about DataMatrix Generator in Syncfusion® Angular Barcode component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Datamatrixgenerator 
documentation: ug
domainurl: ##DomainURL##
---

# DataMatrix Generator in Angular Barcode component

## Data Matrix

DataMatrix is a two-dimensional barcode that consists of a grid of dark and light squares forming a square or rectangular symbol. The data encoded in the barcode can be either numeric or alphanumeric characters. DataMatrix barcodes are widely used in printed media such as labels, letters, and packaging due to their high data density and error correction capabilities. These barcodes can be easily read using barcode scanners and mobile devices.

DataMatrix barcodes are particularly suitable for applications requiring compact encoding of large amounts of data in small spaces, making them ideal for industries such as healthcare, manufacturing, and logistics.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/datamatrix/datamatrix-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/datamatrix/datamatrix-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/datamatrix/datamatrix-cs1" %}

## Customizing the Barcode color

When barcodes are placed on colorful backgrounds or printed media with various design elements, customizing the barcode color becomes essential for maintaining readability and visual harmony. The [`foreColor`](https://ej2.syncfusion.com/angular/documentation/api/barcode/barcodeGeneratorModel/#forecolor) property allows you to modify the barcode's appearance to match your design requirements while ensuring optimal contrast for scanning.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/datamatrix/color-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/datamatrix/color-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/datamatrix/color-cs1" %}

## Customizing the Barcode dimension

The physical size of the barcode is crucial for ensuring proper scanning and fitting the barcode within available space constraints. The [`height`](https://ej2.syncfusion.com/angular/documentation/api/barcode/barcodeGeneratorModel/#height) and [`width`](https://ej2.syncfusion.com/angular/documentation/api/barcode/barcodeGeneratorModel/#width) properties of the barcode generator allow you to adjust the barcode dimensions according to your specific layout requirements and scanning distance considerations.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/datamatrix/dimension-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/datamatrix/dimension-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/datamatrix/dimension-cs1" %}

## Customizing the text

The display text feature allows you to show human-readable text alongside the barcode, making it easier for users to verify the encoded data without requiring a scanner. The [`displayText`](https://ej2.syncfusion.com/angular/documentation/api/barcode/barcodeGeneratorModel/#displaytext) property enables you to customize the visible text that appears below the DataMatrix barcode, which can be different from the actual encoded data if needed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/datamatrix/text-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/datamatrix/text-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/datamatrix/text-cs1" %}