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

Syncfusion<sup style="font-size:70%">&reg;</sup> components ship with SCSS source files containing customizable variables for colors. You can override these variables to create branded or application-specific themes without modifying source CSS.

## Prerequisites

- Angular CLI project
- Syncfusion Angular package installed (e.g., `@syncfusion/ej2-angular-grids`)
- SCSS style format enabled (`ng new my-app --style=scss` or update `angular.json`)

## SCSS Variables Location

Component-specific SCSS files with variables are located in:

```
node_modules/@syncfusion/ej2-package-name/styles/{theme}.scss
```

Examples:
- Grid: `node_modules/@syncfusion/ej2-grids/styles/material.scss`
- Buttons/Base: `node_modules/@syncfusion/ej2-buttons/styles/material.scss`
- Base definitions (shared): `node_modules/@syncfusion/ej2-base/styles/definition/material.scss`

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

   ```scss
   // Import base definitions first (required for shared variables)
   @import "ej2-base/styles/definition/material";

   // Override variables before component imports
   $accent: #e91e63;           // Example: custom pink accent
   $primary: #4caf50;          // Example: custom green primary

   // Then import the component theme
   @import "ej2-grids/styles/material";
   @import "ej2-buttons/styles/material";
   // Add other components as needed
   ```

   > **Important**: Override variables **before** importing the component SCSS files. Many Syncfusion variables use `!default`, so redefining them beforehand takes precedence.

## Alternative: Using @use (Dart Sass Module System)

For better scoping and modern Sass:

```scss
@use "../node_modules/@syncfusion/ej2-base/styles/definition/material" with (
  $accent: #ff4081,
  $primary: #00e676
);

@use "../node_modules/@syncfusion/ej2-angular-grids/styles/material";
```

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

A working example of SCSS customization with Syncfusion Angular Grid is available on GitHub:  
https://github.com/SyncfusionExamples/ej2-angular-scss
