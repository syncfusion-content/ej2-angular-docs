---
layout: post
title: Getting Started with Angular Scheduler using GraphQL | Syncfusion.
description: Integrate Syncfusion Angular Scheduler with Node.js and GraphQL backend to perform CRUD operations seamlessly.
control: Scheduler
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Connect the Syncfusion Angular Scheduler to a Node.js GraphQL Backend

This guide shows you how to wire up the **Syncfusion Angular Scheduler** to a **Node.js GraphQL** backend using the **GraphQLAdaptor** for efficient, typed, and scalable CRUD. It’s beginner‑friendly, but production‑ready: we’ll cover **schema design**, **resolvers**, **adaptor configuration**, and **common pitfalls**.

---

## What You’ll Build
- A **GraphQL server (Node.js)** exposing queries and mutations for Scheduler events
- An **Angular app** that uses **DataManager + GraphQLAdaptor** to:
  - Load events for a given date range
  - Add, update, and delete events (batch mutation)
- A clean, maintainable integration pattern you can extend with your data store later

---
## Prerequisites

| Software / Package          | Recommended version          |
|-----------------------------|------------------------------|
| Node.js                     | 20.x LTS or later            |
| npm                         | Latest (11.x+)               |
| Angular CLI                 | 18.x or later                |

## Project Layout
This project keep frontend and backend in separate folders:

```
./GraphQLServer   # Node.js GraphQL backend
./SchedulerApp    # Angular app with Syncfusion Scheduler
```

---
## Setting up the GraphQL backend using Node.js

The `GraphQL` backend acts as the central data service, handling queries and mutations that power the Syncfusion Angular Scheduler.

### 1) Create the project and install dependencies

```bash
mkdir GraphQLServer
cd GraphQLServer
npm init -y
npm i graphpack
npm i @syncfusion/ej2-data --save
```

Add these scripts to **package.json**:

```json

"scripts": {
      "dev": "graphpack --port 4400",
      "build": "graphpack build"
    }

```
### 2) Create the folder structure
```
GraphQLServer/
└─ src/
   ├─ db.js
   ├─ schema.graphql
   └─ resolvers.js
```

### 3) Add sample data 

> In‑memory data keeps the tutorial simple. You can swap this for a database later.

**[src/db.js]**
```js

export let eventsData = [
     {
       Id: 1,
       Subject: 'Server Maintenance',
       StartTime: new Date(2026, 1, 11, 10, 0).toISOString(),
       EndTime: new Date(2026, 1, 11, 11, 30).toISOString(),
       Location: 'Seattle'
     }, {
       Id: 2,
       Subject: 'Art & Painting Gallery',
       StartTime: new Date(2026, 1, 12, 12, 0).toISOString(),
       EndTime: new Date(2026, 1, 12, 14, 0).toISOString(),
       Location: 'Costa Rica'
     }, {
       Id: 3,
       Subject: 'Dany Birthday Celebration',
       StartTime: new Date(2026, 1, 13, 10, 0).toISOString(),
       EndTime: new Date(2026, 1, 13, 11, 30).toISOString(),
       Location: 'Kirkland'
     }
];

```
### 4) Define the schema 

Define the `Appointment` type, a `ReturnType` wrapper for query responses, a `DataManager` input to capture Scheduler operations, and a batch mutation for CRUD.

**[src/schema.graphql]**

```
# --- Domain model ---
type Appointment {
  Id: Int!
  Subject: String
  StartTime: String!
  EndTime: String!
  Location: String
  IsAllDay: Boolean
  RecurrenceRule: String
  StartTimezone: String
  EndTimezone: String
}

# --- Query wrapper expected by GraphQLAdaptor ---
type ReturnType {
  result: [Appointment]
}

# --- Sorting input (optional) ---
input Sort {
  name: String!
  direction: String!
}

# --- Aggregation input (optional) ---
input Aggregate {
  field: String!
  type: String!
}

# --- Syncfusion DataManager payload ---
input DataManager {
  skip: Int
  take: Int
  sorted: [Sort]
  group: [String]
  table: String
  select: [String]
  where: String
  search: String
  requiresCounts: Boolean
  aggregates: [Aggregate]
  params: String
}

# --- Inputs used by batch CRUD ---
input AppointmentFields {
  Id: Int!
  Subject: String
  StartTime: String!
  EndTime: String!
  Location: String
  IsAllDay: Boolean
  Guid: String
  RecurrenceRule: String
  StartTimezone: String
  EndTimezone: String
}

# --- Operations ---
type Query {
  getEvents(datamanager: DataManager): ReturnType
}

type Mutation {
  batchUpdate(
    added: [AppointmentFields]
    changed: [AppointmentFields]
    deleted: [AppointmentFields]
  ): Appointment
}
```
### 5) Implement resolvers 
Read the Scheduler’s requested date range from `datamanager.params` (JSON) and filter accordingly. The batch mutation handles **add**, **update**, and **delete** in one roundtrip.

