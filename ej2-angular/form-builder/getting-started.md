---
layout: post
title: Angular Form Builder Getting Started | Syncfusion
description: Check out how to get started with the Syncfusion Angular Form Builder component, including installation, setup, and a basic example.
platform: ej2-angular
control: Getting Started
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Form Builder component

The Form Builder is an intuitive, visual form designer that lets the user to create and customize forms interactively by dragging and dropping fields—no code required. Users can visually design forms, configure field properties, and preview the generated form in real time. The Form Builder also allows to export the form schema for use with the [Form Renderer](https://ej2.syncfusion.com/angular/documentation/form-renderer/getting-started) control.

This guide demonstrates how to set up and configure the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Form Builder component, from initial installation through setting up the form schema in the component.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

## Prerequisites

- Install a supported [Node.js](https://nodejs.org/en) LTS release and npm (or another Node package manager) before continuing.
- Ensure your environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement).
- Supported Angular and Syncfusion package combinations are listed in the [Version Compatibility](https://ej2.syncfusion.com/angular/documentation/upgrade/version-compatibility) guide.

## Setup the Angular application

A straightforward approach to getting started with Angular is to create a new application using the [Angular CLI](https://github.com/angular/angular-cli). Install Angular CLI globally with the following command:

```bash
npm install -g @angular/cli
```
To install a particular version of Angular CLI, use:

```bash
npm install -g @angular/cli@21.0.0
```

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

## Create a new application

With Angular CLI installed, use this command to generate a new application:

```bash
ng new syncfusion-angular-app
```

* This command will prompt you to configure settings like enabling Angular routing and choosing a stylesheet format.

```bash

? Which stylesheet format would you like to use? (Use arrow keys)
> CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss.org                                             ]

```

* By default, a CSS-based application is created. Use SCSS if required:

```bash
ng new syncfusion-angular-app --style=scss
```

* During project setup, when prompted for the Server-side rendering (SSR) option, choose the appropriate configuration.

![Initial_setup](images/SSR.png)

* Select the required AI tool, or choose 'None' if you do not need one.

![Initial_setup](images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> Note: In Angular 19 and earlier, the project uses `app.component.ts`, `app.component.html`, and `app.component.css`, and so on. In Angular 20+, the CLI generates a simpler structure with `app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Form Builder package

To install the **Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Form Builder** package, use the following command:

```bash
ng add @syncfusion/ej2-angular-form-builder
```

The `ng add` command installs the package, registers it in `package.json`, and configures the required entries in your workspace automatically. 

If `ng add` is unavailable in your setup, install the package manually with:

```bash
npm install @syncfusion/ej2-angular-form-builder
```

## Adding CSS reference

Themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> Form Builder component can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/angular/documentation/appearance/overview) documentation.

Install the Material 3 theme package using the following npm command:

```bash
npm install @syncfusion/ej2-material3-theme
```

Then add the following CSS reference to the **src/styles.css** file. This is the default global stylesheet registered under `styles` in `angular.json`:

```css
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/material3.css";
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Form Builder component

After package and theme setup, update the root component. File and class names can vary by Angular CLI version (`src/app/app.ts` with `export class App`, or `app.component.ts` with `AppComponent`). Replace the root component content with the sample below, or merge the Form Builder import into your generated file.

 ```typescript
import { Component } from '@angular/core';
import { FormBuilderAllModule } from '@syncfusion/ej2-angular-form-builder';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormBuilderAllModule],
  template: `<div ejs-form-builder></div>`
})

export class AppComponent {
}
```

## Running the application

Run the application using the following command:

```bash
ng serve
```

When the build succeeds, the CLI reports a local URL (default: http://localhost:4200). Open that URL in a browser to view the Form Builder. If the port is already in use, the CLI prompts for another port, or you can run `ng serve --port 4201`.

The output will appear as follows:

![Angular Form Builder](./images/form-builder.png)

## Basic components of the Form Builder

The Form Builder control consists of the following sections:

1. **Left Pane / Toolbox** — Displays all the supported form fields, which can be dragged and dropped.
2. **Central design canvas** — Holds the dropped form fields to construct the form.
3. **Right Pane** — Provides options to customize the form settings as well as the selected form fields.
4. **Code view** — Displays the form schema during the form design process.
5. **Form Preview** — Allows you to preview and interact with the generated form in real time once it is created.

## Adding form fields to the design canvas

Form fields can be added to the central design canvas in the following ways:

* **Form Components Panel** — A toolbox of form fields is available in the left-side pane to drag and drop them onto the design canvas.
* **Context Menu in the Design Canvas** — After the first form field is dropped, a button at the end of the central canvas can be used to add additional form fields using a context menu that appears when the button is clicked.

![Form Builder with context menu](./images/form-builder-drag-drop.gif)

## See Also

* [Getting Started with Angular Standalone](./angular-standalone) — deeper standalone-focused walkthrough
* [Getting Started with ASP.NET Core and Angular using the Project Template](./aspnet-core)
* [Getting Started with Angular CLI as frontend in ASP.NET MVC](./aspnet-mvc)
* [Getting Started with Ionic and Angular](../frameworks-and-feature/ionic)
* [Getting Started with Angular and Electron](../frameworks-and-feature/electron)
* [Upgrade Guide](../upgrade/upgrading-syncfusion)