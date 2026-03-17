import { Component } from '@angular/core';
import { BlockEditorModule } from "@syncfusion/ej2-angular-blockeditor";
import { BlockModel, ContentType, CommandName, ToolbarItemClickEventArgs } from "@syncfusion/ej2-blockeditor";

@Component({
    imports: [BlockEditorModule],
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
                    content: 'Inline Toolbar Demo'
                }
            ]
        },
        {
            blockType: 'Quote',
            properties:{
                children:[{
                    blockType: 'Paragraph',
                    content: [
                        {
                            contentType: ContentType.Text,
                            content: 'Select any text in the editor to open the Inline Toolbar'
                        }
                    ]
                }]
            }
        }
    ];
    customToolbarItems = [ 'Color', 'Backgroundcolor' ];
    public inlineToolbarSettings = {
        popupWidth: 'auto',
        enable: true,
        items: this.customToolbarItems,
        itemClick: (args: ToolbarItemClickEventArgs) => {
            // Handle custom actions here
        }
    }

    public fontColorSettings = {
        mode: 'Picker',
        modeSwitcher: true
    }

    public backgroundColorSettings = {
        // Handle props here
    }
}