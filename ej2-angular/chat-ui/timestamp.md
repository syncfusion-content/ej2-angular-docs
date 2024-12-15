---
layout: post
title: Timestamp in Angular Chat UI component | Syncfusion
description:  Checkout and learn about Timestamp with Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Timestamp in Angular Chat UI component

## Show or hide timestamp

You can use the `showTimeStamp` property to enable or disable timestamps for all messages which displays the exact date and time when they were sent. By default, the value is `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/time/timeStamp/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/time/timeStamp/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/time/timeStamp" %}

## Setting timestamp format

You can use the `timeStampFormat` property to display time formats for all the messages which are displayed with the messages being sent. By default, the value is `dd/MM/yyyy hh:mm a`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/time/timeStampFormat/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/time/timeStampFormat/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/time/timeStampFormat" %}
