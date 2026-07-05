---
layout: post
title: Version compatibility in Angular Upgrade component | Syncfusion
description: Learn here all about Version compatibility in Syncfusion Angular Upgrade component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Version compatibility 
documentation: ug
domainurl: ##DomainURL##
---

# Angular Version Compatibility for Syncfusion Components

## Supported Angular Versions

The following table provides compatibility information for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI components and supported Angular versions:

| Angular Version | Compatible Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components Version |
| --------------- | ------------------------------------------------ |
| [Angular v22](https://blog.angular.dev/announcing-angular-v22-c52bb83a4664) | 34.1.29 and above |
| [Angular v21](https://www.syncfusion.com/blogs/post/angular-21-updates-syncfusion-support) | 31.1.17 and above |
| [Angular v20](https://www.syncfusion.com/blogs/post/whats-new-in-angular-20)| 30.1.37 and above |
| [Angular v19](https://blog.angular.dev/meet-angular-v19-7b29dfd05b84/) | 26.1.35 and above |
| [Angular v18](https://blog.angular.dev/angular-v18-is-now-available-e79d5ac0affe/) | 25.2.3 and above |
| [Angular v17](https://blog.angular.io/introducing-angular-v17-4d7033312e4b/) | 23.2.4 and above |
| [Angular v16](https://blog.angular.io/angular-v16-is-here-4d7a28ec680d/) | 21.1.39 and above |
| [Angular v15](https://blog.angular.io/angular-v15-is-now-available-df7be7f2f4c8/) | 20.4.38 and above |
| [Angular v14](https://blog.angular.io/angular-v14-is-now-available-391a6db736af/) | 20.2.36 and above |
| [Angular v13](https://blog.angular.io/angular-v13-is-now-available-cce66f7bc296/) | 19.4.38 and above |
| [Angular v12](https://blog.angular.io/angular-v12-is-now-available-32ed51fbfd49/) | 19.3.43 and above |

## Ivy and Non-Ivy Package Compatibility

**Ivy** is Angular's default rendering engine, introduced in Angular 9, which provides improved build times and bundle sizes. **View Engine** is the legacy rendering engine used in earlier Angular versions. To support both Ivy and non-Ivy (View Engine) applications, Syncfusion<sup style="font-size:70%">&reg;</sup> offers two package distributions:

1. **Ivy-compatible packages**: These are the default packages and do not require any special suffix.

2. **Non-Ivy (View Engine) packages**: For applications still using the View Engine, append the `-ngcc` suffix to the package version in the `package.json` file.

### Usage of ngcc Packages

The Angular Compatibility Compiler (**ngcc**) transforms packages to work with Ivy-based applications. For Syncfusion<sup style="font-size:70%">&reg;</sup> components, follow these guidelines:

- **Ivy-based applications (Angular 12 and above):** Use the default packages without any suffix.

  Example:
  ```json
  "@syncfusion/ej2-angular-grids": "20.2.38"
  ```

- **Non-Ivy applications (View Engine):** Add the `-ngcc` suffix to the package version.

  Example:
  ```json
  "@syncfusion/ej2-angular-grids": "20.2.38-ngcc"
  ```

> **Note:** The `-ngcc` suffix is required only for versions 20.2.36 and later when using non-Ivy applications. For Ivy-based applications, which is the default for Angular 12 and above, use the packages without the suffix.

For detailed installation instructions, refer to the [Angular package installation guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-cli#installing-syncfusion-grid-package).

## Understanding Syncfusion<sup style="font-size:70%">&reg;</sup> Version Numbers

Syncfusion<sup style="font-size:70%">&reg;</sup> follows a quarterly release cycle for major updates. The version numbering system for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components uses semantic versioning in the format **Major.Minor.Patch**. This system allows developers to quickly understand the nature of each release.

For example, a release version `22.1.34` can be interpreted as follows:

**22** - Major version (updated quarterly)
This number represents significant updates to the library. It may include major enhancements, new features, bug fixes, and potential breaking changes. Syncfusion<sup style="font-size:70%">&reg;</sup> increments this number every three months as part of their quarterly release cycle.

**1** - Minor version
The minor version indicates the release of new features and bug fixes that maintain backward compatibility. When Syncfusion<sup style="font-size:70%">&reg;</sup> adds functionality in a backwards-compatible manner, they increment this number.

**34** - Patch version
This number is incremented for weekly patch releases. These releases primarily consist of bug fixes and minor improvements that do not introduce new features or breaking changes.

By understanding this versioning system, developers can easily assess the impact and nature of each Syncfusion<sup style="font-size:70%">&reg;</sup> update, helping them make informed decisions about when to upgrade their applications.

## Staying Up-to-Date

To maintain stability, performance, and access to recent features, keep Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components updated to the latest version compatible with the Angular version in use. Benefits of regular updates include:

- Access to new features and enhancements
- Improved performance and reliability
- Timely bug fixes and security updates

## Additional Resources

* [Syncfusion<sup style="font-size:70%">&reg;</sup> Product Release Lifecycle](https://www.syncfusion.com/support/product-lifecycle)
* [Upgrade Guide for Angular UI Components](https://ej2.syncfusion.com/angular/documentation/upgrade/upgrading-syncfusion)
* [Angular Update Guide](https://update.angular.io/)
