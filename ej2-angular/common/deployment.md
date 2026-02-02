---
layout: post
title: Deployment in Angular Common control | Syncfusion
description: Learn here all about Deployment in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Deployment

This guide covers the recommended ways to deploy Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI components in production applications. The primary and most efficient method is using npm packages with Angular CLI integration. CDN links are provided as an alternative for quick prototyping or non-bundled scenarios.

## Using npm Packages (Recommended)

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI components are published as individual npm packages on the public [npm registry](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular). This approach integrates seamlessly with Angular CLI, supports tree-shaking, and simplifies theme and dependency management.

### Installation

Install the required component package using npm or yarn:

```bash
npm install @syncfusion/ej2-angular-buttons --save
# or
yarn add @syncfusion/ej2-angular-buttons
```

### Angular CLI Schematics (Automatic Setup)

Use the `ng add` command for one-step installation and configuration:

```bash
ng add @syncfusion/ej2-angular-buttons
```

This command:
- Installs the package and dependencies
- Adds the necessary module import to `app.module.ts`
- Configures styles in `angular.json`
- Imports the required theme CSS

### Manual Configuration

If not using schematics, manually configure the module and styles:

1. **Import the module** in your feature or root module (NgModule approach):

```ts
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  imports: [
    // ...
    ButtonModule
  ],
  // ...
})
export class AppModule { }
```

Alternatively, for Angular 14+ you can use a **standalone component** and import Syncfusion modules directly in the component's `imports` array:

```ts
import { Component } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <button ejs-button>Click</button>
  `
})
export class AppComponent { }
```

2. **Add theme CSS** in `angular.json` under `styles`:

```json
"styles": [
  "node_modules/@syncfusion/ej2-angular-buttons/styles/material.css",
  "src/styles.css"
]
```

Alternatively, import the theme in `styles.scss`:

```scss
@import '@syncfusion/ej2-angular-buttons/styles/material.css';
```

Common themes include: `material3`, `bootstrap5`, `tailwind3`, `fabric`, `highcontrast`.

For a combined theme (all components), use:

```scss
@import '@syncfusion/ej2/material.css';
```

### Package Structure

Each Syncfusion<sup style="font-size:70%">&reg;</sup> Angular npm package follows this structure:

| Files / Folders                          | Purpose                                                                 |
|------------------------------------------|-------------------------------------------------------------------------|
| `dist/<packagename>.umd.min.js`          | Minified UMD bundle for AMD/CommonJS module loaders                     |
| `dist/<packagename>.umd.js`              | Unminified UMD bundle                                                   |
| `src/`                                   | ES6 source files (useful for custom bundling or tree-shaking)           |
| `styles/<theme_name>.css`                | Pre-compiled CSS for each theme                                         |
| `styles/<theme_name>.scss`               | SCSS source files for custom theme customization                        |
| `package.json`                           | Package metadata, dependencies, and peer dependencies                   |

## Using CDN (Alternative)

CDN deployment is suitable for simple pages, prototypes, or when avoiding module bundlers. Syncfusion<sup style="font-size:70%">&reg;</sup> provides both individual component CDNs and global combined files.

### Global CDN (Recommended for Simplicity)

Include the all-in-one script and theme:

```html
<!-- Syncfusion Essential JS 2 base script -->
<script src="https://cdn.syncfusion.com/ej2/{version}/dist/ej2.min.js"></script>

<!-- Theme (example: Material) -->
<link href="https://cdn.syncfusion.com/ej2/{version}/material.css" rel="stylesheet" />
```

Replace `{version}` with the desired release version (e.g., `32.1.24`).

### Individual Component CDN

For loading only specific components:

```html
<script src="https://cdn.syncfusion.com/ej2/{version}/ej2-angular-buttons/dist/ej2-angular-buttons.umd.min.js"></script>
<link href="https://cdn.syncfusion.com/ej2/{version}/ej2-angular-buttons/styles/material.css" rel="stylesheet" />
```

### Notes on CDN Usage

- Always use the latest stable version for production.
- CDN links do not support tree-shaking or optimized bundling.
- Global `ej2.min.js` includes all base functionality and is preferred over loading multiple individual UMD files.

## Additional Best Practices

- **Production Optimization**: Use Angular CLI production build (`ng build --prod`) to enable tree-shaking and minification.
- **Theme Customization**: Modify SCSS variables before compilation for custom branding.
- **Dependency Management**: Regularly update packages to benefit from bug fixes and performance improvements.
- **License**: Ensure compliance with Syncfusion commercial licensing for production use.

For detailed component-specific deployment instructions, refer to the individual component documentation.