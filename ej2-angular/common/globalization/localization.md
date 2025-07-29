---
layout: post
title: Localization in Angular Common control | Syncfusion
description: Learn here all about Localization in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Localization

The Localization library in Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular UI Components enables you to display text content in languages other than English. This feature is essential for applications serving a global audience by providing a native language experience.

## Loading translations

Translations can be loaded into your Angular application using the `load` function from the `@syncfusion/ej2-base` module. This function requires an object where language codes are keys, and the corresponding translation objects are values.

For instance, to load translations for English (`en`) and French (`fr`), the following implementation can be used:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/locale-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/locale-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/locale-cs1" %}

## Changing current locale

The current locale can be changed for all the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components in your application by invoking `setCulture` function with your desired culture name.

```typescript
import { L10n, setCulture } from '@syncfusion/ej2-base';
L10n.load({
    'fr-BE': {
        'Button': {
            'id': 'Numéro de commande',
            'date': 'Date de commande'
        }
    }
});

setCulture('fr-BE');
```

>Note: Before changing a culture globally, you need to ensure that locale text for the concerned culture is loaded through `L10n.load` function.