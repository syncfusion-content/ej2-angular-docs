import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, FilterService, PageService} from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { MessageModule } from '@syncfusion/ej2-angular-notifications';


/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        ButtonModule,
        MessageModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [FilterService, PageService,]
})
export class AppModule { }
