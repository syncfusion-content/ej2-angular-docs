import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { CategoryService, ColumnSeriesService, ExportService, LegendService, DataLabelService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';
@Component({
imports: [
         ChartModule,  ButtonModule
    ],

providers: [ CategoryService, ColumnSeriesService,ExportService, LegendService, DataLabelService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart #chart style='display:block;' id='chartcontainer' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title' [chartArea]='chartArea'>
    <e-series-collection>
        <e-series [dataSource]='data' type='Column' xName='x' yName='y' width=2>
        </e-series>
    </e-series-collection>
</ejs-chart>

<button ejs-button iconCss="e-icons e-export-icon" cssClass="e-flat" isPrimary=true (click)='onClick($event)' style="text-transform:none !important" id="togglebtn">EXPORT</button>`
})
export class AppComponent implements OnInit {
    public data: Object[] = [
        { x: 'DEU', y: 35.5 }, { x: 'CHN', y: 18.3 }, { x: 'ITA', y: 17.6 }, { x: 'JPN', y: 13.6 },
        { x: 'US', y: 12 }, { x: 'ESP', y: 5.6 }, { x: 'FRA', y: 4.6 }, { x: 'AUS', y: 3.3 },
        { x: 'BEL', y: 3 }, { x: 'UK', y: 2.9 }
    ];
    //Initializing Primary X Axis
    public primaryXAxis: Object = {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
    };
    //Initializing Primary Y Axis
    public primaryYAxis: Object = {
        title: 'Measurements',
        labelFormat: '{value}GW',
        minimum: 0,
        maximum: 40,
        interval: 10,
        lineStyle: {width : 0},
        minorTickLines: {width: 0},
        majorTickLines: {width : 0},
    };
    public chartArea: Object = {
        border: {
            width: 0
        }
    };

    public title: string = 'Top 10 Countries Using Solar Power';

    public onClick(e: Event): void {
        let svg: any = document.querySelector("#chartcontainer_svg");
        var svgData = new XMLSerializer().serializeToString(svg);
        var canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        var svgSize = svg.getBoundingClientRect();
        canvas.width = svgSize.width;
        canvas.height = svgSize.height;
        let ctx: any = canvas.getContext("2d");
        var img = document.createElement("img");
        img.setAttribute("src", "data:image/svg+xml;base64," + btoa(svgData));
        img.onload = function() {
          ctx.drawImage(img, 0, 0);
          var imagedata = canvas.toDataURL("image/png");
          console.log(imagedata); // printed base64 in console
          canvas.remove();
        };
    }
    ngOnInit(): void {

    }
}
