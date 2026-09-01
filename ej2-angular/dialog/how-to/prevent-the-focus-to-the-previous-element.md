---
layout: post
title: How to prevent focus return in Angular Dialog | Syncfusion
description: Keep the Syncfusion Angular Dialog from returning focus to the previous element after close by enabling preventFocus in the beforeClose event.
platform: ej2-angular
control: Prevent the focus to the previous element 
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent focus return in Angular Dialog

By default, when the dialog closes, focus returns to the element that had focus before the dialog opened. Prevent this behavior in the [`beforeClose`](https://ej2.syncfusion.com/angular/documentation/api/dialog/index-default#beforeclose) event handler by setting the event argument's `preventFocus` property to `true`:

```ts
public onBeforeClose(args: any): void {
    args.preventFocus = true;
}
```

Bind the `beforeClose` event to that handler as shown in the following sample. The sample renders a **Delete Multiple Items** confirmation dialog. With `preventFocus` set, focus is left on whatever element received focus inside the dialog when it closes (the user does not see focus snap back to the page).

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dialog/dlg-focus-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-focus-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dlg-focus-cs" %}