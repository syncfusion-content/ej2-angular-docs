import { Component } from '@angular/core';
import { InlineAIAssistModule, InlinePromptRequestEventArgs } from '@syncfusion/ej2-angular-interactive-chat';


@Component({
    imports: [InlineAIAssistModule ],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    public onPromptRequest = (args: InlinePromptRequestEventArgs) => {
        // Your required action here
    };
}
