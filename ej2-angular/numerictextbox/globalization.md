---
layout: post
title: Globalization in Angular Numerictextbox component | Syncfusion
description: Learn here all about Globalization in Syncfusion Angular Numerictextbox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Globalization 
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in Angular Numerictextbox component

## Localization

Localization library allows users to localize the default text contents of the NumericTextBox to different cultures using the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox#locale) property.
In NumericTextBox, spin buttons title for the tooltip will be localized based on the culture.

| Locale key | en-US (default)  |
|------|------|
| incrementTitle |  Increment value |
| decrementTitle |  Decrement value |

### Loading translations

To load translation object in your application use `load` function of `L10n` class.

The below example demonstrates the NumericTextBox in `German` culture with the spin buttons tooltip.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/getting-started-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/getting-started-cs9" %}

## Internationalization

Internationalization library provides support for formatting and parsing the number by using the official [Unicode CLDR](http://cldr.unicode.org) JSON data and also provides the `loadCldr` method to load the culture specific CLDR JSON data. The NumericTextBox comes with built-in internationalization support to adapt based on culture. For more information about internationalization, refer to this [link](https://helpej2.syncfusion.com/angular/documentation/common/globalization/internationalization).

By default, all the Essential<sup style="font-size:70%">&reg;</sup> JS 2  component are specific to English culture ('en-US').
If you want to go with the different culture other than `English`, follow the below steps.

* Install the `CLDR-Data` package by using the below command (it installs the CLDR JSON data). For more information about CLDR-Data, refer to this [link](https://cldr.unicode.org/index/cldr-spec/cldr-json-bindings).

  ```
  npm install cldr-data --save
  ```

 Once the package installed, you can find the culture specific JSON data under the location `/node_modules/cldr-data`.

* Now import the installed CLDR JSON data into the `app.ts` file.

* Now import the required culture from the installed location to `app.ts` file as like the below code snippets.

  ```typescript
  declare var require: any;

  loadCldr(
        require('cldr-data/main/de/numbers.json'),
        require('cldr-data/main/de/currencies.json'),
        require('cldr-data/supplemental/numberingSystems.json'),
        require('cldr-data/supplemental/currencyData.json')
    );
  ```

* Set the culture by using the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox#locale) property.

The below example demonstrates the NumericTextBox in `German` culture with the `EUR` currency format.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/internationalization-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/internationalization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/internationalization-cs1" %}

## Right to Left(RTL)

RTL provides an option to switch the text direction and layout of the NumericTextBox component from right to left. It improves the user experiences and accessibility for users who use right-to-left languages (Arabic, Farsi, Urdu, etc.). To enable RTL NumericTextBox, set the [`enableRtl`](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox#enablertl) to true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/rtl-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/rtl-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/rtl-cs1" %}
