import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, EditService} from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        FormsModule,
        TimePickerModule,
        FormsModule,
        TextBoxModule,
        ButtonModule 
        
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [EditService]
})
export class AppModule { }
