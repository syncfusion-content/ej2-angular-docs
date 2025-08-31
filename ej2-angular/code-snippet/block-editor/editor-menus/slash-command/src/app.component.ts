import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { BlockEditorModule } from "@syncfusion/ej2-angular-blockeditor";
import { BlockModel, ContentType, BlockType} from "@syncfusion/ej2-blockeditor";
import { CommandItemModel, CommandMenuOpenEventArgs, CommandMenuCloseEventArgs, CommandQueryFilteringEventArgs, CommandItemClickedEventArgs } from '@syncfusion/ej2-blockeditor';

@Component({
    imports: [FormsModule, ReactiveFormsModule, BlockEditorModule],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html'
})


export class AppComponent {
    public blocksData: BlockModel[] = [
        {
            id: 'demo-block',
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Type "/" anywhere in this editor to open the custom slash command menu.'
                }
            ]
        }
    ];
    // Slash Command Menu Configuration
    public commandMenu = {
        popupWidth: '350px',
        popupHeight: '400px',
        enableTooltip: false,
        // Custom command items
        commands: [
            {
                id: 'line-cmd',
                type: BlockType.Divider,
                groupHeader: 'Utility',
                label: 'Insert a Line',
                iconCss: 'e-icons e-divider',
            },
            {
                id: 'timestamp-cmd',
                groupHeader: 'Actions',
                label: 'Insert Timestamp',
                iconCss: 'e-icons e-schedule',
            }
        ],
        itemClicked: (args: CommandItemClickedEventArgs) => {
            // Handle custom command actions
        },
        open: (args: CommandMenuOpenEventArgs) => {
            // Your actions here
        },
        close: (args: CommandMenuCloseEventArgs) => {
            // Your actions here
        },
        queryFiltering: (args: CommandQueryFilteringEventArgs) => {
            // Your actions here
        }
    }

}