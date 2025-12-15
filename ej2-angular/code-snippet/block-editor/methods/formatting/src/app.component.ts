import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { BlockEditorModule, BlockEditorComponent  } from "@syncfusion/ej2-angular-blockeditor";
import { BlockModel, ContentType, CommandName} from "@syncfusion/ej2-blockeditor";

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
    public blocksData: BlockModel[] = [
        {
            blockType: 'Heading',
            properties: { level: 1},
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Formatting Demo'
                }
            ]
        },
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Select this text and apply different formatting options using the buttons below. You can make text bold or change colors for the text.'
                }
            ]
        },
        {
            blockType: 'BulletList',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'List item for formatting demonstration'
                }
            ]
        }
    ];

    // Apply Bold Formatting
    public applyBold = () => {
        this.blockEditorComponent.executeToolbarAction(CommandName.Bold);
        this.displayOutput('Bold formatting applied to selected text');
    }
    // Apply Color Formatting
    public applyColor = () => {
        this.blockEditorComponent.executeToolbarAction(CommandName.Color, '#ff6b35');
        this.displayOutput('Orange color (#ff6b35) applied to selected text');
    }
    // Enable Toolbar Items
    public enableToolbarItems = () => {
        // Enable specific toolbar items
        this.blockEditorComponent.enableToolbarItems(['bold', 'italic', 'underline']);
        this.displayOutput('Toolbar items (bold, italic, underline) have been enabled');
    }
    // Disable Toolbar Items
    public disableToolbarItems = () => {
        // Disable specific toolbar items
        this.blockEditorComponent.disableToolbarItems(['bold', 'italic']);
        this.displayOutput('Toolbar items (bold, italic) have been disabled');
    }
    // Output helper function
    displayOutput(message: string): void {
        this.output = message;
    }

}