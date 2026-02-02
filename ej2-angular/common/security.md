---
layout: post
title: Security Considerations in Angular Common control | Syncfusion
description: Learn here all about Security Considerations in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components - Security

Security is a critical concern in modern web application development. Key practices include enforcing HTTPS, validating and sanitizing all user inputs, implementing strong authentication and authorization, and protecting against common vulnerabilities such as XSS, CSRF, and injection attacks.

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components are designed with security in mind and integrate seamlessly with Angular's built-in security mechanisms, such as automatic sanitization of interpolated values and protection against common client-side attacks.

For more details on Angular's security model, refer to the official documentation: [Security in Angular](https://angular.dev/best-practices/security)

## Common Security Vulnerabilities

Web applications can be exposed to various vulnerabilities if not properly secured. The following are some of the most prevalent threats:

- [Cross-Site Scripting](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) - XSS is a security vulnerability that can occur in web applications. These scripts can steal session cookies, redirect users to malicious websites, or deface the website. XSS vulnerabilities typically arise when the application fails to properly validate or encode user-supplied input before rendering it in the browser.

- [Cross-Site Request Forgery](https://developer.mozilla.org/en-US/docs/Glossary/CSRF) - CSRF is a type of web security vulnerability that allows an attacker to force a logged-in user to perform actions on a web application without their consent or knowledge. CSRF attacks exploit the trust that a web application has in the user's browser by tricking it into sending unauthorized requests to the vulnerable application.

- **Injection Attacks**  
  Includes SQL injection, command injection, and others where untrusted input is passed to interpreters without sanitization, potentially allowing unauthorized data access or code execution.

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components help mitigate these risks through built-in safeguards, sanitization features, and compliance with modern security standards.

## Security Features and Considerations

Syncfusion<sup style="font-size:70%">&reg;</sup> follows secure development practices when building Angular components. Key security-related features include:

- [Content Security Policy (CSP) Compliance](#content-security-policy)
- [HTML Sanitization](#html-sanitizer)
- [Browser Storage Usage](#browser-storage)

### Content Security Policy (CSP) Compliance

[Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) is a browser security layer that helps detect and mitigate cross-site scripting (XSS) and data injection attacks. It restricts the sources from which resources (scripts, styles, fonts, images, etc.) can be loaded and blocks unsafe practices such as inline scripts, inline styles, `eval()`, and `new Function()`.

Syncfusion<sup style="font-size:70%">&reg;</sup> has taken significant steps to ensure that all EJ2 components are fully CSP-compliant. This means that our components no longer rely on practices that violate CSP directives, such as embedding inline styles or scripts. Instead, we have adopted secure coding practices that align with CSP standards, ensuring that our components can be seamlessly integrated into applications with strict CSP policies.

Our Document Editor product offers robust support for a strict Content Security Policy (CSP) to enhance security by preventing unauthorized content from being executed. While most features comply with strict CSP settings, there is one notable exception related to custom fonts. The `setCustomFonts` method is incompatible with strict CSP settings. Therefore, when enforcing a strict CSP, `setCustomFonts` may not function as expected.

#### Benefits of CSP Compliance in Syncfusion<sup style="font-size:70%">&reg;</sup> EJ2 Components

1. **Enhanced Security**: By eliminating the use of unsafe practices, Syncfusion<sup style="font-size:70%">&reg;</sup> EJ2 components reduce the risk of XSS attacks and other client-side vulnerabilities.

2. **Seamless Integration**: Developers can use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components in applications with strict CSP configurations without requiring additional adjustments or exceptions.

3. **Future-Proof Design**: Adhering to CSP standards ensures compatibility with modern web security requirements, making Syncfusion<sup style="font-size:70%">&reg;</sup> components a reliable choice for secure application development.

4. **No Additional Configuration**: Since Syncfusion<sup style="font-size:70%">&reg;</sup> EJ2 components are CSP-compliant by design, developers do not need to include specific CSP directives or modify their existing policies to accommodate our components.

By adhering to CSP standards, Syncfusion<sup style="font-size:70%">&reg;</sup> components provide a robust foundation for building secure and scalable web applications. This ensures that your applications are not only protected against common vulnerabilities but also meet the highest security standards.

To know more information about the CSP, refer this [documentation](https://ej2.syncfusion.com/documentation/common/troubleshoot/content-security-policy).

#### CSP Directives

The following directives are commonly required when using Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components:

|    Directives    |    Description    |    Examples    |
|------------------|-------------------|----------------|
|  `font-src`  | Defines the allowed sources for loading fonts. It helps prevent font-related security issues by restricting the locations from which fonts can be loaded. | `font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data: cdn.syncfusion.com 'unsafe-inline';` |
|  `img-src`  | Specifies the allowed sources for loading images. It helps control from where images can be displayed on the web page. | `img-src 'self' data:"` |

> Utilizing a web worker within the Spreadsheet Control for exporting necessitates the addition of a specific directive to ensure proper functionality during the export process.
`worker-src 'self' 'unsafe-inline' * blob:;`

#### Allowed CSP Sources

The following sources refer to the origins from which resources such as styles, images and fonts are allowed to be loaded and executed on a web page.

|  Source  |  Description  | Examples  |
|----------|---------------|-----------|
|  `self`  |  Refers to the origin from which the protected document is being served, including the same URL scheme and port number  |  `style-src 'self'`  |
|  `data`  | Enables a website to fetch resources using the data scheme, such as loading Base64-encoded images.  |  `img-src 'self' data:`  |

> **Note**: While using the PDF Viewer component for standalone components, you need to use `unsafe-eval` to avoid CSP issues. The PDF Viewer component is not yet converted to be fully CSP-compliant.

### HTML Sanitizer

An HTML sanitizer removes potentially harmful code from HTML documents, preventing XSS attacks by eliminating malicious code like script tags or inline styles.

Syncfusion<sup style="font-size:70%">&reg;</sup> ensures security by offering the `enableHtmlSanitizer` API. It sanitizes HTML strings, reducing potential threats.

The `enableHtmlSanitizer` property, when enabled, ensures content undergoes rigorous sanitization to mitigate XSS risks, strengthening component security.

Here is a sample code to sanitize input values using Syncfusion<sup style="font-size:70%">&reg;</sup>:

```ts
import { SanitizeHtmlHelper } from '@syncfusion/ej2-base';

let html: string = '<script>alert("XSS");</script>';

let sanitizedHtml: string = SanitizeHtmlHelper.sanitize(html);
```

When `enableHtmlSanitizer` is `true`, the content will be sanitized and displays the code.

![With sanitizer property](images/with-sanitizer-property.png)

When `enableHtmlSanitizer` is `false` or not included this property, the malicious code will be interpreted as script, and the alert pop-up window will be open.

![Without sanitizer property](images/without-sanitizer-property.png)

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/enable-sanitizer-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/enable-sanitizer-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/enable-sanitizer-cs1" %}

### Browser Storage

Browser storage refers to the mechanisms provided by web browsers to store data locally on a user's device. Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components utilize the following storage options only.

* Local Storage

#### Local Storage

[Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) allows persistent data storage on client devices using key-value pairs, accessible through Angular. Syncfusion<sup style="font-size:70%">&reg;</sup> uses local storage only when persistence is enabled.