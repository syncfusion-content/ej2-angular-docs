import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule, SortService, FilterService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';
import { data } from './datasource';

@Component({
    imports: [GridModule, CommonModule, SliderModule],
    providers: [SortService, FilterService, ToolbarService],
    standalone: true,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['styles.css']
})
export class AppComponent implements OnInit {
    public data?: Object[];
    public toolbar?: string[];
    public domVirtualizationSettings?: Object;
    public bufferValue: number = 5;
    public min: number = 1;
    public max: number = 20;
    public step: number = 1;

    public ngOnInit(): void {
        this.data = data;
        this.toolbar = ['Search'];
        this.domVirtualizationSettings = {
            rowBuffer: this.bufferValue
        };
    }

    public onBufferChange(args: any): void {
        this.bufferValue = args.value;
        if (this.domVirtualizationSettings) {
            this.domVirtualizationSettings = {
                rowBuffer: this.bufferValue
            };
        }
    }
}
