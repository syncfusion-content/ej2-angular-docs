---
layout: post
title: Style and appearance in Angular Grid component | Syncfusion
description: Learn here all about Style and appearance in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Style and appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Style and appearance in Angular Grid component

To modify the Grid appearance, you need to override the default CSS of grid. Please find the CSS structure that can be used to modify the Grid appearance. Also, you have an option to create your own custom theme for all the JavaScript controls using our [`Theme Studio`](https://ej2.syncfusion.com/themestudio/?theme=material).

## Customizing the Grid root element

Use the below CSS to customize the Grid root element.

```css

.e-grid {
      font-family: cursive;
}

```

You can modify the grid styling appearance by overriding the default CSS style of the Grid.

In the following sample, the font family of grid content is changed to **cursive**, and the background color of rows, selected rows, alternate rows, and row hovering color is modified using the below CSS styles.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/style-appearance-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/grid/style-appearance-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/style-appearance-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/style-appearance-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/style-appearance-cs1" %}

## See Also

* [Footer template styling in Angular Grid](https://ej2.syncfusion.com/angular/documentation/grid/style-and-appearance/#customizing-the-column-selection-background)