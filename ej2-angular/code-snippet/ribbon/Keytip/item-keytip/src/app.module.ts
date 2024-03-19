import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import Syncfusion Ribbon module from ribbon package.
import { RibbonModule, RibbonGroupButtonService, RibbonGalleryService, RibbonKeyTipService } from '@syncfusion/ej2-angular-ribbon';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, RibbonModule], // Registering EJ2 Ribbon Module.
    providers: [ RibbonGroupButtonService, RibbonGalleryService, RibbonKeyTipService ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }