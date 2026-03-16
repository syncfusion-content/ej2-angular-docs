---
layout: post
title: Title and Subtitle in Angular Sankey component | Syncfusion
description: Learn here all about Title and Subtitle in Syncfusion Angular Sankey component of Syncfusion Essential JS 2 and more.
control: Title and Subtitle
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Title and Subtitle in Angular Sankey component

The Sankey component supports adding descriptive titles and subtitles to provide context for diagrams. Both can be styled and aligned. Additionally: These text elements help users quickly understand the purpose and content of the diagram, and you can customize text, styling, alignment, and appearance using dedicated properties.

## Properties

| Property | Type | Description |
|----------|------|-------------|
| title | string | The main title text. Also: displayed at the top of the chart. |
| subTitle | string | The subtitle text. Also: displayed below the main title. |
| titleStyle | object | Styling options for the title. |
| subTitleStyle | object | Styling options for the subtitle. |

## Title/Subtitle Style Properties

Both `titleStyle` and `subTitleStyle` support the following properties:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| size | string | null | Font size for the text. |
| fontWeight | string | null | Font weight (e.g., '400', '700'). |
| fontFamily | string | null | Font family name. |
| color | string | null | Text color. |
| fontStyle | string | 'normal' | Font style ('normal' or 'italic'). |
| opacity | number | 1 | Text opacity (0 to 1). |
| textAlignment | string | 'Center' | Text alignment ('Left', 'Center', 'Right'). |

## Examples

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/title-subtitle/basic-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/title-subtitle/basic-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/title-subtitle/basic-cs1" %}

## Customized Title and Subtitle Styling

Apply custom styling to both the title and subtitle, including font properties, colors, alignment, and opacity to match design requirements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/title-subtitle/customization-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/title-subtitle/customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/title-subtitle/customization-cs1" %}

## Title Only (Without Subtitle)

Add only a title to the Sankey diagram when a subtitle is not needed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/title-subtitle/title-only-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/title-subtitle/title-only-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/title-subtitle/title-only-cs1" %}

## Title with Different Alignments

Control the alignment of title and subtitle text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/title-subtitle/alignment-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/title-subtitle/alignment-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/title-subtitle/alignment-cs1" %}

## Title Best Practices

- **Descriptive**: Use clear, descriptive titles that explain what the chart shows.  
- **Concise**: Keep titles brief and to the point.  
- **Hierarchy**: Make the title larger and bolder than the subtitle.  
- **Readability**: Ensure sufficient contrast between text color and background.  
- **Font Choice**: Use readable fonts like Segoe UI, Arial, or Verdana.