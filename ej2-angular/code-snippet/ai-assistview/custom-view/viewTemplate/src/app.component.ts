import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';

import { Component, HostListener, ViewChild } from '@angular/core';
import { AIAssistViewComponent, PromptRequestEventArgs } from '@syncfusion/ej2-angular-interactive-chat';


@Component({
    imports: [ FormsModule, ReactiveFormsModule, AIAssistViewModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AI AssistView component
    template: `
    <div ejs-aiassistview>
        <e-views>
            <e-view type="Assist" name="Prompt">
                <ng-template #viewTemplate>
                    <div class="view-container"><h5>Prompt view content</h5></div>
                </ng-template>
            </e-view>
            <e-view type="Custom" name="Response">
                <ng-template #viewTemplate>
                    <div class="view-container"><h5>Response view content</h5></div>
                </ng-template>
            </e-view>
        </e-views>
    </div>`
})

export class AppComponent {

}
