---
layout: post
title: Render hyperlink navigation in Angular ListView | Syncfusion
description: Learn here all about Render ListView with hyper link navigation in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView
documentation: ug
domainurl: ##DomainURL##
---

# Render hyperlinked items in Angular ListView component

The ListView component supports template functionality which allows adding hyperlink navigation to list items. This can be achieved by using an `anchor` tag within the ListView [`template`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#template) property.

Here's how to implement hyperlink navigation in ListView items:

```typescript
<ng-template #template let-data="">
   <a target='_blank' href="{{data.url}}">{{data.name}}</a>
</ng-template>
```

The template requires a data source with the following structure:
- `url`: The hyperlink URL for navigation
- `name`: The display text for the link

The below sample demonstrates ListView with search engine URLs using hyperlink navigation:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/navigation-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/navigation-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/navigation-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/navigation-cs2" %}
