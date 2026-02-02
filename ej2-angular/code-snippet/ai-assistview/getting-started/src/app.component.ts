import { AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';

import { Component } from '@angular/core';

@Component({
    imports: [ AIAssistViewModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AI AssistView component
    template: `<div ejs-aiassistview id='aiAssistView'></div>`
})

export class AppComponent {

}
