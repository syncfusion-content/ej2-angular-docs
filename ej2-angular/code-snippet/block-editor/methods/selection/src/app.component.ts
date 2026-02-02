import { Component, ViewChild } from '@angular/core';
import { BlockEditorModule, BlockEditorComponent  } from "@syncfusion/ej2-angular-blockeditor";
import { BlockModel, ContentType} from "@syncfusion/ej2-blockeditor";

@Component({
    imports: [BlockEditorModule],
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
            id: 'heading-block',
            blockType: 'Heading',
            properties: { level: 1},
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Welcome to Block Editor'
                }
            ]
        },
        {
            id: 'paragraph-1',
            blockType: 'Paragraph',
            content: [
                {
                    id: 'paragraph1-content',
                    contentType: ContentType.Text,
                    content: 'This is the first paragraph with some sample text content for selection demonstration.'
                }
            ]
        },
        {
            id: 'paragraph-2',
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'This is the second paragraph that can be used for various selection operations.'
                }
            ]
        },
        {
            id: 'list-block',
            blockType: 'BulletList',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'First list item'
                }
            ]
        }
    ];
    // Set Text Selection Method
    public setTextSelection = () => {
        // Select text from position 5 to 15 in the first paragraph
        this.blockEditorComponent.setSelection('paragraph1-content', 5, 15);
        this.displayOutput('Text selection set in "paragraph-1" block from position 5 to 15');
    }
    // Set Cursor Position Method
    public setCursor = () => {
        // Set cursor at position 10 in the heading block
        this.blockEditorComponent.setCursorPosition('heading-block', 10);
        this.displayOutput('Cursor position set at position 10 in "heading-block"');
    }
    // Get Selected Blocks Method
    public getSelectedBlocks = () => {
        const selectedBlocks = this.blockEditorComponent.getSelectedBlocks();
        if (selectedBlocks && selectedBlocks.length > 0) {
            const blockInfo = selectedBlocks.map((block: BlockModel) => 
                `ID: ${block.id}, Type: ${block.blockType}`
            ).join('\n');
            this.displayOutput(`Selected blocks (${selectedBlocks.length}):\n${blockInfo}`);
        } else {
            this.displayOutput('No blocks are currently selected');
        }
    }
    // Get Selection Range Method
    public getSelectionRange = () => {
        const range = this.blockEditorComponent.getRange();
        if (range) {
            const parent = range.startContainer.nodeType === 3
                ? (range.startContainer.parentElement as HTMLElement)
                : (range.startContainer as HTMLElement);
            this.displayOutput(`Current selection range:
                blockId: ${(parent as HTMLElement).closest('.e-block')?.id}
                Start Container: ${range.startContainer.nodeName}
                Start Offset: ${range.startOffset}
                End Container: ${range.endContainer.nodeName}
                End Offset: ${range.endOffset}
                Collapsed: ${range.collapsed}`);
        } else {
            this.displayOutput('No selection range found');
        }
    }
    // Set Selection Range Method
    public setCustomRange = () => {
    // Create a custom range for the second paragraph
        const paragraphElement = document.getElementById('paragraph-2');
        if (paragraphElement) {
            const range = document.createRange();
            const textNode = (paragraphElement.querySelector('.e-block-content') as HTMLElement).firstChild;
            if (textNode) {
                range.setStart(textNode, 8);
                range.setEnd(textNode, 20);
                this.blockEditorComponent.selectRange(range);
                this.displayOutput('Custom selection range applied to "paragraph-2" (positions 8-20)');
            } else {
                this.displayOutput('Could not find text content in paragraph-2');
            }
        }
    }
    // Select Block Method
    public selectBlock = () => {
    // Select the entire heading block
        this.blockEditorComponent.selectBlock('heading-block');
        this.displayOutput('Entire "heading-block" selected');
    }
    // Select All Blocks Method
    public selectAll = () => {
        this.blockEditorComponent.selectAllBlocks();
        this.displayOutput('All blocks in the editor have been selected');
    }
    // Output helper function
    displayOutput(message: string): void {
        this.output = message;
    }

}