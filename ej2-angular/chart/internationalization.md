---
layout: post
title: Internationalization in Angular Chart | Syncfusion
description: Learn here all about Internationalization in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Internationalization 
documentation: ug
domainurl: ##DomainURL##
---

# Internationalization in Angular Chart

Chart supports internationalization for the following elements:

* Data Label — formatted via the `marker.dataLabel.format` property.
* Axis Label — formatted via the axis `labelFormat` property (for example, on `primaryXAxis` / `primaryYAxis`).
* Tooltip — formatted via the `tooltip.format` property.

For more information about number and date formatting, see the EJ2 globalization guide: [Internationalization guide](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization).

<!-- markdownlint-disable MD036 -->
## Globalization

Globalization is the process of designing and developing a component that works in different cultures/locales. Use the internationalization library to localize numbers, dates, and times in the Chart component (for example, with the axis `labelFormat` property or the data label `format`).

### Prerequisites

For non-`en-US` cultures, load the CLDR data, register the culture, and set the currency code once during application initialization, before any chart renders. Place these calls at the top of `main.ts` (or in a single bootstrap module imported before the chart):

```ts
import { loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import * as numberingSystems from 'cldr-data/supplemental/numberingSystems.json';
import * as denumbers from 'cldr-data/main/de/numbers.json';
import * as detimeZoneNames from 'cldr-data/main/de/timeZoneNames.json';
import * as decurrencies from 'cldr-data/main/de/currencies.json';
import * as degregorian from 'cldr-data/main/de/ca-gregorian.json';

loadCldr(
    denumbers, detimeZoneNames, decurrencies, degregorian,
    numberingSystems
);
setCulture('de');
setCurrencyCode('EUR');
```

> If you don't need to change the culture from `en-US`, the bundled sample skips `loadCldr`/`setCulture` and calls only `setCurrencyCode('EUR')`. The axis will still render EUR because `labelFormat: 'c'` reads the globalized currency code set by `setCurrencyCode`. Add `loadCldr`/`setCulture` only when you need localized decimal/grouping separators or non-English culture output.

## Numeric Format

### Currency Format

The example below applies the EUR currency format to the y-axis labels by calling `setCurrencyCode('EUR')` and setting `primaryYAxis.labelFormat` to `'c'`. To extend the same format to data labels and tooltips, see [Customizing Tooltip and Data Label](#customizing-tooltip-and-data-label).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/number-format-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/number-format-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/number-format-cs1" %}

### Date Format

To globalize axis labels to a culture-aware date format, set the axis `valueType` to `DateTime` and use a culture-aware `labelFormat`:

```ts
this.primaryXAxis = {
    title: 'Year',
    valueType: 'DateTime',
    labelFormat: 'd MMM yyyy'
};
```

This requires `loadCldr` and `setCulture` to be configured as shown in [Prerequisites](#prerequisites). To control whether the thousand separator is rendered, set the chart-level `useGroupingSeparator` property (default `false`):

```ts
this.useGroupingSeparator = true;
```

### Customizing Tooltip and Data Label

The bundled snippet only currency-formats the axis. To apply the same format to data labels and tooltips, add `format: 'c2'` to the data label and an inline currency format token (for example, `${point.y:c2}`) to the tooltip `format` string. The `:c2` token uses the currency code set by `setCurrencyCode(...)` and renders two decimal places:

```ts
this.tooltip = {
    enable: true,
    format: '${series.name} <br>${point.x} : ${point.y:c2}'
};
this.marker = {
    dataLabel: {
        visible: true,
        format: 'c2'
    }
};
```

## Troubleshooting

* **Axis/tooltip/data-label still display in `en-US` after setting currency code** — `setCurrencyCode('EUR')` updates the global currency code, but `en-US` formatting (decimal point, thousand separator) is applied by default. Use `labelFormat: 'c'` on the axis (the bundled sample) and `${point.y:c2}` (for tooltips) / `format: 'c2'` (for data labels) so the globalized currency symbol and culture-aware number formatting are rendered. To use a non-`en-US` culture for the formatter, also call `loadCldr(...)` and `setCulture(...)` before the chart is created.
* **Currency symbol missing** — Confirm `setCurrencyCode('EUR')` is being called **before** the chart is created (for example, in `main.ts` rather than inside the component constructor). When using a non-`en-US` culture, also ensure the appropriate CLDR currencies JSON was passed to `loadCldr`.
* **Grouping separator (`,`) not visible** — Verify that `useGroupingSeparator` is set to `true` on the chart (default is `false`).

## See Also

For setup and installation, see [Getting Started with Angular Chart](getting-started).

**Compatibility:** The prerequisites and snippets use standalone Angular components and require Angular 17+ with `@syncfusion/ej2-angular-charts` 20.4.50 or higher.