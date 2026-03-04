---
layout: post
title: Action buttons in Angular Card component | Syncfusion
description: Learn here all about Action buttons in Syncfusion Angular Card component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Card 
documentation: ug
domainurl: ##DomainURL##
---

# Action buttons in Angular Card component

Action buttons provide interactive controls within the Card component and can be customized for various use cases. Action buttons are contained within a `div` element with the `e-card-actions` class, which holds button or anchor elements within the card root element.

* To add action buttons, create a button or anchor tag with the `e-card-btn` class within the card action container element.

```html
    <div class = "e-card">
        <div class="e-card-actions">
            <button class="e-card-btn">More</button>
            <a href="#">Share</a>
        </div>
    </div>
```

## Vertical

By default, action buttons are positioned horizontally, and they can also be aligned vertically by adding the `e-card-vertical` class.

```html
    <div class = "e-card">
        <div class="e-card-actions e-card-vertical">
            <button class="e-card-btn">More</button>
            <a href="#">Share</a>
        </div>
    </div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/card/card-action-btn-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/card/card-action-btn-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/card/card-action-btn-cs1" %}

## See Also

* [How to integrate other component inside the card](./how-to/integrate-other-component-inside-the-card)