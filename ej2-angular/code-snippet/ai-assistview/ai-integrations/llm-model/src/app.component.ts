import { Component, ViewChild } from '@angular/core';
import { AIAssistViewModule, AIAssistViewComponent, ToolbarSettingsModel, PromptRequestEventArgs, ToolbarItemClickedEventArgs } from '@syncfusion/ej2-angular-interactive-chat';
import { marked } from 'marked';

// Initialize AI AssistView Component
@Component({
    imports: [AIAssistViewModule],
    standalone: true,
    selector: 'app-root',
    template: `
        <div ejs-aiassistview
             id="aiAssistView"
             #aiAssistViewComponent
             [promptSuggestions]="promptSuggestions"
             [toolbarSettings]="toolbarSettings"
             (promptRequest)="onPromptRequest($event)"
             (stopRespondingClick)="handleStopResponse()">
            <ng-template #bannerTemplate>
                <div class="banner-content">
                    <div class="e-icons e-assistview-icon"></div>
                    <h3>How can I help you today?</h3>
                </div>
            </ng-template>
        </div>
    `
})
export class AppComponent {
    @ViewChild('aiAssistViewComponent')
    public aiAssistViewComponent!: AIAssistViewComponent;

    public promptSuggestions: string[] = [
        'How do I prioritize my tasks?',
        'How can I improve my time management skills?'
    ];
    public toolbarSettings: ToolbarSettingsModel = {
        items: [ { type: 'Button', iconCss: 'e-icons e-refresh', align: 'Right' } ],
        itemClicked: (args: ToolbarItemClickedEventArgs) =>{
            this.aiAssistViewComponent.prompts = [];
            this.aiAssistViewComponent.promptSuggestions = this.promptSuggestions;
        }
    };

    private stopStreaming: boolean = false;
    public handleStopResponse = () => {
        this.stopStreaming = true;
    }

    //  Handle user prompt: call local LLM via Ollama
    public onPromptRequest(args: PromptRequestEventArgs): void {
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
                            this.aiAssistViewComponent.addPromptResponse(htmlResponse, i === responseLength);
                            this.aiAssistViewComponent.scrollToBottom();
                        }
                        await new Promise(resolve => setTimeout(resolve, 15)); // Delay before the next chunk
                    }
                    this.aiAssistViewComponent.promptSuggestions = this.promptSuggestions;
                }

                if (response) {
                    this.stopStreaming = false;
                    await streamResponse.call(this, reply.response);
                }
            } catch (error) {
                this.aiAssistViewComponent.addPromptResponse(defaultResponse, true);
                this.aiAssistViewComponent.promptSuggestions = this.promptSuggestions;
            }
        }, 3000);
    }
}