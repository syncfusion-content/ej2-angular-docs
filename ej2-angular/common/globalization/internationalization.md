---
layout: post
title: Internationalization in Angular Common control | Syncfusion
description: Learn here all about Internationalization in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Internationalization

The Syncfusion<sup style="font-size:70%">&reg;</sup> Internationalization library provides powerful tools for formatting and parsing date and number objects, using the official [Unicode CLDR](http://cldr.unicode.org/) JSON data. By default, the `en-US` locale and `USD` currency code are preset for all Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components.

## Loading CLDR-JSON Data

Syncfusion<sup style="font-size:70%">&reg;</sup> CLDR data package contains JSON data files generated from the official [Unicode CLDR](http://cldr.unicode.org/) JSON data. This package avoids third-party library vulnerabilities present in the older [cldr-data](https://www.npmjs.com/package/cldr-data) package. To use cultures other than `en-US`, load the appropriate CLDR data using the `loadCldr` function.

N> Syncfusion<sup style="font-size:70%">&reg;</sup> CLDR data package is published within a week after each official [Unicode CLDR](http://cldr.unicode.org/) JSON data release.

### Individual file path reference

Load Syncfusion<sup style="font-size:70%">&reg;</sup> CLDR data by referring to individual file paths from the package:

| File Name | Path |
| ------------- | ------------- |
| ca-gregorian | @syncfusion/ej2-cldr-data/main/en/ca-gregorian.json |
| timeZoneNames | @syncfusion/ej2-cldr-data/main/en/timeZoneNames.json |
| numbers | @syncfusion/ej2-cldr-data/main/en/numbers.json |
| currencies | @syncfusion/ej2-cldr-data/main/en/currencies.json |
| numberingSystems | @syncfusion/ej2-cldr-data/supplemental/numberingSystems.json |

### Single file path reference

Alternatively, load Syncfusion<sup style="font-size:70%">&reg;</sup> CLDR data using a single consolidated file:

| File Name | Path |
| ------------- | ------------- |
| ca-gregorian, timeZoneNames, numbers, currencies | @syncfusion/ej2-cldr-data/main/en/all.json |
| numberingSystems | @syncfusion/ej2-cldr-data/supplemental/numberingSystems.json |

>Note: For `en`, dependency files are already loaded in the library.

### Installing CLDR data

Install the Syncfusion<sup style="font-size:70%">&reg;</sup> CLDR data package through npm:

```bash
npm install @syncfusion/ej2-cldr-data
```

### Binding to i18n library

The i18n library uses CLDR data to format and parse numbers and date/time values for the `en` culture. Load the data using the `loadCldr` function:

```typescript
import { loadCldr } from '@syncfusion/ej2-base';
import enNumberData from "@syncfusion/ej2-cldr-data/main/en/numbers.json";
import enTimeZoneData from "@syncfusion/ej2-cldr-data/main/en/timeZoneNames.json";

loadCldr(enNumberData, enTimeZoneData);
```

## Changing Global Culture and Currency Code

Update the default culture and currency code across all Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components using the `setCulture` and `setCurrencyCode` methods:

```typescript
import { setCulture, setCurrencyCode } from '@syncfusion/ej2-base';

setCulture('ar');
setCurrencyCode('QAR');
```

>Note: If global culture is not set, `en-US` is the default locale and `USD` is the default currency code.

## Manipulating Numbers

### Supported format string

Number formatting and parsing align with [NumberFormatOptions](https://ej2.syncfusion.com/documentation/api/base/numberFormatOptions/). Specify relevant properties as shown:

| No | Properties | Description |
| --- | --- | --- |
| 1 | `format` | Specifies the format type. Possible values are:<br />1. **N** – numeric type<br />2. **C** – currency type<br />3. **P** – percentage type<br /><br />Example: `formatNumber(1234344, {format: 'N4'})`<br /><br />Note: If no format is specified, numeric type is used by default. |
| 2 | `minimumFractionDigits` | Specifies the minimum number of fraction digits. Possible values are 0 to 20. |
| 3 | `maximumFractionDigits` | Specifies the maximum number of fraction digits. Possible values are 0 to 20. |
| 4 | `minimumSignificantDigits` | Specifies the minimum number of significant digits. Possible values are 1 to 21.<br /><br />Note: When `minimumSignificantDigits` is set, `maximumSignificantDigits` is mandatory. |
| 5 | `maximumSignificantDigits` | Specifies the maximum number of significant digits. Possible values are 1 to 21.<br /><br />Note: When `maximumSignificantDigits` is set, `minimumSignificantDigits` is mandatory. |
| 6 | `useGrouping` | Enables or disables the group separator. Default value is `true`. |
| 7 | `minimumIntegerDigits` | Specifies the minimum number of integer digits. Possible values are 1 to 21. |
| 8 | `currency` | Specifies the currency code for currency formatting. |

>Note: Properties `minimumIntegerDigits`, `minimumFractionDigits`, and `maximumFractionDigits` form **Group One**. Properties `minimumSignificantDigits` and `maximumSignificantDigits` form **Group Two**. If Group Two properties are defined, Group One properties are ignored.

### Custom number formatting and parsing

Create custom number formats by specifying a pattern directly in the `format` property of `NumberFormatOptions`. Use one or more of the custom format specifiers below:

| Specifier | Description | Input | Output |
| ------- |--------------- | ---------------- | --------------- |
| 0 | Displays the corresponding digit or zero if absent. | `formatNumber(123, {format: '0000'})` | '0123' |
| # | Displays the corresponding digit; omits if absent. | `formatNumber(1234, {format: '####'})` | '1234' |
| . | Denotes decimal point position. | `formatNumber(546321, {format: '###0.##0#'})` | '546321.000' |
| % | Applies percentage format. | `formatNumber(1, {format: '0000 %'})` | '0100 %' |
| $ | Applies currency format based on global currency code. | `formatNumber(13, {format: '$ ###.00'})` | '$ 13.00' |
| ; | Specifies separate formats for positive, negative, and zero values. | `formatNumber(-120, {format: '###.##;(###.00);-0'})` | '(120.00)' |
| 'String' | Displays literal text enclosed in single quotes. | `formatNumber(-123.44, {format: "####.## '@'"})` | '123.44 @' |

>Note: When a custom format pattern is specified, other [`NumberFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/numberFormatOptions/) properties are not applied.

### Number Parsing

#### `getNumberParser`

The [`getNumberParser`](https://ej2.syncfusion.com/documentation/api/base/internationalization/#getnumberparser) method returns a function that parses strings based on the specified [`NumberFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/numberFormatOptions/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/intl-parseNumber1-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/intl-parseNumber1-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/intl-parseNumber1-cs1" %}

#### `parseNumber`

The [`parseNumber`](https://ej2.syncfusion.com/documentation/api/base/internationalization/#parsenumber) method parses a string value based on [`NumberFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/numberFormatOptions/) and returns the numeric value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/intl-parseNumber-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/intl-parseNumber-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/intl-parseNumber-cs1" %}

### Number formatting

#### `getNumberFormat`

The [`getNumberFormat`](https://ej2.syncfusion.com/documentation/api/base/internationalization/#getnumberformat) method returns a function that formats numbers based on the specified [`NumberFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/numberFormatOptions/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/intl-getNumber-format-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/intl-getNumber-format-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/intl-getNumber-format-cs1" %}

#### `formatNumber`

The [`formatNumber`](https://ej2.syncfusion.com/documentation/api/base/internationalization/#formatnumber) method formats a numeric value based on [`NumberFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/numberFormatOptions/) and returns the formatted string.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/intl-getNumber-format-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/intl-getNumber-format-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/intl-getNumber-format-cs2" %}

## Manipulating DateTime

### Supported format string

Date formatting and parsing operations use the [`DateFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/dateFormatOptions/). Specify some or all of the properties shown below:

| Options | Description |
| --- | --- |
| Type | Specifies the format type. Supported types:<br/>1. **`date`**<br/>2. **`dateTime`**<br/>3. **`time`**<br/><br/>Based on the type, supported skeletons are: short, medium, long, full<br/><br/>Example: `formatDate(new Date(), {type: 'date', skeleton: 'medium'})`<br/><br/>Note: If type is not specified, `date` is used by default. |
| skeleton | Specifies the format pattern for date/time output. |

<!-- markdownlint-disable MD036 -->

**Date type skeletons**

| skeleton | Option input | Format Output |
| --- | --- | --- |
| short | {type: 'date', skeleton: 'short'} | 11/4/16 |
| medium | {type: 'date', skeleton: 'medium'} | Nov 4, 2016 |
| long | {type: 'date', skeleton: 'long'} | November 4, 2016 |
| full | {type: 'date', skeleton: 'full'} | Friday, November 4, 2016 |

**Time type skeletons**

| skeleton | Option input | Format Output |
| --- | --- | --- |
| short | {type: 'time', skeleton: 'short'} | 1:03 PM |
| medium | {type: 'time', skeleton: 'medium'} | 1:03:04 PM |
| long | {type: 'time', skeleton: 'long'} | 1:03:04 PM GMT+5 |
| full | {type: 'time', skeleton: 'full'} | 1:03:04 PM GMT+05:30 |

**DateTime type skeletons**

| skeleton | Option input | Format Output |
| --- | --- | --- |
| short | {type: 'dateTime', skeleton: 'short'} | 11/4/16, 1:03 PM |
| medium | {type: 'dateTime', skeleton: 'medium'} | Nov 4, 2016, 1:03:04 PM |
| long | {type: 'dateTime', skeleton: 'long'} | November 4, 2016 at 1:03:04 PM GMT+5 |
| full | {type: 'dateTime', skeleton: 'full'} | Friday, November 4, 2016 at 1:03:04 PM GMT+05:30 |

**Additional skeletons**

Beyond standard date formats, use these additional skeletons for specialized formatting:

| skeleton | Option input | Format Output |
| --- | --- | --- |
| d | {skeleton: 'd'} | 7 |
| E | {skeleton: 'E'} | Mon |
| Ed | {skeleton: 'Ed'} | 7 Mon |
| Ehm | {skeleton: 'Ehm'} | Mon 12:43 AM |
| EHm | {skeleton: 'EHm'} | Mon 12:43 |
| Ehms | {skeleton: 'Ehms'} | Mon 2:45:23 PM |
| EHms | {skeleton: 'EHms'} | Mon 12:45:45 |
| Gy | {skeleton: 'Gy'} | 2016 AD |
| GyMMM | {skeleton: 'GyMMM'} | Nov 2016 AD |
| GyMMMd | {skeleton: 'GyMMMd'} | Nov 7, 2016 AD |
| GyMMMEd | {skeleton: 'GyMMMEd'} | Mon, Nov 7, 2016 AD |
| h | {skeleton: 'h'} | 12 PM |
| H | {skeleton: 'H'} | 12 |
| hm | {skeleton: 'hm'} | 12:59 PM |
| Hm | {skeleton: 'Hm'} | 12:59 |
| hms | {skeleton: 'hms'} | 12:59:13 PM |
| Hms | {skeleton: 'Hms'} | 12:59:13 |
| M | {skeleton: 'M'} | 11 |
| Md | {skeleton: 'Md'} | 11/7 |
| MEd | {skeleton: 'MEd'} | Mon, 11/7 |
| MMM | {skeleton: 'MMM'} | Nov |
| MMMEd | {skeleton: 'MMMEd'} | Mon, Nov 7 |
| MMMd | {skeleton: 'MMMd'} | Nov 7 |
| ms | {skeleton: 'ms'} | 59:13 |
| y | {skeleton: 'y'} | 2016 |
| yM | {skeleton: 'yM'} | 11/2016 |
| yMd | {skeleton: 'yMd'} | 11/7/2016 |
| yMEd | {skeleton: 'yMEd'} | Mon, 11/7/2016 |
| yMMM | {skeleton: 'yMMM'} | Nov 2016 |
| yMMMd | {skeleton: 'yMMMd'} | Nov 7, 2016 |
| yMMMEd | {skeleton: 'yMMMEd'} | Mon, Nov 7, 2016 |

>Note: Culture-specific format skeletons are also supported.

### Custom formats

Create custom date and time formats by specifying a pattern directly in the `format` property. Use one or more of the standard date/time symbols below:

| Symbol | Description |
|--------- |------------- |
| G | Specifies the era in the date. |
| y | Specifies the year. |
| M / L | Specifies the month. |
| E / c | Specifies the day of the week. |
| d | Specifies the day of the month. |
| h / H | Specifies the hour. Use `h` for 12-hour format or `H` for 24-hour format. |
| m | Specifies the minutes. |
| s | Specifies the seconds. |
| f | Specifies the milliseconds. |
| a | Specifies the AM/PM designator (displayed only when hour is in `h` format). |
| z | Specifies the time zone. |
| ' (single quotes) | Displays literal text by enclosing it in single quotes. |

**Custom format example**

```typescript
import { Component } from '@angular/core';
import { Internationalization } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    templateUrl: 'default.html'
})
export class AppComponent {
    ngAfterViewInit() {
        let intl: Internationalization = new Internationalization();
        let formattedString: string = intl.formatDate(
            new Date('1/12/2014 10:20:33'),
            { format: "'year:' y 'month:' MM" }
        );
        // Output: "year: 2014 month: 01"
    }
}
```

>Note: When the `format` property is specified, other [`DateFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/dateFormatOptions/) properties are not applied.

<!-- markdownlint-enable MD036 -->

### Date Parsing

#### `getDateParser`

The [`getDateParser`](https://ej2.syncfusion.com/documentation/api/base/internationalization/#getdateparser) method returns a function for parsing strings based on the specified [`DateFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/dateFormatOptions/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/intl-parseDate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/intl-parseDate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/intl-parseDate-cs1" %}

#### `parseDate`

The [`parseDate`](https://ej2.syncfusion.com/documentation/api/base/internationalization/#parsedate) method parses a string value based on [`DateFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/dateFormatOptions/) and returns the date object.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/intl-parseDate1-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/intl-parseDate1-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/intl-parseDate1-cs1" %}

### Date Formatting

#### `getDateFormat`

The [`getDateFormat`](https://ej2.syncfusion.com/documentation/api/base/internationalization/#getdateformat) method returns a function that formats date objects based on the specified [`DateFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/dateFormatOptions/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/intl-formatDate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/intl-formatDate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/intl-formatDate-cs1" %}

#### `formatDate`

The [`formatDate`](https://ej2.syncfusion.com/documentation/api/base/internationalization/#formatdate) method formats a date object based on [`DateFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/dateFormatOptions/) and returns the formatted string.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/intl-formatDate-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/intl-formatDate-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/intl-formatDate-cs2" %}