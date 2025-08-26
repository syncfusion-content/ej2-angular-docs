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

The badge component serves as a dependent and supportive element that can be integrated with avatars to create notification avatars. This combination displays user profiles alongside status indicators, message counts, or alert notifications.

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
