---
layout: post
title: Ej1 api migration in Angular Kanban component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Kanban component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ej1 api migration 
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in Angular Kanban component

This article describes the API migration process of Kanban component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Columns

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property** : *columns*</br></br> `<ej-kanban><e-kanban-columns>`</br>`</e-kanban-columns></ej-kanban>` | **Property** : *columns*</br></br> `<ejs-kanban><e-columns>`</br>`</e-columns></ejs-kanban>`</br> |
| Header Text | **Property** : *headerText* </br> </br> `<ej-kanban><e-kanban-columns>` </br>`<e-kanban-column headerText="Backlog">`</br>`</e-kanban-column>` | **Property** : *headerText* </br> </br> `<ejs-kanban><e-columns>`</br> `<e-column headerText='To do'>`</br>`</e-column>`</br>`</e-columns></ejs-kanban>` |
| Key Field | **Property** : *key* </br></br> `<ej-kanban><e-kanban-columns>`</br>`<e-kanban-column key="Open">`</br>`</e-kanban-column>`</br>`</e-kanban-columns>`</br>`</ej-kanban>` | **Property**: *keyField* </br></br>`<ejs-kanban><e-columns>`</br>`<e-column keyField='Open'>`</br>`</e-column>`</br>`</e-columns></ejs-kanban>` |
| Initial Collapsed</br>Columns | **Property**: *isCollapsed*</br></br>`<ej-kanban>`</br>`<e-kanban-columns>`</br>`<e-kanban-column key="Open"`</br>`headerText="Backlog"`</br> `[isCollapsed]="true">`</br>`</e-kanban-column>`</br>`</e-kanban-columns>`</br>`</ej-kanban>`</br> | **Property**: *isExpanded* </br></br>`<ejs-kanban>`</br>`<e-columns>`</br>`<e-column headerText='To do'`</br> `keyField='Open'`</br> `allowToggle='true'`</br> `[isExpanded]='true'>`</br>`</e-column>`</br>`</e-columns>`</br>`</ejs-kanban>` |
| Cell Add card button | **Property**: *showAddButton* </br> </br>`<ej-kanban>`</br>`<e-kanban-columns>`</br>`<e-kanban-column key="Open"`</br>`headerText="Backlog"`</br> `[showAddButton]="true">`</br>`</e-kanban-column>`</br>`</e-kanban-columns>`</br>`</ej-kanban>`</br> | **Property**: *showAddButton* </br> </br>`<ejs-kanban>`</br>`<e-columns>`</br>`<e-column headerText='To do'`</br> `keyField='Open'`</br> `[showAddButton]='true'>`</br>`</e-column>`</br>`</e-columns>`</br>`</ejs-kanban>` |
| Column card count | **Property**: *enableTotalCount* </br> </br> `<ej-kanban [enableTotalCount]="true">`</br>`</ej-kanban>`</br> | **Property**: *showItemCount* </br> </br>`<ejs-kanban>`</br>`<e-columns>`</br>`<e-column headerText='To do'`</br> `keyField='Open'`</br> `[showItemCount]='true'>`</br>`</e-column>`</br>`</e-columns>`</br>`</ejs-kanban>` |
| Template | **Property**: *headerTemplate* </br></br> `<ej-kanban>`</br>`<e-kanban-columns>`</br>`<e-kanban-column key="Open"`</br>`headerText="Backlog"`</br> `headerTemplate="#template">`</br>`</e-kanban-column>`</br>`</e-kanban-columns>`</br>`</ej-kanban>`</br> | **Property**: *template*</br></br>`<ejs-kanban>`</br>`<e-columns>`</br>`<e-column headerText='To do'`</br> `keyField='Open'`</br> `template='#headerTemplate'>`</br>`</e-column>`</br>`</e-columns>`</br>`</ejs-kanban>` |
| Allow Drop | **Property**: *allowDrop* </br> </br>`<ej-kanban>`</br>`<e-kanban-columns>`</br>`<e-kanban-column key="Open"`</br>`headerText="Backlog"`</br> `[allowDrop]="false">`</br>`</e-kanban-column>`</br>`</e-kanban-columns>`</br>`</ej-kanban>` | **Property**: *allowDrop* </br></br>`<ejs-kanban>`</br>`<e-columns>`</br>`<e-column headerText='To do'`</br> `keyField='Open'`</br> `[allowDrop]="false">`</br>`</e-column>`</br>`</e-columns>`</br>`</ejs-kanban>` |
| Allow Drag | **Property**: *allowDrag* </br> </br>`<ej-kanban>`</br>`<e-kanban-columns>`</br>`<e-kanban-column key="Open"`</br>`headerText="Backlog"`</br> `[allowDrag]="false">`</br>`</e-kanban-column>`</br>`</e-kanban-columns>`</br>`</ej-kanban>`| **Property**: *allowDrag* </br></br>`<ejs-kanban>`</br>`<e-columns>`</br>`<e-column headerText='To do'`</br> `keyField='Open'`</br> `[allowDrag]="false">`</br>`</e-column>`</br>`</e-columns>`</br>`</ejs-kanban>` |
| Total Count text | **Property**: *totalCount* </br> </br> </br>`<ej-kanban>`</br>`<e-kanban-columns>`</br>`<e-kanban-column key="Open"`</br>`headerText="Backlog"`</br> `[totalCount]="totalcount">`</br>`</e-kanban-column>`</br>`</e-kanban-columns>`</br>`</ej-kanban>`</br> **TS**<br/>export class AppComponent { <br/>constructor() {<br/> this.totalcount = <br/>{ text: "Backlog Count" };<br/> } <br/>} | **Not Available** |
| Width | **Property**: *width*</br></br>`<ej-kanban>`</br>`<e-kanban-columns>`</br>`<e-kanban-column key="Open"`</br>`headerText="Backlog"`</br> `width="200">`</br>`</e-kanban-column>`</br>`</e-kanban-columns>`</br>`</ej-kanban>`</br> | **Not Available** |
| Visible | **Property**: *visible*</br></br>`<ej-kanban>`</br>`<e-kanban-columns>`</br>`<e-kanban-column`</br>  `headerText="Backlog"`</br> `key="Open"`</br>`[visible]="false">`</br>`</e-kanban-column>`</br>`</e-kanban-columns>`</br>`</ej-kanban>`</br> | **Not Available** |
| Add/Delete Columns | **Method**: *columns(column, key,</br> [action])*</br></br>**Add** :</br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.columns</br>("Review", "Review", "add");</br></br>**Delete:** </br>kanbanObj.columns</br>("Review", "Review", "remove");</br> | **Method**: *addColumn(columnOptions,</br> index)*</br></br>`<ejs-kanban #kanbanObj>`</br>`</ejs-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.addColumn({ </br>headerText: "Review",</br> keyField: "Review"</br>}, 2);</br></br>**Method**: *deleteColumn(index)* </br></br>kanbanObj.deleteColumn(2);
| Show Columns | **Method**: *showColumns(headerText)* </br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>showColumns("Testing"); | **Method**: *showColumn(key)* </br></br>`<ejs-kanban #kanbanObj>`</br>`</ejs-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.showColumn</br>("Testing"); |
| Hide Columns | **Method**: *hideColumns(headerText)* </br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>hideColumns("Testing"); | **Method**: *hideColumns(key)* </br></br>`<ejs-kanban #kanbanObj>`</br>`</ejs-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.hideColumn</br>("Testing"); |
| Get Visible</br>Column Names | **Method**: *getVisibleColumnNames()*</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>getVisibleColumnNames(); | **Not Applicable** |
| Get Column</br>By Header Text | **Method**: *getColumnByHeaderText</br>(headerText)*</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>getColumnByHeaderText</br>("Testing"); | **Not Applicable** |
| Get Column Data | **Not Applicable** | **Method**: *getColumnData()*</br></br>`<ejs-kanban #kanbanObj>`</br>`</ejs-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.getColumnData();</br> |
| Triggers after</br>cell is click | **Event**: *cellClick*</br></br>`<ej-kanban #kanbanObj (cellClick)="cellClick($event)">`</br>`</ej-kanban>`</br>**TS**</br> cellClick(event) {} | **Not Applicable** |

