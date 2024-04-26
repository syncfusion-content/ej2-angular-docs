---
layout: post
title: States in Angular Progress bar component | Syncfusion
description: Learn here all about States in Syncfusion Angular Progress bar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: States 
documentation: ug
domainurl: ##DomainURL##
---
# States in Angular Progress bar component

Visualize progress in different modes.

## Determinate

This is the default state. You can use it when the progress estimation is known.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progressbar/modes-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progressbar/modes-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progressbar/modes-cs1" %}

## Indeterminate

By enabling the **IsIndeterminate** property, the state of the progress bar can be changed to indeterminate when the progress cannot be estimated or is not being calculated. It can be combined with determinate mode to know that the application is estimating progress before the actual progress starts.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progressbar/modes-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progressbar/modes-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progressbar/modes-cs2" %}

## Buffer

You can use a secondary progress indicator when the primary progress depends on the secondary progress. This will allow users to visualize both primary and secondary progress simultaneously.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progressbar/modes-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progressbar/modes-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progressbar/modes-cs3" %}