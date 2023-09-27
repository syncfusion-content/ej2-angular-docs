import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DiagramModule, OverviewModule, DataBindingService, HierarchicalTreeService } from '@syncfusion/ej2-angular-diagrams';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, DiagramModule, OverviewModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [DataBindingService, HierarchicalTreeService]
})
export class AppModule { }