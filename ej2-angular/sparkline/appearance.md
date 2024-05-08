---
layout: post
title: Appearance in Angular Sparkline component | Syncfusion
description: Learn here all about Appearance in Syncfusion Angular Sparkline component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Angular Sparkline component

The appearance of the sparkline can be customized using margin, container Area border, and container Area background.

## Sparkline border

The `containerArea border` of the sparkline is used to render border to cover sparkline area.

The following code example shows the sparkline with overall border.

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs1" %}

## Sparkline padding

Padding is used to specify padding value between container and sparkline. By default, padding value of the sparkline is 5. Sparkline `padding` values are specified by the left, right, top, and bottom.

The following code example shows the sparkline with overall padding is set to 20.

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs2" %}

## Sparkline area customization

The background color of the sparkline area can be customized using the `containerArea background` color. By default, the sparkline background color is `transparent`.

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs3" %}

## Sparkline theme

Datalabel and track line colors of the sparkline will be changed based on theme. For example, for dark theme, the color of datalabel and track line should be white; for light theme, their value should be black. The possible values for sparkline theme are `Material`, `Fabric`, `Bootstrap`, and `Highcontrast`.

The following code example shows the color for datalabel and track line is set to white for dark theme.

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs4" %}