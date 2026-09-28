import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule, GridComponent, Inject } from '@syncfusion/ej2-angular-grids';
import { DomVirtualization, Sort, Filter, Toolbar } from '@syncfusion/ej2-angular-grids';
import { DataManager, UrlAdaptor, Query } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GridModule],
  templateUrl: './app.component.html',
  styleUrls: ['./styles.css'],
  providers: [DomVirtualization, Sort, Filter, Toolbar]
})
export class AppComponent implements OnInit {
  public dataManager: DataManager;
  public query: Query;

  ngOnInit(): void {
    this.dataManager = new DataManager({
      url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
      adaptor: new UrlAdaptor()
    });
    this.query = new Query().addParams('dataCount', '100000');
  }
}
