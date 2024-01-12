---
layout: post
title: Tree shaking in Angular Frameworks and feature component | Syncfusion
description: Learn here all about Tree shaking in Syncfusion Angular Frameworks and feature component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tree shaking 
documentation: ug
domainurl: ##DomainURL##
---

# Tree Shaking 

Tree shaking is an optimization technique used in modern JavaScript and TypeScript development using bundling tools like Webpack or Rollup. Its primary purpose is to eliminate dead or unused code from the application's bundle, resulting in smaller, more efficient, and faster-loading web applications.

This section explains how tree shaking works in Angular and how to implement it with Syncfusion Angular components in the application.

## Tree Shaking in Angular  

The Angular CLI uses Webpack by default for bundling script files, which has supported Tree Shaking since version 2. Generally, it works based on the static structure of ES2015 module syntax, which includes `import` and `export` statements. If your code does not use the exported methods or functions from your application or libraries, it becomes unused code in the browser. So, tree shaking removes all such unused code from the output bundle. This leads to improved performance with faster load times due to minimal JavaScript code, resulting in a better user experience. 

N> Ahead Of Time (AOT) compilation process performs tree shaking in the Angular application, which was enabled by default starting from Angular version 9. To know more about AOT compilation, refer to this [documentation](./angular-aot).

## Using Syncfusion components with Tree Shaking 

Syncfusion Angular components support Tree Shaking by default and do not require any additional changes at the application level.

## Implementing Tree Shaking in an Angular Application 

The following steps demonstrate how to create an Angular application with Syncfusion components and bundle it with tree shaking. 

1.Create an Angular application with Syncfusion Angular DataGrid component as described in the [Getting Started](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone) using the Angular Standalone.

2.Use the following code snippet that shows how to enable Tree Shaking in the `angular.json` configuration file.

{% tabs %}
{% highlight json tabtitle="angular.json" %}

"configurations": {
    "production": {
        "optimization": true,
        "outputHashing": "all",
        "sourceMap": false,
        "namedChunks": false,
        "aot": true,
        "extractLicenses": true
    }
},

{% endhighlight %}
{% endtabs %}

3.Run the `ng build –configuration=production` or `ng serve –configuration=production` command to build or serve the application with Tree Shaking enabled.

4.After build the application, users can utilize the [bundle analyzer](https://www.npmjs.com/package/source-map-explorer) tool to ensure that tree shaking works properly in their application.

> [View the Angular Tree Shaking sample on GitHub](https://github.com/SyncfusionExamples/syncfusion-angular-tree-shaking)

By following these steps and implementing tree shaking in the Angular application, users can optimize the performance and enhance the overall user experience.

## Bundle size for Syncfusion Angular Grid component

The following table demonstrates the size of the Grid module and includes the addition of some features to it in the Angular application.

| Module              | Raw Size | Transfer Size |
|---------------------|----------|---------------|
| Empty App           | 199.45 kB| 56.22 kB      |
| GridModule          | 1.13 MB  | 249.94 kB     |
| PageService         | 1.31 MB  | 274.79 kB     |
| SortService         | 1.32 MB  | 276.41 kB     |
| FilterService       | 1.68 MB  | 333.16 kB     |
| GroupService        | 1.73 MB  | 340.22 kB     |

N> Make sure you are using `GridModule` for the DataGrid component instead of `GridAllModule`. Using `GridAllModule` will increase the bundle size by including all features of DataGrid. To know about the feature modules of DataGrid, refer to this [documentation](https://ej2.syncfusion.com/angular/documentation/grid/module).

## See also

* [Ahead-Of-Time (AOT) compilation](./angular-aot)