import { Component, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SpeechToTextModule, SpeechToTextComponent, TextAreaModule, TranscriptChangedEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [
        SpeechToTextModule, TextAreaModule, FormsModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render SpeechToText component. -->
    <div class="speechText-container">
        <button #speechtotext ejs-speechtotext [transcript]="transcript" (transcriptChanged)="onTranscriptChanged($event)"></button>
        <ejs-textarea #outputTextarea id="textareaInst" [(value)]="transcript" rows="5" cols="50" resizeMode="None" placeholder="Transcribed text will be shown here..."></ejs-textarea>
    </div>`
})

export class AppComponent {
    @ViewChild('speechtotext') speechtotext!: SpeechToTextComponent;
    public transcript: string = 'Hi, hello! How are you?';
    constructor(private cdr: ChangeDetectorRef) {}

    onTranscriptChanged(args: TranscriptChangedEventArgs): void {
        this.transcript = this.speechtotext.transcript;
        this.cdr.detectChanges();
    }
 }
