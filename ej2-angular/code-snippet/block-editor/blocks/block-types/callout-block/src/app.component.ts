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
            type: 'Callout',
            props:{
            children: [{ 
                id: 'callout-content',
                type: 'Paragraph',
                content: [{
                    id: 'callout-content-1',
                    type: ContentType.Text,
                    content: 'Important information: This is a callout block used to highlight important content.'
                }]
            }]
        }
        }
    ];

}