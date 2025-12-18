import { Component, ViewChild } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, AIAssistantService, ToolbarSettingsModel, AIAssistantPromptRequestArgs, editAreaClick, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    templateUrl: 'app.component.html',
    styleUrl:  'app.component.css',
    selector: 'app-root',
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, AIAssistantService],
})
export class AppComponent {
    @ViewChild('editor')
    public editor!: RichTextEditorComponent;
    public toolbarSettings: ToolbarSettingsModel = { items: ['AICommands', 'AIQuery'] };

    onPromptRequest(event:AIAssistantPromptRequestArgs): void {
        setTimeout(() => {
            this.editor.addAIPromptResponse('Demonstration of the AI Assistant Popup styling.', false);
            this.editor.addAIPromptResponse('Demonstration of the AI Assistant Popup styling.', true);
        }, 5000);
    }
}
