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

## Adding message

You can use the `addMessage` public method to add the messages in the Chat UI. You can add it either as a `string` or `MessageModel` collection. It programmatically adds a new message to the chat.

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

## Edit message

You can use the `updateMessage` public method to update the messages in the ChatUI to modify an existing message within the chat, useful for editing or correcting sent messages.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/methods/editmessage/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/methods/editmessage/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/methods/editmessage" %}

## Scroll to bottom

You can use the `scrollToBottom` public method to scroll the chat view to the latest message, ensuring users see the new content updated.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/methods/scrolltobottom/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/methods/scrolltobottom/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/methods/scrolltobottom" %}
