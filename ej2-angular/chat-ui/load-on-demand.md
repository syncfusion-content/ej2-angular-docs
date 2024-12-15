---
layout: post
title: Load on-demand in Angular Chat UI component | Syncfusion
description:  Checkout and learn about Load on-demand with Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Load on-demand in Angular Chat UI component

You can use the `loadOnDemand` property to load messages dynamically when the scroll reaches the top of the message list improving performance and reducing load times, particularly in long conversations. This ensures a smooth user experience by only fetching messages as needed rather than loading the entire conversation at once.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/loadOnDemand/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/loadOnDemand/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/loadOnDemand" %}