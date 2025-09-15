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

  private geminiApiKey: string = ''; // Replace with your Gemini API key
  private genAI = new GoogleGenerativeAI(this.geminiApiKey);
  private model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

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
      try {
        const result = await this.model.generateContent(args.prompt||'Hi');
        const response = await result.response.text();
        this.aiAssistView.addPromptResponse(marked.parse(response));
      } catch (error) {
        this.aiAssistView.addPromptResponse(
          '⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.'
        );
      }
    }, 1000);
  }
}
