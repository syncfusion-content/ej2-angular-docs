---
layout: post
title: Getting started with Angular Diagram component | Syncfusion
description:  Checkout and learn about Getting started with Angular Diagram component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Diagram component

This section explains you the steps required to create a simple diagram and demonstrate the basic usage of the diagram control.

## Prerequisites

[`System requirements for Syncfusion Angular UI components`](https://ej2.syncfusion.com/angular/documentation/system-requirement)

## Dependencies

The following list of dependencies are required to use the `Diagram` component in your application.

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

You can use [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications.
To install Angular CLI use the following command.

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

All the available Essential JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry.

To install Diagram component, use the following command.

```bash
npm install @syncfusion/ej2-angular-diagrams --save
```

N> The --save will instruct NPM to include the diagram package inside of the dependencies section of the package.json.

## Registering Diagram Module

Import Diagram module into Angular application(app.component.ts) from the package `@syncfusion/ej2-angular-diagrams` [src/app/app.component.ts].

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

Combined CSS files are available in the Essential JS 2 package root folder. This can be referenced in [src/styles.css] using following code.

```css
@import '../node_modules/@syncfusion/ej2-angular-diagrams/styles/material.css';
@import "../node_modules/@syncfusion/ej2-angular-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
```

## Add Diagram component

Modify the template in [src/app/app.component.ts] file to render the diagram component. Add the Angular Diagram by using `<ejs-diagram>` selector in `template` section of the app.component.ts file.

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

The diagram component is divided into individual feature-wise modules. In order to use a particular feature, inject the required module. The following list describes the module names and their description.

* `BpmnDiagramsService` - Inject this provider to add built-in BPMN Shapes to diagrams.
* `ConnectorBridgingService` - Inject this provider to add bridges to connectors.
* `ConnectorEditingService` - Inject this provider to edit the segments for connector.
* `ComplexHierarchicalTreeService` - Inject this provider to complex hierarchical tree like structure.
* `DataBindingService` - Inject this provider to populate nodes from given data source.
* `DiagramContextMenuService` - Inject this provider to manipulate context menu.
* `HierarchicalTreeService` - Inject this provider to use hierarchical tree like structure.
* `LayoutAnimationService` - Inject this provider animation to layouts.
* `MindMapService` - Inject this provider to use mind map.
* `PrintAndExportService` - Inject this provider to print or export the objects.
* `RadialTreeService` - Inject this provider to use Radial tree like structure.
* `SnappingService` - Inject this provider to Snap the objects.
* `SymmetricLayoutService` - Inject this provider to render layout in symmetrical method.
* `UndoRedoService` - Inject this provider to revert and restore the changes.
* `Ej1SerializationService` - Inject this provider to load ej1 diagram json in ej2 diagram.

These modules should be injected into the providers section of root NgModule or component class.

```javascript
import { BpmnDiagramsService, ComplexHierarchicalTreeService, ConnectorBridgingService, ConnectorEditingService, DataBindingService, DiagramContextMenuService, DiagramModule, Ej1SerializationService, HierarchicalTreeService, LayoutAnimationService, MindMapService, PrintAndExportService, RadialTreeService, SnappingService, SymmetricLayoutService, UndoRedoService } from '@syncfusion/ej2-angular-diagrams';
import { Component } from "@angular/core";

@Component({
imports: [
         DiagramModule
    ],

   providers: [ HierarchicalTreeService, MindMapService, RadialTreeService, ComplexHierarchicalTreeService, DataBindingService, SnappingService, PrintAndExportService, BpmnDiagramsService, SymmetricLayoutService, ConnectorBridgingService, UndoRedoService, LayoutAnimationService, DiagramContextMenuService, ConnectorEditingService,Ej1SerializationService ],
   standalone: true,
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram id="diagram" width="100%" height="400px"></ejs-diagram>`,
})
export class AppComponent {}
```

## Defining Basic Diagram

The below example shows a basic diagram which renders an empty diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/getting-started/initialize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/getting-started/initialize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/getting-started/initialize-cs1" %}

Now, run the application by using npm start command. Open the browser with the generated link and you can see an empty diagram.

```bash
npm start
```

N> The selector specified in the **@Component** decorator of the **app.component.ts** file must match the custom element tag used in the index.html file. For example, if your @Component decorator includes the selector "app-container", your index.html file should include an element `<app-container></app-container>`.

## Basic Diagram elements

* `Node`: Visualizes any graphical object using nodes, which can also be arranged and manipulated on a diagram page.
* `Connector`: Represents the relationship between two nodes. Three types of connectors provided as follows:

```

