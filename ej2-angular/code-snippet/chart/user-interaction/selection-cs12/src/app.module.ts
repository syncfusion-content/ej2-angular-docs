import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule} from '@syncfusion/ej2-angular-charts';
import { CategoryService, ColumnSeriesService} from '@syncfusion/ej2-angular-charts';
import { LegendService, SelectionService } from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ CategoryService, ColumnSeriesService, LegendService, SelectionService]
})
export class AppModule { }