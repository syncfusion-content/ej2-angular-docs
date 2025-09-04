---
layout: post
title: Command column editing in Angular TreeGrid component | Syncfusion
description: Learn how to use command column editing in the Syncfusion Angular TreeGrid component to add CRUD and custom action buttons for row-level operations.
platform: ej2-angular
control: Command column editing 
documentation: ug
domainurl: ##DomainURL##
---

# Command column editing in Angular TreeGrid component

Command column editing allows you to include CRUD (Create, Read, Update, Delete) action buttons in a dedicated column, enabling row-level operations such as inline editing, deleting, saving, and canceling directly in the TreeGrid.

To enable command column editing, define the [column.commands](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#commands) property for your columns. This property lets you specify which command buttons (Edit, Delete, Save, Cancel) should be shown in the command column.

To use CRUD operations with command columns, inject the **CommandColumnService** into the **@NgModule.providers**. This service activates the required functionalities for command column actions.

The built-in command buttons and their actions are:

| Command Button | Actions                  |
|---------------|--------------------------|
| Edit          | Edit the current row.    |
| Delete        | Delete the current row.  |
| Save          | Update the edited row.   |
| Cancel        | Cancel the edited state. |

Example: Adding CRUD action buttons using the `commands` column property:

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

Custom command columns allow you to add your own command buttons for specialized actions on each row. This is useful for providing unique operations such as showing details or triggering custom dialogs.

To add custom command buttons, use the [column.commands](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#commands) property and define custom buttons with specific logic.

Example: Adding custom command buttons with behavior to display row details in a dialog using the `click` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-command-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-command-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/edit-command-cs2" %}
