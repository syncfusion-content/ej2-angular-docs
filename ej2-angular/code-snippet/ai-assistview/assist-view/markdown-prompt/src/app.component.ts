import { Component, ViewChild } from '@angular/core';
import { AIAssistViewComponent } from '@syncfusion/ej2-angular-interactive-chat';
import { PromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';

@Component({
  imports: [ AIAssistViewModule ],
  standalone: true,
  selector: 'app-root',
  template: `
    <div id="wrapper">
      <ejs-aiassistview
        #aiAssistView
        [promptSuggestions]="promptSuggestions"
        (promptRequest)="onPromptRequest($event)"
      ></ejs-aiassistview>
    </div>
  `,
  styleUrls: ['./styles.css']
})
export class AppComponent {
  @ViewChild('aiAssistView') aiAssistView!: AIAssistViewComponent;

  public promptSuggestions: string[] = [
    'What is Markdown?',
    'How do I use bold?',
    'Show code block example'
  ];

  public onPromptRequest = (args: PromptRequestEventArgs) => {
    setTimeout(() => {
      let response1 = '# Markdown Guide\n\nMarkdown is a lightweight markup language:\n\n- **Headers:** Use `#`, `##`, `###`\n- **Bold:** `**text**` for bold\n- **Italic:** `*text*` for italic\n- **Code:** Triple backticks for code blocks\n- **Lists:** Use `-` for bullet points\n\nIt\'s simple and perfect for documentation.';
      let response2 = '# Bold Text in Markdown\n\nUse double asterisks `**text**` or double underscores `__text__`:\n\n**This is bold text**\n\nBoth methods produce the same result.';
      let defaultResponse = 'For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
      
      this.aiAssistView.addPromptResponse(
        args.prompt === this.promptSuggestions[0] 
          ? response1 
          : args.prompt === this.promptSuggestions[1] 
            ? response2 
            : defaultResponse
      );
    }, 1000);
  };
}