---
layout: post
title: Customize pivot grid icons in Angular Pivotview | Syncfusion
description: Learn here all about Customize the icons for pivot grid in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize the icons for pivot grid 
documentation: ug
domainurl: ##DomainURL##
---

# Customize the icons for pivot grid in Angular Pivotview component

The Angular Pivot Table component supports the customization of various icons across its interface. This includes icons for the field list, expand/collapse actions, and other interactive elements. You can customize these icons by overriding the default CSS classes with custom Unicode values.

## Customizing Field List Icon

To customize the field list icon, override the corresponding CSS class with a custom `content` property. The example below demonstrates how to change the default field list icon:

```css

#PivotView_PivotFieldList .e-icons.e-toggle-field-list::before {
    content: '\e337';
}

```

The Unicode value `'\e337'` represents a specific icon from the [Syncfusion icons](https://ej2.syncfusion.com/angular/documentation/appearance/icons) library. Different Unicode values will display different icons.

## Implementation Steps

1. Add the CSS rule to your component's stylesheet or global styles
2. Ensure the selector targets the correct pivot table instance using the appropriate ID
3. Use valid Unicode values for the desired icons
4. Test the customization to verify the icon displays correctly

## Code Example

The following sample demonstrates a pivot table rendered with customized field list icon:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/icon-customization-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/icon-customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/icon-customization-cs1" %}
