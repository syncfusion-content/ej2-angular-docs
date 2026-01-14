---
layout: post
title: Globalization in Angular Datetimepicker component | Syncfusion
description: Learn here all about Globalization in Syncfusion Angular Datetimepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Globalization 
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in Angular Datetimepicker component

Globalization is the combination of internalization and localization. You can adapt the component to various languages by parsing and formatting the date or number [`Internationalization`](../common/Globalization/internationalization) and also add culture specific customization and translation to the text [`localization`](../common/globalization/localization).

By default, the date format, week, month, time format and meridian names are specific to the `American English` culture. It utilizes the [Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 Internationalization](../common/Globalization/internationalization) package to parse and format the date object based on the culture by using the official [`UNICODE CLDR`](https://cldr.unicode.org) JSON data. It provides the `loadCldr` method to load culture specific CLDR JSON data. To use a different culture other than `English`, follow the steps below:

* Install the `CLDR-Data` package by using the following command (installs all the CLDR JSON data). To   know more about CLDR-Data refer to the [`CLDR-Data`](https://cldr.unicode.org/index/cldr-spec/cldr-json-bindings) link.

```
npm install cldr-data --save
```

Once the package installed, you can find the culture specific JSON data under the location `/node_modules/cldr-data`.

* Now import the installed CLDR JSON data into the `app.component.ts` file.

* Now use the [`loadCldr`](https://helpej2.syncfusion.com/angular/documentation/common/globalization/internationalization#installing-cldr-data) method to load the culture specific CLDR JSON data from the installed location to `app.component.ts` file.

* DateTimePicker displayed `Sunday` as the first day of week based on default culture ("en-US"). If you want to display the DateTimePicker with loaded culture’s first day of week, you need to import `weekdata.json` file from the `cldr-data/suppemental` as given in the code example.

```typescript

import { loadCldr } from "@syncfusion/ej2-base";

declare var require: any;

loadCldr(
  require("cldr-data/main/de/numbers.json"),
  require("cldr-data/main/de/ca-gregorian.json"),
  require("cldr-data/supplemental/numberingSystems.json"),
  require("cldr-data/main/de/timeZoneNames.json"),
  require('cldr-data/supplemental/weekdata.json') // To load the culture based first day of week
);
```

> The `Localization` library allows you to localize default text content of the DateTimePicker. The DateTimePicker component has static text for  **today** feature that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/datetimepicker#locale) value and translation object.

Locale keywords |Text
-----|-----
today | Name of the button to choose Today date.
placeholder | Hint to describe expected value in input element.

* Before changing to a culture other than `English`, ensure that locale text for the concerned culture is loaded through `load` method of `L10n` class.

```typescript
//Load the L10n, loadCldr from ej2-base
import { loadCldr, L10n } from "@syncfusion/ej2-base";

//load the locale object to set the localized placeholder value
L10n.load({
  de: {
    datetimepicker: {
       placeholder: "Wählen Sie ein Datum und eine Uhrzeit aus",
       today:"heute"
    }
  }
});

```

* Set the culture by using the `locale` property.
In the following code example, the DateTimePicker is initialized in `German` culture with corresponding localized text.

The following example demonstrates the DateTimePicker in `German` culture.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datetimepicker/localization-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datetimepicker/localization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datetimepicker/localization-cs1" %}

## Right-To-Left

The DateTimePicker supports RTL (right-to-left) functionality for languages like Arabic and Hebrew to displays the text in the right-to-left direction.
Use`enableRtl` property to set the RTL direction.
The following code example initialize the DateTimePicker component in `Arabic` culture and also explains how to set the localized text to the placeholder using `load` method of `L10n` class.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datetimepicker/rtl-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datetimepicker/rtl-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datetimepicker/rtl-cs1" %}