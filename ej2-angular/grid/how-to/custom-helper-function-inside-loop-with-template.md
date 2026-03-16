---
layout: post
title: Angular Grid – Customizable Column Templates | Syncfusion
description: Angular Grid provides template helper usage, rendering examples, and guidance to incorporate helper functions within templates safely and efficiently.
platform: ej2-angular
control: Use custom helper inside the loop with templates 
documentation: ug
domainurl: ##DomainURL##
---

# Displaying Custom Templates in Angular Grid component

The Syncfusion Angular Grid permits the use of custom helper functions within `ng-template` directives inside column templates. This enables creating complex, data-driven templates and integrating utility logic for formatting or display customization.

In the example below, the "Customer Rating" column uses a custom template with the `*ngFor` directive to iterate through an array and generate a collection of `<span>` elements representing stars. The `ngClass` directive is used in conjunction with a helper method (such as `isRatingGreater`) to dynamically set CSS classes for each star, supporting custom logic for interactive or conditionally styled UI.

CSS rules to render stars and apply highlighting:

```css
.e-grid .rating .star:before {
    content: '★';
}

.e-grid .rating .star {
    font-size: 132%;
    color: lightgrey;
}
```

The `ngClass` directive dynamically assigns classes based on the result of the `isRatingGreater` method, highlighting the star using the CSS below:

```css
.e-grid .rating .star.checked {
    color: #ffa600;
}
```

The following example demonstrates using a helper inside a loop with a template column in the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-helper-loop-template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-helper-loop-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-helper-loop-template" %}
