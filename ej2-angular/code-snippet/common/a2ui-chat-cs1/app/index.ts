import { AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, ViewChild, computed, inject, signal } from '@angular/core';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { SyncfusionA2UIProvider } from '@syncfusion/ej2-angular-a2ui';
import { A2uiRendererService } from '@a2ui/angular/v0_9';
import { extractA2uiEnvelope, postAgentEnvelope } from './agent';

type Role = 'user' | 'bot';
interface ChatMessage { id: string; role: Role; text: string; ts: number; }
interface Stage { id: 'search' | 'results' | 'booking'; step: number; icon: string; title: string; tagline: string; copy: string; highlights: string[]; starterPrompt: string; }
interface SurfaceLike { id: string;[key: string]: unknown; }
const STAGES: Stage[] = [
  { id: 'search', step: 1, icon: '🔎', title: 'Search Flights', tagline: 'Find the best route', copy: 'Trip type, dates, cabin & travellers.', highlights: ['Round trip / One way / Multi-city', 'Premium cabin filters'], starterPrompt: 'Show me the flight search form.' },
  { id: 'results', step: 2, icon: '🛫', title: 'Flight Results', tagline: 'Compare and choose', copy: 'Sortable fare grid with airline, time & price.', highlights: ['Sortable fare grid', 'One-click selection'], starterPrompt: 'Show me the flight results page.' },
  { id: 'booking', step: 3, icon: '🔒', title: 'Booking & Confirmation', tagline: 'Confirm & get ticket', copy: 'Review trip & confirm.', highlights: ['Passenger & itinerary summary', 'Confirmation message'], starterPrompt: 'Show me the booking and Confirmation page.' },
];

