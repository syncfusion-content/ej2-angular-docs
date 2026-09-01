---
layout: post
title: Render other components in Tab using Angular template in Angular Tab | Syncfusion
description: Render other UI components inside an Angular Tab item using ng-template with the content attribute for integrated component functionality.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# How to render other components in Tab using Angular template in Angular Tab

You can render other UI components inside the Tab using Angular **ng-template**. This approach enables you to add content as other components directly with all their functionalities integrated into the Tab.

## Steps

1. Place an `<ng-template>` element inside each `e-tabitem` and set the `#content` attribute (this is mandatory).
2. Add a `select` attribute to the `<ng-template>` containing the id or class name used by the embedded content (e.g., `select="#richEditor1"`).
3. Bind the ng-template's `content` to the consuming component (e.g., a Syncfusion or native Angular component).

> **Modules:** import the consuming component's Angular module into your app or standalone imports array (e.g., `RichTextBoxAllModule`, `GridModule`).

```html
<ejs-tab>
  <e-tabitems>
    <e-tabitem header="Editor">
      <ng-template #content>
        <ejs-richtexteditor></ejs-richtexteditor>
      </ng-template>
    </e-tabitem>
  </e-tabitems>
</ejs-tab>
```

Check out this video to learn about integrating other UI components inside the Angular Tab component:

{% youtube "https://www.youtube.com/watch?v=207C5_BZIj0" %}

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/direct-components-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/direct-components-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/direct-components-cs1" %}

## See Also

* [Add dynamic Tab items with content reuse](./adding-dynamic-items-with-content-reuse)
* [Add reactive forms within Tab](./add-reactive-forms-within-a-tab)