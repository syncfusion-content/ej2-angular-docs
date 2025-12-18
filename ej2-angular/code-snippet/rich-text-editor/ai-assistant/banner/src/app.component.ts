import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, AIAssistantService, AIAssistantSettingsModel, ToolbarSettingsModel, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    templateUrl: 'app.component.html',
    selector: 'app-root',
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, AIAssistantService],
})
export class AppComponent {

    public toolbarSettings: ToolbarSettingsModel = { items: ['AICommands', 'AIQuery'] };

    public aiAssistantSettings: AIAssistantSettingsModel = {
        bannerTemplate: `<div class="banner-content">
            <div class="e-icons e-assistview-icon"></div>
            <h3>AI Assistant</h3>
            <i>AI-generated results can be error-prone; review them carefully.</i>
        </div>`
    };
}
