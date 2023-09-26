

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- Target element to DropDownButton . -->
               <div id="target" style='border: 1px solid #999;'>
               <!-- To create table. -->
               <table>
               <caption style='height: 18px; background-color: #e0e0e0;'><b>Insert Table</b></caption>
                    <tr class='e-row'>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                    </tr>
                    <tr class='e-row'>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                    </tr>
                    <tr class='e-row'>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                    </tr>
                    <tr class='e-row'>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                    </tr>
                    <tr class='e-row'>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                    </tr>
                    <tr class='e-row'>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                        <td class='e-data'></td>
                    </tr>
                </table>
               </div>
               <!-- To render DropDownButton. -->
               <button ejs-dropdownbutton target='#target' content='Table' iconCss='e-icons e-table' iconPosition='Top' cssClass='e-vertical'></button>`
})

export class AppComponent {
}



