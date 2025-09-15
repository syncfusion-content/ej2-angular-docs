import { Component, ViewChild } from '@angular/core';
import { AIAssistViewComponent, AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';
import { PromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { marked } from 'marked';

@Component({
  standalone: true,
  imports: [AIAssistViewModule], // Import the Syncfusion component
  selector: 'app-root',
  template: `
      <div ejs-aiassistview #aiassist (promptRequest)="promptRequest($event)" [promptSuggestions]="suggestions"
        [toolbarSettings]="toolbarSettings">
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

  private openaiApiKey: string = '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'; // Replace with your Gemini API key

  public suggestions: string[] = [
    'What are the best tools for organizing my tasks?',
    'How can I maintain work-life balance effectively?'
  ];

  public toolbarSettings = {
    items: [{ iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Clear Prompts' }],
    itemClicked: () => {
      this.aiAssistView.prompts = [];
      this.aiAssistView.promptSuggestions = this.suggestions;
    }
  };

  public promptRequest = (args: PromptRequestEventArgs) => {
    setTimeout(async () => {
        let responseText = '';
        try {
          const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.openaiApiKey}`,
            },
            body: JSON.stringify({
              model: 'gpt-4o-mini',
              messages: [{ role: 'user', content: args.prompt }],
              max_tokens: 150,
              stream: false
            }),
          });
          const data = await response.json();
          responseText = data.choices[0].message.content.trim() || 'No response received.';
          this.aiAssistView.addPromptResponse(marked.parse(responseText));
        } catch (error) {
            this.aiAssistView.addPromptResponse(
            '⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.'
          );
        }
    }, 1000);
  }
}