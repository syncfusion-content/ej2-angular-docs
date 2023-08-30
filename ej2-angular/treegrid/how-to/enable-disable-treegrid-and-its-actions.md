---
layout: post
title: Enable disable treegrid and its actions in Angular Treegrid component | Syncfusion
description: Learn here all about Enable disable treegrid and its actions in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Enable disable treegrid and its actions 
documentation: ug
domainurl: ##DomainURL##
---

# Enable disable treegrid and its actions in Angular Treegrid component

You can enable/disable the Tree Grid and its actions by applying/removing corresponding CSS styles.

To enable/disable the Tree Grid and its actions, follow the given steps:

**Step 1**:

Create CSS class with custom style to override the default style of Tree Grid.

```css
    .disabletreegrid {
        pointer-events: none;
        opacity: 0.4;
    }
    .wrapper {
        cursor: not-allowed;
    }
```

**Step 2**:

Add/Remove the CSS class to the Tree Grid in the click event handler of Button.

```typescript

public click(): void {
    if (this.treegridObj && this.treegridObj.element.classList.contains('disabletreegrid')) {
      this.treegridObj.element.classList.remove('disabletreegrid');
      (document.getElementById("TreeGridParent") as HTMLElement).classList.remove('wrapper');
    }
    else if (this.treegridObj) {
      this.treegridObj.element.classList.add('disabletreegrid');
      (document.getElementById("TreeGridParent") as HTMLElement).classList.add('wrapper');
    }
  }

```

In the below demo, the button click will enable/disable the Tree Grid and its actions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/enable-disable-actions-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/enable-disable-actions-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/enable-disable-actions-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/enable-disable-actions-cs1" %}

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.