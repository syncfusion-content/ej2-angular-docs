---
layout: post
title: Conditional Grid rendering with the *ngIf directive | Syncfusion
description: Learn how to use Angular *ngIf to conditionally render the Syncfusion EJ2 Angular Grid and display it only when data is available for better UI.
platform: ej2-angular
control: Grid
documentation: ug
domainurl: ##DomainURL##
---

# Conditional Grid rendering with the *ngIf directive

When working with dynamic data sources, it is recommended to render the Syncfusion Angular Grid only when there is actual data to display. Displaying an empty Grid can clutter the user interface and may lead to confusion.

By utilizing Angular's [*ngIf](https://v17.angular.io/api/common/NgIf ) directive, you can conditionally include or remove elements from the DOM based on a boolean expression. This allows you to render the Grid only when data is available, ensuring a cleaner and more intuitive user experience.

In the following example, a [button](https://ej2.syncfusion.com/angular/documentation/button/getting-started) is used to toggle the visibility of the Grid. The `*ngIf` directive is applied to the Grid, allowing to shows or hides the Grid depending on whether data is available.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/conditional-rendering/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/conditional-rendering/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/conditional-rendering" %}
