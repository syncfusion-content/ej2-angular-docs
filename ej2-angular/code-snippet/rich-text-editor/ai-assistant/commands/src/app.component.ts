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
        commands: [
            { text: 'Rewrite', prompt: 'Rewrite the content to be more refined.' },
            { text: 'Elaborate', prompt: 'Expand on the following content with more detail and explanation:' },
            {
                text: 'Change Tone',
                items: [
                    { text: 'Professional', prompt: 'Rewrite the following content in a professional tone:' },
                    { text: 'Casual', prompt: 'Rewrite the following content in a casual, conversational tone:' },
                    { text: 'Direct', prompt: 'Rewrite the following content to be more direct and to the point:' },
                ],
            },
        ]
    };
}
