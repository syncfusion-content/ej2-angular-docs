---
layout: post
title: Ahead-of-Time in Angular Frameworks and feature component | Syncfusion
description: Learn here all about Ahead-of-Time in Syncfusion Angular Frameworks and feature component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ahead-of-Time
documentation: ug
domainurl: ##DomainURL##
---

# Ahead-of-Time (AOT) Compilation in Angular 

Ahead-of-Time (AOT) Compilation is a technique that compiles Angular's templates and components into browser-ready JavaScript code during the build process itself. This can improve the initial loading time of the application. From angular v9, the AOT compilation is enabled by default. To know more about AOT compilation, refer to this [documentation](https://angular.io/guide/aot-compiler).

This section explains the benefits of using AOT compilation and how to implement it in applications.

## Why use AOT compilation

The following are the benefits of using AOT compilation in Angular applications.

* AOT compilation translates Angular templates into optimized JavaScript code during the build process, which leads to faster initial loading times for your application.

* By pre-compiling templates, AOT eliminates the need for the Angular compiler to be part of the final bundle, resulting in smaller bundle sizes and reduced runtime overhead.

* AOT compilation catches template errors at build time rather than runtime, making it easier to identify and fix issues early in the development process.

## Using Syncfusion components with AOT

All [Syncfusion Angular components](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-) are compatible with AOT compilation.

## Implementation of AOT Compilation in an Angular Application

1.From the angular v9, the Ivy compiler is enables the AOT compilation by default in the `angular.json` configuration file. If you're using Angular versions prior to 9, ensure that `aot` is set to `true` in the `angular.json` file.

{% tabs %}
{% highlight json tabtitle="angular.json" %}

"build": { 
    ... 
    "options": { 
        ... 
        "aot": true,
    }
} 

{% endhighlight %}
{% endtabs %}


To know more about AOT compilation with Ivy, refer to this [documentation](https://angular.io/guide/ivy).

2.AOT compilation improves the initial rendering performance of the application. To achieve this performance improvement, build the application using the following command:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

ng build –configuration=production

{% endhighlight %}
{% endtabs %}

## See also

* [Angular Ivy compiler](https://v12.angular.io/guide/ivy#aot-and-ivy)

* [Angular Tree Shaking](./tree-shaking)
