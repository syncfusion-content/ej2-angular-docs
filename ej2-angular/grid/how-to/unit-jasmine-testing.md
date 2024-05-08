---
layout: post
title: Unit Jasmine testing in Angular Grid component | Syncfusion
description: Learn here all about Unit Jasmine testing in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Unit Jasmine testing
documentation: ug
domainurl: ##DomainURL##
---

# Unit Jasmine testing in Angular Grid component 

In Jasmine, test cases are typically executed synchronously, which means that any asynchronous code within a test case will not be executed properly. For instance, if you have a Grid component that takes time to render and populate data based on your data consumption timing, your test case might fail if it runs before the Grid has finished filling data. To prevent this situation, it is advisable to write asynchronous test cases utilizing Jasmine's Async feature.

When `Async` testing code relies on asynchronous operations, it's essential to ensure that the test case waits for those operations to complete before making assertions or evaluating the results. The Jasmine testing framework provides a feature called [fakeAsync](https://angular.io/api/core/testing/fakeAsync) that addresses this. By using the `fakeAsync` function, you can simulate the passage of time and control the execution of asynchronous operations within a synchronous test. It creates a "fake" zone where time can be manipulated and controlled. To create a Jasmine test case for the Grid component, follow the below steps:

**Step 1: Set up the Jasmine testing environment.**

**I. Check and install the node version:**

You need to verify if the installed version of Node is 14 or higher. If it is below version 14, you must install a version of Node above 14. You can refer the following link to install the [node version](https://nodejs.org/en/download). You can select the any node version is 14 or above and installed.

**II. Create an Angular application and install the Syncfusion Grid package:**

To create an Angular application and install the Syncfusion Grid package, you can refer to the [Getting started](https://ej2.syncfusion.com/angular/documentation/grid/getting-started) documentation.

**III. Install the Jasmine and karma:**

When angular application is installed, the dependencies for Jasmine and karma should be automatically installed. To verify if the Jasmine and karma dependencies is installed, you can check the `package.json` file. If the Jasmine and karma dependencies is not installed, you can run the following command to install the Jasmine and karma dependencies using npm.

```
npm install --save-dev jasmine karma karma-jasmine karma-chrome-launcher @types/jasmine
```

**IV. Generate the karma configuration file:**

When karma dependency is installed, you can run the following command to generate the karma configuration file.

```
npx karma init
```

**V. How to implement the Jasmine test case:**

You can write the Jasmine test case in the spec.ts extension file. After, open the test specification file and use the `describe` function to define the test case. Within the test suite, use the `it` function to specify the individual test cases.

For more detailed information on setting up testing in Angular, refer to the official [Angular documentation](https://angular.io/guide/testing#set-up-testing).

**Step 2: Create a Grid component.**

Use the following code to create a Grid component. You can refer to the documentation [Getting started](https://ej2.syncfusion.com/angular/documentation/grid/getting-started) to add a Grid component in your application.

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

**Step 3: Write a Jasmine test case that verifies whether the Grid component successfully renders with data or not.**

**I. How to import the testing utilities and AppComponent:**

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

Using the @ViewChild('Grid'), you can access the instance of the GridComponent. Inside the `beforeEach` function, by using the `TestBed.createComponent` is create the instance of `AppComponent`. 

```typescript
    // The component variable is used to store an instance of AppComponent
    let component: AppComponent;
    // The fixture variable is responsible for creating and managing the testing
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    });
```

**IV. How to write the test case in a `it` block:**

The `it` block is used to define a test case for the "Length of the record". It uses the `fakeAsync` function. Within the test case, the `detectChanges` method is used to trigger change detection in the component. The `tick` function is used to simulate the passage of time by updating the virtual clock by 1000 milliseconds. We check that the data grid in the data source has the appropriate number of data records. The [currentViewData](https://ej2.syncfusion.com/angular/documentation/api/grid/#currentviewdata) property is employed to retrieve the length of data for the current page view. By utilizing this property, one can verify the accurate population of data in the grid component.

```typescript
 it(`Length of the record`, fakeAsync(async () => {
        fixture.detectChanges();
        tick(1000);
        expect(component.grid.currentViewData.length).toBe(8);
    }));
```

The following example illustrates how to create the grid sample and how to writing the jasmine test case.

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

The test command can be located in the `scripts` section of the `package.json` file. It is defined in the `test`. The following command

```
ng test
```

>You can find the sample of the Unit Jasmine testing in DataGrid [here](https://github.com/SyncfusionExamples/DataGrid-unit-testing-angular)
