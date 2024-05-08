---
layout: post
title: Templates with Angular Rating component | Syncfusion
description:  Learn here all about SeleTemplatesction with Angular Rating component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Templates
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Angular Rating Component

The rating component allows you to customize the appearance of the rating items using templates. You can use templates to specify a custom layout for the rating items, which can include any content you want. This allows you to create a more customized and interactive rating experience for the user.

The rating component supports below templates for item customization.

* [`emptyTemplate`](https://ej2.syncfusion.com/angular/documentation/api/rating#emptytemplate)
* [`fullTemplate`](https://ej2.syncfusion.com/angular/documentation/api/rating#fulltemplate)

## Empty (unrated) symbol template

To customize the appearance of **unrated** items, you can use the `emptyTemplate` tag directive. It allows you to specify the desired custom content for the unrated items.
The `value` and `index` are available in the template context for accessing information about the un-rated item.
If the `fullTemplate` is not defined, the `emptyTemplate` will be used as the default for both rated and unrated items. You can apply custom styles to differentiate between the rated and unrated states of the items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/templates/emptytemplate-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/templates/emptytemplate-cs/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/rating/templates/emptytemplate-cs/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/templates/emptytemplate-cs" %}

> The current value of the rating item available in the template context as `value` and in the rating item element as CSS Variable (`--rating-value`) can be used to support precision in templates.

## Full (rated) symbol template

To customize the appearance of **rated** items in the rating component, you can use the `fullTemplate` tag directive. This directive allows you to specify a custom layout for the rated items, which can include any content you desire.
The `value` and `index` are available in the template context for accessing information about the rated item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/templates/fulltemplate-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/templates/fulltemplate-cs/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/rating/templates/fulltemplate-cs/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/templates/fulltemplate-cs" %}

## Using Emoji icon as rating symbol

You can use emojis of your choice as rating symbol by specifying them as template content within the `emptyTemplate` tag directive.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/templates/emoji-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/templates/emoji-cs/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/rating/templates/emoji-cs/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/templates/emoji-cs" %}

## Using SVG icon as rating symbol

You can use SVG icons of your choice as rating symbol by specifying them as template content within the `emptyTemplate` and `fullTemplate` tag directives.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/templates/svg-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/templates/svg-cs/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/rating/templates/svg-cs/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/templates/svg-cs" %}

## Using PNG image as rating symbol

You can use PNG images of your choice as rating symbol by specifying them as template content within the `emptyTemplate` and `fullTemplate` tag directives.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/templates/png-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/templates/png-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/templates/png-cs" %}
