---
layout: post
title: Horizontal in Angular Card component | Syncfusion
description: Learn here all about Horizontal in Syncfusion Angular Card component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Card 
documentation: ug
domainurl: ##DomainURL##
---

# Horizontal in Angular Card component

By default, all card elements are aligned vertically in a stacked layout following the natural DOM flow. The horizontal layout provides an alternative arrangement where card elements are positioned side-by-side, creating a more compact and visually engaging presentation for content that benefits from lateral organization.

To achieve horizontal alignment, add the `e-card-horizontal` class to the root card element. This transforms the default vertical layout into a horizontal arrangement where child elements flow from left to right.

## Stacked cards

* An horizontally aligned card can push a specific column to align vertical using `e-card-stacked` class.
This will align the stacked section vertically aligned differentiating from horizontal layout.

Class   | Description
------------ | -------------
`e-card-horizontal` | Aligns card elements horizontally in a side-by-side layout.
`e-card-stacked` | Forces vertical alignment for specific sections within a horizontal layout.

```html
        <div tabindex="0" class="e-card e-card-horizontal">
            <img src="code1.png" alt="Sample">   <!-- Aligned horizontally -->
            <div class="e-card-stacked">         <!-- Horizontal container -->
               <!-- Inside this element, all content flows vertically -->
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