import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AggregateService, GridComponent, GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule ],
    providers: [AggregateService],
    standalone: true,
    selector: 'app-root',
    templateUrl: `app.template.html`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }
    dataBound() {
        (this.grid as GridComponent).getHeaderContent().append((this.grid as GridComponent).getFooterContent());
    }
}