import { Component, ViewChild } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, AIAssistantService, ToolbarSettingsModel, AIAssistantPromptRequestArgs, editAreaClick, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
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

    onPromptRequest(event:AIAssistantPromptRequestArgs): void {
        setTimeout(() => {
            const aiResponse: string = `Dear Valued Customer,

We are writing to inform you that there has been a recent change to our policies that may affect your account. Please take a moment to review the details below carefully.

Starting next Monday, all users must update their personal information before accessing the system. Failure to do so may result in the temporary suspension of your account and loss of access to certain features.

If you have any questions or concerns, please feel free to contact our support team at [support@companyname.com](mailto:support@companyname.com). They are available 24/7 and happy to help.

Thank you for your time and cooperation. We apologize for any inconvenience this may cause.

Best regards,
Customer Support Team
Company Name
`;
            this.editor.addAIPromptResponse(aiResponse, false);
            this.editor.addAIPromptResponse(aiResponse, true);
        }, 300); // For demonstration purpose.
    }

    reviewContent(): void {
        this.editor.showAIAssistantPopup();
        this.editor.executeAIPrompt('Proof read the editor content.');
    }
}