## Cards

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Card unique field | **Property** : </br>*fields.primaryKey*</br></br>`<ej-kanban fields.primaryKey="Id">`</br>`</ej-kanban>`</br>| **Property** : </br>*cardSettings.headerField*</br>`<ejs-kanban`</br>`[cardSettings]='cardSettings'>`</br>`<ejs-kanban>`</br>**TS**</br> public cardSettings:</br> CardSettingsModel = {</br>headerField: 'Id'</br> }; |
| Content | **Property:** </br>*fields.content* </br></br>`<ej-kanban fields.content="Summary">`</br>`</ej-kanban>`</br>| **Property** : </br>*cardSettings.contentField*</br>`<ejs-kanban`</br>`[cardSettings]='cardSettings'>`</br>`<ejs-kanban>`</br>**TS**</br> public cardSettings:</br> CardSettingsModel = {</br>contentField: 'Summary'</br> }; |
| Tag | **Property:** </br>*fields.tag* </br></br>`<ej-kanban fields.tag="Tags">`</br>`</ej-kanban>`</br>| **Property** : </br>*cardSettings.tagsField*</br>`<ejs-kanban`</br>`[cardSettings]='cardSettings'>`</br>`<ejs-kanban>`</br>**TS**</br> public cardSettings:</br> CardSettingsModel = {</br>tagsField: 'Tags'};</br> |
| Left border color | **Property:** </br>*fields.color*</br></br>`<ej-kanban fields.color="Type"`</br> `[cardSettings.colorMapping]`</br>`="color">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br>color = {</br>"#cb2027": "Bug,Story",</br>"#67ab47": "Improvement",</br>"#fbae19": "Epic",</br>"#6a5da8": "Others"</br> }; </br>}</br>| **Property:** </br>*cardSettings.grabberField*</br>`<ejs-kanban`</br>`[cardSettings]='cardSettings'>`</br>`<ejs-kanban>`</br>**TS**</br> public cardSettings:</br> CardSettingsModel = {</br>grabberField: "color"</br> }; |
| Header | **Property:** </br>*fields.title*</br></br>`<ej-kanban fields.title="Assignee">`</br>`</ej-kanban>`</br> | Card Unique mapping</br> field is displayed </br>on card header. |
| Image | **Property:** </br>*fields.imageUrl*</br></br>`<ej-kanban fields.imageUrl="ImgUrl">`</br>`</ej-kanban>`</br> | Not Applicable |
| CSS class | **Not Applicable** | **Property** : </br>*cardSettings.</br>footerCssField*</br></br>`<ejs-kanban`</br>`[cardSettings]='cardSettings'>`</br>`<ejs-kanban>`</br>**TS**</br> public cardSettings:</br> CardSettingsModel = {</br>footerCssField: "classNames"</br> }; |
| Template | **Property:** </br>*cardSettings.template*</br></br>`<ej-kanban cardSettings.template="#template">`</br>`</ej-kanban>`</br> | **Property:** </br>*cardSettings.template*</br></br>`<ejs-kanban`</br>`[cardSettings]='cardSettings'>`</br>`<ejs-kanban>`</br>**TS**</br> public cardSettings:</br> CardSettingsModel = {</br>template: "#cardTemplate"</br> }; |
| Toggle Card | **Method**: *toggleCard</br>($div or id)*</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>toggleCard("2");</br> | **Not Applicable** |
| Get Card Details | **Not Applicable** | **Method**: </br>*getCardDetails(target)*</br></br>`<ejs-kanban #kanbanObj>`</br>`</ejs-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.getCardDetails(</br>obj.element</br>.querySelector(".e-card")); |
| Get Selected Cards | **Not Applicable** | **Method**: </br>*getSelectedCards()*</br></br>`<ejs-kanban #kanbanObj>`</br>`</ejs-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.getSelectedCards(); |
| Card Click | **Event**: *cardClick*</br></br>`<ej-kanban #kanbanObj`</br> `(cardClick)="cardClick($event)">`</br>`</ej-kanban>`</br>**TS**</br> cardClick(event) {} | **Event**: *cardClick* </br></br>`<ejs-kanban #kanbanObj`</br> `(cardClick)="cardClick($event)">`</br>`</ejs-kanban>`</br>**TS**</br> cardClick(event) {} |
| Card Double Click | **Event**: *cardDoubleClick*</br></br>`<ej-kanban #kanbanObj`</br> `(cardDoubleClick)`</br>`="cardDoubleClick($event)">`</br>`</ej-kanban>`</br>**TS**</br> cardDoubleClick(event) {} | **Event**: *cardDoubleClick* </br></br>`<ejs-kanban #kanbanObj`</br> `(cardDoubleClick)=`</br>`"cardDoubleClick($event)">`</br>`</ejs-kanban>`</br>**TS**</br> cardDoubleClick(event) {} |
| Triggers when start</br>the drag | **Event**: *cardDragStart*</br></br>`<ej-kanban #kanbanObj`</br> `(cardDragStart)="cardDragStart($event)">`</br>`</ej-kanban>`</br>**TS**</br> cardDragStart(event) {} | **Event**: *dragStart*</br></br>`<ejs-kanban #kanbanObj`</br> `(dragStart)="dragStart($event)">`</br>`</ejs-kanban>`</br>**TS**</br> dragStart(event) {} |
| Triggers when card</br>is dragged | **Event**: *cardDrag*</br></br>`<ej-kanban #kanbanObj`</br> `(cardDrag)="cardDrag($event)">`</br>`</ej-kanban>`</br>**TS**</br> cardDrag(event) {} | **Event**: *drag* </br></br>`<ejs-kanban #kanbanObj`</br> `(drag)="drag($event)">`</br>`</ejs-kanban>`</br>**TS**</br> drag(event) {} |
| Triggers when card</br>dragging stops | **Event**: *cardDragStop*</br></br>`<ej-kanban #kanbanObj`</br> `(cardDragStop)=`</br>`"cardDragStop($event)">`</br>`</ej-kanban>`</br>**TS**</br> cardDragStop(event) {} | **Event**: *dragStop*</br></br>`<ejs-kanban #kanbanObj`</br> `(dragStop)="dragStop($event)">`</br>`</ejs-kanban>`</br>**TS**</br> dragStop(event) {} |
| Triggers after save</br>the data when dropped | **Event**: *cardDrop*</br></br>`<ej-kanban #kanbanObj`</br> `(cardDrop)="cardDrop($event)">`</br>`</ej-kanban>`</br>**TS**</br> cardDrop(event) {} | **Not Applicable** |
| Triggers after</br>cell is click | **Event**: *cellClick*</br></br>`<ej-kanban #kanbanObj`</br> `(cellClick)="cellClick($event)">`</br>`</ej-kanban>`</br>**TS**</br> cellClick(event) {} | **Not Applicable** |
| Triggers each</br>card rendered | **Event**: *queryCellInfo*</br></br>`<ej-kanban #kanbanObj`</br> `(queryCellInfo)=`</br>`"queryCellInfo($event)">`</br>`</ej-kanban>`</br>**TS**</br> queryCellInfo(event) {} | **Event**: *cardRendered*</br></br>`<ejs-kanban #kanbanObj`</br> `(cardRendered)=`</br>`"cardRendered($event)">`</br>`</ejs-kanban>`</br>**TS**</br> cardRendered(event) {} |

