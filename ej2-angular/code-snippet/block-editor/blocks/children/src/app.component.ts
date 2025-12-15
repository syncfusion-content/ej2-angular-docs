import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { BlockEditorModule } from "@syncfusion/ej2-angular-blockeditor";
import { BlockModel, ContentType} from "@syncfusion/ej2-blockeditor";

@Component({
    imports: [FormsModule, ReactiveFormsModule, BlockEditorModule],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html'
})


export class AppComponent {
    public blocksData: BlockModel[] = [
        {
            id: 'security-callout',
            blockType: 'Callout',
            properties: {
                children: [
                    { 
                        parentId: 'security-callout',
                        blockType: 'Heading',
                        properties: { level: 3},
                        content: [{
                            contentType: ContentType.Text,
                            content: 'Security Notice'
                        }]
                    },
                    { 
                        parentId: 'security-callout',
                        blockType: 'Paragraph',
                        content: [{
                            contentType: ContentType.Text,
                            content: 'Always validate user input before processing to prevent security vulnerabilities.'
                        }]
                    },
                    { 
                        parentId: 'security-callout',
                        blockType: 'Paragraph',
                        content: [{
                            contentType: ContentType.Text,
                            content: 'Use HTTPS for all data transmission'
                        }],
                        indent: 1
                    },
                    { 
                        parentId: 'security-callout',
                        blockType: 'Paragraph',
                        content: [{
                            contentType: ContentType.Text,
                            content: 'Implement proper authentication mechanisms'
                        }],
                        indent: 1
                    },
                    { 
                        parentId: 'security-callout',
                        blockType: 'Paragraph',
                        content: [{
                            contentType: ContentType.Text,
                            content: 'Regularly update dependencies and libraries'
                        }],
                        indent: 1
                    }
                ]
            }
        }
    ];

}