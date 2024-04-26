import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule,
    ],

,
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='300'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                        <e-column field="Rating" headerText="Customer Rating" width="120">
                            <ng-template #template let-data>
                            <div class="rate">
                                <div class="rating">
                                <span
                                    *ngFor="let i of item"
                                    [ngClass]="{
                                    checked: isRatingGreater(data.Rating, i),
                                    star: true
                                    }"
                                ></span>
                                </div>
                            </div>
                            </ng-template>
                        </e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public item: number[] = [1, 2, 3, 4, 5];

    isRatingGreater(dataRating: number, comparisonValue: number): boolean {
      return dataRating >= comparisonValue;
    }

    ngOnInit(): void {
        this.data = data;
    }
}



