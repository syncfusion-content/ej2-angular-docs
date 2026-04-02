import { Component, ViewChild } from '@angular/core';
import { InlineAIAssistModule, InlineAIAssistComponent, InlinePromptRequestEventArgs, ResponseSettingsModel, ResponseItemSelectEventArgs, InlineToolbarSettingsModel, ToolbarItemClickEventArgs } from '@syncfusion/ej2-angular-interactive-chat';
import { marked } from 'marked';

// Initialize AI AssistView Component
@Component({
    imports: [InlineAIAssistModule],
    standalone: true,
    selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('inlineAssistComponent')
  public inlineAssistComponent!: InlineAIAssistComponent;

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

    private stopStreaming: boolean = false;
    public handleStopResponse = () => {
        this.stopStreaming = true;
    }

    //  Handle user prompt: call local LLM via Ollama
    public onPromptRequest(args: InlinePromptRequestEventArgs): void {
        setTimeout(async () => {
            let lastResponse: string = '';
            const defaultResponse: string = '⚠️ Something went wrong while connecting to the AI service. Please check your Ollama application running background.';
            try {
                // Send request to Ollama API
                const response = await fetch('http://localhost:11434/api/generate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        model: 'deepseek-r1',
                        prompt: `### Instruction:\nRespond in up to 5 lines.\n\n### Input:\n${args.prompt}`,
                        stream: false
                    })
                });
                const reply = await response.json();
                const responseUpdateRate = 10;

                // Stream AI response in chunks
                async function streamResponse(this: AppComponent, response: string) {
                    let i = 0;
                    const responseLength = response.length;
                    while (i < responseLength && !this.stopStreaming) {
                        lastResponse += response[i];
                        i++;
                        if (i % responseUpdateRate === 0 || i === responseLength) {
                            const htmlResponse = marked.parse(lastResponse);
                            this.inlineAssistComponent.addResponse(htmlResponse as string, i === responseLength);
                        }
                        await new Promise(resolve => setTimeout(resolve, 15)); // Delay before the next chunk
                    }
                }

                if (response) {
                    this.stopStreaming = false;
                    await streamResponse.call(this, reply.response);
                }
            } catch (error) {
                this.inlineAssistComponent.addResponse(defaultResponse, true);
            }
        }, 3000);
    }
}
