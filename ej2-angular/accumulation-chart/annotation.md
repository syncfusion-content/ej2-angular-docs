---
layout: post
title: Annotation in Angular Accumulation chart component | Syncfusion
description: Learn here all about Annotation in Syncfusion Angular Accumulation chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Annotation 
documentation: ug
domainurl: ##DomainURL##
---

# Annotation in Angular Accumulation chart component

The annotations are used to mark the specific area of interest in the chart area with texts, shapes or images.

<!-- markdownlint-disable MD033 -->

By using the <code>content</code> option of annotation property, you can specify the Id of the element that needs to be displayed in the chart area.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/pie-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/pie-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/pie-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/pie-cs1" %}

>Note: To use annotation feature in accumulation chart, we need to inject `AccumulationAnnotationService` into the `@NgModule.providers`.

## Region

The annotation can be placed with respect to either `Series` or `Chart`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/pie-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/pie-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/pie-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/pie-cs2" %}

## Co-ordinate Units

Specifies the coordinate units of an annotation either in `Pixel` or `Point`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/pie-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/pie-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/pie-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/pie-cs3" %}

## Alignment

The annotations provides the `verticalAlignment`or `horizontalAlignment` properties.
The `verticalAlignment` property can be customized via `Top`, `Bottom` or `Middle` and the `horizontalAlignment` property can be customized via `Near`, `Far` or `Center`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/pie-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/pie-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/pie-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/pie-cs4" %}