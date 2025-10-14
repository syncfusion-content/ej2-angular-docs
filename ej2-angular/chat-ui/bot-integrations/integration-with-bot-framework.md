---
layout: post
title: Integrate Microsoft Bot With Angular Chat UI component | Syncfusion
description:  Checkout and learn about Integration of Microsoft Bot Framework With Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Integrate Microsoft Bot Framework with Angular Chat UI Component

The Chat UI component integrates with a [Microsoft Bot Framework](https://learn.microsoft.com/en-us/azure/bot-service/bot-builder-basics?view=azure-bot-service-4.0) bot hosted on Azure, enabling a custom chat interface for seamless user interaction. The process involves setting up a secure backend token server, configuring Direct Line in Azure, and integrating the Chat UI in the application.

## Prerequisites

Before starting, ensure you have the following:

* **Node.js**: Version 16 or higher with npm.

* [Microsoft Azure Account](https://portal.azure.com/#home) : Required to create and host the bot.

* **Syncfusion Chat UI**: Package [@syncfusion/ej2-angular-interactive-chat](https://www.npmjs.com/package/@syncfusion/ej2-angular-interactive-chat) installed.

* **Deployed Azure Bot**: A bot should be created and published using the [Microsoft Bot Framework](https://learn.microsoft.com/en-us/azure/bot-service/bot-builder-basics?view=azure-bot-service-4.0), which is accessible via an Azure App Service. Refer to Microsoft's Bot Creation Guide.

## Set Up the Angular Environment

Follow the Syncfusion Chat UI [Getting Started](../getting-started) guide to configure and render the Chat UI component in your Angular application using Angular CLI.

## Install Dependencies

Install the required packages:

* Install `frontend` dependencies for bot communication and the Syncfusion Chat UI:

```bash

npm install botframework-directlinejs axios --save

```

* Install `backend` dependencies for the token server:

```bash

npm install express axios cors dotenv

```

## Configure the Azure Bot

1. In the [Azure Portal](https://portal.azure.com/#home), navigate to your bot resource.

2. Enable the direct line channel:
    * Go to `Channels` > `Direct Line` > `Default-Site`.
    * Copy one of the displayed secret keys.

3. Verify the messaging endpoint in the configuration section (e.g., https://your-bot-service.azurewebsites.net/api/messages).

> `Security Note`: Never expose the Direct Line secret key in frontend code. Use a backend token server to handle it securely.

##  Set Up Token Server

Create a `token-server` folder with an `index.js` and a `.env` files.

{% tabs %}
{% highlight js tabtitle=".env" %}
DIRECT_LINE_SECRET=PASTE_YOUR_DIRECT_LINE_SECRET_HERE
{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for your frontend

const directLineSecret = process.env.DIRECT_LINE_SECRET;
if (!directLineSecret) {
    throw new Error('Direct Line secret is not set in the .env file.');
}

app.post('/directline/token', async (req, res) => {
    try {
        const response = await axios.post(
            'https://directline.botframework.com/v3/directline/tokens/generate',
            {}, // Request body can be empty
            {
                headers: {
                    'Authorization': `Bearer ${directLineSecret}`
                }
            }
        );
        res.json({ token: response.data.token });
    } catch (err) {
        console.error('Error generating Direct Line token:', err.response ? err.response.data : err.message);
        res.status(500).json({ error: 'Failed to generate Direct Line token.' });
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Token server running on http://localhost:${port}`));
{% endhighlight %}
{% endtabs %}

## Configure ChatUI

Modify the `app.component.ts` file to connect the Syncfusion Chat UI to the bot via the direct line API. The HTML template is included inline using the `template` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatUIModule, MessageModel, UserModel } from '@syncfusion/ej2-angular-interactive-chat';
import { DirectLine } from 'botframework-directlinejs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [InteractiveChatModule, HttpClientModule],
  standalone: true,
  template: `
    <div id='chat-container' ejs-chatui [user]="currentUserModel" (messageSend)="messageSend($event)">
        <e-messages>
          <e-message *ngFor="let msg of messages; let i = index" [text]="msg.text" [author]="msg.author"></e-message>
        </e-messages>
    </div>`
})
export class AppComponent implements OnInit, OnDestroy {
    public currentUserModel: UserModel = {
        id: 'user1',
        user: 'You'
    };
    public botUserModel: UserModel = {
        id: 'bot',
        user: 'Bot'
    };
    public messages: MessageModel[] = [];
    private directLine!: DirectLine;
    private activitySubscription!: Subscription;

    constructor(private http: HttpClient) {}

    async ngOnInit(): Promise<void> {
        try {
          // 1. Fetch the Direct Line token from your backend server
            const response = await firstValueFrom(this.http.post<{ token: string }>('http://localhost:5000/directline/token', {}));
            const { token } = response!;

            // 2. Create a new Direct Line instance
            this.directLine = new DirectLine({ token });

            // 3. Subscribe to incoming activities (messages) from the bot
            this.activitySubscription = this.directLine.activity$
            .filter(activity => activity.type === 'message' && activity.from.id !== this.currentUserModel.id)
            .subscribe(message => {
                const botReply: MessageModel = { text: message.text, author: this.botUserModel };
                this.messages = [...this.messages, botReply];
        });

        } catch (error) {
            console.error('Failed to connect to the bot service:', error);
            const errorMsg: MessageModel = { text: 'Sorry, I couldn\'t connect to the bot.', author: this.botUserModel };
            this.messages = [errorMsg];
          }
    }
    ngOnDestroy(): void {
        if (this.directLine) {
          this.directLine.end();
        }
        if (this.activitySubscription) {
          this.activitySubscription.unsubscribe();
        }
    }
    // Handle the sending of a message from the Chat UI
    public messageSend(args: any): void {
        args.cancel=true;
        if (!this.directLine) {
            console.error('Direct Line connection not established.');
            return;
        }
        // Add the user's message to the UI immediately
        const userMessage: MessageModel = { text: args.message.text, author: this.currentUserModel };
        this.messages = [...this.messages, userMessage];
        // Send the message activity to the bot via Direct Line
        this.directLine.postActivity({
        from: { id: this.currentUserModel.id, name: this.currentUserModel.name },
        type: 'message',
        text: args.message.text
        }).subscribe(
            id => console.log('Sent message with ID: ', id),
            error => console.error('Error sending message: ', error)
        );
    }
}
{% endhighlight %}
{% endtabs %}

## Run and Test

### Start the Token Server

Navigate to the `token-server` folder and run the following command to start the server:

```bash

node index.js

```

### Start the Angular frontend

In a separate terminal window, navigate to your Angular project folder and start the development server:

```bash

ng serve

```
Open the Host link to interact with your Microsoft Bot Framework chatbot.

## Troubleshooting

* `Token Server Error (500)`: Ensure the `DIRECT_LINE_SECRET` in the `.env` file is correct and that you have restarted the token server after changes.
* `CORS Error`: Ensure the CORS configuration in `index.js` allows requests from your frontend Host URL.
* `Bot is Not Responding`:
  - Test the bot in the Azure Portal using the `Test in Web Chat` feature to ensure it's running correctly.
  - Check the bot's `Messaging endpoint` in the Configuration section and ensure it is correct and accessible.
* `Connection Fails on Load`: Verify the token server is running and accessible from the browser. Check the console for network errors.
* `Token Expiration`: direct line tokens are short-lived. The `directline-js` library typically handles token refresh automatically, but if issues persist, restart the direct line connection.
