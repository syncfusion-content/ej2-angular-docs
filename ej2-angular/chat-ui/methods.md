---
layout: post
title: Methods in Angular Chat UI component | Syncfusion
description:  Checkout and learn about Methods with Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Methods in Angular Chat UI component

## Add message

The [addMessage](../api/chat-ui/#addmessage) method programmatically adds a new message to the chat. You can provide the new message as either a `string` or a `MessageModel` object.

The following sample demonstrates how to add a new message using both a `string` and a `MessageModel` object.

Here is an example of how to use the [addMessage](../api/chat-ui/#addmessage) method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/methods/addmessagestring/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/methods/addmessagestring/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/methods/addmessagestring" %}

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/methods/addmessagemodel/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/methods/addmessagemodel/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/methods/addmessagemodel" %}

## Update message

The [updateMessage](../api/chat-ui/#updatemessage) method modifies an existing message in the Chat UI, which is useful for editing or correcting previously sent messages.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/methods/editmessage/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/methods/editmessage/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/methods/editmessage" %}

## Scroll to the bottom

The [scrollToBottom](../api/chat-ui/#scrolltobottom) method scrolls the chat view to the most recent message, ensuring that the latest content is visible to the user.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/methods/scrolltobottom/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/methods/scrolltobottom/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/methods/scrolltobottom" %}