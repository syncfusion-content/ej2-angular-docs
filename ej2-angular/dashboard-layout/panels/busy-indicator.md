---
layout: post
title: Busy Indicator in Angular Dashboard Layout | Syncfusion
description: Show a busy indicator on individual Angular Dashboard Layout panels during data loading using the showBusyIndicator and busyIndicatorTemplate properties.
platform: ej2-angular
control: Dashboard Layout
documentation: ug
domainurl: ##DomainURL##
---

# Busy Indicator in Angular Dashboard Layout

The Angular Dashboard Layout component provides built-in support for displaying a busy indicator over individual panels while data is being fetched or processed. This feature is useful in dashboards where different panels load data from independent network calls and need to visually communicate their loading state to the user.

The busy indicator functionality is controlled by two panel-level properties: [`showBusyIndicator`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/panelModel#showbusyindicator) and [`busyIndicatorTemplate`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/panelModel#busyindicatortemplate).

## showBusyIndicator

The [`showBusyIndicator`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/panelModel#showbusyindicator) property is used to enable or disable the busy indicator overlay on a panel. When set to `true`, the panel content area is covered with a default loading indicator until the property is set back to `false`.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `showBusyIndicator` | `boolean` | `false` | When set to `true`, displays a loading indicator overlay on the panel. |

When the `showBusyIndicator` is enabled on a panel:

- A loading overlay is rendered on top of the panel content.
- The panel content remains intact beneath the overlay and is shown once the indicator is hidden.
- The property can be toggled dynamically to reflect the asynchronous life cycle of data fetching.

## busyIndicatorTemplate

The [`busyIndicatorTemplate`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/panelModel#busyindicatortemplate) property allows you to customize the appearance of the busy indicator by providing a custom HTML string or template content. This is helpful when the default indicator needs to be styled to match the application's branding or replaced with a more descriptive loading message.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `busyIndicatorTemplate` | `string` | `null` | Custom HTML template used to render the busy indicator overlay on the panel. |

When the `busyIndicatorTemplate` is provided:

- The custom template replaces the default loading indicator.
- Any valid HTML markup, including inline SVG, CSS, or icons, can be used as the template content.
- The template is applied only when `showBusyIndicator` is set to `true`.

## Implementation example

The following sample demonstrates how to use the `showBusyIndicator` and `busyIndicatorTemplate` properties to display a custom loading indicator on each panel. After a simulated delay in the `ngOnInit` life cycle hook, the indicators are hidden and the panel content is replaced with the loaded data.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dashboard-layout/busy-indicator-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dashboard-layout/busy-indicator-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/busy-indicator-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/dashboard-layout/busy-indicator-cs1" %}

> Refer to the [Angular Dashboard Layout](https://www.syncfusion.com/angular-ui-components/angular-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [Angular Dashboard Layout example](https://ej2.syncfusion.com/angular/demos/#/material3/dashboard-layout/default) to learn how to present and manipulate data.