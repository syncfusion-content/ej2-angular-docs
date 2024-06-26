---
layout: post
title: Disable Drag and Drop in Angular Document Editor | Syncfusion
description: Learn here all about Disable drag and drop in document editor in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Disable drag and drop in document editor 
documentation: ug
domainurl: ##DomainURL##
---

# How to Disable Drag and Drop in Angular Document Editor

Document Editor provides support to drag and drop contents within the component and it can be customized(enable and disable) using [`allowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/documenteditorsettings/#allowDragAndDrop)  property in Document editor settings.

The following example illustrates to customize the drag and drop option.

```typescript
@Component({
      template: `<ejs-documenteditorcontainer serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" height="600px" [enableToolbar]=true [documentEditorSettings]="settings"> </ejs-documenteditorcontainer>`,
})
export class AppComponent{
    public settings: DocumentEditorSettingsModel = { allowDragAndDrop : false };
}
```

>Note: Default value of [`allowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/documenteditorsettings/#allowDragAndDrop) property is `true`.

The following example illustrates to disable the drag and drop option in DocumentEditor.

```typescript
@Component({
      template: `<ejs-documenteditor #document_editor height="330px" [enablePrint]=true [documentEditorSettings]="settings"></ejs-documenteditor>`,
})
export class AppComponent{
    public settings: DocumentEditorSettingsModel = { allowDragAndDrop : false };
}
```

>Note: Default value of [`allowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/documenteditorsettings/#allowDragAndDrop) property is `true`.