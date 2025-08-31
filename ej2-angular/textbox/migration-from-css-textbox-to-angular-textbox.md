---
layout: post
title: Migration from CSS TextBox to Angular TextBox component | Syncfusion
description: Learn how to migrate from CSS-based TextBox to Angular TextBox component for enhanced features like floating labels, validation, and improved functionality.
platform: ej2-angular
control: Migration from css TextBox to angular TextBox 
documentation: ug
domainurl: ##DomainURL##
---

# Migration from CSS TextBox to Angular TextBox component

The Angular TextBox component provides a more powerful and feature-rich alternative to CSS-based TextBox implementations. This migration guide helps you transition from CSS TextBox to the Angular TextBox component, which offers enhanced functionality including floating labels, built-in validation, clear button support, and better accessibility.

> From v16.3.21 version, the TextBox is provided as Angular component to achieve floating label TextBox with minimal code. You can find the available TextBox properties, methods, and events in the [API reference](https://ej2.syncfusion.com/angular/documentation/api/textbox/).

## Benefits of migration

Migrating to the Angular TextBox component provides several advantages:

- **Simplified implementation**: Achieve floating labels and validation with minimal code
- **Built-in functionality**: Clear button, validation states, and accessibility features are included
- **Consistent styling**: Automatic theme support and consistent appearance across applications
- **Better maintenance**: Declarative syntax reduces custom JavaScript requirements
- **Enhanced accessibility**: Built-in ARIA attributes and keyboard navigation support

## Migration comparison

The following tables show the code differences between CSS TextBox and Angular TextBox component implementations.

### Normal TextBox

| **Feature** | **CSS TextBox** | **Angular TextBox component** |
| -----------------------| -----------------------------------| ------------------------------------------- |
| Basic TextBox |  `<div class='e-input-group'>`<br/>`<input class='e-input' type='text' placeholder='Enter Value'/>`<br/>`</div>` |  `<ejs-textbox id="default" placeholder="Enter Value" floatLabelType="Never"></ejs-textbox>` |
| TextBox with clear button |  `<div class='e-input-group'>`<br/>`<input class='e-input' placeholder='Enter Value' required='true'>`<br/>`<span class='e-clear-icon'></span>`<br/>`</div>`<br/><br/>**Note**: Custom JavaScript required for clear functionality. |  `<ejs-textbox id="clear-input" placeholder="Enter Value" floatLabelType="Never" [showClearButton]="true"></ejs-textbox>` |
| Validation states |  `<div class='e-input-group e-error'>`<br/>`<input class='e-input' type='text' placeholder='Enter Value' />`<br/>`</div>`<br/><br/>**Note**: Supports success, warning, and error validation states. |  `<ejs-textbox id="validation" placeholder="Enter Value" floatLabelType="Never" cssClass="e-error"></ejs-textbox>` |

### Floating label TextBox

| **Feature** | **CSS TextBox** | **Angular TextBox component** |
| -----------------------| -----------------------------------| ------------------------------------------- |
| Basic floating label |  `<div class='e-float-input'>`<br/>`<input type='text' required />`<br/>`<span class='e-float-line'></span>`<br/>`<label class='e-float-text'>Enter Value</label>`<br/>`</div>` |  `<ejs-textbox id="default" placeholder="Enter Value" floatLabelType="Auto"></ejs-textbox>` |
| Floating label with clear button |  `<div class='e-float-input e-input-group'>`<br/>`<input type='text' required value='Clear Input' />`<br/>`<span class='e-float-line'></span>`<br/>`<label class='e-float-text'>Enter Value</label>`<br/>`<span class='e-clear-icon'></span>`<br/>`</div>`<br/><br/>**Note**: Custom JavaScript required for clear functionality. |  `<ejs-textbox id="clear-input" placeholder="Enter Value" floatLabelType="Auto" [showClearButton]="true"></ejs-textbox>` |
| Floating label with validation |  `<div class='e-float-input e-error'>`<br/>`<input type='text' required />`<br/>`<span class='e-float-line'></span>`<br/>`<label class='e-float-text'>Enter Value</label>`<br/>`</div>`<br/><br/>**Note**: Supports success, warning, and error validation states. |  `<ejs-textbox id="validation" placeholder="Enter Value" floatLabelType="Auto" cssClass="e-error"></ejs-textbox>` |

## Migration checklist

Follow these steps to ensure a smooth migration:

1. **Install dependencies**: Ensure the `@syncfusion/ej2-angular-inputs` package is installed
2. **Import TextBox module**: Add `TextBoxModule` to your Angular module imports
3. **Replace HTML markup**: Convert CSS-based markup to Angular TextBox component syntax
4. **Remove custom JavaScript**: Delete any custom clear button or validation logic
5. **Update styling**: Replace CSS classes with component properties where applicable
6. **Test functionality**: Verify that floating labels, validation, and clear button work correctly

## Key differences

- **Markup simplification**: Single component tag replaces multiple HTML elements
- **Property-based configuration**: Use Angular properties instead of CSS classes for functionality
- **Built-in event handling**: Clear button and validation work automatically
- **Accessibility**: ARIA attributes and keyboard navigation are included by default

## Next steps

After migration, explore additional TextBox features:

- **Icons**: Add prefix and suffix icons using the [addIcon](https://ej2.syncfusion.com/react/documentation/api/textbox/#addicon) method
- **Multiline support**: Use [multiline](https://ej2.syncfusion.com/angular/documentation/api/textbox/#multiline) property for textarea functionality  
- **Custom validation**: Implement form validation with Angular reactive forms
- **Theming**: Apply custom themes and CSS customizations

For complete implementation examples and advanced features, refer to the [TextBox component documentation](https://ej2.syncfusion.com/angular/documentation/textbox/getting-started).