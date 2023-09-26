

import { Component } from '@angular/core';
import { SpinSettingsModel, AnimationSettingsModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<button ejs-progressbutton content='Slide Left' [enableProgress]='true' [animationSettings]= 'animationSettings' [spinSettings]='spinSettings'></button>`
})

export class AppComponent {
    public spinSettings : SpinSettingsModel = { position: 'Center' };
    public animationSettings : AnimationSettingsModel = { effect:'SlideLeft', duration: 500, easing: 'linear' };
}


