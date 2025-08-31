---
layout: post
title: Integrate UI Elements into Angular Card Component | Syncfusion
description: Learn here all about Integrate other component inside the card in Syncfusion Angular Card component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Card 
documentation: ug
domainurl: ##DomainURL##
---

# Integrate other component inside the card in Angular Card component

The Card component provides a flexible container that can host any other component within its content area. This approach enables rich, interactive interfaces by combining the structured layout benefits of cards with the functionality of other components. Here, the ListView component is integrated inside the card to create an organized To-Do list interface, demonstrating how cards can enhance content presentation and user experience.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/card/card-with-list-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/card/card-with-list-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/card/card-with-list-cs1" %}