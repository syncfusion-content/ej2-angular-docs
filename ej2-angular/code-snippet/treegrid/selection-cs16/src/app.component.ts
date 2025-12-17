import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule} from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import generateGroceriesData from './datasource';
import { TreeGridComponent} from '@syncfusion/ej2-angular-treegrid'
@Component({
    imports: [
        TreeGridModule,
    ],
    standalone: true,
    styleUrls: ['app.style.css'],
    selector: 'app-container',
    templateUrl: 'app.component.html',
})
export class rowspan implements OnInit {
    public data: Object[] = [];
    @ViewChild('Treegrid')
    public treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = generateGroceriesData();
    }
}