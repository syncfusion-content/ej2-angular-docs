---
layout: post
title: Events in Angular AI AssistView component | Syncfusion
description: Checkout and learn about events with Angular AI AssistView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Events in Angular AI AssistView component

This section describes the AI AssistView events that will be triggered when appropriate actions are performed. The following events are available in the AI AssistView component.

## created

The AI AssistView component triggers the [created](../api/ai-assist-view#created) event when the component rendering is completed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/events/created/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/events/created/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/events/created" %}

## promptRequest

The [promptRequest](../api/ai-assist-view#promptrequest) event is triggered when the prompt request is made in the AI AssistView component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/events/promptRequest/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/events/promptRequest/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/events/promptRequest" %}

## promptChanged

The [promptChanged](../api/ai-assist-view#promptchanged) event is triggered when the prompt text is changed in the AI AssistView component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/events/promptChanged/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/events/promptChanged/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/events/promptChanged" %}
