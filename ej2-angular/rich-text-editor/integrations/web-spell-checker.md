---
layout: post
title: Spell Checker in Angular Rich Text Editor | Syncfusion
description: Learn here all about Spell Checker in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Spell and Grammar Check 
documentation: ug
domainurl: ##DomainURL##
---

# Integrate WProofreader into the Angular Rich Text Editor

WProofreader enables real-time spelling, grammar, and style checks inside the Rich Text Editor editable area. The SDK attaches to the editor content element and provides suggestions without changing the editor workflow.

## Prerequisites

Before proceeding, complete the base Rich Text Editor setup described in the Getting Started guide. The guide covers Angular CLI setup, package installation, CSS imports, module injection, and basic editor markup: [Getting Started with Angular Rich Text Editor](getting-started.md).

## Key features

- Real-time spelling and grammar suggestions.
- Multilingual support and custom dictionaries.
- Cloud and on-premise deployment options.

## Set up the WProofreader sdk

Install the WProofreader SDK package using the following command:

```bash
npm install @webspellchecker/wproofreader-sdk-js
```

> Note: Register for a [WProofreader](https://wproofreader.com/sdk) cloud service key and keep the `serviceId` ready. For self-hosted deployment, prepare the service endpoint settings.

## Configure WProofreader for the Rich Text Editor

After installing the package, you can integrate WProofreader with the Angular Rich Text Editor by following these steps:

1. Import the `WProofreader` module into your Angular component.
2. Configure the `container` property of WProofreader to the editable element of the Rich Text Editor component.
3. Use the `ViewChild` decorator to access the Angular Rich Text Editor instance.
4. Set the `lang` property to specify the language of the text to be checked.
5. Configure the activation key in the `serviceId` property.

### Example: integrate with Syncfusion Rich Text Editor (`app.ts`)

```ts
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import WProofreaderSDK from '@webspellchecker/wproofreader-sdk-js';

@Component({
    selector: 'app-root',
    template: `
        <ejs-richtexteditor #spellEditor id="editor" [value]="value"></ejs-richtexteditor>
    `
})
export class AppComponent implements AfterViewInit, OnDestroy {
    @ViewChild('spellEditor') 
    public spellEditor!: RichTextEditorComponent;

    public value: string = "<p>Enter you\'re text here with real spelling and grammer mistakes to see how WProofreader work. Alot of potential errors will be underlined; hover on the marked wods for instant correction suggesstions.</p>";

    ngAfterViewInit(): void {
        WProofreader.init({
            container: this.spellEditor.inputElement,
            lang: 'en_US',
             serviceId: 'YOUR_SERVICE_ID',
        });
    }
    ngOnDestroy(): void {
        if (this.wpcInstance && typeof this.wpcInstance.destroy === 'function') {
            this.wpcInstance.destroy();
            return;
        }
   }
}
```

## Additional resources

- GitHub Repository: [Angular Rich Text Editor with Web Spell Checker](https://github.com/SyncfusionExamples/richtexteditor-integrations/tree/master/angular/web-spell-checker)
- WProofreader SDK: https://www.npmjs.com/package/@webspellchecker/wproofreader-sdk-js
