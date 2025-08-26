---
layout: post
title: Footer in Angular Chat UI component | Syncfusion
description:  Checkout and learn about Footer with Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Footer in the Angular Chat UI

The footer of the Syncfusion Angular Chat UI component is the area at the bottom that typically contains the message input field and the send button. It is enabled by default to provide a standard chat interface where users can type and send messages.

## Show or hide footer

You can control the visibility of the footer using the [showFooter](../api/chat-ui/#showfooter) property. By default, this property is set to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/footer/showFooter/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/footer/showFooter/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/footer/showFooter/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/footer/showFooter" %}

## Footer template

For advanced customization beyond simply showing or hiding the footer, refer to the [Footer Template](./templates#footer-template) documentation to learn how to define your own custom footer content and layout.