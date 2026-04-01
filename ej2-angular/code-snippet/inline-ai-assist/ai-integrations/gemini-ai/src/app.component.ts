import { Component, ViewChild } from '@angular/core';
import { InlineAIAssistModule, InlineAIAssistComponent, InlinePromptRequestEventArgs, ResponseSettingsModel, ResponseItemSelectEventArgs, InlineToolbarSettingsModel, ToolbarItemClickEventArgs } from '@syncfusion/ej2-angular-interactive-chat';
import { marked } from 'marked';

@Component({
  standalone: true,
  imports: [InlineAIAssistModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  @ViewChild('inlineAssistComponent')
  public inlineAssistComponent!: InlineAIAssistComponent;
  // Initialize Gemini API
  private geminiApiKey: string = ''; // Replace with your Gemini API key
  private stopStreaming: boolean = false;

  public inlineToolbarSettings: InlineToolbarSettingsModel = {
      itemClick: (args: ToolbarItemClickEventArgs) => {
          if (args.item && args.item.iconCss === 'e-icons e-inline-stop') {
            this.handleStopResponse();
          }
      }
  };

  public itemSelect = (args: ResponseItemSelectEventArgs) => {
      if (args.command.label === 'Accept') {
          const editable = document.getElementById('editableText') as HTMLElement | null;
          if (editable) {
              editable.innerHTML = '<p>' + this.inlineAssistComponent.prompts[this.inlineAssistComponent.prompts.length - 1 ].response + '</p>';
          }
          this.inlineAssistComponent.hidePopup();
      } else if (args.command.label === 'Discard') {
          this.inlineAssistComponent.hidePopup();
      }
  }

  public responseSetting: ResponseSettingsModel = {
      itemSelect:  this.itemSelect
  }

  onClick(): void {
    this.inlineAssistComponent.showPopup();
  }

public onPromptRequest = async (args: InlinePromptRequestEventArgs) => {
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
    this.inlineAssistComponent.addResponse(
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

      this.inlineAssistComponent.addResponse(htmlResponse as string, i !== responseLength);
    }
    await new Promise(resolve => setTimeout(resolve, 15)); 
  }
}

public handleStopResponse(): void {
  this.stopStreaming = true;
}
}
