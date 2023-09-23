


import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-treemap id='container' style='display: block;' height='350px' [dataSource]='data' equalColorValuePath='Count' weightValuePath='Count' [leafItemSettings]='leafItemSettings'>
    </ejs-treemap>`
})
export class AppComponent {
    public data: object[] = [
        { Title: 'State wise International Airport count in South America', State: 'Brazil', Count: 25 },
        { Title: 'State wise International Airport count in South America', State: 'Colombia', Count: 12 },
        { Title: 'State wise International Airport count in South America', State: 'Argentina', Count: 9 },
        { Title: 'State wise International Airport count in South America', State: 'Ecuador', Count: 7 },
        { Title: 'State wise International Airport count in South America', State: 'Chile', Count: 6 },
        { Title: 'State wise International Airport count in South America', State: 'Peru', Count: 3 },
        { Title: 'State wise International Airport count in South America', State: 'Venezuela', Count: 3 },
        { Title: 'State wise International Airport count in South America', State: 'Bolivia', Count: 2 },
        { Title: 'State wise International Airport count in South America', State: 'Paraguay', Count: 2 },
        { Title: 'State wise International Airport count in South America', State: 'Uruguay', Count: 2 },
        { Title: 'State wise International Airport count in South America', State: 'Falkland Islands',Count: 1 },
        { Title: 'State wise International Airport count in South America', State: 'French Guiana', Count:1 },
        { Title: 'State wise International Airport count in South America', State: 'Guyana', Count: 1 },
        { Title: 'State wise International Airport count in South America', State: 'Suriname', Count: 1 },
    ];
    public leafItemSettings: object = {
        labelPath: 'State',
        colorMapping: [
            {
                value: 25,
                color: '#634D6F'
            },
            {
                value: 12,
                color: '#B34D6D'
            },
            {
                value: 9,
                color: '#557C5C'
            },
            {
                value: 7,
                color: '#44537F'
            },
            {
                value: 6,
                color: '#637392'
            },
            {
                value: 3,
                color: '#7C754D'
            },
            {
                value: 2,
                color: '#2E7A64'
            },
            {
                value: 1,
                color: '#95659A'
            },
        ]
    };
}



