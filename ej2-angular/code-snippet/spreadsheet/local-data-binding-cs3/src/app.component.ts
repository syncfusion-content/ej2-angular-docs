import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, OnInit,ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { L10n } from '@syncfusion/ej2-base';
import { data } from './datasource';

L10n.load({
      'ar-AE': {
        'spreadsheet': {
            "File": "ملف",
            "Home": "هم",
            "Insert": "إدراج",
            "Formulas": "الصيغ",
            "View": "معاينة",
            "Data": "البيانات",
            "Cut": "قطع",
            "Copy": "نسخ",
            "Paste": "معجون",
            "PasteSpecial": "لصق خاص",
            "All": "جميع",
            "Values": "القيم",
            "Formats": "شكل",
            "Font": "الخط",
            "FontSize": "حجم الخط",
            "Bold": "جريء",
            "Italic": "مائل",
            "Underline": "أكد",
            "Strikethrough": "يتوسطه",
            "TextColor": "لون الخط",
            "FillColor": "لون التعبئة",
            "HorizontalAlignment": "المحاذاة الأفقية",
            "AlignLeft": "محاذاة إلى اليسار",
            "AlignCenter": "مركز",
            "AlignRight": "محاذاة إلى اليمين",
            "VerticalAlignment": "محاذاة عمودية",
            "AlignTop": "محاذاة أعلى",
            "AlignMiddle": "محاذاة الأوسط",
            "AlignBottom": "أسفل محاذاة",
            "InsertFunction": "إدراج وظيفة",
            "Delete": "حذف",
            "Rename": "إعادة تسمية",
            "Hide": "إخفاء",
            "Unhide": "ظهار"
        }
    }
});

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: "<ejs-spreadsheet #spreadsheet locale='ar-AE' [enableRtl]='true'> <e-sheets> <e-sheet> <e-ranges> <e-range [dataSource]='data'></e-range></e-ranges><e-columns><e-column [width]=90></e-column><e-column [width]=100></e-column><e-column [width]=96></e-column><e-column [width]=120></e-column><e-column [width]=130></e-column><e-column [width]=120></e-column></e-columns></e-sheet></e-sheets></ejs-spreadsheet>"
})
export class AppComponent implements OnInit {
    public data?: object[];
    @ViewChild('spreadsheet') public spreadsheetObj?: SpreadsheetComponent;
    ngOnInit(): void {
        this.data = data;
    }
  };



