import { Component, ViewChild } from '@angular/core';
import { AIAssistViewComponent, AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { PromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { marked } from 'marked';

@Component({
  standalone: true,
  imports: [AIAssistViewModule],
  selector: 'app-root',
  template: `
      <div ejs-aiassistview #aiassist (promptRequest)="promptRequest($event)" [promptSuggestions]="suggestions"
        [toolbarSettings]="toolbarSettings" (stopRespondingClick)="stopRespondingClick()">
        <ng-template #bannerTemplate>
            <div class="banner-content">
                <div class="e-icons e-assistview-icon"></div>
                <h3>How can I help you today?</h3>
            </div>
        </ng-template>
    </div>
  `
});
export class AppComponent {
  @ViewChild('aiassist') aiAssistView!: AIAssistViewComponent;

  private geminiApiKey: string = ''; // Replace with your Gemini API key
  private genAI = new GoogleGenerativeAI(this.geminiApiKey);
  private model = this.genAI.getGenerativeModel({ model: 'gemini-2.5-flash' }); // Replace with updated gemini model
  private stopStreaming: boolean = false;

  public suggestions: string[] = [
    'What are the best tools for organizing my tasks?',
    'How can I maintain work-life balance effectively?'
  ];

  public toolbarSettings = {
    items: [{ iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Clear Prompts' }],
    itemClicked: () => {
      this.aiAssistView.prompts = [];
      this.aiAssistView.promptSuggestions = this.suggestions;
      this.stopStreaming = true;
    }
  };

  public streamResponse = async (response: string) => {
    let lastResponse = "";
    const responseUpdateRate = 10;
    let i = 0;
    const responseLength = response.length;
    while (i < responseLength && !this.stopStreaming) {
      lastResponse += response[i];
      i++;
      if (i % responseUpdateRate === 0 || i === responseLength) {
        const htmlResponse = marked.parse(lastResponse);
        this.aiAssistView.addPromptResponse(htmlResponse, i === responseLength);
        this.aiAssistView.scrollToBottom();
      }
      await new Promise(resolve => setTimeout(resolve, 15)); // Delay for streaming effect
    }
    this.aiAssistView.promptSuggestions = this.suggestions;
  };

  public promptRequest = async (args: PromptRequestEventArgs) => {
    try {
      const result = await this.model.generateContent(args.prompt || 'Hi');
      const response = await result.response.text();
      this.stopStreaming = false;
      await this.streamResponse(response);
    } catch (error) {
      this.aiAssistView.addPromptResponse(
        '⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.'
      );
      this.stopStreaming = true;
    }
  };

  public stopRespondingClick = () => {
    this.stopStreaming = true;
  };
}