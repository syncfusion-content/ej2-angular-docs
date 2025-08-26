---
layout: post
title: Enable or disable TreeGrid and its actions in Angular TreeGrid component | Syncfusion
description: Learn how to enable or disable the TreeGrid and its actions in the Syncfusion Angular TreeGrid component, including applying custom CSS to control user interaction.
platform: ej2-angular
control: Enable disable treegrid and its actions 
documentation: ug
domainurl: ##DomainURL##
---

# Enable or disable TreeGrid and its actions in Angular TreeGrid component

The TreeGrid and its actions can be enabled or disabled by applying or removing the appropriate CSS styles.

To enable or disable the TreeGrid and its actions, follow these steps:

**Step 1:**

Create a CSS class with custom styles to override the default appearance and functionality of the TreeGrid.

```css
    .disabletreegrid {
        pointer-events: none;
        opacity: 0.4;
    }
    .wrapper {
        cursor: not-allowed;
    }
```

**Step 2:**

Add or remove the CSS class from the TreeGrid in the click event handler of a button.

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

In the demo below, clicking the button enables or disables the TreeGrid and its actions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/enable-disable-actions-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/enable-disable-actions-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/enable-disable-actions-cs1" %}

> For detailed feature information, refer to the [`Angular TreeGrid feature tour page`](https://www.syncfusion.com/angular-components/angular-tree-grid). More examples on presenting and manipulating data are available in the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview).