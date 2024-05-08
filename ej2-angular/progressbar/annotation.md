---
layout: post
title: Annotation in Angular Progress bar component | Syncfusion
description: Learn here all about Annotation in Syncfusion Angular Progress bar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Annotation 
documentation: ug
domainurl: ##DomainURL##
---
# Annotation in Angular Progress bar component

## Annotation

In the circular progress bar, you can add any view to the center using the **Content** property in annotation.

For example, you can include add, start, or pause button to control the progress. You can also add an image that indicates the actual task in progress or add custom text that conveys how far the task is completed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progressbar/annotation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progressbar/annotation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progressbar/annotation-cs1" %}

## Label

You can show the progress value in both linear and cicular progress bar using **showProgressValue** property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progressbar/annotation-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progressbar/annotation-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progressbar/annotation-cs2" %}