## DataSource

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Card unique field | **Property** : </br>*fields.primaryKey*</br></br>`<ej-kanban fields.primaryKey="Id">`</br>`</ej-kanban>`</br>| **Property** : </br>*cardSettings.headerField*</br>`<ejs-kanban`</br>`[cardSettings]='cardSettings'>`</br>`<ejs-kanban>`</br>**TS**</br> public cardSettings:</br> CardSettingsModel = {</br>headerField: 'Id'</br> }; |
| DataSource | **Property**: *dataSource* </br></br>`<ej-kanban` </br>`[dataSource]="kanbanData">`</br>`</ej-kanban>`</br> **TS**</br>export class AppComponent { </br>public kanbanData: any; </br>constructor() {</br> this.kanbanData = [];</br>}</br> **Method**: </br>*dataSource(datasource)*</br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>dataSource</br>(newDataSource); | **Property**: *dataSource* </br></br>`<ejs-kanban`</br>`[dataSource]="kanbanData">`</br>`</ejs-kanban>`</br> **TS**</br> public kanbanData:</br>Object[] = extend([],</br> kanbanData, null, true)</br> as Object[];</br></br>**Method**: </br>*dataSource(datasource)*</br></br>`<ejs-kanban #kanbanObj>`</br>`</ejs-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.dataSource(newDataSource);</br> |
| Triggers before</br>data load | **Event**: *load*</br></br>`<ej-kanban #kanbanObj`</br> `(load)="load($event)">`</br>`</ej-kanban>`</br>**TS**</br> load(event) {} | **Event**: *dataBinding*</br></br>`<ejs-kanban #kanbanObj`</br> `(dataBinding)="dataBinding($event)">`</br>`</ejs-kanban>`</br>**TS**</br> dataBinding(event) {} |
| Triggers after</br>data bounded | **Event**: *dataBound*</br></br>`<ej-kanban #kanbanObj`</br> `(dataBound)="dataBound($event)">`</br>`</ej-kanban>`</br>**TS**</br> dataBound(event) {} </br> | **Event**: *dataBound*</br></br>`<ejs-kanban #kanbanObj`</br> `(dataBound)="dataBound($event)">`</br>`</ejs-kanban>`</br>**TS**</br> dataBound(event) {} |

## Common

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Drag And Drop | **Property**: *allowDragAndDrop*</br></br>`<ej-kanban`</br>`[allowDragAndDrop]="true">`</br>`</ej-kanban>` | **Property**: *allowDragAndDrop*</br></br>`<ejs-kanban`</br>`[allowDragAndDrop]= true>`</br>`</ejs-kanban>`</br> |
| Key Field | **Property**: *keyField*</br></br>`<ej-kanban`</br>`keyField="Status">`</br>`</ej-kanban>` |**Property** : *keyField*</br></br>`<ejs-kanban`</br>`keyField="Status">`</br>`</ejs-kanban>`</br> |
| Title | **Property**: *allowTitle*</br></br>`<ej-kanban`</br>`[allowTitle]="true">`</br>`</ej-kanban>` | **Not Applicable** |
| CssClass | **Property**: *cssClass*</br></br>`<ej-kanban`</br>`cssClass="gradient-green">`</br>`</ej-kanban>` | **Property**: *cssClass*</br></br>`<ejs-kanban`</br>`cssClass= "custom-class">`</br>`</ejs-kanban>`</br> |
| Print | **Property**: *allowPrinting*</br></br>`<ej-kanban`</br>`[allowPrinting]="true">`</br>`</ej-kanban>`</br></br>**Method**: *print()*</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>print(); | **Not Applicable** |
| Touch | **Property**: *enableTouch*</br></br>`<ej-kanban`</br>`[enableTouch]="true">`</br>`</ej-kanban>` | **Not Applicable** |
| Locale | **Property**: *locale*</br></br>`<ej-kanban`</br>`locale="de-DE">`</br>`</ej-kanban>` | **Property**: *locale*</br></br>`<ejs-kanban locale="de-DE">`</br>`</ejs-kanban>`</br> |
| Query | **Property**: *query*</br></br>`<ej-kanban`</br>`[query]="query">`</br>`</ej-kanban>`</br> **TS**</br>export class AppComponent { </br>constructor() {</br> this.query =</br> ej.Query().select("")});</br>}</br> | **Property** : *query*</br></br>`<ejs-kanban [query]="query">`</br>`</ejs-kanban>`</br>**TS**</br> public query=</br> new Query().select("")});</br> |
| Refresh | **Method**: </br>*refresh([templateRefresh])*</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>refresh(); | **Method**: *refresh()*</br></br>`<ejs-kanban #kanbanObj>`</br>`</ejs-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.refresh();</br> |
| Refresh Template | **Method**: </br>*refreshTemplate()*</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>refreshTemplate(); | **Not Applicable** |
| Destroy | **Method**: *destroy()*</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>destroy(); | **Method**: *destroy()*</br>`<ejs-kanban #kanbanObj>`</br>`</ejs-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.destroy();</br> |
| Get Header Table | **Method**: *getHeaderTable()*</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>getHeaderTable(); | **Not Applicable** |
| Show Spinner | **Not Applicable** | **Method**: *showSpinner()*</br></br>`<ejs-kanban #kanbanObj>`</br>`</ejs-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.showSpinner();</br> |
| Hide Spinner | **Not Applicable** | **Method**: *hideSpinner()*</br></br>`<ejs-kanban #kanbanObj>`</br>`</ejs-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.hideSpinner();</br> |
| Triggers before</br>every action | **Event**: *actionBegin*</br></br>`<ej-kanban #kanbanObj`</br> `(actionBegin)=`</br>`"actionBegin($event)">`</br>`</ej-kanban>`</br>**TS**</br> actionBegin(event) {} | **Event:** *actionBegin*</br></br>`<ejs-kanban #kanbanObj`</br> `(actionBegin)=`</br>`"actionBegin($event)">`</br>`</ejs-kanban>`</br>**TS**</br> actionBegin(event) {} |
| Triggers on successfully</br>completion of actions | **Event**: *actionComplete*</br></br>`<ej-kanban #kanbanObj`</br> `(actionComplete)=`</br>`"actionComplete($event)">`</br>`</ej-kanban>`</br>**TS**</br> actionComplete(event) {} | **Event**: *actionComplete*</br></br>`<ejs-kanban #kanbanObj`</br> `(actionComplete)=`</br>`"actionComplete($event)">`</br>`</ejs-kanban>`</br>**TS**</br> actionComplete(event) {} |
| Triggers on</br>action failure | **Event**: </br>*actionFailure*</br></br>`<ej-kanban #kanbanObj`</br> `(actionFailure)=`</br>`"actionFailure($event)">`</br>`</ej-kanban>`</br>**TS**</br> actionFailure(event) {} | **Event**: *actionFailure*</br></br>`<ejs-kanban #kanbanObj`</br> `(actionFailure)=`</br>`"actionFailure($event)">`</br>`</ejs-kanban>`</br>**TS**</br> actionFailure(event) {} |
| Triggers after</br>Kanban rendered | **Event**: *create*</br></br>`<ej-kanban #kanbanObj`</br> `(create)="create($event)">`</br>`</ej-kanban>`</br>**TS**</br> create(event) {} | **Event**: *created*</br></br>`<ejs-kanban #kanbanObj`</br> `(created)="created($event)">`</br>`</ejs-kanban>`</br>**TS**</br> created(event) {} |
| Triggers when</br>header click | **Event**: *headerClick*</br></br>`<ej-kanban #kanbanObj`</br> `(headerClick)="headerClick($event)">`</br>`</ej-kanban>`</br>**TS**</br> headerClick(event) {} | **Not Applicable** |
| Triggers when destroy | **Event**: *destroy*</br></br>`<ej-kanban #kanbanObj`</br> `(destroy)="destroy($event)">`</br>`</ej-kanban>`</br>**TS**</br> destroy(event) {} | **Event**: *destroy*</br></br>`<ejs-kanban #kanbanObj`</br> `(destroy)="destroy($event)">`</br>`</ejs-kanban>`</br>**TS**</br> destroy(event) {} |

