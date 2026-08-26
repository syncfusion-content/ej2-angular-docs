import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule, SortService, FilterService, ToolbarService,DomVirtualizationService } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
    imports: [GridModule, CommonModule],
    providers: [SortService, FilterService, ToolbarService, DomVirtualizationService],
    standalone: true,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['styles.css']
})
export class AppComponent implements OnInit {
    public data?: Object[];
    public toolbar?: string[];
    public domVirtualizationSettings?: Object;

    public ngOnInit(): void {
        this.data = data;
        this.toolbar = ['Search'];
        this.domVirtualizationSettings = {
            rowBuffer: 5
        };
    }
}
