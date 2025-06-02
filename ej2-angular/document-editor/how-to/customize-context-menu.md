---
layout: post
title: Customize Context Menu in Angular Document Editor | Syncfusion
description: Learn here all about Customize context menu in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize context menu 
documentation: ug
domainurl: ##DomainURL##
---

# Customize context menu in Angular Document editor component

## How to customize context menu in Document Editor

Document Editor allows you to add custom option in context menu. It can be achieved by using the [`addCustomMenu()`](../../api/document-editor/contextMenu/#addcustommenu) method and custom action is defined using the [`customContextMenuSelect`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/customContentMenuEventArgs/)

### Add Custom Option

The following code shows how to add custom option in context menu.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
} from '@syncfusion/ej2-angular-documenteditor';
import { ClickEventArgs, MenuItemModel } from '@syncfusion/ej2-navigations';
import {
  CustomToolbarItemModel,
  DocumentEditorContainerModule,
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [DocumentEditorContainerModule],
  providers: [ToolbarService],
  template: `
    <ejs-documenteditorcontainer #documenteditor_default 
      serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" 
      height="600px" 
      style="display:block" 
      [documentEditorSettings]= "fontFamilies" [enableToolbar]=true (created)="onCreate()">
    </ejs-documenteditorcontainer>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;
  public fontFamilies = {
    fontFamilies: ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Windings'],
  };
  ngOnInit(): void {}
  onCreate() {
    // creating Custom Options
    let menuItems: MenuItemModel[] = [
      {
        text: 'Search In Google',
        id: 'search_in_google',
        iconCss: 'e-icons e-de-ctnr-find',
      },
    ];
    // adding Custom Options
    this.container?.documentEditor.contextMenu.addCustomMenu(menuItems, false);
    // custom Options Select Event
    (
      this.container as DocumentEditorContainerComponent
    ).documentEditor.customContextMenuSelect = (args: any): void => {
      // custom Options Functionality
      let id = this.container?.documentEditor.element.id;
      switch (args.id) {
        case id + 'search_in_google':
          let searchContent=
            this.container?.documentEditor.selection.text;
          if (
            !this.container?.documentEditor.selection.isEmpty &&
            /\S/.test(searchContent as string)
          ) {
            window.open('http://google.com/search?q=' + searchContent);
          }
          break;
      }
    };
  }
}
```

> The Web API hosted link `https://services.syncfusion.com/angular/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

### Customize custom option in context menu

Document Editor allows you to customize the added custom option and also to hide/show default context menu.

#### Hide default context menu items

Using [`addCustomMenu()`](../../api/document-editor/contextMenu/#addcustommenu) method, you can hide the default context menu. By setting second parameter as true.

The following code shows how to hide default context menu and add custom option in context menu.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
} from '@syncfusion/ej2-angular-documenteditor';
import { ClickEventArgs, MenuItemModel } from '@syncfusion/ej2-navigations';
import {
  CustomToolbarItemModel,
  DocumentEditorContainerModule,
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [DocumentEditorContainerModule],
  providers: [ToolbarService],
  template: `
    <ejs-documenteditorcontainer #documenteditor_default 
      serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" 
      height="600px" 
      style="display:block" 
      [documentEditorSettings]= "fontFamilies" [enableToolbar]=true (created)="onCreate()">
    </ejs-documenteditorcontainer>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;
  public fontFamilies = {
    fontFamilies: ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Windings'],
  };
  ngOnInit(): void {}
  onCreate() {
    // creating Custom Options
    let menuItems: MenuItemModel[] = [
      {
          text: 'Search In Google',
          id: 'search_in_google',
          iconCss: 'e-icons e-de-ctnr-find'
      }];
  // adding Custom Options
  this.container?.documentEditor.contextMenu.addCustomMenu(menuItems, true);
  }
}
```

> The Web API hosted link `https://services.syncfusion.com/angular/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

#### Customize added context menu items

The following code shows how to hide/show added custom option in context menu using the [`customContextMenuBeforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/beforeOpenCloseCustomContentMenuEventArgs/).

```typescript
@Component({
      selector: 'app-root',
      // specifies the template string for the DocumentEditorContainer component
      template: `<ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" height="600px" style="display:block" [documentEditorSettings]= "fontFamilies" [enableToolbar]=true (created)="onCreate()"> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService]
})
export class AppComponent implements OnInit {
    @ViewChild('documenteditor_default')
    public container: DocumentEditorContainerComponent;
    public fontFamilies={fontFamilies :['Algerian', 'Arial', 'Calibri', 'Cambria', 'Windings']};
    ngOnInit(): void {
    }
    onCreate() {
     // creating Custom Options
     let menuItems: MenuItemModel[] = [
        {
            text: 'Search In Google',
            id: 'search_in_google',
            iconCss: 'e-icons e-de-ctnr-find'
        }];
    // adding Custom Options
    this.container.documentEditor.contextMenu.addCustomMenu(menuItems, false);
    // custom Options Select Event
    this.container.documentEditor.customContextMenuSelect = (args: any): void => {
        // custom Options Functionality
        let id: string = this.container.documentEditor.element.id;
        switch (args.id) {
            case id + 'search_in_google':
                let searchContent: string = this.container.documentEditor.selection.text;
                if (!this.container.documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
                    window.open('http://google.com/search?q=' + searchContent);
                }
                break;
        }
    };
    //  custom options hide/show functionality
    this.container.documentEditor.customContextMenuBeforeOpen = (args: any): void => {
        let search: any = document.getElementById(args.ids[0]);
        search.style.display = 'none';
        let searchContent: string = this.container.documentEditor.selection.text;
        if (!this.container.documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
            search.style.display = 'block';
        }
    };
    }
}
```

> The Web API hosted link `https://services.syncfusion.com/angular/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

The following is the output of custom context menu with customization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/customize-context-menu-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/customize-context-menu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/customize-context-menu-cs1" %}

> The Web API hosted link `https://services.syncfusion.com/angular/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

#### Customize Context Menu with sub-menu items

Document Editor allows you to customize the Context Menu with sub-menu items. It can be achieved by using the [`addCustomMenu()`](../../api/document-editor/contextMenu/#addcustommenu) method.

The following code shows how to add a sub items in the custom option in context menu in Document Editor Container.
 
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';

import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
  CustomContentMenuEventArgs,
} from '@syncfusion/ej2-angular-documenteditor';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
@Component({
  imports: [DocumentEditorContainerModule],

  standalone: true,
  selector: 'app-container',
  // specifies the template string for the DocumentEditorContainer component
  template: `<ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" height="600px" style="display:block"  [enableToolbar]=true (created)="onCreate()"> </ejs-documenteditorcontainer>`,
  providers: [ToolbarService],
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;
  ngOnInit(): void {}
  onCreate() {
    debugger;
    // creating Custom Options
    let menuItems = [
      {
        text: 'Form field',
        id: 'form field',
        iconCss: 'e-de-formfield e-icons',
        items: [
          {
            text: 'Text form',
            id: 'Text form',
            iconCss: 'e-icons e-de-textform',
          },
          {
            text: 'Check box',
            id: 'Check box',
            iconCss: 'e-icons e-de-checkbox-form',
          },
          {
            text: 'Drop down',
            id: 'Drop down',
            iconCss: 'e-icons e-de-dropdownform',
          },
        ],
      },
    ];

    (
      this.container as DocumentEditorContainerComponent
    ).documentEditor.contextMenu.addCustomMenu(menuItems, false, true);
  }
}
```

> The Web API hosted link `https://services.syncfusion.com/angular/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.