## Swimlane

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: *swimlaneKey*</br></br>`<ej-kanban`</br>`fields.swimlaneKey="Assignee">`</br>`</ej-kanban>` | **Property**: *keyField*</br></br>`<ejs-kanban`</br>`[swimlaneSettings]='swimlaneSettings'>`</br>`</ejs-kanban>`</br>**TS**</br> public swimlaneSettings:</br> SwimlaneSettingsModel =</br> { keyField: 'Assignee' };</br> |
| Header | **Property**: *headers*</br></br>`<ej-kanban`</br>`[headers]="headers">`</br>`</ej-kanban>`**TS**</br>export class AppComponent { </br>constructor() {</br> this.headers = </br>[{ </br>text: "Andrew",</br> key: "Andrew Fuller"}];</br> } </br>} | **Property**: *textField*</br></br>`<ejs-kanban`</br>`[swimlaneSettings]='swimlaneSettings'>`</br>`</ejs-kanban>`</br>**TS**</br> public swimlaneSettings:</br> SwimlaneSettingsModel =</br> { </br>textField: "AssigneeName" };</br> |
| Drag And Drop | **Property**: *allowDragAndDrop*</br></br>`<ej-kanban`</br>`[swimlaneSettings]="swimlaneSettings">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br>constructor() {</br> this.swimlaneSettings = </br>{ allowDragAndDrop: true }</br> } </br>} | **Property**: *allowDragAndDrop*</br></br>`<ejs-kanban`</br>`[swimlaneSettings]='swimlaneSettings'>`</br>`</ejs-kanban>`</br>**TS**</br> public swimlaneSettings:</br> SwimlaneSettingsModel =</br> { </br>allowDragAndDrop: true };</br> |
| Card Count | **Property**: *showCount*</br></br>`<ej-kanban`</br>`[swimlaneSettings]="swimlaneSettings">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br>constructor() {</br> this.swimlaneSettings = </br>{ showCount: true }</br> } </br>} | **Property**: *showItemCount*</br></br>`<ejs-kanban`</br>`[swimlaneSettings]='swimlaneSettings'>`</br>`</ejs-kanban>`</br>**TS**</br> public swimlaneSettings:</br> SwimlaneSettingsModel =</br> { </br>showItemCount: true };</br> |
| Empty Row | **Property**: </br>*showEmptySwimlane*</br></br>`<ej-kanban`</br>`[swimlaneSettings]="swimlaneSettings">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br>constructor() {</br> this.swimlaneSettings = </br>{ showEmptySwimlane: true }</br> } </br>} | **Property**: *showEmptyRow*</br></br>`<ejs-kanban`</br>`[swimlaneSettings]='swimlaneSettings'>`</br>`</ejs-kanban>`</br>**TS**</br> public swimlaneSettings:</br> SwimlaneSettingsModel =</br> { </br>showEmptyRow: true };</br> |
| Sorting | **Not Available** | **Property**: </br>*sortDirection*</br></br>`<ejs-kanban`</br>`[swimlaneSettings]='swimlaneSettings'>`</br>`</ejs-kanban>`</br>**TS**</br> public swimlaneSettings:</br> SwimlaneSettingsModel =</br> { </br>sortDirection: </br>"Descending" };</br> |
| Expand All | **Method**: *expandAll()*</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>KanbanSwimlane</br>.expandAll(); |**Not Applicable** |
| Collapse All | **Method**: *collapseAll()*</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>KanbanSwimlane</br>.collapseAll(); |**Not Applicable** |
| Toggle | **Method**: *toggle($div or key)*</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>KanbanSwimlane</br>.toggle($(".e-slexpandcollapse")</br>.eq(1)); | **Not Applicable** |
| Get Swimlane Data | **Not Applicable** | **Method**: </br>*getSwimlaneData(keyField)*</br></br>`<ejs-kanban #kanbanObj>`</br>`</ejs-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.getSwimlaneData("Janet");</br> |
| Triggers before swimlane</br>icon click event | **Event**: *swimlaneClick*</br></br>`<ej-kanban #kanbanObj`</br> `(swimlaneClick)="swimlaneClick($event)">`</br>`</ej-kanban>`</br>**TS**</br> swimlaneClick(event) {} | **Not Applicable** |

