import { Component } from '@angular/core';
import { InlineAIAssistModule } from '@syncfusion/ej2-angular-interactive-chat';
import { CloseEventArgs } from '@syncfusion/ej2-popups';

@Component({
    imports: [InlineAIAssistModule ],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    public onClose = (args: CloseEventArgs) => {
        // Your required action here
    };
}
