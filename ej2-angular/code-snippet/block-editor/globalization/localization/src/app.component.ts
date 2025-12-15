import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { L10n } from '@syncfusion/ej2-base';
import { BlockEditorModule } from "@syncfusion/ej2-angular-blockeditor";
import { BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

@Component({
    imports: [FormsModule, ReactiveFormsModule, BlockEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render BlockEditor component. -->
    <div class="container" style="margin: 50px;">
        <ejs-blockeditor id="blockeditor" [locale]='locale' [blocks]="blocksData" />
    </div>`
})


export class AppComponent {
    public blocksData: BlockModel[] = [
        {
            blockType: 'Heading',
            properties: { level: 1},
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Sample Heading'
                }
            ]
        },
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'This is a sample paragraph block.'
                }
            ]
        },
        {
            blockType: 'Paragraph'
        }
    ];
    public locale?: string;
    public ngOnInit(): void {
        L10n.load({
            'de': {
                "blockeditor": {
	                "paragraph": "Schreiben Sie etwas oder ‚/‘ für Befehle.",
                    "heading1": "Überschrift 1",
                    "heading2": "Überschrift 2",
                    "heading3": "Überschrift 3",
                    "heading4": "Überschrift 4",
                    "collapsibleParagraph": "Umschaltbarer Absatz",
                    "collapsibleHeading1": "Umschaltbare Überschrift 1",
                    "collapsibleHeading2": "Umschaltbare Überschrift 2",
                    "collapsibleHeading3": "Umschaltbare Überschrift 3",
                    "collapsibleHeading4": "Umschaltbare Überschrift 4",
                    "bulletList": "Element hinzufügen",
                    "numberedList": "Element hinzufügen",
                    "checklist": "Zu erledigen",
                    "callout": "Schreiben Sie einen Hinweis",
                    "addIconTooltip": "Klicken Sie, um unten einzufügen",
                    "dragIconTooltipActionMenu": "Klicken Sie, um zu öffnen",
                    "dragIconTooltip": "(Halten zum Ziehen)",
                    "insertLink": "Link einfügen",
                    "linkText": "Text",
                    "linkTextPlaceholder": "Linktext",
                    "linkUrl": "URL",
                    "linkUrlPlaceholder": "https://example.com",
                    "linkTitle": "Titel",
                    "linkTitlePlaceholder": "Linktitel",
                    "linkOpenInNewWindow": "In neuem Fenster öffnen",
                    "linkInsert": "Einfügen",
                    "linkRemove": "Entfernen",
                    "linkCancel": "Abbrechen",
                    "codeCopyTooltip": "Code kopieren"
                }

            }
        });
        this.locale =  'de';
    };
}
