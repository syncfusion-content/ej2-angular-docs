---
layout: post
title: Angular Grid – Create Routing Example | Syncfusion
description: Angular Grid provides routing sample patterns, state preservation techniques, routing integration examples, and guidance for route-driven grid scenarios.
platform: ej2-angular
control: Create a routing sample
documentation: ug
domainurl: ##DomainURL##
---

# Routing sample in Angular Grid Component

Angular routing is a core feature that manages navigation within a single-page application (SPA), providing seamless transitions between different views or components without refreshing the page.

With routing, different routes are configured to URL paths and the component that should render for each path is specified enabling dynamic loading and a responsive user interface.

**1. Creating an Angular application and integrating Syncfusion Grid:**

Begin by creating a new Angular project and enabling routing during setup. Follow the [getting started](https://ej2.syncfusion.com/angular/documentation/grid/getting-started) guide for details. To support routing, create at least two components for navigation using:

```bash
ng generate component component-name
```
Replace `component-name` with a desired component name. This command generates the TypeScript file, HTML template, styles, and corresponding test file for the component. Repeat for each component to create.

**2. Defining routes:**

Create an **app-routing.module.ts** file in the app directory. Import the components and define a `Routes` array mapping URL paths to components. For example:

```ts
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

In the root module (**app.module.ts**) file import the `AppRoutingModule` and add it to the imports array.

```ts
import { AboutComponent } from './about.component';
```

**4. Setting up navigation:**

Add router links to the component template using the `routerLink` attribute on anchor tags. Use `<router-outlet>` in the root template where the active component should be rendered.

```ts
<nav>
  <ul>
    <li><a routerLink="/">Home</a></li>
    <li><a routerLink="/about">Grid 1</a></li>
    <li><a routerLink="/contact">Grid 2</a></li>
  </ul>
</nav>
<router-outlet></router-outlet>
```
With this approach, clicking "Grid 1" or "Grid 2" loads the respective grid component; the "Home" link returns to the home page.

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
