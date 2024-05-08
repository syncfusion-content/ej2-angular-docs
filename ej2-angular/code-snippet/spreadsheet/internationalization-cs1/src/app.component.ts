import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, OnInit,ViewChild } from '@angular/core';
import { L10n, loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { defaultData } from './datasource';

L10n.load({
    'fr-CH': {
        'spreadsheet': {
            'File': 'Fichier',
            'Home': 'Accueil',
            'Insert': 'Insérer',
            'Formulas': 'Formules',
            'Data': 'Les données',
            'View': 'Vue',
            'Cut': 'Coupe',
            'Copy': 'Copie',
            'Paste': 'Pâte',
            'PasteSpecial': 'Pâte spéciale',
            'All': 'Tous les',
            'Values': 'Valeurs',
            'Formats': 'Les formats',
            'Font': 'fonte',
            'FontSize': 'Taille de police',
            'Bold': 'Audacieux',
            'Italic': 'Italique',
            'Underline': 'Souligner',
            'Strikethrough': 'Barré',
            'TextColor': 'Couleur du texte',
            'FillColor': 'La couleur de remplissage',
            'HorizontalAlignment': 'Alignement horizontal',
            'AlignLeft': 'Alignez à gauche',
            'AlignCenter': 'centre',
            'AlignRight': 'Aligner à droite',
            'VerticalAlignment': 'Alignement vertical',
            'AlignTop': 'Aligner en haut',
            'AlignMiddle': 'Aligner le milieu',
            'AlignBottom': 'Aligner le bas',
            'InsertFunction': 'Insérer une fonction',
            'Delete': 'Effacer',
            'Rename': 'Rebaptiser',
            'Hide': 'Cacher',
            'Unhide': 'Démasquer',
            'NumberFormat': 'Nombre Format',
        }
    }
});

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: "<ejs-spreadsheet #spreadsheet locale='fr-CH' (created)='created()'> <e-sheets> <e-sheet> <e-ranges> <e-range [dataSource]='defaultData'></e-range></e-ranges><e-columns><e-column [width]=90></e-column><e-column [width]=100></e-column><e-column [width]=96></e-column><e-column [width]=120></e-column><e-column [width]=130></e-column><e-column [width]=120></e-column></e-columns></e-sheet></e-sheets></ejs-spreadsheet>"
})

export class AppComponent implements OnInit {
    public data?: object[];
    @ViewChild('spreadsheet') public spreadsheetObj?: SpreadsheetComponent;
    defaultData?: Object[];
    ngOnInit(): void {
        this.defaultData = defaultData;
        setCulture('fr-CH');
        setCurrencyCode('EUR');

        loadCldr('./currencies.json',
            './numbers.json',
            './ca-gregorian.json',
            './timeZoneNames.json',
            './numberingSystems.json');
    }
    created(){
         //Applies cell and number formatting to specified range of the active sheet
            this.spreadsheetObj?.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
            this.spreadsheetObj?.numberFormat('$#,##0.00', 'F2:F11');
    };
};


