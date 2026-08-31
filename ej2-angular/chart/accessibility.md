---
layout: post
title: Accessibility in Angular Chart | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Chart
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Chart

The Chart component follows the accessibility guidelines and standards, including [ADA](https://www.ada.gov), [Section 508](https://www.section508.gov), [WCAG 2.2](https://www.w3.org/TR/WCAG22), and relevant [WAI-ARIA](https://www.w3.org/TR/wai-aria#roles) roles.

Accessibility features (keyboard navigation, ARIA wiring, and high-contrast support) are enabled by default. You can customize the accessible name and ARIA role of the chart using the [`accessibility`](https://ej2.syncfusion.com/angular/documentation/api/chart/accessibilitymodel) property (`accessibilityDescription` and `accessibilityRole`), and adjust the visible focus indicator with [`focusBorderColor`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartmodel#focusbordercolor), [`focusBorderWidth`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartmodel#focusborderwidth), and [`focusBorderMargin`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartmodel#focusbordermargin). Refer to the [Getting Started](../chart/getting-started) page for Angular and `@syncfusion/ej2-angular-charts` version requirements.

## Configuring accessibility

The following example shows how to provide an accessible description, set the ARIA role, and customize the focus border for the Chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/accessibility-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/accessibility-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/accessibility-cs9" %}

The Chart component's accessibility compliance is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508](https://www.section508.gov) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker](https://www.npmjs.com/package/accessibility-checker) Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core](https://www.npmjs.com/package/axe-core) Accessibility Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>


## WAI-ARIA attributes

The Chart component follows the [WAI-ARIA](https://www.w3.org/WAI/ARIA) patterns to meet accessibility requirements. The following ARIA roles and attributes are used by the Chart component.

**Roles**

* `role="img"` - Applied to the chart container.
* `role="button"` - Applied to interactive elements such as legend items and selectable data points.
* `role="region"` - Applied to logical groupings within the chart (for example, the legend or plot area) so they are announced as named regions.

**Attributes**

* `aria-label` - Provides an accessible name for the chart or for individual elements that have no visible text.
* `aria-hidden` - Hides purely decorative elements from assistive technologies.
* `aria-pressed` - Communicates the toggled state of interactive elements such as legend items.

## Keyboard interaction

The Chart component follows keyboard interaction guidelines to improve accessibility for users of assistive technology and for keyboard-only users. Shortcuts are grouped below by context (mode) so it is clear which keys apply where.

**General navigation**

| **Press** | **Action** |
| --- | --- |
| <kbd>Alt + J</kbd> | Moves focus to the chart container (first focusable chart element such as the first series/point or legend). |
| <kbd>Tab</kbd> | Moves focus to the next focusable element within the chart. |
| <kbd>Shift + Tab</kbd> | Moves focus to the previous focusable element within the chart. |
| <kbd>Enter / Space</kbd> | Activates or selects the focused element (for example, toggles a legend item or selects a data point). |
| <kbd>Esc</kbd> | Closes tooltips or modal overlays (if open). |

**Series / Data-point navigation**

| **Press** | **Action** |
| --- | --- |
| <kbd>Left Arrow</kbd> | Moves focus to the previous data point in the active series. |
| <kbd>Right Arrow</kbd> | Moves focus to the next data point in the active series. |
| <kbd>Up Arrow</kbd> | Moves focus to the data point above when applicable. |
| <kbd>Down Arrow</kbd> | Moves focus to the data point below when applicable. |
| <kbd>Enter / Space</kbd> | Selects the focused data point. |

**Legend focus mode**

(To focus the legend, press <kbd>Tab</kbd> until the legend receives focus, or use keyboard navigation to move into legend items.)

| **Press** | **Action** |
| --- | --- |
| <kbd>Left Arrow</kbd> | Moves legend focus to the previous legend item. |
| <kbd>Right Arrow</kbd> | Moves legend focus to the next legend item. |
| <kbd>Up Arrow</kbd> | Moves legend focus up one item (if legend is vertical). |
| <kbd>Down Arrow</kbd> | Moves legend focus down one item (if legend is vertical). |
| <kbd>Enter / Space</kbd> | Toggles visibility of the focused series (show/hide). |

**Zoom / Pan mode**

(Enable zooming/panning in the chart's configuration to use these shortcuts.)

| **Press** | **Action** |
| --- | --- |
| <kbd>Ctrl + +</kbd> | Zoom in the chart. |
| <kbd>Ctrl + -</kbd> | Zoom out the chart. |
| <kbd>Left / Right Arrow</kbd> | Pan the chart horizontally when pan is enabled. |
| <kbd>Up / Down Arrow</kbd> | Pan the chart vertically when pan is enabled. |
| <kbd>R</kbd> | Reset the zoom/pan to the default view. |

**Notes and clarifications**

- The meaning of arrow keys depends on the current focus and mode: when the legend is focused, arrow keys move between legend items; when a data point or series is focused, arrow keys move between points/series; when pan/zoom is enabled and active, arrow keys pan the chart.
- When more than one mode is active at the same time (for example, a data point has focus while pan is enabled), focus-based navigation takes precedence over panning. Press <kbd>Esc</kbd> to leave the data point and return pan control to the chart area.
- The table above shows the keys commonly supported; behavior can vary slightly depending on chart configuration (for example, stacked vs. grouped series) and platform.

## Ensuring accessibility

The Chart component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Chart component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/chart.html) in a new window to evaluate the accessibility of the Chart component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/chart.html" %}

## See also

* [Accessibility in Angular components](../common/accessibility)
* [Getting Started with Angular Chart](../chart/getting-started)
* [Legend in Angular Chart](../chart/legend)
* [Chart Events in Angular Chart](../chart/chart-events)