---
layout: post
title: Angular Universal Features and Frameworks | Syncfusion
description: Learn here all about Angular universal in Syncfusion Angular Frameworks and feature component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Angular universal 
documentation: ug
domainurl: ##DomainURL##
---

# Angular Universal: Server-side Rendering in Angular Frameworks

Angular is a widely-used client-side web development framework, primarily running on the client-side by default. However, many web applications require server-side capabilities for enhanced SEO and performance. Angular Universal bridges this gap by enabling server-side rendering (SSR) for Angular applications, which can significantly improve SEO, load times, and accessibility when integrated with tools like ASP.NET WebForms and ASP.NET MVC.

This guide explains how to use Angular Universal in conjunction with Syncfusion Angular components to create efficient and performant applications.

## What is Angular Universal

[Angular Universal](https://v17.angular.io/guide/ssr) is a server-side rendering technology for Angular components that pre-renders HTML on the server and sends it to the client. This ensures quicker time-to-interactive, better SEO, and improved accessibility—especially beneficial for slower networks or devices.

## Why use Server-side Rendering

Server-side rendering (SSR) in Angular Universal enhances application performance and user experience. Key benefits include:

- **SEO Improvement**: SSR applications have fully rendered HTML on the server, making content easily indexable by search engines and thus improving SEO.
- **Faster Load Times**: Users see content sooner with pre-rendered HTML, reducing load times for interactive pages.
- **Better Accessibility**: SSR offloads processing to the server, which benefits users with slower devices or limited processing capabilities.

## Create an Angular Universal application

Syncfusion Angular UI Components support SSR in Angular Universal applications. Follow these steps to integrate SSR with Syncfusion components:

1. **Set up an Angular Application**: Start by creating an Angular application with Syncfusion Angular DataGrid, as outlined in the [Getting Started](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-cli) guide using Angular CLI.

2. **Add Server-Side Rendering**: Incorporate SSR into your application with the following command:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

ng add @nguniversal/express-engine

{% endhighlight %}
{% endtabs %}

3.After installing the above command, enable Client [Hydration](https://v17.angular.io/guide/hydration). Hydration is the process that restores the server-side rendered application on the client. To enable hydration, import the [provideClientHydration](https://v17.angular.io/api/platform-browser/provideClientHydration)  function and add it to the `providers` section of the `app.module.ts` file as shown below.

{% tabs %}
{% highlight ts tabtitle="app.Module.ts" %}

import {provideClientHydration} from '@angular/platform-browser';
// ...

@NgModule({
  // ...
  providers: [ provideClientHydration() ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
    // ...
}

{% endhighlight %}
{% endtabs %}

4. **Build and Serve the Application**: Use the following command to build and serve your application with SSR capabilities:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

npm run dev:ssr

{% endhighlight %}
{% endtabs %}

> [View the Angular Universal sample on GitHub](https://github.com/SyncfusionExamples/syncfusion-angular-universal)

## See also

* [Angular Universal](https://github.com/angular/universal)
* [Getting Started ASP.NET Core with Angular](../getting-started/aspnet-core/)
* [Getting Started ASP.NET MVC with Angular](../getting-started/aspnet-mvc/)