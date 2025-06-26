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
            type: 'Heading2',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Content Styling Options'
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Bold text: ',
                    styles: { 
                        bold: true,
                        color: '#1976d2'
                    }
                },
                {
                    type: ContentType.Text,
                    content: 'This text is bold.',
                    styles: { 
                        bold: true 
                    }
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Italic text: ',
                    styles: { 
                        bold: true,
                        color: '#1976d2'
                    }
                },
                {
                    type: ContentType.Text,
                    content: 'This text is italicized.',
                    styles: { 
                        italic: true 
                    }
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Text with color: ',
                    styles: { 
                        bold: true,
                        color: '#1976d2'
                    }
                },
                {
                    type: ContentType.Text,
                    content: 'This text has custom color.',
                    styles: { 
                        color: '#e91e63' 
                    }
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Text with background: ',
                    styles: { 
                        bold: true,
                        color: '#1976d2'
                    }
                },
                {
                    type: ContentType.Text,
                    content: 'This text has background color.',
                    styles: { 
                        bgColor: '#fff9c4' 
                    }
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Multiple styles: ',
                    styles: { 
                        bold: true,
                        color: '#1976d2'
                    }
                },
                {
                    type: ContentType.Text,
                    content: 'This text combines multiple styles.',
                    styles: { 
                        bold: true,
                        italic: true,
                        underline: true,
                        color: '#4caf50'
                    }
                }
            ]
        }
    ];
}