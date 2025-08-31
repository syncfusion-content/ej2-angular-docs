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
            props: { level: 1},
            content: [
                {
                    type: ContentType.Text,
                    content: 'Main Document Title'
                }
            ]
        },
        {
            type: 'Heading',
            props: { level: 2},
            content: [
                {
                    type: ContentType.Text,
                    content: 'Chapter Overview'
                }
            ]
        },
        {
            type: 'Heading',
            props: { level: 3},
            content: [
                {
                    type: ContentType.Text,
                    content: 'Section Introduction'
                }
            ]
        },
        {
            type: 'Heading',
            props: { level: 4},
            content: [
                {
                    type: ContentType.Text,
                    content: 'Sub-section Details'
                }
            ]
        }
    ];

}