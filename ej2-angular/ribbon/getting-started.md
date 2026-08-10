---
layout: post
title: Getting Started with Angular Ribbon | Syncfusion
description: Learn how to get started with the Angular Ribbon and explore setup, configuration, and core feature examples for building ribbon interfaces.
control: Ribbon
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Ribbon

This section explains how to create a simple **Ribbon** component and configure its available functionalities in Angular.

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Angular | 12 and above |
| Node.js | 14.0.0 or above, Recommended: Latest Version |

> Note: This guide supports recent Angular versions including Angular 21 and standalone components. For detailed compatibility, refer to the Angular version support matrix in the Syncfusion docs.

### Angular supported versions

| Angular Version | Minimum Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Ribbon Version |
|-----------------|--------------------------------------------------------------------------------|
| [Angular v20](https://www.syncfusion.com/blogs/post/whats-new-in-angular-20) | 29.2.8 |
| [Angular v19](https://blog.angular.dev/meet-angular-v19-7b29dfd05b84/) | 26.1.35 |
| [Angular v18](https://blog.angular.dev/angular-v18-is-now-available-e79d5ac0affe/) | 25.2.3 |
| [Angular v17](https://blog.angular.io/introducing-angular-v17-4d7033212e4b/) | 23.2.4 |
| [Angular v16](https://blog.angular.io/angular-v16-is-here-4d7a28ec680d/) | 21.1.39 |
| [Angular v15](https://blog.angular.io/angular-v15-is-now-available-df7be7f2f4c8/) | 20.4.38 |
| [Angular v14](https://blog.angular.io/angular-v14-is-now-available-391a6db736af/) | 20.2.36 |
| [Angular v13](https://blog.angular.io/angular-v13-is-now-available-cce66f7bc296/) | 19.4.38 and above |
| [Angular v12](https://blog.angular.io/angular-v12-is-now-available-32ed51fbfd49/) | 19.3.43 |

### Browser support

| Browser | Supported Versions |
|:--------|:-------------------|
| Google Chrome, including Android & iOS | Latest 2 versions |
| Mozilla Firefox | Latest version |
| Microsoft Edge | Latest 2 versions |
| Apple Safari, including iOS | Latest 2 versions |

## Setup the Angular application

A straightforward approach to beginning with Angular is to create a new application using the [Angular CLI](https://github.com/angular/angular-cli). Install Angular CLI globally with the following command:

```bash
npm install -g @angular/cli
```

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

## Create a new application

With Angular CLI installed, execute this command to generate a new application:

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

* Select the required AI tool or 'none' if you do not need any AI tool.

![Initial_setup](images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> Note: In Angular 19 and below, it uses `app.ts`, `app.component.html`, `app.component.css` etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding Syncfusion Angular Ribbon package

To install the Ribbon package, use the following command:

```bash
npm install @syncfusion/ej2-angular-ribbon
```

## Adding CSS reference

Themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> component can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/angular/documentation/appearance/overview) documentation.

Install the Material 3 theme package using the following npm command:

```bash
npm install @syncfusion/ej2-material3-theme
```

Then add the following CSS reference to the **src/styles.css** file. This is the default global stylesheet registered under `styles` in `angular.json`:

```css
@import "@syncfusion/ej2-material3-theme/styles/material3.css";
```

## Adding Ribbon component

Modify the template in the `src/app/app.ts` file to render the Ribbon component. Add the Angular Ribbon by using the `<ejs-ribbon>` selector in the `template` section of the `app.ts` file.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/ribbon/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/getting-started-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/ribbon/getting-started-cs1/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/getting-started-cs1" %}

## Adding Ribbon tab

In Ribbon, the options are arranged in tabs for easy access. You can use the `<e-ribbon-tab>` selector to define the ribbon tab like below.

```javascript

import { Component } from "@angular/core";
import { RibbonModule } from '@syncfusion/ej2-angular-ribbon';

@Component({
imports: [ RibbonModule ],
standalone: true,
selector: "app-root",
template: `<!-- To Render Ribbon. -->
  <ejs-ribbon id="ribbon">
    <e-ribbon-tabs>
        <e-ribbon-tab header="Home"></e-ribbon-tab>
    </e-ribbon-tabs>
  </ejs-ribbon>`,
})
export class AppComponent { }

```

## Adding Ribbon group

To define a ribbon group under each tab, you can use the `<e-ribbon-group>` selector like below. The `orientation` property of ribbon group defines whether the collection of items will be rendered column-wise or row-wise.

```javascript

import { Component } from "@angular/core";
import { RibbonModule } from '@syncfusion/ej2-angular-ribbon';

@Component({
imports: [ RibbonModule ],
standalone: true,
selector: "app-root",
template: `<!-- To Render Ribbon. -->
  <ejs-ribbon id="ribbon">
    <e-ribbon-tabs>
        <e-ribbon-tab header="Home">
            <e-ribbon-groups>
                <e-ribbon-group header="Clipboard" orientation="Row"></e-ribbon-group>
            </e-ribbon-groups>
        </e-ribbon-tab>
    </e-ribbon-tabs>
  </ejs-ribbon>`
})

```

## Adding Ribbon item

You can use the `<e-ribbon-collection>` selector to define each ribbon collection that contains one or more items. To define each ribbon item, you can use the `<e-ribbon-item>` selector and the `type` property to specify the type of component to be rendered, like a button, a drop-down button, a combo box, and more.

```javascript

import { Component } from "@angular/core";
import { RibbonModule } from '@syncfusion/ej2-angular-ribbon';
import { RibbonSplitButtonSettingsModel, RibbonButtonSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
imports: [ RibbonModule ],
standalone: true,
selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard" orientation="Row">
                        <e-ribbon-collections>
                            <e-ribbon-collection id="paste-collection">
                                <e-ribbon-items>
                                    <e-ribbon-item type="SplitButton" [splitButtonSettings]="pasteSettings"></e-ribbon-item>
                                </e-ribbon-items>
                            </e-ribbon-collection>
                            <e-ribbon-collection id="cutcopy-collection">
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" [buttonSettings]="cutButton">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" [buttonSettings]="copyButton">
                                    </e-ribbon-item>
                                </e-ribbon-items>
                            </e-ribbon-collection>
                        </e-ribbon-collections>
                    </e-ribbon-group>
                </e-ribbon-groups>
            </e-ribbon-tab>
        </e-ribbon-tabs>
    </ejs-ribbon>`,
})
export class AppComponent {
  public pasteSettings: RibbonSplitButtonSettingsModel = { iconCss: "e-icons e-paste", items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }], content: "Paste" };
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
}

```

## Registering your Syncfusion license

Before using Syncfusion components, generate a license key from the [Syncfusion License Dashboard](https://www.syncfusion.com/account/downloads) and register it.

Open the `main.ts` file and add the following code:

```typescript
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('YOUR_LICENSE_KEY');
```

> **Note:** A valid Syncfusion license is required for production use. If a valid license is not registered, a trial license warning message will be displayed when the application runs.

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

## Production build

To create an optimized production build, run:

```bash
ng build
```

This command compiles the application and generates the production-ready files in the `dist/` directory.

To preview the production build locally, run:

```bash
npx http-server dist
```

Then open the URL displayed in the terminal.

## Troubleshooting

- **Ribbon styles are not applied:** Ensure the required Syncfusion theme CSS is imported in `src/styles.css`.
- **Trial license warning message:** Register a valid Syncfusion license key using the `registerLicense()` method from `@syncfusion/ej2-base`.
- **Port 4200 is already in use:** Stop the conflicting process or run the application on a different port:

  ```bash
  ng serve --port 3000
  ```
