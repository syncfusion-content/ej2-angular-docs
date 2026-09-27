---
layout: post
title: Customization in Angular Message | Syncfusion
description: Customize Syncfusion Angular Message content alignment, rounded or square appearance, and use predefined CSS classes for script-free rendering.
platform: ej2-angular
control: Customization 
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Angular Message

The Angular Message component allows the user to customize the content display positions and appearance. This section explains the details about changing the content alignments and border styles for Angular Message.

## Content Alignment

Normally, the Angular Message content is aligned to the **left**. The Angular Message component allows the user to align the Angular Message content in the **center** or **right** through the built-in classes `e-content-center` and `e-content-right`.

The following example demonstrates the Angular Message with different content alignments.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/message/content-alignment-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/message/content-alignment-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/message/content-alignment-cs1" %}

## Rounded and Square

To customize the Angular Message component's appearance, add the custom class to the Angular Message through the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/message/index-default#cssclass) property. This custom class will be added to the root element. Based on this custom class, the user can override the Angular Message styles at the application level.

The following example shows the rounded and squared appearance of the Angular Message, which can be achieved by adding the `cssClass` property.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/message/custom-appearance-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/message/custom-appearance-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/message/custom-appearance-cs1" %}

## CSS Angular Message

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Angular Message has predefined CSS classes that can be defined in the HTML elements, which renders the Angular Message without any script reference. This can display a simple Angular Message with content and make the code lighter.

The following DOM structure is required to display the simple Angular Message with the content.

```bash

<div class="e-message">
    <div class="e-msg-content">..content..</div>
</div>

```

The following DOM structure is required to display the simple Angular Message with the content and severity icon.

```bash

<div class="e-message">
    <span class="e-msg-icon"></span>
    <div class="e-msg-content">..content..</div>
</div>

```

The following is the available list of predefined CSS classes to make the appearance of a Angular Message.

| Class | Description |
| -------- | -------- |
| e-message | Represents the Angular Message wrapper. |
| e-msg-icon | Represents the severity type icon. |
| e-msg-content | Represents the Angular Message content. |
| e-msg-close-icon | Represents the close icon. |
| e-info | Represents the information Angular Message. |
| e-success | Represents the success Angular Message. |
| e-warning | Represents the warning Angular Message. |
| e-error | Represents the error Angular Message. |
| e-content-center | Aligns the Angular Message content to the center. |
| e-content-right | Aligns the Angular Message content to the right. |

The following example shows the Angular Message which renders without any script reference.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/message/css-message-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/message/css-message-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/message/css-message-cs1" %}