import { Component } from '@angular/core';
import { BlockEditorModule } from "@syncfusion/ej2-angular-blockeditor";
import { BlockModel, ContentType} from "@syncfusion/ej2-blockeditor";

@Component({
    imports: [BlockEditorModule],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html'
})


export class AppComponent {
    public blocksData: BlockModel[] = [
        {
            blockType: 'Callout',
            properties:{
            children: [{ 
                blockType: 'Paragraph',
                content: [{
                    contentType: ContentType.Text,
                    content: 'Important information: This is a callout block used to highlight important content.'
                }]
            }]
        }
        }
    ];

}