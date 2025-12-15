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
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Task List:'
                }
            ]
        },
        {
            blockType: 'Checklist',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Completed task (checked)'
                }
            ],
            properties: {isChecked: true}
        },
        {
            blockType: 'Checklist',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Pending task (unchecked)'
                }
            ],
            properties: {isChecked: false}
        },
        {
            blockType: 'Checklist',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'High priority task'
                }
            ],
            properties: {isChecked: true}
        },
        {
            blockType: 'Checklist',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Low priority task'
                }
            ],
            properties: {isChecked: false}
        }
    ];

}