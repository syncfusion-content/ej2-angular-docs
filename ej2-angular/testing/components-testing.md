---
layout: post
title: Component Testing in Angular Common control | Syncfusion
description: Learn here all about how to configure Syncfusion Angular components within the test bed using component instances or selectors.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Component Testing in Jasmine/Karma Environment for Angular

This guide explains how to configure Syncfusion<sup style="font-size:70%">&reg;</sup> [Angular components](https://www.syncfusion.com/angular-components/) within the test bed, enabling interaction with component instances or selectors using the built-in [Jasmine](https://jasmine.github.io/) test framework in projects created with [Angular CLI](https://angular.io/guide/testing). With this setup, you can seamlessly implement [Unit Testing](#unit-tesing), [Integration Testing](#integration-testing) and [End-to-End Testing](#end-to-end-testing) on Syncfusion<sup style="font-size:70%">&reg;</sup> components.

## Setting Up the Test Environment

To begin testing, configure [Angular application](https://angular.io/) and integrate [Syncfusion Angular components](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-cli). This guide focuses on testing the Syncfusion<sup style="font-size:70%">&reg;</sup> [Grid](https://ej2.syncfusion.com/angular/documentation/grid/getting-started) component. If a license banner appears in Karma automation browsers, you may need to [register a Syncfusion license key using the npx command](https://ej2.syncfusion.com/angular/documentation/licensing/license-key-registration#register-syncfusion-license-key-using-the-npx-command).

## Unit Testing

Unit testing checks individual features or functionalities, such as functions or classes, in isolation. This approach enables early detection and resolution of issues, resulting in a more robust and reliable application. The code example below demonstrates how to set up Angular's TestBed configuration and verify grid row rendering in a Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component.

```typescript
// app.component.spec.ts

import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GridModule, PageService, EditService } from '@syncfusion/ej2-angular-grids';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach((async () => {
    fixture = await TestBed.configureTestingModule({
      imports: [GridModule],
      providers: [PageService, EditService],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('Test rendered Grid rows using Selector', fakeAsync( async () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    tick(500);
    expect(compiled.querySelector('.e-grid') as HTMLElement).toBeDefined();
    expect((compiled.querySelector('.e-grid') as HTMLElement).classList.length).toBe(9);
    const rows: HTMLElement[] = [].slice.call(compiled.querySelectorAll('.e-row'));
    expect(rows.length).toBe(6);
  }));

  it('Test rendered Grid rows using Instances', fakeAsync( async () => {
    fixture.detectChanges();
    tick(500);
    const component = fixture.componentInstance;
    expect((component as AppComponent).grid?.currentViewData.length).toBe(6);
  }));
});
```

To view test results, run:

```bash
ng test
```

## Integration Testing

Integration testing validates a component as an integrated unit, helping identify issues resulting from the combination of parts. The following code demonstrates an integration test for `AppComponent` with the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid using Angular's testing utilities.

```typescript
// app.component.spec.ts

import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GridModule, PageService, EditService } from '@syncfusion/ej2-angular-grids';

const newRecord = {
  OrderID: 10262,
  CustomerID: 'RATTC',
  Freight: 48.29,
  OrderDate: new Date(8379738e5),
};

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(( async () => {
    fixture = await TestBed.configureTestingModule({
      imports: [GridModule],
      providers: [PageService, EditService],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('Add new record dynamically in the Data Grid rows and check the record', fakeAsync( async () => {
    fixture.detectChanges();
    tick(500);
    (component as AppComponent).grid?.addRecord(newRecord, 0);
    tick(500);
    expect(((component as AppComponent).grid?.currentViewData[0] as any).OrderID).toBe(10262);
  }));
});
```

Run the following command to see the report:

```bash
ng test
```

## End-to-End Testing

End-to-End testing evaluates Syncfusion<sup style="font-size:70%">&reg;</sup> components from a user's perspective, simulating actions such as clicking the pager within the Grid component. The following example shows how to trigger navigation and verify that the result matches user expectations.

```typescript
// app.component.spec.ts

import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GridModule, PageService, EditService } from '@syncfusion/ej2-angular-grids';

const newRecord = {
  OrderID: 10262,
  CustomerID: 'RATTC',
  Freight: 48.29,
  OrderDate: new Date(8379738e5),
};

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(( async () => {
    fixture = await TestBed.configureTestingModule({
      imports: [GridModule],
      providers: [PageService, EditService],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('Render the Data Grid and navigate its pages', fakeAsync( async () => {
    fixture.detectChanges();
    tick(500);
    const compiled = fixture.nativeElement as HTMLElement;
    (component as AppComponent).grid?.addRecord(newRecord, 0);
    tick(500);
    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    (compiled.querySelector('.e-pager-default') as HTMLElement).dispatchEvent(event);
    tick(500);
    expect((component as AppComponent).grid?.currentViewData.length).toBe(3);
  }));
});
```

To view E2E test results, run:

```bash
ng test
```

## See also

* [Unit Jasmine Testing Documentation](https://ej2.syncfusion.com/angular/documentation/grid/how-to/unit-jasmine-testing)
* [Selenium E2E Testing using Protractor in Angular](https://ej2.syncfusion.com/angular/documentation/frameworks-and-feature/angular-selenium)
