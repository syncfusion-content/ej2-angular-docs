---
layout: post
title: Ng module in Angular Common control | Syncfusion
description: Learn here all about Ng module in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# NgModule

Syncfusion Angular has an NgModule for each component with two implementations, as given below.

1. Component Module
2. Component All Module

## Component Module

This module contains a particular component and all of its child property directives, excluding feature-wise modules. For example, `GridModule` is only included with `GridComponent` and `ColumnDirective`. It is always recommended to use this module because you can control which features of a component you use, and it is also useful in reducing bundle size when using `Webpack` or `Rollup.js`. 

## Component all Module

This module contains a particular component and all of its directives, with the addition of all the feature-wise Modules of that component. For example, `GridAllModule` is included with `GridComponent`, `ColumnDirective`, `FilterService`, `PageService`, `GroupService` and all other feature-wise module services it is supporting.