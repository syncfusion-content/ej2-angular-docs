---
layout: post
title: Style appearance in Angular TextBox component | Syncfusion
description: Learn here all about Style appearance in Syncfusion Angular TextBox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Style appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Style appearance in Angular TextBox component

The Angular TextBox component provides extensive customization options through CSS classes and custom properties. This guide covers how to modify the visual appearance of TextBox elements including wrapper styling, placeholder customization, focus states, and specialized features like password visibility toggles.

## Understanding TextBox CSS Structure

The TextBox component uses a hierarchical CSS class structure that allows targeted styling of different component states and elements. The main classes include:

- `.e-input` - Base input element
- `.e-float-input` - Floating label wrapper
- `.e-input-group` - Input group container
- `.e-control-wrapper` - Primary wrapper element

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

## Troubleshooting Common Styling Issues

**Issue**: Custom styles not applying
**Solution**: Increase CSS specificity or use `!important` sparingly

**Issue**: Floating labels overlapping with custom borders
**Solution**: Adjust padding and margin values in the `.e-float-input` wrapper

**Issue**: Icons misaligned after height changes
**Solution**: Update line-height and vertical alignment properties for icon containers