import { Component, ViewChild } from '@angular/core';
import { BlockEditorModule } from "@syncfusion/ej2-angular-blockeditor";
import { BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

@Component({
    imports: [BlockEditorModule],
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
                    content: 'The Block Editor supports various content types. When the readOnly property is set to true, it prevents users from editing the content, making the editor display-only.'
                }
            ]
        }
    ];
}