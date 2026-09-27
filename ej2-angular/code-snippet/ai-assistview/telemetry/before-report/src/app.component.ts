import { Component, ViewChild } from '@angular/core';
import { AIAssistViewModule, AIAssistViewComponent, PromptRequestEventArgs, TelemetrySettingsModel, TelemetryReport } from '@syncfusion/ej2-angular-interactive-chat';

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
                <i>The beforeReport callback intercepts and augments the telemetry report before render.</i>
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
    public telemetrySettings: TelemetrySettingsModel = {
        enable: true,
        beforeReport: (report: TelemetryReport) => {
            // Add custom attributes and suppress the report by returning null
            report.customAttributes = {
                region: 'us-east-1',
                tenant: 'acme',
                beta: true
            };
            return report;
        }
    };

    public onPromptRequest = (args: PromptRequestEventArgs): void => {
        setTimeout(() => {
            const defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            if (this.telemetryAIAssistView) {
                this.telemetryAIAssistView.addPromptResponse(defaultResponse, true);
                this.telemetryAIAssistView.promptSuggestions = [
                    'Explain the basics of quantum computing.',
                    'Suggest a healthy dinner recipe for tonight.',
                    'How do I improve my public speaking skills?'
                ];
            }
        }, 1000);
    };
}