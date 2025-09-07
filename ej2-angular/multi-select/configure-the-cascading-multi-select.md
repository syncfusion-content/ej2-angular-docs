---
layout: post
title: Configure Cascading MultiSelect in Angular | Syncfusion
description: Learn how to configure a cascading series of Angular MultiSelect components where one dropdown's options depend on another's selected value.
platform: ej2-angular
control: MultiSelect
documentation: ug
domainurl: ##DomainURL##
---

# Configure a Cascading MultiSelect

A cascading MultiSelect consists of a series of dependent components, where the selection in one MultiSelect (the parent) determines the available options in another (the child). This is useful for guiding users through hierarchical data, such as selecting a country to populate a list of states, which in turn populates a list of cities.

This behavior is configured by using the `change` event of the parent component. In the event handler, the logic is implemented to:
1. Clear any previous selections in the child component and disable it
2. Filter the data source for the child component based on the parent's newly selected value
3. Re-enable the child component with the updated data source
4. Apply the changes immediately using the `dataBind` method

The following example demonstrates the cascade behavior of country, state, and city MultiSelect components. The `dataBind` method ensures that property changes are reflected immediately in the MultiSelect components, integrating seamlessly with Angular's change detection cycle.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/cascading-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/cascading-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="cascading.html" %}
{% include code-snippet/multiselect/cascading-cs1/src/cascading.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/cascading-cs1" %}