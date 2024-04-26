import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeMapModule, TreeMapLegendService, TreeMapTooltipService, TreeMapAllModule } from '@syncfusion/ej2-angular-treemap'



import { Component } from '@angular/core';

@Component({
imports: [
         TreeMapModule, TreeMapAllModule
    ],

providers: [TreeMapLegendService, TreeMapTooltipService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-treemap id='container' style='display: block;' height='350px' [dataSource]='data' weightValuePath='Count'
    [leafItemSettings]='leafItemSettings'>
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
        labelPath: 'State'
    };
}