1) Orthogonal
2) Bezier
3) Straight

```
* `Port`: Acts as the connection points of node or connector and allows you to create connections with only specific points.
* `Annotation`: Shows additional information by adding text or labels on nodes and connectors.

## Flow Diagram

### Create and Add Node to the diagram

Create and add a `node` (JSON data) with specific position, size, label, and shape.

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

Syncfusion diagram control provides support to render many built-in shapes in diagram.
Please refer to [`Shapes`](shapes) to know about built-in Shapes.

The appearance of a node can be customized by changing its [`fill`](../api/diagram/shapeStyleModel/#fill-string) color, [`strokeColor`](../api/diagram/shapeStyleModel/#strokecolor-string), [`strokeWidth`](../api/diagram/shapeStyleModel/#strokewidth-number), [`borderColor`](../api/diagram/node/#borderColor-string), [`borderWidth`](../api/diagram/node/#borderWidth-number), [`strokeDashArray`](../api/diagram/shapeStyleModel/#strokeDashArray-number),  [`opacity`](../api/diagram/shapeStyleModel/#opacity-number), and [`shadow`](../api/diagram/shapeStyleModel/#shadow-number).

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

You can add multiple nodes with different shapes into diagram.

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

Connect these nodes by adding a connector using the [`connectors`](../api/diagram/connectorModel/) property of diagram and refer the source and target end by using the [`sourceID`](../api/diagram/connectorModel/#sourceid) and [`targetID`](../api/diagram/connectorModel/#targetid) properties.
The required nodes and connectors can be added to form a complete flow diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/getting-started/flowdiagram-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/getting-started/flowdiagram-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/getting-started/flowdiagram-cs1" %}

Default values for all [`nodes`](../api/diagram/nodemodel/) and [`connectors`](../api/diagram/connectorModel/) can be set using the [`getNodeDefaults`](../api/diagram/#getnodedefaults) and [`getConnectorDefaults`](../api/diagram/#getconnectordefaults) properties, respectively. For example, if all nodes have the same width and height, such properties can be moved into `getNodeDefaults`.

## Automatic Organization Chart

In the 'Flow Diagram' section, how to create a diagram manually was discussed. This section explains how to create and position the diagram automatically.

### Business object (Employee information)

Define Employee Information as JSON data. The following code example shows an employee array whose, `Name` is used as an unique identifier and `ReportingPerson` is used to identify the person to whom an employee report to, in the organization.

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

You can configure the above "Employee Information" with diagram, so that the nodes and connectors are automatically generated using the mapping properties. The following code example demonstrates how to use [`dataSourceSettings`](../api/diagram/datasourcemodel/) to map [`id`](../api/diagram/dataSourceModel/#id) and [`parentId`](../api/diagram/dataSourceModel/#parentid) with the corresponding property names of employee information.

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

To create an organizational chart, the [`type`](../api/diagram/layoutType/) of layout should be set as an `OrganizationalChart`. The following code example shows how DataManager is used to generate Layout based on the DataSourceSettings of the Diagram.

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

The following code examples indicate how to define the default appearance of nodes and connectors. The [`setNodeTemplate`](../api/diagram/#setnodetemplate) is used to update each node based on employee data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/getting-started/orgchart-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/getting-started/orgchart-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/getting-started/orgchart-cs2" %}

N> Please note that project generated through angular CLI project will always the changes made into application and compiled it automatically. We don’t need to run “npm start” command for each changes made into the application.