---
layout: post
title: Text format in Angular Document editor component | Syncfusion
description: Learn here all about Text format in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Text format 
documentation: ug
domainurl: ##DomainURL##
---

# Text format in Angular Document editor component

Document Editor supports several formatting options for text like bold, italic, font color, highlight color, and more. This section describes how to modify the formatting for selected text in detail.

## Bold

The bold formatting for selected text can be get or set by using the following sample code.

```typescript

//Gets the value for bold formatting of selected text.
let bold : boolean = documenteditor.selection.characterFormat.bold;
//Sets bold formatting for selected text.
documenteditor.selection.characterFormat.bold = true;

```

You can toggle the bold formatting based on existing value at selection. Refer to the following sample code.

```typescript
documenteditor.editor.toggleBold();
```

## Italic

The Italic formatting for selected text can be get or set by using the following sample code.

```typescript
//Gets the value for italic formatting of selected text.
let italic : boolean = documenteditor.selection.characterFormat.italic;
//Sets italic formatting for selected text.
documenteditor.selection.characterFormat.italic= true|false;
```

You can toggle the Italic formatting based on existing value at selection. Refer to the following sample code.

```typescript
documenteditor.editor.toggleItalic();
```

## Underline property

The underline style for selected text can be get or set by using the following sample code.

```typescript
//Gets the value for underline formatting of selected text.
let underline : Underline = documenteditor.selection.characterFormat.underline;
//Sets underline formatting for selected text.
documenteditor.selection.characterFormat.underline='Single' | 'None';
```

You can toggle the underline style of selected text based on existing value at selection by specifying a value. Refer to the following sample code.

```typescript
documenteditor.editor.toggleUnderline('Single');
```

## Strikethrough property

The strikethrough style for selected text can be get or set by using the following sample code.

```typescript
//Gets the value for strikethrough formatting of selected text.
let strikethrough : Strikethrough = documenteditor.selection.characterFormat.strikethrough;
//Sets strikethrough formatting for selected text.
documenteditor.selection.characterFormat.strikethrough='Single' | 'Normal';
```

You can toggle the strikethrough style of selected text based on existing value at selection by specifying a value. Refer to the following sample code.

```typescript
documenteditor.editor.toggleStrikethrough();
```

## Superscript property

The selected text can be made superscript by using the following sample code.

```typescript
//Gets the value for baselineAlignment formatting of selected text.
let baselineAlignment : BaselineAlignment = documenteditor.selection.characterFormat.baselineAlignment;
//Sets baselineAlignment formatting for selected text.
documenteditor.selection.characterFormat.baselineAlignment='Superscript';
```

Toggle the selected text as superscript or normal using the following sample code.

```typescript
documenteditor.editor.toggleSuperscript();
```

## Subscript property

The selected text can be made subscript by using the following sample code.

```typescript
//Gets the value for baselineAlignment formatting of selected text.
let baselineAlignment : BaselineAlignment = documenteditor.selection.characterFormat.baselineAlignment;
//Sets baselineAlignment formatting for selected text.
documenteditor.selection.characterFormat.baselineAlignment='Subscript';
```

Toggle the selected text as subscript or normal using the following sample code.

```typescript
documenteditor.editor.toggleSubscript();
```

You can make a subscript or superscript text as normal using the following code.

```typescript
documenteditor.selection.characterFormat.baselineAlignment='Normal';
```

## Size

The size of selected text can be get or set using the following code.

```typescript
//Gets the value for fontSize formatting of selected text.
let fontSize : number = documenteditor.selection.characterFormat.fontSize;
//Sets fontSize formatting for selected text.
documenteditor.selection.characterFormat.fontSize= 32;
```

## Color

### Change Font Color by UI Option

In the Document Editor, the Text Properties pane features two icons for managing text color within the user interface (UI):

* **Colored Box:** This icon visually represents the **current color** applied to the selected text.
* **Text (A) Icon:** Clicking this icon allows users **to modify the color** of the selected text by choosing a new color from the available options.

This Font Color option appear as follows.

![Font Color](images/fontColor.PNG)

### Change Font Color by Code

The color of selected text can be get or set using the following code.

```typescript
//Gets the value for fontColor formatting of selected text.
let fontColor : string = documenteditor.selection.characterFormat.fontColor;
//Sets fontColor formatting for selected text.
documenteditor.selection.characterFormat.fontColor= 'Pink';
documenteditor.selection.characterFormat.fontColor= '#FFC0CB';
```

## Font

The font style of selected text can be get or set using the following sample code.

```typescript
//Gets the value for fontFamily formatting of selected text.
let baselineAlignment : string = documenteditor.selection.characterFormat.fontFamily;
//Sets fontFamily formatting for selected text.
documenteditor.selection.characterFormat.fontFamily= 'Arial';
```

## Highlight color

The highlight color of the selected text can be get or set using the following sample code.

```typescript
//Gets the value for highlightColor formatting of selected text.
let highlightColor : HighlightColor = documenteditor.selection.characterFormat.highlightColor;
//Sets highlightColor formatting for selected text.
documenteditor.selection.characterFormat.highlightColor= 'Pink';
documenteditor.selection.characterFormat.highlightColor= '#FFC0CB';
```

## Toolbar with options for text formatting

Refer to the following example.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  DocumentEditorComponent,
  EditorService,
  SelectionService,
  SfdtExportService,
  TableDialogService,
  EditorHistoryService,
} from '@syncfusion/ej2-angular-documenteditor';
import { ItemModel, Toolbar } from '@syncfusion/ej2-navigations';

