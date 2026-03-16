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

The Sankey component supports flexible layout options including horizontal and vertical orientations, and right-to-left (RTL) rendering for localized applications.

## Orientation

Control layout using the `orientation` property.

### Options

| Option       | Description                            |
|--------------|----------------------------------------|
| 'Horizontal' | Nodes flow from left to right (default). |
| 'Vertical'   | Nodes flow from top to bottom.           |

## Horizontal Example

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/orientation-rtl/horizontal-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/orientation-rtl/horizontal-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/orientation-rtl/horizontal-cs1" %}

## Vertical Example

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/orientation-rtl/vertical-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/orientation-rtl/vertical-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/orientation-rtl/vertical-cs1" %}

## RTL Support

Enable RTL with `enableRtl: true` to mirror layouts and align text for RTL languages.

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