## Stacked Headers

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Multiple stacked headers | **Property**: *stackedHeaderColumns*</br></br>`<ej-kanban`</br>`[stackedHeaderRows]=`</br>`"stackedHeaderRow">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br>constructor() {</br> this.stackedHeaderRow = </br>[{ stackedHeaderColumns: [{ </br> headerText: "Status",</br>column: "Backlog,</br>In Progress, Testing, </br>Done"}] },</br> { stackedHeaderColumns: [{</br> headerText: "Unresolved",</br>column: "Backlog,</br>In Progress"}]}]}}; | **Not Applicable** |
| Single Stacked Header | **Property**: *stackedHeaderColumns*</br></br>`<ej-kanban`</br>`[stackedHeaderRows]=`</br>`"stackedHeaderRow">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br>constructor() {</br> this.stackedHeaderRow = </br>[{ stackedHeaderColumns: [{ </br> headerText: "Status",</br>column: "Backlog,</br>In Progress, Testing, </br>Done"}] },</br> { stackedHeaderColumns: [{</br>headerText: "Unresolved",</br>column: "Backlog,</br>In Progress"}]}]}}; | **Property**: </br>*stackedHeaders*</br>`<ejs-kanban>`</br>`<e-stackedHeaders>`</br>`<e-stackedHeader text='To Do'`</br> `keyFields='Open, InProgress'>`</br>`</e-stackedHeader>`</br>`</e-stackedHeaders>`</br>`</ejs-kanban>`</br> |

## WIP Validation

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Constraints Type | **Property:** </br>*constraints.type*</br></br>`<ej-kanban>`</br>`<e-kanban-columns>`</br>`<e-kanban-column`</br>`headerText="Backlog",`</br>`key: "Open",`</br>`[constraints]="constraint">`</br>`</e-kanban-column>`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br>constraint = { max: '2' };</br>}; | **Property**: </br>*constraintType*</br></br>`<ejs-kanban`</br>`constraintType="swimlane">`</br>`</ejs-kanban>`</br> |
| Maximum card Count</br>at particular</br>column/swimlane | **Property**: </br>*constraints.max*</br></br>`<ej-kanban>`</br>`<e-kanban-columns>`</br>`<e-kanban-column`</br>`headerText="Backlog",`</br>`key: "Open",`</br>`[constraints]="constraint">`</br>`</e-kanban-column>`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br>constraint = {</br>type: "swimlane",</br>max: 5};</br>}; | **Property**: </br>*maxCount*</br></br>`<ejs-kanban>`</br>`<e-columns>`</br>`<e-column headerText='Backlog'`</br> `keyField='Open' maxCount='5'>`</br>`</e-column></e-columns>`</br>`</ejs-kanban>`</br> |
| Minimum card Count</br>at particular column | **Property**:</br>*constraints.min*</br></br>`<ej-kanban>`</br>`<e-kanban-columns>`</br>`<e-kanban-column`</br>`headerText="Backlog",`</br>`key: "Open",`</br>`[constraints]="constraint">`</br>`</e-kanban-column>`</br>`</e-kanban-columns>`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br>constraint = {</br>type: "swimlane",</br>min: 2};</br>}; | **Property**: *minCount*</br>`<ejs-kanban>`</br>`<e-columns>`</br>`<e-column headerText='Backlog'`</br> `keyField='Open' minCount='2'>`</br>`</e-column></e-columns>`</br>`</ejs-kanban>`</br> |

## Keyboard

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| KeyBoard | **Property**: </br>*allowKeyboardNavigation*</br></br>`<ej-kanban`</br>`[allowKeyboardNavigation]="true">`</br>`</ej-kanban>`</br> | **Property**: </br>*allowKeyboard*</br></br>`<ejs-kanban` </br> `[allowKeyboard]="true">`</br>`</ejs-kanban>`</br> |
| Settings | **Property**: </br>*keySettings*</br></br>`<ej-kanban [keySettings]='keySettings'>`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br>keySettings = {</br> focus: "e",</br> insertCard: "45"</br>}</br>}; | **Not Applicable** |

## Toggle Columns

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: </br>*allowToggleColumn*</br></br>`<ej-kanban`</br>`[allowToggleColumn]="true">`</br>`</ej-kanban>`</br> | **Property**: </br>*allowToggle*</br></br>`<ejs-kanban>`</br>`<e-columns>`</br>`<e-column [allowToggle]="true">`</br>`</e-column></e-columns>`</br>`</ejs-kanban>`</br> |
| Toggle | **Method**: *toggleColumn</br>(headerText or $div)*</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>toggleColumn</br>("Backlog"); | **Not Applicable** |

