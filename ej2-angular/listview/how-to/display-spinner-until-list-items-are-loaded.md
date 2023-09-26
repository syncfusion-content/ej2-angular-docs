---
layout: post
title: Display spinner until list items are loaded in Angular Listview component | Syncfusion
description: Learn here all about Display spinner until list items are loaded in Syncfusion Angular Listview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Display spinner until list items are loaded 
documentation: ug
domainurl: ##DomainURL##
---

# Display spinner until list items are loaded in Angular Listview component

The features of the ListView component such as remote data-binding take more time to fetch data from corresponding dataSource/remote URL. In this case, you can use EJ2 [Spinner](https://ej2.syncfusion.com/angular/documentation/spinner/) to enhance the appearance of the UI. This section explains how to load a spinner component to groom the appearance.

Refer to the following code sample to render the spinner component.

```typescript
    createSpinner({
        target: this.spinnerEle.nativeElement
    });
    showSpinner(this.spinnerEle.nativeElement);
```

Refer to the following code sample to render the ListView component.

```typescript
let listviewInstance: ListView = new ListView({
    //Bind the DataManager instance to the dataSource property
    dataSource= new DataManager({
        url: '//js.syncfusion.com/ejServices/Wcf/Northwind.svc/',
        crossDomain: true
    }),

    //Bind the Query instance to the query property
    query= new Query().from('Products').select('ProductID,ProductName').take(10),

    //Map the appropriate columns to the fields property
    fields= { id: 'ProductID', text: 'ProductName' },

});

//Render the initialized ListView
listviewInstance.appendTo("#element");
```

Here, the data is fetched from `Northwind` Service URL; it takes a few seconds to load the data. To enhance the UI, the spinner component has been rendered initially. After the data is loaded from remote URL, the spinner component will be hidden in ListView [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/list-view/#actioncomplete) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/listview/getting-started-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/getting-started-cs5" %}
