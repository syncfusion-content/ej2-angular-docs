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

File Manager's UI virtualization optimizes performance by dynamically loading only the visible files and directories in the viewport instead of rendering the entire collection at once. This significantly improves loading times and reduces memory consumption when handling large numbers of files and directories in both detailsView and largeIconsView.

## Module Injection

To implement UI virtualization, import the `VirtualizationService` module in your AppModule and inject it into the provider section as follows:

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

The File Manager's virtualization feature dynamically renders items based on the current viewport dimensions. As users scroll through content in either [largeIconsView](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#view) or [detailsView](https://ej2.syncfusion.com/angular/documentation/api/file-manager/detailsViewSettings/), only the visible items are loaded, while others are rendered on demand.

To enable virtualization, set the [enableVirtualization](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#enablevirtualization) property to true. This is especially recommended when working with directories containing hundreds or thousands of files.

### Implementation Example

The following example demonstrates virtualization with a large collection of files in the 'Documents' and 'Text Documents' folders:

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

## When to Use Virtualization

Virtualization is particularly beneficial in the following scenarios:

* File systems with hundreds or thousands of files in a single directory
* Applications where File Manager needs to load quickly without performance degradation
* Environments with limited memory resources where rendering large collections could impact performance

## Limitations for Virtualization

When implementing virtualization in the File Manager, be aware of these limitations:

* Programmatic selection using the **selectAll** method is not supported with virtual scrolling.

* The keyboard shortcut **CTRL+A** will only select the files and directories that are currently visible within the viewport, rather than selecting all files and directories in the entire directory tree.

* Selected file items are not maintained while scrolling to optimize component performance.