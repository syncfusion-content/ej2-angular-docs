---
layout: post
title: Troubleshoot in Angular Common control | Syncfusion
description: Learn here all about Troubleshoot in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Compatibility Issues with Syncfusion Angular Packages and Latest Angular CLI

This article addresses potential issues you may encounter when using Syncfusion Angular UI components with the latest Angular CLI, offering solutions and insights to improve your development experience.

## Are Syncfusion Angular packages compatible with the latest Angular CLI?

Yes, the Syncfusion Angular IVY packages are fully compatible with the latest Angular CLI. Leveraging the latest Angular features can enhance your application performance and development workflow.

## If Syncfusion Angular packages are compatible with Latest Angular CLI, what version should we prepare?

For optimal compatibility and access to the latest features, it is recommended to use version 21.1.39 or the latest available version of the Syncfusion Angular packages. You can verify the [version compatibility](../../upgrade/version-compatibility/) for detailed insights.

## How can I check the compatibility of Syncfusion Angular packages with a specific version of Angular CLI?

To ensure that your Syncfusion Angular packages are compatible with your specific version of the Angular CLI, refer to the comprehensive compatibility [documentation](../../upgrade/version-compatibility/).

## What compatibility issues were encountered while using Syncfusion Angular NGCC packages with the latest version of Angular CLI? 

Some new features introduced in Angular CLI 16, such as the modified Ivy rendering engine, may cause compatibility issues with NGCC component packages. This might trigger errors indicating incompatibility with libraries such as `@syncfusion/ej2-angular-grids`.

## Where can I find more information about this issue? 

More information about the compatibility issue can be found on the official Angular documentation [page](https://v17.angular.io/guide/update-to-version-16#angular-compatibility-compiler-ngcc-has-been-removed).

## What is the cause of the error message encountered during testing? 

The error message encountered during the compile time and suggests that the library (@syncfusion/ej2-angular-grids) which declares GridModule is not compatible with Angular Ivy. This is due to the incompatibility between the NGCC component package and some of the new features introduced in Angular CLI 16.

E> This likely means that the library (@syncfusion/ej2-angular-grids) which declares GridModule has not been processed correctly by ngcc, or is not compatible with Angular Ivy.

## How can I resolve the compatibility issue encountered when using Syncfusion Angular NGCC packages with the latest version of Angular CLI?

One way to resolve the issue is to use IVY compiled [packages](https://www.npmjs.com/package/@syncfusion/ej2-angular-grids) instead of NGCC compiled packages.

## Are there any other ways to resolve the compatibility issue? 

While downgrading the version of Angular CLI to align with NGCC component packages is an option, it is not typically recommended as it might necessitate downgrading other project dependencies, leading to broader compatibility issues.
