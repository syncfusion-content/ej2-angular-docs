---
layout: post
title: Globalization in Angular Calendar component | Syncfusion
description: Learn here all about Globalization in Syncfusion Angular Calendar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Globalization 
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in Angular Calendar component

Globalization is the combination of internalization and localization. You can adapt the component to various languages by parsing and formatting the date or number [`Internationalization`](../common/internationalization/) and also add culture specific customization and translation to the text [`localization`](../common/localization/).

By default, Calendar date format, week and month names are specific to American English culture. It utilizes the [`Essential JavaScript 2 Internationalization`](http://ej2.syncfusion.com/documentation/base/intl.html) package to parse and format the date object based on the culture by uses the official [`UNICODE CLDR`](http://cldr.unicode.org/) JSON data and also it provides the [`loadCldr`](http://ej2.syncfusion.com/documentation/base/internationalization#cldr-data-dependencies) method to load the culture specific CLDR JSON data.

To go with the different culture other than `English`, follow the below steps.

* Install the `CLDR-Data` package by using the below command (it installs the CLDR JSON data). To know more about CLDR-Data refer the [`CLDR-Data`](https://cldr.unicode.org/index/cldr-spec/cldr-json-bindings) link.

  ```
  npm install cldr-data --save
  ```

Once the package installed, you can find the culture specific JSON data under the location `/node_modules/cldr-data`.

* Now import the installed CLDR JSON data into the `app.component.ts` file.

* Now use the [`loadCldr`](http://ej2.syncfusion.com/documentation/base/internationalization#cldr-data-dependencies) method to load the culture specific CLDR JSON data from the installed location to `app.component.ts` file.

* Calendar displayed `Sunday` as the first day of week based on default culture ("en-US"). If you want to display the Calendar with loaded culture’s first day of week, you need to import `weekdata.json` file from the `cldr-data/suppemental` as given in the code example.

  ```typescript
  //import the loadCldr from ej2-base
  import { loadCldr} from '@syncfusion/ej2-base';

  declare var require: any;

  loadCldr(
      require('cldr-data/supplemental/numberingSystems.json'),
      require('cldr-data/main/de/ca-gregorian.json'),
      require('cldr-data/main/de/numbers.json'),
      require('cldr-data/main/de/timeZoneNames.json'),
      require('cldr-data/supplemental/weekdata.json')); // To load the culture based first day of week
  ```

> The `Localization` library allows you to localize default text content of the Calendar. The Calendar component has static text for  **today** feature that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/calendar#locale) value and translation object.

Locale keywords |Text
-----|-----
today | Name of the button to choose Today date.

* Before changing to a culture other than `English`, ensure that locale text for the concerned culture is loaded through `load` method of `L10n` class.

  ```typescript
  //Load the L10n, loadCldr from ej2-base
  import { loadCldr, L10n } from "@syncfusion/ej2-base";

  //load the locale object to set the localized placeholder value
  L10n.load({
    de: {
      calendar: {
                today:"heute"
  }
    }
  });
  ```

* Set the culture by using the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/calendar#locale) property. The below code example, initialize the Calendar component in `German` culture.

  ```typescript
  import { Component } from '@angular/core';
  //import the loadCldr from ej2-base
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
            today:"heute"
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
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/calendar/culture-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/culture-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/culture-cs1" %}

## Right-To-Left

The Calendar supports right-to-left functionality for languages like Arabic, Hebrew to displays the text in the right-to-left direction. Use [`enableRtl`](https://ej2.syncfusion.com/angular/documentation/api/calendar#enablertl) property to set the RTL direction.

The following example demonstrates the Calendar in `Arabic` culture with `enableRtl` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/calendar/rtl-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/rtl-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/rtl-cs1" %}