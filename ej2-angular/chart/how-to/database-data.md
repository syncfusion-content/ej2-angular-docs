---
layout: post
title: How to Bind Chart Data from SQL Server in Angular Chart | Syncfusion
description: Learn here all about Database data in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Database data 
documentation: ug
domainurl: ##DomainURL##
---

# How to Bind Chart Data from SQL Server in Angular Chart

## Create the database table

Create a SQL Server table to hold the chart data.

```sql
CREATE TABLE ChartSales (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Date DATE NOT NULL,
    Product_A DECIMAL(18,2) NOT NULL,
    Product_B DECIMAL(18,2) NOT NULL,
    Product_C DECIMAL(18,2) NOT NULL
);

INSERT INTO ChartSales (Date, Product_A, Product_B, Product_C) VALUES
('2000-06-11', 10, 40, 80),
('2002-03-07', 40, 60, 82),
('2004-03-06', 15, 80, 119),
('2006-03-30', 20, 40, 90),
('2008-03-08', 5, 60, 100),
('2010-03-08', 40, 80, 119);
```

![Chart data](./images/chart-data.png)

Assign the database data to the chart's [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#datasource) property. The property accepts a **JavaScript array of objects** in the following format:

```typescript
[
  { ID: 1, Date: "2000-06-11", Product_A: 10, Product_B: 40, Product_C: 80 },
  { ID: 2, Date: "2002-03-07", Product_A: 40, Product_B: 60, Product_C: 82 },
  { ID: 3, Date: "2004-03-06", Product_A: 15, Product_B: 80, Product_C: 119 },
  { ID: 4, Date: "2006-03-30", Product_A: 20, Product_B: 40, Product_C: 90 },
  { ID: 5, Date: "2008-03-08", Product_A: 5, Product_B: 60, Product_C: 100 },
  { ID: 6, Date: "2010-03-08", Product_A: 40, Product_B: 80, Product_C: 119 }
]
```

## Create the backend API

The backend endpoint must return the SQL rows serialized as a JSON array. The following sample uses ASP.NET Core Web API:

```csharp
// ChartSalesController.cs
[ApiController]
[Route("api/[controller]")]
public class ChartSalesController : ControllerBase
{
    private readonly AppDbContext _context;
    public ChartSalesController(AppDbContext context) { _context = context; }

    [HttpGet]
    public IActionResult Get()
    {
        var data = _context.ChartSales.ToList();
        return Ok(data);
    }
}
```

The controller depends on the following EF Core scaffolding in your project.

`Data/AppDbContext.cs`

```csharp
using Microsoft.EntityFrameworkCore;

public class ChartSales
{
    public int ID { get; set; }
    public DateTime Date { get; set; }
    public decimal Product_A { get; set; }
    public decimal Product_B { get; set; }
    public decimal Product_C { get; set; }
}

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<ChartSales> ChartSales { get; set; }
}
```

Register `AppDbContext` and enable CORS in `Program.cs` (.NET 6+ minimal hosting) — or in `Startup.cs` if you target .NET Core 3.x.

`Program.cs`

```csharp
var builder = WebApplication.CreateBuilder(args);

// Register the EF Core DbContext
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Register CORS
builder.Services.AddCors(options => options.AddPolicy("CorsPolicy", builder => {
    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
}));

builder.Services.AddControllers();
// ...
var app = builder.Build();

app.UseCors("CorsPolicy");
app.MapControllers();
app.Run();
```

Legacy `Startup.cs` (target only — not needed for .NET 6+):

```csharp
services.AddCors(options => options.AddPolicy("CorsPolicy", builder => {
    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
}));
```

The API base URL (for example, `https://localhost:5001/api/ChartSales`) is used by the Angular service below.

## Create the Angular service

Generate an Angular service that calls the backend API:

```bash
ng generate service chart
```

The command generates the `ChartService` class in `src/app/chart.service.ts` as follows:

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChartService {

  constructor() { }

}
```

Update `chart.service.ts` to fetch data from the API. `HttpClient.get()` returns an [`Observable`](https://rxjs.dev/guide/observable). Replace the placeholder URL (`YOUR BACKEND URL`) with your actual API endpoint.

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChartData } from './chart-data.model';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private apiUrl = 'YOUR BACKEND URL'; // e.g., 'https://localhost:5001/api/ChartSales'

  constructor(private http: HttpClient) { }

  getChartData(): Observable<ChartData[]> {
    return this.http.get<ChartData[]>(this.apiUrl);
  }
}
```

