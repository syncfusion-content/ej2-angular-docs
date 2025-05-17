---
layout: post
title: Content security policy in Angular Troubleshoot component | Syncfusion
description: Learn here all about Content security policy in Syncfusion Angular Troubleshoot component of Syncfusion Essential JS 2 and more.
control: common
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Content Security Policy

Content Security Policy (CSP) is a pivotal security feature deployed by web browsers to mitigate risks such as cross-site scripting (XSS) and data injection attacks. CSP controls the allowed sources from which content can be loaded on a web page, thereby enhancing security.

To activate a strict [Content Security Policy (CSP)](https://csp.withgoogle.com/docs/strict-csp.html), some browser functionalities are disabled by default. When utilizing Syncfusion Angular components in a strict CSP environment, it is crucial to integrate the following directives in the CSP meta tag:

* Syncfusion components use computed **inline styles** and **base64** encoded font icons, which are typically blocked by strict CSP. To permit their usage, include the directives [`style-src 'self' 'unsafe-inline';`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) and [`font-src 'self' data:;`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src) in your meta tag as demonstrated:

{% tabs %}
{% highlight razor tabtitle="HTML" %}

<meta http-equiv="Content-Security-Policy" content="default-src 'self';
    style-src 'self' 'unsafe-inline';
    font-src 'self'  data:;" />

{% endhighlight %}
{% endtabs %}

* Syncfusion **material** and **tailwind** built-in themes contain a reference to the [`Roboto’s external font`](https://fonts.googleapis.com/css?family=Roboto:400,500), which is also blocked. To allow them, add the [`external font`](https://fonts.googleapis.com/css?family=Roboto:400,500) reference to the [`style-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) and [`font-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src) directives in the above meta tag.

Integrate the following meta tag within your `<head>` directive to resolve CSP violations when using Syncfusion Angular components with these themes:

{% tabs %}
{% highlight razor tabtitle="HTML" %}

<head>
    ...
    <meta http-equiv="Content-Security-Policy" content="default-src 'self';
    style-src 'self' https://fonts.googleapis.com/ 'unsafe-inline';
    font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data:;" />
</head>

{% endhighlight %}
{% endtabs %}

N> From the 2023 Vol2 - 22.1 release onwards, the Content Security Policy for Syncfusion Angular components has been enhanced. The usage of the `unsafe-eval` directive has been eliminated from the CSP meta tag.

> [View the Angular sample enabled with strict CSP in Github](https://github.com/SyncfusionExamples/ej2-angular-csp-example)

## See also

* [How to Resolve Content Security Policy (CSP) Errors](../how-to/csp-errors)