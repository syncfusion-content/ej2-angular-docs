---
layout: post
title: How to use SCSS with Syncfusion Angular components | Syncfusion
description: Learn how to use Sass (SCSS) in your Angular CLI project to customize Syncfusion Essential JS 2 Angular components.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Customizing Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components with SCSS

Sass (SCSS) enhances styling with variables, nesting, mixins, and functions, making it ideal for customizing Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component themes.

Syncfusion<sup style="font-size:70%">&reg;</sup> components ship with SCSS source files in the [theme packages](https://ej2.syncfusion.com/angular/documentation/appearance/overview#theme-packages) that contain customizable variables for colors. You can override these variables to create branded or application-specific themes without modifying the source CSS.

## Prerequisites

- Angular CLI project
- Syncfusion Angular package installed (e.g., `@syncfusion/ej2-angular-grids`)
- Syncfusion Theme package installed (e.g., `@syncfusion/ej2-material-theme`)
- SCSS style format enabled (`ng new my-app --style=scss` or update `angular.json`)

## SCSS Variables Location

Component-specific SCSS files with variables are located in:

```
node_modules/@syncfusion/ej2-<theme-name>-name/styles/<component-name/>{theme}.scss
```

Examples:
- Grid: `node_modules/@syncfusion/ej2-material-theme/styles/grid/index.scss`
- Buttons/Base: `node_modules/@syncfusion/ej2-material-theme/styles/button/index.scss`
- Base definitions (shared): `node_modules/@syncfusion/ej2-material-theme/styles/base/definition/material.scss`

Supported built-in themes include: `material`, `bootstrap5`, `tailwind`, `fluent`, `highcontrast`, `fabric`, etc. Newer themes (Material 3, Bootstrap 5.3, Tailwind3, Fluent2) also support CSS variables for easier runtime switching.

## Modern Setup (Angular 6+): angular.json & Dart Sass

Since Angular 6, configuration uses `angular.json` (not `.angular-cli.json`). Dart Sass is the default preprocessor.

1. **Enable global SCSS path resolution** (optional but recommended for cleaner imports):

   In `angular.json`, under `projects > [your-project] > architect > build > options` and `test > options`:

   ```json
   "stylePreprocessorOptions": {
     "includePaths": [
       "node_modules/@syncfusion"
     ]
   }
   ```

   This allows short imports like `@import "ej2-base/styles/definition/material";`.

2. **Import Syncfusion styles in global `src/styles.scss`**:

For better scoping and modern Sass:

```scss
@use "../node_modules/@syncfusion/ej2-material-theme/styles/base/definition/material" with (
  $accent: #ff4081,
  $primary: #00e676
);
@use "../node_modules/@syncfusion/ej2-material-theme/styles/grid/index.scss" as *;
```

> **Important**: To override base variables, use the base theme definition file. For component-specific variables, override them in the respective component definition files.

## Applying Styles in angular.json

Ensure global styles are included:

```json
"styles": [
  "src/styles.scss"
]
```

## Additional Modern Approaches

- **Theme Studio** — Use the [Syncfusion Theme Studio](https://ej2.syncfusion.com/themestudio/) to visually customize themes and export SCSS/CSS.
- **CSS Variables** (newer themes) — Many themes expose `--color-sf-primary`, `--color-sf-secondary`, etc., which you can override in `:root` or component scope.
  ```css
  :root {
    --color-sf-primary: 58, 183, 110;
    --color-sf-secondary: 230, 214, 220;
  }
  ```

## Sample Project

A working example of SCSS customization with Syncfusion Angular Grid is available on [GitHub](https://github.com/SyncfusionExamples/ej2-angular-scss).
