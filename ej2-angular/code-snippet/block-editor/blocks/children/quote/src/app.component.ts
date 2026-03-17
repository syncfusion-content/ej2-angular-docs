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
            id: 'security-quote',
            blockType: 'Quote',
            properties: {
                children: [
                    { 
                        parentId: 'security-quote',
                        blockType: 'Heading',
                        properties: { level: 3},
                        content: [{
                            contentType: ContentType.Text,
                            content: 'Security Notice'
                        }]
                    },
                    { 
                        parentId: 'security-quote',
                        blockType: 'Paragraph',
                        content: [{
                            contentType: ContentType.Text,
                            content: 'Always validate user input before processing to prevent security vulnerabilities.'
                        }]
                    },
                    { 
                        parentId: 'security-quote',
                        blockType: 'Paragraph',
                        content: [{
                            contentType: ContentType.Text,
                            content: 'Use HTTPS for all data transmission'
                        }],
                    },
                    { 
                        parentId: 'security-quote',
                        blockType: 'Paragraph',
                        content: [{
                            contentType: ContentType.Text,
                            content: 'Implement proper authentication mechanisms'
                        }],
                    },
                    { 
                        parentId: 'security-quote',
                        blockType: 'Paragraph',
                        content: [{
                            contentType: ContentType.Text,
                            content: 'Regularly update dependencies and libraries'
                        }],
                    }
                ]
            }
        }
    ];
}