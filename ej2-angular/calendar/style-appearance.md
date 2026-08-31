---
layout: post
title: Style and Appearance in Angular Calendar | Syncfusion®
description: Learn how to style and customize the appearance of the Syncfusion Angular Calendar using CSS classes for backgrounds, text, and navigation.
platform: ej2-angular
control: Style appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in Angular Calendar

The following content provides the exact CSS structure that can be used to modify the control's appearance based on user preference. For the full list of CSS classes applied to the Calendar, see the [CSS class table in the Customization](./customization#day-cell-format) topic.

Add the custom CSS to your application's global stylesheet (e.g., `style.css`) so it can override the component's default styles. When using component-scoped styles (`@Component` styles array), you may need `::ng-deep` to pierce Angular's view encapsulation.

## Customizing the background color

Use the following CSS to customize the background color and border.

```css
/* To specify background color and border */
.e-calendar {
        background-color: peachpuff;
        border: 3px solid red;
}
```

## Customizing the Calendar date elements on hover

Use the following CSS to customize the date elements on hover.

```css
/* To specify background color, color, and border */
.e-calendar .e-content td:hover span.e-day, .e-calendar .e-content td:focus span.e-day, .e-bigger.e-small .e-calendar .e-content td:hover span.e-day, .e-bigger.e-small .e-calendar .e-content td:focus span.e-day {
        background-color: red;
        border: 2px solid black;
        color: #212529;
}
```

## Customizing the border of date cell grid

Use the following CSS to add a border to the date cell grid.

```css
/* To specify border */
.e-calendar .e-content span.e-day, .e-bigger.e-small .e-calendar .e-content span.e-day {
        border: 1px solid black;
}
```

## Customizing the Calendar title

Use the following CSS to customize the Calendar title.

```css
/* To specify color and font size  */
.e-calendar .e-header .e-title, .e-bigger.e-small .e-calendar .e-header .e-title {
        color: black;
        font-size: 20px;
}
```

## Customizing the previous and next icons

Use the following CSS to customize the previous and next icons.

```css
/* To specify color and border  */
.e-calendar .e-header .e-icon-container span, .e-bigger.e-small .e-calendar .e-header .e-icon-container span {
        border: 1px solid;
        color: chocolate;
}
```

## Customizing the footer button

Use the following CSS to customize the footer button.

```css
/* To specify background color, color, and border-color  */
.e-calendar .e-btn.e-today.e-flat, .e-calendar .e-css.e-btn.e-today.e-flat {
        background-color: red;
        border-color: black;
        color: black;
}
```

## Customizing the selected date cell

Use the following CSS to customize the selected date cell.

```css
/* To specify background color and color  */
.e-calendar .e-content td.e-selected span.e-day {
        background-color: maroon;
        color: #fff;
}
```

## Customizing the content header

Use the following CSS to customize the content header.

```css
/* To specify background */
.e-calendar .e-content thead, .e-bigger.e-small .e-calendar .e-content thead {
    background-color: aquamarine;
}
```

## See Also

* [Customization using CSS classes](./customization)
* [Day Cell Format CSS class table](./customization#day-cell-format)
