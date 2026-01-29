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
            blockType: 'Heading',
            properties: { level: 1},
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Main Document Title'
                }
            ]
        },
        {
            blockType: 'Heading',
            properties: { level: 2},
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Chapter Overview'
                }
            ]
        },
        {
            blockType: 'Heading',
            properties: { level: 3},
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Section Introduction'
                }
            ]
        },
        {
            blockType: 'Heading',
            properties: { level: 4},
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Sub-section Details'
                }
            ]
        }
    ];

}