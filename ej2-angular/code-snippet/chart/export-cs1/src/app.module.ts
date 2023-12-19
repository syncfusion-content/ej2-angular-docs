import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule} from '@syncfusion/ej2-angular-charts';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { CategoryService, ColumnSeriesService, ExportService, LegendService, DataLabelService} from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule,  ButtonModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ CategoryService, ColumnSeriesService,ExportService, LegendService, DataLabelService]
})
export class AppModule { }