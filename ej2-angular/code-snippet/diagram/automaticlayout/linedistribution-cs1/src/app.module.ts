import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DiagramModule, ComplexHierarchicalTreeService, DataBindingService, LineDistributionService, LayoutAnimationService } from '@syncfusion/ej2-angular-diagrams';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, DiagramModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ComplexHierarchicalTreeService, DataBindingService, LineDistributionService, LayoutAnimationService]
})
export class AppModule { }