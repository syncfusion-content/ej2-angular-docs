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

This guide explains on how to configure Syncfusion<sup style="font-size:70%">&reg;</sup> [Angular components]("https://www.syncfusion.com/angular-components/") within the test bed, enabling interaction with component instances or selectors, leveraging the built-in testing support with the [Jasmine]("https://jasmine.github.io/") test framework in projects created with [Angular]("https://angular.io/guide/testing") CLI. With this setup, you can seamlessly implement [Unit Testing](#unit-tesing), [Integration Testing](#integration-testing) and [End-to-End Testing](#end-to-end-testing) with our components.

## Setting Up the Test Environment

To initiate the testing process, we need to configure and integrate an [Angular]("https://angular.io/") application with our [Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components]("https://ej2.syncfusion.com/angular/documentation/getting-started/angular-cli"). In this guide, we will specifically concentrate on testing the Syncfusion<sup style="font-size:70%">&reg;</sup> [grid](https://ej2.syncfusion.com/angular/documentation/grid/getting-started) component. Also if you notice a license banner in karma automation browsers, it means that you need to obtain a Syncfusion<sup style="font-size:70%">&reg;</sup> license key and register it in your application using [npx command]("https://ej2.syncfusion.com/angular/documentation/licensing/license-key-registration#register-syncfusion-license-key-using-the-npx-command").
 
## Unit Testing

Unit testing allows you to test specific features or functionalities in your codebase, focusing on individual units such as functions or classes, also helps to ensure that each part of your code works as expected on its own. This allows you to catch and fix issues early in the development process, leading to more robust and reliable application. The code snippet provided showcases how to set up Angular's TestBed configuration and how to test the rendering of grid rows in a Syncfusion<sup style="font-size:70%">&reg;</sup> grid component.

```typescript 
// app.component.spec.ts

import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GridModule, PageService, EditService } from '@syncfusion/ej2-angular-grids';

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
Run `ng test` command to see the test report.

## Integration Testing

Integration testing allows you to test a component as a whole, rather than testing individual units separately. This approach treats all units as a single entity and provides a broader view of your application's functionality, helping to uncover issues that may arise from the integration of various components. In the provided code snippet, we have an integration test for the AppComponent with Syncfusion<sup style="font-size:70%">&reg;</sup> grid using Angular's testing utilities.

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
Run `ng test` command to see the test report.

## End-to-End Testing

End-to-End testing focuses on evaluating Syncfusion<sup style="font-size:70%">&reg;</sup> components from the perspective of a user, disregarding the internal structure of the components. In the provided code snippet, the testing framework is programmed to simulate a user's action of clicking on the pager within a Syncfusion<sup style="font-size:70%">&reg;</sup> grid component. This interaction triggers a response from the application, such as fetching and displaying additional records. The test then visually inspects the outcome of this interaction to ensure that the expected behavior is achieved.
```typescript
// app.component.spec.ts

import { ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
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
Run `ng test` command to see the test report.


## See also

* [Unit Jasmine Testing Documentation](https://ej2.syncfusion.com/angular/documentation/grid/how-to/unit-jasmine-testing)
* [Selenium E2E Testing using Protractor in Angular](https://ej2.syncfusion.com/angular/documentation/frameworks-and-feature/angular-selenium)



