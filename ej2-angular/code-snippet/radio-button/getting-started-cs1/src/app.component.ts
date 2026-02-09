import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { Component } from '@angular/core';

@Component({
    imports: [RadioButtonModule],
    standalone: true,
    selector: 'app-root',
    template: ` <div class="e-section-control">
        <ul>
            <!-- To Render RadioButton. -->
            <li><ejs-radiobutton label="Option 1" name="default"></ejs-radiobutton></li>

            <li><ejs-radiobutton label="Option 2" name="default" checked="true"></ejs-radiobutton></li>
        </ul>
    </div>`
})

export class AppComponent { }
