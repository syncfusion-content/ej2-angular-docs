---
layout: post
title: Advanced Accessibility Configuration in Angular Chart | Syncfusion
description: Learn here all about Accessibility customization in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility customization
documentation: ug
domainurl: ##DomainURL##
---

# Advanced Accessibility Configuration in Angular Chart

The [Angular Chart](https://www.syncfusion.com/angular-components/angular-charts) component visualizes data graphically and provides accessibility customization options to improve usability for people with disabilities. This section describes the accessibility attributes available for the Chart component.

For setup steps (installing `@syncfusion/ej2-angular-charts`, registering modules, and applying theme CSS), see the [Getting Started with Angular Chart](../chart/getting-started) page.

The Chart component exposes the following chart-level accessibility properties:

**Accessibility model properties**

* [`accessibilityDescription`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#accessibilitydescription) - Provides a text description for the chart, improving support for screen readers.
* [`accessibilityRole`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#accessibilityrole) - Specifies the role of the chart, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#focusable) - Allows the chart to receive focus, making it accessible via keyboard navigation.
* [`tabIndex`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#tabindex) - Tab order of the accessibility element within the chart.

**Chart component properties**

* [`focusBorderColor`](https://ej2.syncfusion.com/angular/documentation/api/chart#focusbordercolor) - Sets the color of the focus border, enhancing visibility when the chart is focused.
* [`focusBorderMargin`](https://ej2.syncfusion.com/angular/documentation/api/chart#focusbordermargin) - Defines the margin around the focus border.
* [`focusBorderWidth`](https://ej2.syncfusion.com/angular/documentation/api/chart#focusborderwidth) - Specifies the width of the focus border.
* [`tabIndex`](https://ej2.syncfusion.com/angular/documentation/api/chart#tabindex) - Top-level tab order of the Chart container (distinct from `accessibility.tabIndex`, which applies to the accessibility model).

The same `accessibility` model is exposed on `series`, `titleStyle`, `subTitleStyle`, `annotations`, `trendlines`, `zoomSettings`, `indicators`, and `legendSettings`. Use the table below to see where each property applies.

| Property | Chart | Series | Title / Subtitle | Annotations | Trendlines | Zoom | Indicators | Legend |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `accessibilityDescription` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `accessibilityRole` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `accessibilityDescriptionFormat` | – | ✓ | – | – | – | – | – | – |
| `focusable` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `tabIndex` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/accessibility-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/accessibility-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/accessibility-cs1" %}

## Series

The [`series`](https://ej2.syncfusion.com/angular/documentation/api/chart#series) property supports the customization of accessibility for data points. The following accessibility properties in the `series` model can be customized:

* [`accessibilityDescription`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesaccessibility#accessibilitydescription) - Provides a text description for the series root element, enhancing support for screen readers.
* [`accessibilityDescriptionFormat`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesaccessibility#accessibilitydescriptionformat) - Specifies a format for the accessibility description of each point in the series, allowing dynamic content. The format string can include the placeholders such as `${series.name}`, `${point.x}`, `${point.y}`, `${point.high}`, `${point.low}`, `${point.open}`, and `${point.close}`. For example, the format `"${series.name} : ${point.x}"` displays the series name and x-value of the point in the accessibility description. Data point values such as high, low, open, and close apply based on the series type.
* [`accessibilityRole`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesaccessibility#accessibilityrole) - Specifies the role of the series, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesaccessibility#focusable) - Allows the series to receive focus, making it accessible via keyboard navigation.
* [`tabIndex`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesaccessibility#tabindex) - Specifies the tab order of the series element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/accessibility-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/accessibility-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/accessibility-cs2" %}

## Title and subtitle

In the Angular Chart component, the [`title`](https://ej2.syncfusion.com/angular/documentation/api/chart#title) and [`subTitle`](https://ej2.syncfusion.com/angular/documentation/api/chart#subtitle) properties allow you to customize the accessibility of the chart's title and subtitle. Use the [`accessibility`](https://ej2.syncfusion.com/angular/documentation/api/chart/titleSettingsModel#accessibility) property of the [`titleStyle`](https://ej2.syncfusion.com/angular/documentation/api/chart#titlestyle) or [`subTitleStyle`](https://ej2.syncfusion.com/angular/documentation/api/chart#subtitlestyle) (typed as `titleSettingsModel`) to expose the following accessibility properties:

* [`accessibilityDescription`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#accessibilitydescription) - Provides a text description for the chart title and subtitle, enhancing support for screen readers.
* [`accessibilityRole`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#accessibilityrole) - Specifies the role of the chart title and subtitle, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#focusable) - Enables or disables keyboard navigation focus for the title and subtitle.
* [`tabIndex`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#tabindex) - Specifies the tab order of the title and subtitle element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/accessibility-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/accessibility-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/accessibility-cs3" %}

## Annotations

The [`annotations`](https://ej2.syncfusion.com/angular/documentation/api/chart#annotations) property allows you to add annotations to the chart in specific regions. The following [`accessibility`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartannotationsettingsmodel#accessibility) properties in [`annotations`](https://ej2.syncfusion.com/angular/documentation/api/chart#annotations) can be customized for accessibility:

* [`accessibilityDescription`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#accessibilitydescription) - Provides a text description for the annotation, enhancing support for screen readers.
* [`accessibilityRole`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#accessibilityrole) - Specifies the role of the annotation, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#focusable) - Specifies whether annotations are focusable via keyboard navigation.
* [`tabIndex`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#tabindex) - Specifies the tab order of the annotation element, enabling efficient keyboard navigation.

> Note: When binding `accessibility` to an annotation, ensure the required [`coordinateUnits`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartannotationsettingsmodel#coordinateunits), `x`, and `y` properties are set so the annotation is reachable by assistive technology.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/accessibility-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/accessibility-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/accessibility-cs4" %}

## Trendlines

The [`trendlines`](https://ej2.syncfusion.com/angular/documentation/api/chart#trendlines) property allows you to display trends in the data. For more information on configuring trendlines, see the [Trendlines in Angular Chart](../chart/chart-elements/trend-lines) feature page. The following [`accessibility`](https://ej2.syncfusion.com/angular/documentation/api/chart/trendlineModel#accessibility) properties in [`trendlines`](https://ej2.syncfusion.com/angular/documentation/api/chart#trendlines) can be customized for accessibility:

* [`accessibilityDescription`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#accessibilitydescription) - Provides a text description for the trendline, enhancing support for screen readers.
* [`accessibilityRole`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#accessibilityrole) - Specifies the role of the trendline, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#focusable) - Specifies whether trendlines are focusable via keyboard navigation.
* [`tabIndex`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#tabindex) - Specifies the tab order of the trendline element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/accessibility-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/accessibility-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/accessibility-cs5" %}

## Zooming

The [`zoomSettings`](https://ej2.syncfusion.com/angular/documentation/api/chart#zoomsettings) property allows you to adjust the chart's zooming capability. For complete setup, see the [Zooming in Angular Chart](../chart/chart-interactive/zooming) feature page. The following [`accessibility`](https://ej2.syncfusion.com/angular/documentation/api/chart/zoomsettingsmodel#accessibility) properties in [`zoomSettings`](https://ej2.syncfusion.com/angular/documentation/api/chart#zoomsettings) can be customized for accessibility:

* [`accessibilityDescription`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#accessibilitydescription) - Provides a text description for the zoom toolkit items, enhancing support for screen readers.
* [`accessibilityRole`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#accessibilityrole) - Specifies the role of the zoom toolkit items, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#focusable) - Specifies whether zoom toolkit items are focusable via keyboard navigation.
* [`tabIndex`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#tabindex) - Specifies the tab order of the zooming element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/accessibility-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/accessibility-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/accessibility-cs6" %}

## Technical indicators

The [`indicators`](https://ej2.syncfusion.com/angular/documentation/api/chart#indicators) property allows you to analyze the trends and patterns in the data. The following [`accessibility`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalindicatormodel#accessibility) properties in [`indicators`](https://ej2.syncfusion.com/angular/documentation/api/chart#indicators) can be customized for accessibility. If `accessibility` is omitted, the indicator inherits the chart-level accessibility defaults.

* [`accessibilityDescription`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#accessibilitydescription) - Provides a text description for the indicators, enhancing support for screen readers.
* [`accessibilityRole`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#accessibilityrole) - Specifies the role of the indicators, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#focusable) - Specifies whether indicators are focusable via keyboard navigation.
* [`tabIndex`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#tabindex) - Specifies the tab order of the indicators element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/accessibility-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/accessibility-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/accessibility-cs7" %}

## Legend

The [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/chart#legendsettings) property provides information about the series shown in the chart. The following [`accessibility`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettingsModel#accessibility) properties in [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/chart#legendsettings) can be used to alter the accessibility of the chart's legend:

* [`accessibilityDescription`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#accessibilitydescription) - Provides a text description for the legend root element, enhancing support for screen readers.
* [`accessibilityRole`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#accessibilityrole) - Specifies the role of the legend items to screen readers, providing appropriate context.
* [`focusable`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#focusable) - Specifies whether legend items are focusable via keyboard navigation.
* [`tabIndex`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel#tabindex) - Specifies the tab order of the legend element, enabling efficient keyboard navigation.

> Note: Use only valid WAI-ARIA role values for `accessibilityRole` (for example, `img`, `button`, `presentation`, `heading`). Setting an unknown role (such as `note`, `line`, `zoom`, or `indicator`) is ignored by assistive technologies. Negative or non-numeric values for `tabIndex` are ignored by the browser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/accessibility-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/accessibility-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/accessibility-cs8" %}

## Precedence and troubleshooting

* The `accessibility` model on a child element (for example, `series.accessibility`, `indicators.accessibility`, `legendSettings.accessibility`) overrides the chart-level `accessibility` values for that element.
* The `tabIndex` at the chart root and the `tabIndex` inside the `accessibility` model are independent: the root `tabIndex` controls when the Chart container receives focus; `accessibility.tabIndex` controls the inner accessibility element.
* If screen readers do not announce the chart, verify that `accessibilityDescription` is set to a non-empty string and that `accessibilityRole` is a valid WAI-ARIA role.
* If you are using an Angular version older than the one listed in the [Getting Started](../chart/getting-started) page, the `accessibility` model and its child properties may not be available; upgrade `@syncfusion/ej2-angular-charts` to the latest version.

## See also

* [Accessibility in Angular Chart](../chart/accessibility)
* [Getting Started with Angular Chart](../chart/getting-started)
* [Chart Events in Angular Chart](../chart/chart-events)