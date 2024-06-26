---
layout: post
title: Comments in Angular Document editor component | Syncfusion
description: Learn here all about Comments in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Comments 
documentation: ug
domainurl: ##DomainURL##
---

# Comments in Angular Document editor component

Document Editor allows you to add comments to documents. You can add, navigate and remove comments in code and from the UI.

## Add a new comment

Comments can be inserted to the selected text.

```typescript
this.documentEditor.editor.insertComment("Test comment");
```

## Comment navigation

Next and previous comments can be navigated using the below code snippet.

```typescript
//Navigate to next comment
this.documentEditor.selection.navigateNextComment();

//Navigate to previous comment
this.documentEditor.selection.navigatePreviousComment();
```

## Delete comment

Current comment can be be deleted using the below code snippet.

```typescript
this.documentEditor.editor.deleteComment();
```

## Delete all comment

All the comments in the document can be deleted using the below code snippet.

```typescript
this.documentEditor.editor.deleteAllComments();
```

## Protect the document in comments only mode

Document Editor provides support for protecting the document with `CommentsOnly` protection. In this protection, user allowed to add or edit comments alone in the document.

Document editor provides an option to protect and unprotect document using [`enforceProtection`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/editor/#enforceprotection) and [`stopProtection`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/editor/#stopprotection) API.

The following example code illustrates how to enforce and stop protection in Document editor container.

```typescript
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DocumentEditorContainerComponent, ToolbarService } from '@syncfusion/ej2-angular-documenteditor';

@Component({
      selector: 'app-container',
      // specifies the template string for the Document Editor component
      template: `<div><button ejs-button (click)="protectDocument()" >Protect</button>
      <button ejs-button (click)="unProtectDocument()" >Unprotect</button>
      <ejs-documenteditorcontainer #document_editor serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" height="600px" style="display:block" [enableToolbar]=true> </ejs-documenteditorcontainer></div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [ToolbarService]
})
export class AppComponent {
    @ViewChild('document_editor')
    public container: DocumentEditorContainerComponent;

    public protectDocument(): void {
        //enforce protection
        container.documentEditor.editor.enforceProtection('123', 'CommentsOnly');
    }

    public unProtectDocument(): void {
        //stop the document protection
        container.documentEditor.editor.stopProtection('123');
    }
}
```

Comment only protection can be enabled in UI by using [Restrict Editing pane](../document-editor/document-management#restrict-editing-pane)

![Enable comment only protection](images/commentsonly.png)

>Note: In enforce Protection method, first parameter denotes password and second parameter denotes protection type. Possible values of protection type are `NoProtection |ReadOnly |FormFieldsOnly |CommentsOnly`. In stop protection method, parameter denotes the password.

## Mention support in Comments

Mention support displays a list of items that users can select or tag from the suggested list. To use this feature, type the @ character in the comment box and select or tag the user from the suggestion list.

The following example illustrates how to enable mention support in the Document Editor

```typescript
import { Component, OnInit } from '@angular/core';
import { ToolbarService , DocumentEditorSettingsModel } from '@syncfusion/ej2-angular-documenteditor';
@Component({
      selector: 'app-root',
      // specifies the template string for the DocumentEditorContainer component
      template: `<ejs-documenteditorcontainer serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" height="600px" style="display:block" [documentEditorSettings]= "settings" [enableToolbar]=true> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService]
})
export class AppComponent implements OnInit {
    public mentionData: any = [
        { "Name": "Selma Rose", "Eimg": "3", "EmailId": "selma@mycompany.com" },
        { "Name": "Russo Kay", "Eimg": "8", "EmailId": "russo@mycompany.com" },
        { "Name": "Camden Kate", "Eimg": "9", "EmailId": "camden@mycompany.com" },
        { "Name": "Mary Kate", "Eimg": "4", "EmailId": "marry@mycompany.com" },
        { "Name": "Ursula Ann", "Eimg": "2", "EmailId": "ursula@mycompany.com" },
        { "Name": "Margaret", "Eimg": "5", "EmailId": "margaret@mycompany.com" },
        { "Name": "Laura Grace", "Eimg": "6", "EmailId": "laura@mycompany.com" },
        { "Name": "Robert", "Eimg": "8", "EmailId": "robert@mycompany.com" },
        { "Name": "Albert", "Eimg": "9", "EmailId": "albert@mycompany.com" },
        { "Name": "Michale", "Eimg": "10", "EmailId": "michale@mycompany.com" },
        { "Name": "Andrew James", "Eimg": "7", "EmailId": "james@mycompany.com" },
        { "Name": "Rosalie", "Eimg": "4", "EmailId": "rosalie@mycompany.com" },
        { "Name": "Stella Ruth", "Eimg": "2", "EmailId": "stella@mycompany.com" },
        { "Name": "Richard Rose", "Eimg": "10", "EmailId": "richard@mycompany.com" },
        { "Name": "Gabrielle", "Eimg": "3", "EmailId": "gabrielle@mycompany.com" },
        { "Name": "Thomas", "Eimg": "7", "EmailId": "thomas@mycompany.com" },
        { "Name": "Charles Danny", "Eimg": "8", "EmailId": "charles@mycompany.com" },
        { "Name": "Daniel", "Eimg": "10", "EmailId": "daniel@mycompany.com" },
        { "Name": "Matthew", "Eimg": "7", "EmailId": "matthew@mycompany.com" },
        { "Name": "Donald Krish", "Eimg": "9", "EmailId": "donald@mycompany.com" },
        { "Name": "Yohana", "Eimg": "1", "EmailId": "yohana@mycompany.com" },
        { "Name": "Kevin Paul", "Eimg": "10", "EmailId": "kevin@mycompany.com" },
        { "Name": "Andrew Fuller", "Eimg": "3", "EmailId": "andrew@mycompany.com"}
    ];
    public settings: DocumentEditorSettingsModel = { mentionSettings : { dataSource: this.mentionData, fields: { text: 'Name' }}  };
    ngOnInit(): void {
    }
}
```
