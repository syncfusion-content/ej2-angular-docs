import { Component } from '@angular/core';

import { SpeechToTextModule, TranscriptChangedEventArgs, ErrorEventArgs, StartListeningEventArgs, StopListeningEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [
        SpeechToTextModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render SpeechToText component. -->
    <div class="speechText-container">
        <button ejs-speechtotext (created)="onCreated()" (transcriptChanged)="onTranscriptChange($event)" (onStart)="onListeningStart($event)" (onStop)="onListeningStop($event)" (onError)="onErrorHandler($event)"></button>
    </div>`
})

export class AppComponent {
    onTranscriptChange(args: TranscriptChangedEventArgs): void {
        //your required action here
    }
    onListeningStart(args: StartListeningEventArgs): void {
        //your required action here
    }
    onListeningStop(args: StopListeningEventArgs): void {
        //your required action here
    }
    onErrorHandler(args: ErrorEventArgs): void {
        //your required action here
    }
    onCreated(): void {
        //your required action here
    }
}
