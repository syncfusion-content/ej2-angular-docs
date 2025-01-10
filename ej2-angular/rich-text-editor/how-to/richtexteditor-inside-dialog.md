---
layout: post
title: Integrating Rich Text Editor in Dialog Components | Syncfusion
description: Learn here all about Rich Text Editor Inside Dialog in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Integrating Rich Text Editor in Dialog Components
documentation: ug
domainurl: ##DomainURL##
---

# Integrating Rich Text Editor in Dialog Components

When rendering the Rich Text Editor inside a Dialog component, the dialog container and its wrapper elements are initially styled with `display: none`. This styling prevents the editor's toolbar from calculating the proper offset width. As a result, the toolbar may render incorrectly, appearing above the edit area container.

To resolve this issue, we can utilize the [`refreshUI`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#refreshui) method of the Rich Text Editor in conjunction with the [`open`](https://ej2.syncfusion.com/angular/documentation/api/dialog#open) event. This approach ensures that the Rich Text Editor's UI is properly refreshed and rendered once the Dialog is visible.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/how-to/richtexteditor-inside-dialog-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/how-to/richtexteditor-inside-dialog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/how-to/richtexteditor-inside-dialog-cs1" %}
