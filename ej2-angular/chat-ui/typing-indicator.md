---
layout: post
title: Typing Indicator in Angular Chat UI component | Syncfusion
description:  Checkout and learn about Typing Indicator with Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Typing Indicator in Angular Chat UI Component

The typing indicator provides real-time visual feedback to show when other users are composing a message. This feature enhances the user experience by making conversations feel more interactive and responsive, indicating that a reply is in progress.

## Show or Hide Typing Indicator

The visibility of the typing indicator is controlled by the [typingUsers](../api/chat-ui/#typingusers) property. This property accepts an array of `UserModel` objects, with each object representing a user who is currently typing. The indicator is automatically displayed when this collection is populated and hidden when it is empty.

The `UserModel` is a collection that requires a defined structure to display user information correctly. The following example illustrates how to dynamically update the `typingUsers` property to show and hide the indicator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/typingUsers/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/typingUsers/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/typingUsers/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/typingUsers" %}

## Typing Indicator Template

The appearance of the typing indicator can be customized to fit the application's design. To learn more about modifying its look and feel, refer to the [Templates](./templates#typing-users-template) section.