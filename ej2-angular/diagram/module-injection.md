---
layout: post
title: Module Injection in Angular Diagram | Syncfusion®
description: Inject feature modules into the Angular Diagram to enable BPMN shapes, layouts, undo/redo, flowchart, Visio I/O, and real-time collaboration.
platform: ej2-angular
control: Module Injection 
documentation: ug
domainurl: ##DomainURL##            
---

# Module Injection in Angular Diagram

The Angular Diagram component provides optional services to enable feature-specific functionality. Inject only the required services based on your application needs.

## Available diagram services

The following services can be injected based on the required features:

- `AvoidLineOverlappingService`: Required when preventing connector lines from overlapping.
- `BpmnDiagramsService`: Required when using built-in BPMN shapes.
- `ComplexHierarchicalTreeService`: Required when using complex hierarchical tree-like structures.
- `ConnectorBridgingService`: Required when adding bridges to connectors.
- `ConnectorEditingService`: Required when editing connector segments.
- `DataBindingService`: Required when generating nodes from a data source.
- `DiagramCollaborationService`: Required when enabling real-time collaborative editing features.
- `DiagramContextMenuService`: Required when customizing or handling the Diagram context menu.
- `Ej1SerializationService`: Required when loading EJ1 Diagram JSON in EJ2 diagrams.
- `FlowchartLayoutService`: Required when using flowchart-style layouts.
- `HierarchicalTreeService`: Required when using hierarchical tree or organization chart layouts.
- `ImportAndExportVisioService`: Required when importing and exporting Visio diagrams.
- `LayoutAnimationService`: Required when adding animation to layout changes.
- `LineDistributionService`: Required when distributing connector lines evenly.
- `LineRoutingService`: Required when routing connectors automatically and avoiding overlapping.
- `MindMapService`: Required when using mind map layouts.
- `PrintAndExportService`: Required when printing or exporting diagram objects.
- `RadialTreeService`: Required when using radial tree layouts.
- `SnappingService`: Required when enabling object snapping.
- `SymmetricLayoutService`: Required when rendering symmetric layouts.
- `UndoRedoService`: Required when supporting undo and redo actions.

## Inject diagram services

To enable advanced features such as data binding and hierarchical layouts, inject the corresponding services into the component.

For example, to create diagrams from data and arrange them using a hierarchical layout, inject the `DataBindingService` and `HierarchicalTreeService`. The following example uses a standalone Angular component.

```
import { Component } from '@angular/core';
import {
  DataBindingService,
  DiagramModule,
  HierarchicalTreeService
} from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DiagramModule],
  providers: [DataBindingService, HierarchicalTreeService],
  template: `<ejs-diagram id="diagram" width="100%" height="580px"></ejs-diagram>`
})
export class App {}
```

For NgModule-based apps, register the services in the `providers` array of your `@NgModule` instead of the component.

The same `providers` pattern applies to any combination of the services listed above.

