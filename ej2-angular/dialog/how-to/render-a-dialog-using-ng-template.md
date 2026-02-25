---
layout: post
title: Render a dialog using ng template in Angular Dialog component | Syncfusion
description: Learn here all about Render a dialog using ng template in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Render a dialog using ng template 
documentation: ug
domainurl: ##DomainURL##
---

# Render a dialog using ng-template in Angular Dialog component

Provide HTML elements as the dialog header, footer, and content using `ng-template` directives. For more details, refer to the [Angular Documentation](https://angular.io/guide/structural-directives#the-ng-template).

In this [example](https://ej2.syncfusion.com/angular/demos/#/material/dialog/template), the dialog header, footer, and content are rendered using `ng-template` directives.

## Destroy the dialog component when navigating pages using Angular routing

By default, the dialog component appends to the body element when no target is specified. When navigating between pages using Angular routing, the elements inside routing pages are destroyed, but the dialog elements may not be destroyed properly, causing a memory leak in the DOM.

Avoid this problem using one of the following solutions:

### Solution 1

Set the target property to the dialog component to resolve the destroy issue in the DOM. When you specify a target, the dialog appends inside the target element placed on the routing page, and both the dialog component and its elements are destroyed when switching between routing pages.

Refer to this [sample](https://stackblitz.com/edit/angular-router-example-fcrp53?file=app/app.component.html).

### Solution 2

If you prefer not to set the target property, destroy the dialog elements using the `ngOnDestroy` lifecycle hook in your application. The `ngOnDestroy` hook is called before Angular destroys the component or directive.

Refer to this [sample](https://stackblitz.com/edit/angular-router-example-9yc2on?file=app/app.component.html).