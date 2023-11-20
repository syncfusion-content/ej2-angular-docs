---
layout: post
title: Show hide spinner in Angular Document editor component | Syncfusion
description: Learn here all about Show hide spinner in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Show hide spinner 
documentation: ug
domainurl: ##DomainURL##
---

# Show hide spinner in Angular Document editor component

Using [`spinner`](https://ej2.syncfusion.com/documentation/spinner/getting-started#create-the-spinner-globally) component, you can show/hide spinner while opening document in DocumentEditor .

Example code snippet to show/hide spinner

```typescript
// showSpinner() will make the spinner visible
showSpinner(document.getElementById('container'));

// hideSpinner() method used hide spinner
hideSpinner(document.getElementById('container'));
```

Refer to the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/document-editor-container-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/document-editor/document-editor-container-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/document-editor-container-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/document-editor-container-cs5" %}

>Note: In above example, we have used setInterval to hide spinner, just for demo purpose.
