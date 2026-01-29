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
            blockType: 'Quote',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
                }
            ]
        }
    ];
}