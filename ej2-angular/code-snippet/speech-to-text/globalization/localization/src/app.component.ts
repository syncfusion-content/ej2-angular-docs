import { Component, ViewChild } from '@angular/core';

import { SpeechToTextModule, TextAreaComponent, TextAreaModule, TranscriptChangedEventArgs } from '@syncfusion/ej2-angular-inputs';
import { L10n } from '@syncfusion/ej2-base';
@Component({
    imports: [
        SpeechToTextModule, TextAreaModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render SpeechToText component. -->
    <div class="speechText-container">
        <button ejs-speechtotext (transcriptChanged)="onTranscriptChange($event)" [locale]='locale'></button>
        <ejs-textarea #outputTextarea id="textareaInst" value="" rows="5" cols="50" resizeMode="None" placeholder="Transcribed text will be shown here..."></ejs-textarea>
    </div>`
})

export class AppComponent {
    @ViewChild('outputTextarea') outputTextarea!: TextAreaComponent;
    public locale?: string;
    public ngOnInit(): void {
        L10n.load({
            'de': {
                "speech-to-text": {
                    "abortedError": "Die Spracherkennung wurde abgebrochen.",
                    "audioCaptureError": "Kein Mikrofon erkannt. Stellen Sie sicher, dass Ihr Mikrofon angeschlossen ist.",
                    "defaultError": "Ein unbekannter Fehler ist aufgetreten.",
                    "networkError": "Netzwerkfehler aufgetreten. Überprüfen Sie Ihre Internetverbindung.",
                    "noSpeechError": "Keine Sprache erkannt. Bitte sprechen Sie in das Mikrofon.",
                    "notAllowedError": "Mikrofonzugriff verweigert. Erlauben Sie Mikrofonberechtigungen.",
                    "serviceNotAllowedError": "Der Spracherkennungsdienst ist in diesem Kontext nicht erlaubt.",
                    "unsupportedBrowserError": "Der Browser unterstützt die SpeechRecognition API nicht.",
                    "startAriaLabel": "Drücken Sie, um zu sprechen und Ihre Worte zu transkribieren",
                    "stopAriaLabel": "Drücken Sie, um das Sprechen zu beenden und die Transkription zu stoppen",
                    "startTooltipText": "Zuhören starten",
                    "stopTooltipText": "Zuhören beenden"
                }
            }
        });
        this.locale =  'de';
    };
    onTranscriptChange(args: TranscriptChangedEventArgs): void {
        this.outputTextarea.value = args.transcript;
     }
 }
