---
layout: post
title: Sparkline dimension in Angular Sparkline component | Syncfusion
description: Learn here all about Sparkline dimension in Syncfusion Angular Sparkline component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sparkline dimension 
documentation: ug
domainurl: ##DomainURL##
---

# Sparkline dimension in Angular Sparkline component

## Size for container

Sparkline can be rendered to its container size. You can set the size through inline or CSS as shown in the following code.

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs24/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs24/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs24" %}

<!-- markdownlint-disable MD036 -->

## Size for sparkline

<!-- markdownlint-disable MD036 -->

You can also set the size for sparkline directly using the [`width`](https://ej2.syncfusion.com/angular/documentation/api/sparkline/#width-string) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/sparkline/#height-string) properties.

**In pixel**

You can set the size for sparkline in pixel as demonstrated in the following code.

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs25/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs25/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs25" %}

**In percentage**

By setting values in percentage, sparkline gets its dimension with respect to its container. For example, when the height is set to ‘50%’, sparkline is rendered to half of its container height.

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs26/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs26/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs26" %}
