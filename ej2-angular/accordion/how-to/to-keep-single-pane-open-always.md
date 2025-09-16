---
layout: post
title: Keep one pane open in Angular Accordion | Syncfusion
description: Learn here all about To keep single pane open always in Syncfusion Angular Accordion component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accordion
documentation: ug
domainurl: ##DomainURL##
---

# Keep one pane open in Angular Accordion component

By default, all Accordion panels in the Syncfusion Angular Accordion component are collapsible in `Single` expand mode. The Accordion can be configured to always keep one panel in an expanded state, ensuring at least one content section remains visible. This is useful for scenarios requiring a default content display, such as highlighting key information or maintaining a consistent UI. This is applicable for `Single` expand mode.
The example below demonstrates an Accordion with one pane always expanded in `Single` mode.
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/accordion/accordion-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/accordion/accordion-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/accordion/accordion-cs7" %}
