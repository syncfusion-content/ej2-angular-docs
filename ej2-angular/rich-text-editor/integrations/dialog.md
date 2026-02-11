---
layout: post
title: Dialog in Angular Rich text editor component | Syncfusion
description: Learn here all about dialog integration in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dialog
documentation: ug
domainurl: ##DomainURL##
---

# Integrate Dialog into Angular Rich Text Editor Component

When rendering the Rich Text Editor inside a Dialog component, the dialog container and its wrapper elements are initially styled with `display: none`. This styling prevents the editor’s toolbar from calculating the proper offset width. As a result, the toolbar may render incorrectly, appearing above the edit area container.

To resolve this issue, we can utilize the [refreshUI](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#refreshui) method of the Rich Text Editor in conjunction with the [open](https://ej2.syncfusion.com/angular/documentation/api/dialog/index-default#open) event. This approach ensures that the Rich Text Editor’s UI is properly refreshed and rendered once the Dialog is visible.

## Prerequisites

Before proceeding, complete the base Rich Text Editor setup described in the Getting Started guide. The guide covers Angular CLI setup, package installation, CSS imports, module injection, and basic editor markup: [Getting Started with Angular Rich Text Editor](getting-started.md).

## Key features

- Host a Rich Text Editor or a custom source editor inside a modal Dialog.
- Ensure correct toolbar layout by refreshing the editor UI after Dialog open.
- Reuse editor instances inside the Dialog to retain state and performance.
- Configure Dialog size and behavior to suit editing scenarios.

## Setup or Installation

Install the required packages using the following command:

```bash
npm install @syncfusion/ej2-angular-popups @syncfusion/ej2-angular-buttons
```

## Configure Dialog for the rich text editor

### Step 1: import packages and providers
- Import Dialog and Button modules along with the Rich Text Editor module and provide editor services in the component.

```typescript
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { RichTextEditorModule, RichTextEditorComponent, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';

providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
```

### Step 2: Configure button and dialog
- Add a button to open the Dialog and place the Rich Text Editor inside the Dialog content. Bind the Dialog open event to refresh the editor UI when visible.

```html
<button ejs-button (click)="openDialog()">Open Dialog</button>
<ejs-dialog #dialog [width]="'600px'" [height]="'500px'" [visible]="false" (open)="onDialogOpen()">
  <ng-template #content>
    <ejs-richtexteditor #editor [toolbarSettings]="tools"></ejs-richtexteditor>
  </ng-template>
</ejs-dialog>
```

```typescript
public openDialog(): void {
  this.dialogObj.show();
}
```

### Step 3: how to refresh the UI in Rich Text Editor
- call the refreshUI method of Rich Text Editor inside the dialog close event.

```typescript
public onDialogClose(): void {
  this.editorObj.refreshUI();
}
```

## Example for dialog integration

Below is the example integration of dialog with the Angular Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/rich-text-editor/Integrations/dialog/src/app/app.ts %}
{% endhighlight %}

{% highlight css tabtitle="app.css" %}
{% include code-snippet/rich-text-editor/Integrations/dialog/src/app/app.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/Integrations/dialog" %}

## Additional resources

- GitHub Repository: [Angular Rich Text Editor integrations samples](https://github.com/SyncfusionExamples/angular-richtexteditor-dialog)
- Rich Text Editor — API reference and guides: https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default  
- Dialog — API reference and events: https://ej2.syncfusion.com/angular/documentation/api/dialog/index-default  
- Getting started with Angular Rich Text Editor: https://ej2.syncfusion.com/angular/documentation/rich-text-editor/getting-started  
- Samples and demos for hands-on examples: https://ej2.syncfusion.com/angular/demos/#/material/rich-text-editor/overview
