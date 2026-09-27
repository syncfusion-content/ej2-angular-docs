---
layout: post
title: Styles and appearance in Angular Tooltip | Syncfusion
description: Override the Syncfusion Angular Tooltip CSS classes to customize the wrapper, popup, content, arrow tip, inner tip, and outer tip appearance.
platform: ej2-angular
control: Tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# Styles and appearance in Angular Tooltip

The following CSS structure allows you to customize the tooltip appearance based on your preferences.

## Customizing the Angular Tooltip

Customize the Angular Tooltip using the following CSS:

```css
.e-tooltip-wrap {
    border-radius: 4px;
    opacity: 1;
}
```

## Customizing the Angular Tooltip popup

Customize Angular Tooltip popup properties using the following CSS:

```css
.e-tooltip-wrap.e-popup {
    background-color: #fff;
    border: 2px solid #000;
}
```

## Customizing the Angular Tooltip content

Customize Angular Tooltip content using the following CSS:

```css
.e-tooltip-wrap .e-tip-content {
    color: red;
    font-size: 12px;
    line-height: 20px;
}
```

## Customizing the Angular Tooltip arrow tip

Customize the Angular Tooltip arrow tip using the following CSS:

```css
/* Customize arrow tip at bottom */
.e-tooltip-wrap .e-arrow-tip.e-tip-bottom {
    height: 12px;
    left: 50%;
    top: 100%;
    width: 24px;
}

/* Customize arrow tip at top */
.e-tooltip-wrap .e-arrow-tip.e-tip-top {
    height: 12px;
    left: 50%;
    top: -9px;
    width: 24px;
}

/* Customize arrow tip at left */
.e-tooltip-wrap .e-arrow-tip.e-tip-left {
    height: 24px;
    left: -9px;
    top: 48%;
    width: 12px;
}

/* Customize arrow tip at right */
.e-tooltip-wrap .e-arrow-tip.e-tip-right {
    height: 24px;
    left: 100%;
    top: 50%;
    width: 12px;
}
```

## Customizing the Angular Tooltip inner tip

Customize the Angular Tooltip inner tip using the following CSS:

```css
.e-tooltip-wrap .e-arrow-tip-inner.e-tip-right,
.e-tooltip-wrap .e-arrow-tip-inner.e-tip-left,
.e-tooltip-wrap .e-arrow-tip-inner.e-tip-bottom,
.e-tooltip-wrap .e-arrow-tip-inner.e-tip-top {
    color: #fff;
    font-size: 25.9px;
}
```

## Customizing the Angular Tooltip outer tip

Customize the Angular Tooltip outer tip using the following CSS:

```css
/* Customize arrow tip at bottom */
.e-tooltip-wrap .e-arrow-tip-outer.e-tip-bottom {
    border-left: 12px solid transparent;
    border-right: 14px solid transparent;
    border-top: 12px solid #000;
}

/* Customize arrow tip at top */
.e-tooltip-wrap .e-arrow-tip-outer.e-tip-top {
    border-bottom: 12px solid #000;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
}

/* Customize arrow tip at left */
.e-tooltip-wrap .e-arrow-tip-outer.e-tip-left {
    border-bottom: 12px solid transparent;
    border-right: 12px solid #000;
    border-top: 12px solid transparent;
}

/* Customize arrow tip at right */
.e-tooltip-wrap .e-arrow-tip-outer.e-tip-right {
    border-bottom: 12px solid transparent;
    border-left: 12px solid #000;
    border-top: 12px solid transparent;
}
```
