---
layout: post
title: Angular Grid - Express.js Backend Server | Syncfusion.
description: Integrate the Syncfusion Angular Grid with a Node.js Express backend for  server‑side data handling and CRUD actions.
platform: ej2-angular
control: grid
keywords: adaptors, urladaptor, expressjs, nodejs, remotedata, restful-api, typescript
documentation: ug
domainurl: ##DomainURL##
---

# Connecting the Angular Grid with Express.js Server

[Express.js](https://expressjs.com/) is a lightweight and flexible Node.js web application framework that provides a simple set of features for building REST APIs quickly. Express.js follows a traditional REST API approach with multiple endpoints for different data operations.

**Application architecture:**

- **Backend**: Express.js server (Node.js) - Handles REST API endpoints, patient data CRUD operations, and business logic.
- **Frontend**: Angular application - Displays the Syncfusion Grid UI with `UrlAdaptor` for seamless data binding.
- **Data Model**: Hospital Patient Management System with comprehensive patient information.

## Prerequisites

| Software / Package          | Recommended version          | Purpose                                 |
|-----------------------------|------------------------------|--------------------------------------   |
| Node.js                     | 20.x LTS or later            | Runtime                                 |
| npm / yarn / pnpm           | 11.x or later                | Package manager                         | 
| Angular CLI                 | 18.x or later                | Frontend framework and CLI tools        |
| TypeScript                  | 5.x or later                 | Server‑side and client‑side type safety |

## Key topics

| # | Topics                                                                                          | Link                                              |
|------|------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| 1    | Create a Node.js project, configure TypeScript, and set up Express server                           | [View](#setting-up-the-expressjs-backend-using-nodejs)        |
| 2    | Handle server-side filtering, searching, sorting, and paging for efficient data processing         | [View](#performing-data-operations)                           |
| 3    | Handle server-side CRUD actions                                                                     | [View](#performing-crud-operations)                           |
| 4    | Start servers locally and access the backend                                                        | [View](#run-the-server-application)                           |
| 5    | Create an Angular project and configure Syncfusion Grid with UrlAdaptor                             | [View](#connecting-syncfusion-angular-grid-with-expressjs)    |
| 6    | Start servers locally and access the frontend                                                       | [View](#run-the-application)                                  |
| 7    | Explore a complete working sample on GitHub                                                         | [View](#complete-sample-repository)                           |

## Setting up the Express.js backend using Node.js

The Express.js backend acts as the central REST API service, handling HTTP requests and responses that power the Syncfusion Angular Grid.

### Step 1: Create the Express server and install required packages

Before configuring the Express.js API, a proper project structure must be created to host the backend server. This folder will contain the server configuration, required dependencies, and sample data used for processing API requests.

For this implementation, an Express.js server is created to manage a **Hospital Patient Management System** with comprehensive patient data including demographics, medical information, doctor assignments, and hospital details.

**Create project root folder:**

Open a terminal (for example, an integrated terminal in Visual Studio Code, Windows Command prompt opened with <kbd>Win+R</kbd>, or macOS Terminal launched with <kbd>Cmd+Space</kbd>) and run the following commands:

```bash
mkdir ej2-angular-grid-with-express-js
cd ej2-angular-grid-with-express-js
```

**Create backend server folder:**

Create the server folder with all necessary subdirectories for organizing code by responsibility:

```bash
mkdir server
cd server
mkdir src
cd src
mkdir controllers routes utils types
cd ..
```

The folder structure after this step should look like:

```
ej2-angular-grid-with-express-js/
├── server/
│   └── src/
│       ├── controllers/
│       ├── routes/
│       ├── utils/
│       └── types/
```

**Initialize Node.js and install packages:**

Run the following commands in the terminal window (ensure it is in the **server** directory) to install the required packages.

```bash
npm init -y
npm install express cors
npm install -D typescript ts-node nodemon @types/express @types/cors @types/node
```

**Package descriptions:**
- **express** – Web framework for building REST APIs and defining HTTP routes.
- **cors** – Enables cross-origin requests from the Angular client to the Express server.
- **typescript, ts-node, nodemon** – Enables TypeScript-based development with auto-reload on file changes.
- **@types/express, @types/cors, @types/node** – Type definitions for Express, CORS, and Node.js.

The **server** folder is now created with all required subdirectories, and packages are installed. The project is ready for setting up TypeScript configuration, defining data interfaces, creating API routes, and implementing controller logic.

**Current folder structure:**

```
ej2-angular-grid-with-express-js/
└── server/
    ├── node_modules/
    ├── src/
    │   ├── controllers/
    │   ├── routes/
    │   ├── utils/
    │   └── types/
    ├── package.json
    └── package-lock.json
```

### Step 2: Configure TypeScript

TypeScript configuration tells the compiler to convert TypeScript to JavaScript and sets up the project structure.
 
Create **tsconfig.json** in the **server** folder using the below command:

```bash
npx tsc --init
```

Replace (**server/tsconfig.json**) file content with the following configuration:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "moduleResolution": "node"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Step 3: Create TypeScript interfaces

Express.js requires clear data type definitions to ensure type safety throughout the application. Create a new file at (**server/src/types/interface.ts**) with the following content.

```typescript
export interface Patient {
  PatientID: number;
  PatientName: string;
  Age: number;
  Gender: string;
  Email: string;
  Phone: string;
  DoctorName: string;
  Specialty: string;
  HospitalName: string;
  City: string;
  Country: string;
  AdmissionDate: string;
  Diagnosis: string;
  Status: string;
}

export interface DataManagerRequest {
  skip?: number;
  take?: number;
  sorted?: Array<{ name: string; direction: string }>;
  where?: any[];
  search?: Array<{ fields: string[]; key: string; operator: string; ignoreCase: boolean }>;
  requiresCounts?: boolean;
}
```

### Step 4: Generate sample data

Create a new file at (**server/src/utils/data.ts**) with the following content.

```typescript
import { Patient } from "../types/interface";
const patientNames = [
  "John Smith", "Sarah Johnson", "Michael Brown", "Emily Davis", "Robert Wilson", ...];

const doctorNames = [
  "Dr. James Johnson", "Dr. Sarah Williams", "Dr. Michael Brown", "Dr. Emily Davis", ...];

const hospitalNames = [
  "City General Hospital", "St. Mary's Medical Center", "County Health Hospital", ...];

const specialties = [
  "Cardiology", "Neurology", "Orthopedics", "General Surgery", "Pediatrics", ...];

const diagnoses = [
  "Hypertension", "Diabetes Type 2", "Coronary Artery Disease", "Pneumonia", "Asthma", ...];

const genders = ["Male", "Female"];
const cities = [
  "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
  "Philadelphia", "San Antonio", ...];

const countries = ["USA", "Canada", "UK", "Australia", "Germany", "France", "Spain", "Italy"];

const statuses = ["Active", "Discharged", "Under Observation", "Critical", "Stable", "Recovering"];

export function generatePatients(count: number): Patient[] {
  let patients: Patient[] = Array.from({ length: count }, (_, i) => {
    const admissionDate = new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
    return {
      PatientID: 1001 + i,
      PatientName: patientNames[i % patientNames.length],
      Age: Math.floor(Math.random() * 70) + 18,
      Gender: genders[Math.floor(Math.random() * genders.length)],
      Email: `patient${1001 + i}@hospital.com`,
      DoctorName: doctorNames[Math.floor(Math.random() * doctorNames.length)],
      ...
    };
  });
  return patients;
}
```

**Purpose**: This utility generates 1000 patient records in-memory, eliminating the need for a real database during development and testing.

### Step 5: Setup npm scripts for development

Scripts in **package.json** make it easy to run and build the server. Update the (**server/package.json**) file with the following scripts.

```json
{
  "scripts": {
    "dev": "nodemon --exec ts-node src/server.ts",
    "start": "ts-node src/server.ts",
    "build": "tsc"
  }
}
```

### Step 6: Create the Express server configuration

Create the main server file at (**server/server.ts**) that initializes Express.js, sets up middleware, and defines routes.

```typescript
import express, { Application } from 'express';
import cors from 'cors';
import patientRoutes from './src/routes/patients.routes';

const app: Application = express();
const PORT = 5000;
app.use(cors({
  origin: '*',
  methods: ['POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/patients', patientRoutes);
app.listen(PORT, () => {
  console.log(`Patients endpoint: http://localhost:${PORT}/api/patients`);
});
export default app;
```

### Step 7: Create API routes

Create a routes file at (**server/src/routes/patients.routes.ts**) that defines all HTTP endpoints for data operations.

```typescript
import { Router } from 'express';
import { getPatients, createPatient, updatePatient,deletePatient} from '../controllers/patients.controller';

const router = Router();
// Used to get the data
router.post('/', (req, res) => {
    return getPatients(req, res);
});
// Used for Insert operation
router.post('/create', (req, res) => { return createPatient(req, res); });
// Used for Edit operation
router.post('/update', (req, res) => { return updatePatient(req, res); });
// Used for Delete operation
router.post('/remove', (req, res) => { return deletePatient(req, res); });

export default router;
```

## Performing Data operations

In the Angular application, interactions with the Grid trigger the `UrlAdaptor` to generate structured HTTP request payloads, which the Express.js  backend processes to perform filtering, searching, sorting, and paging operations on the server side.

Create the controller file at `server/src/controllers/patients.controller.ts` to handle all server request operations for data actions. The complete code is available [here](https://github.com/SyncfusionExamples/syncfusion-angular-grid-with-expressjs-server/blob/master/server/src/controllers/patients.controller.ts).

### Filtering

Filtering in the Angular client narrows the dataset by applying conditions (equals, contains, starts with, etc.) with AND/OR logic.

```typescript
const applyWhere = (data: Patient[], where: any[]): Patient[] => {
  if (!where || where.length === 0) return data;
  return data.filter(item => {
    return evaluatePredicateGroup(item, where, 'and');
  });
};
```

### Searching

Searching in the Angular client quickly locates records by checking an entered term across multiple columns.

```typescript
const applySearch = (data: Patient[], search: any[]): Patient[] => {
  if (!search || search.length === 0) return data;
  return data.filter(item => {
    return search.every(s => {
      const fields = s.fields || [];
      const key = s.key || '';
      const operator = s.operator || 'contains';
      const ignoreCase = s.ignoreCase !== false;
      if (!fields.length || !key) return true;
      const searchKey = ignoreCase ? key.toLowerCase() : key;
      return fields.some((field: string) => {
        const fieldValue = ignoreCase && typeof item[field as keyof Patient] === 'string'
          ? (item[field as keyof Patient] as string).toLowerCase()
          : item[field as keyof Patient];
        if (operator === 'contains') {
          return String(fieldValue).includes(searchKey);
        } else {
          return String(fieldValue) === searchKey;
        }
      });
    });
  });
};
```

### Sorting

Sorting in the Angular Grid arranges records by one or more columns in ascending or descending order.

```typescript
const applySort = (data: Patient[], sorted: any[]): Patient[] => {
  if (!sorted || sorted.length === 0) return data;
  const result = [...data];
  sorted.forEach(sort => {
    const direction = (sort.direction || 'ascending').toLowerCase() === 'descending' ? -1 : 1;
    result.sort((a, b) => {
      const aVal = a[sort.name as keyof Patient];
      const bVal = b[sort.name as keyof Patient];
      if (aVal < bVal) return -direction;
      if (aVal > bVal) return direction;
      return 0;
    });
  });
  return result;
};
```

### Paging

Paging divides large datasets into smaller, manageable pages based on offset and page size. This allows the Angular Grid to display data efficiently without loading all records at once.

```typescript
const skip: number = dm.skip as number ;
const take = dm.take as number;
result = result.slice(skip, skip + take);
```

The "getPatients" method fetches all patient data from the server to support all related actions.

```typescript
export const getPatients = (req: Request, res: Response) => {
  try {
    const dm: DataManagerRequest = req.body || {};
    let result = [...patients];
    // Apply filters
    if (dm.where && dm.where.length > 0) {
      result = applyWhere(result, dm.where);
    }
    // Apply search
    if (dm.search && dm.search.length > 0) {
      result = applySearch(result, dm.search);
    }
    const count = result.length;
    // Apply sort
    if (dm.sorted && dm.sorted.length > 0) {
      result = applySort(result, dm.sorted);
    }
    // Apply page
    const skip: number = dm.skip as number ;
    const take = dm.take as number;
    result = result.slice(skip, skip + take);

    res.json(dm.requiresCounts ? {result: result, count: count} : patients);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to retrieve patients',
      result: [],
      count: 0
    });
  }
};
```

## Performing CRUD operations

CRUD operations (Create, Read, Update, Delete) are handled by the controllers and routed through corresponding API endpoints. When the Grid in the Angular application is interacted with, the `UrlAdaptor` automatically sends the appropriate HTTP request to the backend.

### Insert

Insert operation creates a new patient record.

```typescript
export const createPatient = (req: Request, res: Response) => {
  try {
    const updatedRecord = req.body.value || req.body;
    if (!updatedRecord.PatientName || !updatedRecord.DoctorName) {
      return res.status(422).json({
        message: 'PatientName and DoctorName are required'
      });
    }
    const newId = Math.max(...patients.map(p => p.PatientID), 1000) + 1;
    const newPatient: Patient = {
      PatientID: newId,
      PatientName: updatedRecord.PatientName,
      Age: updatedRecord.Age,
      ...
    };

    patients.push(newPatient);
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(422).json({
      message: 'Insert failed: ' + (error instanceof Error ? error.message : String(error))
    });
  }
};
```

### Update

Update operation modifies an existing patient record.

```typescript
export const updatePatient = (req: Request, res: Response) => {
  try {
    const updatedData = req.body.value || req.body;
    const id = req.body.key || req.params.id || updatedData.patientId;

    if (!id) return res.status(422).json({ message: 'Missing patientId' });

    const index = patients.findIndex((p) => p.patientId === parseInt(id));
    patients[index] = { ...patients[index], ...updatedData };
    res.json(patients[index]);
  } catch (error) {
    res.status(422).json({ message: 'Update failed: ' + (error instanceof Error ? error.message : String(error)) });
  }
};
```

### Delete

Delete operation removes a patient record from the dataset.

```typescript
export const deletePatient = (req: Request, res: Response) => {
  try {
    const id = req.body.key;
    if (!id) {
      return res.status(422).json({
        message: 'Missing PatientID'
      });
    }
    const index = patients.findIndex(p => p.PatientID === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    const deleted = patients[index];
    patients.splice(index, 1);
    res.status(200).json({
      message: 'Patient deleted',
      deleted
    });
  } catch (error) {
    res.status(422).json({
      message: 'Delete failed: ' + (error instanceof Error ? error.message : String(error))
    });
  }
};
```

## Run the server application

Use the following command to run the application in the browser.

```bash
cd ej2-angular-grid-with-express-js/server
npm run dev
```

The server will start on `http://localhost:5000`.

Patients endpoint: `http://localhost:5000/api/patients`

## Connecting Syncfusion Angular Grid with Express.js

Create a new Angular application using Angular CLI, which provides a faster development environment and optimized builds.

### Step 1: Create Angular application

Open a terminal (for example, an integrated terminal in Visual Studio Code, Windows Command prompt opened with <kbd>Win+R</kbd>, or macOS Terminal launched with <kbd>Cmd+Space</kbd>) and run the following commands (navigate to the root `ej2-angular-grid-with-express-js` directory first):

```bash
ng new client --routing --style=css
cd client
```

This command creates an Angular application named **client** with routing and CSS support, providing the essential folder structure and files required to begin development immediately.

### Step 2: Install Syncfusion packages

Install the necessary Syncfusion packages using npm:

```bash
npm install @syncfusion/ej2-angular-grids --save
npm install @syncfusion/ej2-data --save
```

### Step 3: Include Syncfusion Stylesheets

Once dependencies are installed, include the required CSS files in the **src/styles.css** file:

```css

@import '@syncfusion/ej2-base/styles/material3.css';  
@import '@syncfusion/ej2-buttons/styles/material3.css';  
@import '@syncfusion/ej2-calendars/styles/material3.css';  
@import '@syncfusion/ej2-dropdowns/styles/material3.css';  
@import '@syncfusion/ej2-inputs/styles/material3.css';  
@import '@syncfusion/ej2-navigations/styles/material3.css';
@import '@syncfusion/ej2-popups/styles/material3.css';
@import '@syncfusion/ej2-splitbuttons/styles/material3.css';
@import '@syncfusion/ej2-notifications/styles/material3.css';
@import '@syncfusion/ej2-angular-grids/styles/material3.css';
```

For this project, the "Material 3" theme is applied. Other themes can be selected, or the existing theme can be customized to meet specific project requirements. For detailed guidance on theming and customization, refer to the [Syncfusion angular Components Appearance](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio) documentation.

### Step 4: Configure DataManager for REST API communication

The Syncfusion [DataManager](https://ej2.syncfusion.com/angular/documentation/data/getting-started) acts as a communication layer between the Angular Grid and backend services. It sends all Grid operations such as reading data, sorting, filtering, searching, paging, and performing CRUD actions—to the server in a standardized format.

The [UrlAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors#url-adaptor) is a built‑in adaptor that formats requests for REST‑style endpoints, such as the Express.js REST Framework API. It defines the request structure and processes the server responses. The `UrlAdaptor` converts Grid actions into HTTP POST requests and handles the JSON responses returned by the server, enabling the Grid to manage and display data seamlessly.

When using `DataManager` with `UrlAdaptor`, the server is expected to return a specific response structure:

- **result**: The list of data displayed in the current view, supporting on‑demand loading for large datasets.
- **count**: The total count of records in the dataset.

This response format ensures seamless interaction between the Angular Grid and backend services, enabling all data operations to work consistently.

Create the data manager service file at (**client/src/services/dataManager.ts**).

```typescript
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
// API service endpoint
const API_BASE_URL = 'http://localhost:5000/api/patients';

export const patientDataManager = new DataManager({
  url: API_BASE_URL,                    // POST endpoint for featching data with filters, sort, paging
  insertUrl: API_BASE_URL + '/create',  // POST endpoint for inserting new records
  updateUrl: API_BASE_URL + '/update',  // POST endpoint for updating records
  removeUrl: API_BASE_URL + '/remove',  // POST endpoint for deleting records
  adaptor: new UrlAdaptor()             // Activates the UrlAdaptor
});
```

### Step 5: Create the Grid component

Create an Angular component that renders the Syncfusion Grid and connects it to the Express.js backend at (**client/src/app/components/patient-grid.component.ts**).

```typescript

import { Component } from '@angular/core';
import { GridModule, PageService, SortService, FilterService, EditService, ToolbarService, SearchService } from '@syncfusion/ej2-angular-grids';
import { patientDataManager } from '../services/dataManager';

@Component({
  selector: 'app-patient-grid',
  standalone: true,
  imports: [GridModule],
  template: `
    <ejs-grid [dataSource]="dataManager">
      <e-columns>
        <e-column field="PatientID" headerText="ID" type="number" isPrimaryKey="true" visible="false"></e-column>
        <e-column field="PatientName" headerText="Patient Name" width="150"></e-column>
        <e-column field="Age" headerText="Age" type="number" width="80"></e-column>
        <e-column field="Gender" headerText="Gender" width="100"></e-column>
        <e-column field="DoctorName" headerText="Doctor" width="150"></e-column>
        <e-column field="Specialty" headerText="Specialty" width="120"></e-column>
        <e-column field="Status" headerText="Status" width="100"></e-column>
      </e-columns>
    </ejs-grid>
  `
})
export class PatientGridComponent {
  public dataManager = patientDataManager;
}
```

### Enable paging

The paging feature divides Grid records into multiple pages, improving performance and usability when handling large datasets. Enable paging by setting the [allowPaging](https://ej2.syncfusion.com/angular/documentation/api/grid#allowpaging) property to `true` and injecting the `Page` module. Without the `Page` module, the pager will not render. Customize pager behavior using the [pageSettings](https://ej2.syncfusion.com/angular/documentation/api/grid#pagesettings) property.

```typescript

import { Component } from '@angular/core';
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids';
import { patientDataManager } from '../services/dataManager';

@Component({
  selector: 'app-patient-grid',
  standalone: true,
  imports: [GridModule],
  providers: [PageService],
  template: `
    <ejs-grid
      [dataSource]="dataManager"
      [allowPaging]="true"
    >
    </ejs-grid>
  `
})
```

When paging is performed in the Grid, a request is sent to the server with the following payload.

![Paging_Payload](../images/grid-expressjs-paging.png)

### Enable filtering

The filtering feature enables searching and refining Grid records based on column values. Enable filtering by setting the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid#allowfiltering) property to `true` and injecting the `Filter` module. Without the `Filter` module, the filter bar will not render. Customize filtering options using the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/grid#filtersettings) property.

```typescript
import { Component } from '@angular/core';
import { GridModule, FilterService } from '@syncfusion/ej2-angular-grids';
import { patientDataManager } from '../services/dataManager';

@Component({
  selector: 'app-patient-grid',
  standalone: true,
  imports: [GridModule],
  providers: [FilterService],
  template: `
    <ejs-grid
      [dataSource]="dataManager"
      [allowFiltering]="true"
    >
    </ejs-grid>
  `
})
```

When filtering is performed in the Grid, a request is sent to the server with the following payload.

![Filtering_Payload](../images/grid-expressjs-filtering.png)

### Enable searching

Enabling the search functionality involves integrating a search text box directly into the grid's toolbar. This allows entering search criteria conveniently within the grid interface. To add the search item to the grid's toolbar, use the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbar) property and add `Search` item.

```typescript

import { Component } from '@angular/core';
import { GridModule, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { patientDataManager } from '../services/dataManager';

@Component({
  selector: 'app-patient-grid',
  standalone: true,
  imports: [GridModule],
  providers: [ToolbarService],
  template: `
    <ejs-grid
      [dataSource]="dataManager"
      [toolbar]="['Search']"
    >
    </ejs-grid>
  `
})
```

When searching is performed in the Grid, a request is sent to the server with the following payload.

![Searching_Payload](../images/grid-expressjs-searching.png)

### Enable sorting

The sorting feature allows ordering Grid records by clicking column headers. Enable sorting by setting the [allowSorting](https://ej2.syncfusion.com/angular/documentation/api/grid#allowsorting) property to `true` and injecting the `Sort` module. Without the `Sort` module, clicking headers will not sort the data. Customize sorting behavior using the [sortSettings](https://ej2.syncfusion.com/angular/documentation/api/grid#sortsettings) property.

```typescript

import { Component } from '@angular/core';
import { GridModule, SortService } from '@syncfusion/ej2-angular-grids';
import { patientDataManager } from '../services/dataManager';

@Component({
  selector: 'app-patient-grid',
  standalone: true,
  imports: [GridModule],
  providers: [SortService],
  template: `
    <ejs-grid
      [dataSource]="dataManager"
      [allowSorting]="true"
    >
    </ejs-grid>
  `
})
export class PatientGridComponent {
  public dataManager = patientDataManager;
}
```

When sorting is performed in the Grid, a request is sent to the server with the following payload.

![Sorting_Payload](../images/grid-expressjs-sorting.png)

### Enable CRUD actions

Enabling editing functionality within the grid requires configuring the [allowEditing](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettingsModel#allowediting), [allowAdding](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettingsModel#allowadding), and [allowDeleting](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettingsModel#allowdeleting) properties within the [editSettings](https://ej2.syncfusion.com/angular/documentation/api/grid#editsettings) to `true`.

Editing feature requires a primary key column for CRUD operations. To define the primary key, set [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/column#isprimarykey) to `true` in particular column.

The [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbar) property of the Grid component specifies the items displayed in the grid’s toolbar. By adding items such as `Edit`, `Add`, `Delete`, `Update`, and `Cancel` to the `toolbar` property, the corresponding edit options become available in the `toolbar`.

```typescript

import { Component } from '@angular/core';
import { GridModule, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { patientDataManager } from '../services/dataManager';

@Component({
  selector: 'app-patient-grid',
  standalone: true,
  imports: [GridModule],
  providers: [EditService, ToolbarService],
  template: `
    <ejs-grid
      [dataSource]="dataManager"
      [editSettings]="{ allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' }"
      [toolbar]="['Add', 'Edit', 'Delete', 'Update', 'Cancel']"
    >
      <e-columns>
        <e-column field="PatientID" headerText="ID" type="number" isPrimaryKey="true" width="100"></e-column>
      </e-columns>
    </ejs-grid>
  `
})
```

When a new record added in the Grid, a request is sent to the server with the following payload.

![Add_Payload](../images/grid-expressjs-crud-add.png)

When a record updated in the Grid, a request is sent to the server with the following payload.

![Edit_Payload](../images/grid-expressjs-crud-edit.png)

When a record deleted in the Grid, a request is sent to the server with the following payload.

![Delete_Payload](../images/grid-expressjs-crud-delete.png)

## Run the application

Both the backend Express.js server and the frontend Angular application need to run simultaneously for the Grid to function properly.

**Prerequisites for running:**

Before starting the servers, the following must be available:
- Two terminal windows or tabs open (one for backend, one for frontend)
- Both **server** and **client** directories created and configured
- All npm packages installed in both directories

### Step 1: Start the Express.js backend server

Open the first terminal and navigate to the **server** folder from the project root:

```bash
cd ej2-angular-grid-with-express-js/server
npm run dev
```

The server will start on `http://localhost:5000`. The following console output should appear:

Patients endpoint: `http://localhost:5000/api/patients`

### Step 2: Start the Angular frontend application

Open a new terminal and navigate to the **client** folder from the project root:

```bash
cd ej2-angular-grid-with-express-js/client
ng serve
```

The Angular application will start on `http://localhost:4200`.

**The complete folder structure is as follows:**

```
ej2-angular-grid-with-express-js/
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── patients.controller.ts
│   │   ├── routes/
│   │   │   └── patients.routes.ts
│   │   ├── utils/
│   │   │   └── data.ts
│   │   ├── types/
│   │   │   └── interface.ts
│   │   └── server.ts
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
│
└── client/
    ├── src/
    │   ├── app/
    │   │   ├── components/
    │   │   │   └── patient-grid.component.ts
    │   │   └── app.component.ts
    │   ├── services/
    │   │   └── dataManager.ts
    │   ├── styles.css
    │   └── main.ts
    ├── node_modules/
    ├── package.json
    ├── angular.json
    ├── tsconfig.json
    └── tsconfig.app.json
```

## Complete sample repository

For a complete working implementation, refer to the GitHub repository:
[Syncfusion Angular Grid with Express.js Server Sample](https://github.com/SyncfusionExamples/syncfusion-angular-grid-with-expressjs-server)

The repository contains the complete Express.js backend implementation with all controller methods, API routes, TypeScript interfaces, and data models, plus a ready-to-run Angular frontend application.

## See also

  - [Types of Edit](https://ej2.syncfusion.com/angular/documentation/grid/editing/edit-types)
  - [Validation Rules](https://ej2.syncfusion.com/angular/documentation/grid/editing/validation)
  - [Filter Menu](https://ej2.syncfusion.com/angular/documentation/grid/filtering/filter-menu)
