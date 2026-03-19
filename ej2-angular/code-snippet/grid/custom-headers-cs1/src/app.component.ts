import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, GridModule } from '@syncfusion/ej2-angular-grids';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

const SERVICE_URI: string ='https://services.syncfusion.com/angular/production/';
class CustomAdaptor extends WebApiAdaptor {
  override beforeSend(args:any, xhr:any, settings:any) {
    xhr.withCredentials = true;
    super.beforeSend(args, xhr, settings);
    xhr.headers.set('Syncfusion', true); // Assign custom headers here.
  }
}
@Component({
  imports: [ GridModule],
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.template.html'
})

export class AppComponent implements OnInit {
  @ViewChild('grid')
  public grid?: GridComponent;
  public data?: DataManager;
  ngOnInit(): void {
    this.data = new DataManager({
    url: SERVICE_URI + 'api/Orders',
    adaptor: new CustomAdaptor(),
    });
  }
}
