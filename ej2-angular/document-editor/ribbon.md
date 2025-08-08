---
layout: post
title: Ribbon in Angular Document editor control | Syncfusion
description: Learn here all about the Ribbon UI in Syncfusion Angular Document editor control, how to switch between Ribbon and Toolbar modes.
platform: ej2-angular
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon in Angular Document Editor Control

The Document Editor provides a modern Ribbon interface similar to Microsoft Word's interface. This Ribbon UI provides an efficient and intuitive way to access editing features, organizing commands within well-structured tabs and groups to enhance your document editing experience. Additionally, the Ribbon interface supports contextual tabs. Contextual tabs appear only when certain elements, such as tables, images, or headers/footers, are selected in the document.

You can switch between the classic **Toolbar** and the new **Ribbon** UI, and you can also choose between **Classic** and **Simplified** ribbon layouts.

## Enable Ribbon Mode

To enable Ribbon in Angular Document Editor, use the [`toolbarMode`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/#toolbarmode) property of `DocumentEditorContainer`. The available toolbar modes are:

- **'Toolbar'** - The traditional toolbar UI.
- **'Ribbon'** - The Ribbon UI, which provides a tabbed interface with grouped commands.

By default, `toolbarMode` is `Toolbar`.

The following code shows the how to enable the `Ribbon` in Document Editor.

```typescript
/**
 * Add below codes in app.component.html file
 */
<ejs-documenteditorcontainer #documenteditor_default [enableToolbar]=true [locale]="culture" [toolbarMode]="'Ribbon'" (created)="onCreate()" (documentChange)="onDocumentChange()" height="600px" [serviceUrl]="hostUrl" style="display:block;" [toolbarMode]="toolbarMode"></ejs-documenteditorcontainer>

/**
 * Add below codes in app.component.ts file
 */
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ToolbarService, DocumentEditorContainerComponent, RibbonService, DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [ToolbarService, RibbonService],
    standalone: true,
    imports: [DocumentEditorContainerModule, SwitchModule,  ]
})
export class AppComponent {
    public hostUrl: string = 'https://services.syncfusion.com/angular/production/api/documenteditor/';

    @ViewChild('documenteditor_default')
    public container: DocumentEditorContainerComponent;
    public toolbarMode: string = 'Ribbon'; // Options: 'Ribbon' or 'Toolbar'
}
```

## Ribbon Layouts

Document Editor provides two different Ribbon layouts:

- **Classic**: A traditional Office-like ribbon with detailed grouping and larger icons
- **Simplified**: A more compact ribbon design with streamlined controls

By default, `ribbonLayout` is set to `Simplified`. 

The following code shows the how to configure the ribbon layout in Document Editor:

```typescript
/**
 * Add below codes in app.component.html file
 */
<ejs-documenteditorcontainer #documenteditor_default [enableToolbar]=true [locale]="culture" [toolbarMode]="'Ribbon'" (created)="onCreate()" (documentChange)="onDocumentChange()" height="600px" [serviceUrl]="hostUrl" style="display:block;" [toolbarMode]="toolbarMode" [ribbonLayout]="ribbonLayout"></ejs-documenteditorcontainer>

/**
 * Add below codes in app.component.ts file
 */
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ToolbarService, DocumentEditorContainerComponent, RibbonService, DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [ToolbarService, RibbonService],
    standalone: true,
    imports: [DocumentEditorContainerModule, SwitchModule,  ]
})
export class AppComponent {
    public hostUrl: string = 'https://services.syncfusion.com/angular/production/api/documenteditor/';

    @ViewChild('documenteditor_default')
    public container: DocumentEditorContainerComponent;
    public toolbarMode: string = 'Ribbon'; // Options: 'Ribbon' or 'Toolbar'
    public ribbonLayout: string= 'Simplified'; // Options: 'Simplified' or 'Classic'
}
```

## See Also

* [How to customize the ribbon](../document-editor/how-to/customize-ribbon)
