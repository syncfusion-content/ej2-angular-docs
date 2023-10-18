---
layout: post
title: Angular universal in Angular Frameworks and feature component | Syncfusion
description: Learn here all about Angular universal in Syncfusion Angular Frameworks and feature component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Angular universal 
documentation: ug
domainurl: ##DomainURL##
---

# Angular Universal: Server-side Rendering in Angular Frameworks

Angular is a widely-used client-side web development framework. However, by default, it runs only on the client-side. Many web development tools are designed for server-side frameworks like Asp.Net WebForms and Asp.Net MVC. To bridge this gap, Angular provides a feature called Angular Universal that allows for server-side rendering (SSR) of Angular applications.

This documentation provides information about Angular Universal and how to implement it with Syncfusion Angular components in an Angular Universal application.

## What is Angular Universal

[Angular Universal](https://angular.io/guide/universal) is a technology for rendering Angular components on the server and sending the pre-rendered HTML to the client, where JavaScript takes over and adds interactivity. This has several benefits, such as improved SEO, faster load times, and better accessibility.

## Why use Server-side Rendering

Server-side rendering basically allows an application to render faster in a browser and enables users to view the application's UI before it becomes fully interactive. There are three main reasons to create an Angular Universal application.

* Search engines can easily index content in SSR applications because the initial HTML is fully rendered on the server, making it more accessible to web crawlers.

* Users see the content sooner because the server sends the pre-rendered HTML, reducing the time it takes for the page to become interactive.

* SSR can be especially beneficial for users on slower devices or those with limited processing power, as more work is performed on the server.

## Create an Angular Universal application

Syncfusion Angular UI Components support the server-side rendering of an Angular Universal application. The following steps demonstrate how to create an Angular application with Syncfusion components and enable server-side rendering in the Angular application.

1.Create an Angular application with Syncfusion Angular DataGrid component as described in the [Getting Started](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-cli) using the Angular CLI. 

2.To add the Server-Side Rendering (SSR) into the application, run the following command.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

ng add @nguniversal/express-engine

{% endhighlight %}
{% endtabs %}

3.After installing the above command, enable Client [Hydration](https://angular.io/guide/hydration). Hydration is the process that restores the server-side rendered application on the client. To enable hydration, import the [provideClientHydration](https://angular.io/api/platform-browser/provideClientHydration)  function and add it to the `providers` section of the `app.module.ts` file as shown below.

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

4.Run the following command to build and serve the application in both prerender and rerender(ssr) modes of the Angular universal.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

npm run dev:ssr

{% endhighlight %}
{% endtabs %}

> [View the Angular Universal sample on GitHub](https://github.com/SyncfusionExamples/syncfusion-angular-universal)

## See also

* [Angular Universal](https://github.com/angular/universal)
* [Getting Started ASP.NET Core with Angular](../getting-started/aspnet-core.md)
* [Getting Started ASP.NET MVC with Angular](../getting-started/aspnet-mvc.md)