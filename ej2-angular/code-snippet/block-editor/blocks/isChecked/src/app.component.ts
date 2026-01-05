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
            type: 'Checklist',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Completed task (checked)'
                }
            ],
            props: {isChecked: true}
        },
        {
            type: 'Checklist',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Pending task (unchecked)'
                }
            ],
            props: {isChecked: false}
        },
        {
            type: 'Checklist',
            content: [
                {
                    type: ContentType.Text,
                    content: 'High priority task'
                }
            ],
            props: {isChecked: true}
        },
        {
            type: 'Checklist',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Low priority task'
                }
            ],
            props: {isChecked: false}
        }
    ];

}