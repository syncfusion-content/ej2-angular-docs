---
layout: post
title: Auto close in Angular Sidebar component | Syncfusion
description: Learn here all about Auto close in Syncfusion Angular Sidebar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sidebar
documentation: ug
domainurl: ##DomainURL##
---

# Auto close in Angular Sidebar component

The Sidebar component supports responsive auto-close behavior, allowing it to automatically open or close based on screen resolution. This is configured using the [`mediaQuery`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#mediaquery) property (default: `null`), which accepts a `string` (e.g., `"max-width: 400px"`) or `MediaQueryList` to control the Sidebar’s state.


## Configuring Auto-Close with Media Queries

The `mediaQuery` property uses CSS media query syntax to determine when the Sidebar should be open or closed, based on the viewport size. For example, setting `mediaQuery` to `"max-width: 400px"` with `isOpen` set to `true` keeps the Sidebar open on screens narrower than 400px.

> **Note**: The `window.matchMedia()` method returns the object of parsed `media query` string. The value of matchMedia() can be any of the media features of a CSS @media rule. For example, min-width and max-width.

### Example: General Auto-Close Configuration

The following sample demonstrates the Sidebar with a custom `mediaQuery` to control its open or closed state based on screen resolution.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/autoclose-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/sidebar/autoclose-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/autoclose-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/autoclose-cs1" %}

### Example: Auto-Close Below 400px
* In the following sample,the Sidebar will be in expanded state only in resolution below `400px`.

> **Note**: The `max-width` media feature specifies the maximum width of the viewport, ensuring the Sidebar adapts to smaller displays.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/autoclose-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/sidebar/autoclose-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/autoclose-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/autoclose-cs2" %}