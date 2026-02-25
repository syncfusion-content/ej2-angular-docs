---
layout: post
title: User interaction in Angular Signature component | Syncfusion
description: Learn here all about User interaction in Syncfusion Angular Signature component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: User interaction 
documentation: ug
domainurl: ##DomainURL##
---

# User interaction in Angular Signature component

The Signature component supports the following user interactions to enhance the signing experience:

* **Undo and Redo** - Navigate through signature history
* **Clear** - Erase the signature
* **Disabled** - Disable signature input
* **Read-only** - View-only mode

## Undo

The Signature component maintains a history of actions (snapshots) to support undo/redo functionality. Use the [`undo`](https://ej2.syncfusion.com/angular/documentation/api/signature/#undo) method to revert the last action by moving to the previous snapshot. Check if undo is available using [`canUndo`](https://ej2.syncfusion.com/angular/documentation/api/signature/#canundo) before enabling the undo button.

Use the [`redo`](https://ej2.syncfusion.com/angular/documentation/api/signature/#redo) method to repeat the last undone action by moving to the next snapshot. Check if redo is available using [`canRedo`](https://ej2.syncfusion.com/angular/documentation/api/signature/#canredo) before enabling the redo button.

## Clear

The [`clear`](https://ej2.syncfusion.com/angular/documentation/api/signature/#clear) method erases the entire signature and resets the canvas. This action is tracked in the undo/redo history. Use [`isEmpty`](https://ej2.syncfusion.com/documentation/api/signature/#isempty) to check if the signature is empty before performing validation.

## Disabled

Use the [`disabled`](https://ej2.syncfusion.com/angular/documentation/api/signature/#disabled) property to enable or disable signature input. When disabled, users cannot draw, and the component cannot receive focus until re-enabled.

## Read-only

Use the [`isReadOnly`](https://ej2.syncfusion.com/angular/documentation/api/signature/#isreadonly) property to enable read-only mode. The component remains focusable but prevents any drawing operations, allowing users to view signatures without modification.

The following sample explains about user interactions available in signature.

## User Integration sample

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/signature/user-action-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/signature/user-action-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/signature/user-action-cs1" %}