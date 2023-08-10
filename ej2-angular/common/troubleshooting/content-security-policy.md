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

Content Security Policy (CSP) is a security feature implemented by web browsers that helps to protect against attacks such as cross-site scripting (XSS) and data injection. It limits the sources from which content can be loaded on a web page.

To enable strict [Content Security Policy (CSP)](https://csp.withgoogle.com/docs/strict-csp.html), certain browser features are disabled by default. In order to use Syncfusion Angular components with strict CSP mode, it is essential to include following directives in the CSP meta tag.

* Syncfusion components are rendered with calculated **inline styles** and **base64** font icons, which are blocked on a strict CSP-enabled site. To allow them, add the [`style-src 'self' 'unsafe-inline';`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) and [`font-src 'self' data:;`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src) directives in the meta tag as follows.

{% tabs %}
{% highlight razor tabtitle="HTML" %}

<meta http-equiv="Content-Security-Policy" content="default-src 'self';
    style-src 'self' 'unsafe-inline';
    font-src 'self'  data:;" />

{% endhighlight %}
{% endtabs %}

* Syncfusion **material** and **tailwind** built-in themes contain a reference to the [`Roboto’s external font`](https://fonts.googleapis.com/css?family=Roboto:400,500), which is also blocked. To allow them, add the [`external font`](https://fonts.googleapis.com/css?family=Roboto:400,500) reference to the [`style-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) and [`font-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src) directives in the above meta tag.

The resultant meta tag is included within the `<head>` tag and resolves the CSP violation on the application's side when utilizing Syncfusion Angular components with material and tailwind themes.

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

* [How to resolve the Content Security Policy (CSP) errors](../how-to/csp-errors)