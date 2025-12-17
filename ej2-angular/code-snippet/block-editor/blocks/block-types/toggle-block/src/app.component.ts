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
            blockType: 'CollapsibleHeading',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Collapsible Section'
                }
            ],
            properties:{
                level: 1,
                isExpanded: true,
                children: [
                    {
                        blockType: 'Paragraph',
                        content: [
                            {
                                contentType: ContentType.Text,
                                content: 'This content is inside a toggle section and can be collapsed.'
                            }
                        ]
                    }
                ]
            }
        },
        {
            blockType: 'CollapsibleParagraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Toggle paragraph section'
                }
            ],
            properties:{
                isExpanded: false,
                children: [
                    {
                        blockType: 'Paragraph',
                        content: [
                            {
                                contentType: ContentType.Text,
                                content: 'This content is initially hidden because isExpanded is set to false.'
                            }
                        ]
                    }
                ]
            }
        }
    ];

}