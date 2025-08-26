---
layout: post
title: Timestamp in Angular Chat UI component | Syncfusion
description:  Checkout and learn about Timestamp with Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Timestamp in the Angular Chat UI Component

## Show or Hide Timestamps

The [showTimeStamp](../api/chat-ui/#showtimestamp) property is used to enable or disable timestamps for all messages. Timestamps display the exact date and time that a message was sent. By default, this property is set to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/time/timeStamp/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/time/timeStamp/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/time/timeStamp/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/time/timeStamp" %}

## Setting the Timestamp Format

The [timeStampFormat](../api/chat-ui/#timestampformat) property defines the display format for timestamps that appear with each message. The default format is `dd/MM/yyyy hh:mm a`. The format string conforms to the standard date and time formatting rules.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/time/timeStampFormat/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/time/timeStampFormat/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/time/timeStampFormat/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/time/timeStampFormat" %}