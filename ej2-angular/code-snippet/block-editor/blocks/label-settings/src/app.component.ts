import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { BlockEditorModule } from "@syncfusion/ej2-angular-blockeditor";
import { BlockModel, ContentType, LabelSettingsModel } from "@syncfusion/ej2-blockeditor";

@Component({
    imports: [FormsModule, ReactiveFormsModule, BlockEditorModule],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html'
})


export class AppComponent {
    public labelSettings: LabelSettingsModel = {
        triggerChar: '#',
        labelItems: [
            { id: 'bug', text: 'Bug', labelColor: '#ff5252', groupHeader: 'Status' },
            { id: 'task', text: 'Task', labelColor: '#90caf9', groupHeader: 'Status' },
            { id: 'feature', text: 'Feature', labelColor: '#81c784', groupHeader: 'Status' },
            { id: 'enhancement', text: 'Enhancement', labelColor: '#ba68c8', groupHeader: 'Status' },
            
            { id: 'low', text: 'Low Priority', labelColor: '#c5e1a5', groupHeader: 'Priority' },
            { id: 'medium', text: 'Medium Priority', labelColor: '#fff59d', groupHeader: 'Priority' },
            { id: 'high', text: 'High Priority', labelColor: '#ffab91', groupHeader: 'Priority' },
            { id: 'critical', text: 'Critical', labelColor: '#ef9a9a', groupHeader: 'Priority' }
        ]
    };
    public blocksData: BlockModel[] = [
        {
            type: 'Heading',
            props: { level: 1},
            content: [
                {
                    type: ContentType.Text,
                    content: 'Project Planning with Custom Labels'
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Type # to add status labels to your tasks.'
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Fix homepage layout issue - '
                },
                {
                    type: ContentType.Label,
                    props: { labelId: 'bug'}
                },
                {
                    type: ContentType.Text,
                    content: ' '
                },
                {
                    type: ContentType.Label,
                    props: { labelId: 'high'}
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Update user documentation - '
                },
                {
                    type: ContentType.Label,
                    props: { labelId: 'task'}
                },
                {
                    type: ContentType.Text,
                    content: ' '
                },
                {
                    type: ContentType.Label,
                    props: { lableId: 'medium'}
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Implement payment gateway - '
                },
                {
                    type: ContentType.Label,
                    props: { labelId: 'feature'}
                },
                {
                    type: ContentType.Text,
                    content: ' '
                },
                {
                    type: ContentType.Label,
                    props: { labelId: 'critical'}
                }
            ]
        }
    ];

}