---
layout: post
title: Maximum Length in Angular TextArea component | Syncfusion
description: Limiting the maximum number of characters in the Angular TextArea component of Syncfusion Essential JS 2 and more details.
control: Maximum Length
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Maximum Length in Angular TextArea Component

Enforce a maximum length limit for text input in the TextArea using the [maxLength](https://ej2.syncfusion.com/angular/documentation/api/textarea/#maxLength) property. This property defines the maximum number of characters that users can input into the textarea.

By setting the `maxLength` property, you can control text input length and prevent users from exceeding a specified character limit.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/max-length-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/max-length-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/max-length-cs1" %}

When the user reaches the specified limit, the TextArea prevents further input, ensuring compliance with the defined character limit. This feature helps maintain data integrity and provides users with clear feedback on the allowed input length.
