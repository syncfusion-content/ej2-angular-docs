import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { HeatMapComponent } from '@syncfusion/ej2-angular-heatmap';

@Component({
    selector: 'my-app',
    template:
        `<ejs-heatmap #heatmap id='container' style="display:block;" [dataSource]='dataSource' [xAxis]='xAxis' [yAxis]='yAxis'
       [titleSettings]='titleSettings' [allowSelection]='allowSelection'>
        </ejs-heatmap>
        <button id='selection' (click)='clearSelection()'>Clear Selection</button>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild('heatmap')
    public heatmapObj?: HeatMapComponent;

    public allowSelection: boolean = true;
    public clearSelection() {
        this.heatmapObj?.clearSelection();
    }
    public dataSource: Object[] = [
        [73, 39, 26, 39, 94, 0],
        [93, 58, 53, 38, 26, 68],
        [99, 28, 22, 4, 66, 90],
        [14, 26, 97, 69, 69, 3],
        [7, 46, 47, 47, 88, 6],
        [41, 55, 73, 23, 3, 79],
        [56, 69, 21, 86, 3, 33],
        [45, 7, 53, 81, 95, 79],
        [60, 77, 74, 68, 88, 51],
        [25, 25, 10, 12, 78, 14],
        [25, 56, 55, 58, 12, 82],
        [74, 33, 88, 23, 86, 59]];
    public titleSettings: Object = {
        text: 'Sales Revenue per Employee (in 1000 US$)',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'Segoe UI'
        }
    };
    public xAxis: Object = {
        labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven',
            'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin', 'Mario'],
    };
    public yAxis: Object = {
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
    };
}