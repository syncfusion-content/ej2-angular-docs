import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { AggregateService, GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule ],
    providers: [AggregateService],
    standalone: true,
    selector: 'app-root',
    templateUrl: 'app.template.html'
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = data;
    }
}
