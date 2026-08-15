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

Localize the Query Builder component to support different languages and cultures. The `Localization` library enables you to customize all UI text in the Query Builder, including labels, buttons, and messages. Define locale values and translation objects to support languages such as Arabic, German, French, and others.

The following list of properties and its values are used in the Query Builder.

| Locale key words | Text |
| ------------ | ----------------------- |
| AddGroup  | Add Group |
| AddCondition  | Add Condition |
| AddButton | Add Group/Condition |
| DeleteRule | Remove this condition |
| DeleteGroup | Delete group |
| Edit | EDIT |
| SelectField | Select a field |
| SelectOperator | Select operator |
| StartsWith | Starts With|
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
| NotBetween | Not Between|
| In | In |
| NotIn | Not In |
| Remove | REMOVE |
| ValidationMessage | This field is required |
| SummaryViewTitle | Summary View |
| OtherFields | Other Fields |
| AND | AND |
| OR | OR |
| SelectValue | Enter Value |
| IsEmpty | Is Empty |
| IsNotEmpty | Is Not Empty |
| IsNull | Is Null |
| IsNotNull | Is Not Null |
| True | True |
| False | False |

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/default-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/default-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/default-cs6" %}
