import { Component, ViewChild } from '@angular/core';

import { SpeechToTextModule, TextAreaComponent, TextAreaModule, TranscriptChangedEventArgs, TooltipSettingsModel } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [
        SpeechToTextModule, TextAreaModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render SpeechToText component. -->
    <div class="speechText-container">
        <button ejs-speechtotext (transcriptChanged)="onTranscriptChange($event)" [tooltipSettings]="tooltipSettings"></button>
        <ejs-textarea #outputTextarea id="textareaInst" value="" rows="5" cols="50" resizeMode="None" placeholder="Transcribed text will be shown here..."></ejs-textarea>
    </div>`
})

export class AppComponent {
    @ViewChild('outputTextarea') outputTextarea!: TextAreaComponent;
    public tooltipSettings: TooltipSettingsModel = {
        position: 'BottomRight',
        content: 'Click the button to start recognition',
        stopContent: 'Click the button to stop recognition'
    };
    onTranscriptChange(args: TranscriptChangedEventArgs): void {
        this.outputTextarea.value = args.transcript;
     }
 }
