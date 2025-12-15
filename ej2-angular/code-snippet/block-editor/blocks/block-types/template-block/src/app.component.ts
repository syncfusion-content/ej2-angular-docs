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
            blockType: 'Template',
            template: `<div class="notification-card">
                <div class="notification-header">
                    <span class="notification-icon">📢</span>
                    <h3 class="notification-title">Important Announcement</h3>
                </div>
                <div class="notification-content">
                    <p>The system will be undergoing maintenance on Saturday from 2:00 AM to 4:00 AM.</p>
                    <p>Please save your work before this time to prevent any data loss.</p>
                </div>
            </div>`
        }
    ];
}