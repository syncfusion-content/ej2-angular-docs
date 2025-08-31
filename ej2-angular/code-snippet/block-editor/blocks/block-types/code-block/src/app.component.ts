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
            type: 'Code',
            content: [
                {
                    type: ContentType.Text,  
                    content: 'function greeting() {\n  console.log("Hello, world!");\n}'
                }
            ],
            props: {
                defaultLanguage: 'javascript',
                languages: [
                    { language: 'javascript', label: 'JavaScript' },
                    { language: 'typescript', label: 'TypeScript' },
                    { language: 'html', label: 'HTML' },
                    { language: 'css', label: 'CSS' }
                ]
            }
        }
    ];

}