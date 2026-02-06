---
layout: post
title: Getting started with Angular Mention component | Syncfusion
description:  Checkout and learn about Getting started with Angular Mention component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Mention component

This guide demonstrates how to set up and configure the Syncfusion Angular Mention component, from initial installation through implementing user mentions with custom characters. The Mention component allows users to mention people or tags in text input with autocomplete suggestions, keyboard navigation, and customizable mention characters.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

To get started quickly with Angular Mention component using CLI and Schematics, you can check this video:

{% youtube "https://www.youtube.com/watch?v=CNsnT4i67Qw" %}

## Dependencies

The list of dependencies required to use the Mention component in your application is given below:

```javascript
|-- @syncfusion/ej2-angular-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-dropdowns
        |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-notifications
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons
```

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion Angular UI Components](../system-requirement).

## Setup Angular environment

The easiest way to set up an Angular project is using the [Angular CLI](https://github.com/angular/angular-cli) tool. Follow these steps:

Install the CLI application globally to your machine.

```bash
npm install -g @angular/cli
```

## Create a new application

Create a new Angular application using the Angular CLI:

```bash
ng new syncfusion-angular-mention
```

Navigate to the created project folder:

```bash
cd syncfusion-angular-mention
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Mention package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://v17.angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package, use the below command.

Use the [ng add](https://angular.dev/reference/schematics) command to automatically configure the Mention package:

```bash
ng add @syncfusion/ej2-angular-dropdowns
```

This command will install the package (v32.1.19), add peer dependencies, and configure the Material theme automatically.

**For Manual Installation:**

```bash
npm install @syncfusion/ej2-angular-dropdowns --save
```

>Note: Use @syncfusion/ej2-angular-dropdowns@32.1.19 for Angular 12+ (Ivy format). For legacy support, see the peer dependency requirements above.

## Import Mention in your component

For Angular 19+ standalone applications, import the `MentionModule` directly in your component. Modify the `src/app/app.ts` file:

```typescript
import { Component, OnInit } from '@angular/core';
import { MentionModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  imports: [MentionModule],
  standalone: true,
  selector: 'app-root',
  template: `<!-- Render Mention component -->`
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
}
```

**For Angular 18 and below (NgModule approach):**

If using NgModule pattern, import `MentionModule` in your app.module.ts:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MentionModule } from '@syncfusion/ej2-angular-dropdowns';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, MentionModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Import Syncfusion CSS styles

When using `ng add @syncfusion/ej2-angular-dropdowns`, the Material theme is automatically configured in `angular.json`. The Mention component styles are included automatically.

If you need to manually add or customize the CSS, import the theme in `src/styles.css`:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-angular-dropdowns/styles/bootstrap5.css';
```

>If you want to use combined component styles, please use our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Add Mention component

Now, modify the `src/app/app.ts` file to render the Mention component using the `<ejs-mention>` selector. The [`target`](https://ej2.syncfusion.com/angular/documentation/api/mention/index-default#target) property should be configured to render the Mention component in the target element.

```typescript
import { Component, OnInit } from '@angular/core';
import { MentionModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  imports: [MentionModule],
  standalone: true,
  selector: 'app-root',
  template: `
    <label style="font-size: 15px; font-weight: 600;">Comments</label>
    <!-- Target element where Mention component renders suggestions -->
    <div id="mentionElement" style="min-height: 100px; border: 1px solid #D7D7D7; border-radius: 4px; padding: 8px; font-size: 14px; width: 600px;"></div>
    <ejs-mention [target]='mentionTarget'></ejs-mention>`
})
export class AppComponent implements OnInit {
  // Defines the target element for Mention component
  public mentionTarget: string = '#mentionElement';

  ngOnInit(): void {
  }
}
```

## Binding data source

After initializing, populate the data in the Mention component using the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/mention/index-default#datasource) property. You can pass an array of string values or objects to the component:

```typescript
import { Component, OnInit } from '@angular/core';
import { MentionModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  imports: [MentionModule],
  standalone: true,
  selector: 'app-root',
  template: `
    <label>Comments</label>
    <!-- Target element where Mention component renders suggestions -->
    <div id="mentionElement" placeholder="Type @ and tag user" style="min-height: 100px; border: 1px solid #D7D7D7; border-radius: 4px; padding: 8px;"></div>
    <ejs-mention [dataSource]='userData' [target]='mentionTarget'></ejs-mention>`
})
export class AppComponent implements OnInit {
  // Array of user data for suggestions
  public userData: string[] = ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph'];
  // Target element for Mention component
  public mentionTarget: string = '#mentionElement';

  ngOnInit(): void {
  }
}
```

## Run the application

After completing the configuration required to render a Mention component, run the following command to display the output in your default browser:

```bash
ng serve --open
```

The Mention component will be rendered in your browser with default settings.

The following example shows a basic `Mention` component with user mention suggestions:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/mention/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/mention/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/mention/getting-started-cs6" %}

## Display Mention character

By using the [showMentionChar](https://ej2.syncfusion.com/angular/documentation/api/mention/index-default#showMentionChar) property, the text content can be displayed along with the mention character. You can customize the mention character using the [mentionChar](https://ej2.syncfusion.com/angular/documentation/api/mention/index-default#mentionChar) property.

> By default, the [mentionChar](https://ej2.syncfusion.com/angular/documentation/api/mention/index-default#mentionChar) is `@` and the [showMentionChar](https://ej2.syncfusion.com/angular/documentation/api/mention/index-default#showMentionChar) property is disabled.

The following example displays the text content along with the mention character configured as `#`:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/mention/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/mention/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/mention/getting-started-cs7" %}