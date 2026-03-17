---
layout: post
title: Getting started with Angular Barcode component | Syncfusion®
description:  Checkout and learn about Getting started with Angular Barcode component of Syncfusion Essential® JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Barcode component

This section explains the steps required to create a simple barcode and demonstrates the basic usage of the Syncfusion® Angular Barcode component. The component supports various barcode types including linear barcodes, QR codes, and Data Matrix codes.

## Setup Angular Environment

Use [`Angular CLI`](https://github.com/angular/angular-cli) to set up Angular applications.
To install Angular CLI, use the following command:

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using the Angular CLI command below:

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion® Barcode Generator package

Syncfusion® packages are distributed in npm as `@syncfusion` scoped packages. All Angular Syncfusion® packages are available from npm [link](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion® provides two types of package structures for Angular components:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler (Angular's legacy compilation and rendering pipeline) package

### Ivy library distribution package

Syncfusion® Angular packages (>=20.2.36) have moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine. These packages are compatible with Angular version 12 and above. To download the package, use the command below:

Add the [`@syncfusion/ej2-angular-barcode-generator`](https://www.npmjs.com/package/@syncfusion/ej2-angular-barcode-generator/v/20.2.38) package to the application:

```bash
npm install @syncfusion/ej2-angular-barcode-generator --save
```

### Angular compatibility compiled package (ngcc)

For Angular versions below 12, use the legacy (ngcc) package of the Syncfusion® Angular components. To download the `ngcc` package, use the command below:

Add the [`@syncfusion/ej2-angular-barcode-generator@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-barcode-generator/v/20.2.38-ngcc) package to the application:

```bash
npm install @syncfusion/ej2-angular-barcode-generator@ngcc --save
```

To specify the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as shown below:

```bash
@syncfusion/ej2-angular-barcode-generator:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will display a warning.

## Adding Syncfusion® Barcode Generator package

All the available Essential® JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

To install Barcode Generator component, use the following command.

```bash
npm install @syncfusion/ej2-angular-barcode-generator --save
```

> The **--save** will instruct NPM to include the barcode generator package inside of the `dependencies` section of the `package.json`.

## Adding Barcode Generator control

Start adding the Syncfusion® Angular Barcode Generator component to the application. The following code demonstrates how to create a basic linear barcode in the `app.component.ts` and corresponding template files:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/getting-started/initialize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/getting-started/initialize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/getting-started/initialize-cs1" %}

The above example creates a basic Code 128 barcode. Linear barcodes are ideal for product identification, inventory management, and retail applications.

## Adding QR Generator control

QR codes provide two-dimensional data encoding capabilities and are perfect for storing URLs, contact information, or other text data. Add a QR code to the Angular Barcode Generator component as shown below:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/getting-started/qrcode-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/getting-started/qrcode-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/getting-started/qrcode-cs1" %}

QR codes are commonly used for mobile applications, marketing campaigns, and quick data sharing scenarios.

## Adding Data Matrix Generator control

Data Matrix codes offer high data density in a compact square format, making them suitable for small items and applications requiring space efficiency. Add a Data Matrix code to the Angular Barcode Generator component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/getting-started/datamatrix-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/getting-started/datamatrix-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/barcode/getting-started/datamatrix-cs1" %}
## See also

* [Angular Barcode Generator](https://www.syncfusion.com/angular-components/angular-barcode) - Feature tour and component overview
* [Angular Barcode Generator example](https://ej2.syncfusion.com/angular/demos/#/material/barcode/default-functionalities) - Live demonstration of barcode rendering capabilities