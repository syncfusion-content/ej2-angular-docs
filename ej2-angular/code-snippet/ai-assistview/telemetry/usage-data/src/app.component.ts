import { Component, ViewChild } from '@angular/core';
import { AIAssistViewModule, AIAssistViewComponent, PromptRequestEventArgs, TelemetrySettingsModel, TelemetryData } from '@syncfusion/ej2-angular-interactive-chat';

@Component({
    imports: [AIAssistViewModule],
    standalone: true,
    selector: 'app-root',
    template: `
    <div ejs-aiassistview
        #telemetryAIAssistView
        id="aiAssistView"
        [promptSuggestions]="promptSuggestions"
        [telemetrySettings]="telemetrySettings"
        (promptRequest)="onPromptRequest($event)">
        <ng-template #bannerTemplate>
            <div class="banner-content">
                <div class="e-icons e-assistview-icon"></div>
                <h3>AI Telemetry</h3>
                <i>Pass usage data through the third parameter of addPromptResponse to enrich reports.</i>
            </div>
        </ng-template>
    </div>`
})
export class AppComponent {
    @ViewChild('telemetryAIAssistView')
    public telemetryAIAssistView!: AIAssistViewComponent;

    public promptSuggestions: string[] = [
        'Explain the basics of quantum computing.',
        'Suggest a healthy dinner recipe for tonight.',
        'How do I improve my public speaking skills?'
    ];
    public telemetrySettings: TelemetrySettingsModel = { enable: true };

    public onPromptRequest = (args: PromptRequestEventArgs): void => {
        setTimeout(() => {
            const defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            if (this.telemetryAIAssistView) {
                const usageData: TelemetryData = {
                    model: 'gpt-4o-mini',
                    inputTokens: 128,
                    outputTokens: 96,
                    reasoningTokens: 24,
                    cachedInputTokens: 16
                };
                this.telemetryAIAssistView.addPromptResponse(defaultResponse, true, usageData);
                this.telemetryAIAssistView.promptSuggestions = [
                    'Explain the basics of quantum computing.',
                    'Suggest a healthy dinner recipe for tonight.',
                    'How do I improve my public speaking skills?'
                ];
            }
        }, 1000);
    };
}