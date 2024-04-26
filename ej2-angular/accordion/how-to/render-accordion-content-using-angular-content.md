---
layout: post
title: Render accordion content using angular content in Angular Accordion component|Syncfusion
description: Learn here all about Render accordion content using angular content in Syncfusion Angular Accordion component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Render accordion content using angular content 
documentation: ug
domainurl: ##DomainURL##
---

# Render accordion content using angular content in Accordion component

To render the Accordion contents using ng-content, we need to use ng-template inside the each `e-accordionitem` tag with `#content` attribute, which is mandatory to render content. Now include `ng-content` inside the `ng-template` tag with select attribute of id or class name for mapping required content.

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
