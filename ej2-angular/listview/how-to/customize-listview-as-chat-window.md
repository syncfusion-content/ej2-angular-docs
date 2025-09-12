---
layout: post
title: Customize ListView as chat window in Angular ListView | Syncfusion
description: Learn here all about Customize ListView as chat window in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView
documentation: ug
domainurl: ##DomainURL##
---

# Customize ListView as chat window in Angular ListView component

ListView can be customized as a chat window interface. To achieve this functionality, use the ListView [template](https://ej2.syncfusion.com/angular/documentation/api/listview/#template) property and [Avatar](https://ej2.syncfusion.com/angular/documentation/avatar/getting-started) component.

    * The ListView template property showcases the ListView as a chat window interface.
    * The Avatar component designs the profile image of each contact person.

Refer to the template code snippet below for the chat window template implementation.

```typescript
    <ng-template #template let-data="">
        <div class="settings" *ngIf="data.chat!='receiver' then senderTemplate else receiverTemplate "></div>
        <ng-template #senderTemplate>
            <div id="content">
                <div class="name">{{data.text}}</div>
                <div id="info">{{data.contact}}</div>
            </div>
            <div id="image" *ngIf="data.avatar!=''"><span class="e-avatar img1 e-avatar-circle">{{data.avatar}}</span></div>
            <div id="image" *ngIf="data.avatar==''"><span class="{{data.pic}} img1 e-avatar e-avatar-circle"> </span></div>
        </ng-template>

        <ng-template #receiverTemplate>
            <div id="image2" *ngIf="data.avatar!=''"><span class="e-avatar img2 e-avatar-circle">{{data.avatar}}</span></div>
            <div id="image2" *ngIf="data.avatar==''"><span class="{{data.pic}} img2 e-avatar e-avatar-circle"> </span></div>
            <div id="content1">
                <div class="name1">{{data.text}}</div>
                <div id="info1">{{data.contact}}</div>
            </div>
        </ng-template>
    </ng-template>
```

## Chat order in template

The ListView template renders list items with different layouts based on the `chat` property value from the data source. When `chat` equals "receiver", the receiverTemplate displays the avatar on the left with message content on the right. For sender messages, the senderTemplate positions the avatar on the right with message content on the left, creating a typical chat conversation flow.

## Adding messages to chat window

    * Use a textbox to capture message input from the user.
    * Add the textbox message to the ListView dataSource using the addItem method.

```typescript

public btnClick() {
    let value = this.textboxEle.nativeElement.value;
    this.listObj.addItem([{ text: "Amenda", contact: value, id: "2", avatar: "A", pic: "", chat: "receiver" }]);
    this.textboxEle.nativeElement.value = "";
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/chat-window-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/chat-window-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/chat-window-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/chat-window-cs2" %}