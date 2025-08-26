---
layout: post
title: Templates in Angular Chat UI component | Syncfusion
description:  Checkout and learn about Templates with Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Angular Chat UI component

Elevate the user experience by fully customizing the Syncfusion Angular Chat UI component. With templating support for key areas like the conversation window, messages, and typing indicators, you can create a unique and personalized chat interface that aligns perfectly with your application's design.

## Empty chat template

The [emptyChatTemplate](../api/chat-ui/#emptychattemplate) property allows you to define custom content for the chat interface when it is empty. Use this template to display welcome messages, branding, or helpful instructions, creating an engaging starting point for users.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/templates/emptyChatTemplate/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/templates/emptyChatTemplate/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/templates/emptyChatTemplate/src/app.component.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/templates/emptyChatTemplate/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/templates/emptyChatTemplate" %}

## Message template

Customize the appearance of every chat message with the [messageTemplate](../api/chat-ui/#messagetemplate) property. This template gives you full control over the layout, styling, and design of messages. The template context provides the `message` object and its `index`, allowing you to apply conditional styling or logic based on message content or position.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/templates/messageTemplate/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/templates/messageTemplate/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/templates/messageTemplate/src/app.component.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/templates/messageTemplate/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/templates/messageTemplate" %}

## Time Break template

Improve conversation organization with the [timeBreakTemplate](../api/chat-ui/#timebreaktemplate) property. This template lets you customize the time-based separators that appear between messages, such as "Today," "Yesterday," or specific dates, enhancing readability. The context includes the `messageDate` for precise formatting.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/templates/timeBreakTemplate/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/templates/timeBreakTemplate/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/templates/timeBreakTemplate/src/app.component.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/templates/timeBreakTemplate/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/templates/timeBreakTemplate" %}

## Typing users template

Enhance user experience by customizing the typing indicator with the [typingUsersTemplate](../api/chat-ui/#typinguserstemplate) property. You can modify its appearance and positioning to provide clear, real-time feedback. The template's context includes a list of `users`, so you can display who is currently typing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/templates/typingUsersTemplate/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/templates/typingUsersTemplate/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/templates/typingUsersTemplate/src/app.component.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/templates/typingUsersTemplate/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/templates/typingUsersTemplate" %}

## Suggestion template

Create visually engaging and functional quick replies using the [suggestionTemplate](../api/chat-ui/#suggestiontemplate) property. This template allows you to customize the layout and styling of suggestion items. The context includes the `suggestion` data and its `index`, enabling you to create dynamic and interactive suggestion buttons.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/templates/suggestionTemplate/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/templates/suggestionTemplate/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/templates/suggestionTemplate/src/app.component.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/templates/suggestionTemplate/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/templates/suggestionTemplate" %}

## Footer template

Take control of the chat input area by defining a custom [footerTemplate](../api/chat-ui/#footertemplate). This allows you to replace the default footer, giving you the flexibility to add custom buttons, integrate additional functionality, and manage message sending actions with a personalized design.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/templates/footerTemplate/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/templates/footerTemplate/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/templates/footerTemplate/src/app.component.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/templates/footerTemplate/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/templates/footerTemplate" %}