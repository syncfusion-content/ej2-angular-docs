---
layout: post
title: How to add link to Toolbar item in Angular Toolbar | Syncfusion
description: Add interactive links or routing anchors inside Angular Toolbar items using ng-template with the template attribute.
platform: ej2-angular
control: Toolbar
documentation: ug
domainurl: ##DomainURL##
---

# How to add link to Toolbar item in Angular Toolbar

The Angular Toolbar component supports adding interactive links within toolbar items using Angular's `ng-template` directive. This approach enables you to embed anchor elements or routing links directly into toolbar items while maintaining full control over their behavior and styling.

Define the `ng-template` block as a sibling to the `<ejs-toolbar>` (or in the same template file) with a template reference variable, then reference it from the toolbar item through the `[template]` input:

```html
<ejs-toolbar>
  <e-items>
    <e-item [template]="linkRef"></e-item>
  </e-items>
</ejs-toolbar>

<ng-template #linkRef>
  <a href="https://www.syncfusion.com" target="_blank">Syncfusion</a>
</ng-template>
```

> If the link uses `[routerLink]`, ensure `RouterModule` (or `provideRouter`) is registered in your standalone `bootstrapApplication`/`AppComponent` providers.


{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/toolbar/toolbar-link-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/toolbar-link-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/toolbar-link-cs1" %}