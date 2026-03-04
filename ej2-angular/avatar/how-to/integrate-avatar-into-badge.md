---
layout: post
title: Integrate avatar into badge in Angular Avatar component | Syncfusion
description: Learn here all about Integrate avatar into badge in Syncfusion Angular Avatar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Avatar 
documentation: ug
domainurl: ##DomainURL##
---

# Integrate avatar into badge in Angular Avatar component

The Badge component can be integrated with the Avatar component to create notification avatars that display user profiles alongside visual indicators. This combination is ideal for showing status notifications, message counts, status indicators, or alert notifications.

## Implementation
The default avatar (`e-avatar`) and circle avatar (`e-avatar-circle`) classes work seamlessly with notification badges (`e-badge-notification`) to create these enhanced user interface elements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/avatar/badge-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/avatar/badge-cs2/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/avatar/badge-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/avatar/badge-cs2" %}
