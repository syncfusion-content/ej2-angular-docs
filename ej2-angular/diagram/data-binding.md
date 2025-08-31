---
layout: post
title: Data binding in Angular Diagram Component | Syncfusion®
description: Learn here all about Data binding in Syncfusion® Angular Diagram Component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Data Binding
documentation: ug
domainurl: ##DomainURL##
---

# Data Binding in Angular Diagram Component

The Angular Diagram component supports data binding to populate nodes and connectors from external data sources. This feature enables dynamic diagram creation based on structured data, making it ideal for visualizing organizational charts, flowcharts, and hierarchical data structures.

Data binding in the Diagram component works by mapping data source fields to diagram elements through the `dataSourceSettings` property. The component supports both local JSON data and remote data sources, providing flexibility for various application scenarios.

## Key Data Binding Properties

The Diagram component exposes several data-related properties that control how data is mapped to diagram elements:

* **[`dataManager`](https://ej2.syncfusion.com/angular/documentation/api/diagram/dataSourceModel/#datamanager)** - Defines the data source as a collection of objects or DataManager instance
* **[`ID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/dataSourceModel/#id)** - Specifies the unique identifier field for each data item
* **[`parentId`](https://ej2.syncfusion.com/angular/documentation/api/diagram/dataSourceModel/#parentid)** - Defines the parent field to establish hierarchical relationships
* **[`root`](https://ej2.syncfusion.com/angular/documentation/api/diagram/dataSourceModel/#root)** - Sets the root node for the diagram hierarchy

For complete property details, refer to the [`DataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/diagram/dataSourceModel/) API documentation.

## Data Binding Types

The Diagram component supports two primary data binding approaches:

1. **Local data binding** - Uses client-side JSON data
2. **Remote data binding** - Fetches data from server endpoints using DataManager

## Local Data Binding

Local data binding allows the diagram to render nodes and connectors based on client-side JSON data. This approach is ideal for static data or scenarios where the entire dataset is available on the client side.

To implement local data binding, configure the `dataSourceSettings` fields to map your JSON data structure to diagram elements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/dataBinding/localBinding-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/dataBinding/localBinding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/dataBinding/localBinding-cs1" %}

## Remote Data Binding

Remote data binding enables the diagram to fetch data from server endpoints using the DataManager service. This approach is suitable for large datasets, real-time data, or when data needs to be retrieved from databases or web services.

The DataManager handles data communication, while Query objects generate the requests that DataManager processes. This architecture provides powerful data manipulation capabilities including filtering, sorting, and paging.

For comprehensive DataManager information, see the [`DataManager documentation`](https://ej2.syncfusion.com/angular/documentation/api/diagram/dataSourceModel/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/dataBinding/remoteBinding-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/dataBinding/remoteBinding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/dataBinding/remoteBinding-cs1" %}

## CRUD Operations with Data Binding

The Diagram component supports Create, Read, Update, and Delete (CRUD) operations, allowing real-time synchronization between the diagram and its data source. This functionality enables users to modify diagram elements and persist changes to the backend.

### Reading Data from Multiple Sources

The diagram can simultaneously read from two data sources: one for nodes and another for connectors. This separation provides greater flexibility when dealing with complex data relationships.

**Node data source configuration:**
* Set the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/diagram/dataSourceModel/#datasource) property to define the node data collection
* Use the [`id`](https://ej2.syncfusion.com/angular/documentation/api/diagram/dataSourceModel/#id) property to specify the unique identifier field

**Connector data source configuration:**
* Configure the [`connectionDataSource`](https://ej2.syncfusion.com/angular/documentation/api/diagram/dataSourceModel/#connectionDataSource) property for connector data
* Set [`sourceID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectionDataSourceModel/#sourceID) and [`targetID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectionDataSourceModel/#targetID) to establish connections
* Define connection points using [`sourcePointX`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectionDataSourceModel/#sourcePointX), [`sourcePointY`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectionDataSourceModel/#sourcePointY), [`targetPointX`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectionDataSourceModel/#targetPointX), and [`targetPointY`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectionDataSourceModel/#targetPointY)

**Priority handling:** When both parent-child relationships in the main data source and explicit connectors in the connectionDataSource are defined, the explicit connectors take priority for rendering.

**Custom fields:** Use the [`customFields`](https://ej2.syncfusion.com/angular/documentation/api/diagram/crudActionModel/#customFields) property in crudAction to maintain additional information for both nodes and connectors.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/dataBinding/connectionDataSource-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/dataBinding/connectionDataSource-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/dataBinding/connectionDataSource-cs1" %}

### Runtime Data Modification

The diagram supports real-time data modifications through CRUD action configuration. Each operation (create, update, delete) can be mapped to specific server endpoints that handle the corresponding data changes.

#### Creating New Data (InsertData)

Configure the [`create`](https://ej2.syncfusion.com/angular/documentation/api/diagram/crudActionModel/#create) property to handle new node and connector additions:

```typescript
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent} from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [dataSourceSettings]='data'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public data: Object = {
      crudAction: {
        //Url which triggers the server side AddNodes method
        create: 'https://ej2services.syncfusion.com/development/web-services/api/Crud/AddNodes',
      },
      connectionDataSource: {
      crudAction: {
           //Url which triggers the server side AddConnectors method
           create: 'https://ej2services.syncfusion.com/development/web-services/api/Crud/AddConnectors',
        }
      }
    };
     //Sends the inserted nodes/connectors from client side to the server side through the URL which is specified in server side.
     this.diagram.insertData();
 }
```

#### Updating Existing Data (UpdateData)

Configure the [`update`](https://ej2.syncfusion.com/angular/documentation/api/diagram/crudActionModel/#update) property to handle modifications to existing nodes and connectors:

```typescript
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent} from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [dataSourceSettings]='data'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public data: Object = {
      crudAction: {
         //Url which triggers the server side UpdateNodes method
           update: 'https://ej2services.syncfusion.com/development/web-services/api/Crud/UpdateNodes',
      },
      connectionDataSource: {
      crudAction: {
           //Url which triggers the server side UpdateConnectors method
           update: 'https://ej2services.syncfusion.com/development/web-services/api/Crud/UpdateConnectors',
        }
      }
    };
     //Sends the updated nodes/connectors from client side to the server side through the URL which is specified in server side.
     this.diagram.updateData();
 }
```

#### Deleting Data (DeleteData)

Configure the [`destroy`](https://ej2.syncfusion.com/angular/documentation/api/diagram/crudActionModel/#destroy) property to handle node and connector deletions:

```typescript
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent} from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [dataSourceSettings]='data'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public data: Object = {
      crudAction: {
         //Url which triggers the server side DeleteNodes method
          destroy: 'https://ej2services.syncfusion.com/development/web-services/api/Crud/DeleteNodes',
      },
      connectionDataSource: {
      crudAction: {
           //Url which triggers the server side DeleteConnectors method
           destroy: 'https://ej2services.syncfusion.com/development/web-services/api/Crud/DeleteConnectors',
        }
      }
    };
     //Sends the deleted nodes/connectors from client side to the server side through the URL which is specified in server side.
     this.diagram.removeData();
 }
```

## See Also

* [How to arrange the diagram nodes and connectors using various layouts](./automatic-layout)