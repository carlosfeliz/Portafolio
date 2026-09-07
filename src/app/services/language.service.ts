import { Injectable, inject, signal, WritableSignal, PLATFORM_ID } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export type Lang = 'es' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly langSignal = signal<Lang>('es');

  readonly currentLang: WritableSignal<Lang> = this.langSignal;
  readonly currentLang$: Observable<Lang> = toObservable(this.langSignal);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('lang') as Lang | null;
      if (saved === 'es' || saved === 'en') {
        this.langSignal.set(saved);
      }
    }
  }

  getCurrentLang(): Lang {
    return this.langSignal();
  }

  setLang(lang: Lang): void {
    this.langSignal.set(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
    }
  }

  toggleLanguage(): void {
    this.setLang(this.langSignal() === 'es' ? 'en' : 'es');
  }
}