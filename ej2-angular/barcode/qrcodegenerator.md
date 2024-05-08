---
layout: post
title: Qrcodegenerator in Angular Barcode component | Syncfusion
description: Learn here all about Qrcodegenerator in Syncfusion Angular Barcode component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Qrcodegenerator 
documentation: ug
domainurl: ##DomainURL##
---

# Qrcodegenerator in Angular Barcode component

## QR Code

A QR Code is a two-dimensional barcode that consists of a grid of dark and light dots or blocks that form a square. The data encoded in the barcode can be numeric, alphanumeric, or Shift Japanese Industrial Standards (JIS8) characters. The QR Code uses version from 1 to 40. Version 1 measures 21 modules x 21 modules, Version 2 measures 25 modules x 25 modules, and so on. The number of modules increases in steps of 4 modules per side up to Version 40 that measures 177 modules x 177 modules. Each version has its own capacity. By default, the barcode control automatically set the version according to the length of the input text. The QR Barcodes are designed for industrial uses and also commonly used in consumer advertising.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/qrcode/qrcode-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/qrcode/qrcode-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/qrcode/qrcode-cs1" %}

## Customizing the Barcode color

A page or printed media with barcode often appears colorful in the background and surrounding region with other contents. In such cases the barcode can also be customized to suit the needs. You can achieve this by using for forecolor property .

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/qrcode/color-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/qrcode/color-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/qrcode/color-cs1" %}

## Customizing the Barcode dimension

The dimension of the barcode can be changed using the height and width properties of the barcodegenerator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/qrcode/dimension-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/qrcode/dimension-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/qrcode/dimension-cs1" %}

## Customizing the text

In barcode generators You can customize the barcode text by using display text property .

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/qrcode/text-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/qrcode/text-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/qrcode/text-cs1" %}