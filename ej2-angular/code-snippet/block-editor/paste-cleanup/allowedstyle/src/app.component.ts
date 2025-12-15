import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { BlockEditorModule } from "@syncfusion/ej2-angular-blockeditor";
import { BlockModel, AfterPasteCleanupEventArgs } from "@syncfusion/ej2-blockeditor";

@Component({
    imports: [FormsModule, ReactiveFormsModule, BlockEditorModule],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html'
})

// Initialize BlockEditor with paste cleanup settings
export class AppComponent {
    public output = '';
    public blockData: BlockModel[] = [
        {
            blockType: 'Paragraph'
        }
    ];
    // Configure paste cleanup settings
    public pasteCleanupSettings = {
        allowedStyles: ['text-decoration'],
        deniedTags: ['script', 'iframe']
    };
    public handleAfterPaste = (args: AfterPasteCleanupEventArgs) => {
        this.displayOutput(`After Paste Event: Processed content length: ${args.content.length} characters`);
    }

    ngOnInit(): void {
        this.displayOutput(`Paste Cleanup Settings Active:
        - Allowed Styles: ['text-decoration']
        - Denied Tags: ['script', 'iframe']

        Copy content from the test area above and paste it into the editor to see the cleanup in action.`);
    }

    // Output helper function
    displayOutput(message: string): void {
        this.output = message;
    }

}