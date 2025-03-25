import { Component, ViewChild } from '@angular/core';

import { SpeechToTextModule, SpeechToTextComponent, TextAreaComponent, TextAreaModule, TranscriptChangedEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [
        SpeechToTextModule, TextAreaModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render SpeechToText component. -->
    <div class="speechText-container">
        <div class="actions" >
            <button id="startListening" class="e-btn" (click)="startListening()">Start Listening</button>
            <button id="stopListening" class="e-btn" (click)="stopListening()">Stop Listening</button>
        </div>
        <button #speechtotext ejs-speechtotext (transcriptChanged)="onTranscriptChange($event)"></button>
        <ejs-textarea #outputTextarea id="textareaInst" value="" rows="5" cols="50" resizeMode="None" placeholder="Transcribed text will be shown here..."></ejs-textarea>
    </div>`
})

export class AppComponent {
    @ViewChild('speechtotext') speechToText!: SpeechToTextComponent;
    @ViewChild('outputTextarea') outputTextarea!: TextAreaComponent;
    onTranscriptChange(args: TranscriptChangedEventArgs): void {
        this.outputTextarea.value = args.transcript;
    }
    startListening(): void {
        this.speechToText.startListening();
    }
    stopListening(): void {
        this.speechToText.stopListening();
    }
 }
