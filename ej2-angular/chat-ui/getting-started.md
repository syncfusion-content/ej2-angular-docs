---
layout: post
title: Getting started with Angular Chat UI | Syncfusion
description:  Checkout and learn about Getting started with Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in Angular Chat UI component

This section explains how to create a simple **Chat UI** component and configure its available functionalities in Angular.

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Angular | 12 and above |
| Node.js | 14.0.0 or above, Recommended: Latest Version |

> Note: This guide supports recent Angular versions including Angular 21 and standalone components. For detailed compatibility, refer to the Angular version support matrix in the Syncfusion docs.

### Angular supported versions

| Angular Version | Minimum Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Chat UI / Interactive Chat Version |
|-----------------|----------------------------------------------------------------------------------------------|
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

![Server_Side_Rendering_Setup](images/getting-started/SSR.png)

* Select the required AI tool or 'none' if you do not need any AI tool.

![AI_Tool_Setup](images/getting-started/AI-Tool.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> Note: In Angular 19 and below, it uses `app.ts`, `app.component.html`, `app.component.css` etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding Syncfusion Angular Chat UI package

To install the Chat UI package, use the following command:

```bash
npm install @syncfusion/ej2-angular-interactive-chat
```

## Adding CSS reference

Themes for Syncfusion Chat UI components can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/angular/documentation/appearance/overview) documentation.

Install the Material 3 theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-material3-theme --save

{% endhighlight %}
{% endtabs %}

Then add the following CSS reference to the `src/styles.css` file:

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../node_modules/@syncfusion/ej2-material3-theme/styles/chat-ui/index.css";

{% endhighlight %}
{% endtabs %}

## Adding Chat UI component

Modify the template in the `src/app/app.ts` file to render the Chat UI component. Add the Angular Chat UI by using the `<ejs-chatui>` selector in the `template` section of the `app.ts` file.

To define the chat content, use the `user` property to assign an identity to the current user, which is essential for distinguishing the user's messages from those of other participants.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/defaultmessages/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/defaultmessages/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/defaultmessages" %}

## Registering your Syncfusion license

Before using Syncfusion components, generate a license key from the [Syncfusion License Dashboard](https://www.syncfusion.com/account/downloads) and register it.

Open the `main.ts` file and add the following code:

```typescript
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('YOUR_LICENSE_KEY');
```

> **Note:** A valid Syncfusion license is required for production use. If a valid license is not registered, a trial license warning message will be displayed when the application runs.

## Run the application

After completing the configuration required to render a basic Chat UI, run the following command to display the output in your default browser.

```bash
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

- **Chat UI styles are not applied:** Ensure the required Syncfusion theme CSS is imported in `src/styles.css`.
- **Trial license warning message:** Register a valid Syncfusion license key using the `registerLicense()` method from `@syncfusion/ej2-base`.
- **Port 4200 is already in use:** Stop the conflicting process or run the application on a different port:

  ```bash
  ng serve --port 3000
  ```