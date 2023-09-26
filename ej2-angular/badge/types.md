---
layout: post
title: Types in Angular Badge component | Syncfusion
description: Learn here all about Types in Syncfusion Angular Badge component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Types 
documentation: ug
domainurl: ##DomainURL##
---

# Types in Angular Badge component

This section explains different styles and types of the badges.

## Badge styles

The Essential JS 2 Badge has the following predefined styles that can be used with `.e-badge` class to change the appearance of a badge.

| Class Name        | Description
| :-------------    |:-------------
| e-badge-primary   | Represents a primary notification.
| e-badge-secondary | Represents a secondary notification.
| e-badge-success   | Represents a positive notification.
| e-badge-danger    | Represents a negative notification.
| e-badge-warning   | Represents notification with caution.
| e-badge-info      | Represents an informative notification.
| e-badge-light     | Represents notification in light variant.
| e-badge-dark      | Represents notification in dark variant.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/badge/types-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/badge/types-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/badge/types-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/badge/types-cs1" %}

## Badge types

The types of Essential JS 2 badges are as follows:

* Circle
* Pill
* Link
* Notification
* Overlap
* Dot
* Position

### Circle

The circle badge style can be applied by adding the modifier class `.e-badge-circle` to the target element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/badge/circle-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/badge/circle-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/badge/circle-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/badge/circle-cs1" %}

### Pill

The pill badge style can be applied by adding the modifier class `.e-badge-pill` to the target element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/badge/pill-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/badge/pill-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/badge/pill-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/badge/pill-cs1" %}

### Link

When badge modifier classes are applied to the anchor tag, the badge’s appearance will change from normal state to hover state on mouseover.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/badge/link-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/badge/link-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/badge/link-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/badge/link-cs1" %}

### Notification

The notification badge style can be applied by adding the modifier class `.e-badge-notification` to the
target element. Notification badges are used when a content or a context needs special attention.
While using the notification badge, set the parent element to `position: relative`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/badge/notification-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/badge/notification-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/badge/notification-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/badge/notification-cs1" %}

### Dot

Dot can be applied by adding the modifier class `.e-badge-dot` to the target element. Dot badges are
similar to notification badges, but in a minimalistic way. While using the dot badge, set the parent
element to `position: relative` .

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/badge/dot-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/badge/dot-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/badge/dot-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/badge/dot-cs1" %}

### Overlap

The overlap badge can be used with `notification` or `dot` badge, which overlaps with the target
-element by adding the modifier class `.e-badge-overlap`. While using the overlap badge, set the
parent element to `position: relative`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/badge/overlap-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/badge/overlap-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/badge/overlap-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/badge/overlap-cs1" %}

### Position

The default position of the `notification` or `dot` badge is top. But, the position can be changed
to `bottom` using the modifier class `.e-badge-bottom`. For example, the bottom class modifier is used
with dot badge to display the status in the avatar as shown in the following sample.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/badge/position-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/badge/position-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/badge/position-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/badge/position-cs1" %}
