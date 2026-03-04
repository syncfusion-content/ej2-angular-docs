---
layout: post
title: Avatar customization in Angular Avatar component | Syncfusion
description: Learn here all about Avatar customization in Syncfusion Angular Avatar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Avatar 
documentation: ug
domainurl: ##DomainURL##
---

# Avatar customization in Angular Avatar component

The Angular Avatar component provides extensive customization capabilities for colors, sizes, shapes, and media formats. This section demonstrates how to modify the avatar's appearance to match specific design requirements and integrate various content types.

## Color customization

The avatar displays with a default grey background color. This can be customized to any desired color by adding a custom CSS class or directly targeting the avatar class in the stylesheet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/avatar/color-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/avatar/color-cs2/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/avatar/color-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/avatar/color-cs2" %}

## Customize avatar sizes

The avatar component includes five predefined size classes. For sizes beyond these predefined options, the avatar is designed with width and height relative to font-size. Changing the `font-size` of the avatar element automatically adjusts its width and height proportionally.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/avatar/custom-size-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/avatar/custom-size-cs2/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/avatar/custom-size-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/avatar/custom-size-cs2" %}

## Using various media formats

Avatars support a wide variety of media formats including SVG, font icons, images, letters, and words. The following example demonstrates these different content types.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/avatar/media-formats-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/avatar/media-formats-cs2/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/avatar/media-formats-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/avatar/media-formats-cs2" %}

## Dynamic avatar rendering from data source

Avatar components can be rendered dynamically from a data source. The following example demonstrates rendering avatars using a data source that contains image sources in different sizes. This approach is applicable to data sources from servers, remote endpoints, or AJAX calls. The example also demonstrates rendering avatars using the CSS `background-image` property and using image tags.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/avatar/angular-avatar-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/avatar/angular-avatar-cs2/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/avatar/angular-avatar-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/avatar/angular-avatar-cs2" %}