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
            type: 'BulletList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Features of the Block Editor'
                }
            ]
        },
        {
            type: 'NumberedList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Step 1: Initialize the Block Editor'
                }
            ]
        },
        {
            type: 'CheckList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Review documentation'
                }
            ],
            isChecked: true
        },
        {
            type: 'CheckList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Implement drag and drop functionality'
                }
            ],
            isChecked: false
        }
    ];
}