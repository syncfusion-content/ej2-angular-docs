import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { BlockEditorModule } from "@syncfusion/ej2-angular-blockeditor";
import { BlockModel, ContentType, BlockType} from "@syncfusion/ej2-blockeditor";
import { CommandFilteringEventArgs, CommandItemSelectEventArgs, CommandMenuSettingsModel } from '@syncfusion/ej2-blockeditor';

@Component({
    imports: [FormsModule, ReactiveFormsModule, BlockEditorModule],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html'
})


export class AppComponent {
    public blocksData: BlockModel[] = [
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Type "/" anywhere in this editor to open the custom slash command menu.'
                }
            ]
        }
    ];
    // Slash Command Menu Configuration
    public commandMenuSettings: CommandMenuSettingsModel = {
        popupWidth: '350px',
        popupHeight: '400px',
        // Custom command items
        commands: [
            {
                id: 'line-cmd',
                type: BlockType.Divider,
                groupBy: 'Utility',
                label: 'Insert a Line',
                iconCss: 'e-icons e-divider',
            },
            {
                id: 'timestamp-cmd',
                groupBy: 'Actions',
                label: 'Insert Timestamp',
                iconCss: 'e-icons e-schedule',
            }
        ],
        itemSelect: (args: CommandItemSelectEventArgs) => {
            // Handle custom command actions
        },
        filtering: (args: CommandFilteringEventArgs) => {
            // Your actions here
        }
    }

}