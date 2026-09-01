---
layout: post
title: Template and Multilevel Nesting in Angular Context Menu | Syncfusion
description: Customize Angular Context Menu items with the itemTemplate and beforeItemRender events, and build multilevel nested menus.
platform: ej2-angular
control: Context Menu 
documentation: ug
domainurl: ##DomainURL##
---

# Template and Multilevel Nesting in Angular Context Menu

## Item template

The [itemTemplate](https://ej2.syncfusion.com/angular/documentation/api/context-menu#itemtemplate) property in the ContextMenu component allows you to define custom templates for displaying menu items. This feature enables you to customize the appearance, layout, and content of menu items beyond the default text-based display. Use item templates when you need to include icons, formatted text, additional metadata, or complex HTML structures within menu items.

The following sample uses an `<ng-template>` reference (`#itemTemplate`) inside the component template, and binds it to the ContextMenu via the `[itemTemplate]` property. The template exposes the data of each menu item through the implicit `let-data` variable.

`app.component.ts`:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/context-menu/template-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.html" %}
```html
<div class="control-section">
    <div class="contextmenu-control">
        <div id="contextmenutarget">{{content}}</div>
        <ejs-contextmenu #contextmenu cssClass="e-contextMenu-template" id="contextmenu"
            (created)="onCreated()" [target]="'#contextmenutarget'" [items]="data"
            [itemTemplate]="itemTemplate" (beforeOpen)="addTemplateClass($event)">
            <ng-template #itemTemplate let-data>
                <div class="menu-wrapper">
                    <span class="{{data.iconCss}} icon-right"></span>
                    <div class="text-content">
                        <span class="text">{{ data.answerType }}</span>
                        <span class="description">{{ data.description }}</span>
                    </div>
                </div>
            </ng-template>
        </ejs-contextmenu>
    </div>
</div>
```
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/template-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/template-cs6" %}

## Customize specific menu items

ContextMenu items can be customized using the [`beforeItemRender`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#beforeitemrender) event. This event triggers while rendering each menu item, providing access to the item element and menu item data for customization based on specific requirements. The following example demonstrates how to add keyboard shortcuts to specific menu items by appending span elements during the rendering process.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/context-menu/template-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/template-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/template-cs4" %}

> To create span elements, the `createElement` utility function from `@syncfusion/ej2-base` is used. Add the import to your component file:
> ```typescript
> import { createElement } from '@syncfusion/ej2-base';
> ```

## Multi-level nesting

The ContextMenu component supports multiple levels of nesting for creating hierarchical menu structures. You can create this by mapping child [`items`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/menuItemModel#items) inside the parent item's array. The following example demonstrates a three-level nested ContextMenu structure.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/context-menu/template-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/template-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/template-cs5" %}

> To open sub menu items only on click, set the [`showItemOnClick`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#showitemonclick) property to `true`.

## See Also

* [Populate menu items with data source](./how-to/populate-menu-items-with-data-source)