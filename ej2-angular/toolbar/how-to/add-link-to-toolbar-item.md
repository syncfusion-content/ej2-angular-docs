---
layout: post
title: Add link to toolbar item in Angular Toolbar component | Syncfusion
description: Learn here all about Add link to toolbar item in Syncfusion Angular Toolbar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Toolbar
documentation: ug
domainurl: ##DomainURL##
---

# Add link to toolbar item in Angular Toolbar component

The Angular Toolbar component supports adding interactive links within toolbar items using Angular **ng-template**. This approach enables you to embed anchor elements or routing links directly into toolbar items while maintaining full control over their behavior and styling.

To implement links in toolbar items, use the `ng-template` directive inside the `e-item` tag with the `#template` attribute. The template attribute is mandatory for Angular to properly render the custom template content within the toolbar item.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toolbar/toolbar-link-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/toolbar-link-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/toolbar-link-cs1" %}