---
layout: post
title: Schematics in Angular Range Slider component | Syncfusion
description: Learn here all about Schematics in Syncfusion Angular Range Slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Range Slider 
documentation: ug
domainurl: ##DomainURL##
---

# Schematics in Angular Range Slider component

Angular schematics is a workflow tool that automates component generation, module imports, and dependency management. EJ2 Slider supports Angular schematics for automated module injection, component scaffolding, dependency installation, and style imports.

## Getting started

> **Note**: Angular schematics require Angular CLI v6 or later. Check your version by running `ng --version`. If you have an earlier version, update the CLI with `npm install -g @angular/cli`.

To use Angular schematics, create an Angular CLI application by running the following command.

```
ng new angular-application
```

After running the above command and all the dependency modules installed, we can generate EJ2 Slider component using schematics.

## Dependency and Module injection using Schematics

Automate the installation and module injection of the `@syncfusion/ej2-angular-inputs` package using schematics. Run the following command in the application root directory.

```
ng add @syncfusion/ej2-angular-inputs --modules=slider
```

> **Note**: Omitting the `--modules=slider` flag will import all available modules (ColorPickerModule, UploaderModule, etc.) from the `@syncfusion/ej2-angular-inputs` package.

This command performs the following actions:

* Installs the `@syncfusion/ej2-angular-inputs` package and updates `package.json`.
* Imports the `SliderModule` in `app.module.ts` and adds it to the `@NgModule` decorator's `import` array.

## Component generation using Schematics

Use Angular schematics to quickly generate pre-configured Slider components with specific features. This significantly reduces setup time and provides ready-to-use components for development.

Use the following syntax to generate Slider components:

```
ng generate @syncfusion/<component-package-name>:<componentName-featureName> --name=<your-desired-name>
```

| Feature Name     | Schematics command                                                                      |
|     :-:          |  ---                                                                                    |
| Default Slider   | `ng generate @syncfusion/ej2-angular-inputs:slider-default --name=default-slider`       |
| MinRange Slider  | `ng generate @syncfusion/ej2-angular-inputs:slider-minrange --name=minrange-slider`     |
| Range Slider     | `ng generate @syncfusion/ej2-angular-inputs:slider-range --name=range-slider`           |
| Ticks Slider     | `ng generate @syncfusion/ej2-angular-inputs:slider-ticks --name=ticks-slider`           |
| Limits Slider    | `ng generate @syncfusion/ej2-angular-inputs:slider-limits --name=limits-slider`         |
| Vertical Slider  | `ng generate @syncfusion/ej2-angular-inputs:slider-vertical --name=vertical-slider`     |

These commands perform the following actions:

* Generate a Slider component with specified features in a new folder under `src/app` using the name you provided.
* Automatically import the component into `app.module.ts` and add it to the `@NgModule` decorator's `declarations` array.

> **Note**: The `@syncfusion/ej2-angular-inputs` package must be installed, though running the `ng add` command is not strictly required if you install it separately.
