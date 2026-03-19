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

This section explains the steps required to create a simple diagram and demonstrates the basic usage of the diagram component.

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

Use [Angular CLI](https://github.com/angular/angular-cli) to set up your Angular applications. Install Angular CLI using the following command:

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-diagram-app
cd my-diagram-app
```

## Installing Syncfusion Diagram package

All available Essential JS 2 packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry.

To install the Diagram component, use the following command:

```bash
npm install @syncfusion/ej2-angular-diagrams --save
```

N> The --save flag instructs NPM to include the diagram package in the dependencies section of the package.json file.

## Registering Diagram Module

Import the Diagram module into your Angular application (app.component.ts) from the package `@syncfusion/ej2-angular-diagrams` [src/app/app.component.ts].

```typescript
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { Component } from "@angular/core";

@Component({
//Import Diagram module
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram id="diagram" width="100%" height="580px"></ejs-diagram>`,
})
export class AppComponent {}
```

## Adding CSS reference

Combined CSS files are available in the Essential JS 2 package root folder. Reference these in your [src/styles.css] file using the following code:

```css
@import '../node_modules/@syncfusion/ej2-angular-diagrams/styles/material3.css';
@import "../node_modules/@syncfusion/ej2-angular-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
```

## Add Diagram component

Modify the template in the [src/app/app.component.ts] file to render the diagram component. Add the Angular Diagram using the `<ejs-diagram>` selector in the `template` section of the app.component.ts file:

```typescript
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { Component } from "@angular/core";

@Component({
//Import Diagram module
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram id="diagram" width="100%" height="580px"></ejs-diagram>`,
})
export class AppComponent {}

```

## Module Injection

The diagram component is divided into individual feature-wise modules. To use a particular feature, inject the required module. The following list describes the module names and their descriptions:

* `BpmnDiagramsService` - Inject this provider to add built-in BPMN shapes to diagrams.
* `ConnectorBridgingService` - Inject this provider to add bridges to connectors.
* `ConnectorEditingService` - Inject this provider to edit connector segments.
* `ComplexHierarchicalTreeService` - Inject this provider for complex hierarchical tree structures.
* `DataBindingService` - Inject this provider to populate nodes from a given data source.
* `DiagramCollaborationService` - Inject this provider to enable real-time collaborative editing in diagrams.
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

These modules should be injected into the providers section of the root NgModule or component class:

```javascript
import { BpmnDiagramsService, ComplexHierarchicalTreeService, ConnectorBridgingService, ConnectorEditingService, DataBindingService, DiagramCollaborationService, DiagramContextMenuService, DiagramModule, Ej1SerializationService, HierarchicalTreeService, LayoutAnimationService, MindMapService, PrintAndExportService, RadialTreeService, SnappingService, SymmetricLayoutService, UndoRedoService } from '@syncfusion/ej2-angular-diagrams';
import { Component } from "@angular/core";

@Component({
imports: [
         DiagramModule
    ],

   providers: [ HierarchicalTreeService, MindMapService, RadialTreeService, ComplexHierarchicalTreeService, DataBindingService, SnappingService, PrintAndExportService, BpmnDiagramsService, SymmetricLayoutService, ConnectorBridgingService, UndoRedoService, LayoutAnimationService, DiagramContextMenuService, ConnectorEditingService, DiagramCollaborationService, Ej1SerializationService ],
   standalone: true,
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram id="diagram" width="100%" height="400px"></ejs-diagram>`,
})
export class AppComponent {}
```

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

Now, run the application using the npm start command. Open the browser with the generated link and you can see an empty diagram:

```bash
npm start
```

N> The selector specified in the **@Component** decorator of the **app.component.ts** file must match the custom element tag used in the index.html file. For example, if your @Component decorator includes the selector "app-container", your index.html file should include an element `<app-container></app-container>`.

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

Customize the appearance of a node by changing its [`fill`](../api/diagram/shapeStyleModel#fill-string) color, [`strokeColor`](../api/diagram/shapeStyleModel#strokecolor-string), [`strokeWidth`](../api/diagram/shapeStyleModel#strokewidth), [`borderColor`](../api/diagram/node#borderColor-string), [`borderWidth`](../api/diagram/node#borderWidth-number), [`strokeDashArray`](../api/diagram/shapeStyleModel#strokeDashArray-number), [`opacity`](../api/diagram/shapeStyleModel#opacity-number), and [`shadow`](../api/diagram/shapeStyleModel#shadow-number) properties:

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

Connect nodes by adding connectors using the [`connectors`](../api/diagram/connectorModel) property of the diagram. Reference the source and target endpoints using the [`sourceID`](../api/diagram/connectorModel#sourceid) and [`targetID`](../api/diagram/connectorModel#targetid) properties. Combine the required nodes and connectors to form a complete flow diagram:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/getting-started/flowdiagram-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/getting-started/flowdiagram-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/getting-started/flowdiagram-cs1" %}

Set default values for all [`nodes`](../api/diagram/nodemodel) and [`connectors`](../api/diagram/connectorModel) using the [`getNodeDefaults`](../api/diagram#getnodedefaults) and [`getConnectorDefaults`](../api/diagram#getconnectordefaults) properties, respectively. For example, if all nodes have the same width and height, move such properties into `getNodeDefaults`.

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

Configure the above "Employee Information" with the diagram so that nodes and connectors are automatically generated using the mapping properties. The following code example demonstrates how to use [`dataSourceSettings`](../api/diagram/datasourcemodel) to map [`id`](../api/diagram/dataSourceModel#id) and [`parentId`](../api/diagram/dataSourceModel#parentid) with the corresponding property names of employee information:

```typescript
@Component({
  selector: "app-container",
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [dataSourceSettings]='dataSourceSettings'></ejs-diagram>`
})
export class AppComponent {
  @ViewChild("diagram")
  public dataSourceSettings: DataSourceModel;
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
  ngOnInit(): void {
    this.dataSourceSettings = {
      id: "Name",
      parentId: "ReportingPerson",
      dataManager: new DataManager(this.data as JSON[])
    };
  }
}
```

### Rendering layout with Datasource

To create an organizational chart, set the [`type`](../api/diagram/layoutType) of layout as `OrganizationalChart`. The following code example shows how DataManager generates layouts based on the DataSourceSettings of the Diagram:

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

The following code examples show how to define the default appearance of nodes and connectors. The [`setNodeTemplate`](../api/diagram#setnodetemplate) method updates each node based on employee data:

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