

import { Component, ViewChild } from '@angular/core';
import { ListView } from '@syncfusion/ej2-lists';

@Component({
    selector: 'app-container',
    template: `
        <div style="margin: 50px;">
            <!--element which is going to render the Card-->
            <div tabindex="0" class="e-card" id="basic">
                <div class="e-card-title">To-Do List</div>
                <div class="e-card-separator"></div>
                <div class="e-card-content">
                    <div id='element'></div>
                </div>
            </div>
        </div>       `
})

export class AppComponent {
    @ViewChild('element') element: any;

ngAfterViewInit () {
//define the array of JSON
let todoList: { [key: string]: Object }[] = [
    {  todoList: 'Pay Bills' },
    {  todoList: 'Call Chris' },
    {  todoList: 'Meet Andrew' },
    {  todoList: 'Visit Manager' },
    {  todoList: 'Customer Meeting' },
];

//Initialize ListView component
let listviewInstance: ListView = new ListView({
    dataSource: todoList,
    //map the appropriate columns to fields property
    fields: { text: 'todoList' },
    showCheckBox: true,
});

//Render initialized ListView
listviewInstance.appendTo("#element");
}
}


