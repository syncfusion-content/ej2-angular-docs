import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit } from '@angular/core';
import { foodInformation } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

,
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [height]='315'>
                    <e-columns>
                        <e-column field='FoodName' headerText='Food Name' width=150></e-column>
                        <e-column field='Protein' headerText='Protein' textAlign='Right' width=120></e-column>
                        <e-column field='Fat' headerText='Fat' textAlign='Right' width=80></e-column>
                        <e-column field='Carbohydrate' headerText='Carbohydrate' textAlign='Right' width=120></e-column>
                        <e-column headerText='Calories Intake' textAlign='Right' [valueAccessor]='totalCalories' width=150></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];

    public totalCalories = (field: string, data: { Protein: number, Fat: number, Carbohydrate: number }, column: Object): number => {
        return data.Protein * 4 + data.Fat * 9 + data.Carbohydrate * 4;
    }

    ngOnInit(): void {
        this.data = foodInformation;
    }
}




