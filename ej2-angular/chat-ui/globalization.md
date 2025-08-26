---
layout: post
title: Globalization in Angular Chat UI component | Syncfusion
description:  Checkout and learn about Globalization with Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in Angular Chat UI

The Syncfusion Chat UI component is designed with globalization in mind, allowing it to serve users in various regions and languages.

## Localization
 
The Chat UI component can be localized for any culture. The default language is English (en). To adapt the component to another language, you can provide translations for the keys in its default culture file. The placeholders {0} and {1} represent user names, while {2} is used for a numeric count of additional users.

The following table lists the localization keys, their default English text, and an example of their usage.
 
| Key | Default Text | Example Usage |
|---|---|---|
| `oneUserTyping` | `{0} is typing` | `Suresh is typing` |
| `twoUserTyping`| `{0} and {1} are typing` | `Suresh and Gopi are typing` |
| `threeUserTyping` | `{0}, {1}, and {2} other are typing` | `Suresh, Gopi, and 1 other are typing` |
| `multipleUsersTyping` | `{0}, {1}, and {2} others are typing` | `Suresh, Gopi, and 5 others are typing` |

The following example demonstrates how to load the German (`de`) culture and apply it to the Chat UI.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/globalization/localization/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/globalization/localization/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/globalization/localization/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/globalization/localization" %}

## RTL

Right-to-Left (RTL) support provides an option to render the Chat UI component with a right-to-left layout and text direction. This is essential for users of languages such as Arabic, Hebrew, and Persian. You can enable this feature by setting the [enableRtl](../api/chat-ui/#enablertl) property to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/globalization/enableRtl/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/globalization/enableRtl/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/globalization/enableRtl/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/globalization/enableRtl" %}