---
layout: post
title: Angular Templates | Syncfusion
description: Learn everything there is to know about templates, including an example in the Angular components of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Syncfusion Angular Components

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components provide a pre-defined layout or structure that defines how the component should be rendered on the user interface. When you need to customize the component's appearance or functionality to meet specific application needs, Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components offer template support to achieve this.

Template support is implemented using Angular's `ng-template` directive, which creates reusable templates that can be invoked throughout the application. This approach allows you to define a template with a specified structure and logic, then reuse it multiple times without writing duplicate code.

In Angular, a template is defined using the `<ng-template>` tag within the corresponding component. The template can be accessed via the component's template name using the `#` symbol, enabling easy referencing. Templates can include any valid HTML and Angular template syntax, such as directives, bindings, and components.

To access component data within the template, use the `let-data` attribute. Here’s an example:

```html
<ng-template #template let-data>
  <div class="template">{{data.ShipCountry}}</div>
</ng-template>
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Packages

```bash
ng add @syncfusion/ej2-angular-grids
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS Styles

To import styles for specific components, add only what you need:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-angular-grids/styles/material3.css';
```

Let's explore how templates enhance the Grid component with a custom template:

Modify your `src/app/app.component.ts` file to incorporate the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component:

```typescript
import { GridAllModule } from '@syncfusion/ej2-angular-grids'

import { enableRipple } from '@syncfusion/ej2-base';
import { Component } from '@angular/core';

// enable ripple effects
enableRipple(true);

@Component({
imports: [

GridAllModule
],


standalone: true,
selector: 'app-root',
template: `
<h1>
Syncfusion Angular UI Grid!
</h1>

<ejs-grid [dataSource]='data'>
<e-columns>
<e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
<e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
<e-column field='ShipCountry' headerText='ShipCountry' width='100'>
<ng-template #template let-data>
<div class="template">{{data.ShipCountry}}</div>
</ng-template>
</e-column>
</e-columns>
</ejs-grid>
`
})
export class AppComponent {
public data: Object[] = [
{ OrderID: 10248, CustomerID: 'VINET', ShipCountry: 'France' },
{ OrderID: 10249, CustomerID: 'TOMSP', ShipCountry: 'Germany' },
{ OrderID: 10250, CustomerID: 'HANAR', ShipCountry: 'Brazil' }
];

}

```
  
{% previewsample "page.domainurl/samples/common/template-cs1" %}