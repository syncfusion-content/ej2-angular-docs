---
layout: post
title: Globalization in Angular Calendar | Syncfusion®
description: Learn how to globalize the Syncfusion Angular Calendar by localizing culture-specific date formats, week, and month names using CLDR data.
platform: ej2-angular
control: Globalization 
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in Angular Calendar

Globalization is the combination of internationalization and localization. You can adapt the component to various languages by parsing and formatting the date or number using the [`Internationalization`](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization) library, and also add culture-specific customization and translation to the text using the [`Localization`](https://ej2.syncfusion.com/angular/documentation/common/globalization/localization) library.

By default, the Calendar date format, week, and month names are specific to the American English culture. It uses the [Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 Internationalization](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization) package to parse and format the date object based on the culture by using the official [`UNICODE CLDR`](http://cldr.unicode.org) JSON data, and also provides the [`loadCldr`](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#installing-cldr-data) method to load the culture-specific CLDR JSON data.

To use a culture other than `English`, follow the below steps. Replace `de` in the code with your culture code.

1. Install the `CLDR-Data` package by using the below command (it installs the CLDR JSON data). To know more about CLDR-Data, refer the [`CLDR-Data`](https://cldr.unicode.org/index/cldr-spec/cldr-json-bindings) link.

   ```
   npm install cldr-data --save
   ```

   Once the package is installed, you can find the culture-specific JSON data under the location `/node_modules/cldr-data`.

2. Import the installed CLDR JSON data into the `app.component.ts` file, and use the [`loadCldr`](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#installing-cldr-data) method to load the culture-specific CLDR JSON data from the installed location into the `app.component.ts` file.

   By default, the Calendar displays `Sunday` as the first day of the week based on the default culture ("en-US"). If you want to display the Calendar with the loaded culture's first day of week, import the `weekdata.json` file from `cldr-data/supplemental` as given in the code example.

   ```typescript
   // import the loadCldr from ej2-base
   import { loadCldr } from '@syncfusion/ej2-base';

   declare var require: any;

   loadCldr(
       require('cldr-data/supplemental/numberingSystems.json'),
       require('cldr-data/main/de/ca-gregorian.json'),
       require('cldr-data/main/de/numbers.json'),
       require('cldr-data/main/de/timeZoneNames.json'),
       require('cldr-data/supplemental/weekdata.json')); // To load the culture-based first day of week
   ```

## Localization

> The `Localization` library allows you to localize default text content of the Calendar. The Calendar component has static text for the `today` feature that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/calendar#locale) value and translation object.

The following table lists the locale keys (L10n keys) supported by the Calendar component. For the Calendar, `today` is the only localizable string.

| **Locale key** | **Text** |
| --- | --- |
| `today` | Name of the button to choose the Today date. |

Before changing to a culture other than `English`, ensure that the locale text for the concerned culture is loaded through the `load` method of the `L10n` class.

```typescript
//Load the L10n, loadCldr from ej2-base
import { loadCldr, L10n } from "@syncfusion/ej2-base";

//load the locale object to set the localized today value
L10n.load({
  de: {
    calendar: {
      today: "heute"
    }
  }
});
```

Set the culture by using the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/calendar#locale) property. The below code example initializes the Calendar component in `German` culture. Note that `weekdata.json` is required only when you want to render the culture-specific first day of week; it is omitted here for brevity.

```typescript
import { Component } from '@angular/core';
// import the loadCldr from ej2-base
import { loadCldr, L10n } from '@syncfusion/ej2-base';

declare var require: any;

loadCldr(
    require('cldr-data/supplemental/numberingSystems.json'),
    require('cldr-data/main/de/ca-gregorian.json'),
    require('cldr-data/main/de/numbers.json'),
    require('cldr-data/main/de/timeZoneNames.json')
    );
@Component({
    selector: 'app-root',
    template: `
    <!-- Sets the value, locale -->
    <ejs-calendar [value]='dateValue' locale='de'></ejs-calendar>`
})

export class AppComponent {
    public dateValue: Object = new Date();
    ngOnInit(): void {
    /*loads the localization text*/
    L10n.load({
      'de': {
        'calendar': {
          today: "heute"
        }
      }
    });
  }
    constructor() {
    }
}
```

The following example demonstrates the Calendar in `German` culture.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/culture-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/culture-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/culture-cs1" %}

## Right-To-Left

The Calendar supports right-to-left functionality for languages like Arabic and Hebrew to display the text in the right-to-left direction. Use the [`enableRtl`](https://ej2.syncfusion.com/angular/documentation/api/calendar#enablertl) property to set the RTL direction. For RTL cultures such as Arabic, you must also load the appropriate main CLDR files (e.g., `cldr-data/main/ar/*`) using `loadCldr` in addition to setting `enableRtl`.

The following example demonstrates the Calendar in `Arabic` culture with the `enableRtl` property.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/rtl-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/rtl-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/rtl-cs1" %}