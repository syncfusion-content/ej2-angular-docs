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

## Setup Angular Environment

You can use [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications.
To install Angular CLI use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion Diagram package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,

1.Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)

2.Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-diagrams`](https://www.npmjs.com/package/@syncfusion/ej2-angular-diagrams/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-diagrams --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-diagrams@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-diagrams/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-diagrams@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-diagrams:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Registering Diagram Module

Import Diagram module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-diagrams` [src/app/app.module.ts].

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the DiagramMOdule for the Diagram component
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of ej2-angular-diagrams module into NgModule
  imports:      [ BrowserModule, DiagramModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

## Adding CSS reference

Combined CSS files are available in the Essential JS 2 package root folder. This can be referenced in [src/styles.css] using following code.

```css
@import '../node_modules/@syncfusion/ej2-angular-diagrams/styles/material.css';
@import "../node_modules/@syncfusion/ej2-angular-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-angular-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-angular-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-angular-navigations/styles/material.css";
```

## Add Diagram component

Modify the template in [src/app/app.component.ts] file to render the diagram component. Add the Angular Diagram by using `<ejs-diagram>` selector in `template` section of the app.component.ts file.

```typescript
import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-container',
  // specifies the template string for the Diagram component
  template: `<ejs-diagram id='diagram-container'></ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

    ngOnInit(): void {
    }
}

```

## Defining Basic Diagram

The below example shows a basic Diagrams

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/getting-started/initialize-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/getting-started/initialize-cs1/src/app.module.ts %}
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

These modules should be imported and injected into the Diagram component using `Diagram.Inject` method as follows.

```javascript
   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';
   import { AppComponent } from './app.component';
   import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
   import { HierarchicalTreeService, MindMapService, RadialTreeService, ComplexHierarchicalTreeService } from '@syncfusion/ej2-angular-diagrams';
   import { DataBindingService, SnappingService, PrintAndExportService, BpmnDiagramsService} from '@syncfusion/ej2-angular-diagrams';
   import { SymmetricLayoutService, ConnectorBridgingService, UndoRedoService, LayoutAnimationService} from '@syncfusion/ej2-angular-diagrams';
   import { DiagramContextMenuService, ConnectorEditingService } from '@syncfusion/ej2-angular-diagrams';

   @NgModule({
       imports: [
           BrowserModule, DiagramModule
       ],
       declarations: [AppComponent],
       bootstrap: [AppComponent],
       providers: [ HierarchicalTreeService, MindMapService, RadialTreeService, ComplexHierarchicalTreeService, DataBindingService, SnappingService, PrintAndExportService, BpmnDiagramsService, SymmetricLayoutService, ConnectorBridgingService, UndoRedoService, LayoutAnimationService, DiagramContextMenuService, ConnectorEditingService ]
   })
```

## Flow Diagram

### Create and Add Node

Create and add a `node` (JSON data) with specific position, size, label, and shape.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/getting-started/connectnode-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/getting-started/connectnode-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/getting-started/connectnode-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/getting-started/connectnode-cs1" %}

### Connect two Nodes with a Connector

Add two node to the diagram as shown in the previous example. Connect these nodes by adding a connector using the `connector` property and refer the source and target end by using the `sourceNode` and `targetNode` properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/getting-started/connectnode-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/getting-started/connectnode-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/getting-started/connectnode-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/getting-started/connectnode-cs2" %}

Default values for all `nodes` and `connectors` can be set using the `getNodeDefaults` and `getConnectorDefaults` properties, respectively. For example, if all nodes have the same width and height, such properties can be moved into `getNodeDefaults`.

### Complete Flow Diagram

Similarly, the required nodes and connectors can be added to form a complete flow diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/getting-started/flowdiagram-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/getting-started/flowdiagram-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/getting-started/flowdiagram-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/getting-started/flowdiagram-cs1" %}

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

You can configure the above "Employee Information" with diagram, so that the nodes and connectors are automatically generated using the mapping properties. The following code example show how `dataSourceSettings` is used to map ID and parent with property name identifiers for employee information.

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

### Visualize employee

The following code examples indicate how to define the default appearance of nodes and connectors. The `setNodeTemplate` is used to update each node based on employee data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/getting-started/orgchart-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/getting-started/orgchart-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/getting-started/orgchart-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/getting-started/orgchart-cs1" %}

>Note: Please note that project generated through angular CLI project will always the changes made into application and compiled it automatically. We don’t need to run “npm start” command for each changes made into the application.