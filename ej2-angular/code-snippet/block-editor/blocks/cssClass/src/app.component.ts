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
            type: 'Heading',
            props: { level: 2},
            content: [
                {
                    type: ContentType.Text,
                    content: 'Custom CSS Classes in Block Editor'
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Default paragraph block'
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'This is an info block'
                }
            ],
            cssClass: 'info-block'
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'This is a warning block'
                }
            ],
            cssClass: 'warning-block'
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'This is a success block'
                }
            ],
            cssClass: 'success-block'
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'This is an error block'
                }
            ],
            cssClass: 'error-block'
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'This is a custom font block'
                }
            ],
            cssClass: 'custom-font'
        }
    ];

}