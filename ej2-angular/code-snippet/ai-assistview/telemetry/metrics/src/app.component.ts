import { Component, ViewChild } from '@angular/core';
import { AIAssistViewModule, AIAssistViewComponent, PromptRequestEventArgs, TelemetrySettingsModel, TelemetryMetric } from '@syncfusion/ej2-angular-interactive-chat';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [AIAssistViewModule],
    template: `
        <ejs-aiassistview
            #telemetryAIAssistView
            id="aiAssistView"
            [promptSuggestions]="promptSuggestions"
            [telemetrySettings]="telemetrySettings"
            (promptRequest)="onPromptRequest($event)">
            <ng-template #bannerTemplate>
                <div class="banner-content">
                    <div class="e-icons e-assistview-icon"></div>
                    <h3>AI Telemetry</h3>
                    <i>Customize which metrics are shown in the tooltip using the metrics array.</i>
                </div>
            </ng-template>
        </ejs-aiassistview>
    `
})
export class App {
    @ViewChild('telemetryAIAssistView')
    public telemetryAIAssistView!: AIAssistViewComponent;
    public promptSuggestions: string[] = [
        'Explain the basics of quantum computing.',
        'Suggest a healthy dinner recipe for tonight.',
        'How do I improve my public speaking skills?'
    ];
    public telemetrySettings: TelemetrySettingsModel = {
        enable: true,
        metrics: [
            'duration',
            'model',
            'inputTokens',
            'outputTokens',
            'totalTokens'
        ] as TelemetryMetric[]
    };

    public onPromptRequest = (args: PromptRequestEventArgs): void => {
        setTimeout(() => {
            const defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            const telemetryData: TelemetryData = {
                model: 'gpt-4o',
                inputTokens: 128,
                outputTokens: 512
            };
            if (this.telemetryAIAssistView) {
                this.telemetryAIAssistView.addPromptResponse(defaultResponse, true, telemetryData);
                this.telemetryAIAssistView.promptSuggestions = [
                    'Explain the basics of quantum computing.',
                    'Suggest a healthy dinner recipe for tonight.',
                    'How do I improve my public speaking skills?'
                ];
            }
        }, 1000);
    };
}
