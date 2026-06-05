---
layout: post
title: Angular Grid - Node.js GraphQL Backend | Syncfusion.
description: Integrate Syncfusion Angular Grid with Node.js and GraphQL backend to perform CRUD operations seamlessly.
control: GraphQL Adaptor
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Connecting the Syncfusion Angular Grid with GraphQL backend in Node.js

[GraphQL](https://graphql.org/learn/introduction/) is a query language that allows applications to request exactly the data needed, nothing more and nothing less. Unlike traditional REST APIs that return fixed data structures, GraphQL enables the client to specify the shape and content of the response.

**Traditional REST APIs** and GraphQL differ mainly in the way data is requested and returned: **REST APIs expose** multiple endpoints that return fixed data structures, often including unnecessary fields and requiring several requests to fetch related data, while GraphQL uses a single endpoint where queries define the exact fields needed, enabling precise responses and allowing related data to be retrieved efficiently in one request. This makes GraphQL especially useful for **Angular Grid integration**, the **reason** is data‑centric UI components require well‑structured and selective datasets to support efficient filtering, reduce network calls, and improve overall performance.

**Key GraphQL concepts:**
- **Queries**: A query is a request to read data. Queries do not modify data; they only retrieve it.
- **Mutations**: A mutation is a request to modify data. Mutations create, update, or delete records.
- **Resolvers**: Each query or mutation is handled by a resolver, which is a function responsible for fetching data or executing an operation. **Query resolvers** handle **read operations**, while **mutation resolvers** handle **write operations**.
- **Schema**: Defines the structure of the API. The schema describes available data types, the fields within those types, and the operations that can be executed. Query definitions specify the way data can be retrieved, and mutation definitions specify the way data can be modified. 

[Node.js](https://nodejs.org/learn) is a fast and efficient JavaScript runtime built on Google’s V8 engine. It enables JavaScript to run on the server, making it a popular platform for building web APIs, real‑time applications, and modern backend services. Node.js offers a non‑blocking, event‑driven architecture that supports high performance and scalability.

## Prerequisites

| Software / Package          | Recommended version          | Purpose                                 |
|-----------------------------|------------------------------|--------------------------------------   |
| Node.js                     | 20.x LTS or later            | Backend runtime                         |
| npm                         | Latest (11.x+)               | Package manager                         | 
| Angular CLI                 | 18.x or later                | Create and manage Angular apps          |

## Key topics

| # | Topics | Link |
|---|--------|-------|
| 1 | Set up and configure the GraphQL backend using Node.js | [View](#setting-up-the-graphql-backend-using-nodejs) |
| 2 | Integrate the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid with the GraphQL API | [View](#integrating-syncfusion-angular-grid-with-graphql) |
| 3 | Implement data operations including filtering, searching, sorting, and paging | [View](#step-4-add-toolbar-with-crud-and-search-options) |
| 4 | Perform CRUD operations | [View](#step-9-perform-crud-operations) |
| 5 | Run the GraphQL application | [View](#running-the-application) |
| 6 | Explore a complete working sample available on GitHub | [View](#complete-sample-repository) |

## Setting up the GraphQL backend using Node.js

The GraphQL backend acts as the central data service, handling queries and mutations that power the Angular Data Grid.

### Step 1: Create the GraphQL server and install required packages

Before configuring the GraphQL API, a new folder must be created to host the GraphQL server. This folder will contain the server configuration, required dependencies, and sample data used for processing GraphQL queries.

For this guide, a GraphQL server named **GraphQLServer** is created using Node.js.

**Create project folder:**

Open a terminal (for example, an integrated terminal in Visual Studio Code or Windows Command Prompt opened with  <kbd>Win+R</kbd>, or macOS Terminal launched with <kbd>Cmd+Space</kbd> ) and run the following command to create and navigate to the project folder:

```bash
mkdir GraphQLServer
cd GraphQLServer
mkdir src
cd src
```

**Install required packages:**

The GraphQL server is set up using graphpack, a lightweight GraphQL development tool. The Syncfusion<sup style="font-size:70%">&reg;</sup> `ej2-data` package is installed to handle data operations such as filtering, sorting, and paging.

Run the following commands in the terminal window to install the required packages:

```bash
npm i graphpack
npm install @syncfusion/ej2-data --save
```
- `graphpack`: Lightweight GraphQL server and development environment.
- `@syncfusion/ej2-data`: Provides data utilities for advanced data operations.

**Create sample datasource** 

After installing the required packages, create a new file named **data.js** inside the **src** folder. This file acts as an in‑memory datasource for the GraphQL server.

```js
[data.js]

export const productDetails = [
  {
    "productId": "PROD-ELC-0001",
    "productImage": "assets/productImages/watch2.png",
    "productName": "Smartwatch Lite (Max)",
    "category": "Electronics",
    "brand": "Philips",
    "sellingPrice": 98.0,
    "mrp": 100.0,
    "discount": 0.02,
    "stockQuantity": 114,
    "stockStatus": "In Stock",
    "rating": 2.1,
    "description": "Smartwatch Lite with modern features and energy-efficient design. Suitable for everyday use at home or office.",
    "minimumOrderQuantity": 1,
    "manufacturer": "South Korea",
    "tags": "Clearance",
    "warrantyPeriod": 3,
    "returnPolicy": "15-day return"
  },
  . . . .
  . . . .
  . . . .
]
```
The **GraphQLServer** folder is now created, required packages are installed, and a sample data source is configured. The project is ready for defining the GraphQL schema, resolvers, and server configuration.

### Step 2: Configuring schema in GraphQL

The GraphQL schema defines the structure of the "product" data model and the server‑side operations available for performing CRUD actions.

**Instructions:**

1. Create a new schema file (**src/schema.graphql**) in the **GraphQLServer** folder.
2. Add type definition for **Product**:

      ```
      # --- Product type definition ---
      type Product {
        productId: String!
        productImage: String
        # Include additional fields
      }
      ```
3. Add type definition for **ReturnType**:

      ```
      # --- Return type for Grid paging ---
      type ReturnType {
        result: [Product!]!
        count: Int!
      }
      ```
4. Add type definition for **Sort**:

      ```
      # --- Sorting input ---
      input Sort {
        name: String
        direction: String
      } 
      ```
5. Add type definition for **ProductInput**:

      ```
      # --- Product input for mutation operations ---
      input ProductInput {
        productId: String!
        productName: String
        # Include additional fields
      }
      ```

6. Add type definition for **DataManagerInput**:

      ```
      # --- Syncfusion DataManager payload ---
      input DataManagerInput {
        skip: Int
        take: Int
        sorted: [Sort]
        group: [String!]
        table: String
        select: [String!]
        where: String   
        search: String  
        requiresCounts: Boolean
        params: String
      }
      ```
    > For detailed information about **DataManagerInput** type refer to [configuring Syncfusion<sup style="font-size:70%">&reg;</sup> DataManagerInput schema](#step-3-configuring-syncfusion-datamanagerinput-schema).

7. Define the Query type to expose the "getProducts" operation that returns the list of "products":

      ```
      type Query {
        getProducts(datamanager: DataManagerInput): ReturnType!
      }
      ```
8. Define Mutation types for CRUD operations:

      ```
      type Mutation {
        createProduct(value: ProductInput!): Product!
        updateProduct(key: String!, keyColumn: String, value: ProductInput!): Product
        deleteProduct(key: String!, keyColumn: String): Product!
      }
      ```
    **Key parameters definitions:**
    - **key**: The unique identifier (primary key) of the product to be updated.
    - **keyColumn**: The name of the column containing the unique identifier.
    - **value**: An object containing the created or updated product details.

### Step 3: Configuring Syncfusion DataManagerInput schema

Syncfusion<sup style="font-size:70%">&reg;</sup> Grid sends all operation details paging, sorting, filtering, and searching as a single request object. GraphQL requires a clear, typed structure to understand these values. 

Since Syncfusion’s [DataManager](https://ej2.syncfusion.com/angular/documentation/data/getting-started) already has a fixed structure for sending operation details, the GraphQL backend define a matching typical input type.

**DataManagerInput** serves as the input type that matches the structure of the `DataManager` request, ensuring that all operation details are correctly received by the GraphQL API.

**Purpose:** The **DataManagerInput** schema provides a standard format for delivering Grid operation parameters to the GraphQL server.
This structure allows the backend to return only the required records, improving performance, reducing payload size, and enabling efficient data handling.

Here are the details of **DataManagerInput** parameter type.

| Parameters       | Description                                                                     |
| ---------------- | ------------------------------------------------------------------------------- |
| `requiresCounts` | If it is `true` then the total count of records will be included in response. |
| `skip`           | Holds the number of records to skip.                                            |
| `take`           | Holds the number of records to take.                                            |
| `sorted`         | Contains details about current sorted column and its direction.                 |
| `where`          | Contains details about current filter column name and its constraints.          |
| `group`          | Contains details about current Grouped column names.                            |
| `search`         | Contains details about current search data.                                     |
| `aggregates`     | Contains details about aggregate data.                                          |

Use this **DataManagerInput** in the "getProducts" query to access the parameters sent from the client, allowing the GraphQL server to handle these operations in a consistent and unified way.

### Step 4: GraphQL Query resolvers

A resolver in GraphQL is a function responsible for fetching the data for a specific field in a GraphQL schema.

When a client sends a GraphQL query, resolvers run behind the scenes to retrieve the requested information from a database, API, or any data source and return it in the format defined by the schema. 

**Instructions:**

1. Create a new resolver file (**src/resolvers.js**) inside the **GraphQLServer** folder.
2. Import the required data source (**e.g., productDetails**) from the data file.
3. Implement the "getProducts" resolver to handle the logic for the "getProducts" query defined in the schema.
4. Ensure the resolver returns the processed list of "products" in the structure specified by the schema.

```js
 getProducts: (_parent, { datamanager }) => {
      let products = [...productDetails];
      const query = new Query();
        
      /* Apply search, filter, sort, and paging operations as provided by the Grid. */
      /* Operations are applied sequentially: search → filter → sort → paging. */
      let result = products;
      let count = products.length;
      return {
        result,
        count
      };
    },
```

### Step 5: GraphQL Mutation resolvers

Mutations in GraphQL are used to modify data on the server, such as creating, updating, or deleting records.

Previously, the CRUD mutation types were defined in the **schema.graphql** file. The next step is to implement these mutation actions inside the **resolver.js** file.

**Instructions:**

1. Open the (**src/resolvers.js**) file.
2. Implement the "createProduct" mutation:

    ```js
    Mutation: {
        createProduct: (parent, { value }, context, info) => {
          productDetails.push(value);
          return value;
        },
    }
    ```

    **"createProduct" - code breakdown:**

    | Step | Purpose | Implementation |
    |------|---------|-----------------|
    | **1. Receive input** | Accept "product" data from the client. | The argument { `value` } contains all fields needed to create a new "product" (e.g., "productName", "category", etc). |
    | **2. Insert record** | Add the new "product" to the backend data source. | `productDetails.push(value)` stores the "product" in an in‑memory array. |
    | **3. Return created** | Send the inserted record back to the client. | return `value` returns the same object that was inserted, allowing the client to receive immediate confirmation. |

3. Implement the "updateProduct" mutation:

    ```js
    Mutation: {
        updateProduct: (_parent, { key, keyColumn = "productId", value }) => {
          const product = productDetails.find((p) => p[keyColumn] === key);
          if (!product) throw new Error("Product not found");
          /* Merge the incoming partial fields into the existing product. */
          Object.assign(product, value);
          return product;
        },
      }
    ```

    **"updateProduct" - code breakdown:**

    | Step | Purpose | Implementation |
    |------|---------|-----------------|
    | **1. Receive input** | Accept the `key`, `keyColumn`, and updated field values. | The resolver receives { `key`, `keyColumn`, `value` }, where value contains the partial "product" updates. |
    | **2. Locate record** | Identify the "product" that matches the given key value. | `productDetails.find((p) => p[keyColumn] === key)`. |
    | **3. Validate record** | Ensure the "product" exists before modifying it. | `if (!product) throw new Error("Product not found")`. |
    | **4. Apply updates** | Merge updated values into the located "product" record. | `Object.assign(product, value)` overwrites only the provided fields while keeping others intact. |
    | **5. Return updated** | Send back the modified product to the client. | return `product` object with all updates applied. |

4. Implement the "deleteProduct" mutation:

    ```js
    Mutation: {
        deleteProduct: (_parent, { key, keyColumn = 'productId' }) => {
          const idx = productDetails.findIndex((p) => String(p[keyColumn]) === key);
          if (idx === -1) throw new Error('Product not found');
          const [deleted] = productDetails.splice(idx, 1);
          return deleted;
        }
      }
    ```
    **"deleteProduct" - code breakdown:**

    | Step | Purpose | Implementation |
    |------|---------|-----------------|
    | **1. Receive key** | Backend receives only the primary key value from client. | Resolver parameters: `key`, `keyColumn` = '`productId`. |
    | **2. Locate index** | Identify the array index of the target record using the dynamic key column. | `findIndex((p) => String(p[keyColumn]) === String(key))`. |
    | **3. Validate existence** | Ensure a matching record exists before deletion | `if (idx === -1) throw new Error('Product not found')` check. |
    | **4. Remove record** | Delete the record from the data source at the located index. | `const [deleted] = productDetails.splice(idx, 1)`. |
    | **5.  Return deleted** | Provide the removed record back to the client. | return `deleted`. |

Now all required GraphQL types, queries, and mutations have now been fully implemented.

## Integrating Syncfusion Angular Grid with GraphQL

Open a Visual Studio Code terminal or Command Prompt and run the below command:

```bash
ng new GridClient
cd GridClient
```

This command creates a Angular application named **GridClient** with the essential folder structure and files required to begin development immediately.

### Step 1: Adding Syncfusion packages

Install the necessary Syncfusion<sup style="font-size:70%">&reg;</sup> packages using the below command in Visual Studio Code terminal or Command Prompt:

```bash
npm install @syncfusion/ej2-angular-grids --save
npm install @syncfusion/ej2-data --save
```
- `@syncfusion/ej2-angular-grids` – Required for using the Angular Data Grid component.
- `@syncfusion/ej2-data` – Provides data utilities for advanced data operations in Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager.

### Step 2: Including required Syncfusion stylesheets

Once the dependencies are installed, the required CSS files are made available in the (**../node_modules/@syncfusion**) package directory, and the corresponding CSS references are included in the **styles.css** file.

```css
[src/styles.css]

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/tailwind.css';
@import '../node_modules/@syncfusion/ej2-angular-grids/styles/tailwind.css';
```

For this project, the "Tailwind" theme is used. A different theme can be selected or the existing theme can be customized based on project requirements. Refer to the [Syncfusion Angular Components Appearance](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio) documentation to learn more about theming and customization options.

### Step 3: Configure GraphQL Adaptor

Syncfusion<sup style="font-size:70%">&reg;</sup> provides a built‑in [GraphQLAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors#graphql-adaptor) that translates Grid interactions into GraphQL requests, enabling efficient communication with GraphQL servers and helping integrate the Grid component with the GraphQL server.

**What is a GraphQL Adaptor?**

An adaptor is a translator between two different systems. The `GraphQLAdaptor` specifically:

- Receives interaction events from the Grid (such as Add, Edit, Delete, sorting, filtering, etc.).
- Converts these actions into GraphQL query or mutation syntax.
- Sends the GraphQL request to the backend GraphQL endpoint.
- Receives the response data from the backend.
- Formats the response back into a structure the Grid understands.
- Updates the grid display with the new data.

The adaptor enables bi-directional communication between the frontend (Grid) and backend (GraphQL server).

![GraphQL-NodeJs-DataFlow-Diagram](../images/GraphQL-Nodejs-DataFlowDiagram.png)

When using the `GraphQLAdaptor`, the client expects the response from the server in a specific structure so that the Grid can process and render the results correctly.

The required response format includes:
  - **result**: The list of data to be displayed in the current Grid view.
  - **count**: The total number of records available in the dataset.

The `GraphQLAdaptor` needs to be configured in the Syncfusion<sup style="font-size:70%">&reg;</sup> `DataManager` to convert Grid interactions into GraphQL‑compatible requests. To enable this setup, configure the `DataManager` with the `GraphQLAdaptor`, specify the GraphQL server’s response format, and define the query. Finally, assign this `DataManager` instance to the Grid component.

**Instructions:**

1. In the **app.component.html** file render the Grid component.

    ```html
    [app.component.html]
      <ejs-grid [dataSource]='data'>
        <e-columns>
            <e-column field='productId' headerText='Product ID' textAlign='Right' width=150 isPrimaryKey='true'></e-column>
          <!--Include Additional columns-->
        </e-columns> 
    </ejs-grid>
    ```
2. In the **app.component.ts** file to configure the `DataManager` with the `GraphQLAdaptor`.

    ```ts
        @Component({
            selector: 'app-root',
            standalone: true,
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            imports: [GridModule],
        })
        public data!: DataManager;
        
        ngOnInit(): void {
            this.data = new DataManager({
                url: 'http://localhost:xxxx', // xxxx represents the port number.
                adaptor: new GraphQLAdaptor({
                response: {
                    result: 'getProducts.result',
                    count: 'getProducts.count'
                },
                query: `
                    query getProducts($datamanager: DataManagerInput) {
                    getProducts(datamanager: $datamanager) {
                        count
                        result {
                        productId, productImage,    # add additional fields to fetch initially, e.g.,category
                        }
                    }
                    }
                `,
            })
          });
        }
    ```

    **GraphQL Query structure explained in detail:**

    The `Query` property is critical for understanding the data flows. Let's break down each component:

    ```
    query getProducts($datamanager: DataManagerInput) {}
    ```

      **Line breakdown:**
      - `query` - GraphQL keyword indicating a read operation.
      - `getProducts` - Name of the query (must match resolver name with camelCase).
      - `($dataManager: DataManagerInput!)` - Parameter declaration.
        - `$dataManager` - Variable name (referenced as $dataManager throughout the query).
        - `DataManagerInput` - Type specification.


    ```
    getProducts(datamanager: $datamanager) {}
    ```
    
      **Line breakdown:**
      - `getProducts(...)` - Calls the resolver method in backend.
      - `dataManager: $dataManager` - Passes the "$dataManager" variable to the resolver.
      - The resolver receives this object and uses it to apply filters, sorts, searches, and pagination.


    ```
    count
      result {
        productId, productImage 
      }
    ```

      **Line breakdown:**
      - `count` - Returns total number of records (used for pagination).
        - Example: If "150" total product records exist, count = 150.
        - Grid uses this to calculate the number of pages.
      - `result` - Contains the array of product records.
        - `{ ... }` - List of fields to return for each record.
        - Only requested fields are returned (no over-fetching).

**Response structure example:**

When the backend executes the query, it returns a JSON response in this exact structure:

```json
{ 
  "data": {
    "getProducts": {
      "count": 1500,
      "result": [
        {
          "productId": "PROD-ELC-0001",
          "productImage": "assets/productImages/watch2.png",
          "productName": "Smartwatch Lite (Max)",
          "category": "Electronics",
          "brand": "Philips",
          "rating": 2.1,
          "mrp": 100,
          "discount": 0.02,
          "stockQuantity": 114,
          "stockStatus": "In Stock"
        },
      ]
    }
  }
}
```

**Response structure explanation:**

| Part | Purpose | Example |
|------|---------|---------|
| `data` | Root object returned for every successful GraphQL query. | Always present in successful response |
| `getProducts` | Matches the GraphQL query name; contains paginated product data. | Contains **count** and **result**. |
| `count` | Total number of records available. | 1 (in this example). |
| `result` | Array of "products" objects. | [ {...}, {...} ] |
| Each field in result | Matches GraphQL query field names. | Field values from database. |

### Step 4: Add toolbar with CRUD and search options

The [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#toolbar) provides buttons for adding, editing, deleting records, and searching the data.

**Instructions:**

1. Open the **app.component.html** file.
2. Update the `Grid` component to include the `toolbar` property with CRUD and search options:

    ```html
    <ejs-grid [dataSource]='data' [toolbar]="['Add', 'Edit', 'Delete', 'Search']">
        <e-columns>
            <e-column field='productId' headerText='Product ID' textAlign='Right' width=150 isPrimaryKey='true'></e-column>
            <!--Include Additional columns-->
        </e-columns> 
    </ejs-grid>
    ```
3. Open the **app.component.ts** file, include the `ToolbarService` and `EditService`, to the providers.

    ```ts
    import { GridModule, ToolbarService, EditService } from '@syncfusion/ej2-angular-grids';

    @Component({
      selector: 'app-root',
      standalone: true,
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css'],
      imports: [GridModule],
      providers: [ToolbarService, EditService]
    });
    ```

### Step 5: Implement paging feature

Paging divides large datasets into smaller pages to improve performance and usability.

During pagination, the `GraphQLAdaptor` sends the paging details though `skip` and `take` parameters of the **DataManagerInput**. These details are converted to the [paging query](https://ej2.syncfusion.com/angular/documentation/data/querying#paging) and passed to the `DataManager` ensuring that data is returned in paged segments and allowing smooth navigation through large datasets.

**Instruction:**
1. Set the [allowPaging](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#allowpaging) property `true` to enable paging in the Grid.

    ```html
    [app.component.html]

      <ejs-grid [dataSource]='data' [allowPaging]="true" [pageSettings]="pageSettings">
        <e-columns>
            <e-column field='productId' headerText='Product ID' textAlign='Right' width=150 isPrimaryKey='true' [template]="idTemplate"></e-column>
            <!--Include Additional columns-->
        </e-columns> 
    </ejs-grid>
    ```
2. Open the **app.component.ts** file, inject the `PageService`, and define the `pageSettings` property.

    ```ts
    import { GridModule, PageService } from '@syncfusion/ej2-angular-grids';

    @Component({
      selector: 'app-root',
      standalone: true,
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css'],
      imports: [GridModule],
      providers: [PageService]
    })

    public pageSettings!: PageSettingsModel = { pageSize: 10 };
    ```
3. Implement the page logic within the "getProducts" resolver function located in the **resolvers.js** file.

    ```ts
    import { productDetails } from "./data";
    import { Query, DataManager, Predicate } from "@syncfusion/ej2-data";

    const resolvers = {
      Query: {
        getProducts: (parent, { datamanager }, context, info) => {
          let products = [...productDetails];
          const query = new Query();

          if (datamanager?.take != null) {
              const take = datamanager.take;
              const skip = datamanager?.skip ?? 0;
              query.page(Math.floor(skip / take) + 1, take);
          }
          let result = new DataManager(products).executeLocal(query);
          let count = products.length
          return {
            result,
            count
          };
        },
      },
    };

    export default resolvers;
    ```
    **Page logic breakdown:**

    | Part | Purpose |
    |------|---------|
    | `datamanager.skip` | Number of records to skip from the start of the dataset. |
    | `datamanager.take` | Number of records to return (page size).|
    | `query.page(currentPage, take)`|Applies paging to the Query.|
    | `executeLocal(query)`| Runs the search against the in‑memory "products" collection.|
 
**Paging details included in request payloads:**

The image illustrates the paging details (`skip` and `take`) included in the server request payload.

![GraphQLAdaptor-NodeJs-Paging](../images/GraphQLAdaptor-NodeJs-Paging.png)
 
The resolver processes the Grid’s `skip` and `take` parameters and returns the total count along with the paged result. Paging feature is now active with "10" records per page.

> To use [Row Virtualization](https://ej2.syncfusion.com/angular/documentation/grid/scrolling/virtual-scrolling), inject the `VirtualScroll` service and set [enableVirtualization](https://ej2.syncfusion.com/angular/documentation/grid/scrolling/virtual-scrolling) property to `true`. When virtualization is enabled, the grid automatically sends the correct `skip` and `take` values to the server.The resolver does not require any additional modifications. The Grid inherently handles all virtual block requests, ensuring the expected behavior without additional configuration.

### Step 6: Implement searching feature

Searching provides the capability to find specific records by entering keywords into the search box.

When a search action is performed in the Grid, the `GraphQLAdaptor` sends the search key and the target fields through the `search` parameter of the **DataManagerInput**. These values are converted as the [search query](https://ej2.syncfusion.com/angular/documentation/data/querying#searching) and processed through the `DataManager`.

**Instruction:**
1. Enable searching in the Grid, add the `Search` in the Grid’s `toolbar` items. 

    ```html
    [app.component.html]

      <ejs-grid [dataSource]='data' [toolbar]="['Search']">
        <e-columns>
            <e-column field='productId' headerText='Product ID' textAlign='Right' width=150 isPrimaryKey='true' [template]="idTemplate"></e-column>
            <!--Include Additional columns-->
        </e-columns> 
    </ejs-grid>
    ```

2. Implement the search logic within the "getProducts" resolver function located in the **resolver.js** file.

    ```js
    import { productDetails } from "./data";
    import { Query, DataManager, Predicate } from "@syncfusion/ej2-data";

    const resolvers = {
      Query: {
        getProducts: (parent, { datamanager }, context, info) => {
            let products = [...productDetails];
            const query = new Query();

            /* Custom function to handle the search operation. */
            const performSearching = (searchParam) => {
              const { fields, key } = JSON.parse(searchParam)[0];
              query.search(key, fields);
            }

            if (datamanager.search) {
              performSearching(datamanager.search);
            }

            /** Execute the composed Query.
              * result: data to render.
              * count: total number of matched records.
            */
            let result = new DataManager(products).executeLocal(query);
            let count = result.length
            return {
              result,
              count
            };
        },
      },
    }
    ```
    **Search logic breakdown:**

    | Part | Purpose |
    |------|---------|
    | `datamanager.search` | JSON‑formatted array of search instructions sent by the Grid via `GraphQLAdaptor`. |
    | `performSearching(searchParam)` | Parses the JSON and applies the search to the Query.|
    | `query.search(key, fields)` | Applies Syncfusion’s contains search across the specified fields. |
    | `executeLocal(query)`| Runs the search against the in‑memory products collection.|

**Searching details included in request payloads:**

The image below displays the `search` parameter values.

![GraphQLAdaptor-NodeJs-Searching](../images/GraphQLAdaptor-NodeJs-Searching.png)

The resolver applies the search query parameters received from the Grid and returns the search filtered result along with the total count. Searching feature is now active.

### Step 7: Implement sorting feature

The sorting feature in the Grid allows records to be organized in ascending or descending order based on one or more columns.

The `GraphQLAdaptor` automatically passes the sorting details to the server through the `sorted` parameter of the **DataManagerInput** and the details are converted to the [sorting query](https://ej2.syncfusion.com/angular/documentation/data/querying#sorting) and executed through the `DataManager` to get the sorted data.

**Instruction:**

1. Enable sorting in the Grid by setting the [allowSorting](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#allowsorting) property to `true`.

    ```html
    [app.component.html]

    <ejs-grid [dataSource]='data' [allowSorting]="true">
        <e-columns>
            <e-column field='productId' headerText='Product ID' textAlign='Right' width=150 isPrimaryKey='true'></e-column>
            <!--Include Additional columns-->
        </e-columns> 
    </ejs-grid>
    ```

2. Open the **app.component.ts** file and add the `SortService` to the providers.

    ```ts
    import { GridModule, SortService } from '@syncfusion/ej2-angular-grids';

    @Component({
      selector: 'app-root',
      standalone: true,
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css'],
      imports: [GridModule],
      providers: [SortService]
    })
    ```

3. Implement the sort logic within the "getProducts" resolver function located in the **resolver.js** file.

    ```js
    import { productDetails } from "./data";
    import { Query, DataManager, Predicate } from "@syncfusion/ej2-data";

    const resolvers = {
      Query: {
        getProducts: (_parent, { datamanager }) => {
          let products = [...productDetails];
          const query = new Query();  
          
          /* Custom function to apply sorting. */
          const performSorting = (sorted[]) => {
              for (let i = 0; i < sorted.length; i++) {
                const { name, direction } = sorted[i];
                
                /* Append sorting to the Query for the specified field and direction. */
                query.sortBy(name, direction);
              }
            }

          if (datamanager.sorted) {
            performSorting(datamanager.sorted);
          }
          /** Execute the composed Query.
            * result: data to render.
            * count: total number of records.
          */
          let result = new DataManager(products).executeLocal(query);
          let count = products.length;

          return {
            result,
            count
          };
        },
      },
    };

    export default resolvers;
    ```

    **Sorting logic breakdown:**

    | Part | Purpose |
    |------|---------|
    | `datamanager.sorted` | Array of sort instructions sent by the Grid via `GraphQLAdaptor`. |
    | `performSorting(sorted)` | Iterates the sort array and appends sort clauses to the Query.|
    | `query.sortBy(name, direction)` | Field/column name to sort by (e.g., "productName", "category"). | 
    | `executeLocal(query)`  | Executes the sorted query on the dataset. |

**Sorting details included in request payloads:**

The image below shows the values passed to the `sorted` parameter.

![GraphQLAdaptor-NodeJs-Sorting](../images/GraphQLAdaptor-NodeJs-Sorting.png)

> To apply multiple sorting conditions in sequence, press and hold the <kbd>Ctrl</kbd> key while clicking on the desired column headers.

The resolver processes the sorting parameters and returns the result in the requested sorted order. Sorting functionality is now active.

### Step 8: Implement filtering feature

Filtering narrows down records by specifying conditions on column values. Records can be filtered by selecting checkbox filters or using comparison operators such as equals, greater than, or less than.

The `GraphQLAdaptor` automatically passes the filter conditions to the server through the `where` parameter of the **DataManagerInput**. In the server, the filter parameters are converted to the Syncfusion<sup style="font-size:70%">&reg;</sup> [filter query](https://ej2.syncfusion.com/angular/documentation/data/querying#filtering) and executed through the `DataManager` to get the filtered data.

 **Instructions:**

1. Enable the Grid with filtering by setting the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#allowfiltering) property to `true`.

    ```html
    [app.component.html]

      <ejs-grid [dataSource]='data' [allowFiltering]="true" [filterSettings]="{ type: 'CheckBox' }">
        <e-columns>
            <e-column field='productId' headerText='Product ID' textAlign='Right' width=150 isPrimaryKey='true' [template]="idTemplate"></e-column>
            <!--Include Additional columns-->
        </e-columns> 
    </ejs-grid>
    ```
2. Open the **app.component.ts** file and add the `FilterService` to the providers.

    ```ts
    import { GridModule, FilterService } from '@syncfusion/ej2-angular-grids';

    @Component({
      selector: 'app-root',
      standalone: true,
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css'],
      imports: [GridModule],
      providers: [FilterService]
    })
    ```

3. Implement the filter processing logic within the "getProducts" resolver function located in the **resolver.js** file.

    ```js
    const resolvers = {
      Query: {
        getProducts: (parent, { datamanager }, context, info) => {
            let products = [...productDetails];
            const query = new Query();

            if (datamanager.where) {
              performFiltering(datamanager.where);
            }  
            
          /* Execute filtering using Syncfusion DataManager. */
          const result = new DataManager(products).executeLocal(query);
          
          /* Total count after filtering.*/
          const count = result.length;
          
          return {
            result,
            count
          };
        },
      },
    };
    ```

    The "performFiltering" function processes the filtering rules received from the client and return the filter query.

    ```js
      const query = new Query();
      
      const performFiltering = (filterString) => {
              const parsed = JSON.parse(filterString);

                /**
                * The parsed filter can be an array or a single object.
                * We normalize it here so we always work on the first element.
                */
              const predicateCollection = Array.isArray(parsed) ? parsed[0] : parsed;

              /* If no valid predicate structure exists, return the original query unchanged. */
              if (!predicateCollection || !Array.isArray(predicateCollection.predicates) || predicateCollection.predicates.length === 0) {
                return query;
              }
              
              /* Determines whether multiple predicates should be combined using AND / OR. */
              const condition = (predicateCollection.condition || 'and').toLowerCase();
              const ignoreCase = predicateCollection.ignoreCase !== undefined ? !!predicateCollection.ignoreCase : true;

              /* This variable will accumulate the full predicate chain */
              let combinedPredicate = null;

              
              /**
              * Loop through each predicate and convert it into Syncfusion Predicate objects.
              * Supports nested (complex) filter groups through recursive processing.
              */
              predicateCollection.predicates.forEach((p:any) => {
                if (p.isComplex && Array.isArray(p.predicates)) {
                  /*  Handle nested predicates via recursive helper */
                  const nested = buildNestedPredicate(p, ignoreCase);
                  if (nested) {
                    combinedPredicate = combinedPredicate
                      ? (condition === 'or' ? combinedPredicate.or(nested) : combinedPredicate.and(nested))
                      : nested;
                  }
                  return;
                }

                /* Create a simple (single field) predicate. */
                const singlePredicate = new Predicate(p.field, p.operator, p.value, ignoreCase);

                /* Merge predicate into the chain using AND/OR. */
                combinedPredicate = combinedPredicate
                  ? (condition === 'or' ? combinedPredicate.or(singlePredicate) : combinedPredicate.and(singlePredicate))
                  : singlePredicate;
              });

              /* Apply the final combined predicate to the Syncfusion Query object. */
              if (combinedPredicate) {
                query.where(combinedPredicate);
              }
              return query;
            };
    ```

    The "buildNestedPredicate" function handles complex filtering scenarios containing nested groups.

    ```js
      /**
        * Builds a nested Predicate structure from complex filter conditions.
        * This function is called recursively to handle multi-level filter logic.
        * (e.g., AND/OR combinations inside other AND/OR blocks).
        *
        * @param block - A complex filter object containing nested predicates.
        * @param ignoreCase - Whether string comparisons should ignore case.
        * @returns A merged Predicate representing the entire nested filter block.
        */
      function buildNestedPredicate(block, ignoreCase ) {
          /*  Determine whether this block uses "and" or "or" to merge its child predicates. */
          const condition = (block.condition || 'and').toLowerCase();
          
          /*  Will store the final combined Predicate after processing all nested items. */
          let mergedPredicate : Predicate | null = null;
          
          /**
            * Loop through each predicate entry within the current block.
            * Each entry can be a simple predicate or another nested (complex) block.
          */
          block.predicates.forEach((p:any) => {
          let node;
          if (p.isComplex && Array.isArray(p.predicates)) {
              node = buildNestedPredicate(p, ignoreCase);
          } else {
              node = new Predicate(p.field, p.operator, p.value, ignoreCase);
          }
          if (node) {
              mergedPredicate  = mergedPredicate 
              ? (condition === 'or' ? mergedPredicate .or(node) : mergedPredicate .and(node))
              : node;
          }
          });

          return mergedPredicate;
      }
    ```

    **Filter logic breakdown:**

    | Part | Purpose |
    |------|---------|
    | `dataManager.Where` | List of filter conditions from the Grid. |
    | `predicateCollection` | The normalized top-level filter group object containing condition, ignoreCase, and predicates.|
    | `predicateCollection.condition` | Logical operator to combine child predicates at the current level: "and" or "or" (defaults to "and"). |
    | `predicate.Value` | The value to compare against. |
    | `predicateCollection.ignoreCase` | Whether string comparisons ignore case (defaults to true if not present). |
    | `predicateCollection.predicates[]` | Array of predicate entries; each entry can be a simple predicate or a complex (nested) group. |
    | `p.isComplex` | Flag indicating a nested group that contains its own predicates (processed recursively). |
    | `p.field` | Column/field name to filter (e.g., "productName", "category"). |
    | `p.operator`| Operator string (equal, contains, greaterthan, etc.) passed into new `Predicate(...)`. |
    | `performFiltering(filterString)`| Parses the where string, builds a combined `Predicate` chain (AND/OR), and applies it to query via query.where(combinedPredicate).|
    |`buildNestedPredicate(block, ignoreCase)` | Recursively constructs a `Predicate` tree for nested groups using the group’s condition and child predicates.|
    |`query.where(combinedPredicate)`| Applies the final merged Predicate to the Syncfusion<sup style="font-size:70%">&reg;</sup> query.|

**Supported filter operators:**

| Operator | Purpose | Example |
|----------|---------|---------|
| `equal` | Exact match | "productId" equals PROD-ELC-0001 |
| `notequal` | Not equal to value | "stockStatus" not equal to "Out of Stock" |
| `contains` | Contains substring (case-insensitive) | "description" contains "Book" |
| `startswith` | Starts with value | "productName" starts with "Smart" |
| `endswith` | Ends with value | "category" ends with "Accessories" |
| `greaterthan` | Greater than numeric value | "stockQuantity" > 5 |
| `lessthan` | Less than numeric value | "discount" < 0.15 |
| `greaterthanequal` | Greater than or equal | "stockQuantity" >= 20 |
| `lessthanequal` | Less than or equal | "discount" <= 0.10 |

**Filtering details included in request payloads:**

The image illustrates the serialized `where` condition passed from the DataManager.

![GraphQLAdaptor-NodeJs-Filtering](../images/GraphQLAdaptor-NodeJs-Filtering.png)

**Filter logic with multiple checkbox selections:**

When multiple checkbox values are selected for the same column (e.g., category = "Electronics" OR category = "Accessories"), the Grid sends a nested predicate block where all selected values are combined using OR logic.

- Top‑level predicates across different fields are combined using **AND** logic.
- Nested predicates within the same field are combined using **OR** logic.
- This enables expressions such as: (category = "Electronics" OR category = "Accessories") (stockStatus = "In Stock" OR stockStatus = "Limited").

The resolver handles the filter conditions passed from the Grid and returns the filtered data along with the updated count. Filtering is now enabled.

### Step 9: Perform CRUD operations

CRUD operations (Create, Read, Update, Delete) are supported in the Grid for managing data. The Grid provides built-in dialogs and buttons to perform these operations, while the backend resolvers handle the actual data modifications.

Enable editing operations in the Grid by configuring `editSettings` and setting `allowEditing`, `allowAdding`, and `allowDeleting` to `true`.

The `getMutation` function in the `GraphQLAdaptor` handles the Grid CRUD actions by sending the appropriate mutation for each action (insert, update, or delete) to the GraphQL server.

> Previously, the required mutation definitions and schema for CRUD operations were created in the **resolver.js** and **schema.graphql** files. The next step is to enable CRUD actions in the client Grid by using the `GraphQLAdaptor`.

**Insert:**

The insert operation enables adding new "product" records to the existing list. When the `Add` button in the `toolbar` is selected, the Grid opens a dialog that displays input fields for entering "product" details.

After the required data is submitted, the GraphQL mutation sends the new "product" record to the backend for processing and storage.

Open the **app.component.ts** file and configure the `getMutation` function in the `GraphQLAdaptor` to return the GraphQL mutation for the insert action. 

  ```ts
  [app.component.ts]

  // mutation to perform insert.
  this.data = new DataManager({
        url: 'http://localhost:xxxx', // xxxx represents the port number.
        adaptor: new GraphQLAdaptor({
          response: {
            result: 'getProducts.result',
            count: 'getProducts.count'
          },
          query: `
            query getProducts($datamanager: DataManagerInput) {
              getProducts(datamanager: $datamanager) {
                count
                result {
                  productId, productImage, productName    # add additional fields to fetch initially, e.g.,category
                }
              }
            }
          `,
          getMutation: function (action: any): string {
            
          if (action === 'insert') {
              return `mutation CreateProductMutation($value: ProductInput!) {
                createProduct(value: $value) {
                  productId, productName         # add additional fields to fetch initially, e.g.,category
                }
              }`;
            }
            }
        })
      });
  ```

**Insert mutation request parameters:**

When the `Add` button is clicked, the dialog is filled, and the data is submitted, the GraphQL adaptor constructs the mutation using these parameters:

![GraphQL-Nodejs-inserting](../images/GraphQLAdaptor-Nodejs-Inserting.png)

**Update:**

The Update operation enables editing of existing "product" records. When the `Edit` option in the `toolbar` is selected and a row is chosen, the Grid opens a dialog displaying the current values of the selected record. 

After the required modifications are submitted, a GraphQL mutation sends the updated record to the backend for processing.

Open the **app.component.ts** file and configure the `getMutation` function in the `GraphQLAdaptor` to return the appropriate GraphQL mutation based on the update action which reference the "updateProduct" mutation defined in the schema.

  ```ts
  // mutation to perform update.
  this.data = new DataManager({
        url: 'http://localhost:xxxx', // xxxx represents the port number.
        adaptor: new GraphQLAdaptor({
          response: {
            result: 'getProducts.result',
            count: 'getProducts.count'
          },
          query: `
            query getProducts($datamanager: DataManagerInput) {
              getProducts(datamanager: $datamanager) {
                count
                result {
                  productId, productImage, productName      # add additional fields to fetch initially, e.g.,category
                }
              }
            }
          `,
          getMutation: function (action) {  
          if (action === 'update') {
              return `mutation UpdateProductMutation($key: String!, $keyColumn: String, $value: ProductInput!) {
                updateProduct(key: $key, keyColumn: $keyColumn, value: $value) {
                  productId, productName                  # add additional fields to fetch initially, e.g.,category
                }
              }`;
            }
            }
        })
      });
  ```

**Update mutation request parameters:**

When the `Update` button is clicked, the dialog is modified, and the changes are submitted, the `GraphQLAdaptor` constructs the mutation using these parameters:

![GraphQL-Nodejs-updating](../images/GraphQLAdaptor-Nodejs-updating.png)

**Delete:**

The Delete operation enables removal of "product" records from the application. When the `Delete` option in the `toolbar` is selected and a row is marked for removal, a confirmation prompt appears. After confirmation, a GraphQL mutation sends a delete request to the backend containing only the primary key value.

Open the **app.component.ts** file and configure the `getMutation` function in the `GraphQLAdaptor` to return the delete mutation that matches the "deleteProduct" mutation defined in the schema.

 ```ts
  // mutation to perform delete.
  this.data = new DataManager({
        url: 'http://localhost:xxxx', // xxxx represents the port number.
        adaptor: new GraphQLAdaptor({
          response: {
            result: 'getProducts.result',
            count: 'getProducts.count'
          },
          query: `
            query getProducts($datamanager: DataManagerInput) {
              getProducts(datamanager: $datamanager) {
                count
                result {
                  productId, productImage, productName             # add additional fields to fetch initially, e.g.,category
                }
              }
            }
          `,
          getMutation: function (action) {  
          if (action === 'remove') {
             return `mutation RemoveProductMutation($key: String!, $keyColumn: String) {
              deleteProduct(key: $key, keyColumn: $keyColumn) {
                productId,productName                             # add additional fields to fetch initially, e.g.,category
              }
            }`;
            }
            }
        })
      });
  ```

**Delete mutation request parameters:**

When the `Delete` button is clicked, a row is selected for deletion, and the action is confirmed, the `GraphQLAdaptor` constructs the mutation using minimal parameters:

![GraphQL-Nodejs-deleteRecord](../images/GraphQL-Nodejs-deleting.png)

> Normal/Inline editing is the default edit [mode](https://ej2.syncfusion.com/angular/documentation/api/grid/editsettings#mode) for the Grid component. To enable CRUD operations, ensure that the [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/column#isprimarykey) property is set to `true` for a specific Grid Column which has unique values.

## Running the application

Open a terminal or Command Prompt. Run the server application first, then start the client application.

### Run the GraphQL server

- Run the following commands to start the server:

```bash
  cd GraphQLServer
  npm start
```
- The server is now running at **http://localhost:4205/**.

### Run the client
- Execute the below commands to run the client application:

```bash
  cd GridClient
  npm start
```
- Open **http://localhost:4200/** in the browser.
 
## Complete sample repository

For a complete working implementation of this example, refer to the following [GitHub](https://github.com/SyncfusionExamples/ej2-angular-grid-samples/tree/master/connecting-to-backends/syncfusion-angular-grid-with-graphql-server) repository.

The application now provides a fully integrated "product" management workflow using the Syncfusion Angular Grid connected to a Node.js GraphQL backend.

## See also

- [Types of editing](https://ej2.syncfusion.com/angular/documentation/grid/grouping/grouping)
- [Excel export](https://ej2.syncfusion.com/angular/documentation/grid/excel-export/excel-exporting)
- [Integration with filter UIs](https://ej2.syncfusion.com/angular/documentation/grid/filtering/filter-menu#custom-component-in-filter-menu)
