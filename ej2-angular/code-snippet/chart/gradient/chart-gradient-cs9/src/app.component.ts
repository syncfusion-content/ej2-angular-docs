import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { CategoryService,  LineSeriesService, TrendlinesService, SplineSeriesService, LegendService } from '@syncfusion/ej2-angular-charts';



import { Component, OnInit } from '@angular/core';
import { OrdersData } from './datasource';

@Component({
	imports: [ChartModule],
	providers: [CategoryService, LineSeriesService, SplineSeriesService, LegendService,TrendlinesService],
	standalone: true,
	selector: 'app-container',
	template: `<ejs-chart id="chart-container" [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis" [title]="title" [legendSettings]="legendSettings">
		<e-series-collection>
			<e-series [dataSource]="ordersData" type="Spline" xName="Month" name="Orders" yName="Orders" [marker]="marker">
				<e-trendlines>
					<e-trendline type="Linear" width="3" name="Trend" [radialGradient]="radialGradient"></e-trendline>
				</e-trendlines>
			</e-series>
		</e-series-collection>
	</ejs-chart>`
})
export class AppComponent implements OnInit {
	public primaryXAxis?: Object;
	public primaryYAxis?: Object;
	public ordersData?: Object[];
	public marker?: Object;
	public radialGradient?: Object;
	public legendSettings?: Object;
	public title?: string;
	ngOnInit(): void {
		this.ordersData = OrdersData;
		this.primaryXAxis = {
			valueType: 'Category',
			majorGridLines: { width: 0 }
		};
		this.primaryYAxis = {
			lineStyle: { width: 0 },
			majorTickLines: { width: 0 }
		};
		this.marker = { visible: true };
		this.radialGradient = {
            cx: 0.5, cy: 0.5,
            fx: 0.5, fy: 0.5, r: 0.5,
            gradientColorStop: [
                { color: '#FFFF00', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
                { color: '#7C3AED', offset: 100, opacity: 0.95, lighten: 0, brighten: 0.9 }
            ]
        };
		this.legendSettings = { visible: true };
		this.title = 'Retail Orders Processed';
	}
}



