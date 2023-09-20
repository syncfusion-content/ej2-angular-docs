---
layout: post
title: BarcodeGenerator in Angular Barcode component | Syncfusion
description: Learn here all about BarcodeGenerator in Syncfusion Angular Barcode component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: BarcodeGenerator 
documentation: ug
domainurl: ##DomainURL##
---

# BarcodeGenerator in Angular Barcode component

## Code39

The Code 39 character set includes the digits 0-9, the letters A-Z (upper case only), and the symbols: space, minus (-), plus (+), period (.), dollar sign ($), slash (/), and percent (%). A special start / stop character is placed at the beginning and ending of each barcode. The barcode can be of any length; even more than 25 characters begin to push the bounds. Code 39 is the only type of barcode that does not require a checksum for common use.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/code39-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/barcode/barcodegenerator/code39-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/code39-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/barcodegenerator/code39-cs1" %}

## Code39 Extended

Code 39 Extended is an extended version of Code 39 that supports ASCII character set. In Code 39 Extended, you can also code 26 lower letters (a-z) and the special characters in the keyboard.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/code39extd-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/barcode/barcodegenerator/code39extd-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/code39extd-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/barcodegenerator/code39extd-cs1" %}

## Code 11

Code 11 is used primarily for labeling the telecommunication equipment’s. The character set includes the digits 0 to 9, a dash (-), and a start / stop code.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/code11-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/barcode/barcodegenerator/code11-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/code11-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/barcodegenerator/code11-cs1" %}

## Codabar

Codabar is a variable length symbol that encodes the following 20 characters:

0123456789-$:/.+ABCD

The characters, A, B, C and D are used as start and stop characters. Codabar is used in libraries, blood banks, the package delivery industry and a variety of other information processing applications.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/code11-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/barcode/barcodegenerator/code11-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/code11-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/barcodegenerator/code11-cs2" %}

## Code 32

Code 32 is mainly used for coding pharmaceuticals, cosmetics and dietetics. It is often used to encode Italian Pharmacode that has the following structure:
* ‘A’ character (ASCII 65), that is not really encoded.
* 8 digits for Pharmacode (It generally begins with / and prefixed with 0).
* 1 digit for checksum module 10, that is automatically calculated by barcode.

The value to be encoded must be 8 digits Pharmacode (prefix it with ‘0’ if necessary) and the 9th digit (the checksum) is automatically calculated by barcode.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/code32-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/barcode/barcodegenerator/code32-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/code32-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/barcodegenerator/code32-cs1" %}

## Code 93

Code 93 is designed to complement and improve upon Code 39. It can represent the entire ASCII character set by using combinations of 2 characters. Code 93 is a continuous, variable-length symbology and produces denser code. The Standard Mode (default implementation) can encode uppercase letters (A-Z), digits (0-9), and special characters like *, -, $, %, (Space), ., /, and +.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/code93-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/barcode/barcodegenerator/code93-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/code93-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/barcodegenerator/code93-cs1" %}

## Code 93 Extended

The Code 93 Extended Barcode symbology is continuous, variable length, and self-checking. It is based on Code 93 Barcode. The Extended Version can encode all 128 ASCII characters.

## Code 128

Code 128 is a variable length, high density, alphanumeric, linear bar code symbology, capable of encoding the full 128-character ASCII character set and extended character sets. This symbology includes a checksum digit for verification and the barcode can also be verified character-by-character by verifying the parity of each data byte.

### Code 128 Code Sets

     * Code Set A (or Chars Set A) includes all of the standard upper case U.S. alphanumeric keyboard characters and punctuation characters along with the control   characters, (namely, characters with ASCII values from 0 to 95 inclusive), and seven special characters.
     * Code Set B (or Chars Set B) includes all of the standard upper case alphanumeric keyboard characters and punctuation characters along with the lower case     alphabetic characters (namely, characters with ASCII values from 32 to 127 inclusive), and seven special characters.
     * Code Set C (or Chars Set C) includes the set of 100 digit pairs from 00 to 99 inclusive along with three special characters. This allows numeric data to be   encoded as two data digits per symbol character, at effectively twice the density of standard data.

### Code 128 Special characters

The last seven characters of Code Sets A and B (character values 96 - 102) and the last three characters of Code Set C (character values 100 - 102) are special non-data characters with no ASCII character equivalents that have a particular significance to the Barcode reading device.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/code128-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/barcode/barcodegenerator/code128-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/code128-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/barcodegenerator/code128-cs1" %}

## Customizing the Barcode color

A page or printed media with barcode often appears colorful in the background and surrounding region with other contents. In such cases the barcode can also be customized to suit the needs. You can achieve this by using for forecolor property .

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/color-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/barcode/barcodegenerator/color-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/color-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/barcodegenerator/color-cs1" %}

## Customizing the Barcode dimension

The dimension of the barcode can be changed using the height and width property of the barcodegenerator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/dimension-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/barcode/barcodegenerator/dimension-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/dimension-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/barcodegenerator/dimension-cs1" %}

## Customizing the text

In barcode generators you can customize the barcode text by using display text property .

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/text-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/barcode/barcodegenerator/text-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/text-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/barcodegenerator/text-cs1" %}