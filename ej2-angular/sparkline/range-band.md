---
layout: post
title: Range band in Angular Sparkline component | Syncfusion
description: Learn here all about Range band in Syncfusion Angular Sparkline component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Range band 
documentation: ug
domainurl: ##DomainURL##
---

# Range band in Angular Sparkline component

This section explains how to customize the sparkline with multiple range bands.

## Range band customization

The range band feature is used to highlight a particular range along with the y-axis using the [`startRange`] and [`endRange`] properties. You can also customize the [`color`] and [`opacity`] of the range band.

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs22/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs22/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs22" %}

## Multiple range band customization

You can define multiple range bands to a sparkline as shown in the following code sample.

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs23/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs23/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs23" %}