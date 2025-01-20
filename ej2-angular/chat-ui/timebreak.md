---
layout: post
title: TimeBreaks in Angular Chat UI component | Syncfusion
description:  Checkout and learn about Timebreaks with Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Time break in Angular Chat UI component

## Show or hide time break

You can use the [showTimeBreak](../api/chat-ui#showtimebreak) property to display date-wise separations between all the messages which enhances the readability and message organizing. The default value is `false`, indicating time breaks are disabled unless it is enabled.

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

> Refer to the [Templates](./templates#time-break-template) section for more details about the Time break template.