import { classList, createElement } from '@syncfusion/ej2-base';

@Component({
  imports: [ButtonModule, DocumentEditorAllModule],

  standalone: true,
  selector: 'app-container',

  //specifies the template string for the Document Editor Container component
  template: `<div style="width:100%;">
      <ejs-documenteditor #document_editor  id="container" height="330px"  
        style="display:block" [isReadOnly]=false [enableEditor]=true [enableSfdtExport]=true [enableEditorHistory]=true
    [enableTableDialog]=true (selectionChange)='onSelectionChange()'> </ejs-documenteditor></div>`,
  encapsulation: ViewEncapsulation.None,
  providers: [
    EditorService,
    SelectionService,
    SfdtExportService,
    TableDialogService,
    EditorHistoryService,
  ],
})
export class AppComponent {
  @ViewChild('document_editor')
  public documentEditor?: DocumentEditorComponent;
  public fontStyle: string[] = [
    'Algerian',
    'Arial',
    'Calibri',
    'Cambria',
    'Cambria Math',
    'Candara',
    'Courier New',
    'Georgia',
    'Impact',
    'Segoe Print',
    'Segoe Script',
    'Segoe UI',
    'Symbol',
    'Times New Roman',
    'Verdana',
    'Windings',
  ];
  public fontSize: string[] = [
    '8',
    '9',
    '10',
    '11',
    '12',
    '14',
    '16',
    '18',
    '20',
    '22',
    '24',
    '26',
    '28',
    '36',
    '48',
    '72',
    '96',
  ];
  public toolBar: Toolbar = new Toolbar({
    clicked: this.toolbarButtonClick.bind(this),
    items: [
      {
        prefixIcon: 'e-de-ctnr-bold e-icons',
        tooltipText: 'Bold',
        id: 'bold',
      },
      {
        prefixIcon: 'e-de-ctnr-italic e-icons',
        tooltipText: 'Italic',
        id: 'italic',
      },
      {
        prefixIcon: 'e-de-ctnr-underline e-icons',
        tooltipText: 'Underline',
        id: 'underline',
      },
      {
        prefixIcon: 'e-de-ctnr-strikethrough e-icons',
        tooltipText: 'strikethrough',
        id: 'strikethrough',
      },
      {
        prefixIcon: 'e-de-ctnr-subscript e-icons',
        tooltipText: 'subscript',
        id: 'subscript',
      },
      {
        prefixIcon: 'e-de-ctnr-superscript e-icons',
        tooltipText: 'superscript',
        id: 'superscript',
      },
    ],
  });
  ngAfterViewInit() {
    if (this.toolBar) {
      this.toolBar.appendTo('#toolbar'); // Ensure #toolbar exists in your template
    }
  }

  toolbarButtonClick(arg: { item: { id: any } }) {
    switch (arg.item.id) {
      case 'bold':
        //Toggles the bold of selected content
        this.documentEditor?.editor.toggleBold();
        break;
      case 'italic':
        //Toggles the Italic of selected content
        this.documentEditor?.editor.toggleItalic();
        break;
      case 'underline':
        //Toggles the underline of selected content
        this.documentEditor?.editor.toggleUnderline('Single');
        break;
      case 'strikethrough':
        //Toggles the strikethrough of selected content
        this.documentEditor?.editor.toggleStrikethrough();
        break;
      case 'subscript':
        //Toggles the subscript of selected content
        this.documentEditor?.editor.toggleSubscript();
        break;
      case 'superscript':
        //Toggles the superscript of selected content
        this.documentEditor?.editor.toggleSuperscript();
        break;
    }
  }

  public changeFontFamily(args: { value: any }) {
    (
      this.documentEditor as DocumentEditorComponent
    ).selection.characterFormat.fontFamily = args.value;
    this.documentEditor?.focusIn();
  }
  //To Change the font Size of selected content
  public changeFontSize(args: { value: any }) {
    (
      this.documentEditor as DocumentEditorComponent
    ).selection.characterFormat.fontSize = args.value;
    this.documentEditor?.focusIn();
  }
  //To Change the font Color of selected content
  public changeFontColor(args: { currentValue: any }) {
    (
      this.documentEditor as DocumentEditorComponent
    ).selection.characterFormat.fontColor = args.currentValue.hex;
    this.documentEditor?.focusIn();
  }
  // Handle selection change for toolbar state toggling
  public onSelectionChange(): void {
    const characterFormat = this.documentEditor?.selection.characterFormat;
    const properties = [
      characterFormat?.bold,
      characterFormat?.italic,
      characterFormat?.underline,
      characterFormat?.strikethrough,
    ];
    var toggleBtnId = ['bold', 'italic', 'underline', 'strikethrough'];

    for (var i = 0; i < properties.length; i++) {
      var toggleBtn = document.getElementById(toggleBtnId[i]) as HTMLElement;
      if (
        (typeof properties[i] == 'boolean' && properties[i] == true) ||
        (typeof properties[i] == 'string' && properties[i] !== 'None')
      ) {
        toggleBtn.classList.add('e-btn-toggle');
      } else {
        if (toggleBtn.classList.contains('e-btn-toggle'))
          toggleBtn.classList.remove('e-btn-toggle');
      }
    }
  }
}
```

## See Also

* [Feature modules](../document-editor/feature-module/)
* [Font dialog](../document-editor/dialog#font-dialog)
* [Keyboard shortcuts](../document-editor/keyboard-shortcut#text-formatting)