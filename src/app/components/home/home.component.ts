import { Component, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { ProjectService } from '../../services/project.service';

export interface HomeTranslations {
  hi: string;
  role: string;
  description: string;
  viewProjects: string;
  contactMe: string;
  yearsExp: string;
  projectsDone: string;
  techMastered: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly langService = inject(LanguageService);
  private readonly projectService = inject(ProjectService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly techIcons: string[] = [
    'csharp', 'entity-framework', 'angular', 'flutter', 'laravel', 'spring-boot', 'vuejs', 'mysql', 'php', 'java',
    'nodejs', 'express', 'mongodb', 'postgresql', 'firebase', 'ionic', 'docker',
    'kubernetes', 'azure-devops',
  ];

  stats = [
    { value: 0, target: 5, label: 'yearsExp', icon: 'bi-briefcase' },
    { value: 0, target: 78, label: 'projectsDone', icon: 'bi-code-square' },
    { value: 0, target: 15, label: 'techMastered', icon: 'bi-cpu' },
  ];

  displayRole = '';
  private fullRole = '';
  private typingToken = 0;
  private langSub?: Subscription;

  readonly translations: { es: HomeTranslations; en: HomeTranslations } = {
    es: {
      hi: 'Hola, Soy',
      role: 'Desarrollador Full Stack',
      description: 'Construyendo experiencias digitales potentes a través del código. Especializado en aplicaciones web empresariales y soluciones móviles de alto rendimiento.',
      viewProjects: 'Ver Proyectos',
      contactMe: 'Contáctame',
      yearsExp: 'Años de Experiencia',
      projectsDone: 'Proyectos Completados',
      techMastered: 'Tecnologías Dominadas',
    },
    en: {
      hi: "Hi, I'm",
      role: 'Full Stack Developer',
      description: 'Crafting powerful digital experiences through code. Specialized in enterprise web applications and high-performance mobile solutions.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
      yearsExp: 'Years of Experience',
      projectsDone: 'Projects Completed',
      techMastered: 'Technologies Mastered',
    },
  };

  get t(): HomeTranslations {
    return this.translations[this.langService.getCurrentLang()];
  }

  getT(key: string): string {
    return (this.t as unknown as Record<string, string>)[key] || key;
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.fullRole = this.t.role;
      this.startTypingEffect();
      this.langSub = this.langService.currentLang$.subscribe(() => {
        this.fullRole = this.t.role;
        this.startTypingEffect();
      });
      this.animateStats();
    }
  }

  ngOnDestroy(): void {
    this.typingToken++;
    this.langSub?.unsubscribe();
  }

  private startTypingEffect(): void {
    const token = ++this.typingToken;
    this.displayRole = '';
    this.typeNextChar(0, token);
  }

  private typeNextChar(i: number, token: number): void {
    if (token !== this.typingToken) {
      return;
    }
    if (i < this.fullRole.length) {
      this.displayRole = this.fullRole.slice(0, i + 1);
      setTimeout(() => this.typeNextChar(i + 1, token), 50);
    }
  }

  private animateStats(): void {
    const duration = 2000;
    this.stats.forEach((stat) => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        stat.value = Math.floor(progress * stat.target);
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };
      requestAnimationFrame(tick);
    });
  }

  getTechIcon(tech: string): string {
    return this.projectService.techIconPath(tech);
  }
}