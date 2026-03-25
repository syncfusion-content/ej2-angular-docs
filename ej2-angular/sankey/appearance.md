---
layout: post
title: Appearance in Angular Sankey component | Syncfusion
description: Learn here all about Appearance in Syncfusion Angular Sankey component of Syncfusion Essential JS 2 and more.
control: Appearance
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Angular Sankey component

The Sankey component provides comprehensive customization options to control visual appearance, dimensions, responsiveness, colors, borders, and themes. These appearance settings enable you to create diagrams that match your application's design system and user experience requirements.

## Dimensions

Control the size of the Sankey component using the `width` and `height` properties. You can specify dimensions in pixels (px) or percentages (%) to create fixed or responsive layouts.

### Width and Height Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| width | string | null | Width of the diagram as a CSS value (e.g., '700px' or '100%'). |
| height | string | null | Height of the diagram as a CSS value (e.g., '420px' or '100%'). |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/appearance/dimensions-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/appearance/dimensions-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/appearance/dimensions-cs1" %}

## Responsive Sizing

Use percentage-based dimensions for responsive layouts that adapt to container sizes. This is recommended for applications that need to work across different device sizes and screen orientations.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/appearance/responsive-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/appearance/responsive-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/appearance/responsive-cs1" %}

## Background Customization

Customize the background and border of the Sankey diagram to match your application's theme.

### Background Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| background | string | null | Background color of the chart (CSS color value). |
| backgroundImage | string | null | Background image URL. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/appearance/background-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/appearance/background-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/appearance/background-cs1" %}

## Border Customization

### Border Properties

Customize the border of the Sankey Chart container.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| border.color | string | '' | Border color. Accepts values in  hex or RGBA as valid CSS color strings. |
| border.width | number | 1 | Border width in pixels. |
| border.dashArray | string | '' | Sets the length of dashes in the stroke of border. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/appearance/border-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/appearance/border-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/appearance/border-cs1" %}

## Margin Customization

Control the spacing around the chart content using margins.

### Margin Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| margin.left | number | 10 | Left margin in pixels. |
| margin.right | number | 10 | Right margin in pixels. |
| margin.top | number | 10 | Top margin in pixels. |
| margin.bottom | number | 10 | Bottom margin in pixels. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/appearance/margin-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/appearance/margin-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/appearance/margin-cs1" %}

## Theme

The Sankey component provides multiple built-in themes to customize the visual appearance. Apply a theme using the `theme` property.

### Theme Configuration

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/appearance/theme-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/appearance/theme-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/appearance/theme-cs1" %}