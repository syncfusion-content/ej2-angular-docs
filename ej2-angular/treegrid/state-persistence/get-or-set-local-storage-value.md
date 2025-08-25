---
layout: post
title: Get or set local storage value in Angular TreeGrid component | Syncfusion
description: Learn how to get and set local storage values for the Syncfusion Angular TreeGrid component using enablePersistence and standard browser APIs.
platform: ej2-angular
control: Get or set local storage value
documentation: ug
domainurl: ##DomainURL##
---

# Get or set local storage value in Angular TreeGrid component

When the [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#enablepersistence) property is set to `true`, the TreeGrid's state and property values are automatically saved in `window.localStorage`. This allows you to restore the component's state between sessions.

You can programmatically get or set the local storage value for the TreeGrid by using the `getItem` and `setItem` methods of `window.localStorage`. The storage key is a concatenation of the component name and its id (e.g., `"treegridTreeGrid"`).

```typescript
// Get the TreeGrid model value from localStorage
let value: string = window.localStorage.getItem('treegridTreeGrid'); // "treegridTreeGrid" = component name + component id
let model: Object = value ? JSON.parse(value) : {};
```

```typescript
// Set the TreeGrid model value in localStorage
window.localStorage.setItem('treegridTreeGrid', JSON.stringify(model)); // "treegridTreeGrid" = component name + component id
```