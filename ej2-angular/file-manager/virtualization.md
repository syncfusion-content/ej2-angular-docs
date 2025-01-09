---
layout: post
title: Virtualization in Angular File Manager component | Syncfusion
description: Learn here all about Virtualization in Syncfusion Angular File Manager component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: File Manager 
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in Angular File Manager component

File Manager's UI virtualization allows for the dynamic loading of a large number of directories and files in both the detailsView and largeIconsView without degrading its performance.

## Module Injection

In order to use UI Virtualization, you need to import `VirtualizationService` module in the AppModule and it should be injected into the provider section as follows

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FileManagerComponent, VirtualizationService } from '@syncfusion/ej2-angular-filemanager';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [VirtualizationService]
})
export class AppModule { }

``` 

## Enable Virtualization

The virtualization of the File Manager component is based on the height and width of the viewport. The items will be loaded in both [largeIconsView](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#view) and [detailsView](https://ej2.syncfusion.com/angular/documentation/api/file-manager/detailsViewSettings/) based on the viewport size.

In order to enable `virtualization`, you must set the [enableVirtualization](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#enablevirtualization) property to true.

The example below demonstrates a large collection of files in the 'Documents' and 'Text Documents' folders.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/virtualization-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/virtualization-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/virtualization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/file-manager/virtualization-cs1" %}

## Limitations for Virtualization

* Programmatic selection using the **selectAll** method is not supported with virtual scrolling.

* The keyboard shortcut **CTRL+A** will only select the files and directories that are currently visible within the viewport, rather than selecting all files and directories in the entire directory tree.

* Selected file items are not maintained while scrolling, considering the performance of the component.