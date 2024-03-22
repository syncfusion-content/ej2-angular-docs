---
layout: post
title: Customize color picker in Angular Document editor | Syncfusion
description: Learn here all about Customize color picker in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize color picker 
documentation: ug
domainurl: ##DomainURL##
---

# Customize color picker in Angular Document editor component

Document editor provides an options to customize the color picker using [`colorPickerSettings`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/documentEditorSettingsModel/#colorpickersettings)in the document editor settings. The color picker offers customization options for default appearance, by allowing selection between Picker or Palette mode, for font and border colors.

Similarly, you can use [`documentEditorSettings`](https://ej2.syncfusion.com/angular/documentation/api/document-editor#documenteditorsettings) property for DocumentEditor also.

The following example code illustrates how to customize the color picker in the document editor container.


```typescript
import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '@syncfusion/ej2-angular-documenteditor';
@Component({
      selector: 'app-root',
      // specifies the template string for the DocumentEditorContainer component
      template: `<ejs-documenteditorcontainer serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" height="600px" style="display:block" [documentEditorSettings]= "colorPickerSettings" [enableToolbar]=true> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService]
})
export class AppComponent implements OnInit {
    public colorPickerSettings = {colorPickerSettings: { mode: 'Palette', modeSwitcher: true, showButtons: true }};
    ngOnInit(): void {
    }
}
```

| Property | Behaviour |
|---|---|
| columns | It is used to render the ColorPicker palette with specified columns. Defaults to 10 |
| disabled | It is used to enable / disable ColorPicker component. If it is disabled the ColorPicker popup won’t open. Defaults to false |
| mode | It is used to render the ColorPicker with the specified mode. Defaults to ‘Picker’ |
| modeSwitcher | It is used to show / hide the mode switcher button of ColorPicker component. Defaults to true |
| showButtons | It is used to show / hide the control buttons (apply / cancel) of ColorPicker component. Defaults to true |

