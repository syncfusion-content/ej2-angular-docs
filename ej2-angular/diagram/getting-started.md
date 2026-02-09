---
layout: post
title: Getting started with Angular Diagram component | Syncfusion®
description:  Checkout and learn about Getting started with Angular Diagram component of Syncfusion Essential® JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Diagram Component

This section explains how to create your first diagram and introduces the basic features of the Diagram component.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

## Prerequisites

[System requirements for Syncfusion Angular UI components](https://ej2.syncfusion.com/angular/documentation/system-requirement)

## Dependencies

The following dependencies are required to use the `Diagram` component in your application:

```javascript
|-- @syncfusion/ej2-angular-diagrams
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-splitbuttons
```

## Setup Angular Environment

Use [Angular CLI](https://github.com/angular/angular-cli) to set up your Angular applications. Install Angular CLI globally with the following command:

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Generate a new Angular project using the Angular CLI command below.

```bash
ng new my-diagram-app
```

When prompted, choose your preferred stylesheet format:

```bash
? Which stylesheet system would you like to use?
> CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
  Tailwind CSS    [ https://tailwindcss.com                                        ]
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss.org                                             ]
```

By default, CSS is used. For SCSS, see the [Sass guide](https://ej2.syncfusion.com/angular/documentation/common/how-to/sass).

Then navigate to the project directory:

```bash
cd my-diagram-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Diagram package

All Essential JS 2 packages are available on [npmjs.com](https://www.npmjs.com/~syncfusionorg). Install the Angular Diagram package:

```bash
npm install @syncfusion/ej2-angular-diagrams --save
```

N> The --save flag adds the package to the dependencies section of `package.json`.

## Registering Diagram Module

Import the Diagram module in `src\app\app.ts` from the package `@syncfusion/ej2-angular-diagrams` and enable it for your component.

```typescript
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { Component } from "@angular/core";

@Component({
// Enable the DiagramModule in this standalone component
imports: [ DiagramModule ],
selector: 'app-root',
})
export class App {}
```

## Add Required Styles

Combined CSS files are available in the Essential JS 2 package root folder. Reference the CSS files in `src\styles.css`:

```css
@import "../node_modules/@syncfusion/ej2-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
```

## Render the Diagram component

Add the `<ejs-diagram>` selector to the template in `src\app\app.ts`, and specify a height to ensure the diagram renders correctly.

```typescript
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { Component } from "@angular/core";

@Component({
selector: 'app-root',
//Import Diagram module
imports: [ DiagramModule ],
// specifies the template string for the diagram component
template: `<ejs-diagram id="diagram" width="100%" height="580px"></ejs-diagram>`,
})
export class App {}
```

## Run the Application

Start the dev server:

```bash
npm start
```

Open the browser using the printed URL to see the empty diagram.

N> The selector specified in the **@Component** decorator of the **app.ts** file must match the custom element tag used in the `index.html` file. For example, if your @Component decorator includes the selector "app-root", your `index.html` file should include an element `<app-root></app-root>`.

## Enabling Feature Modules (Services)

Diagram features are provided as services. To use a particular feature,  Import the ones you need and add them to the component’s `providers`.

Example: enable `UndoRedoService` and `SnappingService`:

```typescript
import { Component } from "@angular/core";
// Import the services
import {
  DiagramModule,
  UndoRedoService,
  SnappingService
} from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: 'app-root',
  imports: [ DiagramModule ],
  // Register the services
  providers: [ UndoRedoService, SnappingService ],
  template: `<ejs-diagram width="100%" height="500px">
                <e-nodes>
                    <e-node [offsetX]="100" [offsetY]="100" [width]="100" [height]="100">
                    </e-node>
                </e-nodes>
            </ejs-diagram>`,
})
export class App { }
```

The following list describes the module names and their descriptions:

* `BpmnDiagramsService` - Inject this provider to add built-in BPMN shapes to diagrams.
* `ConnectorBridgingService` - Inject this provider to add bridges to connectors.
* `ConnectorEditingService` - Inject this provider to edit connector segments.
* `ComplexHierarchicalTreeService` - Inject this provider for complex hierarchical tree structures.
* `DataBindingService` - Inject this provider to populate nodes from a given data source.
* `DiagramContextMenuService` - Inject this provider to manipulate the context menu.
* `HierarchicalTreeService` - Inject this provider to use hierarchical tree structures.
* `LayoutAnimationService` - Inject this provider to add animation to layouts.
* `MindMapService` - Inject this provider to use mind map layouts.
* `PrintAndExportService` - Inject this provider to print or export diagram objects.
* `RadialTreeService` - Inject this provider to use radial tree structures.
* `SnappingService` - Inject this provider to enable object snapping.
* `SymmetricLayoutService` - Inject this provider to render layouts in a symmetrical method.
* `UndoRedoService` - Inject this provider to revert and restore changes.
* `Ej1SerializationService` - Inject this provider to load EJ1 diagram JSON in EJ2 diagrams.

Tip: Import your services and add them to the `providers` list in `app.config.ts` to make them available throughout the app.

## Defining Basic Diagram

The example below shows a basic diagram that renders an empty diagram canvas:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/getting-started/initialize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/getting-started/initialize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/getting-started/initialize-cs1" %}

## Basic Diagram elements

Diagrams are built using the following core elements:

* `Node`: Visualizes graphical objects that can be arranged and manipulated on a diagram page.
* `Connector`: Represents relationships between two nodes. Three types of connectors are provided:
  * Orthogonal
  * Bezier
  * Straight
* `Port`: Acts as connection points on nodes or connectors, allowing connections only at specific points.
* `Annotation`: Displays additional information by adding text or labels on nodes and connectors.

## Flow Diagram

### Create and Add Node to the diagram

Create and add a `node` (JSON data) with specific position, size, label, and shape:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/getting-started/connectnode-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/getting-started/connectnode-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/getting-started/connectnode-cs1" %}


### Apply shape and style to node

The Syncfusion diagram component provides support to render many built-in shapes. Refer to [Shapes](shapes) to learn about built-in shapes.

Customize the appearance of a node by changing its [`fill`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shapestylemodel#fill) color, [`strokeColor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shapestylemodel#strokecolor), [`strokeWidth`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shapestylemodel#strokewidth), [`borderColor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node#bordercolor), [`borderWidth`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node#borderwidth), [`strokeDashArray`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shapestylemodel#strokedasharray), [`opacity`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shapestylemodel#opacity), and [`shadow`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node#shadow) properties:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/getting-started/apply-style/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/getting-started/apply-style/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/getting-started/apply-style" %}


### Add other flowchart nodes to the diagram

Add multiple nodes with different shapes to create a comprehensive diagram:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/getting-started/connectnode-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/getting-started/connectnode-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/getting-started/connectnode-cs2" %}

### Connect flow chart nodes

Connect nodes by adding connectors using the [`connectors`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectormodel) property of the diagram. Reference the source and target endpoints using the [`sourceID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectormodel#sourceid) and [`targetID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectormodel#targetid) properties. Combine the required nodes and connectors to form a complete flow diagram:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/getting-started/flowdiagram-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/getting-started/flowdiagram-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/getting-started/flowdiagram-cs1" %}

Set default values for all [`nodes`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodemodel) and [`connectors`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectormodel) using the [`getNodeDefaults`](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#getnodedefaults) and [`getConnectorDefaults`](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#getconnectordefaults) properties, respectively. For example, if all nodes have the same width and height, move such properties into `getNodeDefaults`.

## Automatic Organization Chart

The previous 'Flow Diagram' section explained how to create a diagram manually. This section demonstrates how to create and position diagrams automatically using data binding.

### Business object (Employee information)

Define Employee Information as JSON data. The following code example shows an employee array where `Name` serves as a unique identifier and `ReportingPerson` identifies the person to whom an employee reports in the organization:

```typescript
    public data: Object[] = [
        {
            Name: "Elizabeth",
            Role: "Director"
        },
        {
            Name: "Christina",
            ReportingPerson: "Elizabeth",
            Role: "Manager"
        },
        {
            Name: "Yoshi",
            ReportingPerson: "Christina",
            Role: "Lead"
        },
        {
            Name: "Philip",
            ReportingPerson: "Christina",
            Role: "Lead"
        },
        {
            Name: "Yang",
            ReportingPerson: "Elizabeth",
            Role: "Manager"
        },
        {
            Name: "Roland",
            ReportingPerson: "Yang",
            Role: "Lead"
        },
        {
            Name: "Yvonne",
            ReportingPerson: "Yang",
            Role: "Lead"
        }
    ];
```

### Map data source

Configure the above "Employee Information" with the diagram so that nodes and connectors are automatically generated using the mapping properties. The following code example demonstrates how to use [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/diagram/datasourcemodel) to map [`id`](https://ej2.syncfusion.com/angular/documentation/api/diagram/datasourcemodel#id) and [`parentId`](https://ej2.syncfusion.com/angular/documentation/api/diagram/datasourcemodel#parentid) with the corresponding property names of employee information:

```typescript
@Component({
  selector: "app-root",
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [dataSourceSettings]='dataSourceSettings'></ejs-diagram>`
})
export class App {
  @ViewChild("diagram")
  public diagram!: DiagramComponent;
  public data: Object[] = [
    {
      Name: "Elizabeth",
      Role: "Director"
    },
    {
      Name: "Christina",
      ReportingPerson: "Elizabeth",
      Role: "Manager"
    },
    {
      Name: "Yoshi",
      ReportingPerson: "Christina",
      Role: "Lead"
    },
    {
      Name: "Philip",
      ReportingPerson: "Christina",
      Role: "Lead"
    },
    {
      Name: "Yang",
      ReportingPerson: "Elizabeth",
      Role: "Manager"
    },
    {
      Name: "Roland",
      ReportingPerson: "Yang",
      Role: "Lead"
    },
    {
      Name: "Yvonne",
      ReportingPerson: "Yang",
      Role: "Lead"
    }
  ];

  public dataSourceSettings: DataSourceModel = {
      id: "Name",
      parentId: "ReportingPerson",
    dataManager: new DataManager(this.data as JSON[]),
    };
}
```

### Rendering layout with Datasource

To create an organizational chart, set the [`type`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layouttype) of layout as `OrganizationalChart`. The following code example shows how DataManager generates layouts based on the DataSourceSettings of the Diagram:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/getting-started/orgchart-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/getting-started/orgchart-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/getting-started/orgchart-cs1" %}

### Customize employee appearance

The following code examples show how to define the default appearance of nodes and connectors. The [`setNodeTemplate`](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#setnodetemplate) method updates each node based on employee data:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/getting-started/orgchart-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/getting-started/orgchart-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/getting-started/orgchart-cs2" %}

N> Projects generated through Angular CLI automatically detect changes made to the application and compile them. You don't need to run "npm start" for each change made to the application.