import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, AIAssistantService, AIAssistantSettingsModel, ToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';

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
        popupMaxHeight: 500,
        popupWidth: 500
    };
}
