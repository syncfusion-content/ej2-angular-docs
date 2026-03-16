---
layout: post
title: Dynamic tooltip content in Angular Tooltip component | Syncfusion
description: Learn here all about Dynamic tooltip content in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dynamic tooltip content 
documentation: ug
domainurl: ##DomainURL##
---

# Dynamic tooltip content in Angular Tooltip component

Change tooltip content dynamically using Fetch requests.

Make the Fetch request within the [`beforeRender`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#beforerender) event. On success, assign the retrieved data to the [content](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#content) property.

When hovering over icons, the corresponding data is retrieved dynamically and assigned to the tooltip's content.

Refer to the following code snippet to implement dynamic tooltip content.

```typescript

onBeforeRender(args: TooltipEventArgs): void {
    this.content = 'Loading...';
    this.dataBind();
    let fetchApi: Fetch = new Fetch('./tooltip.json', 'GET');
    fetchApi.send().then(
        (result: any) => {
            for (let i: number = 0; i < result.length; i++) {
                if (result[i].Id == args.target.id) {
                    /* tslint:disable */
                    this.content = result[i].Name;
                    /* tslint:enable */
                }
            }
            this.dataBind();
        },
        (reason: any) => {
            this.content = reason.message;
            this.dataBind();
        });
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/dynamic-content-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/dynamic-content-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/dynamic-content-cs3" %}
