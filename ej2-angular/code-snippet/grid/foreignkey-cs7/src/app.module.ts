import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, ForeignKeyService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ForeignKeyService]
})
export class AppModule { }
