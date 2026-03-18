import { Component } from '@angular/core';
import { InlineAIAssistModule } from '@syncfusion/ej2-angular-interactive-chat';


@Component({
    imports: [InlineAIAssistModule ],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    public onCreated = () => {
        // Your required action here
    };
}
