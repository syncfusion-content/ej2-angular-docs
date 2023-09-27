import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DiagramModule, MindMapService, DataBindingService } from '@syncfusion/ej2-angular-diagrams';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, DiagramModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [MindMapService, DataBindingService]
})
export class AppModule { }