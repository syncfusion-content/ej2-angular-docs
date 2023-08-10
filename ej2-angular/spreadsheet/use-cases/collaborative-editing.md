---
layout: post
title: Collaborative editing in Angular Spreadsheet component | Syncfusion
description: Learn here all about Collaborative editing in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Collaborative editing 
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative editing in Angular Spreadsheet component

The collaborative editing support allows you to work at a spreadsheet collaboratively with other users. Multiple users can access to the the same spreadsheet simultaneously.

## Dependencies

The following list of dependencies are required to use the collaborative editing support in spreadsheet.

```js
|-- @aspnet/signalr
   |-- eventsource
   |-- request
   |-- ws

```

> * Run the command `npm i @aspnet/signalr` to install `@aspnet/signalr` packages in your application.

## Client configuration

To broadcast the data for every action in the spreadsheet, you need to transfer the data to the server through `send` method in `actionComplete` event and receive the same data by using the `dataReceived` method. In the `dataReceived` method, you need to update the action to the connected clients through `updateAction` method.

The following code example shows `Collaborative Editing` support in the Spreadsheet control.

```javascript
import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { defaultData } from './datasource';
import * as signalR from '@aspnet/signalr';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Component({
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (actionComplete)="onActionComplete($event)">
                <e-sheets>
                  <e-sheet>
                    <e-ranges>
                      <e-range [dataSource]="data"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=180></e-column>
                      <e-column [width]=130></e-column>
                      <e-column [width]=130></e-column>
                    </e-columns>
                  </e-sheet>
                </e-sheets>
              </ejs-spreadsheet>`
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj: SpreadsheetComponent;
    connection: HubConnection;
    data: object[] = defaultData;
    ngOnInit(): void {
      // For signalR Hub connection
      this.connection  = new HubConnectionBuilder()  
      .withUrl('https://localhost:44385/hubs/spreadsheethub', {  // localhost from AspNetCore service
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })  
      .build();

        this.connection.on('dataReceived', (data: string) => {
          var model = JSON.parse(data);
          this.spreadsheetObj.updateAction(model); // update the action to the connected clients
      });
  
      this.connection.start().then(() => { // to start the server
             console.log('server connected!!!');
         }).catch(err => console.log(err));
  }
    onActionComplete(args:any) {
        this.connection.send('BroadcastData', JSON.stringify(args)); // send the action data to the server
    }
}
```

## Server configuration

To make the communication between the server to the connected clients and from clients to the server, you need to configure the signalR Hubs using the following code.

```js
import * as signalR from '@aspnet/signalr';

// For signalR Hub connection
    public connection = new signalR.HubConnectionBuilder().withUrl('https://localhost:44385/hubs/spreadsheethub', { // localhost from AspNetCore service
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
    }).build();
```

## Hub configuration

Initially create a AspNetCore project and add the hub file for sending and receiving the data between server and clients.

```javascript
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace WebApplication.Hubs
{
    public class SpreadsheetHub : Hub
    {
        public async Task BroadcastData(string data)
        {
            await Clients.Others.SendAsync("dataReceived", data);
        }
    }
}
```

To configure the SignalR middleware by registering the following service in the `ConfigureServices` method of the `Startup` class.

```javascript
    services.AddSignalR(e =>
    {
        e.MaximumReceiveMessageSize = int.MaxValue; // Option to increase message size for inserting image feature. By default, SignalR send messages up to 32 KB.
    });
```

To set up the SignalR routes by calling MapHub in the `Configure` method of the `Startup` class.

```javascript

    app.UseEndpoints(endpoints =>

    {

        endpoints.MapRazorPages();

        endpoints.MapHub<SpreadsheetHub>("/hubs/spreadsheethub");

    });
```

For hosting the service, you may use the above code snippet or download and run the [local service](https://www.syncfusion.com/downloads/support/directtrac/general/ze/WebApplication1327152095).

## Prevent the particular action update for collaborative client

Using the `action` argument from the `actionComplete` event, you can prevent the particular action update for collaborative client.

The following code example shows how to prevent collaborative client from updating the `format` action.

```javascript
import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { defaultData } from './datasource';
import * as signalR from '@aspnet/signalr';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Component({
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (actionComplete)="onActionComplete()">
                <e-sheets>
                  <e-sheet>
                    <e-ranges>
                      <e-range [dataSource]="data"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=180></e-column>
                      <e-column [width]=130></e-column>
                      <e-column [width]=130></e-column>
                    </e-columns>
                  </e-sheet>
                </e-sheets>
              </ejs-spreadsheet>`
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj: SpreadsheetComponent;
    data: object[] = defaultData;
    // For signalR Hub connection
    public connection = new signalR.HubConnectionBuilder().withUrl('https://localhost:44385/hubs/spreadsheethub', { // localhost from AspNetCore service
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
    }).build();

    ngOnInit(): void {
        this.connection.on('dataReceived', (data: string) => {
            var model = JSON.parse(data);
            this.spreadsheetObj.updateAction(model); // update the action to the connected clients
        });
        this.connection.start().then(() => { // to start the server
            console.log('server connected!!!');
        }).catch(err => console.log(err));
    }
    onActionComplete(args) {
        if (args.action != 'format') {
          this.connection.send('BroadcastData', JSON.stringify(args)); // send the action data to the server
        }
    }
}
```
## Perform import action for collaborative clients

Using the `action` argument from the [`actionComplete`](../api/spreadsheet/#actioncomplete) event, you can identity whether the import action is performed or not. If the action is `import`, then you need to send the `response data` to the server and also update the same to the collaborative clients.

The following code example shows how to perform the import functionality for collaborative clients.

```ts
import { Component, ViewChild } from '@angular/core';
import { isNullOrUndefined } from "@syncfusion/ej2-base";
import { SpreadsheetComponent, CollaborativeEditArgs } from '@syncfusion/ej2-angular-spreadsheet';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-container',
  template: `<ejs-spreadsheet #spreadsheet 
                openUrl='https://services.syncfusion.com/angular/production/api/spreadsheet/open' 
                allowOpen='true' 
                (actionComplete)="onActionComplete($event)">
            </ejs-spreadsheet>`
})
export class AppComponent {
  @ViewChild('spreadsheet')
  spreadsheetObj: SpreadsheetComponent | undefined;
  // For signalR Hub connection.
  public connection = new signalR.HubConnectionBuilder().withUrl(`https://localhost:44385/hubs/spreadsheethub`, {
    skipNegotiation: true,
    transport: signalR.HttpTransportType.WebSockets
  }).build();

  onActionComplete(args: {action: string, response: any}) {
    if (args.action === 'import') {
      // Send the action data to the server in args.response at the time of importing an excel file.
      this.connection.send("BroadcastData", JSON.stringify(args.response.data));
    }
    else {
      // Send the action data to the server for other than import actions.
      this.connection.send("BroadcastData", JSON.stringify(args));
    }
  }

  ngOnInit(): void {
    this.connection.on('dataReceived', (data: string) => {
      const model: CollaborativeEditArgs = JSON.parse(
        data
      ) as CollaborativeEditArgs;

      // Condition to check whether action performed is import.
      if (isNullOrUndefined(model['action'])) {
        // Load the imported excel file data as JSON to the connected clients.
        const jsonData: object = { Workbook: model };
        this.spreadsheetObj!.openFromJson({ file: jsonData });
      }
      else {
        // Update the action details to the connected clients.
        this.spreadsheetObj!.updateAction(model);
      }
    });
    this.connection
      .start()
      .then(() => {
        console.log('server connected!!!');
      })
      .catch(err => console.log(err));
  }
}
```