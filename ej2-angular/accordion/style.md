---
layout: post
title: Style in Angular Accordion component | Syncfusion
description: Learn here all about Style in Syncfusion Angular Accordion component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accordion 
documentation: ug
domainurl: ##DomainURL##
---

# Style in Angular Accordion component

The Angular Accordion component can be customized using CSS to modify its appearance, such as borders, colors, icons, and hover effects. These styles allow alignment with your application’s theme or branding.

## Customizing Accordion

Modify the Accordion’s overall appearance, such as adding a border to match your application’s design, using the following CSS:

```CSS
.e-accordion {
    border: 5px solid rgb(173, 255, 47);
}
```

## Customizing the list items

Use the following CSS to customize the items of Accordion.

```CSS
.e-accordion .e-acrdn-item {
    text-align: center;
    color: pink;
    background-color: #2fa1ff;
}
```

## Customizing Accordion's header

Use the following CSS to customize the header of Accordion control.

```CSS

.e-accordion .e-acrdn-item.e-select > .e-acrdn-header {
    background: #2fa1ff !important;
    justify-content: center;
}

```

## Customizing Accordion's expand and collapse icons

Use the following CSS to customize the expand and collapse icons of Accordion control.

```CSS

.e-accordion .e-acrdn-item .e-acrdn-header .e-toggle-icon .e-icons {
     color: pink;
}

```

## Customizing the hover state of Accordion control

Use the following CSS to customize the accordion item when hovering.

```CSS

.e-accordion .e-acrdn-item .e-acrdn-header:hover {
    border: 2px solid gray;
}

```

## Customizing selected item of Accordion control

Use the following CSS to customize the selected accordion item.

```CSS

.e-accordion .e-acrdn-item.e-select.e-active>.e-acrdn-header,
.e-accordion .e-acrdn-item.e-select.e-item-focus>.e-acrdn-header {
    background-color: rgb(0, 15, 100) !important;
}

```

Use the following CSS to customize the selected accordion item text.

```CSS
.e-accordion .e-acrdn-item.e-select.e-active>.e-acrdn-header .e-acrdn-header-content,
.e-accordion .e-acrdn-item.e-select.e-item-focus>.e-acrdn-header .e-acrdn-header-content {
    color: #2fa1ff !important;
}
```