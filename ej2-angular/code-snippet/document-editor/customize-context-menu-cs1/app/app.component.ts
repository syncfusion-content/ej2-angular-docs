

import { Component, OnInit,ViewChild } from '@angular/core';
import { ToolbarService ,DocumentEditorContainerComponent, CustomContentMenuEventArgs} from '@syncfusion/ej2-angular-documenteditor';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
@Component({
      selector: 'app-container',
      // specifies the template string for the DocumentEditorContainer component
      template: `<ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" height="600px" style="display:block" [documentEditorSettings]= "fontFamilies" [enableToolbar]=true (created)="onCreate()"> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService]
})
export class AppComponent implements OnInit {
    @ViewChild('documenteditor_default')
    public container: DocumentEditorContainerComponent;
    public fontFamilies={fontFamilies :['Algerian', 'Arial', 'Calibri', 'Cambria', 'Windings']};
    ngOnInit(): void {
    }
    onCreate() {
     // creating Custom Options
     let menuItems: MenuItemModel[] = [
        {
            text: 'Search In Google',
            id: 'search_in_google',
            iconCss: 'e-icons e-de-ctnr-find'
        }];
    // adding Custom Options
    this.container.documentEditor.contextMenu.addCustomMenu(menuItems, false);
    // custom Options Select Event
    this.container.documentEditor.customContextMenuSelect = (args: any): void => {
        // custom Options Functionality
        let id: string = this.container.documentEditor.element.id;
        switch (args.id) {
            case id + 'search_in_google':
                let searchContent: string = this.container.documentEditor.selection.text;
                if (!this.container.documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
                    window.open('http://google.com/search?q=' + searchContent);
                }
                break;
        }
    };
    //  custom options hide/show functionality
    this.container.documentEditor.customContextMenuBeforeOpen = (args: any): void => {
        let search: any = document.getElementById(args.ids[0]);
        search.style.display = 'none';
        let searchContent: string = this.container.documentEditor.selection.text;
        if (!this.container.documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
            search.style.display = 'block';
        }
    };
    }
}


