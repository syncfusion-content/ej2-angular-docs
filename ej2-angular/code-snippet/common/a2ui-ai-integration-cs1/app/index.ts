import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { SyncfusionA2UIProvider } from '@syncfusion/ej2-angular-a2ui';
import { A2uiRendererService } from '@a2ui/angular/v0_9';

import { extractA2uiEnvelope, postAgentEnvelope } from './agent';

/** Mirrors `A2uiSurfaceLike` from the Syncfusion A2UI provider. */
interface SurfaceLike {
  id: string;
  [key: string]: unknown;
}

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [TextBoxComponent, ButtonComponent, SyncfusionA2UIProvider],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './app.css',
  template: `
    <div class="a2ui-chat">
      <ejs-textbox
        [(value)]="query"
        placeholder="Ask the agent something..."
        floatLabelType="Auto"
      ></ejs-textbox>
      <button
        ejs-button
        [isPrimary]="true"
        [disabled]="loading()"
        (click)="sendQuery()"
      >
        {{ loading() ? 'Sending...' : 'Send' }}
      </button>
    </div>

    @if (surface(); as surface) {
      <syncfusion-a2ui-provider
        [surface]="surface"
        (onError)="onBoundaryError($event)"
      />
    }
  `,
})
export class AppComponent {
  protected query = signal<string>('');
  protected loading = signal(false);
  protected readonly surface = signal<SurfaceLike | null>(null);

  private readonly renderer = inject(A2uiRendererService);

  protected readonly hasSurface = computed(() => this.surface() !== null);

  protected async sendQuery(): Promise<void> {
    const text = this.query().trim();
    if (!text) return;

    this.loading.set(true);
    this.surface.set(null);

    try {
      const envelope = await postAgentEnvelope({
        jsonrpc: '2.0',
        id: `req-${Date.now()}`,
        method: 'message/send',
        params: {
          message: {
            kind: 'message',
            messageId: `msg-${Date.now()}`,
            role: 'user',
            parts: [{ text }],
          },
        },
      });

      const messages = extractA2uiEnvelope(envelope);
      if (messages && messages.length > 0) {
        this.renderer.processMessages(messages as never);
        const group = this.renderer.surfaceGroup;
        const map = group?.surfacesMap as
          | ReadonlyMap<string, unknown>
          | undefined;
        const firstEntry = map ? [...map.entries()][0] : undefined;
        if (firstEntry) {
          const [id, model] = firstEntry;
          this.surface.set({ id, model } as unknown as SurfaceLike);
        }
      }
    } catch (err) {
      console.error('[Agent] request failed:', err);
    } finally {
      this.loading.set(false);
    }
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