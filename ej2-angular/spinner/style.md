---
layout: post
title: Style and appearance in Angular Spinner | Syncfusion
description: Customize the Syncfusion Angular Spinner stroke color and fill across Material, Fabric, Bootstrap, Bootstrap 4, and High Contrast themes with CSS overrides.
platform: ej2-angular
control: Style 
documentation: ug
domainurl: ##DomainURL##
---

# Style and appearance in Angular Spinner

The following CSS structure can be used to customize the spinner component's appearance based on your requirements.

## Customize the spinner

Use the following CSS to customize the spinner stroke color.

### Material theme

```CSS

.e-spinner-pane .e-spinner-inner .e-spin-material {
  stroke: green;
}

```

### Fabric theme

```CSS

.e-spinner-pane .e-spinner-inner .e-spin-fabric {
  stroke: green;
}

```

### Bootstrap theme

```CSS

.e-spinner-pane .e-spinner-inner .e-spin-bootstrap {
    fill: green;
    stroke: green;
}

```

### Bootstrap4 theme

```CSS

.e-spinner-pane .e-spinner-inner .e-spin-bootstrap4 {
    stroke: green;
}

```

### High Contrast theme

```CSS

.e-spinner-pane .e-spinner-inner .e-spin-high-contrast .e-path-arc {
    stroke: green;
}

```