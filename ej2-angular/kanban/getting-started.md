---
layout: post
title: Getting started with Angular Kanban Component | Syncfusion
description:  Checkout and learn about Getting started with Angular Kanban component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Kanban Component

This section explains the steps required to create a simple Angular Kanban component and configure its available functionalities.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

## Overview

The Kanban component consists of:
- **Cards**: Represent tasks, mapped to a `dataSource` via `cardSettings`.
- **Columns**: Define workflow stages, mapped using `keyField`.
- **Swimlanes**: Group cards by categories, configured with `swimlaneSettings`.

## Setup Angular Environment

Use the [Angular CLI](https://github.com/angular/angular-cli) to set up an Angular application. Install Angular CLI with the following command:

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Create a new Angular application using the Angular CLI:

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Kanban package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. Get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components. They are:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the following command.

Add [`@syncfusion/ej2-angular-kanban`](https://www.npmjs.com/package/@syncfusion/ej2-angular-kanban/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-kanban --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package, use the following command.

Add [`@syncfusion/ej2-angular-kanban@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-kanban/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-kanban@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as follows.

```bash
@syncfusion/ej2-angular-kanbanr:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding CSS reference

Add Kanban component’s styles as given in the following `styles.css.`

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-kanban/styles/material.css';
```

## Add Kanban component

Modify the template in the [src/app/app.component.ts] file to render the Kanban component. Add the Angular Kanban by using the `<ejs-kanban>` selector in the `template` section of the app.component.ts file.

`src/app/app.component.ts`

```typescript

import { KanbanModule } from '@syncfusion/ej2-angular-kanban'
import { Component } from '@angular/core';

@Component({
imports: [        
        KanbanModule
    ],
  standalone: true,
  selector: 'app-root',
  // specifies the template string for the Kanban component
  template: `<ejs-kanban>
            <e-columns>
                <e-column headerText='To do' keyField='Open'></e-column>
                <e-column headerText='In Progress' keyField='InProgress'></e-column>
                <e-column headerText='Testing' keyField='Testing'></e-column>
                <e-column headerText='Done' keyField='Close'></e-column>
            </e-columns>
        </ejs-kanban>`
})
export class AppComponent { }

```

## Run the application

Run the application in the browser using:

```bash
ng serve --open
```

The application will display an empty Kanban board with the defined columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/getting-started-empty-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/getting-started-empty-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/getting-started-empty-cs1" %}

## Populating cards

Populate the Kanban with cards by binding a local JSON array or remote data to the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/kanban/#datasource) property. To define `dataSource`, the mandatory fields in JSON object should be relevant to [keyField](https://ej2.syncfusion.com/angular/documentation/api/kanban/#keyfield). In the following example, you can see the cards defined with default fields such as ID, Summary, and Status.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/getting-started-key-field-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/getting-started-key-field-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/getting-started-key-field-cs2" %}

## Enable swimlane

`Swimlane` can be enabled by mapping the fields [swimlaneSettings.keyField](https://ej2.syncfusion.com/angular/documentation/api/kanban/#swimlanesettings) to appropriate column name in dataSource. This enables the grouping of the cards based on the mapped column values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/getting-started-swimlane-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/getting-started-swimlane-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/getting-started-swimlane-cs1" %}
