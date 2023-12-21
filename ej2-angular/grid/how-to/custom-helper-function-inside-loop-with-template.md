---
layout: post
title: Use custom helper inside the loop with templates in Angular Grid component | Syncfusion
description: Learn here all about Place cancel icon in search bar in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Use custom helper inside the loop with templates 
documentation: ug
domainurl: ##DomainURL##
---

# Use custom helper inside the loop with templates in Angular Grid component

The Syncfusion Angular Grid allows you to use custom helpers inside the loop with `ng-template` directive of a column. This feature enables you to create complex templates that can incorporate additional helper functions.

To achieve this, you can use the `*ngFor` directive inside the template column to iterate through the array and the `ngClass` directive to define dynamic function.

The **Customer Rating** column includes a custom template defined using `<ng-template>`. Inside this template, `*ngFor` directive is used to iterates through the **item** array and generates `<span>` tag, displayed as stars using the CSS below:

```css
.e-grid .rating .star:before {
    content: '★';
}

.e-grid .rating .star {
    font-size: 132%;
    color: lightgrey;
}
```

The `ngClass` directive dynamically assigns classes based on the result of the **isRatingGreater** method, highlighting the star using the CSS below:

```css
.e-grid .rating .star.checked {
    color: #ffa600;
}
```

This is demonstrated in the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-helper-loop-template/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-helper-loop-template/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-helper-loop-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "http://127.0.0.1:4000/ej2-angular/code-snippet/grid/custom-helper-loop-template/dist/index.html" %}

