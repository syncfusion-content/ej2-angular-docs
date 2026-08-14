---
layout: post
title: How to integrate other component in Angular Card | Syncfusion
description: Host any Syncfusion component such as ListView inside an Angular Card content area to build rich, interactive composite UI layouts.
platform: ej2-angular
control: Card 
documentation: ug
domainurl: ##DomainURL##
---

# How to integrate other component in Angular Card

The Card component provides a flexible container that can host any other component within its content area. This approach enables rich, interactive interfaces by combining the structured layout benefits of cards with the functionality of other components. The example demonstrates integrating a ListView component inside a card to create a To-Do list interface.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/card/card-with-list-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/card/card-with-list-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/card/card-with-list-cs1" %}