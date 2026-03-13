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
					<e-trendline type="Linear" width="3" name="Trend" [linearGradient]="trendlineGradient"></e-trendline>
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
	public trendlineGradient?: Object;
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
		this.trendlineGradient = {
			x1: 0, y1: 0,
			x2: 1, y2: 0,
			gradientColorStop: [
				{ color: '#F97316', offset: 0, opacity: 1 },
				{ color: '#4F46E5', offset: 100, opacity: 1 }
			]
		};
		this.legendSettings = { visible: true };
		this.title = 'Retail Orders Processed';
	}
}



