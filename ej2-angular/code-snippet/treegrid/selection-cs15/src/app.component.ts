import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule, VirtualScrollService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import generateGroceriesData from './datasource';
import { TreeGridComponent, AggregateService } from '@syncfusion/ej2-angular-treegrid'
@Component({
    imports: [
        TreeGridModule,
    ],
    providers: [VirtualScrollService, AggregateService],
    standalone: true,
    styleUrls: ['app.style.css'],
    selector: 'app-container',
    templateUrl: 'app.component.html',
})
export class rowspan implements OnInit {
    public data: Object[] = [];
    @ViewChild('Treegrid')
    public treegrid?: TreeGridComponent;
    calculateSelectedTotal(): any {
        const checkedRecords = this.treegrid?.getCheckedRecords();
        return checkedRecords?.reduce((sum: number, rec: any) => sum + (parseFloat(rec.price) || 0), 0);
    }

    updateFooterTotal(): void {
        const totalPrice: any = this.calculateSelectedTotal();
        const footerEl = this.treegrid?.getFooterContent().querySelector('.selected-total');
        if (footerEl) {
            footerEl.innerHTML = `Total Price of Selected Rows: <strong>$${totalPrice.toFixed(2)}</strong>`;
        }
    }
    ngOnInit(): void {
        this.data = generateGroceriesData();
    }
}