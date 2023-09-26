---
layout: post
title: Globalization in Angular Timepicker component | Syncfusion
description: Learn here all about Globalization in Syncfusion Angular Timepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Globalization 
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in Angular Timepicker component

Globalization is the combination of internationalization and localization. You can adapt the component to various languages by means of parsing and formatting the date or number [`internationalization`](../common/Globalization/internationalization/) and also add culture specific customization and translation to the text [`localization`](../common/globalization/localization).

By default, the time format and meridian names are specific to the `American English` culture. It utilizes the [`Essential JavaScript 2 Internationalization`](../common/Globalization/internationalization/) package to parse and format the date object based on the culture by using the official [`UNICODE CLDR`](http://cldr.unicode.org/) JSON data. It provides the `loadCldr` method to load culture specific CLDR JSON data. To go with the different culture other than `English`, follow the steps below.

* Install the `CLDR-Data` package by using the following command (it installs all the CLDR JSON data.
To known more about CLDR-Data refer the [`CLDR-Data`](https://cldr.unicode.org/index/cldr-spec/cldr-json-bindings) link.

```
npm install cldr-data --save
```

* Once the package installed, you can find the culture specific JSON data under the location `/node_modules/cldr-data`.

* Now import the installed CLDR JSON data into the `app.component.ts` file.

* Now use the [`loadCldr`](http://ej2.syncfusion.com/documentation/base/internationalization#cldr-data-dependencies) method to load the culture specific CLDR JSON data from the installed location to `app.component.ts` file.

* TimePicker displayed `Sunday` as the first day of week based on default culture ("en-US"). If you want to display the TimePicker with loaded culture’s first day of week, you need to import `weekdata.json` file from the `cldr-data/suppemental` as given in the code example.

```typescript

import { loadCldr } from '@syncfusion/ej2-base';

declare var require: any;

loadCldr(
    require('cldr-data/supplemental/numberingSystems.json'),
    require('cldr-data/main/de/ca-gregorian.json'),
    require('cldr-data/main/de/numbers.json'),
    require('cldr-data/supplemental/weekdata.json') // To load the culture based first day of week
);

```

* Before changing to a culture other than `English`, ensure that the locale text for the concerned culture is loaded through `L10n.load` method.

```typescript

//Load the L10n from ej2-base
import { L10n } from '@syncfusion/ej2-base';

//load the locale object to set the localized placeholder value
L10n.load({
    'de': {
        'timepicker': { placeholder: 'Wählen Sie Zeit' }
    }
});

 ```

* Set the culture by using the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/timepicker#locale) property. In the following code example, the TimePicker component is initialized in `German` culture with corresponding localized text.

```typescript

import { Component } from '@angular/core';
import { L10n, loadCldr } from '@syncfusion/ej2-base';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);

declare var require: any;

loadCldr(
    require('cldr-data/supplemental/numberingSystems.json'),
    require('cldr-data/main/de/ca-gregorian.json'),
    require('cldr-data/main/de/numbers.json')
);

@Component({
    selector: 'app-root',
    template: `
        <ejs-timepicker [locale]='culture'></ejs-timepicker>
        `
})

export class AppComponent {
    public culture: string = 'de';
    constructor() {}
    ngOnInit(): void {
        L10n.load({
            'de': {
                'timepicker': { placeholder: 'Wählen Sie Zeit' }
            }
        });
    }
}

```

The following sample demonstrate the TimePicker component in `German` culture.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timepicker/internationalization-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/timepicker/internationalization-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timepicker/internationalization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timepicker/internationalization-cs1" %}

## Right-To-Left

The TimePicker supports RTL (right-to-left) functionality for languages like Arabic and Hebrew to displays the text in the right-to-left direction. Use [`enableRtl`](https://ej2.syncfusion.com/angular/documentation/api/timepicker#enablertl) property to set the RTL direction.

The following code example demonstrates the TimePicker component in `Arabic` culture. It also explains how to set localized text to the placeholder using `L10n.load` method.

```typescript

import { Component } from '@angular/core';
import { L10n, loadCldr } from '@syncfusion/ej2-base';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);

declare var require: any;

loadCldr(
    require('cldr-data/supplemental/numberingSystems.json'),
    require('cldr-data/main/ar/ca-gregorian.json'),
    require('cldr-data/main/ar/numbers.json')
);

@Component({
    selector: 'app-root',
    template: `
        <ejs-timepicker [locale]='culture' [enableRtl]='isRTL' [value]='dateValue'></ejs-timepicker>
        `
})

export class AppComponent {
    public culture: string = 'ar';
    public isRTL: boolean = true;
    public dateValue: Date = new Date();
    constructor() {
    }
    ngOnInit(): void {
        L10n.load({
            'ar': {
                'timepicker': { placeholder: 'حدد الوقت' }
            }
        });
    }
}

```

The following example demonstrates TimePicker in `Arabic` culture with right-to-left direction.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timepicker/rtl-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/timepicker/rtl-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timepicker/rtl-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timepicker/rtl-cs1" %}