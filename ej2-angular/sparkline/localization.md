---
layout: post
title: Localization in Angular Sparkline component | Syncfusion
description: Learn here all about Localization in Syncfusion Angular Sparkline component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Localization 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular Sparkline component

The sparkline control supports localization. The default culture for localization is `en-US`. You can change the culture using the `setCulture` method.

<!-- markdownlint-disable MD009 -->

## Tooltip format

Sparkline tooltip supports localization. The following code sample shows tooltip text with currency format based on culture.

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs17" %}

## Rtl

If you set the `enableRtl` property to true, then the sparkline will be rendered from rigt-to-left direction.

The following example shows the sparkline is render from "Right-to-left".

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs18/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs18" %}