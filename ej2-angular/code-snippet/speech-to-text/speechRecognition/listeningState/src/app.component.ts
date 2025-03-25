import { Component } from '@angular/core';
import { SpeechToTextModule, SpeechToTextState, StopListeningEventArgs, StartListeningEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [
        SpeechToTextModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render SpeechToText component. -->
        <div id="container">
            <div id="status-box-container" class="status-box inactive">
                <span>Status: <strong id="status-text">Inactive</strong></span>
            </div>
            <button #speechtotext ejs-speechtotext (onStart)="updateListeningState($event)" (onStop)="updateListeningState($event)" [listeningState]="listeningState" id="speechtotext_default"></button>
            <div class="waveform-container">
                <div id="waveform-item" class="waveform" style="display: none;">
                    <span></span><span></span><span></span><span></span><span></span>
                </div>
                <p id="instruction-text">Click the button to start listening.</p>
            </div>
        </div>`
})

export class AppComponent {
    public listeningState: SpeechToTextState = SpeechToTextState.Inactive;
    updateListeningState(args: StartListeningEventArgs | StopListeningEventArgs): void {
        const state = args.listeningState;
        const statusBox = document.getElementById('status-box-container');
        const statusTextElement = document.getElementById('status-text');
        const waveform = document.getElementById('waveform-item');
        const instructionText = document.getElementById('instruction-text');

        if (statusTextElement) {
            statusTextElement.innerText = state;
        }

        if (statusBox && waveform && instructionText) {
            if (state === "Listening") {
                statusBox.className = "status-box listening";
                waveform.style.display = "flex";
                instructionText.innerText = "Listening... Speak now!";
            } else if (state === "Stopped") {
                statusBox.className = "status-box stopped";
                waveform.style.display = "none";
                instructionText.innerText = "Recognition Stopped.";
            } else {
                statusBox.className = "status-box inactive";
                waveform.style.display = "none";
                instructionText.innerText = "Click the button to start listening.";
            }
        }
    }
}
