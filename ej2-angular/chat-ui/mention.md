---
layout: post
title: Mention Integration in Angular Chat UI component | Syncfusion
description:  Checkout and learn about Mention Integration with Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Mention Integration in Angular Chat UI component

## Mention Integration in Syncfusion Chat UI

The Syncfusion ChatUI allows users to mention others in messages using the `@` character, with an dropdown for selecting users. The following sections explain how to configure mentions

## Configure mention users

You can use the [mentionUsers](../api/chat-ui/#mentionUsers/) property to define an array of users for the mention suggestion popup.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/mention/mention-user/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/mention/mention-user/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/mention/mention-user" %}

## Customize the mention trigger character

You can use the [mentionTriggerChar](../api/chat-ui/#mentionTriggerChar) property to customize the character which triggers the mention popup. The default value is `@`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/mention/mention-trigger/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/mention/mention-trigger/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/mention/mention-trigger" %}

## Predefine mentions with messages

You can use the [text](../api/chat-ui/messageModel/#text) property in the [MessageModel](../api/chat-ui/messageModel/) to include predefined mentions in chat messages. The mentions field stores the selected users for each message.

The `mentionUsers` property in a message contains a list of users, mapped by their order where the placeholder {0} is replaced by the first user, {1} by the second, and so on, automatically generating mentions in the user interface. If a placeholder's index is negative or exceeds the bounds of the mentionUsers array (e.g., using {5} with only two users), the mapping for that placeholder fails, and the placeholder text itself (e.g., {5}) is displayed in the final message.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/mention/mention-message/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/mention/mention-message/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/mention/mention-message" %}

## Configure mentionSelect

You can use the [mentionSelect](../api/chat-ui/messageModel/#mentionSelect/) event which triggers when a user selects an item from the mention dropdown, providing access to the selected user’s details for custom handling.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/mention/mention-select/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/mention/mention-select/src/main.ts %}
{% endhighlight %}
{% endtabs %}

