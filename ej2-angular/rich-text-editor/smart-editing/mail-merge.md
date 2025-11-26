---
layout: post
title: Mail Merge in Angular Rich Text Editor | Syncfusion
description: Learn how to use and customize the Mail Merge in the Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Mail Merge
documentation: ug
domainurl: ##DomainURL##
---

# Mail merge in Angular Rich Text Editor component

The Rich Text Editor can be customized to implement **Mail Merge** functionality by inserting placeholders into the editor using custom toolbar items. These placeholders are later replaced with actual data to generate personalized content such as letters, invoices, and reports.

This feature simplifies the creation of dynamic documents by allowing users to insert merge fields that are automatically populated with real data during content generation.

## Adding custom toolbar items for inserting merge fields

To enable mail merge functionality, the Rich Text Editor toolbar is extended with two custom buttons: `Insert Field` and `Merge Data`. These buttons are added using the `template` property in [toolbarSettings.items](https://helpej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettingsModel#items), which points to custom HTML elements (#insertField and #merge_data).

- **Insert Field:** Opens a dropdown list of merge fields for inserting placeholders like `{{FirstName}}` into the editor.
- **Merge Data:** Replaces all placeholders in the editor with actual values from a predefined data source.

```typescript

@Component({
  imports: [
    RichTextEditorAllModule
  ],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-richtexteditor id="mailMergeEditor" #mailMergeEditor [toolbarSettings]="tools" ></ejs-richtexteditor>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})

export class AppComponent {

    public tools: object = {
            items: [
                'Bold', 'Italic', 'Underline', '|',
                'Formats', 'Alignments', 'OrderedList', 'UnorderedList', '|',
                'CreateLink', 'Image', 'CreateTable', '|',
                { tooltipText: 'Merge Data', template: '#merge_data', command: 'Custom' },
                { tooltipText: 'Insert Field', template: '#insertField', command: 'Custom' },
                'SourceCode', '|', 'Undo', 'Redo'
            ],
    };
}

```

## Using DropDownButton for selecting placeholders

The **DropDownButton** component displays a list of merge fields such as First Name, Last Name, and Company Name. When a user selects an item, the corresponding placeholder (e.g., {{FirstName}}) is inserted at the current cursor position using the `insertHTML` command.

```typescript

@Component({
  imports: [
    RichTextEditorAllModule
  ],
  standalone: true,
  selector: 'app-root',
  template: `<button class="e-rte-dropdown-btn e-control e-dropdown-btn e-lib e-btn e-rte-dropdown-popup e-rte-dropdown-items e-formats-tbar-btn e-rte-elements e-rte-dropdown-menu" id="insertField" ejs-dropdownbutton [items]="items" [content]="dropdownContent" (select)="onItemSelect($event)"></button>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})

export class AppComponent {

    public dropdownContent : string = `<span style="display:inline-flex;"><span class="e-rte-dropdown-btn-text">Insert Field</span></span>`;
   
    onItemSelect(args: MenuEventArgs): void {
        if (args.item.text != null) {
            const value = this.textToValueMap[args.item.text];
            const trimmedValue = value.trim();
            this.mailMergeEditor.formatter.editorManager.nodeSelection.restore();
            this.mailMergeEditor.executeCommand(
                'insertHTML',
                `<span contenteditable="false" class="e-mention-chip"><span>{{${trimmedValue}}}</span></span>&nbsp;`,
                { undo: true }
            );
        }
    }
}

```
## Populating merge fields using Mention

The **Mention** component provides an alternative way to insert placeholders by typing the <code>&#123;&#123;</code> character inside the editor. A popup list of merge fields appears, allowing quick selection without using the toolbar.

```typescript

@Component({
  imports: [
    RichTextEditorAllModule, MentionModule
  ],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-mention #mentionObj [dataSource]="mergeData" target="#mailMergeEditor" [mentionChar]="mentionChar"
        [fields]='fieldsData' [suggestionCount]="8" [allowSpaces]="true" popupWidth='250px' popupHeight='200px'>
        <ng-template #displayTemplate let-data>
            <span> {{ "{{"+ data.value + "}}" }} </span>
        </ng-template>
    </ejs-mention>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})

export class AppComponent {
    public fieldsData: { [key: string]: string } = { text: 'text' };
    public mentionChar: string = `{{`;
    public mergeData: any = [
        { text: 'First Name', value: 'FirstName' },
        { text: 'Last Name', value: 'LastName' },
        { text: 'Support Email', value: 'SupportEmail' },
        { text: 'Company Name', value: 'CompanyName' },
        { text: 'Promo Code', value: 'PromoCode' },
        { text: 'Support Phone Number', value: 'SupportPhoneNumber' },
        { text: 'Customer ID', value: 'CustomerID' },
        { text: 'Expiration Date', value: 'ExpirationDate' },
        { text: 'Subscription Plan', value: 'SubscriptionPlan' },
    ];

}

```

## Replacing placeholders with actual data dynamically

When the **Merge Data** button is clicked, the editor content is processed to replace all placeholders with actual values from the `placeholderData` object. This is done using a regular expression in the `replacePlaceholders()` function.

```typescript

@Component({
  imports: [
    RichTextEditorAllModule, MentionModule
  ],
  standalone: true,
  selector: 'app-root',
  template: `<button class="e-control e-lib e-btn e-formats-tbar-btn e-rte-elements e-tbar-btn" tabindex="-1"
        id="merge_data" style="width:100%" (click)="onClickHandler()">
        <span style="display:inline-flex"><span class="e-tbar-btn-text">Merge Data</span></span>
    </button>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})

export class AppComponent {
    onClickHandler(): void {
        if (this.mailMergeEditor) {
            let editorContent = this.mailMergeEditor.value;
            let mergedContent = this.replacePlaceholders(editorContent, this.placeholderData);
            if ((this.mailMergeEditor as any).formatter.getUndoRedoStack().length === 0) {
                (this.mailMergeEditor as any).formatter.saveData();
            }
            this.mailMergeEditor.value = mergedContent;
            this.mailMergeEditor.dataBind();
            (this.mailMergeEditor as any).formatter.saveData();
        } else {
            console.log('MailMergeEditor is not initialized.');
        }
    }

    replacePlaceholders(template: string, data: { [key: string]: string }): string {
        return template.replace(/{{\s*(\w+)\s*}}/g, (match, key) => {
            const value = data[key.trim()];
            const result = value !== undefined ? value : match;
            return result;
        });
    }

}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/mail-merge/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/mail-merge/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/mail-merge-cs1" %}