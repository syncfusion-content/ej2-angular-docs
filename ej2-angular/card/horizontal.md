---
layout: post
title: Horizontal in Angular Card component | Syncfusion
description: Learn here all about Horizontal in Syncfusion Angular Card component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Horizontal 
documentation: ug
domainurl: ##DomainURL##
---

# Horizontal in Angular Card component

By default, all the card elements are aligned vertically one after the other as in the DOM.
You can achieve the element to align horizontally as well by adding the class `e-card-horizontal` in the root card element.

## Stacked cards

* An horizontally aligned card can push a specific column to align vertical using `e-card-stacked` class.
This will align the stacked section vertically aligned differentiating from horizontal layout.

Class   | Description
------------ | -------------
`e-card-horizontal` | To align card elements horizontally.
`e-card-stacked` | To align elements vertically within the horizontal layout.

```html
        <div tabindex="0" class="e-card e-card-horizontal">
            <img src="code1.png" alt="Sample">   --> Aligned in horizontal
            <div class="e-card-stacked">         --> Aligned in horizontal
               // Inside the element all are aligned vertical directions
            </div>
        </div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/card/card-horizontal-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/card/card-horizontal-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/card/card-horizontal-cs1" %}