function newId(prefix: string): string { return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`; }

function summarizeAction(action: unknown): string {
  if (!action || typeof action !== 'object') return 'Submitted your selection.';
  const a = action as Record<string, unknown>;
  const name = String(a['name'] ?? a['action'] ?? '');
  const ctx = (a['context'] as Record<string, unknown> | undefined) ?? {};
  const from = ctx['from'] ?? ctx['origin'];
  const to = ctx['to'] ?? ctx['destination'];
  const date = ctx['departureDate'] ?? ctx['date'];
  const adults = ctx['adults'];
  const children = ctx['children'];
  const pax = adults != null ? `${adults} adult${Number(adults) === 1 ? '' : 's'}` + (children ? `, ${children} child${Number(children) === 1 ? '' : 'ren'}` : '') : '';

  switch (name) {
    case 'selectFlight':
      return 'Your selected flight will be booked shortly.';
    case 'searchFlights':
      return `Searching for flights${from && to ? ` from ${from} to ${to}` : ''}${date ? ` on ${date}` : ''}${pax ? ` for ${pax}` : ''}.`;
    default:
      return `Triggered "${name || 'action'}".`;
  }
}

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [TextBoxComponent, ButtonComponent, SyncfusionA2UIProvider],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './app.css',
  template: `
    <div class="app-shell">
      <header class="app-header">
        <div class="brand">
          <div class="brand-mark" aria-hidden="true">✈</div>
          <div class="brand-text">
            <div class="brand-name">SkyBook</div>
            <div class="brand-sub">Enterprise Flight Booking</div>
          </div>
        </div>
        <nav class="app-nav">
          @if (view() === 'chat') {
            <button class="nav-cta" type="button" (click)="backHome()">
              ← Home
            </button>
          }
        </nav>
      </header>

      <main class="app-body">
        <!-- ============================ Chat pane ============================ -->
        <section class="chat-pane" aria-label="Flight booking assistant">
          @if (view() === 'welcome') {
            <div class="chat-welcome">
              <div class="hero-badge">
                <span class="hero-dot"></span> AI-powered travel concierge
              </div>
              <h1 class="hero-title">
                SkyBook — Enterprise Flight Booking
                <span class="hero-accent"> three steps to take off.</span>
              </h1>
              <p class="hero-sub">
                Pick a stage to open the corresponding view on the right. You can keep
                chatting to refine the result, change dates, upgrade the cabin, or
                confirm the booking.
              </p>

              <div class="stage-grid">
                @for (s of stages; track s.id) {
                  <button
                    class="stage-card"
                    [class.stage-card--search]="s.id === 'search'"
                    [class.stage-card--results]="s.id === 'results'"
                    [class.stage-card--booking]="s.id === 'booking'"
                    type="button"
                    (click)="openStage(s)"
                  >
                    <div class="stage-icon">{{ s.icon }}</div>
                    <div class="stage-title">{{ s.title }}</div>
                    <div class="stage-step">Step {{ s.step }}</div>
                    <div class="stage-copy">{{ s.copy }}</div>
                    <ul class="stage-highlights">
                      @for (h of s.highlights; track h) {
                        <li>
                          <span class="stage-bullet">✓</span> {{ h }}
                        </li>
                      }
                    </ul>
                    <span class="stage-arrow" aria-hidden="true">Open →</span>
                  </button>
                }
              </div>

              <div class="welcome-cta">
                <ejs-textbox
                  [(value)]="prompt"
                  placeholder='Try: "Find me a flight from New York to London next Friday"'
                  floatLabelType="Auto"
                  cssClass="welcome-input"
                ></ejs-textbox>
                <button
                  ejs-button
                  [isPrimary]="true"
                  [disabled]="!prompt().trim()"
                  (click)="sendPrompt(prompt())"
                  type="button"
                >
                  Send
                </button>
              </div>
            </div>
          } @else {
            <div class="chat-room">
              <div class="chat-room-header">
                <div class="bot-avatar" aria-hidden="true">🤖</div>
                <div class="bot-meta">
                  <div class="bot-name">SkyBook Assistant</div>
                  <div class="bot-status">
                    <span class="status-dot"></span> Online · typically replies in
                    seconds
                  </div>
                </div>
                @if (activeStage()) {
                  <div
                    class="chat-stage-pill"
                    [title]="'Step ' + activeStage()!.step"
                  >
                    {{ activeStage()!.icon }} {{ activeStage()!.title }}
                  </div>
                }
              </div>

              <div class="chat-body" #chatBody>
                @if (messages().length === 0) {
                  <div class="chat-empty">
                    👋 Hi! Pick a stage from the home page, or just tell me what you
                    need.
                  </div>
                }
                @for (m of messages(); track m.id) {
                  <div
                    class="chat-bubble"
                    [class.chat-bubble--user]="m.role === 'user'"
                    [class.chat-bubble--bot]="m.role === 'bot'"
                  >
                    @if (m.role === 'bot') {
                      <div class="chat-avatar" aria-hidden="true">🤖</div>
                    }
                    <div class="chat-text">{{ m.text }}</div>
                  </div>
                }
                @if (isSending()) {
                  <div class="chat-bubble chat-bubble--bot">
                    <div class="chat-avatar" aria-hidden="true">🤖</div>
                    <div class="chat-text typing">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                }
              </div>

              <form class="chat-input-row" (submit)="onSubmit($event)">
                <ejs-textbox
                  [(value)]="prompt"
                  placeholder="Message SkyBook…"
                  floatLabelType="Never"
                  cssClass="chat-input"
                ></ejs-textbox>
                <button
                  ejs-button
                  [isPrimary]="true"
                  [disabled]="!prompt().trim() || isSending()"
                  type="submit"
                >
                  {{ isSending() ? '…' : 'Send' }}
                </button>
              </form>
            </div>
          }
        </section>

        <!-- ============================ Surface pane ========================== -->
        <section class="surface-pane" aria-label="Booking result">
          @if (surface()) {
            <syncfusion-a2ui-provider
              [surface]="surface()!"
              (onError)="onBoundaryError($event)"
            />
          } @else {
            <div class="surface-placeholder">
              <div class="surface-placeholder-inner">
                <div class="surface-icon">🛫</div>
                <h3>Pick a stage to begin</h3>
                <p>
                  Search flights, browse results, or jump straight to the booking
                  & confirmation view — the chosen A2UI surface will render here
                  in real time.
                </p>
                <ul class="surface-bullets">
                  <li>Step 1 — Search Flights</li>
                  <li>Step 2 — Flight Results</li>
                  <li>Step 3 — Booking & Confirmation</li>
                </ul>
              </div>
            </div>
          }
        </section>
      </main>
    </div>
  `,
})
export class AppComponent implements AfterViewChecked {
  protected readonly stages: readonly Stage[] = STAGES;
  protected readonly view = signal<'welcome' | 'chat'>('welcome');
  protected readonly activeStage = signal<Stage | null>(null);
  protected readonly prompt = signal('');
  protected readonly messages = signal<ChatMessage[]>([]);
  protected readonly isSending = signal(false);
  protected readonly surface = signal<SurfaceLike | null>(null);

  protected readonly hasSurface = computed(() => this.surface() !== null);

  @ViewChild('chatBody') private chatBody?: ElementRef<HTMLDivElement>;

  private readonly renderer = inject(A2uiRendererService);

  ngAfterViewChecked(): void {
    const group = this.renderer.surfaceGroup;
    const map = group?.surfacesMap as ReadonlyMap<string, unknown> | undefined;
    if (!map) return;
    const firstEntry = [...map.entries()][0];
    if (!firstEntry) return;
    const [id, model] = firstEntry;
    const next: SurfaceLike = { id, model } as unknown as SurfaceLike;
    const current = this.surface();
    if (!current || current.id !== next.id) {
      this.surface.set(next);
    }
  }

  private scrollChatToBottom(): void {
    const el = this.chatBody?.nativeElement;
    if (el) el.scrollTo({ top: el.scrollHeight });
  }

  private pushMessage(role: Role, text: string): void {
    this.messages.update((prev) => [
      ...prev, { id: newId('m'), role, text, ts: Date.now() },
    ]);
  }

  private async sendToAgent(text: string, silent: boolean): Promise<void> {
    if (!text.trim()) return;
    this.isSending.set(true);
    if (!silent) this.prompt.set('');

    try {
      const envelope = await postAgentEnvelope({
        jsonrpc: '2.0',
        id: newId('req'),
        method: 'message/send',
        params: { message: { kind: 'message', messageId: newId('msg'), role: 'user', parts: [{ text }], }, },
      });

      const a2uiMessages = extractA2uiEnvelope(envelope);
      if (a2uiMessages) {
        this.renderer.processMessages(a2uiMessages as never);
        if (!silent) {
          this.pushMessage(
            'bot',
            'I have prepared a tailored result for you.',
          );
        }
      } else if (!silent) {
        this.pushMessage(
          'bot',
          "Hmm, I couldn't reach the booking service just now. Please try again in a moment.",
        );
      }
    } catch (e) {
      console.error('[A2UI] fetch error', e);
      if (!silent) {
        const message = e instanceof Error ? e.message : String(e);
        this.pushMessage('bot', `Something went wrong: ${message}`);
      }
    } finally {
      this.isSending.set(false);
      queueMicrotask(() => this.scrollChatToBottom());
    }
  }

  private async sendUserPrompt(text: string): Promise<void> {
    if (!text.trim()) return;
    this.pushMessage('user', text);
    queueMicrotask(() => this.scrollChatToBottom());
    await this.sendToAgent(text, false);
  }

  protected sendPrompt(text: string): void {
    if (!text.trim()) return;
    if (this.view() === 'welcome') this.view.set('chat');
    void this.sendUserPrompt(text);
  }

  protected openStage(stage: Stage): void {
    this.activeStage.set(stage);
    this.view.set('chat');
    void this.sendUserPrompt(stage.starterPrompt);
  }

  protected backHome(): void {
    const group = this.renderer.surfaceGroup;
    if (group) { for (const id of Array.from(group.surfacesMap.keys())) { group.deleteSurface(id); } }
    this.surface.set(null);
    this.activeStage.set(null);
    this.view.set('welcome');
    this.messages.set([]);
    this.prompt.set('');
  }

  protected onSubmit(event: SubmitEvent): void {
    event.preventDefault();
    const text = this.prompt();
    if (!text.trim() || this.isSending()) return;
    this.sendPrompt(text);
  }

  protected onBoundaryError(event: Event): void {
    const detail = (event as CustomEvent<unknown>).detail;
    const message = detail instanceof Error ? detail.message : typeof detail === 'string' ? detail : (event as ErrorEvent).message ?? event.type;
    console.error('[A2UI] surface render error:', message);
  }
}