


import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'my-app',
    template:
       `<ejs-heatmap id='container' style="display:block;" [dataSource]='dataSource' [xAxis]='xAxis'  [yAxis]='yAxis'
       [titleSettings]='titleSettings' [paletteSettings]='paletteSettings' [legendSettings]='legendSettings' [cellSettings]='cellSettings'>
        </ejs-heatmap>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{

dataSource: Object[] = [
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

    titleSettings: Object = {
        text: 'Sales Revenue per Employee (in 1000 US$)',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'Segoe UI'
        }
    };
    xAxis: Object = {
        labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven',
            'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin',   'Mario'],
    };
    yAxis: Object = {
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
    };
    cellSettings: Object = {
        showLabel: false,
    };
    paletteSettings: Object = {
        palette: [
            { value: 0, color: '#C2E7EC' },
            { value: 10, color: '#AEDFE6' },
            { value: 20, color: '#9AD7E0' },
            { value: 30, color: '#72C7D4' },
            { value: 40, color: '#5EBFCE' },
            { value: 50, color: '#4AB7C8' },
            { value: 60, color: '#309DAE' },
            { value: 70, color: '#2B8C9B' },
            { value: 80, color: '#206974' },
            { value: 90, color: '#15464D' },
            { value: 100, color: '#000000' },
        ],
        type: 'Fixed'
    };
    legendSettings: Object = {
        position: 'Bottom',
        width: '75%',
        enableSmartLegend: true,
        toggleVisibilty: 'true'
    };
}



