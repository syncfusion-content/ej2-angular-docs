---
layout: post
title: Events in Angular Timeline component | Syncfusion
description: Learn here all about Events in Syncfusion Angular Timeline component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Timeline
documentation: ug
domainurl: ##DomainURL##
---

# Events in Angular Timeline component

This section describes the Timeline events that trigger when appropriate actions are performed. The following events are available in the Timeline component.

## created

The Timeline component triggers the [created](../api/timeline/#created) event when the component rendering process is completed and the Timeline is ready for interaction.

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

The Timeline component triggers the [beforeItemRender](../api/timeline/#beforeitemrender) event before rendering each timeline item, allowing customization of individual items during the rendering process.

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