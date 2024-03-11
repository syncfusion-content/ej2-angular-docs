---
layout: post
title: Security Considerations in Angular Common control | Syncfusion
description: Learn here all about Security Considerations in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

#  Syncfusion Angular Components - Security

Security is a critical aspect of web applications to protect them from various threats and vulnerabilities. Using HTTPS for data encryption, validating and sanitizing user inputs, and implementing strong authentication measures such as multi-factor authentication are indispensable practices in Web application development.

Syncfusion Angular components are implemented with these security considerations.

Angular includes inherent security functionalities.

* [Security in Angular](https://angular.io/guide/security)

## Security Vulnerabilities

Security vulnerabilities in web applications refer to weaknesses or flaws in the design, implementation, or configuration of a web application that can be exploited by attackers to compromise the application's integrity, confidentiality, or availability. Here you can see some of the vulnerabilities.

* [Cross-Site Scripting](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) - XSS is a security vulnerability that can occur in web applications. These scripts can steal session cookies, redirect users to malicious websites, or deface the website. XSS vulnerabilities typically arise when the application fails to properly validate or encode user-supplied input before rendering it in the browser.

* [Cross-Site Request Forgery](https://developer.mozilla.org/en-US/docs/Glossary/CSRF) - CSRF is a type of web security vulnerability that allows an attacker to force a logged-in user to perform actions on a web application without their consent or knowledge. CSRF attacks exploit the trust that a web application has in the user's browser by tricking it into sending unauthorized requests to the vulnerable application.

* Injection Attacks - These occur when an attacker injects malicious code (such as SQL injection, XML injection, or command injection) into input fields or parameters of a web application. If the application does not properly sanitize or validate user inputs, it can execute unintended commands or gain unauthorized access to sensitive data.

Syncfusion Angular components provide support for implementing web applications with enhanced security features.

## Security Considerations

Security holds significant importance in software development, and the incorporation of security measures from the outset of the development process is vital for the protection of applications. Syncfusion takes a thorough approach to security in the development of Angular components, encompassing all critical aspects. The following considerations provide a comprehensive overview of security measures.

* [Content Security Policy](#content-security-policy)
* [HTML Sanitizer](#html-sanitizer)
* [Browser Storage](#browser-storage)

### Content Security Policy

[Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) (CSP) is a one of the security feature, that helps the detect the cross-site-scripting(XSS) attacks and malicious code injection. It will throw the errors and warnings while using the inline-styles and inline scripts, eval, new Function, etc in your applications.

To implement Content Security Policy (CSP) in your application, include a `<meta>` tag with specified CSP directives. Syncfusion Angular components have been designed and implemented with adherence to these CSP directives, ensuring enhanced security. These directives are below.

#### CSP Directives

The following directives are essential for utilizing Syncfusion Angular components.

|    Directives    |    Description    |    Examples    |
|------------------|-------------------|----------------|
|  `style-src`  | Defines the allowed sources for loading stylesheets. This helps mitigate style-based attacks by restricting the locations from which styles can be applied. | `style-src 'self' https://cdn.syncfusion.com/ https://fonts.googleapis.com/ 'unsafe-inline';`|
|  `font-src`  | Defines the allowed sources for loading fonts. It helps prevent font-related security issues by restricting the locations from which fonts can be loaded. | `font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data: cdn.syncfusion.com 'unsafe-inline';` |
|  `img-src`  | Specifies the allowed sources for loading images. It helps control from where images can be displayed on the web page. | `img-src 'self' data:"` |

> Utilizing a web worker within the Spreadsheet Control for exporting necessitates the addition of a specific directive to ensure proper functionality during the export process.
`worker-src 'self' 'unsafe-inline' * blob:;`

#### CSP Sources

The following sources refer to the origins from which resources such as styles, images, fonts are allowed to be loaded and executed on a web page.

|  Source  |  Description  | Examples  |
|----------|---------------|-----------|
|  `self`  |  Refers to the origin from which the protected document is being served, including the same URL scheme and port number  |  `style-src 'self'`  |
|  `data`  | Enables a website to fetch resources using the data scheme, such as loading Base64-encoded images.  |  `img-src 'self' data:`  |
|  `unsafe-inline`  | Allows the use of inline resources, such as inline `style` elements.  |  `style-src 'self' https://fonts.googleapis.com/ 'unsafe-inline'`  |

To know more information about the CSP, refer this [documentation](https://ej2.syncfusion.com/documentation/common/troubleshoot/content-security-policy).

### HTML Sanitizer

An HTML sanitizer is a tool or program that helps remove potentially malicious or harmful code from HTML documents. This type of sanitizer is commonly used in web applications to prevent cross-site scripting (XSS) attacks, which can inject malicious code into a website and compromise user data. HTML sanitizers typically work by analyzing HTML code and removing any potentially dangerous or unwanted elements, such as script tags, inline styles, or event handlers. Other aspects of the HTML may also be modified or cleaned up, such as removing extra whitespace or fixing malformed code.

To avoid the risk of code injection, Syncfusion has provided the [enableHtmlSanitizer](https://ej2.syncfusion.com/angular/documentation/api/button#enablehtmlsanitizer) API into its UI components. This ensures that HTML strings submitted by users are sanitized, enhancing security measures against potential threats.

When this property is enabled, the HTML string undergoes a thorough sanitization process before being rendered in the component. This approach ensures that user inputs containing potential security threats are meticulously filtered, addressing the risk of XSS and contributing to the overall security robustness of our components in the face of potential attacks.

To sanitize input values in a web application using Syncfusion sanitizer, you can use the following code.

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
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/common/enable-sanitizer-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/enable-sanitizer-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/enable-sanitizer-cs1" %}

### Browser Storage

Browser storage refers to the mechanisms provided by web browsers to store data locally on a user's device. Syncfusion Angular components utilize the following storage options only.

* Local Storage

#### Local Storage

[Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) is a type of web storage mechanism provided by web browsers that allows web applications to store data locally on a user's device. It provides a simple key-value pair storage interface and is accessible via Angular.

Syncfusion Angular components utilize local storage only when persistence is enabled.
