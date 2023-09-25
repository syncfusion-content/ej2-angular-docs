---
layout: post
title: Dialog editing in Angular Treegrid component | Syncfusion
description: Learn here all about Dialog editing in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dialog editing 
documentation: ug
domainurl: ##DomainURL##
---

# Dialog editing in Angular Treegrid component

In Dialog edit mode, when you start editing the currently selected row, data will be shown on a dialog.
You can change the cell values and save edited data to the data source.
To enable Dialog edit, set the [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettingsModel/#mode) as `Dialog`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs8/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs8" %}

## Customize edit dialog

You can customize the appearance of the edit dialog in the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete) event based on the **requestType** as **beginEdit** or **add**.

In the following example, the dialog's properties like header text, showCloseIcon, and height have been changed while editing and adding the records.

Also the locale text for the **Save** and **Cancel** buttons has been changed by overriding the default locale strings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs9/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs9" %}

## Show or hide columns in dialog editing

You can show hidden columns or hide visible column's editor in the dialog while editing the tree grid record using [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) and [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete) events.

In the `actionBegin` event, based on the **requestType** as **beginEdit** or **add**. We can show or hide the editor by using [column.visible](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#visible) property.

In the `actionComplete` event, based on the **requestType** as **save**. We can reset the properties back to the column state.

In the below example, we have rendered the tree grid columns **priority** as hidden column and **duration** as visible column. In the edit mode, we have changed the **priority** column to a visible state and **duration** column to a hidden state.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs10/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs10" %}