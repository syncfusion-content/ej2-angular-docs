


import { Component } from '@angular/core';
import { L10n } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `<ejs-filemanager id='file-manager' [ajaxSettings]='ajaxSettings' [locale]='locale'>
    </ejs-filemanager>`
})
export class AppComponent {
    public ajaxSettings?: object;
    public locale?: string;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
    public ngOnInit(): void {
    L10n.load({
    'de': {
        'filemanager': {
            "NewFolder": "Neuer Ordner",
            "Upload": "Hochladen",
            "Delete": "Löschen",
            "Rename": "Umbenennen",
            "Download": "Herunterladen",
            "Cut": "Schnitt",
            "Copy": "Kopieren",
            "Paste": "Einfügen",
            "SortBy": "Sortiere nach",
            "Refresh": "Aktualisierung",
            "Item-Selection": "Artikel ausgewählt",
            "Items-Selection": "Elemente ausgewählt",
            "View": "Aussicht",
            "Details": "Einzelheiten",
            "SelectAll": "Wählen Sie Alle",
            "Open": "Öffnen",
            "Tooltip-NewFolder": "Neuer Ordner",
            "Tooltip-Upload": "Hochladen",
            "Tooltip-Delete": "Löschen",
            "Tooltip-Rename": "Umbenennen",
            "Tooltip-Download": "Herunterladen",
            "Tooltip-Cut": "Schnitt",
            "Tooltip-Copy": "Kopieren",
            "Tooltip-Paste": "Einfügen",
            "Tooltip-SortBy": "Sortiere nach",
            "Tooltip-Refresh": "Aktualisierung",
            "Tooltip-Selection": "Auswahl aufheben",
            "Tooltip-View": "Aussicht",
            "Tooltip-Details": "Einzelheiten",
            "Tooltip-SelectAll": "Wählen Sie Alle",
            "Name": "Name",
            "Size": "Größe",
            "DateModified": "Geändert",
            "DateCreated": "Datum erstellt",
            "Path": "Pfad",
            "Modified": "Geändert",
            "Created": "Erstellt",
            "Location": "Ort",
            "Type": "Art",
            "Permission": "Genehmigung",
            "Ascending": "Aufsteigend",
            "Descending": "Absteigend",
            "None": "Keiner",
            "View-LargeIcons": "Große Icons",
            "View-Details": "Einzelheiten",
            "Search": "Suche",
            "Button-Ok": "OK",
            "Button-Cancel": "Stornieren",
            "Button-Yes": "Ja",
            "Button-No": "Nein",
            "Button-Create": "Erstellen",
            "Button-Save": "Sparen",
            "Header-NewFolder": "Mappe",
            "Content-NewFolder": "Geben Sie Ihren Ordnernamen ein",
            "Header-Rename": "Umbenennen",
            "Content-Rename": "Geben Sie Ihren neuen Namen ein",
            "Header-Rename-Confirmation": "Bestätigung umbenennen",
            "Content-Rename-Confirmation": "Wenn Sie eine Dateinamenerweiterung ändern, wird die Datei möglicherweise instabil. Möchten Sie sie wirklich ändern?",
            "Header-Delete": "Datei löschen",
            "Content-Delete": "Möchten Sie diese Datei wirklich löschen?",
            "Header-Multiple-Delete": "Mehrere Dateien löschen",
            "Content-Multiple-Delete": "Möchten Sie diese {0} Dateien wirklich löschen?",
            "Header-Folder-Delete": "Lösche Ordner",
            "Content-Folder-Delete": "Möchten Sie diesen Ordner wirklich löschen?",
            "Header-Duplicate": "Datei / Ordner existiert",
            "Content-Duplicate": "{0} existiert bereits. Möchten Sie umbenennen und einfügen?",
            "Header-Upload": "Daten hochladen",
            "Error": "Error",
            "Validation-Empty": "Der Datei - oder Ordnername darf nicht leer sein.",
            "Validation-Invalid": "Der Datei- oder Ordnername {0} enthält ungültige Zeichen. Bitte verwenden Sie einen anderen Namen. Gültige Datei- oder Ordnernamen dürfen nicht mit einem Punkt oder Leerzeichen enden und keines der folgenden Zeichen enthalten: \\ /: *? \" < > | ",
            "Validation-NewFolder-Exists": "Eine Datei oder ein Ordner mit dem Namen {0} existiert bereits.",
            "Validation-Rename-Exists": "{0} kann nicht in {1} umbenannt werden: Ziel existiert bereits.",
            "Folder-Empty": "Dieser Ordner ist leer",
            "File-Upload": "Dateien zum Hochladen hierher ziehen",
            "Search-Empty": "Keine Ergebnisse gefunden",
            "Search-Key": "Versuchen Sie es mit anderen Stichwörtern",
            "Filter-Empty": "keine Ergebnisse gefunden",
            "Filter-Key" : "Versuchen Sie es mit einem anderen Filter",
            "Sub-Folder-Error": "Der Zielordner ist der Unterordner des Quellordners.",
            "Same-Folder-Error": "Der Zielordner ist derselbe wie der Quellordner.",
            "Access-Denied": "Zugriff verweigert",
            "Access-Details": "Sie haben keine Berechtigung, auf diesen Ordner zuzugreifen.",
            "Header-Retry": "Die Datei existiert bereits",
            "Content-Retry": "In diesem Ordner ist bereits eine Datei mit diesem Namen vorhanden. Was möchten Sie tun?",
            "Button-Keep-Both": "Behalte beides",
            "Button-Replace": "Ersetzen",
            "Button-Skip": "Überspringen",
            "ApplyAll-Label": "Mache das für alle aktuellen Artikel",
            "KB": "KB",
            "Access-Message": "{0} ist nicht zugänglich. Sie benötigen die Berechtigung, um die Aktion {1} auszuführen.",
            "Network-Error": "NetworkError: Fehler beim Senden auf XMLHTTPRequest: Fehler beim Laden",
            "Server-Error": "ServerError: Ungültige Antwort von"
        }
    }
    });
    this.ajaxSettings = {
        url: this.hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
        uploadUrl: this.hostUrl + 'api/FileManager/Upload',
        downloadUrl: this.hostUrl + 'api/FileManager/Download'
    };
    this.locale =  'de';
    }
}



