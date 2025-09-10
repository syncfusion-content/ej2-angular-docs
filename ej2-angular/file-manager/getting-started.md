---
layout: post
title: Getting started with Angular File Manager component | Syncfusion
description:  Checkout and learn about Getting started with Angular File Manager component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: File Manager
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular File Manager component

The File Manager component provides a graphical user interface for browsing, managing, and organizing files and folders. This section explains how to create a simple **File Manager** component and its basic usage.

## Prerequisites

To get started with **File Manager** component, ensure the compatible versions of Angular and Typescript.

* Angular : `4+`
* Typescript : `2.6+`

## Setting up angular project

Angular provides the easiest way to set up Angular CLI projects using the Angular CLI tool.

Install the CLI application globally to your machine by using following command.

```sh
npm install -g @angular/cli
```

To Create a new application, refer the below command

```sh
ng new syncfusion-angular-app
```

Navigate to the created project folder by using following command:
```sh
cd syncfusion-angular-app
```

>Refer [Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Getting Started](../getting-started/angular-cli) section to know more about setting up `angular-cli` project.

## Adding Dependencies

The following list of dependencies are required to use the File Manager component in your application:

```javascript
|-- @syncfusion/ej2-angular-filemanager
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-filemanager
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> File Manager package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-filemanager`](https://www.npmjs.com/package/@syncfusion/ej2-angular-filemanager/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-filemanager --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-filemanager@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-filemanager/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-filemanager@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below:

```bash
@syncfusion/ej2-angular-filemanager:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding style sheet to the application

To render the File Manager component, import the File Manager and its dependent components' styles as shown below in `[src/styles.css]`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-filemanager/styles/material.css';
```

Alternatively, based on the location of your CSS file, you can import the styles as shown below:

```css
@import 'node_modules/@syncfusion/ej2-base/styles/material.css';
@import 'node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import 'node_modules/@syncfusion/ej2-popups/styles/material.css';
@import 'node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import 'node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import 'node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import 'node_modules/@syncfusion/ej2-layouts/styles/material.css';
@import 'node_modules/@syncfusion/ej2-grids/styles/material.css';
@import 'node_modules/@syncfusion/ej2-angular-filemanager/styles/material.css';
```

>Note: To refer the combined component styles, use Syncfusion<sup style="font-size:70%">&reg;</sup> [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> component

Add the File Manager component by using `<ejs-filemanager>` selector in `template` section of the `app.component.ts` file.
Refer the File Manager component snippet in `app.component.ts` as follows.

```typescript
import { FileManagerModule, FileManagerAllModule } from '@syncfusion/ej2-angular-filemanager'
import { Component } from '@angular/core';

@Component({
imports: [FileManagerModule, FileManagerAllModule ],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-filemanager id='default-filemanager' [ajaxSettings]='ajaxSettings'>
</ejs-filemanager>`
})

export class AppComponent {
  public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
  public ajaxSettings: object = {
    url: this.hostUrl + 'api/FileManager/FileOperations'
  };
}
```

>**Note:** The [ajaxSettings](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#ajaxsettings) property must be defined while initializing the File Manager. File Manager utilizes the URL's mentioned in ajaxSettings to send file operation request to the server. The File Manager service link is provided in the `hostUrl` variable.

## Run the application

Use the npm start command to run the application in the browser:

```sh
npm start
```

The following samples shows the basic File Manager component in browser:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/getting-started-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/getting-started-cs1" %}

## File Download support

To enable the download operation, initialize the `downloadUrl` property in the [ajaxSettings](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#ajaxsettings) of the File Manager component.

```typescript
import { FileManagerModule, FileManagerAllModule } from '@syncfusion/ej2-angular-filemanager'
import { Component } from '@angular/core';

