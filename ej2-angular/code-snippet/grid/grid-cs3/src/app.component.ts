import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='300px'>
               </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = data;
    }
}
