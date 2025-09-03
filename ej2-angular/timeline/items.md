---
layout: post
title: Items in Angular Timeline component | Syncfusion
description: Learn here all about Items in Syncfusion Angular Timeline component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Timeline
documentation: ug
domainurl: ##DomainURL##
---

# Items in Angular Timeline component

The Timeline items can be configured by using the `<e-item>` tag directive. Each item supports multiple configuration options including `content`, `oppositeContent`, `dotCss`, `disabled`, and `cssClass` properties to create rich, interactive timeline experiences.

## Adding content

Define the primary content for Timeline items using the [content](../api/timeline/timelineItem/#content) property. This property supports both string values and templated content for flexible content presentation.

### String content

Define simple text content for Timeline items using string values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/items/content/string-based/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/items/content/string-based/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/items/content/string-based/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/timeline/items/content/string-based/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/items/content/string-based" %}

### Templated content

Create rich, dynamic content for Timeline items by specifying template selectors that reference HTML elements with custom markup and styling.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/items/content/template-based/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/items/content/template-based/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% raw %}
{% include code-snippet/timeline/items/content/template-based/src/app.component.html %}
{% endraw %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/timeline/items/content/template-based/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/items/content/template-based" %}

## Adding opposite content

Enhance Timeline items with supplementary information using the [oppositeContent](../api/timeline/timelineItem/#oppositecontent) property. This content appears on the opposite side of the timeline from the main content, providing additional context such as dates, metadata, or secondary details. Like the content property, oppositeContent accepts both string and template values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/items/opposite-content/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/items/opposite-content/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/items/opposite-content/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/timeline/items/opposite-content/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/items/opposite-content" %}

## Customizing dot appearance

Personalize the visual appearance of Timeline item dots using the [dotCss](../api/timeline/timelineItem/#dotcss) property. This property accepts CSS class names that enable custom styling including icons, background images, colors, and text content.

### Adding icons

Apply CSS classes containing icon fonts or icon libraries to display meaningful icons that represent each timeline event or milestone.

### Adding images

Incorporate custom images as dot backgrounds by defining CSS classes with `background-image` properties, perfect for displaying avatars, logos, or event-specific imagery.

### Adding text

Display short text labels within dots using CSS classes that define [`content`](https://ej2.syncfusion.com/angular/documentation/api/timeline/timelineItem/#content) properties, useful for showing abbreviations, numbers, or status indicators.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/items/dot-item/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/items/dot-item/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/items/dot-item/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/timeline/items/dot-item/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/items/dot-item" %}

## Disabling items

Control item interactivity using the [disabled](../api/timeline/timelineItem/#disabled) property. When set to `true`, the item appears in a disabled state with reduced opacity and becomes non-interactive. The default value is `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/items/disabled/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/items/disabled/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/items/disabled/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/timeline/items/disabled/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/items/disabled" %}

## CSS class customization

Apply custom styling to individual Timeline items using the [cssClass](../api/timeline/timelineItem/#cssclass) property. This property accepts CSS class names that enable comprehensive visual customization including colors, fonts, spacing, and layout modifications.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/items/css-class/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/items/css-class/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/items/css-class/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/timeline/items/css-class/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/items/css-class" %}