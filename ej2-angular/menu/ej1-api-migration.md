---
layout: post
title: Ej1 api migration in Angular Menu component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Menu 
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in Angular Menu component

This guide helps you migrate from Essential<sup style="font-size:70%">&reg;</sup> JS 1 (EJ1) to Essential<sup style="font-size:70%">&reg;</sup> JS 2 (EJ2) for the Angular Menu component. It outlines deprecated features, renamed APIs, and new equivalents to ensure a smooth transition.

## Properties

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Animation type on hover or click on the menu items | **Property:** *animationType* <br/><br/> `<ej-menu id="menu" [animationType]="animationType"></ej-menu>` <br/> animationType: any = ej.AnimationType.Default; | Not applicable |
| Context menu target  | **Property:** *contextMenuTarget* <br/><br/> `<ej-menu id="menu" contextMenuTarget="#target"></ej-menu>` | Not applicable |
| Container element for submenu’s collision | **Property:** *container* <br/><br/> `<ej-menu id="menu" contextMenuTarget="#target" container="#target"></ej-menu>` | Not applicable |
| Menu items | Not applicable | **Property:** *items* <br/><br/> `<ejs-menu id="menu" [items]="menuItems"></ejs-menu>` <br/> menuItems: MenuItemModel[] = [<br/> &nbsp; {<br/> &nbsp; &nbsp; text: "File", id: "file_id"<br/> &nbsp; },<br/> &nbsp; { <br/> &nbsp; &nbsp; text: "Edit", <br/> &nbsp; &nbsp; id: "edit_id", <br/> &nbsp; &nbsp; items: [ <br/> &nbsp; &nbsp; &nbsp; { text" "Cut", iconCss: "e-icons e-cut" }, <br/> &nbsp; &nbsp; &nbsp; { text: "Copy", iconCss: "e-icons e-copy" }, <br/> &nbsp; &nbsp; &nbsp; { text: "Paste", iconCss: "e-icons e-paste" } <br/> &nbsp; &nbsp; ] <br/> &nbsp; }, <br/> &nbsp; { <br/> &nbsp; &nbsp;  text: "view", id: "view_id", url: "#" <br/> &nbsp; }, <br/> &nbsp; {<br/> &nbsp; &nbsp; text: "Help", id: "help_id" <br/> &nbsp; } <br/> ]; |
| Adding custom class  | **Property:** *cssClass* <br/><br/> `<ej-menu id="menu" cssClass="custom-class"></ej-menu>` | **Property:** *cssClass* <br/><br/> `<ejs-menu id="menu" cssClass="custom-class" [items]="menuItems"></ejs-menu>` |
| Enables or disables the animation on hover or click on the menu items | **Property:** *enableAnimation* <br/><br/> `<ej-menu id="menu" [enableAnimation]="true"></ej-menu>` | Not applicable |
| Animation settings | Not applicable | **Property:** *animationSettings* <br/><br/>  `<ejs-menu id="menu" [animationSettings]="animation" [items]="menuItems"></ejs-menu>` <br/> animation: MenuAnimationSettings = { effect: "FadeIn" } |
| Root menu items to be aligned center in horizontal menu | **Property:** *enableCenterAlign* <br/><br/> `<ej-menu id="menu" [enableCenterAlign]="true"></ej-menu>` | Not applicable |
| Disabled state | **Property:** enabled <br/><br/> `<ej-menu id="menu" [enabled]="false"></ej-menu>` | **Property:** disabled <br/><br/> `<ejs-menu id="menu" [disabled]="true" [items]="menuItems"></ejs-menu>` |
| RTL  | **Property:** enableRTL <br/><br/> `<ej-menu id="menu" [enableRTL]="true"></ej-menu>` | **Property:** enableRtl <br/><br/> `<ejs-menu id="menu" [items]="menuItems" [enableRtl]="true"></ejs-menu>` |
| Enables/Disables the separator  | **Property:** enableSeparator <br/><br/> `<ej-menu id="menu" [enableSeparator]="false"></ej-menu>` | Not applicable |
| Menu Type | **Property:** menuType <br/><br/> `<ej-menu id="menu" [menuType]="menuType"></ej-menu>` <br/> menuType: any = ej.MenuType.ContextMenu; | Not applicable |
| Exclude target for context menu  | **Property:** excludeTarget <br/><br/> `<ej-menu id="menu" [menuType]="menuType" contextMenuTarget="#target" excludeTarget=".inner"></ej-menu>` | Not applicable |
| Fields | **Property:** *fields* <br/><br/> `<ej-menu id="menu" [field]="menuFields">/ej-menu>` <br/> menuFields: Object = { dataSource: this.data, parentId: "parentId", id: "id", text: "text" }; | **Property:** *fields* <br/><br/> `<ejs-menu id="menu" disabled="true" [items]="menuItems" [fields]="menuFields"></ejs-menu>` <br/> menuFields: Object = { text: ["text"], children: ["children"] }; |
| Height | **Property:** *height* <br/><br/> `<ej-menu id="menu" [height]="50"></ej-menu>` | Not applicable |
| Width | **Property:** *width* <br/><br/> `<ej-menu id="menu" [width]="800"></ej-menu>` | Not applicable |
| HTML Attributes | **Property:** *htmlAttributes* <br/><br/> `<ej-menu id="menu" [htmlAttribute]="attributes"></ej-menu>` | Not applicable |
| Responsive | **Property:** *isResponsive* <br/><br/> `<ej-menu id="menu" [isResponsive]="true"></ej-menu>` | Not applicable |
| Show item on click  | **Property:** *openOnClick* <br/><br/> `<ej-menu id="menu" [openOnClick]="true"></ej-menu>` | **Property:** *showItemOnClick* <br/><br/> `<ejs-menu id="menu" [showItemOnClick]="true" [items]="menuItems"></ejs-menu>` |
| Orientation  | **Property:** *orientation* <br/><br/> `<ej-menu id="menu" orientation="vertical"></ej-menu>` | **Property:** *orientation* <br/><br/> `<ejs-menu id="menu" orientation="Vertical" [items]="menuItems"></ejs-menu>` |
| Show root level arrows | **Property:** *showRootLevelArrows* <br/><br/> `<ej-menu id="menu" [showRootLevelArrows]="false"></ej-menu>` | Not applicable |
| Show sub level arrows | **Property:** *showSubLevelArrows* <br/><br/> `<ej-menu id="menu" [showSubLevelArrows]="false"></ej-menu>` | Not applicable |
| Sub menu direction | **Property:** *subMenuDirection* <br/><br/> `<ej-menu id="menu" [subMenuDirection]="direction"></ej-menu>` <br/> direction: any = ej.Direction.Left; | Not applicable |
| Title | **Property:** *titleText* <br/><br/> `<ej-menu id="menu" titleText="Title of the Menu"></ej-menu>` | Not applicable |
| Template  | Not applicable | **Property:** *template* <br/><br/> `<ejs-menu id="menu" [items]="data" [fields]="menuFields" template="#menuTemplate"></ejs-menu>` |
| Pop up menu height | **Property:** *overflowHeight* <br/><br/> `<ej-menu id="menu" [overflowHeight]="200"></ej-menu>` | Not applicable |

## Methods

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Disable Method | **Method:** *disable* <br/><br/> `<ej-menu id="menu" #menu [fields.dataSource]="data"></ej-menu>` <br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.disable(); | Not applicable |
| Disable menu items | **Method:** *disableItem* <br/><br/> `<ej-menu id="menu" #menu [fields.dataSource]="data"></ej-menu>`<br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.disableItem("File");| **Method:** *enableItems* <br/><br/> `<ejs-menu id="menu" #menu [items]="menuItems"></ejs-menu>` <br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.enableItems("File", false) |
| Disable menu items by ID | **Method:** *disableItemByID* <br/><br/> `<ej-menu id="menu" #menu [fields.dataSource]="data"></ej-menu>`<br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.disableItemByID("file_id");| **Method:** *enableItems* <br/><br/> `<ejs-menu id="menu" #menu [items]="menuItems"></ejs-menu>` <br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.enableItems("file_id", false, true) |
| Enable Method | **Method:** *enable* <br/><br/> `<ej-menu id="menu" #menu [fields.dataSource]="data"></ej-menu>` <br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.enable(); | Not applicable |
| Enable menu items | **Method:** *enableItem* <br/><br/> `<ej-menu id="menu" #menu [fields.dataSource]="data"></ej-menu>`<br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.enableItem("File"); | **Method:** *enableItems* <br/><br/> `<ejs-menu id="menu" #menu [items]="menuItems"></ejs-menu>` <br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.enableItems("File", true); |
| Enable menu items by ID | **Method:** *enableItemByID* <br/><br/> `<ej-menu id="menu" #menu [fields.dataSource]="data"></ej-menu>`<br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.enableItemByID("file_id"); | **Method:** *enableItems* <br/><br/> `<ejs-menu id="menu" #menu [items]="menuItems"></ejs-menu>` <br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.enableItems("file_id", true, true); |
| Hide Method | **Method:** *hide* <br/><br/> `<ej-menu id="menu" #menu [fields.dataSource]="data"></ej-menu>`<br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.hide();| Not applicable |
| Hide menu items | **Method:** *hideItems* <br/><br/> `<ej-menu id="menu" #menu [fields.dataSource]="data"></ej-menu>`<br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.hideItems(["#help_id","#edit_id"]); | **Method:** *hideItems* <br/><br/> `<ejs-menu id="menu" #menu [items]="menuItems"></ejs-menu>` <br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.hideItems(["edit_id","help_id"], true); |
| Insert menu items | **Method:** *insert* <br/><br/> `<ej-menu id="menu" #menu [fields.dataSource]="data"></ej-menu>`<br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.insert([{ id: "view_id", text: "View" }], "#edit_id"); | Not applicable |
| Insert menu items after the specified menu item | **Method:** *insertAfter* <br/><br/> `<ej-menu id="menu" #menu [fields.dataSource]="data"></ej-menu>`<br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.insertAfter([{ id: "view_id", text: "View" }], "#edit_id");| **Method:** *insertAfter* <br/><br/> `<ejs-menu id="menu" #menu [items]="menuItems"></ejs-menu>` <br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.insertAfter([{ id: "view_id", text: "View" }], "Edit"); |
| Insert menu items before the specified menu item | **Method:** *insertBefore* <br/><br/> `<ej-menu id="menu" #menu [fields.dataSource]="data"></ej-menu>`<br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.insertBefore([{ id: "view_id", text: "View" }], "#help_id");| **Method:** *insertBefore* <br/><br/> `<ejs-menu id="menu" #menu [items]="menuItems"></ejs-menu>` <br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.insertBefore([{ id: "view_id", text: "View" }], "Help"); |
| Remove menu items | **Method:** *remove* <br/><br/> `<ej-menu id="menu" #menu [fields.dataSource]="data"></ej-menu>`<br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.remove(["#Edit"]);| **Method:** *removeItems* <br/><br/> `<ejs-menu id="menu" #menu [items]="menuItems"></ejs-menu>` <br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.removeItems(["Edit"]); |
| To show menu | **Method:** *show* <br/><br/> `<ej-menu id="menu" #menu [fields.dataSource]="data"></ej-menu>`<br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.show(); | Not applicable |
| Destroy method | **Method:** *destroy* <br/><br/> `<ej-menu id="menu" #menu [fields.dataSource]="data"></ej-menu>`<br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.destroy(); | **Method:** *destroy* <br/><br/> `<ejs-menu id="menu" #menu [items]="menuItems"></ejs-menu>` <br/> @ViewChild('menu') <br/> public menu: MenuComponent; <br/> this.menu.destroy(); |

## Events

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Triggers before opening the menu | **Events:** *beforeOpen* <br/><br/> `<ej-menu id="menu" (beforeOpen)="beforeOpen($event)"></ej-menu>` <br/> beforeOpen(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } | **Events:** *beforeOpen* <br/><br/> `<ejs-menu id="menu" [items]="menuItems" (beforeOpen)="beforeOpen($event)"></ejs-menu>` <br/> beforeOpen(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } |
| Triggers before closing the menu | Not applicable | **Events:** *beforeClose* <br/><br/> `<ejs-menu id="menu" [items]="menuItems" (beforeClose)="beforeClose($event)"></ejs-menu>` <br/> beforeClose(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } |
| Triggers before rendering each menu item | Not applicable | **Events:** *beforeItemRender* <br/><br/> `<ejs-menu id="menu" [items]="menuItems" (beforeItemRender)="beforeItemRender($event)"></ejs-menu>` <br/> beforeItemRender(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } |
| Triggers while selecting the menu item | **Events:** *click* <br/><br/> `<ej-menu id="menu" (click)="click($event)"></ej-menu>` <br/> click(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } | **Events:** *select* <br/><br/> `<ejs-menu id="menu" [items]="menuItems" (select)="select($event)"></ejs-menu>` <br/> select(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } |
| Triggers after closing the menu | **Events:** *close* <br/><br/> `<ej-menu id="menu" (close)="close($event)"></ej-menu>` <br/> close(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } | **Events:** *onClose* <br/><br/> `<ejs-menu id="menu" [items]="menuItems" (onClose)="onClose($event)"></ejs-menu>` <br/> onClose(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } |
| Triggers after opening the menu | **Events:** *open* <br/><br/> `<ej-menu id="menu" (open)="open($event)"></ej-menu>` <br/> open(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } | **Events:** *onOpen* <br/><br/> `<ejs-menu id="menu" [items]="menuItems" (onOpen)="onOpen($event)"></ejs-menu>` <br/> onOpen(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } |
| Triggers once the component rendering is completed | **Events:** *create* <br/><br/> `<ej-menu id="menu" (create)="create($event)"></ej-menu>` <br/> create(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } | **Events:** *created* <br/><br/> `<ejs-menu id="menu" [items]="menuItems" (created)="created()"></ejs-menu>` <br/> created() { <br/> &nbsp; &nbsp; /** code block */ <br/> } |
| Triggers once the component is destroyed | **Events:** *destroy* <br/><br/> `<ej-menu id="menu" (destroy)="destroy($event)"></ej-menu>` <br/> destroy(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } | Not applicable |
| Triggers when key down on menu items | **Events:** *keydown* <br/><br/> `<ej-menu id="menu" (keydown)="keydown($event)"></ej-menu>` <br/> keydown(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } | Not applicable |
| Triggers when mouse out from menu items | **Events:** *mouseout* <br/><br/> `<ej-menu id="menu" (mouseout)="mouseout($event)"></ej-menu>` <br/> mouseout(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } | Not applicable |
| Triggers when mouse over the Menu items | **Events:** *mouseover* <br/><br/> `<ej-menu id="menu" (mouseover)="mouseover($event)"></ej-menu>` <br/> mouseover(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } | Not applicable |
| Triggers when overflow popup menu opens | **Events:** *overflowOpen* <br/><br/> `<ej-menu id="menu" (overflowOpen)="overflowOpen($event)"></ej-menu>` <br/> overflowOpen(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } | Not applicable |
| Triggers when overflow popup menu closes | **Events:** *overflowClose* <br/><br/> `<ej-menu id="menu" (overflowClose)="overflowClose($event)"></ej-menu>` <br/> overflowClose(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } | Not applicable |