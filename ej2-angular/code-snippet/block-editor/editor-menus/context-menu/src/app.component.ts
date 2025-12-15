import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { BlockEditorModule } from "@syncfusion/ej2-angular-blockeditor";
import { BlockModel, ContentType, ContextMenuItemModel } from "@syncfusion/ej2-blockeditor";
import { ContextMenuClosingEventArgs, ContextMenuOpeningEventArgs, ContextMenuItemSelectEventArgs } from '@syncfusion/ej2-blockeditor';


@Component({
    imports: [FormsModule, ReactiveFormsModule, BlockEditorModule],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html'
})


export class AppComponent {
    public blocksData: BlockModel[] = [
        {
            blockType: 'Heading',
            properties: { level: 1},
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Context Menu Demo'
                }
            ]
        },
        {
            blockType: 'Quote',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Right-click anywhere in this editor to open the custom context menu. Try different areas and blocks.'
                }
            ]
        }
    ];

    customContextMenuItems: ContextMenuItemModel[] = [
        {
            id: 'format-menu',
            text: 'Format',
            iconCss: 'e-icons e-format-painter',
            items: [
                {
                    id: 'bold-item',
                    text: 'Bold',
                    iconCss: 'e-icons e-bold',
                },
                {
                    id: 'italic-item',
                    text: 'Italic',
                    iconCss: 'e-icons e-italic',
                },
                {
                    id: 'underline-item',
                    text: 'Underline',
                    iconCss: 'e-icons e-underline',
                }
            ]
        },
        { separator: true },
        {
            id: 'statistics-item',
            text: 'Block Statistics',
            iconCss: 'e-icons e-chart'
        },
        {
            id: 'export-item',
            text: 'Export Options',
            iconCss: 'e-icons e-export',
            items: [
                {
                    id: 'export-json',
                    text: 'Export as JSON',
                    iconCss: 'e-icons e-file-json'
                },
                {
                    id: 'export-html',
                    text: 'Export as HTML',
                    iconCss: 'e-icons e-file-html'
                },
                {
                    id: 'export-pdf',
                    text: 'Export as PDF',
                    iconCss: 'e-icons e-file-pdf'
                }
            ]
        }
    ];

    public contextMenuSettings =  {
        enable: true,
        showItemOnClick: true,
        items: this.customContextMenuItems,
        opening: (args: ContextMenuOpeningEventArgs) => {
            // Your actions here
        },
        closing: (args: ContextMenuClosingEventArgs) => {
            // Your actions here
        },
        itemSelect: (args: ContextMenuItemSelectEventArgs) => {
            // Handle custom actions here
        }
    }

}