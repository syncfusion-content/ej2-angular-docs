---
layout: post
title: Angular Gantt Chart - GraphQL Adaptor | Syncfusion
description: Angular Gantt Chart GraphQL adaptor explains using GraphQL services to fetch and mutate task data and related datasets for timeline rendering.
control: GraphQL Adaptor
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# GraphQL Remote Data Binding in Syncfusion Angular Gantt

The [GraphQLAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors/graphql-adaptor) in the Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager enables the Angular Gantt to interact with GraphQL services by translating the Gantt's data requests and task update actions into GraphQL queries and mutations. Use this adaptor when backend exposes a GraphQL API and want flexible, efficient data fetching and mutation for Gantt tasks. GraphQLAdaptor is best for scenarios requiring precise data selection and real-time updates, offering capabilities not present in REST or OData adaptors.

For server configuration and schema expectations (queries, mutations, and response shapes), consult the GraphQL backend documentation appropriate for stack. After the GraphQL service is available, configure the Gantt's DataManager to use the GraphQL adaptor as its task data source.

[GraphQL](https://graphql.org/learn/introduction/) provides a single, flexible endpoint where clients specify the exact data shape required. For the Gantt this means requesting task fields, parent/child relationships, resource assignments, and any server‑computed scheduling values in one query. Mutations allow the client to create, update, or delete tasks and dependencies while the server enforces scheduling rules and returns reconciled task states.

**Key GraphQL concepts relevant to Gantt:**
- Queries: request task data and related entities; useful for timeline windowing and resolving related resources in a single request.
- Mutations: perform create, update, and delete operations for tasks and dependencies; the server performs validation and scheduling recalculation.
- Schema and resolvers: define how task queries and mutations are resolved and which fields (for example, start/end, duration, parentId, resources) are available.

[Node.js](https://nodejs.org/learn) is a fast and efficient JavaScript runtime built on Google’s V8 engine. It enables JavaScript to run on the server, making it a popular platform for building web APIs, real‑time applications, and modern backend services. Node.js offers a non‑blocking, event‑driven architecture that supports high performance and scalability.

## Prerequisites

| Software / Package          | Recommended version          | Purpose                                 |
|-----------------------------|------------------------------|--------------------------------------   |
| Node.js                     | 20.x LTS or later            | Runtime                                 |
| npm / yarn / pnpm           | 11.x or later                | Package manager                         | 
| Angular CLI                 | 17.x or later                | Use this to create the Angular application |
| TypeScript                  | 5.x or later                 | Server‑side and client‑side type safety |


## Key topics

| # | Topics | Link |
|---|--------|-------|
| 1 | Set up and configure the GraphQL backend using Node.js | [View](#setting-up-the-graphql-backend-using-nodejs) |
| 2 | Integrate the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt chart with the GraphQL API | [View](#integrating-syncfusion-angular-gantt-with-graphql) |
| 3 | Perform CRUD operations | [View](#step-4-perform-crud-operations) |
| 4 | Run the GraphQL application | [View](#running-the-application) |
| 5 | Explore a complete working sample available on GitHub | [View](#complete-sample-repository) |

### GraphQL vs REST comparison
 
Understanding the key differences between GraphQL and REST helps appreciate the benefits of using GraphQL with Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt chart:
 
| Aspect | REST API | GraphQL |
|--------|----------|---------|
| **Endpoints** | Multiple endpoints (/api/orders, /api/customers). | Single endpoint (/graphql). |
| **Data fetching** | Fixed data structure per endpoint. | Flexible, client specifies exact data needs. |
| **Over-fetching** | Common (gets unnecessary data). | Eliminated (requests only needed fields). |
| **Under-fetching** | Requires multiple requests. | Single request for complex data. |
| **Versioning** | Requires API versioning (v1, v2). | Schema evolution without versioning. |
| **Type system** | Not built-in | Strongly typed schema. |
| **Query format** | URL parameters | Structured query language. |
| **Real-time** | Requires separate solution. | Built-in subscriptions support. |

**GraphQL Query example:**

```ts
query {
  getTasks {
    result {
      TaskID
      TaskName
      StartDate
    }
    count
  }
}
```
## Setting up the GraphQL backend using Node.js

The GraphQL backend acts as the central data service, handling queries and mutations that power the Syncfusion Angular Gantt chart.

### Step 1: Create the GraphQL server and install required packages

Before configuring the GraphQL API, a new folder must be created to host the GraphQL server. This folder will contain the server configuration, required dependencies, and sample data used for processing GraphQL queries.

For this guide, a GraphQL server named **GraphQLServer** is created using Node.js and TypeScript.

**Create project folder:**

Open a terminal ( for example, an integrated terminal in Visual Studio Code or Windows Command Prompt opened with  <kbd>Win+R</kbd> or macOS Terminal launched with <kbd>Cmd+Space</kbd> ) and run the following command to create and navigate to the project folder:

```bash
mkdir GraphQLServer
cd GraphQLServer
mkdir src
cd src
```
**Configure TypeScript:**

TypeScript configuration tells the compiler to convert TypeScript to JavaScript and sets up the project structure.

Create a new **tsconfig.json** file in the **GraphQLServer** folder using the below command:

```bash
npx tsc --init
```

Replace (**GraphQLServer/tsconfig.json**) file content with the following configuration:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "lib": ["ES2020"],
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "strict": true,
    "rootDir": "src",
    "outDir": "dist"
  },
  "include": ["src"]
}
```

**Install required packages:**

The GraphQL server is set up using graphpack, a lightweight GraphQL development tool. TypeScript support is added to enable strongly typed development, and the Syncfusion<sup style="font-size:70%">&reg;</sup> `ej2-data` package is installed to handle data operations such as filtering, sorting, and paging.

Run the following commands in the terminal window to install the required packages:

```bash
npm i graphpack
npm install -D typescript ts-node @types/node
npm install @syncfusion/ej2-data --save
```
- `graphpack`: Lightweight GraphQL server and development environment.
- `typescript`, `ts-node`: Enables TypeScript-based development.
- `@syncfusion/ej2-data`: Provides data utilities for advanced data operations.

**Create sample datasource:**

After installing the required packages, create a new file named **data.ts** inside the **src** folder. This file acts as an in‑memory datasource for the GraphQL server.

```ts
[data.ts]

export const tasks: Task[] = [
  { 
    TaskID: 1, 
    TaskName: 'Planning and Permits', 
    StartDate: '2025-04-02', 
    EndDate: '2025-04-10', 
    Duration: 7, 
    Progress: 100 
  },
  ....
];
```
The **GraphQLServer** folder is now created, required packages are installed, and a sample data source is configured. The project is ready for defining the GraphQL schema, resolvers, and server configuration.

### Step 2: Configuring schema in GraphQL

The GraphQL schema defines the structure of the "task" data model and the server‑side operations available for performing CRUD actions.

**Instructions:**
1. Create a new schema file (**src/schema.graphql**) in the **GraphQLServer** folder.
2. Add type definition for **GanttTask**:

    ```
    #--- Task type definition ---
    type GanttTask {
      TaskID: Int!
      TaskName: String!
      StartDate: String
      # include additional fields here.
    }
    ```
3. Add type definition for **GanttReturnType**:

    ```
    # --- Return type for Gantt ---
    type GanttReturnType {
      result: [GanttTask!]!
      count: Int!
    }
    ```
4. Add type definition for **ResourceInfo**:

    ```
    # --- Resource type definition ---
    type ResourceInfo {
      resourceId: Int!
      resourceName: String
      resourceGroup: String
      resourceUnit: Int
    } 
    ```
5. Add type definition for **ResourceInfoInput**:

    ```
    # --- Resource input ---
    input ResourceInfoInput {
      resourceId: Int!
      resourceName: String
      resourceGroup: String
      resourceUnit: Int
    } 
    ```
6. Add type definition for **GanttTaskInput**:

    ```
    # --- Gantt task input for mutation operations ---
    input GanttTaskInput {
      TaskID: Int!
      TaskName: String!
      StartDate: String
      # include additional fields here.
    }
    ```
7. Define the Query type to expose the "getTasks" operation that returns the list of "tasks".

    ```
    type Query {
      getTasks: GanttReturnType!
      task(id: Int!): GanttTask
    }
    ```
8. Define Mutation types for CRUD operations.

    ```
    type Mutation {
      addTask(value: GanttTaskInput!): GanttTask!
      updateTask(value: GanttTaskInput!): GanttTask!
      deleteTask(key: ID!): Boolean!
    }
    ```
    **Key parameters definitions:**
    - **key**: The unique identifier (primary key) of the task to be deleted.
    - **value**: An object containing the created or updated task details.

### Step 3: GraphQL - Query resolvers

A resolver in GraphQL is a function responsible for fetching the data for a specific field in a GraphQL schema.

When a client sends a GraphQL query, resolvers run behind the scenes to retrieve the requested information from a database, API, or any data source and return it in the format defined by the schema. 

**Instructions:**
1. Create a new resolver file (**src/resolvers.ts**) inside the **GraphQLServer** folder.
2. Import the required data source (**e.g., taskDetails**) from the data file.
3. Implement the "getTasks" resolver to handle the logic for the "getTasks" query defined in the schema.
4. Ensure the resolver returns the processed list of "tasks" in the structure specified by the schema.

```ts
import { taskDetails } from './data';
let tasks: GanttTask[] = [...taskDetails];

const resolvers = {
  Query: {
  getTasks: (): GanttReturnType => {
      return {
        result: tasks,
        count: tasks.length
      };
    },
    task: (_: unknown, { id }: { id: string | number }): GanttTask | null => {
      return tasks.find(t => String(t.TaskID) === String(id)) || null;
    },
    ....
  }
}
```

### Step 4: GraphQL - Mutation resolvers

Mutations in GraphQL are used to modify data on the server, such as creating, updating, or deleting records.

Previously, the CRUD mutation types were defined in the **schema.graphql** file. The next step is to implement these mutation actions inside the **resolver.ts** file.

**Instructions:**
1. Open the (**src/resolvers.ts**) file.
2. Implement the "addTask" mutation.

    ```ts
    import { taskDetails } from './data';
    let tasks: GanttTask[] = [...taskDetails];
    ....
    Mutation: {
        addTask: (_: unknown, { value }: CreateTaskArgs): GanttTask => {
            const exists = tasks.find(t => String(t.TaskID) === String(value.TaskID));
            if (exists) throw new Error('TaskID already exists');
            const newTask: GanttTask = { ...value };
            tasks.push(newTask);
            return newTask;
        },
    }
    ```
    **"addTask" - code breakdown:**

    | Step | Purpose | Implementation |
    |------|---------|-----------------|
    | **1. Receive input** | Read incoming task details sent from the client. | `value` parameter inside "addTask" contains all submitted fields. |
    | **2. Prepare record** | Store the incoming values as a new task object. | `const newTask = { ...value}` |
    | **3. Insert record** | Add the "task" to the existing data collection. | use `tasks.push(newtask)` to add record. |
    | **4. Return created** | Send the inserted record back to the client. | return `newTask` - returns the newly added "task" so the client can update the Gantt instantly. |

3. Implement the "updateTask" mutation:

    ```ts
    Mutation: {
        updateTask: (_: unknown, { value }: UpdateTaskArgs): GanttTask => {
            const taskIndex = tasks.findIndex(t => String(t.TaskID) === String(value.TaskID));
            if (taskIndex === -1) throw new Error('Task not found');
            tasks[taskIndex] = { ...tasks[taskIndex], ...value };
            return tasks[taskIndex];
        }
      }
    ```
    **"updateTask" - code breakdown:**

    | Step | Purpose | Implementation |
    |------|---------|-----------------|
    | **1. Receive input** | Accept the updated field values. | Resolver parameter `value`. |
    | **2. Locate record** | Find the matching "task" index using a task ID. | `findIndex(t => String(t.TaskID) === String(value.TaskID))` |
    | **3. Verification** | Fail fast if no matching task exists. | `if (taskIndex === -1) throw new Error('Task not found');` |
    | **4. Apply updates** | Merge incoming fields into the located task. | `tasks[taskIndex] = { ...tasks[taskIndex], ...value }` |
    | **5. Return updated** | Send back the modified "task" to the client. | return `tasks[taskIndex]` object with all updates applied. |

4. Implement the "deleteTask" mutation.

    ```ts
    Mutation: {
        deleteTask: (_: unknown, { key }: DeleteTaskArgs): boolean => {
            const taskIndex = tasks.findIndex(t => String(t.TaskID) === String(key));
            if (taskIndex === -1) return false;
            tasks.splice(taskIndex, 1); // simple delete
            return true;
        }

      }
      ```
    **"deleteTask" - code breakdown:**

    | Step | Purpose | Implementation |
    |------|---------|-----------------|
    | **1. Receive key** | Backend receives only the primary key value from client. | Resolver parameter `key` = `taskId` |
    | **2. Locate index** | Identify the array index of the target record using the key. | `findIndex(t => String(t.TaskID) === String(key))` |
    | **3. Validate existence** | Ensure a matching record exists before deletion. | `if (taskIndex === -1) return false` |
    | **4. Remove record** | Delete the record from the data source at the located index. | `tasks.splice(taskIndex, 1)` |
    | **5.  Return status of deletion** | Return a boolean indicating whether the deletion was successful. | return `true` or `false`|

Now all required GraphQL types, queries, and mutations have now been fully added.

## Integrating Syncfusion Angular Gantt with GraphQL

This section describes conceptually how the Gantt consumes data through GraphQL. Implementation and installation steps are covered in platform‑specific setup guides and are intentionally excluded here.

Create a new Angular application using the Angular CLI, which provides a streamlined workflow, project structure, and optimized build configuration.

Open a Visual Studio Code terminal or Command Prompt and run the below command:

```bash
ng new GanttClient
cd GanttClient
```
This command creates an Angular application named **GanttClient** with the essential folder structure and files required to begin development immediately.

The integration process begins by installing the required Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt chart packages before establishing the GraphQL connection.

### Step 1: Packages and dependencies

Install the necessary Syncfusion<sup style="font-size:70%">&reg;</sup> packages using the below command in Visual Studio Code terminal or Command Prompt:

```bash
npm install @syncfusion/ej2-angular-gantt --save
npm install @syncfusion/ej2-data --save
```
- `@syncfusion/ej2-angular-gantt` –  required to use the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt chart component.
- `@syncfusion/ej2-data` – Provides data utilities for binding and manipulating Gantt chart data.

### Step 2: CSS and component styling

- Include the required Syncfusion theme and component styles so the Gantt and its input controls render correctly. Add these imports to **styles.css**:

```css
/* Basic Gantt Chart styles */
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-gantt/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-treegrid/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";

/* For editing, toolbar, and dialog features */
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";

/* For rich text editor in dialog notes tab */
@import "../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css";
```

For this project, the "Tailwind3" theme is used. A different theme can be selected or the existing theme can be customized based on project requirements. Refer to the [Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components Appearance](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio) documentation to learn more about theming and customization options.

### Step 3: Configure GraphQL Adaptor

The `GraphQLAdaptor` needs to be configured on the Syncfusion<sup style="font-size:70%">&reg;</sup> `DataManager` so that Gantt interactions are translated into GraphQL‑compatible requests. Configure the `DataManager` with the adaptor, map the server's response paths (`result` and `count`), and assign the instance to the Gantt's `dataSource`.

**Instructions:**
1. Open `src/app/app.component.ts` in the Angular client folder.
2. Configure `DataManager` with `GraphQLAdaptor` and map the response (`result` and `count`).
3. Ensure the GraphQL schema exposes a query (for example, `getTasks`) that returns `{ count, result }`.
4. Render the Gantt component with `dataSource` and define columns matching the fields returned by the query.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component } from '@angular/core';
import { DataManager, GraphQLAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public ganttDataManager: DataManager = new DataManager({
    url: 'http://localhost:xxxx/', // Here xxxx represents the port number.
    adaptor: new GraphQLAdaptor({
      // Map to { result, count } in GraphQL payload
      response: {
        result: 'getTasks.result',
        count:  'getTasks.count'
      },
      // READ: fetch flat tasks (no DataManagerInput)
      query:
      `query getTasks {
        getTasks {
          count
          result {
            TaskID
            TaskName
            # add additional fields to fetch initially, e.g.:StartDate
          }
        }
      }`,
      mutation: {
        update: 'updateTask',
        insert: 'addTask',
        remove: 'deleteTask'
      }
    }),
    crossDomain: true
  });

  public taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress'
  };
}
{% endhighlight %}

{% highlight ts tabtitle="app.component.html" %}
<ejs-gantt
  [dataSource]="ganttDataManager"
  [taskFields]="taskFields"
  height="400px">
  <e-columns>
    <e-column field="TaskID" headerText="Task ID" width="80" type="number" isPrimaryKey="true"></e-column>
    <!-- Include additional columns here -->
  </e-columns>
</ejs-gantt>
{% endhighlight %}
{% endtabs %}

**GraphQL Query structure explained in detail**

The Query property is critical for understanding the data flows. Let's break down each component:

```
query getTasks {}
```

**Line breakdown:**
- `query` - GraphQL keyword indicating a read operation.
- `getTasks` - Name of the query (must match resolver name with camelCase).


```
getTasks{}
```

**Line breakdown:**
- `getTasks` - Calls the backend resolver to fetch task data.
- The resolver returns the requested `count` and `result` fields.


```
count
    result {
    TaskID
    TaskName 
    }
```

**Line breakdown:**
- `count` - Returns total number of records.
- Example: If "150" total "task" records exist, count = 150.
- `result` - Contains the array of "task" records.
- `{ ... }` - List of fields to return for each record.
- Only requested fields are returned (no over-fetching).

**Response structure example**

When the backend executes the query, it returns a JSON response in this structure (example):

```json
{
  "data": {
    "getTasks": {
      "count": 1,
      "result": [
        {
          "TaskID": 1,
          "TaskName": "Planning and Permits",
          "StartDate": "2025-04-02",
          "EndDate": "2025-04-10",
          "Duration": 7,
          "Progress": 100,
          "ParentId": null,
          "Predecessor": null
        }
      ]
    }
  }
}
```

**Response structure explanation:**

| Part | Purpose | Example |
|------|---------|--------|
| `data` | Root object returned for every successful GraphQL query. | Always present in successful response. |
| `getTasks` | Matches the GraphQL query name; contains task data | Contains **count** and **result**. |
| `count` | Total number of records available. | 1 (in this example). |
| `result` | Array of "tasks" objects. | [ {...}, {...} ] |
| Each `field` in result | Matches GraphQL query field names. | Field values from database. |

### Step 4: Perform CRUD operations

CRUD operations (Create, Read, Update, Delete) are supported in the Gantt chart for managing data. The Gantt chart provides built-in dialogs and buttons to perform these operations, while the backend resolvers handle the actual data modifications.

Enable editing operations in the Gantt chart by configuring `editSettings` and setting `allowEditing`, `allowAdding`, and `allowDeleting` to `true`.

The "getMutation" function in the `GraphQLAdaptor` handles the Gantt chart CRUD actions by sending the appropriate mutation for each action (insert, update, or delete) to the GraphQL server.

> Previously, the required mutation definitions and schema for CRUD operations were created in the **resolver.ts** and **schema.graphql** files. The next step is to enable CRUD actions in the client Gantt chart by using the GraphQL adaptor.

**Insert:**

The Insert operation enables adding new "task" records to the task list. When the Add button in the toolbar is selected, the Gantt chart opens a dialog that displays input fields for entering task details. 

After the required data is submitted, the GraphQL mutation sends the new "task" record to the backend for processing and storage.

Open `src/app/app.component.ts` and configure the `getMutation` function in the `GraphQLAdaptor` to return the GraphQL mutation for the insert action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
export class AppComponent {
  public ganttDataManager: DataManager = new DataManager({
    url: 'http://localhost:xxxx/', // Here xxxx represents the port number.
    adaptor: new GraphQLAdaptor({
      // Map to { result, count } in GraphQL payload
      response: {
        result: 'getTasks.result',
        count:  'getTasks.count'
      },
      // READ: fetch flat tasks (no DataManagerInput)
      query:
      `query getTasks {
        getTasks {
          count
          result {
            TaskID
            TaskName
            # add additional fields to fetch initially, e.g.:StartDate
          }
        }
      }`,
      mutation: {
        update: 'updateTask',
        insert: 'addTask',
        remove: 'deleteTask'
      },
      // mutation for perform insert.
      getMutation: function (action: any): string {
        if (action === 'insert') {
          return `
          mutation AddTask($value: GanttTaskInput!) {
            addTask(value: $value) {
              TaskID
              TaskName
              # add additional fields to fetch initially, e.g.:StartDate
            }
          }`;
        }
      }
    }),
    crossDomain: true
  });
}
{% endhighlight %}
{% endtabs %}

**Update:**

The Update operation enables editing of existing records. When the Edit option in the toolbar is selected and a row is chosen, the Gantt chart opens a dialog displaying the current values of the selected record. 

After the required modifications are submitted, a GraphQL mutation sends the updated record to the backend for processing.

Open `src/app/app.component.ts` and configure the `getMutation` function in the `GraphQLAdaptor` to return the appropriate GraphQL mutation for the update action (for example, `updateTask`).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
export class AppComponent {
  public ganttDataManager: DataManager = new DataManager({
    url: 'http://localhost:xxxx/', // Here xxxx represents the port number.
    adaptor: new GraphQLAdaptor({
      // Map to { result, count } in GraphQL payload
      response: {
        result: 'getTasks.result',
        count:  'getTasks.count'
      },
      // READ: fetch flat tasks (no DataManagerInput)
      query:
      `query getTasks {
        getTasks {
          count
          result {
            TaskID
            TaskName
            # add additional fields to fetch initially, e.g.:StartDate
          }
        }
      }`,
      mutation: {
        update: 'updateTask',
        insert: 'addTask',
        remove: 'deleteTask'
      },
      // mutation for perform update.
      getMutation: function (action: any): string {
        if (action === 'update') {
          return `
          mutation UpdateTask($value: GanttTaskInput!) {
            updateTask(value: $value) {
              TaskID
              TaskName
              # add additional fields to fetch initially, e.g.:StartDate
            }
          }`;
        }
      }
    }),
    crossDomain: true
  });
}
{% endhighlight %}
{% endtabs %}

**Delete:**

The Delete operation enables removal of records from the application. When the `Delete` option in the `toolbar` is selected and a row is marked for removal, a confirmation prompt appears. After confirmation, a GraphQL mutation sends a delete request to the backend containing only the primary key value.

Open `src/app/app.component.ts` and configure the `getMutation` function in the `GraphQLAdaptor` to return the delete mutation that matches the `deleteTask` mutation defined in the schema.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
export class AppComponent {
  public ganttDataManager: DataManager = new DataManager({
    url: 'http://localhost:xxxx/', // Here xxxx represents the port number.
    adaptor: new GraphQLAdaptor({
      // Map to { result, count } in GraphQL payload
      response: {
        result: 'getTasks.result',
        count:  'getTasks.count'
      },
      // READ: fetch flat tasks (no DataManagerInput)
      query:
      `query getTasks {
        getTasks {
          count
          result {
            TaskID
            TaskName
            # add additional fields to fetch initially, e.g.:StartDate
          }
        }
      }`,
      mutation: {
        update: 'updateTask',
        insert: 'addTask',
        remove: 'deleteTask'
      },
      // mutation for perform delete.
      getMutation: function (action: any): string {
        if (action === 'remove') {
          return `
          mutation DeleteTask($key: ID!) {
            deleteTask(key: $key)
          }`;
        }
      }
    }),
    crossDomain: true
  });
}
{% endhighlight %}
{% endtabs %}

## Overriding processResponse to handle mutation responses

By default the `GraphQLAdaptor` maps read queries that return `{ result, count }`. For CRUD actions the server often returns a single object (insert/update), a boolean (delete) or a different wrapper. To ensure the Gantt's `DataManager` correctly updates after mutations, override `processResponse` to normalize server responses into the shapes the adaptor expects.

Key points:
- Normalize single-item mutation responses into arrays when the client expects an array.
- Preserve the `{ result, count }` structure for reads so paging and counts continue to work.
- Fall back to `super.processResponse(...)` for any unhandled payloads.

Create a separate file named **graphql-crud-adaptor.ts** in the **src/app** folder to define the extended adaptor class, then import and use it in **app.component.ts**.

Recommended adaptor implementation (reviewed and improved):

{% tabs %}
{% highlight ts tabtitle="graphql-crud-adaptor.ts" %}
import { GraphQLAdaptor } from '@syncfusion/ej2-data';

export class GraphQLCrudAdaptor extends GraphQLAdaptor {
  processResponse(resData: any, ds: any, query: any, xhr: any, request: any) {
    if (resData && resData.data) {
      const data = resData.data;

      // READ - expected shape: { result: [...], count: N }
      if (data.getTasks) {
        return data.getTasks;
      }

      // UPDATE - normalize to array so DataManager can consume it
      if (data.updateTask) {
        const updated = Array.isArray(data.updateTask) ? data.updateTask : [data.updateTask];
        return { result: updated, count: updated.length };
      }

      // INSERT - normalize to array
      if (data.addTask) {
        const added = Array.isArray(data.addTask) ? data.addTask : [data.addTask];
        return { result: added, count: added.length };
      }

      // DELETE - server may return boolean; return as-is so calling code can handle it
      if (typeof data.deleteTask !== 'undefined') {
        return { result: data.deleteTask };
      }
    }

    // Fallback to default behavior
    return super.processResponse(resData, ds, query, xhr, request);
  }
}
{% endhighlight %}

{% highlight ts tabtitle="app.component.ts" %}
import { Component } from '@angular/core';
import { DataManager } from '@syncfusion/ej2-data';
import { GraphQLCrudAdaptor } from './graphql-crud-adaptor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public ganttDataManager: DataManager = new DataManager({
    url: 'http://localhost:xxxx/', // Here xxxx represents the port number.
    adaptor: new GraphQLCrudAdaptor({ // Updated GraphQLAdaptor for CRUD operations
      // Map to { result, count } in GraphQL payload
      response: {
        result: 'getTasks.result',
        count:  'getTasks.count'
      },
      // READ: fetch flat tasks (no DataManagerInput)
      query:
      `query getTasks {
        getTasks {
          count
          result {
            TaskID
            TaskName
            # add additional fields to fetch initially, e.g.:StartDate
          }
        }
      }`,
      mutation: {
        update: 'updateTask',
        insert: 'addTask',
        remove: 'deleteTask'
      }
    }),
    crossDomain: true
  });
}
{% endhighlight %}
{% endtabs %}

## Running the application

Open a terminal or Command Prompt. Run the server application first, then start the client application.

### Run the GraphQL server
- Run the following commands to start the server:

```bash
  cd GraphQLServer
  npm run dev
```

### Run the client
 - Execute the below commands to run the client application:

```bash
    cd GanttClient
    ng serve
```

## Troubleshooting

- Empty response: Verify the GraphQL query returns the expected fields and that the server resolves the requested entities for the requested timeline range.
- 404 or endpoint issues: Confirm the GraphQL endpoint URL configured in the DataManager is correct.
- Server errors: Check server logs and ensure mutations and resolvers handle requested payloads without exceptions.
- Cross-origin errors: Ensure cross‑origin requests are permitted when frontend and backend are hosted separately.
- Related data mismatches: When related datasets are fetched remotely, confirm the schema exposes the expected fields used for display and dependency resolution.

## Complete sample repository (reference)

For the complete working implementation of this example, refer to the [GitHub](https://github.com/SyncfusionExamples/ej2-angular-gantt-chart-samples/tree/master/GraphQlAdaptor) repository.


## See also
- [Hybrid data binding](./remote-save-adaptor)
- [RESTful CRUD Operations in ASP.NET Web Forms](./web-method-adaptor)
- [Data binding](https://ej2.syncfusion.com/angular/documentation/gantt/data-binding)
