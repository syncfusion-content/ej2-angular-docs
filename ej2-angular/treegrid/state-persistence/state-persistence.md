---
layout: post
title: State persistence in Angular TreeGrid component | Syncfusion
description: Learn how to use state persistence in the Syncfusion Angular TreeGrid component, including configuration with enablePersistence and localStorage usage.
platform: ej2-angular
control: State persistence
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in Angular TreeGrid component

State persistence allows the TreeGrid component to maintain its state in the browser's [`localStorage`](https://www.w3schools.com/html/html5_webstorage.asp#) across browser refreshes or page navigation. When [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#enablepersistence) is set to `true`, the TreeGrid saves its model object to local storage automatically.

State persistence in TreeGrid ensures that key properties such as column settings, sorting, filtering, expanded or collapsed states, and paging—are remembered and restored even after the page is reloaded or revisited.

> For more details on TreeGrid's advanced features, visit the [`Angular TreeGrid feature tour`](https://www.syncfusion.com/angular-components/angular-tree-grid). To explore practical demonstrations, see the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to understand how to present and manipulate data.