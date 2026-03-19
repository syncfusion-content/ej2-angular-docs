import { employeeData } from './datasource';
import { Component, OnInit } from '@angular/core';
import { DetailRowService, GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule ],
    providers: [DetailRowService],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = employeeData;
    }
}
