import { Component, ViewChild } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, AIAssistantService, AIAssistantSettingsModel, ToolbarSettingsModel, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { PromptModel } from '@syncfusion/ej2-interactive-chat';

@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    templateUrl: 'app.component.html',
    selector: 'app-root',
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, AIAssistantService],
})
export class AppComponent {
    @ViewChild('editor')
    public editor!: RichTextEditorComponent;

    public toolbarSettings: ToolbarSettingsModel = { items: ['AICommands', 'AIQuery'] };

    public aiAssistantSettings: AIAssistantSettingsModel = {
        prompts: [
			{ 
				prompt: 'What is Essential Studio ?',
				response: 'Essential Studio is a software toolkit by Syncfusion that offers a variety of UI controls, frameworks, and libraries for developing applications on web, desktop, and mobile platforms. It aims to streamline application development with customizable, pre-built components.'
			}
		],
        maxPromptHistory: 30
    };

    public onSaveBtnClick(): void {
        const promptHistory: PromptModel[] = this.editor.getAIPromptHistory();
        console.log(promptHistory);
        // Handle DB Post and save history to the DB.
    }
}
