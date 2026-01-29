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
            properties: { level: 2},
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Content Styling Options'
                }
            ]
        },
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Bold text: ',
                    properties: {
                    styles: { 
                        bold: true,
                        color: '#1976d2'
                    }
                }
                },
                {
                    contentType: ContentType.Text,
                    content: 'This text is bold.',
                    properties:{
                    styles: { 
                        bold: true 
                    }
                }
                }
            ]
        },
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Italic text: ',
                    properties:{
                    styles: { 
                        bold: true,
                        color: '#1976d2'
                    }
                }
                },
                {
                    contentType: ContentType.Text,
                    content: 'This text is italicized.',
                    properties:{
                    styles: { 
                        italic: true 
                    }
                }
                }
            ]
        },
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Text with color: ',
                    properties:{
                    styles: { 
                        bold: true,
                        color: '#1976d2'
                    }
                }
                },
                {
                    contentType: ContentType.Text,
                    content: 'This text has custom color.',
                    properties:{
                    styles: { 
                        color: '#e91e63' 
                    }
                }
                }
            ]
        },
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Text with background: ',
                    properties:{
                    styles: { 
                        bold: true,
                        color: '#1976d2'
                    }
                }
                },
                {
                    contentType: ContentType.Text,
                    content: 'This text has background color.',
                    properties:{
                    styles: { 
                        backgroundColor: '#fff9c4' 
                    }
                }
                }
            ]
        },
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Multiple styles: ',
                    properties:{
                    styles: { 
                        bold: true,
                        color: '#1976d2'
                    }
                }
                },
                {
                    contentType: ContentType.Text,
                    content: 'This text combines multiple styles.',
                    properties:{
                    styles: { 
                        bold: true,
                        italic: true,
                        underline: true,
                        color: '#4caf50'
                    }
                }
                }
            ]
        }
    ];
}