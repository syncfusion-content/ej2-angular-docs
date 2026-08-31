---
layout: post
title: Localization in Angular Query Builder UI | Syncfusion
description: Localize the Syncfusion Angular Query Builder UI labels, buttons, and messages for languages like Arabic, German, and French using the L10n library.
platform: ej2-angular
control: Localization
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular Query Builder UI

Localize the Query Builder component to support different languages and cultures. The `L10n` library from `@syncfusion/ej2-base` enables you to customize all UI text in the Query Builder, including labels, buttons, and messages. Define locale values and translation objects to support languages such as Arabic, German, and French.

To localize the Query Builder:

1. Import `L10n` and [`setCulture`](https://ej2.syncfusion.com/angular/documentation/api/base/setCulture.html) from `@syncfusion/ej2-base`.
2. Load the translation strings for the target locale using `L10n.load(...)`, using the `querybuilder` keyword as the object key.
3. Set the component's `locale` property to the same locale string you loaded (for example, `locale="de-DE"`).
4. Optionally call `setCulture('de-DE')` to apply the corresponding culture's number and date formatting.

```typescript
import { L10n, setCulture } from '@syncfusion/ej2-base';

setCulture('de-DE');

L10n.load({
    'de-DE': {
        'querybuilder': {
            'AddGroup': 'Gruppe hinzufügen',
            'AddCondition': 'Bedingung hinzufügen',
            'SelectField': 'Wählen Sie ein Feld aus'
        }
    }
});
```

> The `locale` property on the Query Builder component must match one of the locales loaded with `L10n.load(...)`. When a key is not present in the loaded locale, the Query Builder falls back to the default English value for that key.

The following list of properties and their values are used in the Query Builder.

| Locale keywords | Text |
| ------------ | ----------------------- |
| AddGroup | Add Group |
| AddCondition | Add Condition |
| AddButton | Add Group/Condition |
| DeleteRule | Remove this condition |
| DeleteGroup | Delete group |
| Edit | EDIT |
| SelectField | Select a field |
| SelectOperator | Select operator |
| StartsWith | Starts With |
| EndsWith | Ends With |
| DoesNotStartWith | Does Not Start With |
| DoesNotEndWith | Does Not End With |
| Contains | Contains |
| DoesNotContain | Does Not Contain |
| Equal | Equal |
| NotEqual | Not Equal |
| LessThan | Less Than |
| LessThanOrEqual | Less Than Or Equal |
| GreaterThan | Greater Than |
| GreaterThanOrEqual | Greater Than Or Equal |
| Between | Between |
| NotBetween | Not Between |
| In | In |
| NotIn | Not In |
| Remove | REMOVE |
| ValidationMessage | This field is required |
| SummaryViewTitle | Summary View |
| OtherFields | Other Fields |
| AND | AND |
| OR | OR |
| NOT | NOT |
| SelectValue | Enter Value |
| IsEmpty | Is Empty |
| IsNotEmpty | Is Not Empty |
| IsNull | Is Null |
| IsNotNull | Is Not Null |
| True | true |
| False | false |
| CloneGroup | Clone Group |
| CloneRule | Clone Rule |
| LockGroup | Lock Group |
| LockRule | Lock Rule |
| UnlockGroup | Unlock Group |
| UnlockRule | Unlock Rule |

## Loading locale strings

The `L10n.load(...)` method accepts an object keyed by locale code, with a `querybuilder` keyword nested under each locale. The component resolves its UI text by reading the keys under the `querybuilder` keyword that matches the component's `locale` property. The following example shows the object shape for the `de-DE` locale:

```typescript
L10n.load({
    'de-DE': {
        'querybuilder': {
            'AddGroup': 'Gruppe hinzufügen',
            'AddCondition': 'Bedingung hinzufügen',
            'AddButton': 'Gruppe/Bedingung hinzufügen',
            'DeleteRule': 'Entfernen Sie diesen Zustand',
            'DeleteGroup': 'Gruppe löschen'
        }
    }
});
```

## Globalization

In addition to translating UI strings, the Query Builder supports globalization of date and number values through the culture settings of the `@syncfusion/ej2-base` library. Calling `setCulture('de-DE')` before rendering the component applies the corresponding culture's number and date formats to the value editors used by the Query Builder. The following sample sets both the `de-DE` culture (via `setCulture`) and the `de-DE` locale strings (via `L10n.load`) and applies them through the component's `locale="de-DE"` property.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/default-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/default-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/default-cs6" %}

## See also

* [Columns](./columns)
* [Operators](./operators)
* [Accessibility](./accessibility)
* [Getting started](./getting-started)
