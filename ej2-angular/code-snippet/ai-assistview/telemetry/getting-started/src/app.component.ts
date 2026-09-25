import { Component, ViewChild } from '@angular/core';
import { AIAssistViewModule, AIAssistViewComponent, PromptRequestEventArgs, ToolbarSettingsModel, TelemetrySettingsModel } from '@syncfusion/ej2-angular-interactive-chat';

@Component({
    imports: [AIAssistViewModule],
    standalone: true,
    selector: 'app-root',
    template: `
    <div ejs-aiassistview
        #telemetryAIAssistView
        id="aiAssistView"
        [promptSuggestions]="promptSuggestions"
        [enableStreaming]="enableStreaming"
        [toolbarSettings]="toolbarSettings"
        [telemetrySettings]="telemetrySettings"
        (promptRequest)="onPromptRequest($event)">
        <ng-template #bannerTemplate>
            <div class="banner-content">
                <div class="e-icons e-assistview-icon"></div>
                <h3>AI Telemetry</h3>
                <i>Send a prompt or pick a suggestion to see telemetry metrics for the turn.</i>
            </div>
        </ng-template>
    </div>`
})
export class AppComponent {
    @ViewChild('telemetryAIAssistView')
    public telemetryAIAssistView!: AIAssistViewComponent;

    public enableStreaming: boolean = true;
    public promptSuggestions: string[] = [
        'Explain the basics of quantum computing.',
        'Suggest a healthy dinner recipe for tonight.',
        'How do I improve my public speaking skills?'
    ];
    public toolbarSettings: ToolbarSettingsModel = {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: () => {
            if (this.telemetryAIAssistView) {
                this.telemetryAIAssistView.prompts = [];
                this.telemetryAIAssistView.promptSuggestions = [
                    'Explain the basics of quantum computing.',
                    'Suggest a healthy dinner recipe for tonight.',
                    'How do I improve my public speaking skills?'
                ];
            }
        }
    };
    public telemetrySettings: TelemetrySettingsModel = { enable: true };

    public onPromptRequest = (args: PromptRequestEventArgs): void => {
        setTimeout(() => {
            const defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service and pass usage data through the addPromptResponse third parameter to populate the telemetry report.';
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