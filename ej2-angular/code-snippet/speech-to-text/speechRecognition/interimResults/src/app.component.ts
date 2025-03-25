import { Component, ViewChild } from '@angular/core';

import { SpeechToTextModule, TextAreaComponent, TextAreaModule, TranscriptChangedEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [
        SpeechToTextModule, TextAreaModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render SpeechToText component. -->
    <div class="speechText-container">
        <button #speechtotext ejs-speechtotext (transcriptChanged)="onTranscriptChange($event)" [allowInterimResults]="false"></button>
        <ejs-textarea #outputTextarea id="textareaInst" value="" rows="5" cols="50" resizeMode="None" placeholder="Transcribed text will be shown here..."></ejs-textarea>
    </div>`
})

export class AppComponent {
    @ViewChild('outputTextarea') outputTextarea!: TextAreaComponent;
    onTranscriptChange(args: TranscriptChangedEventArgs): void {
        this.outputTextarea.value = args.transcript;
    }
}
