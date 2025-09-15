---
layout: post
title: Unit Jasmine testing in Angular Grid component | Syncfusion
description: Learn how to perform unit testing with Jasmine in the Syncfusion Angular Grid component of Essential JS 2.
platform: ej2-angular
control: Unit Jasmine testing
documentation: ug
domainurl: ##DomainURL##
---

# Unit Jasmine testing in Angular Grid component

Jasmine test cases are typically executed synchronously, which can cause issues when testing asynchronous code. For example, if a Grid component takes time to render and populate data, a test case may fail if it runs before the Grid has finished loading. To address this, write asynchronous test cases using Jasmine's async features.

When testing asynchronous operations, ensure the test waits for those operations to complete before making assertions. Jasmine provides the [fakeAsync](https://angular.io/api/core/testing/fakeAsync) utility, which simulates the passage of time and controls asynchronous execution within a synchronous test. This creates a "fake" zone where time can be manipulated. To create a Jasmine test case for the Grid component, follow these steps:

**Step 1: Set up the Jasmine testing environment**

**I. Check and install the Node version:**

Verify that Node.js version 14 or higher is installed. If not, install a supported version from the [Node.js download page](https://nodejs.org/en/download).

**II. Create an Angular application and install the Syncfusion Grid package:**

Refer to the [Getting started](https://ej2.syncfusion.com/angular/documentation/grid/getting-started) documentation to create an Angular application and install the Syncfusion Grid package.

**III. Install Jasmine and Karma:**

When the Angular application is created, Jasmine and Karma dependencies are usually installed automatically. To verify, check the `package.json` file. If not present, install them using:

```
npm install --save-dev jasmine karma karma-jasmine karma-chrome-launcher @types/jasmine
```

**IV. Generate the Karma configuration file:**

After installing Karma, generate the configuration file with:

```
npx karma init
```

**V. Implement the Jasmine test case:**

Write Jasmine test cases in files with the `.spec.ts` extension. Use the `describe` function to define the test suite and the `it` function for individual test cases.

For more details, see the official [Angular testing documentation](https://angular.io/guide/testing#set-up-testing).

**Step 2: Create a Grid component**

Use the following code to create a Grid component. For setup instructions, refer to the [Getting started](https://ej2.syncfusion.com/angular/documentation/grid/getting-started) documentation.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
// import your datasource file here
import { stringData } from './datasource'; 

@Component({
    selector: 'app-root',
    template: `<ejs-grid #Grid [dataSource]='data'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {
    @ViewChild('Grid')
    public grid: GridComponent;
    public data: object[];
    ngOnInit(): void {
        this.data = stringData;
    }
}
```

**Step 3: Write a Jasmine test case to verify Grid rendering with data**

**I. Import testing utilities and AppComponent:**

You need to import the testing utilities for the `@angular/core/testing`. After, you need to import the grid component file named is `AppComponent` for Jasmine test case file and import the grid component for `GridComponent` and `GridAllModule` from the `@syncfusion/ej2-angular-grids`.

```typescript
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GridComponent, GridAllModule } from '@syncfusion/ej2-angular-grids';
```

**II. Define the test suite:**

The `describe` function is utilized to define the test suite. Within the `describe` function, you can use the `beforeEach` function. This function to execute the before each test case. Inside the `beforeEach` function, the `TestBed.configureTestingModule` method is used to configure the testing module. So, You need to import the `GridAllModule` in the import property and declared the `AppComponent` and ` GridComponent` in the declaration property.

```typescript
describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
        imports: [
            GridAllModule
        ],
        declarations: [
            AppComponent,
            GridComponent
        ],
        }).compileComponents();
    });
});
```

**III. Create an instance of AppComponent:**

Access the GridComponent instance using `@ViewChild('Grid')`. In `beforeEach`, create the AppComponent instance:

```typescript
    // The component variable stores an instance of AppComponent
    let component: AppComponent;
    // The fixture variable manages the testing environment
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    });
```

**IV. Write the test case in an `it` block:**

The `it` block is used to define a test case for the "Length of the record". It uses the `fakeAsync` function. Within the test case, the `detectChanges` method is used to trigger change detection in the component. The `tick` function is used to simulate the passage of time by updating the virtual clock by 1000 milliseconds. We check that the data grid in the data source has the appropriate number of data records. The [currentViewData](https://ej2.syncfusion.com/angular/documentation/api/grid/#currentviewdata) property is employed to retrieve the length of data for the current page view. By utilizing this property, one can verify the accurate population of data in the grid component.

```typescript
 it(`Length of the record`, fakeAsync(async () => {
        fixture.detectChanges();
        tick(1000);
        expect(component.grid.currentViewData.length).toBe(8);
    }));
```

The following example demonstrates how to create the grid sample and write a Jasmine test case:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/testcase-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.spec.ts" %}
{% include code-snippet/grid/testcase-cs1/src/app.component.spec.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/testcase-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

**Run the Jasmine test case:**

The test command is defined in the `scripts` section of `package.json` as `test`. Run the tests with:

```
ng test
```

>You can find a sample of Unit Jasmine testing in DataGrid [here](https://github.com/SyncfusionExamples/DataGrid-unit-testing-angular)