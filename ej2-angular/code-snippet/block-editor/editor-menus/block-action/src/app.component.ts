import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { BlockEditorModule } from "@syncfusion/ej2-angular-blockeditor";
import { BlockModel, ContentType} from "@syncfusion/ej2-blockeditor";
import { BlockActionMenuOpenEventArgs, BlockActionMenuCloseEventArgs, BlockActionItemClickEventArgs } from '@syncfusion/ej2-blockeditor';

@Component({
    imports: [FormsModule, ReactiveFormsModule, BlockEditorModule],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html'
})


export class AppComponent {
    public blocksData: BlockModel[] = [
        {
            id: 'title-block',
            type: 'Heading',
            props: { level: 1},
            content: [
                {
                    type: ContentType.Text,
                    content: 'Block Action Menu Demo'
                }
            ]
        },
        {
            id: 'intro-block',
            type: 'Quote',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Hover over any block and click the drag handle icon to see custom actions.'
                }
            ]
        }
    ];
    // Block Action Menu Configuration
    public blockActionsMenu = {
        enable: true,
        popupWidth: '180px',
        popupHeight: '110px',
        enableTooltip: false,
        // Custom action items
        items: [
            {
                id: 'highlight-action',
                label: 'Highlight Block',
                iconCss: 'e-icons e-highlight',
                tooltip: 'Highlight this block'
            },
            {
                id: 'copy-content-action',
                label: 'Copy Content',
                iconCss: 'e-icons e-copy',
                tooltip: 'Copy block content to clipboard'
            },
            {
                id: 'block-info-action',
                label: 'Block Info',
                tooltip: 'Show block information'
            }
        ],
        open: (args: BlockActionMenuOpenEventArgs) => {
            // Your actions here
        },
        close: (args: BlockActionMenuCloseEventArgs) => {
            // Your actions here
        },
        itemClick: (args: BlockActionItemClickEventArgs) => {
            // Handle custom block actions
        }
    }

}