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
            type: 'ToggleHeading1',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Collapsible Section'
                }
            ],
            isExpanded: true,
            children: [
                {
                    type: 'Paragraph',
                    content: [
                        {
                            type: ContentType.Text,
                            content: 'This content is inside a toggle section and can be collapsed.'
                        }
                    ]
                }
            ]
        },
        {
            type: 'ToggleParagraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Toggle paragraph section'
                }
            ],
            isExpanded: false,
            children: [
                {
                    type: 'Paragraph',
                    content: [
                        {
                            type: ContentType.Text,
                            content: 'This content is initially hidden because isExpanded is set to false.'
                        }
                    ]
                }
            ]
        }
    ];

}