---
layout: post
title: Maximum Length in Angular TextArea | Syncfusion
description: Cap user input in the Angular TextArea at a defined number of characters using the maxLength property to preserve data integrity.
control: Maximum Length
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Maximum Length in Angular TextArea

Enforce a maximum length limit for text input in the TextArea using the [maxLength](https://ej2.syncfusion.com/angular/documentation/api/textarea/#maxLength) property. This property defines the maximum number of characters that users can input into the textarea.

By setting the `maxLength` property, you can control text input length and prevent users from exceeding a specified character limit.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/textarea/max-length-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/max-length-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/max-length-cs1" %}

When the user reaches the specified limit, the TextArea prevents further input, ensuring compliance with the defined character limit. This feature helps maintain data integrity and provides users with clear feedback on the allowed input length.
