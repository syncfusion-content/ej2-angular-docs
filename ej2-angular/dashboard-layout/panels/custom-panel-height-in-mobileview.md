---
layout: post
title: Mobile Panel Height in Angular Dashboard Layout | Syncfusion
description: Set custom panel heights for mobile view in Syncfusion Angular Dashboard Layout using the mobilePanelHeight property for optimized responsive layouts.
platform: ej2-angular
control: Custom panel height in mobile view
documentation: ug
domainurl: ##DomainURL##
---

# Mobile Panel Height in Angular Dashboard Layout

The Dashboard Layout component supports responsive mobile layout through the [`mediaQuery`](../../api/dashboard-layout#mediaquery) property. However, in mobile view, all panels use a uniform height calculation based on the [`sizeY`](../../api/dashboard-layout/panelModel#sizey) property. The [`mobilePanelHeight`](../../api/dashboard-layout/panelModel#mobilepanelheight) property allows specifying a custom height for individual panels in mobile view, enabling better optimization of responsive layouts.

The table below lists the new panel property and its functionality.

| **Property** | **Description** |
| --- | --- |
| `mobilePanelHeight` | Specifies the height of the panel in cells count for mobile view only. When set, this height overrides the default [`sizeY`](../../api/dashboard-layout/panelModel#sizey) value. If null or undefined, falls back to `sizeY`. |

## Setting mobile panel height

The [`mobilePanelHeight`](../../api/dashboard-layout/panelModel#mobilepanelheight) property allows defining a mobile-specific height for each panel in cells count. This property is applied only when the component is in mobile view (based on the [`mediaQuery`](../../api/dashboard-layout#mediaquery) condition).

Previously, panel heights in mobile view were calculated uniformly based on the viewport width, where all panels adhered to a fixed range from 0 to 1 in the calculation algorithm. The `mobilePanelHeight` property introduces decimal value support for more granular control over panel heights. Just as panel width adapts to the viewport, height can now be adjusted using decimal increments (e.g., 0.5, 1.5, 2.7) in addition to whole numbers, enabling independent height customization.

This helps:
- Reduce unnecessary whitespace in mobile layouts.
- Improve screen space utilization on smaller devices.
- Enhance the user experience by displaying more relevant content within the viewport without excessive scrolling.
- Independently control panel height without relying on the desktop `sizeY` configuration.

For panels without `mobilePanelHeight` defined, the `sizeY` value is used as the default height in mobile view. The `mobilePanelHeight` property is independent of the [`minSizeY`](../../api/dashboard-layout/panelModel#minsizey) and [`maxSizeY`](../../api/dashboard-layout/panelModel#maxsizey) constraints, which apply only to the desktop view.

The following sample demonstrates setting custom heights for panels in mobile view.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dashboard-layout/custom-panel-height-in-mobileview-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/custom-panel-height-in-mobileview-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/custom-panel-height-in-mobileview-cs1" %}