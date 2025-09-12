---
layout: post
title: Editing in Angular Grid component | Syncfusion
description: Learn how to customize the appearance of editing elements in the Syncfusion Angular Grid component using CSS for rows, inputs, dialogs, and command column buttons.
platform: ej2-angular
control: Editing 
documentation: ug
domainurl: ##DomainURL##
---

# Editing in Angular Grid component

You can tailor the appearance of editing elements in the Syncfusion Angular Grid component using CSS. Below are examples of how to customize various editing-related elements.

## Customizing the edited and added row element

Style the background of edited or newly added row table elements with:

```css
.e-grid .e-editedrow table, .e-grid .e-addedrow table {
    background-color: #62b2eb;
}
```
Here, **.e-editedrow** targets edited rows and **.e-addedrow** targets added rows. Adjust `background-color` as desired.

![Customizing the added row element](../images/edited-added-row-element.png)
![Customizing the edited row element](../images/edited-added-row-element-2.png)

## Customizing the edited row input element

Set font and color for the input fields within edited rows:

```css
.e-grid .e-gridform .e-rowcell .e-input-group .e-input.e-field {
    font-family: cursive;
    color:rgb(214, 33, 123)
}
```
The **.e-gridform** and **.e-input** classes target inputs within the editing form.

![Customizing the edited and added row element](../images/edited-row-input-element.png)

## Customizing the edit dialog header element

Change the appearance of the edit dialog header:

```css
.e-edit-dialog .e-dlg-header-content {
    background-color: #deecf9;
}
```
Use **.e-edit-dialog** **.e-dlg-header-content** to target the dialog header.

![Customizing the edit dialog header element](../images/edit-dialog-header-element.png)

## Customizing the edited row input element in dialog edit mode

Style input fields in dialog edit mode:

```css
.e-gridform .e-rowcell .e-float-input .e-field {
    font-family: cursive;
}
```
This targets floating input fields within the edit dialog.

![Customizing the edited row input element in dialog](../images/edited-row-input-element-in-dialog.png)

## Customizing the command column buttons

Set custom colors for Edit, Delete, Update, and Cancel command buttons:

```css

.e-grid .e-delete::before ,.e-grid .e-cancel-icon::before{
    color: #f51717;
}
.e-grid .e-edit::before, .e-grid .e-update::before {
    color: #077005;
}
```
In this example, the **.e-edit, .e-delete, .e-update, and .e-cancel-icon** classes represent the respective command column buttons. You can modify the `color` property to change the color of these buttons.

![Customize command column button](../images/commandbutton-1.png)
![Customize command column button](../images/commandbutton-2.png)
