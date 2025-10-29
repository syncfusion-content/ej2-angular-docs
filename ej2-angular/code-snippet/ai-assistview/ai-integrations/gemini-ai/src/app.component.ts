import { Component, ViewChild } from '@angular/core';
import { AIAssistViewComponent, AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';
import { PromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { marked } from 'marked';

@Component({
  standalone: true,
  imports: [AIAssistViewModule],
  selector: 'app-root',
  template: `
    <div ejs-aiassistview #aiassist (promptRequest)="onPromptRequest($event)" [promptSuggestions]="suggestions"
      [toolbarSettings]="toolbarSettings" (stopRespondingClick)="handleStopResponse()">
      <ng-template #bannerTemplate>
        <div class="banner-content">
          <div class="e-icons e-assistview-icon"></div>
          <h3>AI Assistance</h3>
          <div>To get started, provide input or choose a suggestion.</div>
        </div>
      </ng-template>
    </div>
  `
})

export class AppComponent {
  @ViewChild('aiassist') aiAssistView!: AIAssistViewComponent;
  // Initialize Gemini API
  private geminiApiKey: string = ''; // Replace with your Gemini API key
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
      this.stopStreaming = true; // Stop streaming on refresh
    }
  };

  public onPromptRequest = async (args: PromptRequestEventArgs) => {
    const modelName = 'gemini-2.5-flash'; // Select the Gemini model (update model name as needed)
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${this.geminiApiKey}`;
    const requestBody = {
      contents: [{ parts: [{ text: args.prompt || 'Hi' }] }]
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const fullResponse = data.candidates[0].content.parts[0].text || '';
      this.stopStreaming = false; // Reset stopStreaming for new request
      this.streamResponse(fullResponse);

    } catch (error) {
      console.error('Error fetching from Gemini API:', error);
      this.aiAssistView.addPromptResponse(
        '⚠️ Something went wrong while connecting to the AI service. Please check your API key, network connection, or try again later.'
      );
      this.stopStreaming = true; // Ensure streaming stops on error
    }
  }

  // Stream AI response in chunks
  private async streamResponse(response: string): Promise<void> {
    let lastResponse = "";
    const responseUpdateRate = 20; // Adjust for smoother or faster updates
    let i = 0;
    const responseLength = response.length;

    while (i < responseLength && !this.stopStreaming) {
      lastResponse += response[i];
      i++;

      if (i % responseUpdateRate === 0 || i === responseLength) {
        const htmlResponse = marked.parse(lastResponse);

        this.aiAssistView.addPromptResponse(htmlResponse, i !== responseLength);
        this.aiAssistView.scrollToBottom();
      }
      await new Promise(resolve => setTimeout(resolve, 15)); 
    }
    this.aiAssistView.promptSuggestions = this.suggestions;
  }

  public handleStopResponse(): void {
    this.stopStreaming = true;
  }
}