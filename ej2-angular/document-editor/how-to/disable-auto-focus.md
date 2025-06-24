---
layout: post
title: Disable auto focus in Angular Document editor component | Syncfusion
description: Learn here all about How to disable and enable auto focus in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: How to disable auto focus in document editor 
documentation: ug
domainurl: ##DomainURL##
---

# How to disable auto focus in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Document Editor component

Document Editor gets focused automatically when the page loads. If you want the Document editor not to be focused automatically it can be customized.

The following example illustrates to disable the auto focus in DocumentEditorContainer.

```typescript
<ejs-documenteditorcontainer [enableAutoFocus]=false></ejs-documenteditorcontainer>
```

>Note: Default value of [`enableAutoFocus`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/#enableautofocus) property is `true`.
The following example illustrates to disable the auto focus in DocumentEditor.

```typescript
<ejs-documenteditor [enableAutoFocus]=false></ejs-documenteditor>
```

>Note: Default value of [`enableAutoFocus`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/#enableautofocus) property is `true`.