---
layout: post
title: How to in Angular Avatar component | Syncfusion
description: Learn here all about How to in Syncfusion Angular Avatar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: How to 
documentation: ug
domainurl: ##DomainURL##
---

# How to in Angular Avatar component

As the avatar is a completely customizable and integral component, this section shows some of the
customization and integration of avatar with other components.

## Customize avatars

### Colour customization

The avatar comes with default background colour (grey). This can be easily customized to desired colour
by adding custom class or directly selecting the avatar class from the CSS.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/avatar/color-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/avatar/color-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/avatar/color-cs1" %}

### Customize avatar sizes

Even though the avatar comes with five predefined sizes, sometimes it's not enough. So, the avatar is
designed in such a way that the width and height will be relative to font-size. By changing the
`font-size` of the avatar element, you can change the width and height automatically.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/avatar/custom-size-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/avatar/custom-size-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/avatar/custom-size-cs1" %}

### Use various media in avatar

Avatars can be used with a wide variety of media formats like SVG, font-icons, images, letters, words,
etc. Some of them are given below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/avatar/media-formats-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/avatar/media-formats-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/avatar/media-formats-cs1" %}

### Dynamic avatar rendering from datasource

We can render avatar component dynamically from a data-source. In this sample we have rendered the avatar component
using a data-source which contains the image source in different sizes dynamically. This is applicable also for
data-source from the server or remote data or AJAX. We have also rendered the avatar using `CSS` property
`background-image` and using image tag.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/avatar/angular-avatar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/avatar/angular-avatar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/avatar/angular-avatar-cs1" %}

## Integrate avatars

Avatar can be integrated into various components to make a wide variety of applications. Some of the
integrations are shown in the following section.

### Listview

Avatar is integrated into the listview to create contacts applications. The `xsmall` size avatar is
used to match the size of the list item. Letters and images are also used as avatar content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/avatar/listview-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/avatar/listview-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/avatar/listview-cs1" %}

### Badge

The badge is dependent and supportive component, and it can be used with avatar to create a notification avatar.
The default avatar (.`e-avatar`) and circle avatar (.`e-avatar-circle`) have been used with notification
badges (.`e-badge-notification`) in the following sample.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/avatar/badge-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/avatar/badge-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/avatar/badge-cs1" %}