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

Tree shaking is a powerful optimization technique used in modern JavaScript and TypeScript development with tools like Webpack or Rollup. Its main goal is to remove dead or unused code from the application's bundle, resulting in smaller, more efficient, and faster-loading web applications.

In this guide, how tree shaking is implemented in Angular applications and how it synergizes with Syncfusion Angular components to optimize performance is explored.

## Tree Shaking in Angular  

The Angular CLI, utilizing Webpack for bundling script files, has supported tree shaking since Angular CLI version 2. Tree shaking operates on the static structure of ES2015 module syntax, using `import` and `export` declarations. Any exported functions or methods that are not used in your code are considered unnecessary and removed from the output bundle. This results in improved performance, with faster load times and consequently a better user experience.

N> Ahead Of Time (AOT) compilation process performs tree shaking in the Angular application, which was enabled by default starting from Angular version 9.

## Using Syncfusion<sup style="font-size:70%">&reg;</sup> components with Tree Shaking 

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components support Tree Shaking by default and do not require any additional changes at the application level.

## Implementing Tree Shaking in an Angular Application 

Follow these steps to implement an Angular application with Syncfusion components, optimizing it through tree shaking:

1. **Create an Angular Application:** Begin with the Syncfusion Angular DataGrid component as outlined in the [Getting Started](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone) guide using Angular Standalone.

2. **Configuration for Tree Shaking:** Modify the `angular.json` configuration file to enable optimization features for tree shaking.

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

3. **Build the Application:** Use the command `ng build –configuration=production` or `ng serve –configuration=production` to build or serve the application with tree shaking enabled.

4. **Verify the Bundle Size:** After building the application, use the [source-map-explorer](https://www.npmjs.com/package/source-map-explorer) tool to analyze and ensure that tree shaking is working effectively.

> [Explore the Angular Tree Shaking Example on GitHub](https://github.com/SyncfusionExamples/syncfusion-angular-tree-shaking)

By adhering to these practices, the performance of the Angular application can be significantly enhanced, delivering an improved user experience.

## Bundle size for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component

The following table demonstrates the size of the Grid module and includes the addition of some features to it in the Angular application.

| Module              | Raw Size | Transfer Size |
|---------------------|----------|---------------|
| Empty App           | 199.45 kB| 56.22 kB      |
| GridModule          | 1.13 MB  | 249.94 kB     |
| PageService         | 1.31 MB  | 274.79 kB     |
| SortService         | 1.32 MB  | 276.41 kB     |
| FilterService       | 1.68 MB  | 333.16 kB     |
| GroupService        | 1.73 MB  | 340.22 kB     |

N> Make sure to use `GridModule` for the DataGrid component instead of `GridAllModule`. Using `GridAllModule` will increase the bundle size by including all features of DataGrid. To know about the feature modules of DataGrid, refer to this [documentation](https://ej2.syncfusion.com/angular/documentation/grid/module).
