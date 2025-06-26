import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { BlockEditorModule, BlockEditorComponent } from "@syncfusion/ej2-angular-blockeditor";
import { BlockModel, ContentType} from "@syncfusion/ej2-blockeditor";

@Component({
    imports: [FormsModule, ReactiveFormsModule, BlockEditorModule],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html'
})


export class AppComponent {
    @ViewChild('blockEditorComponent')
    public blockEditorComponent!: BlockEditorComponent;
    output = '';
    statusMessage = '';
    isReadonly = false;
    currentTheme = 'default';
    public blocksData: BlockModel[] = [
        {
            id: 'title-block',
            type: 'Heading1',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Appearance Configuration Demo'
                }
            ]
        },
        {
            id: 'intro-block',
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'This demo showcases different appearance configurations including readonly mode and a custom CSS theme.'
                }
            ]
        },
        {
            id: 'features-heading',
            type: 'Heading2',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Configured Custom Theme'
                }
            ]
        },
        {
            id: 'theme-list-1',
            type: 'BulletList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Gradient background with modern styling'
                }
            ]
        },
        {
            id: 'readonly-info',
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Use the readonly toggle to switch between editable and read-only modes. In readonly mode, you can view content but cannot make changes.'
                }
            ]
        }
    ];
    // Toggle Readonly Mode
    public toggleReadonly = () => {
        this.isReadonly = !this.isReadonly;
        this.blockEditorComponent.readOnly = this.isReadonly;

        // Add visual indication for readonly mode
        const editorElement = document.getElementById('blockeditor');
        if (editorElement) {
            if (this.isReadonly) {
                editorElement.classList.add('readonly-mode');
            } else {
                editorElement.classList.remove('readonly-mode');
            }
        }

        this.updateStatus();
        this.displayOutput(`Readonly mode ${this.isReadonly ? 'enabled' : 'disabled'}. ${this.isReadonly ? 'Content is now view-only.' : 'Content is now editable.'}`);
    }   
    // Apply Custom Theme
    public applyCustomTheme = () => {
        this.blockEditorComponent.cssClass = 'custom-theme';
        this.currentTheme = 'custom';
        this.updateStatus();
        this.displayOutput('Custom theme applied. The editor now features a gradient background with modern styling and hover effects.');
    }
    // Add event listeners for editor interactions
    public onEditorFocus = () => {
        this.displayOutput('Editor focused. You can now type or edit content.');
    }
    public onEditorBlur = () => {
        this.displayOutput('Editor lost focus.');
    }
    // Initialize status display
    ngOnInit(): void {
        this.updateStatus();
    }

    // Output helper function
    displayOutput(msg: string): void {
        this.output = msg;
    }

    // Update status display
    updateStatus(): void {
        const mode = this.isReadonly ? 'Readonly' : 'Editable';
        const theme = this.currentTheme === 'default' ? 'Default' : 'Custom';
        this.statusMessage = `${mode}, ${theme} Theme`;
    }

}