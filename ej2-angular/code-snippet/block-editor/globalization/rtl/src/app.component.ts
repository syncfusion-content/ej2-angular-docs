import { Component } from '@angular/core';
import { BlockEditorModule } from "@syncfusion/ej2-angular-blockeditor";
import { BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

@Component({
    imports: [BlockEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render BlockEditor component. -->
    <div class="container" style="margin: 50px;">
        <ejs-blockeditor id="blockeditor" [enableRtl]='true' [blocks]="blocksData" />
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
        }
    ];
    
}
