---
layout: post
title: Orientation and RTL in Angular Sankey component | Syncfusion
description: Learn here all about Orientation and RTL in Syncfusion Angular Sankey component of Syncfusion Essential JS 2 and more.
control: Orientation and RTL
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Orientation and RTL in Angular Sankey component

The Sankey Chart supports flexible layout options including horizontal and vertical orientations, as well as right-to-left (RTL) rendering for international applications. These features enable you to create localized and directionally appropriate visualizations.

This guide covers orientation options and RTL configuration for different languages and reading directions.

## Orientation

Control the layout direction of the Sankey Chart using the orientation property. The orientation determines how nodes are arranged and how links flow through the diagram.

### Orientation Options

| Option | Description |
|--------|-------------|
| 'Horizontal' | Nodes flow from left to right. Links flow horizontally between nodes. (Default) |
| 'Vertical' | Nodes flow from top to bottom. Links flow vertically between nodes. |

## Horizontal Orientation

The default orientation displays nodes horizontally across the chart, with flows moving from left to right. This is the standard layout for most Sankey diagrams:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/orientation-rtl/horizontal-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/orientation-rtl/horizontal-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/orientation-rtl/horizontal-cs1" %}

## Vertical Orientation

Display nodes vertically with flows moving from top to bottom. This layout is useful for depicting hierarchical relationships or processes that flow downward:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/orientation-rtl/vertical-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/orientation-rtl/vertical-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/orientation-rtl/vertical-cs1" %}

## Right-to-Left (RTL) Support

Enable RTL rendering for languages that read from right to left (such as Arabic, Hebrew, and Persian) using the `enableRtl` property. RTL mode reverses the horizontal flow direction and mirrors the layout:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/orientation-rtl/rtl-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/orientation-rtl/rtl-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/orientation-rtl/rtl-cs1" %}

## RTL with Horizontal Orientation

Combining RTL mode with horizontal orientation creates a right‑to‑left flow layout. Nodes flow from right to left, and labels are right‑aligned, making it suitable for RTL languages.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/orientation-rtl/rtl-horizontal-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/orientation-rtl/rtl-horizontal-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/orientation-rtl/rtl-horizontal-cs1" %}

## RTL Effects on Layout

When RTL is enabled:

- Nodes flow from right to left in horizontal orientation  
- Legend positions are mirrored  
- Labels and text are right‑aligned  
- Tooltips and menus adjust to RTL layout  
- All UI elements adapt to right‑to‑left reading order  

## Best Practices

- Use RTL when targeting languages like Arabic, Hebrew, Persian, or Urdu  
- Test layouts in both LTR and RTL modes to ensure proper spacing and readability  
- Combine orientation and RTL settings based on visualization needs  
- Ensure all labels and text support the target language and character encoding  