---
layout: post
title: How to add link to Toolbar item in Angular Toolbar | Syncfusion
description: Add interactive links or routing anchors inside Angular Toolbar items using ng-template with the template attribute.
platform: ej2-angular
control: Toolbar
documentation: ug
domainurl: ##DomainURL##
---

# How to add link to Toolbar item in Angular Toolbar

The Angular Toolbar component supports adding interactive links within toolbar items using Angular **ng-template**. This approach enables you to embed anchor elements or routing links directly into toolbar items while maintaining full control over their behavior and styling.

To implement links in toolbar items, use the `ng-template` directive inside the `e-item` tag with the `#template` attribute. The template attribute is mandatory for Angular to properly render the custom template content within the toolbar item.


{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/toolbar/toolbar-link-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/toolbar-link-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/toolbar-link-cs1" %}