## Dialog Editing

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Fields | **Property**: *editItems*</br></br>`<ej-kanban`</br>`[editSettings.editItems]="editItem">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> editItem = [] </br> }; | **Property**: *fields*</br></br>`<ejs-kanban`</br>`[dialogSettings]='dialogSettings'>`</br></br>`</ejs-kanban>`</br>**TS**</br> public dialogSettings:</br> DialogSettingsModel = {</br>fields: [] }</br> |
| Dialog Model | **Not Available** | **Property**: *model*</br></br>`<ejs-kanban`</br>`[dialogSettings]='dialogSettings'>`</br></br>`</ejs-kanban>`</br>**TS**</br> public dialogSettings:</br> DialogSettingsModel = {</br>model: {</br> width: 250 } }</br>
| Template | **Property**: *dialogTemplate*</br></br>`<ej-kanban`</br>`editSettings.dialogTemplate="#template">`</br>`</ej-kanban>`</br> | **Property**: *template*</br></br>`<ejs-kanban>`</br>`<ng-template` </br>`#dialogSettingsTemplate`</br>`let-data>`</br>`</ng-template>`</br>`</ejs-kanban>`</br> |
| Enable Editing | **Property**: *allowEditing*</br></br>`<ej-kanban`</br>`editSettings.allowEditing="true">`</br>`</ej-kanban>`</br> | **In default allowed for editing.** |
| Enable Adding | **Property**: *allowAdding*</br></br>`<ej-kanban`</br>`editSettings.allowAdding="true">`</br>`</ej-kanban>`</br> | **Adding applicable using column</br> show add button or</br>public method.** |
| Edit Mode | **Property:** *editMode*</br></br>`<ej-kanban`</br>`editSettings.editMode="dialogtemplate">`</br>`</ej-kanban>`</br> | **Not Applicable** |
| External Form template | **Property**:</br>*externalFormTemplate*</br></br>`<ej-kanban`</br>`editSettings.`</br>`externalFormTemplate=`</br>`"#template">`</br>`</ej-kanban>`</br> | **Not Applicable** |
| External Form Position | **Property**: </br>*externalFormPosition*</br></br>`<ej-kanban`</br>`editSettings.`</br>`externalFormPosition`</br>`="bottom">`</br>`</ej-kanban>`</br> | **Not Applicable** |
| Add Card | **Method**:</br>KanbanEdit.addCard</br>([primaryKey], [card])</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>KanbanEdit</br>.addCard("2",</br>{ Id: 2, Status: Open}); | **Method**:</br></br>*addCard(cardData)*</br>`<ejs-kanban #kanbanObj>`</br>`</ejs-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.addCard({ Id: 2,</br>Status: Open}); |
| Update Card | **Method**: *updateCard(key, data)*</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>KanbanEdit</br>.updateCard(2, { Id: 2,</br>Status: Open}); | **Method**: *updateCard(cardData)*</br></br>`<ejs-kanban #kanbanObj>`</br>`</ejs-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.updateCard({ Id: 2,</br>Status: Open}); |
| Delete Card | **Method**: </br>*KanbanEdit.deleteCard(key)*</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>KanbanEdit</br>.deleteCard(2); | **Method**: deleteCard()</br></br>`<ejs-kanban #kanbanObj>`</br>`</ejs-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.deleteCard(2); |
| Cancel Edit | **Method**: </br>*KanbanEdit.cancelEdit()*</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>KanbanEdit</br>.cancelEdit(); | **Not Available** |
| End Edit | **Method**: </br>*KanbanEdit.endEdit()*</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>KanbanEdit</br>.endEdit(); | **Not Available** |
| Start Edit | **Method**: </br>*KanbanEdit.startEdit</br>($div or key)*</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>KanbanEdit</br>.startEdit(2); | **Method**: </br>*openDialog(action, data)*</br></br>`<ejs-kanban #kanbanObj>`</br>`</ejs-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.openDialog("Add"); |
| Set Validation | **Method**: KanbanEdit</br>.setValidationToField(name, rules)</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>KanbanEdit</br>.setValidationToField</br>("Summary", { required: true }); | **Not Available** |
| Close Dialog | **Not Applicable** | **Method**: *closeDialog()*</br>`<ejs-kanban #kanbanObj>`</br>`</ejs-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.closeDialog(); |
| Triggers before</br>dialog Open | **Not Applicable** | **Event**: *dialogOpen*</br></br>`<ejs-kanban #kanbanObj`</br> `(dialogOpen)="dialogOpen($event)">`</br>`</ejs-kanban>`</br>**TS**</br> dialogOpen(event) {} |
| Triggers when</br>dialog close | **Not Applicable** | **Event**: *dialogClose*</br></br>`<ejs-kanban #kanbanObj`</br> `(dialogClose)="dialogClose($event)">`</br>`</ejs-kanban>`</br>**TS**</br> dialogClose(event) {} |
| Triggers after</br>the card is edited | **Event**: *endEdit*</br></br>`<ej-kanban #kanbanObj`</br> `(endEdit)="endEdit($event)">`</br>`</ej-kanban>`</br>**TS**</br> endEdit(event) {} | **Not Applicable** |
| Triggers after</br>the card is deleted | **Event**: *endDelete*</br></br>`<ej-kanban #kanbanObj`</br> `(endDelete)="endDelete($event)">`</br>`</ej-kanban>`</br>**TS**</br> endDelete(event) {} | **Not Applicable** |
| Triggers before</br>task is edited | **Event**: *beginEdit* </br></br>`<ej-kanban #kanbanObj`</br> `(beginEdit)="beginEdit($event)">`</br>`</ej-kanban>`</br>**TS**</br> beginEdit(event) {} | **Not Applicable** |

## Dialog Editing Fields

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Fields | **Property**: </br>*editItems*</br></br>`<ej-kanban`</br>`[editSettings.editItems]="editItem">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> editItem = [] </br> }; | **Property**: *fields*</br>`<ejs-kanban`</br>`[dialogSettings]='dialogSettings'>`</br></br>`</ejs-kanban>`</br>**TS**</br> public dialogSettings:</br> DialogSettingsModel = {</br>fields: [] }</br> |
| Mapping key | **Property**: *field*</br></br>`<ej-kanban`</br>`[editSettings.editItems]="editItem">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> editItem = [{ </br>field: "Id"}] </br> }; | **Property**: *key*</br></br>`<ejs-kanban`</br>`[dialogSettings]='dialogSettings'>`</br></br>`</ejs-kanban>`</br>**TS**</br> public dialogSettings:</br> DialogSettingsModel = {</br>fields: [{ </br>key: "Id"}] }</br> |
| Label | **Not Applicable** | **Property**: *text*</br></br>`<ejs-kanban`</br>`[dialogSettings]='dialogSettings'>`</br></br>`</ejs-kanban>`</br>**TS**</br> public dialogSettings:</br> DialogSettingsModel = {</br>fields: [{ </br>text: "ID",</br>key: "Id"}] }</br> |
| Type | **Property**: *editType*</br></br>`<ej-kanban`</br>`[editSettings.editItems]="editItem">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> editItem = [{ </br>editType: ej.Kanban</br>.EditingType.String}]}] </br> }; | **Property**: *type*</br></br>`<ejs-kanban`</br>`[dialogSettings]='dialogSettings'>`</br></br>`</ejs-kanban>`</br>**TS**</br> public dialogSettings:</br> DialogSettingsModel = {</br>fields: [{</br>type: "TextBox",</br> key: "Id"}] }</br> |
| Validation Rules | **Property**: *validationRules*</br></br>`<ej-kanban`</br>`[editSettings.editItems]="editItem">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> editItem = [{ </br>validationRules: {</br>required: true} </br> }]}; | **Property**: *validationRules*</br></br>`<ejs-kanban`</br>`[dialogSettings]='dialogSettings'>`</br></br>`</ejs-kanban>`</br>**TS**</br> public dialogSettings:</br> DialogSettingsModel = {</br>fields: [{</br>validationRules: {</br>required: true}}] }</br> |
| Params | **Property**: *editParams*</br></br>`<ej-kanban`</br>`[editSettings.editItems]="editItem">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> editItem = [{ </br>editParams: {</br> decimalPlaces: 2}</br> }]}; | **Not Applicable** |
| Default value | **Property**: *defaultValue*</br></br>`<ej-kanban`</br>`[editSettings.editItems]="editItem">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> editItem = [{ </br>defaultValue: "Open"</br> }]}; | **Not Applicable** |

