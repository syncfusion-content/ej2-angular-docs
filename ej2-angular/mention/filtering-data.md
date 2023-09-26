---
layout: post
title: Filtering data in Angular Mention component | Syncfusion
description: Learn here all about Filtering data in Syncfusion Angular Mention component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filtering data 
documentation: ug
domainurl: ##DomainURL##
---

# Filtering data in Angular Mention component

The Mention component has built-in support to filter data items. The filter operation starts as soon as you start typing characters in the mention element.

## Limit the minimum filter character

You can control the minimum length of user input to initiate the search action using [minLength](https://ej2.syncfusion.com/angular/documentation/api/mention/#minlength) property. This can be useful if you have a very large list of data. The default value is 0, where suggestion the list opened as soon as the user inputs the mention character.

The remote request does not fetch the search data until the search key contains three characters as shown in the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/mention/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/mention/getting-started-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/mention/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/mention/getting-started-cs2" %}

## Change the filter type

While filtering, you can change the filter type to `Contains`, `StartsWith`, or `EndsWith` in the [filterType](https://ej2.syncfusion.com/angular/documentation/api/mention/#filtertype) property. The default filter operator is `Contains`.

* StartsWith - Filter the items that begin with the specified text value.
* Contains - Filter the items that contain the specified text value.
* EndsWith - Filter the items that end with the specified text value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/mention/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/mention/getting-started-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/mention/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/mention/getting-started-cs3" %}

## Allow spacing between search

While filtering the data in the data source, you can allow the space in the middle of the mention by using the [allowSpaces](https://ej2.syncfusion.com/angular/documentation/api/mention/#allowspaces) property. If the data source does not match with the mentioned element data, the popup will be hidden on the space key press. The default value of `allowSpaces` is `false`.

> By default, the `allowSpaces` property is disabled, and the space ends the mention component search.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/mention/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/mention/getting-started-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/mention/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/mention/getting-started-cs4" %}

## Customize the suggestion item count

While filtering, you can customize the number of list items to be displayed in the suggestion list by using the [suggestionCount](https://ej2.syncfusion.com/angular/documentation/api/mention/#suggestioncount) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/mention/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/mention/getting-started-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/mention/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/mention/getting-started-cs5" %}

## See Also

* [Templates](./template)
