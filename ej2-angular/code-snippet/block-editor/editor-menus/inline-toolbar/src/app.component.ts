import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { BlockEditorModule } from "@syncfusion/ej2-angular-blockeditor";
import { BlockModel, ContentType, BuiltInToolbar, ToolbarCloseEventArgs, ToolbarItemClickedEventArgs, ToolbarItemModel, ToolbarOpenEventArgs } from "@syncfusion/ej2-blockeditor";

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
            type: 'Heading1',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Inline Toolbar Demo'
                }
            ]
        },
        {
            id: 'intro-block',
            type: 'Quote',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Select any text in the editor to open the Inline Toolbar'
                }
            ]
        }
    ];

    customToolbarItems: ToolbarItemModel[] = [
        { id: 'clear', iconCss: 'e-icons e-format-painter', item: BuiltInToolbar.Custom, tooltip: 'Format Painter' },
        { id: 'highlight', iconCss: 'e-icons e-highlight', item: BuiltInToolbar.Custom, tooltip: 'Highlight' },
    ];

    public inlineToolbar = {
        width: '80px',
        enable: true,
        items: this.customToolbarItems,
        enableTooltip: true,
        open: (args: ToolbarOpenEventArgs) => {
            // Your actions here
        },
        close: (args: ToolbarCloseEventArgs) => {
            // Your actions here
        },
        itemClicked: (args: ToolbarItemClickedEventArgs) => {
            // Handle custom actions here
        }
    }

}