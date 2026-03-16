---
layout: post
title: Angular Grid - Conditional Grid rendering with the *ngIf | Syncfusion
description: Angular Grid uses *ngIf to conditionally render, displaying it only when data is available for a cleaner user interface.
platform: ej2-angular
control: Grid
documentation: ug
domainurl: ##DomainURL##
---

# Conditional Grid Rendering with the *ngIf Directive

When working with dynamic data sources, it is best practice to render the Syncfusion Angular Grid only when actual data is present. Avoiding the display of an empty grid improves user interface clarity and reduces potential confusion.

Angular’s [*ngIf](https://v17.angular.io/api/common/NgIf) directive conditionally adds or removes elements from the DOM based on a boolean expression. Applying `*ngIf` to the Grid component ensures the grid only renders when appropriate data is available, resulting in a cleaner and more intuitive user experience.

The following example demonstrates toggling the grid's visibility with a [button](https://ej2.syncfusion.com/angular/documentation/button/getting-started) and rendering the grid conditionally with the `*ngIf` directive. The grid appears only when data is available.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/conditional-rendering/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/conditional-rendering/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/conditional-rendering" %}
