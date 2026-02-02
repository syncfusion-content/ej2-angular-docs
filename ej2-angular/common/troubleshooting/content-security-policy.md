---
layout: post
title: Content security policy in Angular Troubleshoot component | Syncfusion
description: Learn how to configure Content Security Policy (CSP) for your Angular application when using Syncfusion Essential JS 2 components to mitigate XSS and data injection risks.
control: common
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Content Security Policy

Content Security Policy (CSP) is a pivotal security feature deployed by web browsers to mitigate risks such as cross-site scripting (XSS) and data injection attacks. CSP controls the allowed sources from which content can be loaded on a web page, thereby enhancing security.

Syncfusion<sup style="font-size:70%">&reg;</sup> has ensured that all EJ2 components are fully CSP-compliant. This means that our components no longer rely on inline styles, inline scripts, or other practices that violate CSP directives. As a result, you can seamlessly integrate Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components into your applications without the need for additional CSP configurations or exceptions.

By adhering to CSP standards, Syncfusion<sup style="font-size:70%">&reg;</sup> components provide a robust foundation for building secure and scalable web applications. This ensures that your applications are protected against common vulnerabilities while meeting the highest security requirements.

* Syncfusion<sup style="font-size:70%">&reg;</sup> **material** and **tailwind** built-in themes contain a reference to the [`Roboto’s external font`](https://fonts.googleapis.com/css?family=Roboto:400,500), which is also blocked. To allow them, add the [`external font`](https://fonts.googleapis.com/css?family=Roboto:400,500) reference to the [`style-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) and [`font-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src) directives in the above meta tag.

## Implementing CSP with Syncfusion Angular Components

Integrate the following meta tag within your `<head>` directive to resolve CSP violations when using Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with these themes:

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

### Understanding the CSP Directives

In the above configuration:

- `default-src 'self'`: Restricts content loading to the same origin
- `style-src 'self' https://fonts.googleapis.com/ 'unsafe-inline'`: Allows styles from same origin, Google Fonts, and inline styles (required by some Syncfusion components)
- `font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data:`: Allows fonts from same origin, Google Fonts domains, and data URIs

## Troubleshooting CSP Issues

If you encounter CSP violations when using Syncfusion components:

1. Check your browser's developer console for specific CSP violation messages
2. Ensure your CSP configuration includes all necessary directives as shown above
3. For specific components that may require additional directives, consult the component's documentation

N> From the 2023 Vol2 - 22.1 release onwards, the Content Security Policy for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components has been enhanced. The usage of the `unsafe-eval` directive has been eliminated from the CSP meta tag.

> [View the Angular sample enabled with strict CSP in GitHub](https://github.com/SyncfusionExamples/ej2-angular-csp-example)

## See also
*   [How to Resolve Content Security Policy (CSP) Errors](../how-to/csp-errors)