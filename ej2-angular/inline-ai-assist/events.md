---
layout: post
title: Events in Angular Inline AI Assist | Syncfusion
description:  Checkout and learn about events with Angular Inline AI Assist component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Events in Angular Inline AI Assist component

This section describes the Inline AI Assist events that will be triggered when appropriate actions are performed. The following events are available in the Inline AI Assist component.

## created

The Inline AI Assist component triggers the [created](../api/inline-ai-assist#created) event when the component rendering is completed.

Below sample demonstrates the usage of commandSettings in Inline Assist component

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/inline-ai-assist/events/created/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/events/created/src/app.component.ts %}
{% endhighlight %}
{% endtabs %}

## promptRequest

The [promptRequest](../api/inline-ai-assist#promptrequest) event is triggered when the prompt request is made in the Inline AI Assist component.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/inline-ai-assist/events/prompt-request/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/events/prompt-request/src/app.component.ts %}
{% endhighlight %}
{% endtabs %}

## open

The [open](../api/inline-ai-assist#open) event is triggered when the Inline AI Assist popup is opened.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/inline-ai-assist/events/open/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/events/open/src/app.component.ts %}
{% endhighlight %}
{% endtabs %}

### close

The [close](../api/inline-ai-assist#close) event is triggered when the Inline AI Assist popup is closed.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/inline-ai-assist/events/close/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/events/close/src/app.component.ts %}
{% endhighlight %}
{% endtabs %}