@Component({
imports: [FileManagerModule, FileManagerAllModule ],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-filemanager id='default-filemanager' [ajaxSettings]='ajaxSettings'>
</ejs-filemanager>`
})

export class AppComponent {
  public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
  public ajaxSettings: object = {
    url: this.hostUrl + 'api/FileManager/FileOperations',
    downloadUrl: this.hostUrl + 'api/FileManager/Download'
  };
}
```

## File Upload support

To perform the upload operation, initialize the `uploadUrl` property in a [ajaxSettings](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#ajaxsettings) of File Manager Component.

```typescript
import { FileManagerModule, FileManagerAllModule } from '@syncfusion/ej2-angular-filemanager'
import { Component } from '@angular/core';

@Component({
imports: [FileManagerModule, FileManagerAllModule ],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-filemanager id='default-filemanager' [ajaxSettings]='ajaxSettings'>
  </ejs-filemanager>`
})

export class AppComponent {
  public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
  public ajaxSettings: object = {
    url: this.hostUrl + 'api/FileManager/FileOperations',
    uploadUrl: this.hostUrl + 'api/FileManager/Upload'
  };
}
```

## Image Preview support

To perform the image preview support in the File Manager component, need to initialize the `getImageUrl` property in a [ajaxSettings](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#ajaxsettings) of File Manager component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/getting-started-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/getting-started-cs2" %}

## Injecting feature modules

The basic File Manager includes a context menu, large-icons view, and breadcrumb navigation. You can extend its functionality by injecting additional feature modules:

* Toolbar: Provides quick access to common operations
* Navigation pane: Shows folder hierarchy for easy navigation
* Details view: Displays files and folders in a detailed list format

Import and inject these modules as providers in your `app.component.ts`:

```typescript
import { FileManagerModule, NavigationPaneService, ToolbarService, DetailsViewService } from '@syncfusion/ej2-angular-filemanager';
import { Component } from '@angular/core';

@Component({
  imports: [
    FileManagerModule
  ],
  standalone: true,
  providers: [NavigationPaneService, ToolbarService, DetailsViewService]
})
export class AppComponent { }
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/overview-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/overview-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/overview-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/overview-cs1" %}

>**Note:** The appearance of the File Manager can be customized by using [cssClass](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#cssclass) property. This adds a css class to the root of the File Manager which can be used to add new styles or override existing styles to the File Manager.

## Switching initial view of the File Manager

The initial view of the File Manager can be changed to details or largeicons view with the help of [view](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#view) property. By default, the File Manager will be rendered in large icons view.
When the File Manager is initially rendered, [created](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#created) will be triggered. This event can be utilized for performing operations once the File Manager has been successfully created.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/view-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/view-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/view-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/view-cs1" %}

## Maintaining component state on page reload

The File Manager supports maintaining the component state on page reload. This can be achieved by enabling [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#enablepersistence) property which maintains the following,
* Previous view of the File Manager - [View](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#view)
* Previous navigation path of the File Manager - [Path](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#path)
* Previous selected items of the File Manager - [SelectedItems](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#selecteditems)

For every operation in File Manager, ajax request will be sent to the server which then processes the request and sends back the response. When the ajax request is success, [success](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#success) event will be triggered and [failure](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#failure) event will be triggered if the request gets failed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/persistence-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/persistence-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/persistence-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/persistence-cs1" %}

>**Note:** The files of the current folder opened in the File Manager can be refreshed programatically by calling [refreshFiles](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#refreshfiles) method.

## Rendering component in right-to-left direction

It is possible to render the File Manager in right-to-left direction by setting the [enableRtl](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#enablertl) API to true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/rtl-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/rtl-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/rtl-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/rtl-cs1" %}

## Specifying the current path of the File Manager

The current path of the File Manager can be specified initially or dynamically using the [path](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#path) property.

The following code snippet demonstrates specifying the current path in File Manager on rendering.

```typescript

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app/app.component.css'],
    template: `<ejs-filemanager id='default-filemanager' [ajaxSettings]='ajaxSettings'>
    </ejs-filemanager>`
})
export class AppComponent {
    public ajaxSettings: object;
    public path: string;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
        // Specify the required current path
        this.path = '/Food';
    };
}
```