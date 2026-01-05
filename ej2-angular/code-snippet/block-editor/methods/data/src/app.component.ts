import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { BlockEditorModule, BlockEditorComponent  } from "@syncfusion/ej2-angular-blockeditor";
import { BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

@Component({
    imports: [FormsModule, ReactiveFormsModule, BlockEditorModule],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html'
})


export class AppComponent {
    @ViewChild('blockEditorComponent')
    public blockEditorComponent!: BlockEditorComponent;
    public output = '';
    public blocksData = [
        {
            id: 'title-block',
            type: 'Heading',
            props: { level: 1},
            content: [
                {
                    type: ContentType.Text,
                    content: 'Document Export Demo'
                }
            ]
        },
        {
            id: 'intro-paragraph',
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'This document demonstrates the data export capabilities of the Block Editor. You can export content as JSON or HTML formats.'
                }
            ]
        },
        {
            id: 'features-heading',
            type: 'Heading',
            props: { level: 2},
            content: [
                {
                    type: ContentType.Text,
                    content: 'Export Features'
                }
            ]
        },
        {
            id: 'features-list',
            type: 'BulletList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'JSON export for data processing'
                }
            ]
        },
        {
            id: 'features-list-2',
            type: 'BulletList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'HTML export for web display'
                }
            ]
        },
        {
            id: 'features-list-3',
            type: 'BulletList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Print functionality for hard copies'
                }
            ]
        },
        {
            id: 'code-example',
            type: 'Code',
            content: [
                {
                    type: ContentType.Text,
                    content: 'const data = editor.getDataAsJson();\nconsole.log(data);'
                }
            ]
        }
    ];
    //Get All Data as JSON
    public getAllDataJson = () => {
        const jsonData = this.blockEditorComponent.getDataAsJson();
        const formattedJson = JSON.stringify(jsonData, null, 2);
        this.displayOutput(`All blocks as JSON:\n\n${formattedJson}`);
    }
    // Get Specific Block Data as JSON
    public getBlockDataJson = () => {
        const blockData = this.blockEditorComponent.getDataAsJson('title-block');
        const formattedJson = JSON.stringify(blockData, null, 2);
        this.displayOutput(`Block "title-block" as JSON:\n\n${formattedJson}`);
    }
    // Get All Data as HTML
    public getAllDataHtml = () => {
        const htmlData = this.blockEditorComponent.getDataAsHtml();
        this.displayOutput(`All blocks as HTML:\n\n${htmlData}`);
    }
    // Get Specific Block Data as HTML
    public getBlockDataHtml = () => {
        const blockHtml = this.blockEditorComponent.getDataAsHtml('intro-paragraph');
        this.displayOutput(`Block "intro-paragraph" as HTML:\n\n${blockHtml}`);
    }
    // Print Editor Content
    public printContent = () => {
       this.blockEditorComponent.print();
       this.displayOutput('Print dialog opened. Check for a new browser window/tab with the printable content.');
    }
    // Output helper function
    displayOutput(message: string): void {
        this.output = message;
    }

}