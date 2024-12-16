---
layout: post
title: Typing Indicator in Angular Chat UI component | Syncfusion
description:  Checkout and learn about Typing Indicator with Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Typing indicator in Angular Chat UI component

## Show or hide typing indicator

You can use the [typingUsers](../api/chat-ui#typingusers) property to display the current user’s who are typing to indicate the active participants typing response within the chat conversations. If the property is empty the typing indicators will be removed.

The typing users are the UserModel[] collection, where you can update the user’s dynamically to display the current typing user.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/typingUsers/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/typingUsers/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/typingUsers" %}

## Typing indicator template

> Refer to the [Templates](./templates#typing-users-template) section for more details about the Typing indicator template.
