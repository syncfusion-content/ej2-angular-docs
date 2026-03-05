---
layout: post
title: Different layouts in Angular Splitter component | Syncfusion
description: Learn here all about Different layouts in Syncfusion Angular Splitter component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Splitter
documentation: ug
domainurl: ##DomainURL##
---

# Different layouts in Angular Splitter component

The Angular Splitter component enables the creation of complex layouts with multiple and nested panes.

## Code editor style layout

**Step 1**: Create an element with two child panes to render the outer Splitter. Then, create an inner Splitter inside the first pane of the vertical Splitter.

```html
    <ejs-splitter #splitterInstance  id="outerSplitter" (created)='onCreated()' orientation='Vertical' height='400px' width='100%'>
        <e-panes>
            <e-pane size='53%' min='30%'></e-pane>
            <e-pane>
                <ng-template #content>
                    <div class="content">
                        <h3 class="h3">Preview of sample</h3>
                        <div class="splitter-image">
                            <img class="img1" src="https://ej2.syncfusion.com/demos/src/listview/images/albert.png" style="width: 20%;margin: 0 auto;">
                        </div>
                    </div>
                </ng-template>
            </e-pane>
        </e-panes>
    </ejs-splitter>
```

```javascript
    public onCreated () {
        document.getElementById('outerSplitter').querySelector('.e-pane-vertical').setAttribute('id', 'Innersplitter');
        let splitterObj1 = new Splitter({
            height: '220px',
            paneSettings: [
                { size: '29%', min: '23%', content: this.pane1Content },
                { size: '20%', min: '15%', content: this.pane2Content },
                { size: '35%', min: '35%', content: this.pane3Content }
            ],
            width: '100%'
        });
        splitterObj1.appendTo('#Innersplitter');
    }
```

```css
    .code-editor #code-text {
        margin-left: 5px;
    }
    .code-editor .code-preview {
        margin-top: 15px;
        font-size: 12px;
    }
    .code-editor#target {
        margin: 20px auto;
        max-width: 600px;
    }
    .code-editor.control-section {
        min-height: 370px;
        margin-bottom: 15px;
        margin-top: 10px;
    }
    .code-editor .h3 {
        font-size: 14px;
        margin: 4px;
    }
    .code-editor .content {
        padding: 12px;
    }
    .code-editor .splitter-image {
        margin: 0 auto;
        display: flex;
        height: 115px;
        margin-top: 10px;
    }
```

Once the above configurations have been completed, you will get the output like [this](https://ej2.syncfusion.com/angular/demos/#/material3/splitter/code-editor-layout)

## Outlook style layout

**Step 1**: Create an element with three panes and integrate the required components inside each pane to render `TreeView`, `ListView`, and `Rich Text Editor`.

```html
    <ejs-splitter  id="splitter1" #splitter1 height='493px' width='100%'>
        <e-panes>
            <e-pane size='28%' min='27%'>
                <ng-template #content>
                    <div class="content">
                        <ejs-treeview id="template" [fields]="field">
                            <!-- Template to render tree node -->
                            <ng-template #nodeTemplate="" let-data="">
                                <div>
                                    <div class="treeviewdiv">
                                        <div style="float:left">
                                            <span class="treeName">{{data.name}}</span>
                                        </div>
                                        <div style="margin-right: 5px; float:right">
                                            <span class="treeCount e-badge e-badge-primary" *ngIf="data.count">{{
                                                data.count }}</span>
                                        </div>
                                    </div>
                                </div>
                            </ng-template>
                        </ejs-treeview>
                    </div>
                </ng-template>
            </e-pane>
            <e-pane size='33%' min='23%'>
                <ng-template #content>
                    <div class="content">
                        <ejs-listview [dataSource]='dataSource' cssClass='e-list-template'>
                            <ng-template #template let-dataSource="">
                                <div class="settings e-list-wrapper e-list-multi-line e-list-avatar">
                                    <span class="e-list-item-header">{{dataSource.Name}}</span>
                                    <span class="e-list-content">
                                        <div>
                                            <div class="status">
                                                {{dataSource.content}}</div>
                                            <div id="list-message">
                                                {{dataSource.content2}}</div>
                                        </div>
                                    </span>
                                </div>
                            </ng-template>
                        </ejs-listview>
                        <div id="groupedList" tabindex="1"></div>
                    </div>
                </ng-template>
            </e-pane>
            <e-pane size='37%' min='30%'>
                <ng-template #content>
                    <div class="content">
                        <div style="width: 100%; padding: 15px;">
                            <table>
                                <tr>
                                    <td><button class="e-btn e-flat e-outline">To...</button></td>
                                    <td><ejs-textbox id="firstname" ></ejs-textbox>
                                </tr>
                                <tr>
                                    <td><button class="e-btn e-flat e-outline">Cc...</button></td>
                                    <td><ejs-textbox id="lastname" ></ejs-textbox>
                                </tr>
                                <tr>
                                    <td>
                                        <div id="subject-text">Subject</div>
                                    </td>
                                    <td><ejs-textbox id="subject" ></ejs-textbox>
                                </tr>
                            </table>
                        </div>
                        <div class="forum">
                            <div id="createpostholder">
                                <ejs-richtexteditor id='blogRTE' #blogRTE height= '262px'></ejs-richtexteditor>
                                <div id='buttonSection'>
                                    <button ejs-button [isPrimary]="true" id="send">Send</button>
                                    <button ejs-button  id="discard">Discard</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ng-template>
            </e-pane>
        </e-panes>
    </ejs-splitter>
    <!-- Template to render tree node -->
    <script id="treeTemplate" type="text/x-template">
        <div>
            <div class="treeviewdiv">
                <div style="float:left">
                    <span class="treeName">${name}</span>
                </div>
                ${if(count)}
                    <div style="margin-right: 5px; float:right">
                        <span class="treeCount e-badge e-badge-primary">${count}</span>
                    </div>
                ${/if}
            </div>
        </div>
    </script>
```

```css
    .outlook-style #discard {
        margin-left: 7px;
    }
    .outlook-style table {
        width: 100%;
    }
    .outlook-style#target {
        margin: 20px auto;
        max-width: 820px;
    }
    .outlook-style td {
        padding: 2px;
    }
    .control-section {
        min-height: 370px;  
    }
    .e-treeview .e-list-text {
        width: 100%;
    }
    #groupedList.e-listview .e-list-group-item {
        height: 0;
    }
    #splitter1 .settings.e-list-wrapper.e-list-multi-line.e-list-avatar {
        padding: 15px;
    }
    #buttonSection {
        padding: 7px;
    }
    .outlook-style #createpostholder {
        padding-left: 3px;
        padding-right: 4px;
    }
```

Once the above configurations have been completed, you will get the output like [this](https://ej2.syncfusion.com/angular/demos/#/material3/splitter/outlook-style-layout).

## See Also

* [Multiple panes in Splitter](./split-panes)