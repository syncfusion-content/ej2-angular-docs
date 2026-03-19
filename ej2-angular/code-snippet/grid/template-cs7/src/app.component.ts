import { employeeData } from './datasource';
import { Component, OnInit } from '@angular/core';
import { ButtonModule, ChipListModule } from '@syncfusion/ej2-angular-buttons';
import { FilterService, GridModule, GroupService, PageService, SortService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [  ButtonModule, GridModule, ChipListModule],
    providers: [PageService, SortService, FilterService, GroupService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px'>
                    <e-columns>
                        <e-column field='LastName' headerText='Last Name' width=150></e-column>
                        <e-column field='City' headerText='City' width=150></e-column>
                        <e-column field='FirstName' headerText='FirstName' width=150>
                            <ng-template #template let-data>
                                <div class="chip">
                                    <ejs-chiplist id="chip" [text]="data.FirstName"></ejs-chiplist>
                                </div>
                            </ng-template>
                        </e-column>
                    </e-columns>
                </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = employeeData;
    }
}