## Tooltip

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: </br>*tooltipSettings.enable*</br></br>`<ej-kanban`</br>`tooltipSettings.enable="true">`</br>`</ej-kanban>`</br> | **Property**:</br>*enableTooltip*</br></br>`<ejs-kanban [enableTooltip]="true">`</br>`</ejs-kanban>`</br> |
| Template | **Property:** </br>*tooltipSettings.template*</br></br>`<ej-kanban`</br>`tooltipSettings.template="#tooltipTemplate">`</br>`</ej-kanban>`</br> | **Property**: *tooltipTemplate*</br></br>`<ejs-kanban`</br>`tooltipTemplate="#tooltipTemplate">`</br>`</ejs-kanban>`</br> |

## Context Menu

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: *enable*</br></br>`<ej-kanban`</br>`contextMenuSettings.enable="true">`</br>`</ej-kanban>`</br> | **Not Applicable** |
| Menu Items | **Property**: *menuItems*</br></br>`<ej-kanban`</br>`contextMenuSettings.enable`</br>`="true"`</br> `[contextmenusettings.`</br>`menuitems]="menuItem">`</br>`</ej-kanban>`</br>**TS**</br>this.menuItem = ["Move Right"];</br> | **Not Applicable** |
| Disable default Items | **Property**: *disableDefaultItems*</br></br>`<ej-kanban`</br>`contextMenuSettings.enable`</br>`="true"`</br> `contextmenusettings.`</br>`disableDefaultItems=`</br>`[ej.Kanban.MenuItem.MoveLeft]>`</br>`</ej-kanban>`</br> | **Not Applicable** |
| Custom Menu Items | **Property**: *customMenuItems*</br></br>**Text**:`<ej-kanban`</br>`contextMenuSettings.enable`</br>`="true"`</br> `contextmenusettings.`</br>`custommenuitems=`</br>`"customMenuItems"`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> this.customMenuItems =</br> [{ text: "Menu1" </br>}];</br></br>**Target**:</br>`<ej-kanban`</br>`contextMenuSettings.enable`</br>`="true"`</br> `contextmenusettings.`</br>`custommenuitems=`</br>`"customMenuItems"`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> this.customMenuItems =</br> [{ target: ej.Kanban</br>.Target.Header </br>}];</br></br>**Template:**</br>`<ej-kanban`</br>`contextMenuSettings.enable`</br>`="true"`</br> `contextmenusettings.`</br>`custommenuitems=`</br>`"customMenuItems"`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> this.customMenuItems =</br> [{ text: "Hide Column",</br>template: "#template"</br>}]; | **Not Applicable** |
| Triggers when context</br>menu item click | **Event**: *contextClick*</br>`<ej-kanban #kanbanObj`</br> `(contextClick)="contextClick($event)">`</br>`</ej-kanban>`</br>**TS**</br> contextClick(event) {}> | **Not Applicable** |
| Triggers when context</br>menu open | **Event**: *contextOpen*</br>`<ej-kanban #kanbanObj`</br> `(contextOpen)="contextOpen($event)">`</br>`</ej-kanban>`</br>**TS**</br> contextOpen(event) {}> | **Not Applicable** |

## WorkFlows

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: *workFlows*</br></br>`<ej-kanban`</br>`[workflows]="workflow">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> workflow= [{}] </br> }; | **Not Applicable** |
| Key | **Property**: *key*</br></br>`<ej-kanban`</br>`[workflows]="workflow">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> workFlow= [{</br>key: "Order"}]</br> }; | **Not Applicable** |
| Allowed Transition | **Property**: *allowedTransition*</br></br>`<ej-kanban`</br>`[workflows]="workflow">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> workFlow= [{</br>key: "Order", </br>allowedTransitions: "Served"</br>}] }; | **Not Applicable** |

## Filtering

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: *filterSettings*</br></br>`<ej-kanban`</br>`[filterSettings]="filterSetting">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> filterSetting= [] </br> }; | **Not Applicable** |
| Enable | **Property**: *allowFiltering*</br></br>`<ej-kanban`</br>`[allowFiltering]="true">`</br>`</ej-kanban>` | **Not Applicable** |
| Text | **Property**: *text*</br></br>`<ej-kanban`</br>`[filterSettings]="filterSetting">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> filterSetting= [{</br>text: "Janet Issues"</br>}] </br> }; | **Not Applicable** |
| Query | **Property**: *query*</br></br>`<ej-kanban`</br>`[filterSettings]="filterSetting">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> filterSetting= [{</br>query: new ej.Query()</br>.where("Assignee",</br>"equal", "Janet")}]</br>}] </br> }; | **Not Applicable** |
| Description | **Property**: *description*</br></br>`<ej-kanban`</br>`[filterSettings]="filterSetting">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> filterSetting= [{</br>description:"Display Issues"</br>}] </br> }; | **Not Applicable** |
| Filter Cards | **Method**: filterCards(query)</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.KanbanFilter</br>.filterCards(new ej.Query().</br>where("Assignee", "equal",</br> "Janet")); | **Not Applicable** |
| Clear | **Method**: clearFilter()</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.KanbanFilter</br>.clearFilter(); | **Not Applicable** |

## Searching

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: </br>*searchSettings*</br></br>`<ej-kanban`</br>`[searchSettings]="searchSettings">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> searchSettings= [] </br> }; | **Not Applicable** |
| Enable | **Property**: </br>*allowSearching*</br></br>`<ej-kanban`</br>`[allowSearching]="true">`</br>`</ej-kanban>`</br> | **Not Applicable** |
| Fields | **Property**: *fields*</br></br>`<ej-kanban`</br>`[searchSettings]="searchSettings">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> searchSettings= [{</br>fields: ["Summary"]}] </br> }; | **Not Applicable** |
| Key | **Property**: *key*</br></br>`<ej-kanban`</br>`[searchSettings]="searchSettings">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> searchSettings= [{ </br>key: "Task 1"}] </br> }; | **Not Applicable** |
| Operator | **Property**: *operator*</br></br>`<ej-kanban`</br>`[searchSettings]="searchSettings">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> searchSettings= [{</br>operator: "contains"}] </br> }; | **Not Applicable** |
| Ignore Case | **Property**: *ignoreCase*</br></br>`<ej-kanban`</br>`[searchSettings]="searchSettings">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> searchSettings= [{</br>ignoreCase: true}] </br> }; | **Not Applicable** |
| Search Cards | **Method**: </br>*searchCards(searchString)*</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.KanbanFilter</br>.searchCards("Analyze"); | **Not Applicable** |
| Clear | **Method**: *clearSearch()*</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.KanbanFilter</br>clearSearch(); | **Not Applicable** |

