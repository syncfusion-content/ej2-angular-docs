---
layout: post
title: Enable disable grid and its actions in Angular Grid component | Syncfusion
description: Learn here all about Enable disable grid and its actions in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Enable disable grid and its actions 
documentation: ug
domainurl: ##DomainURL##
---

# Enable disable grid and its actions in Angular Grid component

You can enable/disable the Grid and its actions by applying/removing corresponding CSS styles.

To enable/disable the grid and its actions, follow the given steps:

**Step 1**: Create CSS class with custom style to override the default style of Grid.

```css
    .disablegrid {
        pointer-events: none;
        opacity: 0.4;
    }
    .wrapper {
        cursor: not-allowed;
    }

```

**Step 2**: Add/Remove the CSS class to the Grid in the click event handler of Button.

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

In the below demo, the button click will enable/disable the Grid and its actions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs49/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs49/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs49/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs49" %}
