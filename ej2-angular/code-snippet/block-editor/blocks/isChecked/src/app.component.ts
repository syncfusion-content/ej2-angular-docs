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
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Task List:'
                }
            ]
        },
        {
            type: 'CheckList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Completed task (checked)'
                }
            ],
            isChecked: true
        },
        {
            type: 'CheckList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Pending task (unchecked)'
                }
            ],
            isChecked: false
        },
        {
            type: 'CheckList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'High priority task'
                }
            ],
            isChecked: true
        },
        {
            type: 'CheckList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Low priority task'
                }
            ],
            isChecked: false
        }
    ];

}