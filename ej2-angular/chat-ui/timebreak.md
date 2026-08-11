---
layout: post
title: Time Break in Angular Chat UI | Syncfusion®
description: Show date-wise separators in Angular Chat UI conversations using the showTimeBreak property to improve message organization.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Time Break in Angular Chat UI

## Show or hide time break

The Syncfusion Angular Chat UI component allows you to display date-wise separators between messages using the [showTimeBreak](../api/chat-ui/#showtimebreak) property. This feature enhances readability and improves message organization. By default, this property is `false`.

When enabled, the component automatically inserts a separator indicating a new date whenever the conversation crosses midnight.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/time/showTimeBreak/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/time/showTimeBreak/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/time/showTimeBreak/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/time/showTimeBreak" %}

## Time break template

> For advanced customization, you can define a custom appearance for the separator using a time break template. Refer to the [Templates](./templates#time-break-template) documentation for implementation details.