**[src/resolvers.js]**

```js
import { eventsData } from "./db";
function sameId(a, b) {
  if (a === undefined || a === null || b === undefined || b === null) return false;
  return String(a) === String(b);
}
const resolvers = {
  Query: {
    getEvents: (parent, datamanager, context, info) => { 
      const dataArgs = datamanager;
      const params = JSON.parse(dataArgs.datamanager.params);
      console.log('startDate: ' + params.StartDate + ' EndDate: ' + params.EndDate);
      var data = eventsData.filter(x => new Date(x.StartTime) >= new Date(params.StartDate) && new Date(x.EndTime) <= new Date(params.EndDate));
      return {result: data || eventsData};
    }
  },
  Mutation: {
    batchUpdate: (parent, { added, changed, deleted }, context, info) => {
      if (added && added.length > 0) {
        console.log('added: ' + added.length);
        added.forEach((order) => {
          let existingIndex = -1;
          for (let i = 0; i < eventsData.length; i++) {
            if (sameId(eventsData[i].Id, order && order.Id)) {
              existingIndex = i;
              break;
            }
          }
          if (existingIndex >= 0) {
            const target = eventsData[existingIndex];
            if ('Id' in order) target.Id = order.Id;
            if ('Subject' in order) target.Subject = order.Subject;
            if ('StartTime' in order) target.StartTime = order.StartTime;
            if ('EndTime' in order) target.EndTime = order.EndTime;
            if ('Location' in order) target.Location = order.Location;
            if ('IsAllDay' in order) target.IsAllDay = order.IsAllDay;
            if ('RecurrenceRule' in order) target.RecurrenceRule = order.RecurrenceRule;
            if ('StartTimezone' in order) target.StartTimezone = order.StartTimezone;
            if ('EndTimezone' in order) target.EndTimezone = order.EndTimezone;
          } else {
            eventsData.push(order);
          }
        });
      }
      if (changed && changed.length > 0) {
        console.log('changed: ' + changed.length);
        changed.forEach((order) => {
          let target = null;
          for (let i = 0; i < eventsData.length; i++) {
            if (sameId(eventsData[i].Id, order && order.Id)) {
              target = eventsData[i];
              break;
            }
          }
          if (!target) {
            console.log('Change skipped: app not found for Id:', order && order.Id);
            return;
          }
          if ('Id' in order) target.Id = order.Id;
          if ('Subject' in order) target.Subject = order.Subject;
          if ('StartTime' in order) target.StartTime = order.StartTime;
          if ('EndTime' in order) target.EndTime = order.EndTime;
          if ('Location' in order) target.Location = order.Location;
          if ('IsAllDay' in order) target.IsAllDay = order.IsAllDay;
          if ('RecurrenceRule' in order) target.RecurrenceRule = order.RecurrenceRule;
          if ('StartTimezone' in order) target.StartTimezone = order.StartTimezone;
          if ('EndTimezone' in order) target.EndTimezone = order.EndTimezone;
        });
      }
      if (deleted && deleted.length > 0) {
        console.log('deleted: ' + deleted.length);
        deleted.forEach((order) => {
          const eventID = (order && typeof order === 'object') ? order.Id : order;
          let idx = -1;
          for (let i = 0; i < eventsData.length; i++) {
            if (sameId(eventsData[i].Id, eventID)) {
              idx = i;
              break;
            }
          }
          if (idx === -1) {
            console.log("Delete skipped: app not found.", eventID);
            return;
          }
          eventsData.splice(idx, 1);
        });
      }
    }
  }
};
export default resolvers;
```
### 6) Run the GraphQL server
```bash
npm run dev
```
You should see the server on **http://localhost:4400** (GraphQL endpoint is **/graphql**).

> **CORS**: If your browser reports CORS errors, consider using an Angular proxy (recommended) or switch to an Express + Apollo server where you control headers. For dev, the Angular proxy is the simplest.

## Frontend: Integrate the Angular Scheduler with GraphQL

### 1) Create the Angular app
```bash
ng new SchedulerApp --style=css --routing=false
cd SchedulerApp
```
### 2) Install the Scheduler package
```bash
npm install @syncfusion/ej2-angular-schedule --save
```


### 3) Include required CSS
Add to **src/styles.css**:
```css
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-angular-schedule/styles/tailwind3.css";
```
> You can switch themes at any time; see Syncfusion’s Theme Studio if you need custom theming.

### 4) Add the Scheduler to the template 

**[src/app/app.html]**

```html
<ejs-schedule
  #scheduleObj
  width="100%"
  height="550px"
  [selectedDate]="selectedDate"
  [eventSettings]="eventSettings">
</ejs-schedule>
```

### 5) Configure DataManager with GraphQLAdaptor

The GraphQLAdaptor converts Scheduler actions into GraphQL requests and maps responses back.

 **[src/app/app.ts]**

