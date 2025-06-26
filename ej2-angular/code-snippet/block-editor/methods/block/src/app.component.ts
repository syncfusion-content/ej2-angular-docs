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
            id: 'block-1',
            type: 'Heading1',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Sample Heading'
                }
            ]
        },
        {
            id: 'block-2',
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'This is a sample paragraph block.'
                }
            ]
        },
        {
            id: 'block-3',
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'This is another paragraph block.'
                }
            ]
        }
    ];

    //Add Block Method
    public addBlock = () => {
        const newBlock: BlockModel = {
        id: 'new-block',
        type: 'Paragraph',
        content: [{ type: ContentType.Text, content: 'This is a newly added block' }]
        };
        this.blockEditorComponent.addBlock(newBlock, 'block-2', true);
        this.displayOutput(`Block added successfully with ID: ${newBlock.id}`);
    }

    //Remove Block Method
    public removeBlock = () => {
        this.blockEditorComponent.removeBlock('block-3');
        this.displayOutput('Block with ID "block-3" removed successfully');
    }

    //Get Block Method
    public getBlock = () => {
        const block = this.blockEditorComponent.getBlock('block-1');
        if (block && block.content) {
            this.displayOutput(`Block found:\nID: ${block.id}\nType: ${block.type}\nContent: ${block.content[0].content}`);
        } else {
            this.displayOutput('Block with ID "block-1" not found');
        }
    }

    //Move Block Method
    public moveBlock = () => {
        this.blockEditorComponent.moveBlock('block-2', 'block-1');
        this.displayOutput('Block "block-2" moved successfully');
    }

    //Update Block Method
    public updateBlock = () => {
        const success = this.blockEditorComponent.updateBlock('block-2', {
            indent: 1,
            content: [{ content: 'Updated content' }]
        });
        const updatedBlock = this.blockEditorComponent.getBlock('block-2');
        if (success && updatedBlock && updatedBlock.content) {
            this.displayOutput(`Block ${updatedBlock.id} updated successfully\nNew content: "${updatedBlock.content[0].content} \nNew indent: ${updatedBlock.indent}"`);
        } else {
            this.displayOutput('Failed to update block');
        }
    }

    //Get Block Count Method
    public getBlockCount = () => {
        const count = this.blockEditorComponent.getBlockCount();
        this.displayOutput(`Total number of blocks: ${count}`);
    }
    // Output helper function
    displayOutput(message: string): void {
        this.output = message;
    }

}