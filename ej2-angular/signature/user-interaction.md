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

The below interactions were available in Signature, and we can walk through one by one.

* Undo and Redo
* Clear
* Disabled
* ReadOnly

## Undo

In the Signature, every action can be maintained as a snap for undo and redo operations. And maintained SnapIndex for indexing the snap collection.

The [`undo`](https://ej2.syncfusion.com/angular/documentation/api/signature/#undo) method reverts the last action of signature by decreasing SnapIndex value to  index previous snap. Here, [`canUndo`](https://ej2.syncfusion.com/angular/documentation/api/signature/#canundo) method is used to ensure whether undo can be performed or not.

The [`redo`](https://ej2.syncfusion.com/angular/documentation/api/signature/#redo) method reverts the last undo action of the signature by increasing the SnapIndex to  get the next snap. Here, [`canRedo`](https://ej2.syncfusion.com/angular/documentation/api/signature/#canredo) method is used to ensure whether redo can be performed or not.

## Clear

The [`clear`](https://ej2.syncfusion.com/angular/documentation/api/signature/#clear) method is used to clears the signature and makes the canvas empty. This is also considered in Undo/ Redo. Here, [`isEmpty`](https://ej2.syncfusion.com/documentation/api/signature/#isempty) method is used to ensure whether the signature is empty or not.

## Disabled

The [`disabled`](https://ej2.syncfusion.com/angular/documentation/api/signature/#disabled) property is used to enables/disables the signature component. In the disabled state, the user is not allowed to draw signature. And it can’t be focused until the user enabled the signature.

## ReadOnly

The [`isReadOnly`](https://ej2.syncfusion.com/angular/documentation/api/signature/#isreadonly) property is used to enables/disables the ReadOnly Signature. It can be focused but it prevents drawing in Signature.

The following sample explains about user interactions available in signature.

## User Integration sample

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/signature/user-action-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/signature/user-action-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/signature/user-action-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/signature/user-action-cs1" %}