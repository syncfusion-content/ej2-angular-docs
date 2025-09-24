import { Component, ViewChild } from '@angular/core';
import { AIAssistViewComponent, AIAssistViewModule, PromptRequestEventArgs } from '@syncfusion/ej2-angular-interactive-chat';
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
                <h3>AI Assistance</h3>
                <div>To get started, provide input or choose a suggestion.</div>
            </div>
        </ng-template>
    </div>
  `
})
export class AppComponent {
  @ViewChild('aiassist') aiAssistView!: AIAssistViewComponent;

  private openaiApiKey: string = ''; // Replace with your OpenAI API key (WARNING: Do not expose in client-side code for production)
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

  public promptRequest = (args: PromptRequestEventArgs) => {
    fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.openaiApiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: args.prompt || 'Hi' }],
        max_tokens: 150,
        stream: false
      }),
    })
    .then(response => response.json())
    .then(reply => {
      const responseText = reply.choices[0].message.content.trim() || 'No response received.';
      this.stopStreaming = false;
      this.streamResponse(responseText);
    })
    .catch(error => {
      console.error('Error fetching OpenAI response:', error);
      this.aiAssistView.addPromptResponse(
        '⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.'
      );
      this.stopStreaming = true;
    });
  };

  public stopRespondingClick = () => {
    this.stopStreaming = true;
  };
}