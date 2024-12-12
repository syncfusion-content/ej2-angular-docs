---
layout: post
title: Events in Angular Chat UI component | Syncfusion
description:  Checkout and learn about Events with Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Events in Angular Chat UI component

This section describes the Chat UI events that will be triggered when appropriate actions are performed. The following events are available in the Chat UI component.

## Created

The Chat UI component triggers the `created` event when the component rendering is completed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/events/created/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/events/created/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## Sending message

The `messageSend` event is triggered before sending a message in the Chat UI component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/events/messagesend/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/events/messagesend/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## User typing

The `userTyping` event is triggered when the user is typing a message in the Chat UI component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/events/usertyping/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/events/usertyping/src/main.ts %}
{% endhighlight %}
{% endtabs %}
