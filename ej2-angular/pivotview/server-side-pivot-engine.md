---
layout: post
title: Server side pivot engine in Angular Pivotview component | Syncfusion
description: Learn here all about Server side pivot engine in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Server side pivot engine 
documentation: ug
domainurl: ##DomainURL##
---

> In general, the Pivot Table is created using the built-in engine for given data source. This is an optional feature that allows you to create the Pivot Table with a server-side pivot engine and external data binding. And this option is applicable only for relational data source.

# Server side pivot engine in Angular Pivotview component

This section briefs the Syncfusion assembly [`Syncfusion.EJ2.Pivot`](https://www.nuget.org/packages/Syncfusion.EJ2.Pivot/), which is used in a server-side application to perform all Pivot calculations such as aggregation, filtering, sorting, grouping, and so on, and only the information to be displayed in the Pivot Table's viewport is passed to the client-side (browser) via web service (Web API) rather than the entire data source. It reduces network traffic and improves the rendering performance of the Pivot Table, especially when dealing with large amounts of data. It also works best with virtual scrolling enabled and supports all the Pivot Table's existing features.

## Quick steps to render the Pivot Table by using the server-side Pivot Engine

### Download and installing Server-side Pivot Engine

**1.** Download the ASP.NET Core-based stand-alone Pivot Table [`application`](https://github.com/SyncfusionExamples/server-side-pivot-engine-for-pivot-table) from the GitHub repository.

**2.** The **PivotController** (Server-side) application that is downloaded includes the following files.

* **PivotController.cs** file under **Controllers** folder – This helps to do data communication with Pivot Table.
* **DataSource.cs** file under **DataSource** folder – This file has model classes to define the structure of the data sources.
* The sample data source files **sales.csv** and **sales-analysis.json** under **DataSource** folder.

**3.** Open the **PivotController** application in Visual Studio where the Syncfusion library [`Syncfusion.EJ2.Pivot`](https://www.nuget.org/packages/Syncfusion.EJ2.Pivot/) will be downloaded automatically from the nuget.org site.

![Solution Explorer](./images/solution-explorer.png)

### Connecting Pivot Table to Server-side Pivot Engine

**1.** Run the **PivotController** (Server-side) application which will be hosted in IIS shortly.

**2.** Then in the Pivot Table sample, set the [`mode`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettingsModel/#mode) property under [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/) as **Server** and map the URL of the hosted Server-side application in [`URL`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#url) property of `dataSourceSettings`.

```javascript

import { Component, OnInit } from '@angular/core';
import { IDataOptions } from '@syncfusion/ej2-angular-pivotview';

@Component({
    selector: 'app-container',
    template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings ></ejs-pivotview>`
})

export class AppComponent implements OnInit {
  public dataSourceSettings: IDataOptions;

  ngOnInit(): void {
    this.width = '100%';
    this.dataSourceSettings = {
      url: 'http://localhost:61379/api/pivot/post',
      mode: 'Server',
    };
  }
}

```

**3.** Frame and set the report based on the data source available in the **PivotController** application.

```javascript

import { Component, OnInit } from '@angular/core';
import { IDataOptions } from '@syncfusion/ej2-angular-pivotview';

@Component({
    selector: 'app-container',
    template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings ></ejs-pivotview>`
})

export class AppComponent implements OnInit {
  public dataSourceSettings: IDataOptions;

  ngOnInit(): void {
    this.width = '100%';
    this.dataSourceSettings = {
      url: 'http://localhost:61379/api/pivot/post',
      mode: 'Server',
      rows: [{
        name: 'ProductID', caption: 'Product ID'
      }],
      formatSettings: [{
        name: 'Price', format: 'C'
      }],
      columns: [{
        name: 'Year', caption: 'Production Year'
      }],
      values: [
        { name: 'Sold', caption: 'Units Sold' },
        { name: 'Price', caption: 'Sold Amount' }
      ],
    };
  }
}

```

**4.** Run the sample to get the following result.

![Pivot Table demo using server-side pivot engine](./images/server-side-demo.png)

## Available configurations in Server-side application

### Supportive Data Sources

The server-side Pivot Engine supports the following data sources,
* Collection
* JSON
* CSV
* DataTable
* Dynamic

#### Collection

The collection data sources such as List, IEnumerable, and so on are supported. This can be bound using the **GetData** controller method. Also, in the Pivot Table sample, set the [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldOptionsModel/#type) property under [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/) to **JSON**, which is also the default enumeration value.

In the server-side application **(PivotController)**, a collection type data source is framed in the **DataSource.cs** file as shown in the following.

```csharp
public class PivotViewData
{
    public string ProductID { get; set; }
    public string Country { get; set; }
    public string Product { get; set; }
    public double Sold { get; set; }
    public double Price { get; set; }
    public string Year { get; set; }

    public List<PivotViewData> GetVirtualData()
    {
        List<PivotViewData> VirtualData = new List<PivotViewData>();

        for (int i = 1; i <= 10000; i++)
        {
            PivotViewData p = new PivotViewData
            {
                ProductID = "PRO-" + ((100 + i)%20),
                Year = (new string[] { "FY 2015", "FY 2016", "FY 2017", "FY 2018", "FY 2019" })[new Random().Next(5)],
                Country = (new string[] { "Canada", "France", "Australia", "Germany", "France" })[new Random().Next(5)],
                Product = (new string[] { "Car", "Van", "Bike", "Flight", "Bus" })[new Random().Next(5)],
                Price = (3.4 * i) + 500,
                Sold = (i * 15) + 10
            };
            VirtualData.Add(p);
        }
        return VirtualData;
    }
}

```

To bind the data source, set its model type **PivotViewData** to **TValue** of the **PivotEngine** class.

```csharp
private PivotEngine<DataSource.PivotViewData> PivotEngine = new PivotEngine<DataSource.PivotViewData>();

```

Then call the data source in **GetData** method of **PivotController.cs** file.

```csharp
public async Task<object> GetData(FetchData param)
{
    return await _cache.GetOrCreateAsync("dataSource" + param.Hash,
        async (cacheEntry) =>
        {
            cacheEntry.SetSize(1);
            cacheEntry.AbsoluteExpiration = DateTimeOffset.UtcNow.AddMinutes(60);

            // Here bind the collection type data source.
            return new DataSource.PivotViewData().GetVirtualData();

        });
}

```

Finally set the appropriate report to the Pivot Table sample based on the above data source.

```javascript
    this.dataSourceSettings = {
      url: 'http://localhost:61379/api/pivot/post',
      mode: 'Server',
      rows: [{
        name: 'ProductID', caption: 'Product ID'
      }],
      formatSettings: [{
        name: 'Price', format: 'C'
      }],
      columns: [{
        name: 'Year', caption: 'Production Year'
      }],
      values: [
        { name: 'Sold', caption: 'Units Sold' },
        { name: 'Price', caption: 'Sold Amount' }
      ],
    };

```

![Server-Side Pivot Engine using collection](./images/server-side-with-collection-data.png)

#### JSON

The JSON data from a local *.json file type can be connected to the Pivot Table. Here, the file can be read by the **StreamReader** option, which will give the result in the string format. The resultant string needs to be converted to collect data that can be bound to the Server-side pivot engine.

In the Server-side application, **sales-analysis.json** file is available under **DataSource** folder and its model type is defined in **DataSource.cs** file.

```csharp
public class PivotJSONData
{
    public string Date { get; set; }
    public string Sector { get; set; }
    public string EnerType { get; set; }
    public string EneSource { get; set; }
    public int PowUnits { get; set; }
    public int ProCost { get; set; }

    public List<PivotJSONData> ReadJSONData(string url)
    {
        WebClient myWebClient = new WebClient();
        Stream myStream = myWebClient.OpenRead(url);
        StreamReader stream = new StreamReader(myStream);
        string result = stream.ReadToEnd();
        stream.Close();
        return Newtonsoft.Json.JsonConvert.DeserializeObject<List<PivotJSONData>>(result);
    }
}

```

To bind the data source, set its model type **PivotJSONData** to **TValue** of the **PivotEngine** class.

```csharp
private PivotEngine<DataSource.PivotJSONData> PivotEngine = new PivotEngine<DataSource. PivotJSONData>();
```

Then call the data source in **GetData** method of **PivotController.cs** file.

```csharp
public async Task<object> GetData(FetchData param)
{
    return await _cache.GetOrCreateAsync("dataSource" + param.Hash,
        async (cacheEntry) =>
        {
            cacheEntry.SetSize(1);
            cacheEntry.AbsoluteExpiration = DateTimeOffset.UtcNow.AddMinutes(60);

            // Here bind JSON type data source from the sales-analysis.json file.
            return new DataSource.PivotJSONData().ReadJSONData(_hostingEnvironment.ContentRootPath + "//DataSource//sales-analysis.json");
        });
}

```

Finally set the appropriate report to the Pivot Table sample based on the above data source.

```javascript
    this.dataSourceSettings = {
      url: 'http://localhost:61379/api/pivot/post',
      mode: 'Server',
      type: 'JSON',
      rows: [{
        name: 'EneSource', caption: 'Energy Source'
      }],
      formatSettings: [{
        name: 'ProCost', format: 'C'
      }],
      columns: [{
        name: 'EnerType', caption: 'Energy Type'
      }],
      values: [
        { name: 'PowUnits', caption: 'Units Sold' },
        { name: 'ProCost', caption: 'Sold Amount' }
      ],
    }

```

![Server-Side Pivot Engine with JSON data](./images/server-side-with-json-data.png)

JSON data from any remote server, like a local JSON file, can also be supported. It accepts both directly downloadable files (*.json) and web service URLs. To bind this, the URL of the *.json file of a remote server has to be mapped under the **GetData** method. The rest of the configurations are the same as described above.

In the server-side application, the CDN link is used to connect the same **sales-analysis.json** file which is already hosted in the Syncfusion server.

```csharp
public async Task<object> GetData(FetchData param)
{
    return await _cache.GetOrCreateAsync("dataSource" + param.Hash,
    async (cacheEntry) =>
    {
        cacheEntry.SetSize(1);
        cacheEntry.AbsoluteExpiration = DateTimeOffset.UtcNow.AddMinutes(60);

        // Here bind JSON type data source from remote server.
        return new DataSource.PivotJSONData().ReadJSONData("http://cdn.syncfusion.com/data/sales-analysis.json");
    });
}

```

#### CSV

The CSV data from a local *.csv file type can be connected to the Pivot Table. Here, the file can be read by the **StreamReader** option, which will give the result in the string format. The resultant string needs to be converted to collect data that can be bound to the server-side pivot engine. Also, in the Pivot Table sample, set the [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldOptionsModel/#type) property under [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/) as **CSV**.

In the server application, the **sales.csv** file is available under the **DataSource** folder, and its model type is defined in the **DataSource.cs** file.

```csharp
public class PivotCSVData
{
    public string Region { get; set; }
    public string Country { get; set; }
    public string ItemType { get; set; }
    public string SalesChannel { get; set; }
    public string OrderPriority { get; set; }
    public string OrderDate { get; set; }
    public int OrderID { get; set; }
    public string ShipDate { get; set; }
    public int UnitsSold { get; set; }
    public double UnitPrice { get; set; }
    public double UnitCost { get; set; }
    public double TotalRevenue { get; set; }
    public double TotalCost { get; set; }
    public double TotalProfit { get; set; }


    public List<string[]> ReadCSVData(string url)
    {
        List<string[]> data = new List<string[]>();
        using (StreamReader reader = new StreamReader(new WebClient().OpenRead(url)))
        {
            string line;
            while ((line = reader.ReadLine()) != null)
            {
                line = line.Trim();

                if (!string.IsNullOrWhiteSpace(line))
                {
                    data.Add(line.Split(','));
                }
            }
            return data;
        }
    }
}

```

To bind the data source, set its model type **PivotCSVData** to **TValue** of the **PivotEngine** class.

```csharp
private PivotEngine<DataSource.PivotCSVData> PivotEngine = new PivotEngine<DataSource. PivotCSVData>();
```

Then call the data source in **GetData** method of **PivotController.cs** file.

```csharp
public async Task<object> GetData(FetchData param)
{
    return await _cache.GetOrCreateAsync("dataSource" + param.Hash,
        async (cacheEntry) =>
        {
            cacheEntry.SetSize(1);
            cacheEntry.AbsoluteExpiration = DateTimeOffset.UtcNow.AddMinutes(60);

            // Here bind CSV type data source from sales.csv file.
            return new DataSource.PivotCSVData().ReadCSVData(_hostingEnvironment.ContentRootPath + "//DataSource//sales.csv");
        });
}

```

Finally set the appropriate report to the Pivot Table sample based on the above data source.

```javascript
    this.dataSourceSettings = {
      url: 'http://localhost:61379/api/pivot/post',
      mode: 'Server',
      type: 'CSV',
      rows: [{
        name: 'ItemType', caption: 'Item Type'
      }],
      formatSettings: [{
        name: 'UnitPrice', format: 'C'
      }],
      columns: [{
        name: 'Region'
      }],
      values: [
        { name: 'UnitsSold', caption: 'Units Sold' },
        { name: 'UnitPrice', caption: 'Sold Amount' }
      ],
    }

```

![Server-Side Pivot Engine using CSV data](./images/server-side-with-csv-data.png)

CSV data from any remote server, like a local CSV file, can also be supported. It accepts both directly downloadable files (*.csv) and web service URLs. To bind this, the URL of the *.csv file of a remote server has to be mapped under **GetData** method. The rest of the configurations are the same as described above.

In the server application, the CDN link is used to connect the same **sales.csv** file which is already hosted in the Syncfusion server.

```csharp
public async Task<object> GetData(FetchData param)
{
    return await _cache.GetOrCreateAsync("dataSource" + param.Hash,
        async (cacheEntry) =>
        {
            cacheEntry.SetSize(1);
            cacheEntry.AbsoluteExpiration = DateTimeOffset.UtcNow.AddMinutes(60);

            // Here bind CSV type data source from remote server.
            return new DataSource.PivotCSVData().ReadCSVData("http://cdn.syncfusion.com/data/sales-analysis.csv");
        });
}

```

#### DataTable

In the server-side application, there is a manually created DataTable **BusinessObjectsDataView** by mapping the model type **PivotViewData** in **DataSource.cs** file.

```csharp
public class BusinessObjectsDataView
{
    public DataTable GetDataTable()
    {
        DataTable dt = new DataTable("BusinessObjectsDataTable");
        PropertyDescriptorCollection pdc = TypeDescriptor.GetProperties(typeof(PivotViewData));
        foreach (PropertyDescriptor pd in pdc)
        {
            dt.Columns.Add(new DataColumn(pd.Name, pd.PropertyType));
        }
        List<PivotViewData> list = new PivotViewData().GetVirtualData();
        foreach (PivotViewData bo in list)
        {
            DataRow dr = dt.NewRow();
            foreach (PropertyDescriptor pd in pdc)
            {
                dr[pd.Name] = pd.GetValue(bo);
            }
            dt.Rows.Add(dr);
        }
        return dt;
    }
}

```

To bind the data source, set its model type **PivotViewData** to **TValue** of the **PivotEngine** class.

```csharp
private PivotEngine<DataSource.PivotViewData> PivotEngine = new PivotEngine<DataSource.PivotViewData>();

```

Then call the data source in **GetData** method of **PivotController.cs** file.

```csharp
public async Task<object> GetData(FetchData param)
{
    return await _cache.GetOrCreateAsync("dataSource" + param.Hash,
        async (cacheEntry) =>
        {
            cacheEntry.SetSize(1);
            cacheEntry.AbsoluteExpiration = DateTimeOffset.UtcNow.AddMinutes(60);

            // Here bind the DataTable.
            return new DataSource.BusinessObjectsDataView().GetDataTable();
        });
}

```

Finally set the appropriate report to the Pivot Table sample based on the above data source.

```javascript
    this.dataSourceSettings = {
      url: 'http://localhost:61379/api/pivot/post',
      mode: 'Server',
      rows: [{
        name: 'ProductID', caption: 'Product ID'
      }],
      formatSettings: [{
        name: 'Price', format: 'C'
      }],
      columns: [{
        name: 'Year', caption: 'Production Year'
      }],
      values: [
        { name: 'Sold', caption: 'Units Sold' },
        { name: 'Price', caption: 'Sold Amount' }
      ],
    }

```

![Server-Side Pivot Engine using DataTable](./images/server-side-with-data-table.png)

#### Dynamic

The model type has to be defined in the aforementioned data sources. However, there is no need to define a model type for the following data sources, which are also supported by the server-side pivot engine.

##### ExpandoObject

In the server-side application, an **ExpandoObject** type data source is available under the class **PivotExpandoData** in **DataSource.cs** file.

```csharp
public class PivotExpandoData
{
    public List<ExpandoObject> Orders { get; set; } = new List<ExpandoObject>();
    public List<ExpandoObject> GetExpandoData()
    {
        Orders = Enumerable.Range(1, 75).Select((x) =>
        {
            dynamic d = new ExpandoObject();
            d.OrderID = 1000 + (x % 100);
            d.CustomerID = (new string[] { "ALFKI", "ANANTR", "ANTON", "BLONP", "BOLID" })[new Random().Next(5)];
            d.Freight = (new double[] { 2, 1, 4, 5, 3 })[new Random().Next(5)] * x;
            d.OrderDate = (new DateTime[] { new DateTime(2010, 11, 5), new DateTime(2018, 10, 3), new DateTime(1995, 9, 9), new DateTime(2012, 8, 2), new DateTime(2015, 4, 11) })[new Random().Next(5)];
            d.ShipCountry = (new string[] { "USA", "UK" })[new Random().Next(2)];
            d.Verified = (new bool[] { true, false })[new Random().Next(2)];

            return d;
        }).Cast<ExpandoObject>().ToList<ExpandoObject>();
        return Orders;
    }
}

```

To bind the data source, set its class **PivotExpandoData** to **TValue** of the **PivotEngine** class.

```csharp
private PivotEngine<DataSource.PivotExpandoData> PivotEngine = new PivotEngine<DataSource.PivotExpandoData>();

```

Then call the data source in **GetData** method of **PivotController.cs** file.

```csharp
public async Task<object> GetData(FetchData param)
{
    return await _cache.GetOrCreateAsync("dataSource" + param.Hash,
        async (cacheEntry) =>
        {
            cacheEntry.SetSize(1);
            cacheEntry.AbsoluteExpiration = DateTimeOffset.UtcNow.AddMinutes(60);

            // Here returns ExpandoObject type data source.
            return new DataSource.PivotExpandoData().GetExpandoData();
        });
}

```

Finally set the appropriate report to the Pivot Table sample based on the above data source.

```javascript
    this.dataSourceSettings = {
      url: 'http://localhost:61379/api/pivot/post',
      mode: 'Server',
      rows: [{
        name: 'CustomerID', caption: 'Customer ID'
      }],
      columns: [{
        name: 'ShipCountry', caption: 'Ship Country'
      }],
      values: [
        { name: 'Freight', caption: 'Units Sold' }
      ],
    }

```

![Server-Side Pivot Engine using ExpandoObject](./images/server-side-with-expandoobject.png)

##### Dynamic Objects

In the server-side application, a data source is framed by dynamic objects which is available under the class **PivotDynamicData** in the **DataSource.cs** file.

```csharp
public class PivotDynamicData
{
    public List<DynamicDictionary> Orders = new List<DynamicDictionary>() { };
    public List<DynamicDictionary> GetDynamicData()
    {
        Orders = Enumerable.Range(1, 100).Select((x) =>
        {
            dynamic d = new DynamicDictionary();
            d.OrderID = 100 + x;
            d.CustomerID = (new string[] { "ALFKI", "ANANTR", "ANTON", "BLONP", "BOLID" })[new Random().Next(5)];
            d.Freight = (new double[] { 2, 1, 4, 5, 3 })[new Random().Next(5)] * x;
            d.OrderDate = (new DateTime[] { new DateTime(2010, 11, 5), new DateTime(2018, 10, 3), new DateTime(1995, 9, 9), new DateTime(2012, 8, 2), new DateTime(2015, 4, 11) })[new Random().Next(5)];
            d.ShipCountry = (new string[] { "USA", "UK" })[new Random().Next(2)];
            d.Verified = (new bool[] { true, false })[new Random().Next(2)];
            return d;
        }).Cast<DynamicDictionary>().ToList<DynamicDictionary>();
        return Orders;
    }

    public class DynamicDictionary : System.Dynamic.DynamicObject
    {
        Dictionary<string, object> dictionary = new Dictionary<string, object>();
        public override bool TryGetMember(GetMemberBinder binder, out object result)
        {
            string name = binder.Name;
            return dictionary.TryGetValue(name, out result);
        }
        public override bool TrySetMember(SetMemberBinder binder, object value)
        {
            dictionary[binder.Name] = value;
            return true;
        }
        //The "GetDynamicMemberNames" method of the "DynamicDictionary" class must be overridden and return the property names to perform data operation and editing while using dynamic objects.
        public override System.Collections.Generic.IEnumerable<string> GetDynamicMemberNames()
        {
            return this.dictionary?.Keys;
        }
    }
}

```

To bind the data source, set its class **PivotDynamicData** to **TValue** of the **PivotEngine** class.

```csharp
private PivotEngine<DataSource.PivotDynamicData> PivotEngine = new PivotEngine<DataSource.PivotDynamicData>();

```

Then call the data source in **GetData** method of **PivotController.cs** file.

```csharp
public async Task<object> GetData(FetchData param)
{
    return await _cache.GetOrCreateAsync("dataSource" + param.Hash,
        async (cacheEntry) =>
        {
            cacheEntry.SetSize(1);
            cacheEntry.AbsoluteExpiration = DateTimeOffset.UtcNow.AddMinutes(60);

            // Here bind data source with dynamic objects.
            return new DataSource.PivotDynamicData().GetDynamicData();
        });
}

```

Finally set the appropriate report to the Pivot Table sample based on the above data source.

```javascript
    this.dataSourceSettings = {
      url: 'http://localhost:61379/api/pivot/post',
      mode: 'Server',
      rows: [{
        name: 'CustomerID', caption: 'Customer ID'
      }],
      columns: [{
        name: 'ShipCountry', caption: 'Ship Country'
      }],
      values: [
        { name: 'Freight', caption: 'Units Sold' }
      ],
    }

```

![Server-Side Pivot Engine using Dynamic Objects](./images/server-side-with-dynamic-object.png)

### Controller Configuration

#### Memory Cache

In the server-side application, the [`Memory Cache`](https://learn.microsoft.com/en-us/dotnet/api/system.runtime.caching.memorycache?view=dotnet-plat-ext-5.0) option is used to store the data source and engine properties in RAM, which will be used for UI operations. To improve performance, this limits the execution of all initial rendering code to regenerate the aggregated values during each UI operation. The codes below show how we use the memory cache option in the **GetEngine** method to store engine properties.

```csharp
public async Task<EngineProperties> GetEngine(FetchData param)
{
    isRendered = false;
    // Engine properties are stored in memory cache with GUID "parem.Hash".
    return await _cache.GetOrCreateAsync("engine" + param.Hash,
        async (cacheEntry) =>
        {
            isRendered = true;
            cacheEntry.SetSize(1);
            // Memory cache expiration time can be set here.
            cacheEntry.AbsoluteExpiration = DateTimeOffset.UtcNow.AddMinutes(60);
            PivotEngine.Data = await GetData(param);
            return await PivotEngine.GetEngine(param);
        });
}

```

The engine properties are stored in RAM as a cache with a unique ID (GUID) that is transferred from the client-side source code. The GUID is generated at random and will be changed if the page containing the Pivot Table is refreshed or opened in a new tab/window. As a result, each GUID's memory cache contains unique information, and the component operates independently.

Meanwhile, the memory cache is set to expire after 60 minutes from RAM to free its memory. If the component is still running, the data will be generated and stored for another 60 minutes.

#### Methods and its needs

* **Post:** Allows to get the information from the client-side source and calls appropriate controller methods.
* **GetEngine:** Allows to store the engine properties in RAM as a cache which fires on initial rendering or when the memory cache is expired.
* **GetData:** Allows to store data source in RAM as a cache which fires on initial rendering or when the memory cache is expired.
* **GetMembers:** Allows to get the members of a field. This fires when the member editor is opened to do a filtering operation.
* **GetRawData:** Allows to get raw data of an aggregated value cell. This fires when the drill-through or editing dialog is opened.
* **GetPivotValues:** Allows to update the stored engine properties in-memory cache and returns the aggregated values to browser to render the Pivot Table. Here, the return value can be modified. The Pivot Table will be rendered browser-based on this.