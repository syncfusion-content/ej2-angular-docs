---
layout: post
title: Hide Sidebar in Angular Sidebar component | Syncfusion
description: Learn here all about Hide Sidebar in Syncfusion Angular Sidebar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sidebar
documentation: ug
domainurl: ##DomainURL##
---

# Hiding the Angular Sidebar component

This example demonstrates how to programmatically hide the master page Sidebar. Initially, the Sidebar is rendered with the master page. When navigating to another page, it hides the master page Sidebar using Angular routing.

Refer to the Sidebar component in `app.component.html`

```html
<router-outlet>
    <ul>
        <li>
              <a routerLink="/">Master page</a>
        </li>
        <li>
              <a routerLink="/firstPage">First page</a>
        </li>
        <li>
              <a routerLink="/secondPage">Second page</a>
        </li>
        </ul>
</router-outlet>

<ejs-sidebar id="parent-sidebar" #sidebar width="260px" type="Push" class="e-hidden" (created)="onCreated()">
     <div class="title">
         <span id="close" class="e-icons" (click)="closeClick()"></span>
  </div>
  <div class="sub-title"> Application  Page Sidebar</div>
  
</ejs-sidebar>
<div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="6000">
    <h2 class="sidebar-heading"> Responsive Sidebar With Treeview</h2>
    <p class="paragraph-content">
        This is a graphical aid for visualising and categorising the site, in the style of an expandable and
        collapsable treeview component. It auto-expands to display the node(s), if any, corresponding to the currently
        viewed title, highlighting that node(s) and its ancestors. Load-on-demand when expanding nodes is available
        where supported (most graphical browsers), falling back to a full-page reload. MediaWiki-supported caching,
        aside from squid, has been considered so that unnecessary re-downloads of content are avoided where possible.
        The complete expanded/collapsed state of the treeview persists across page views in most situations.
    </p>
    <div class="line"></div>
    <h2 class="sidebar-heading">Lorem Ipsum Dolor</h2>
    <p class="paragraph-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
    <div class="line"></div>
    <h2 class="sidebar-heading"> Lorem Ipsum Dolor</h2>
    <p class="paragraph-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <div class="line"></div>
    <h2 class="sidebar-heading"> Lorem Ipsum Dolor</h2>
    <p class="paragraph-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <div class="line"></div>
    <h2 class="sidebar-heading"> Lorem Ipsum Dolor</h2>
    <p class="paragraph-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <div class="line"></div>
    <h2 class="sidebar-heading"> Lorem Ipsum Dolor</h2>
    <p class="paragraph-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</div>

```

Add this below code in `app.component.ts`

```typescript

import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

// importing Sidebar components from the ej2-angular-navigations package
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation:ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidebar')
  // Instance of the Sidebar in the main page
  public sidebarInstance: SidebarComponent;

  // The below variable will hold the URL of the navigation page when router event is triggered
  public urlValue: String;

  constructor(router: Router) {

    // registering router module in the component
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.urlValue = event.url;
        //Based on the routed URL, Sidebar in the main page will expand or collapse.
        this.checkURL();
      }
    });
  }

  onCreated() {
    // This event will trigger whenever a Sidebar in the main page is rendered.
    if (this.sidebarInstance.element.classList.contains("e-hidden")) {
      this.sidebarInstance.element.classList.remove("e-hidden");
      this.checkURL();
    }
  }

  checkURL() {
    //Based on the routed URL, the Sidebar in the main page will expand or collapse.
    (!this.urlValue || this.urlValue !== "/") ? this.sidebarInstance.hide() : this.sidebarInstance.show();
  }

  closeClick() {
    //On clicking the close icon, the Sidebar will get collapsed
    this.sidebarInstance.hide();
  }

  ngAfterViewInit() {
    if (!this.urlValue || this.urlValue !== "/") {
      this.sidebarInstance.hide();
    }
  }
}


```

The following sample demonstrates how to hide the Sidebar using Angular service in a routing application. Refer to this sample.

[Sample](https://github.com/SyncfusionExamples/how-to-hide-angular-sidebar-using-angular-service-in-routing-application)