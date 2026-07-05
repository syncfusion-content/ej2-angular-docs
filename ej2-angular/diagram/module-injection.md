---
layout: post
title: Module Injection with Angular Diagram Component | Syncfusion®
description:  Learn how to use module injection with the Syncfusion® Angular Diagram component to enable additional features.
platform: ej2-angular
control: Module Injection 
documentation: ug
domainurl: ##DomainURL##            
---

# Module injection in Angular Diagram Component

The Diagram component provides optional services to enable feature-specific functionality. Inject only the required services based on your application needs.

## Available diagram services

The following services can be injected based on the required features:

- `DataBindingService`: Required when generating nodes from a data source.
- `HierarchicalTreeService`: Required when using hierarchical tree or organization chart layouts.
- `BpmnDiagramsService`: Required when using built-in BPMN shapes.
- `ConnectorBridgingService`: Required when adding bridges to connectors.
- `ConnectorEditingService`: Required when editing connector segments.
- `DiagramContextMenuService`: Required when customizing or handling the Diagram context menu.
- `LayoutAnimationService`: Required when adding animation to layout changes.
- `MindMapService`: Required when using mind map layouts.
- `PrintAndExportService`: Required when printing or exporting diagram objects.
- `RadialTreeService`: Required when using radial tree layouts.
- `SnappingService`: Required when enabling object snapping.
- `SymmetricLayoutService`: Required when rendering symmetric layouts.
- `UndoRedoService`: Required when supporting undo and redo actions.
- `Ej1SerializationService`: Required when loading EJ1 Diagram JSON in EJ2 diagrams.

## Inject diagram services

To enable advanced features such as data binding and hierarchical layouts, inject the corresponding services into the component.

For example, to create diagrams from data and arrange them using a hierarchical layout, inject the `DataBindingService` and `HierarchicalTreeService`.

```ts
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

