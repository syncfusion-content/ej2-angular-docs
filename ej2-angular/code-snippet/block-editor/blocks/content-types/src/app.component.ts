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
            type: 'Heading',
            props: {level : 2},
            content: [
                {
                    type: ContentType.Text,
                    content: 'Different Content Types'
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'The Block Editor supports various content types: '
                },
                {
                    type: ContentType.Link,
                    content: 'hyperlinks',
                    props: {
                        url: 'https://ej2.syncfusion.com/documentation/',
                        openInNewWindow: true
                    }
                },
                {
                    type: ContentType.Text,
                    content: ', inline '
                },
                {
                    type: ContentType.Code,
                    content: 'code snippets.'
                },
                {
                    type: ContentType.Text,
                    content: '\nUser mentions like'
                },
                {
                    type: ContentType.Mention,
                    id: 'user1'
                },
                {
                    type: ContentType.Text,
                    content: ', and labels such as'
                },
                {
                    type: ContentType.Label,
                    props: { labelId: 'label1'}
                },
                {
                    type: ContentType.Text,
                    content: '.'
                }
            ]
        }
    ];
    public users = [
        { id: 'user1', user: 'John Doe' }
    ];

    public labelSettings = {
        labelItems: [
            { id: 'label1', text: 'Bug', labelColor: '#ff5252', groupHeader: 'Status' }
        ]
    };
}