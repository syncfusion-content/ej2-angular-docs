---
layout: post
title: Angular Grid Editing Customization | Syncfusion
description: Learn how to customize editing styles in Angular Data Grid with editor appearance, edit layouts, form elements, and editing UI customization.
platform: ej2-angular
control: Editing 
documentation: ug
domainurl: ##DomainURL##
---

# Editing Styles in Angular Data Grid

Customize the appearance of editing elements in the [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid) using CSS. The following examples demonstrate styling edited rows, edit dialogs, input fields, and command buttons.

## Customize edited and added row table elements

Use the `.e-editedrow` and `.e-addedrow` classes to style edited and added row table elements.

```css
.e-grid .e-editedrow table, .e-grid .e-addedrow table {
    background-color: #62b2eb;
}
```

![Customizing the added row element](../images/edited-added-row-element.png)
![Customizing the edited row element](../images/edited-added-row-element-2.png)

## Customize the edited row input element

Use the `.e-gridform` and `.e-input` classes to style the input element in an edited form row.

```css
.e-grid .e-gridform .e-rowcell .e-input-group .e-input.e-field {
    font-family: cursive;
    color:rgb(214, 33, 123)
}
```

![Customizing the edited and added row element](../images/edited-row-input-element.png)

## Customize the edit dialog header

Use the `.e-edit-dialog` and `.e-dlg-header-content` classes to style the edit dialog header.

```css
.e-edit-dialog .e-dlg-header-content {
    background-color: #deecf9;
}
```

![Customizing the edit dialog header element](../images/edit-dialog-header-element.png)

## Customize input fields in dialog edit mode

Use the `.e-gridform` and `.e-float-input` classes to customize the input elements within the edit dialog.

```css
.e-gridform .e-rowcell .e-float-input .e-field {
    font-family: cursive;
}
```

![Customizing the edited row input element in dialog](../images/edited-row-input-element-in-dialog.png)

## Customize the command column buttons

Use the  `.e-edit`, `.e-delete`, `.e-update`, and `.e-cancel-icon` classes to style the respective command column buttons in the grid.

```css

.e-grid .e-delete::before ,.e-grid .e-cancel-icon::before {
    color: #f51717;
}
.e-grid .e-edit::before, .e-grid .e-update::before {
    color: #077005;
}
```

![Customize command column button](../images/commandbutton-1.png)
![Customize command column button](../images/commandbutton-2.png)
