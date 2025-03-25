import { Component, ViewChild } from '@angular/core';

import { SpeechToTextModule, TextAreaComponent, TextAreaModule, TranscriptChangedEventArgs, ButtonSettingsModel } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [
        SpeechToTextModule, TextAreaModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render SpeechToText component. -->
    <div class="speechText-container">
        <button ejs-speechtotext (transcriptChanged)="onTranscriptChange($event)" [buttonSettings]="buttonSettings"></button>
        <ejs-textarea #outputTextarea id="textareaInst" value="" rows="5" cols="50" resizeMode="None" placeholder="Transcribed text will be shown here..."></ejs-textarea>
    </div>`
})

export class AppComponent {
    @ViewChild('outputTextarea') outputTextarea!: TextAreaComponent;
    public buttonSettings: ButtonSettingsModel = {
        content: 'Start',
        stopContent: 'Stop',
        iconCss: 'e-icons e-play',
        stopIconCss: 'e-icons e-pause',
        iconPosition: 'Right',
        isPrimary: true
     };
    onTranscriptChange(args: TranscriptChangedEventArgs): void {
        this.outputTextarea.value = args.transcript;
     }
 }
