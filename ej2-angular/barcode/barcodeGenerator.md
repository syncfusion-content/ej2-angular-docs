---
layout: post
title: BarcodeGenerator in Angular Barcode component | Syncfusion®
description: Learn here all about BarcodeGenerator in Syncfusion® Angular Barcode component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: BarcodeGenerator 
documentation: ug
domainurl: ##DomainURL##
---

# BarcodeGenerator in Angular Barcode component

The BarcodeGenerator component enables you to generate and display various types of barcodes in Angular applications. This component supports multiple barcode symbologies including Code39, Code128, Codabar, and more, with extensive customization options for appearance and formatting.

## Code39

Code 39 is a widely-used barcode symbology that supports a specific character set including digits 0-9, uppercase letters A-Z, and special symbols: space, minus (-), plus (+), period (.), dollar sign ($), slash (/), and percent (%). Each barcode includes special start and stop characters at the beginning and end. Code 39 can encode variable-length data, though barcodes with more than 25 characters may become difficult to scan reliably. This symbology is unique as it does not require a checksum for standard applications.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/code39-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/code39-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/barcodegenerator/code39-cs1" %}

## Code39 Extended

Code 39 Extended is an enhanced version of Code 39 that supports the full ASCII character set. This extended version enables encoding of lowercase letters (a-z) and additional special characters available on standard keyboards, providing greater flexibility for diverse data encoding requirements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/code39extd-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/code39extd-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/barcodegenerator/code39extd-cs1" %}

## Code 11

Code 11 is primarily designed for labeling telecommunications equipment. The character set is limited to digits 0-9, a dash (-), and special start/stop characters. This symbology is commonly used in telecommunications and inventory management applications.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/code11-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/code11-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/barcodegenerator/code11-cs1" %}

## Codabar

Codabar is a variable-length symbology that encodes 20 specific characters: 0123456789-$:/.+ABCD. The characters A, B, C, and D serve as start and stop characters. This barcode type is extensively used in libraries, blood banks, package delivery services, and various information processing applications due to its reliability and ease of implementation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/code11-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/code11-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/barcodegenerator/code11-cs2" %}

## Code 32

Code 32 is specifically designed for pharmaceutical, cosmetics, and dietetics industries. This symbology is commonly used to encode Italian Pharmacode with the following structure:

* 'A' character (ASCII 65) prefix, which is not encoded in the barcode itself
* 8 digits representing the Pharmacode (typically begins with forward slash and is zero-prefixed if necessary)
* 1 checksum digit (modulo 10) that is automatically calculated

The input value must be an 8-digit Pharmacode. If the code has fewer than 8 digits, prefix it with zeros. The 9th digit (checksum) is automatically calculated and added by the barcode generator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/code32-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/code32-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/barcodegenerator/code32-cs1" %}

## Code 93

Code 93 was developed as an improvement over Code 39, offering higher data density and enhanced security features. This continuous, variable-length symbology can represent the entire ASCII character set through character combinations. The standard implementation supports uppercase letters (A-Z), digits (0-9), and special characters including *, -, $, %, (Space), ., /, and +.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/code93-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/code93-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/barcodegenerator/code93-cs1" %}

## Code 93 Extended

Code 93 Extended is a continuous, variable-length, self-checking barcode symbology based on the standard Code 93. The extended version provides full support for all 128 ASCII characters, making it suitable for applications requiring comprehensive character encoding capabilities.

## Code 128

Code 128 is a high-density, variable-length, alphanumeric linear barcode symbology capable of encoding the complete 128-character ASCII set and extended character sets. This symbology includes an integrated checksum digit for verification and supports character-by-character validation through parity checking of each data byte.

### Code 128 Character Sets

Code 128 utilizes three distinct character sets to optimize encoding efficiency:

* **Code Set A (Character Set A)**: Includes standard uppercase alphanumeric keyboard characters, punctuation marks, control characters (ASCII values 0-95), and seven special characters
* **Code Set B (Character Set B)**: Encompasses standard uppercase alphanumeric characters, punctuation marks, lowercase alphabetic characters (ASCII values 32-127), and seven special characters  
* **Code Set C (Character Set C)**: Contains 100 digit pairs from 00-99 plus three special characters, enabling numeric data encoding at twice the density of standard character sets

### Code 128 Special Characters

The final seven characters of Code Sets A and B (values 96-102) and the last three characters of Code Set C (values 100-102) are non-data special characters without ASCII equivalents. These characters provide specific instructions to barcode reading devices for enhanced functionality and control.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/code128-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/code128-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/barcodegenerator/code128-cs1" %}

## Customizing Barcode Color

When barcodes appear on colorful backgrounds or alongside other design elements, color customization becomes essential for maintaining readability and visual harmony. The BarcodeGenerator component provides comprehensive color customization through the [`foreColor`](https://ej2.syncfusion.com/angular/documentation/api/barcode/barcodeGeneratorModel/#forecolor) property, allowing you to match your application's design requirements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/color-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/color-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/barcodegenerator/color-cs1" %}

## Customizing Barcode Dimensions

The physical size of generated barcodes can be precisely controlled using the [`height`](https://ej2.syncfusion.com/angular/documentation/api/barcode/barcodeGeneratorModel/#height) and [`width`](https://ej2.syncfusion.com/angular/documentation/api/barcode/barcodeGeneratorModel/#width) properties of the BarcodeGenerator component. Proper dimension settings ensure optimal scanning performance while meeting specific layout requirements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/dimension-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/dimension-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/barcodegenerator/dimension-cs1" %}

## Customizing Display Text

The BarcodeGenerator component allows customization of the human-readable text displayed below the barcode using the [`displayText`](https://ej2.syncfusion.com/angular/documentation/api/barcode/barcodeGeneratorModel/#displaytext) property. This feature enables you to show custom labels or formatted text while maintaining the encoded data integrity within the barcode itself.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/text-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/text-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/barcodegenerator/text-cs1" %}