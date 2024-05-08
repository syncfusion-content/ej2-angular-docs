---
layout: post
title: Render other components in toolbar using angular template in Angular Toolbar component | Syncfusion
description: Learn here all about Render other components in toolbar using angular template in Syncfusion Angular Toolbar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Render other components in toolbar using angular template 
documentation: ug
domainurl: ##DomainURL##
---

# Render other components in toolbar using angular template in Angular Toolbar component

You can render other components inside Toolbar using Angular **ng-template**. Through this, we can add items as other components directly with all their functionalities to our Toolbar. We need to use `ng-template` inside the each `e-item` tag with `#template` attribute, which is mandatory to render that template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toolbar/direct-components-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/direct-components-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/direct-components-cs1" %}