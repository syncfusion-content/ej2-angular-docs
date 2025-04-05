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

Ahead-of-Time (AOT) Compilation is a technique that compiles Angular's templates and components into browser-ready JavaScript code during the build process, leading to improved initial load times and rendering performance. Starting from Angular v9, AOT compilation is enabled by default, providing significant benefits for developers. Learn more about AOT compilation [here](https://v17.angular.io/guide/aot-compiler).

This section covers the advantages of using AOT compilation and provides guidance on how to integrate it into your applications.

## Why use AOT compilation

The advantages of utilizing AOT compilation in Angular applications include:

- **Faster Initial Load Times**: By converting Angular templates into highly optimized JavaScript code during the build process, AOT compilation significantly decreases the initial load time of your application.

- **Reduced Bundle Sizes**: As templates are pre-compiled, the Angular compiler is excluded from the final bundle, resulting in smaller bundle sizes and lower runtime overhead.

- **Early Error Detection**: AOT compilation identifies template errors during build time rather than runtime, allowing for early detection and resolution of issues in the development cycle.

## Using Syncfusion<sup style="font-size:70%">&reg;</sup> components with AOT

All [Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-) are compatible with AOT compilation.

## Implementation of AOT Compilation in an Angular Application

1. **Configuring AOT in Angular**: From Angular v9 onwards, the Ivy compiler enables AOT compilation by default within the `angular.json` configuration file. If you're using Angular versions prior to 9, ensure AOT is enabled by setting  `"aot": true` in your `angular.json` file:

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


To know more about AOT compilation with Ivy, refer to this [documentation](https://v12.angular.io/guide/ivy).

2. **Building the Application**: Enhance performance by building your application in production mode, which utilizes AOT by default. Use the following command in your terminal:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

ng build –configuration=production

{% endhighlight %}
{% endtabs %}

## See also

* [Angular Ivy compiler](https://v12.angular.io/guide/ivy#aot-and-ivy)

* [Angular Tree Shaking](./tree-shaking)
