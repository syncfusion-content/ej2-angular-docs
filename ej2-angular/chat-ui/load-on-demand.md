---
layout: post
title: Load on Demand in Angular Chat UI | Syncfusion®
description: Load Angular Chat UI messages on demand as users scroll to improve performance in long conversations.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Load on Demand in Angular Chat UI

You can use the [loadOnDemand](../api/chat-ui#loadondemand) property to load messages dynamically when the scroll reaches the top of the message list improving performance and reducing load times, particularly in long conversations. This ensures a smooth user experience by only fetching messages as needed rather than loading the entire conversation at once.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/loadOnDemand/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/loadOnDemand/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/loadOnDemand/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/loadOnDemand" %}