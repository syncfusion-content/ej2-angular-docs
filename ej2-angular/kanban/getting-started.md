---
layout: post
title: Getting started with Angular Kanban Component | Syncfusion
description: Checkout and learn about Getting started with Angular Kanban component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Kanban Component

The Syncfusion Angular Kanban component is a workflow visualization tool that helps to organize, manage, and track tasks across different stages of a process. This section outlines the steps to create a basic Kanban board in Angular and configure its core features.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

## Overview

The Kanban component consists of the following elements:
- **Cards**: Represent tasks and are mapped to a `dataSource` via `cardSettings`.
- **Columns**: Define workflow stages and are mapped using the `keyField`property.
- **Swimlanes**: Group cards based on categories and are configured using `swimlaneSettings`.

## Setup Angular Environment

Use the [Angular CLI](https://github.com/angular/angular-cli) to create and manage Angular applications. Install Angular CLI using the following command:

```bash
npm install -g @angular/cli@21.0.1
```

## Create an Angular Application

Create a new Angular application using the Angular CLI:

```bash
ng new my-app
```
This command will prompt few settings for the new project, such as whether to add Angular routing and which stylesheet format to use.

![Initial_setup](images/Initial-setup.png)

By default, it will create a CSS-based application.

The CLI also displays an additional prompt asking whether to enable Server‑Side Rendering (SSR) and Static Site Generation (SSG), as shown below:

![Server_Side_Rendering_Setup](images/SSR.png)

For this setup, select **No**, as the Kanban does not require SSR or SSG for basic configuration.

Next, a prompt for AI tooling support appears, as shown below:

![AI_Tool_Setup](images/AI-Tool.png)

Any preferred option can be selected based on the development workflow or project needs.

Navigate to the project folder:

```bash
cd my-app
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Kanban package

All available Essential JS 2 packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry.

Install the Kanban component with the following command:

```bash
npm install @syncfusion/ej2-angular-kanban
```

## Adding CSS reference

Include the required styles in the `styles.css` file.

```css
/* Required basic Syncfusion Kanban styles */
@import '../node_modules/@syncfusion/ej2-kanban/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';

/* Styles for card interactions */
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
```

## Adding Kanban component

Update the [src/app/app.ts] file to render the Kanban component. Add the Angular Kanban by using the `<ejs-kanban>` selector in the `template` section of the app.ts file.

`src/app/app.ts`

```typescript

import { KanbanModule } from '@syncfusion/ej2-angular-kanban'
import { Component } from '@angular/core';

@Component({
    imports: [        
        KanbanModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-kanban>
                [dataSource]='data' keyField='Status' [cardSettings]='cardSettings' 
                <e-columns>
                    <e-column headerText='To do' keyField='Open'></e-column>
                    <e-column headerText='In Progress' keyField='InProgress'></e-column>
                    <e-column headerText='Testing' keyField='Testing'></e-column>
                    <e-column headerText='Done' keyField='Close'></e-column>
                </e-columns>
            </ejs-kanban>`
    })
export class App {
    public data: Object[] =  [
        {
            Id: 1,
            Status: 'Open',
            Summary: 'Analyze the new requirements gathered from the customer.',
            Type: 'Story',
            Priority: 'Low',
            Tags: 'Analyze,Customer',
            Estimate: 3.5,
            Assignee: 'Nancy Davloio',
            RankId: 1
        },
        {
            Id: 2,
            Status: 'InProgress',
            Summary: 'Improve application performance',
            Type: 'Improvement',
            Priority: 'Normal',
            Tags: 'Improvement',
            Estimate: 6,
            Assignee: 'Andrew Fuller',
            RankId: 1
        },
        {
            Id: 3,
            Status: 'Open',
            Summary: 'Arrange a web meeting with the customer to get new requirements.',
            Type: 'Others',
            Priority: 'Critical',
            Tags: 'Meeting',
            Estimate: 5.5,
            Assignee: 'Janet Leverling',
            RankId: 2
        },
        {
            Id: 4,
            Status: 'InProgress',
            Summary: 'Fix the issues reported in the IE browser.',
            Type: 'Bug',
            Priority: 'Release Breaker',
            Tags: 'IE',
            Estimate: 2.5,
            Assignee: 'Janet Leverling',
            RankId: 2
        },
        {
            Id: 5,
            Status: 'Testing',
            Summary: 'Fix the issues reported by the customer.',
            Type: 'Bug',
            Priority: 'Low',
            Tags: 'Customer',
            Estimate: '3.5',
            Assignee: 'Steven walker',
            RankId: 1
        },
    ];
    public cardSettings: CardSettingsModel = {
        contentField: 'Summary',
        headerField: 'Id'
    };
}

```

## Run the application

To run the Angular application, use the following command:

```bash
ng serve --open
```

This command builds the application and opens it in your default web browser.
Once the application is running, a Kanban board will be displayed with the configured columns.

In this example, the Kanban cards are populated using default fields such as ID, Summary, and Status.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/getting-started-key-field-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/getting-started-key-field-cs2/src/main.ts %}
{% endhighlight %}

{% highlight css tabtitle="styles.css" %}
{% include code-snippet/kanban/getting-started-key-field-cs2/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/kanban/getting-started-key-field-cs2/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/getting-started-key-field-cs2" %}