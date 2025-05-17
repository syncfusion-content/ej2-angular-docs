---
layout: post
title: Create a routing sample in Angular Grid component | Syncfusion
description: Learn here all about Create a routing sample in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Create a routing sample
documentation: ug
domainurl: ##DomainURL##
---

## How to use angular routing

Angular routing is a feature of the Angular framework which facilitates the control of navigation within a single-page application (SPA). It provides a mechanism for managing navigation between different components or views within an application.

In Angular routing, you can able to configure the different routes for different URL's or paths, allowing you to navigate between different sections or pages of the application. This approach is particularly advantageous for SPA's since it permits the loading of content dynamically without requiring a complete page refresh.

**1. Creating an angular application and integrating the Syncfusion Grid component:**

A simple angular project can be created by following the steps under the [getting started](https://ej2.syncfusion.com/angular/documentation/grid/getting-started) section of this documentation by enabling the routing option.

To use Angular routing in your application, you need to create at least two components that can be navigated from one to another. You can create these components using the following command line:

```
ng generate component component-name
```
Replace **component-name** with the desired name for your component. Running this command will generate the necessary files and code for your component, including the TypeScript file, HTML template, CSS styles, and the component's test file. Repeat the above command for each component you want to create.

**2. Defining Routes:**

To define the routes create a new file `app-routing.module.ts` under the app directory. You can define the routes that correspond to different components in this file. Import the components and define an array of route objects that specifies the path and the component to be rendered for each route.

```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

**3. Configuring the router module:**

In the root module (**app.module.ts**) file import the **AppRoutingModule** and add it to the imports array.

```
import { AboutComponent } from './about.component';
```

**4. Setting up navigation:**

Add links to the components and assign the anchor tag that you want to add the route to the `routerLink` attribute. Set the value of the attribute to the components to render.

Add `<router-outlet>` in the root component's template file which will be replaced with the component corresponding to the current route.

```
<nav>
  <ul>
    <li><a routerLink="/">Home</a></li>
    <li><a routerLink="/about">Grid 1</a></li>
    <li><a routerLink="/contact">Grid 2</a></li>
  </ul>
</nav>
<router-outlet></router-outlet>
```
In this demonstration, Angular routing was utilized to create and define routes for multiple components. By clicking on the links labeled Grid1 and Grid2, you can easily navigate to view the respective grid components. Additionally, the Home link allows you to return to the home page.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/routing-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.component.html" %}
{% include code-snippet/grid/routing-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app-routing.module.ts" %}
{% include code-snippet/grid/routing-cs1/src/app-routing.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="about.component.ts" %}
{% include code-snippet/grid/routing-cs1/src/about/about.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="about.component.html" %}
{% include code-snippet/grid/routing-cs1/src/about/about.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="contact.component.ts" %}
{% include code-snippet/grid/routing-cs1/src/contact/contact.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="contact.component.html" %}
{% include code-snippet/grid/routing-cs1/src/contact/contact.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="home.component.ts" %}
{% include code-snippet/grid/routing-cs1/src/home/home.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="home.component.html" %}
{% include code-snippet/grid/routing-cs1/src/home/home.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/routing-cs1" %}