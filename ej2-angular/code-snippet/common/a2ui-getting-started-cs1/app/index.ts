import {
  ChangeDetectionStrategy,
  Component,
  signal,
} from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { SyncfusionA2UIProvider } from '@syncfusion/ej2-angular-a2ui';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [ButtonComponent, SyncfusionA2UIProvider],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './app.css',
  template: `
    @if (!messages()) {
      <div class="a2ui-chat">
        <button ejs-button [isPrimary]="true" (click)="renderGrid()">
          Render Employee Grid
        </button>
      </div>
    }

    @if (messages(); as msgs) {
      <syncfusion-a2ui-provider
        [messages]="msgs"
        [dataContextPath]="'/'"
        (onError)="onBoundaryError($event)"
      />
    }
  `,
})
export class AppComponent {
  protected readonly messages = signal<unknown[] | null>(null);

  protected renderGrid(): void {
    this.messages.set([
      {
        version: 'v0.9',
        createSurface: {
          surfaceId: 'surface-1',
          catalogId: 'syncfusion-a2ui-catalog',
        },
      },
      {
        version: 'v0.9',
        updateComponents: {
          surfaceId: 'surface-1',
          components: [
            { id: 'root', component: 'Column', children: ['grid1'] },
            {
              id: 'grid1',
              component: 'SyncfusionGrid',
              width: '100%',
              height: '320px',
              dataSource: { path: '/rows' },
              allowSorting: true,
              columns: [
                { field: 'id', headerText: 'Employee ID', width: 140 },
                { field: 'name', headerText: 'Name', width: 180 },
                { field: 'department', headerText: 'Department', width: 160 },
              ],
            },
          ],
        },
      },
      {
        version: 'v0.9',
        updateDataModel: {
          surfaceId: 'surface-1',
          path: '/rows',
          value: [
            { id: 'EMP001', name: 'Emma Johnson', department: 'Engineering' },
            { id: 'EMP002', name: 'James Wilson', department: 'Sales' },
          ],
        },
      },
    ]);
  }

  protected onBoundaryError(event: Event): void {
    const detail = (event as CustomEvent<unknown>).detail;
    const message =
      detail instanceof Error
        ? detail.message
        : typeof detail === 'string'
          ? detail
          : (event as ErrorEvent).message ?? event.type;
    console.error('[A2UI] surface render error:', message);
  }
}