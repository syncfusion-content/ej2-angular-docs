---
layout: post
title: Command column editing in Angular Treegrid component | Syncfusion
description: Learn here all about Command column editing in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Command column editing 
documentation: ug
domainurl: ##DomainURL##
---

# Command column editing in Angular Treegrid component

The command column provides an option to add CRUD action buttons in a column. This can be defined by the [`column.commands`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#commands) property.

The available built-in command buttons are:

| Command Button | Actions |
|----------------|---------|
| Edit | Edit the current row.|
| Delete | Delete the current row.|
| Save | Update the edited row.|
| Cancel | Cancel the edited state. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-command-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-command-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-command-cs1" %}

## Custom command

The custom command buttons can be added in a column by using the [`column.commands`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#commands) property and the action for the custom buttons can be defined in the [`buttonOption.click`](https://ej2.syncfusion.com/angular/documentation/api/grid/commandButtonOptions/#click) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-command-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-command-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-command-cs2" %}