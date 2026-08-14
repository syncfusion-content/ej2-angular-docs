---
layout: post
title: Events in Angular Timeline | Syncfusion
description: Handle the created and beforeItemRender events of the Syncfusion Angular Timeline to react after render or customize each item before display.
platform: ej2-angular
control: Timeline
documentation: ug
domainurl: ##DomainURL##
---

# Events in Angular Timeline

This section describes the Timeline events that trigger when appropriate actions are performed. The following events are available in the Timeline component.

## created

The Timeline component triggers the [created](../api/timeline#created) event when the component rendering is complete and the Timeline is ready for interaction.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/events/created/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/events/created/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/events/created/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/timeline/events/created/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/events/created" %}

## beforeItemRender

The Timeline component triggers the [beforeItemRender](../api/timeline#beforeitemrender) event before rendering each timeline item, allowing customization of individual items during rendering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/events/beforeItemRender/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/events/beforeItemRender/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/events/beforeItemRender/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/timeline/events/beforeItemRender/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/events/beforeItemRender" %}