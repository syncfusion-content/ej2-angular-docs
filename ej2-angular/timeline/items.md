---
layout: post
title: Items in Angular Timeline component | Syncfusion
description: Learn here all about Items in Syncfusion Angular Timeline component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Timeline
documentation: ug
domainurl: ##DomainURL##
---

# Items in Angular Timeline component

The Timeline items can be added by using the `<e-item>` tag directive. Each item can be configured with options such as `content`, `oppositeContent`, `dotCss`, `disabled` and `cssClass`.

## Adding content

You can define the item content using the [content](../api/timeline/timelineItem/#content) property.

### String content

You can define string content for the Timeline items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/items/content/string-based/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/items/content/string-based/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/items/content/string-based/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/timeline/items/content/string-based/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/items/content/string-based" %}

### Templated content

You can specify the template content for the items, by using the selector for an element in HTML.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/items/content/template-based/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/items/content/template-based/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/items/content/template-based/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/timeline/items/content/template-based/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/items/content/template-based" %}

## Adding opposite content

You can add additional information to each Timeline item, by using the [oppositeContent](../api/timeline/timelineItem/#oppositecontent) property which is positioned opposite to the item content. Similar to the `content` property you can define `string` or `function` as contents to the oppositeContent.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/items/opposite-content/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/items/opposite-content/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/items/opposite-content/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/timeline/items/opposite-content/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/items/opposite-content" %}

## Dot item

You can define a CSS class to personalize the appearance of dots associated with each Timeline item by using the [dotCss](../api/timeline/timelineItem/#dotcss) property. This allows you to set icons, background colors, or images for the dots.

### Adding icons

You can define the CSS class to show the icon for each item using the `dotCss` property.

### Adding images

You can include images for the Timeline items using the `dotCss` property, by setting the CSS `background-image` property.

### Adding text

You can display text for the Timeline items using the `dotCss` property, by adding text to the CSS `content` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/items/dot-item/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/items/dot-item/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/items/dot-item/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/timeline/items/dot-item/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/items/dot-item" %}

## Disabling items

You can use the [disabled](api/timeline/timelineItem/#disabled) property to disable an item when set to `true`. By default, the value is `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/items/disabled/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/items/disabled/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/items/disabled/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/timeline/items/disabled/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/items/disabled" %}

## cssClass

You can customize the appearance of the Timeline item by specifying a custom CSS class using the [cssClass](../api/timeline/timelineItem/#cssclass) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/items/css-class/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/items/css-class/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/timeline/items/css-class/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/timeline/items/css-class/src/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/timeline/items/css-class" %}