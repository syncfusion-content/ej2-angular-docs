---
layout: post
title: Angular Grid – Enable or Disable Actions | Syncfusion
description: Angular Grid provides options and API examples to enable or disable actions, configure behavior, and control grid interactions.
platform: ej2-angular
control: Enable disable grid and its actions 
documentation: ug
domainurl: ##DomainURL##
---

# Enable or Disable Grid and its Actions in Angular Grid Component

Enabling or disabling the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid and its actions is essential for managing interaction based on application state. This approach enhances usability and ensures controlled access to grid operations.

To control the enabled or disabled state of the grid and its actions, follow these steps:

**Step 1:** Define a CSS class to visually and functionally disable the grid.

```css
.disablegrid {
    pointer-events: none;
    opacity: 0.4;
}
.wrapper {
    cursor: not-allowed;
}
```

**Step 2:** Add or remove the CSS class on the Grid's parent element within the button click event handler.

```typescript
public btnClick():void {
    if (this.Grid.element.classList.contains('disablegrid')) {
        this.Grid.element.classList.remove('disablegrid');
        document.getElementById("GridParent").classList.remove('wrapper');
    }
    else {
        this.Grid.element.classList.add('disablegrid');
        document.getElementById("GridParent").classList.add('wrapper');
    }
}
```

In the following example, clicking the button toggles enabling or disabling the grid and all its actions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs49/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs49/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs49" %}
