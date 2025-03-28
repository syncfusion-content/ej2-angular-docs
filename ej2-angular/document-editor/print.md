---
layout: post
title: Print in Angular Document editor component | Syncfusion
description: Learn here all about Print in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Print 
documentation: ug
domainurl: ##DomainURL##
---

# Print in Angular Document editor component

To print the document, use the [`print`](https://ej2.syncfusion.com/angular/documentation/api/document-editor#print) method from document editor instance.

Refer to the following example for showing a document and print it.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/link-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/link-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/link-cs5" %}

Refer to the following example for creating a document and print it.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/link-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/link-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/link-cs6" %}

## Improve print quality

Document editor provides an option to improve the print quality using [`printDevicePixelRatio`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/documentEditorSettingsModel/#printdevicepixelratio) in Document editor settings. Document editor using canvas approach to render content. Then, canvas are converted to image and it process for print. Using printDevicePixelRatio API, you can increase the image quality based on your requirement.

The following example code illustrates how to improve the print quality in Document editor container.

```typescript
import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '@syncfusion/ej2-angular-documenteditor';
@Component({
      selector: 'app-root',
      // specifies the template string for the DocumentEditorContainer component
      template: `<ejs-documenteditorcontainer id="container" serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" height="600px" style="display:block" [documentEditorSettings]= "settings" [enableToolbar]=true> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService]
})
export class AppComponent implements OnInit {
  // Add required font families to list it in font drop down
    public settings={printDevicePixelRatio :2};
    ngOnInit(): void {
    }
}
```

>Note: By default, printDevicePixelRatio value is 1.

## Print using window object

You can print the document in document editor by passing the window instance. This is useful to implement print in third party frameworks such as electron, where the window instance will not be available. Refer to the following example.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  DocumentEditorComponent,
  PrintService,
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
  imports: [ButtonModule, DocumentEditorAllModule],

  standalone: true,
  selector: 'app-container',
  //specifies the template string for the Document Editor component
  template: `<div>
      <button ejs-button (click)="onPrint()" >Print</button>
      <ejs-documenteditor #document_editor height="330px" style="display:block" [enablePrint]=true (created)="onCreated()"></ejs-documenteditor>
      </div>`,
  encapsulation: ViewEncapsulation.None,
  providers: [PrintService],
})
export class AppComponent {
  @ViewChild('document_editor')
  public documentEditor?: DocumentEditorComponent;

  onCreated(): void {
    if ((this.documentEditor as DocumentEditorComponent).isDocumentLoaded) {
      let sfdt: string = `{
                "sections": [
                    {
                        "blocks": [
                            {
                                "inlines": [
                                    {
                                        "characterFormat": {
                                            "bold": true,
                                            "italic": true
                                        },
                                        "text": "Hello World"
                                    }
                                ]
                            }
                        ],
                        "headersFooters": {
                        }
                    }
                ]
            }`;
      //Open the default document.
      (this.documentEditor as DocumentEditorComponent).open(sfdt);
    }
  }

  public onPrint(): void {
    //Print the document content.
    (this.documentEditor as DocumentEditorComponent).print(window);
  }
}
```

## Page setup

Some of the print options cannot be configured using JavaScript. Refer to the following links to learn more about the browser page setup:

* [`Chrome`](https://support.google.com/chrome/answer/1069693?hl=en&visit_id=1-636335333734668335-3165046395&rd=1/)
* [`Firefox`](https://support.mozilla.org/en-US/kb/how-print-web-pages-firefox/)

However, you can customize margins, paper, and layout options by modifying the section format properties using page setup dialog

```typescript
this.documentEditor.showPageSetupDialog();
```

By customizing margins, papers, and layouts, the layout of the document will be changed in document editor. To modify these options during print operation, serialize the document as SFDT using the [`serialize`](https://ej2.syncfusion.com/angular/documentation/api/document-editor#serialize) method in document editor instance and open the SFDT data in another instance of document editor in separate window.

The following example shows how to customize layout options only for printing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/link-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/link-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/link-cs7" %}