```ts
import { Component, ViewChild } from '@angular/core';
import { DataManager, GraphQLAdaptor } from '@syncfusion/ej2-data';
import { ScheduleModule,DayService, WeekService, WorkWeekService, MonthService, AgendaService, ScheduleComponent, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports:[ScheduleModule],
  providers: [ScheduleModule, DayService, WeekService, WorkWeekService, MonthService, AgendaService]
})
export class App {
  @ViewChild('scheduleObj') scheduleObj!: ScheduleComponent;
  public dataSource!: DataManager;
  public eventSettings!: EventSettingsModel;
  title!: string;
  ngOnInit(): void {
    this.dataSource = new DataManager({
      url: 'http://localhost:xxxx/', //xxxx represents the port number.
      adaptor: new GraphQLAdaptor({
        response: {
            result: 'getEvents.result',
        },
        query:`query getEvents($datamanager: DataManager) {
          getEvents(datamanager: $datamanager) {
              result { Id, Subject, StartTime, EndTime, Location, IsAllDay, RecurrenceRule, StartTimezone, EndTimezone }
          }
        }`,
        getMutation: function (action: any): string {
          if (action === 'batch') {
            return `mutation BatchUpdate($added: [AppointmentFields], $changed: [AppointmentFields], $deleted: [AppointmentFields]){
              batchUpdate(added: $added, changed: $changed, deleted: $deleted) {
                Id, Subject, StartTime, EndTime, Location, IsAllDay, RecurrenceRule, StartTimezone, EndTimezone
              }
            }`;
          }
          return '';
        }
      })
    });
    this.eventSettings = { dataSource: this.dataSource };
  }
  public selectedDate: Date = new Date(2026, 1, 11);
}
```

> **Note**: If you prefer NgModule instead of a standalone component, import `ScheduleModule` in your AppModule and move providers there.

---

## Data Flow Overview
```
Angular (Scheduler) ── DataManager + GraphQLAdaptor ──▶ GraphQL Server
      ▲                                                   │
      └────────────── JSON (result mapping) ◀─────────────┘
```
- Scheduler sends DataManager payloads (with date range, paging, etc.)
- GraphQLAdaptor turns them into a query or mutation
- Server resolvers filter/process data and respond in `{ result: [...] }`

---

## Running the Apps

### 1) Start the GraphQL server
```bash
cd GraphQLServer
npm run dev
```
GraphQL endpoint: **http://localhost:4400/graphql**

### 2) Start the Angular app
```bash
cd ../SchedulerApp
npm start
```
Angular dev server: **http://localhost:4200/**

> If you face CORS errors, set up an Angular dev proxy (recommended) to forward `/graphql` to `http://localhost:4400/graphql`.

---

## Troubleshooting & Tips

**CORS errors**
- Use an Angular proxy: create `proxy.conf.json` and run `ng serve --proxy-config proxy.conf.json`.

**Wrong endpoint URL**
- Ensure `url: 'http://localhost:4400/graphql'` in the DataManager configuration.

**No data showing**
- Check that `response.result = 'getEvents.result'` matches the GraphQL response path.
- Verify the date range (Scheduler sends StartDate/EndDate in `datamanager.params`).

**Schema mismatch**
- Field names and types in Angular query must match `schema.graphql` exactly.

**In‑memory resets**
- The demo data resets on server restart. Hook up a database for persistence.

---

## Appendix A: Example DataManager Payload
Below is a simplified example of what the Adaptor might send for reads (actual shape can vary by action):

```json
{
  "query": "query getEvents($datamanager: DataManager) { getEvents(datamanager: $datamanager) { result { Id Subject StartTime EndTime Location } } }",
  "variables": {
    "datamanager": {
      "skip": 0,
      "take": 50,
      "params": "{"StartDate":"2026-02-11T00:00:00.000Z","EndDate":"2026-02-18T00:00:00.000Z"}"
    }
  }
}
```

---

## Appendix B: Complete Folder Structures

**GraphQLServer**
```
GraphQLServer/
├─ package.json
└─ src/
   ├─ db.js
   ├─ resolvers.js
   └─ schema.graphql
```

**SchedulerApp** (key files only)
```
SchedulerApp/
├─ src/
│  ├─ app/
│  │  ├─ app.html
│  │  └─ app.ts
│  └─ styles.css
└─ package.json
```

---

## Summary
- You created a **Node.js GraphQL** server with a clean schema and resolvers
- You configured Angular’s **DataManager + GraphQLAdaptor** to translate Scheduler actions into GraphQL operations
- You enabled **full CRUD** in a single, efficient batch mutation

This structure provides a maintainable foundation you can extend with authentication, databases, and advanced filtering.

---

## Reference Sample Repository
A complete working sample:

**Syncfusion Scheduler with GraphQL Sample**
https://github.com/SyncfusionExamples/ej2-angular-scheduler-crud-graphql-adaptor
