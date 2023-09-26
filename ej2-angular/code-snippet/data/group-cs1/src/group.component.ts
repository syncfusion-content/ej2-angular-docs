import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: '[group]',
    template: `
    <tr><td>{{data.field}} - {{data.key}}</td><td></td><td></td></tr>
    <tr *ngFor="let item of data.items">
    <td>{{item.OrderID}}</td><td>{{item.CustomerID}}</td><td>{{item.EmployeeID}}</td>
    </tr>
    `,
    styles: [`
            td, th {
                border-style: solid;
                border-width: 1px 0 0;
                border-color: #e0e0e0;
                display: table-cell;
                font-size: 14px;
                line-height: 20px;
                overflow: hidden;
                padding: 8px 21px;
                vertical-align: middle;
                white-space: nowrap;
                width: auto;
            }`]
})
export class GroupComponent implements OnInit {
    @Input() public data?: object | any;
    ngOnInit() { }
}
