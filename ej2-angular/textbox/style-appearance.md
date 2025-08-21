---
layout: post
title: Customize Style & Appearance in Angular TextBox | Syncfusion
description: Comprehensive guide to styling Syncfusion Angular TextBox with CSS classes, including sizing, validation states, floating labels, dynamic value-based coloring, and accessibility optimization.
platform: ej2-angular
control: Style and Appearance
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance Customization for Angular TextBox

Easily customize the appearance of the [Syncfusion Angular TextBox](https://ej2.syncfusion.com/angular/documentation/textbox/) to match your application's theme and usability requirements. This guide covers fundamental and advanced styling techniques including CSS class usage, validation state colors, floating labels, dynamic value-based color changes, rounded corners, password visibility toggling, and accessibility best practices.

## Understanding TextBox CSS Structure

The TextBox component uses a hierarchical CSS class structure that allows targeted styling of different component states and elements. The main classes include:

- `.e-input` - Base input element
- `.e-float-input` - Floating label wrapper
- `.e-input-group` - Input group container
- `.e-control-wrapper` - Primary wrapper element

**Tip:** Use browser DevTools to inspect elements and identify these classes for easier targeting.

## Customizing the TextBox wrapper element

The wrapper element controls the overall appearance and layout of the TextBox. Use the following approaches to customize its appearance:

### Basic Height and Font Sizing

```css
/* To specify height and font size */
.e-input:not(:valid), .e-input:valid, .e-float-input.e-control-wrapper input:not(:valid), .e-float-input.e-control-wrapper input:valid, .e-float-input input:not(:valid), .e-float-input input:valid, .e-input-group input:not(:valid), .e-input-group input:valid, .e-input-group.e-control-wrapper input:not(:valid), .e-input-group.e-control-wrapper input:valid, .e-float-input.e-control-wrapper textarea:not(:valid), .e-float-input.e-control-wrapper textarea:valid, .e-float-input textarea:not(:valid), .e-float-input textarea:valid, .e-input-group.e-control-wrapper textarea:not(:valid), .e-input-group.e-control-wrapper textarea:valid, .e-input-group textarea:not(:valid), .e-input-group textarea:valid {
        font-size: 30px;
        height: 40px;
}
```

## Customizing the TextBox placeholder

Placeholder text can be styled for both floating and static label scenarios:

### Floating Label Customization

```css
/* To specify font size and color */
.e-float-input.e-control-wrapper:not(.e-error) input:valid ~ label.e-float-text, .e-float-input.e-control-wrapper:not(.e-error) input ~ label.e-label-top.e-float-text {
        color: pink;
        font-size: 15px;
}
```

## Change the floating label color of the TextBox

The Angular TextBox component supports floating labels that can be customized with different colors based on validation states. This guide demonstrates how to change the floating label color for success and warning validation states using CSS styling.

The floating label color can be modified for different validation states using CSS. The component applies specific classes (`e-success`, `e-warning`) when validation states are set, allowing targeted styling.

### CSS styling for validation states

Apply the following CSS styles to customize floating label colors for success and warning states:

```css
/* For Success state */
.e-float-input.e-input-group.e-success label.e-float-text,
.e-float-input.e-input-group.e-success input:focus ~ label.e-float-text,
.e-float-input.e-input-group.e-success input:valid ~ label.e-float-text {
    color: #22b24b;
}

/* For Warning state */
.e-float-input.e-input-group.e-warning label.e-float-text,
.e-float-input.e-input-group.e-warning input:focus ~ label.e-float-text,
.e-float-input.e-input-group.e-warning input:valid ~ label.e-float-text {
    color: #ffca1c;
}
```

### Implementation example

The following example demonstrates how to configure TextBox components with floating labels and apply validation states to trigger color changes:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/getting-started-cs7/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/getting-started-cs7" %}

## Set the rounded corner in Angular TextBox component

The TextBox component can be rendered with rounded corners by adding the `e-corner` CSS class to the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/textbox/#cssclass) property. This styling enhancement improves the visual appearance and provides a modern look to the input field.

> **Note**: The rounded corner styling is visible only in box model input components (standard input elements with visible borders).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/rounded-corner-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="index.css" %}
{% include code-snippet/textbox/rounded-corner-cs1/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/rounded-corner-cs1" %}

## Toggle password visibility using eye icon

The TextBox component supports password visibility toggling through icon integration. This feature allows users to show or hide password text by clicking an eye icon.

### Implementation Steps

Add an eye icon using the [addIcon](https://ej2.syncfusion.com/angular/documentation/api/textbox/#addicon) method and handle click events to toggle text visibility by changing the input element's [type](https://ej2.syncfusion.com/react/documentation/api/textbox/#type) attribute.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/toggle-password-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/toggle-password-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/toggle-password-cs1" %}

## Change TextBox Color Based on Its Value in Angular

Dynamically changing the TextBox color based on user input provides immediate visual feedback and enhances user experience. This technique is particularly useful for form validation, data entry scenarios, and creating interactive interfaces where color coding helps users understand input requirements or validity status.

### Implementation Overview

The color change functionality can be implemented by combining event handling with conditional CSS styling. The approach involves listening to input events, validating the entered value, and applying appropriate CSS classes based on the validation results.

### Basic Implementation

The following example demonstrates how to change TextBox color based on numeric value validation using the `keyup` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/getting-started-cs6" %}