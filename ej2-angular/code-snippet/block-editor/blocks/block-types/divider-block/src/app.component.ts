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
                    content: 'This section discusses the features of the Block Editor.'
                }
            ]
        },
        {
            type: 'Divider'
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'This section covers implementation details and usage examples.' 
                }
            ]
        }
    ];

}