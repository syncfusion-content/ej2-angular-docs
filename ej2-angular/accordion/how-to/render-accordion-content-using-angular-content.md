---
layout: post
title: Render accordion content using Angular content |Syncfusion
description: Learn here all about Render accordion content using angular content in Syncfusion Angular Accordion component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accordion
documentation: ug
domainurl: ##DomainURL##
---

# Render accordion content using angular content in Accordion component

The Syncfusion Angular Accordion component supports content projection using Angular’s `ng-content` directive, enabling reusable and flexible content integration into Accordion items. This is ideal for scenarios requiring consistent UI elements, such as forms or reusable panels, across multiple Accordion instances or components.


To implement content projection, use `ng-template` with the `#content` attribute inside each `e-accordionitem` to define the content area. Include `ng-content` within `ng-template`, using a `select` attribute with a matching ID or class from the parent component’s template to project specific content. The `ng-content` directive is a core Angular feature requiring no additional Syncfusion dependencies.

The example below demonstrates projecting content into Accordion items using `ng-content`.
```javascript
  <e-accordionitem expanded='true' header='Athletics'>
    <ng-template #content>
      <ng-content select='div.content0'></ng-content>
    </ng-template>
  </e-accordionitem>
```

> Here `div.content0` mapped to ng-content is reusable content. It can be used in multiple scenarios within the application.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/accordion/accordion-ng-content-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/accordion/accordion-ng-content-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/accordion/accordion-ng-content-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/accordion/accordion-ng-content-cs1" %}
