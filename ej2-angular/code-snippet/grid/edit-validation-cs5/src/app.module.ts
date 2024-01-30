import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, ToolbarService, PdfExportService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
<<<<<<<< HEAD:ej2-angular/code-snippet/diagram/connectors/connectorHitPadding-cs1/src/app.module.ts
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
========
>>>>>>>> remotes/origin/development:ej2-angular/code-snippet/grid/edit-validation-cs5/src/app.module.ts

/**
 * Module
 */
@NgModule({
    imports: [
<<<<<<<< HEAD:ej2-angular/code-snippet/diagram/connectors/connectorHitPadding-cs1/src/app.module.ts
        BrowserModule, DiagramModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ ]
========
        BrowserModule,
        GridModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PdfExportService, ToolbarService]
>>>>>>>> remotes/origin/development:ej2-angular/code-snippet/grid/edit-validation-cs5/src/app.module.ts
})
export class AppModule { }
