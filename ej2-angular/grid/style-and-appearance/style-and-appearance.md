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

The Syncfusion Angular Grid component allows a wide range of appearance customizations using CSS and theming tools. This includes default CSS overrides, comprehensive theme customization, and direct styling of grid elements.

**Default CSS Overrides**

Apply custom CSS to override the Grid's default styles. This approach enables changes to colors, fonts, spacing, and more. Use browser developer tools to inspect the grid's HTML and identify the necessary CSS classes for styling.

Example: Override the header background color and header text color:

```css
/* In your component's CSS file */
.e-grid .e-headercell {
    background-color: #333; /* Override the header background color */
    color: #fff;
}
```

![Screenshot showing the modified grid header background color](../images/header-background.png)

**Using Theme Studio**

Syncfusion Theme Studio enables the creation of custom themes for all controls, including the Grid. This tool provides advanced options to maintain consistent application styling.

1. Go to [Syncfusion Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=material).
2. Select the Grid control in the left panel.
3. Customize colors, typography, spacing, and other appearance settings.
4. Download the generated CSS and include it in your Angular project for consistent theme application.

## Customize the Grid Root Element

Directly style the Syncfusion Angular Grid root element using CSS. For example, update the font family and global appearance:

```css
.e-grid {
      font-family: cursive;
}
```

![Screenshot of the customized Grid root element](../images/whole-grid.png)

In this example, the **.e-grid** class targets the Grid's root element, and the `font-family` is set for all grid content.

In the following sample, the font family of grid content is changed to **cursive**, and the background color of rows, selected rows, alternate rows, and row hovering color is modified using the below CSS styles.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/style-appearance-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/grid/style-appearance-cs1/index.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/style-appearance-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/style-appearance-cs1" %}

## See Also

* [Footer template styling in Angular Grid](https://ej2.syncfusion.com/angular/documentation/grid/style-and-appearance/style-and-appearance)
