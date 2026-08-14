---
layout: post
title: Maximum Length in Angular TextBox | Syncfusion
description: Restrict user input in the Syncfusion Angular TextBox to a fixed number of characters with the maxLength property to enforce data integrity.
control: Maximum Length
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Maximum Length in Angular TextBox

Enforce a maximum length limit for text input in the TextBox using the `maxLength` property. This property defines the maximum number of characters that users can input into the textbox.

By setting the `maxLength` property, you can control text input length and prevent users from exceeding a specified character limit.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/textbox/max-length-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/max-length-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/max-length-cs1" %}

When the user reaches the specified limit, the TextBox prevents further input, ensuring compliance with the defined character limit. This feature helps maintain data integrity and provides users with clear feedback on the allowed input length.
