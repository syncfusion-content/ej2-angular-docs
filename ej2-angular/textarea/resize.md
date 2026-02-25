---
layout: post
title: Resize in Angular TextArea component | Syncfusion
description: Checkout and learn about Resize in Angular TextArea component of Syncfusion Essential JS 2 and more details.
control: Resize
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Resize in Angular TextArea Component

The TextArea component allows users to input and edit large amounts of text. Configure resizing behavior to enhance the user experience and accommodate varying content needs using the [resizeMode](https://ej2.syncfusion.com/angular/documentation/api/textarea/#resizeMode) property, which offers the following resize options:

| Type  | Description |
| -- | -- |
| Vertical  | Allows users to adjust the height of the TextArea vertically. It is suitable when users want to resize the TextArea only along the vertical axis, accommodating varying amounts of text input. |
| Horizontal | Users can adjust the width of the TextArea horizontally. This option is helpful for accommodating longer lines of text without altering the height of the control. |
| Both | Allows users to adjust both the height and width of the TextArea, offering maximum flexibility in resizing. It is ideal for situations where users need precise control over the dimensions of the TextArea. |
| None | Disables the resizing in the TextArea. This option is ideal for situations where maintaining a consistent layout is critical, and resizing by users is unnecessary. |

> In addition to the above options, the `resizeMode` property defaults to `Both`. In this case, the width of the TextArea will not be adjusted automatically. You can still update it manually through the [cols](https://ej2.syncfusion.com/angular/documentation/api/textarea/#cols) property or with CSS.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/resize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/resize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/resize-cs1" %}

## Width of Angular TextArea Component

Customize the width of the TextArea using the [width](https://ej2.syncfusion.com/angular/documentation/api/textarea/#width) property. This property allows precise adjustment of the textarea's width according to your application's layout requirements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/resize-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/resize-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/resize-cs2" %}