`chart-data.model.ts`

```typescript
export interface ChartData {
  ID: number;
  Date: string;
  Product_A: number;
  Product_B: number;
  Product_C: number;
}
```

## Configure the Angular module

Configure the root module so the `ChartModule` and providers required for the series/axis features are registered.

* `ChartModule` registers the `<ejs-chart>` directive.
* `DateTimeService` enables `valueType: 'DateTime'` on an axis.
* `LineSeriesService` enables the `Line` series type.
* `DateTimeCategoryService` enables the datetime-category axis (registered for completeness).
* `StripLineService` enables strip lines on an axis.

`app.module.ts`

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import the ChartModule for the Chart component
import { ChartModule, DateTimeService, LineSeriesService, DateTimeCategoryService, StripLineService } from '@syncfusion/ej2-angular-charts';
import { AppComponent } from './app.component';
import { ChartService } from './chart.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    HttpClientModule
  ],
  providers: [ChartService, DateTimeService, LineSeriesService, DateTimeCategoryService, StripLineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Render the chart

In `app.component.ts`, configure the [`primaryXAxis`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#primaryxaxis) and [`primaryYAxis`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#primaryyaxis) properties to define the chart axes, and set the [`title`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#title) property to display a chart heading. The [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#valuetype) and [`labelFormat`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#labelformat) properties are configured on the X-axis to parse the date values. Each series uses the following properties:

* [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#type) – series type (`Line`, `Column`, etc.).
* [`xName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#xname) – field mapped to the X-axis.
* [`yName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#yname) – field mapped to the Y-axis.
* [`name`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#name) – legend text for the series.
* [`marker`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#marker) – marker configuration shown on each data point.

Call `loadChartData()` from [`ngOnInit()`](https://angular.io/api/core/OnInit#ngOnInit) so the data request begins as soon as the component initializes. The subscription uses the `next` and `error` callbacks and is automatically cleaned up by Angular's [`AsyncPipe`](https://angular.io/api/common/AsyncPipe) on component destroy (see [`takeUntil`](https://rxjs.dev/api/operators/takeUntil) for the imperative alternative) to prevent memory leaks.

`app.component.ts`

```typescript
import { Component, OnInit } from '@angular/core';
import { ChartService } from './chart.service';
import { ChartData } from './chart-data.model';

@Component({
  selector: 'app-root',
  template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'>
                <e-series-collection>
                  <e-series [dataSource]='chartData' type='Line' xName='Date' [marker]='marker' yName='Product_A' name='Product A'></e-series>
                  <e-series [dataSource]='chartData' type='Line' xName='Date' [marker]='marker' yName='Product_B' name='Product B'></e-series>
                  <e-series [dataSource]='chartData' type='Line' xName='Date' [marker]='marker' yName='Product_C' name='Product C'></e-series>
                </e-series-collection>
              </ejs-chart>`,
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public primaryXAxis: object;
  public primaryYAxis: object;
  public title!: string;
  public marker: object;
  public chartData: ChartData[] = [];

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.primaryXAxis = {
      valueType: 'DateTime',
      title: 'Sales Across Years',
      labelFormat: 'yMMM'
    };
    this.primaryYAxis = {
      title: 'Sales Amount in millions(USD)'
    };
    this.title = 'Average Sales Comparison';
    this.marker = { visible: true };
    this.loadChartData();
  }

  public loadChartData(): void {
    this.chartService.getChartData().subscribe({
      next: (data: ChartData[]) => { this.chartData = data; },
      error: (err) => { console.error('Failed to load chart data', err); }
    });
  }
}
```

> If your API returns `Date` as a bare string (for example, `"2000-06-11"`) and the browser cannot parse it reliably with `valueType: 'DateTime'`, either return ISO-8601 `DateTime` strings (`"2000-06-11T00:00:00Z"`) from the API or convert them to JavaScript `Date` objects on the client.

The following screenshot shows the chart rendered with data fetched from the server.

![Formatted Chart data from database](./images/chart.png)

## See also

* [Chart data binding overview](https://ej2.syncfusion.com/angular/documentation/chart/data-binding.html)
* [Chart series API reference](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective.html)
* [Chart Getting Started in Angular](https://ej2.syncfusion.com/angular/documentation/chart/getting-started.html)