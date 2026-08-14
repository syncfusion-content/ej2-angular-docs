---
layout: post
title: How to set the nested Accordion in Angular Accordion | Syncfusion
description: Build nested Accordions in Angular by rendering a child Accordion inside the parent item content using ng-template for multi-level sections.
platform: ej2-angular
control: Accordion
documentation: ug
domainurl: ##DomainURL##
---

# How to set the nested Accordion in Angular Accordion

Nested Accordions allow hierarchical organization of content within the Syncfusion Angular Accordion component, enabling multi-level expandable sections for applications like navigation menus, FAQs, or data trees. Render a child Accordion inside the content area of a parent Accordion item using Angular’s `ng-template`. This approach integrates the nested Accordion with full functionality, including expand/collapse behavior.

To set up nested Accordions, ensure the `@syncfusion/ej2-angular-navigations` package is installed and imported. Use `ng-template` inside each `e-accordionitem` tag with the `#content` attribute to define the item’s content area. Then, apply `ng-template` with a select attribute referencing an ID or class to map the nested content. Note that `ng-template` is an Angular core directive and requires no additional imports.
{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/accordion/accordion-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/accordion/accordion-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/accordion/accordion-cs6" %}