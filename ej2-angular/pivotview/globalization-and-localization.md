---
layout: post
title: Globalization and localization in Angular Pivotview component | Syncfusion
description: Learn here all about Globalization and localization in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Globalization and localization 
documentation: ug
domainurl: ##DomainURL##
---

# Globalization and localization in Angular Pivotview component

Globalization is the combination of Internationalization and localization. You can adapt the component to various languages by parsing and formatting the date or number ([`Internationalization`](https://ej2.syncfusion.com/angular/documentation/common/internationalization/)) & adding culture specific customization and translation to the text ([`Localization`](https://ej2.syncfusion.com/angular/documentation/common/localization/)).

## Internationalization

Internationalization library provides support for formatting and parsing the number, date, and time by using the official [`Unicode CLDR`](http://cldr.unicode.org/) JSON data and also provides the `loadCldr` method to load the culture specific CLDR JSON data.

By default, all the Essential JS 2 component are specific to English culture ('en-US'). If you want to go with the different culture other than English, follow the below steps.

* Install the `CLDR-Data` package by using the below command (it installs the CLDR JSON data). For more information about CLDR-Data, refer to this [link](http://cldr.unicode.org/index/cldr-spec/json).

  ```
   npm install cldr-data --save
  ```

* Once the package installed, you can find the culture specific JSON data under the location `/node_modules/cldr-data`.

* Download the required locale packages to render the angular Pivot Table component with specified locale. To download the locale definition of angular components, use this [link](https://github.com/syncfusion/ej2-locale).

* Now import the required culture from the installed location to `app.ts` file, like the below code snippets.

   ```typescript
     //import the loadCldr from ej2-base
    import { loadCldr} from '@syncfusion/ej2-base';

   loadCldr(
    require('cldr-data/supplemental/numberingSystems.json'),
    require('cldr-data/main/fr-CH/ca-gregorian.json'),
    require('cldr-data/main/fr-CH/numbers.json'),
    require('cldr-data/main/fr-CH/timeZoneNames.json'));
  ```

  The Internationalization library is used to globalize number, date, and time values in pivot table component using the `dataSourceSettings.formatSettings` option.

* Set the culture by using the `locale` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs110/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs110/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs110/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs110" %}

> * In the above sample, `Amount` field is formatted by [`NumberFormatOptions`](https://ej2.syncfusion.com/angular/documentation/common/internationalization/#manipulating-numbers). For date formats, the value strings are formatted by [`DateFormatOptions`](https://ej2.syncfusion.com/angular/documentation/common/internationalization/#manipulating-datetime).
> * By default, `locale` value is `en-US`. If you want to change the `en-US` culture to a different culture, you have to change  the `locale` accordingly.
> * Also, you will find more details about support format string for number formats and data formats [`here`](https://ej2.syncfusion.com/angular/documentation/common/internationalization/#supported-format-string).

### Decimal separators

<!-- markdownlint-disable MD009 -->
The decimal separators of pivot table values varies based on the culture applied to the component. The culture can be set by calling the method [`setCulture`](https://ej2.syncfusion.com/angular/documentation/common/internationalization/#setting-global-culture) with appropriate culture string as its parameter. 

The following example demonstrates the decimal separators in `Deutsch` culture.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs111/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs111/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs111/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs111" %}

## Localization

The [`Localization`](https://ej2.syncfusion.com/documentation/common/api-l10n.html) library allows you to localize default text content of the pivot table. The pivot table component has static text on some features (like drop area text, pivot field list title, etc...) that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the `locale` value and translation object.

The following list of properties and its values are used in the pivot table.

Locale keywords |Text
-----|-----
grandTotal | Grand Total
total | Total
value | Value
noValue | No value
row | Row
column | Column
collapse | Collapse
expand | Expand
rowAxisPrompt | Drop row here
columnAxisPrompt | Drop column here
valueAxisPrompt | Drop value here
filterAxisPrompt | Drop filter here
filter | Filter
filtered | Filtered
sort | Sort
filters | Filters
rows | Rows
columns | Columns
values | Values
close | Close
cancel | Cancel
delete | Delete
calculatedField | Calculated Field
createCalculatedField | Create Calculated Field
fieldName | Enter the field name
error | Error
invalidFormula | Invalid formula.
dropText | Example: ("Sum(Order_Count)" + "Sum(In_Stock)") * 250
dropTextMobile | Add fields and edit formula here.
dropAction | Calculated field cannot be place in any other region except value axis.
alert | Alert
warning | Warning
ok | OK
search | Search
drag | Drag
remove | Remove
sum | Sum
average | Average
count | Count
min | Min
max | Max
allFields | All Fields
formula | Formula
addToRow | Add to Row
addToColumn | Add to Column
addToValue | Add to Value
addToFilter | Add to Filter
emptyData | No records to display
fieldExist | A field already exists in this name. Please enter a different name.
confirmText | A calculation field already exists in this name. Do you want to replace it?
noMatches | No matches
format | Summaries values by
edit | Edit
clear | Clear
formulaField | Drag and drop fields to formula
dragField | Drag field to formula

The following list of properties and its values are used in the pivot field list.

Locale keywords |Text
-----|-----
staticFieldList | Pivot Field List
fieldList | Field List
dropFilterPrompt | Drop filter here
dropColPrompt | Drop column here
dropRowPrompt | Drop row here
dropValPrompt | Drop value here
addPrompt | Add field here
adaptiveFieldHeader | Choose field
centerHeader | Drag fields between axes below:
add | add
drag | Drag
filter | Filter
filtered | Filtered
sort | Sort
remove | Remove
filters | Filters
rows | Rows
columns | Columns
values | Values
calculatedField | Calculated Field
createCalculatedField | Create Calculated Field
fieldName | Enter the field name
error | Error
invalidFormula | Invalid formula.
dropText | Example: ("Sum(Order_Count)" + "Sum(In_Stock)") * 250
dropTextMobile | Add fields and edit formula here.
dropAction | Calculated field cannot be place in any other region except value axis.
search | Search
close | Close
cancel | Cancel
delete | Delete
alert | Alert
warning | Warning
ok | OK
sum | Sum
average | Average
count | Count
min | Min
max | Max
allFields | All Fields
formula | Formula
fieldExist | A field already exists in this name. Please enter a different name.
confirmText | A calculation field already exists in this name. Do you want to replace it?
noMatches | No matches
format | Summaries values by
edit | Edit
clear | Clear
formulaField | Drag and drop fields to formula
dragField | Drag field to formula

### Loading Translations

To load translation object in an application, use [`load`](https://ej2.syncfusion.com/documentation/common/api-l10n.html#load) function of the [`L10n`](https://ej2.syncfusion.com/documentation/common/api-l10n.html) class.

The following example demonstrates the pivot table in `Deutsch` culture.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs112/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs112/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs112/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs112" %}

## Right-to-left (RTL)

RTL provides an option to switch the text direction and layout of the pivot table component from right to left. It improves the user experiences and accessibility for users who use right-to-left languages (Arabic, Farsi, Urdu, etc...). To enable RTL pivot table, set the `enableRtl` property to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs113/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs113/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs113/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs113" %}

## See Also

* [Internationalization](https://ej2.syncfusion.com/angular/documentation/common/internationalization/)
* [Localization](https://ej2.syncfusion.com/angular/documentation/common/localization/)