## External Drag And Drop

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: </br>*allowExternalDragAndDrop*</br></br>`<ej-kanban`</br>`[allowExternalDragAndDrop]="true">`</br>`</ej-kanban>`</br> | **Not Applicable** |
| Target | **Property**: </br>*externalDropTarget*</br></br>`<ej-kanban`</br>`[cardSettings]="cardSettings">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> cardSettings= {</br>externalDropTarget:</br>"#DroppedKanban" } </br> }; | **Not Applicable** |

## Scrolling

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: *allowScrolling*</br></br>`<ej-kanban`</br>`[allowScrolling]="true">`</br>`</ej-kanban>`</br> | **Not Applicable** |
| height | **Property**: *height*</br></br>`<ej-kanban`</br>`[allowScrolling]="true" [scrollSettings]="scrollSettings">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> scrollSettings= {</br>height: 400 } </br> }; | **Property**: *height*</br></br>`<ejs-kanban`</br>`height=400>`</br></br>`</ejs-kanban>`</br> |
| width | **Property**: *width*</br></br>`<ej-kanban`</br>`[allowScrolling]="true" [scrollSettings]="scrollSettings">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> scrollSettings= {</br>width: 400 } </br> }; | **Property**: *width*</br></br>`<ejs-kanban`</br>`width=400>`</br></br>`</ejs-kanban>`</br> |
| Freeze Swimlane | **Property**: *allowFreezeSwimlane*</br></br>`<ej-kanban`</br>`[allowScrolling]="true" [scrollSettings]="scrollSettings">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> scrollSettings= {</br>allowFreezeSwimlane: true } </br> }; | **Not Applicable** |
| Get Scroll Object | **Method**: </br>*getScrollObject()*</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.</br>getScrollObject(); | **Not Applicable** |

## Card Selection and Hover

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Enable | **Property**: *allowSelection*</br></br>`<ej-kanban`</br>`[allowSelection]="true">`</br>`</ej-kanban>`</br> | **Property**: *cardSettings.</br>selectionType*</br></br>`<ejs-kanban`</br>`[cardSettings]='cardSettings'>`</br>`<ejs-kanban>`</br>**TS**</br> public cardSettings:</br> CardSettingsModel = {</br>selectionType: "Single"</br> }; |
| Type | **Property**: *selectionType*</br></br>`<ej-kanban`</br>`selectionType="single">`</br>`</ej-kanban>`</br>| It is covered under </br>**selectionType** property. |
| Hover | **Property**: *allowHover*</br></br>`<ej-kanban`</br>`[allowHover]="true">`</br>`</ej-kanban>`</br>| **Not Applicable** |
| Clear | **Method**: *clear()*</br></br>`<ej-kanban #kanbanObj>`</br>`</ej-kanban>`</br>**TS**</br>@ViewChild('kanbanObj')</br> kanbanObj: KanbanComponent;</br>kanbanObj.KanbanSelection</br>.clear(); | **Not Applicable** |
| Triggers before</br>card selected | **Event**: *beforeCardSelect*</br></br>`<ej-kanban #kanbanObj`</br> `(beforeCardSelect)=`</br>`"beforeCardSelect($event)">`</br>`</ej-kanban>`</br>**TS**</br> beforeCardSelect(event) {}></br></br>**Event**: *cardSelecting* </br>`<ej-kanban #kanbanObj`</br> `(cardSelecting)=`</br>`"cardSelecting($event)">`</br>`</ej-kanban>`</br>**TS**</br> cardSelecting(event) {}> | **Not Applicable** |
| Triggers after</br>card selected | **Event**: *cardSelect*</br></br>`<ej-kanban #kanbanObj`</br> `(cardSelect)=`</br>`"cardSelect($event)">`</br>`</ej-kanban>`</br>**TS**</br> cardSelect(event) {}> | **Not Applicable** |

## Toolbar

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Custom Toolbar | **Property**: </br>*customToolbarItems.template*</br></br>`<ej-kanban`</br>`[customToolbarItems]="customToolbarItems">`</br>`</ej-kanban>`</br>**TS**</br>export class AppComponent { </br> customToolbarItems= {</br>template: "#Delete"</br>} </br> }; | **Not Applicable** |
| Triggers toolbar</br>item click | **Event**: *toolbarClick*</br></br>`<ej-kanban #kanbanObj`</br> `(toolbarClick)="toolbarClick($event)">`</br>`</ej-kanban>`</br>**TS**</br> toolbarClick(event) {}> | **Not Applicable** |

## Responsive

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: *isResponsive*</br></br>`<ej-kanban`</br>`[isResponsive]="true">`</br>`</ej-kanban>` | **Not Applicable** |
| Minimum width | **Property**: *minWidth*</br></br>`<ej-kanban`</br>`[isResponsive]="true"`</br>`minWidth='400'>`</br>`</ej-kanban>` | **Not Applicable** |

## State Persistence

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Persistence | **Not Applicable** | **Property**:</br>*enablePersistence*</br></br>`<ejs-kanban [enablePersistence]="true">`</br>`</ejs-kanban>`</br> |

## Right to Left - RTL

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| default | **Property**: *enableRTL*</br></br>`<ej-kanban`</br>`[enableRTL]="true">`</br>`</ej-kanban>` | **Property**: *enableRtl*</br></br>`<ejs-kanban [enableRtl]="true">`</br>`</ejs-kanban>`</br> |
