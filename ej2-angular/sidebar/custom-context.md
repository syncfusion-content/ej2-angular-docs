---
layout: post
title: Target in Angular Sidebar | Syncfusion
description: Render the Angular Sidebar inside a custom HTML container via the target property and control its stacking order with zIndex.
platform: ej2-angular
control: Sidebar
documentation: ug
domainurl: ##DomainURL##
---

# Target in Angular Sidebar

The Sidebar component allows flexible initialization to target any HTML container element alongside the main content of a web page, enabling customized layouts.

By default, the Sidebar targets the `body` element. The [`target`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#target) property enables users to specify a custom HTML container, such as a `div` with a CSS selector (e.g., `.main-content`) or an `HTMLElement`, to initialize the Sidebar within a specific section of the page. For overlay-type Sidebars, the [`zIndex`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#zindex) property (default: `1000`) can be adjusted to control the stacking order relative to other elements.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/sidebar/custom-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/sidebar/custom-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/custom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/custom-cs1" %}

## See Also

* [Angular routing](./how-to/hide-sidebar)