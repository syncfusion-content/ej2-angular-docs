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

Localization library allows you to localize the text content of the Syncfusion Angular UI Components. This is useful if you want to display the UI in a language other than English.

## Loading translations

To load a translation object in your application, you can use the load function from the @syncfusion/ej2-base module. This function takes an object that contains the translations for various languages, with the keys being the language codes and the values being the translation objects.

For example, to load translations for English and French, you can do the following:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/locale-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/common/locale-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/locale-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/locale-cs1" %}

## Changing current locale

The current locale can be changed for all the Syncfusion Angular UI Components in your application by invoking `setCulture` function with your desired culture name.

```typescript
import {L10n, setCulture} from '@syncfusion/ej2-base';
L10n.load({
    'fr-BE': {
       'Button': {
             'id': 'Numéro de commande',
             'date':'Date de commande'
         }
     }
});
setCulture('fr-BE');
```

>Note: Before changing a culture globally, you need to ensure that locale text for the concerned culture is loaded through `L10n.load` function.