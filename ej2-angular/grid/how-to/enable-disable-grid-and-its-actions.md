---
layout: post
title: Enable or disable grid and its actions in Angular Grid component | Syncfusion
description: Learn how to enable or disable the Syncfusion Angular Grid and its actions through CSS and event handling for improved user interaction control.
platform: ej2-angular
control: Enable disable grid and its actions 
documentation: ug
domainurl: ##DomainURL##
---

# Enable or disable grid and its actions in Angular Grid component

You can enable or disable the Syncfusion Angular Grid and its actions by applying or removing appropriate CSS styles on user interaction.

To control the enabled or disabled state of the grid and its actions, follow these steps:

**Step 1:** Define a CSS class to visually and functionally disable the Grid.

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

In the following example, clicking the button toggles enabling or disabling the Grid and all its actions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs49/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs49/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs49" %}
