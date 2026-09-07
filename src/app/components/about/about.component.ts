import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ProjectService, TechDetail } from '../../services/project.service';

interface TimelineItem {
  role: { es: string; en: string };
  company: string;
  period: string;
  points: { es: string[]; en: string[] };
  color: 'primary' | 'secondary';
}

interface Cert {
  title: string;
  link: string;
  icon: string;
}

export interface AboutTranslations {
  getKnowMe: string;
  aboutMe: string;
  intro: string;
  education: string;
  eduDegree: string;
  currentFocus: string;
  focusDetail: string;
  expTitle: string;
  totalExp: string;
  techExpertise: string;
  techSub: string;
  frontend: string;
  backend: string;
  certs: string;
  viewCert: string;
  overview: string;
  proficiencies: string;
  featuredProjects: string;
  close: string;
  years: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  readonly langService = inject(LanguageService);
  private readonly projectService = inject(ProjectService);

  readonly techDetails: Record<string, TechDetail> = this.projectService.techDetails();
  selectedTech: TechDetail | null = null;
  private modal?: any;
  private modalEl?: any;
  private hiddenListener?: () => void;

  readonly frontendTech: string[] = [
    'flutter', 'angular', 'vuejs', 'livewire', 'ionic', 'bootstrap', 'css', 'html',
  ];

  readonly backendTech: string[] = [
    'csharp', 'entity-framework', 'laravel', 'nodejs', 'express', 'spring-boot', 'mysql', 'postgresql', 'mongodb',
    'firebase', 'php', 'java', 'docker', 'kubernetes', 'azure-devops',
  ];

  readonly timeline: TimelineItem[] = [
    {
      role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
      company: 'ITLA',
      period: 'Dec 2020 - Present',
      color: 'primary',
      points: {
        es: [
          'Desarrollé aplicaciones móviles (Flutter) reduciendo el tiempo de desarrollo en un 30%.',
          'Implementé sincronización en tiempo real con Firebase para más de 1,000 usuarios activos.',
          'Construí sistemas web Laravel logrando una mejora del 20% en la eficiencia del backend.',
          'Diseñé microservicios Spring Boot y backend C# / .NET, aumentando la escalabilidad en un 35%.',
        ],
        en: [
          'Developed mobile apps (Flutter) reducing dev time by 30%.',
          'Implemented real-time sync with Firebase for 1,000+ active users.',
          'Built Laravel web systems achieving 20% enhancement in backend efficiency.',
          'Designed Spring Boot microservices and C# / .NET backend services, increasing scalability by 35%.',
        ],
      },
    },
    {
      role: { es: 'Especialista Técnico en TI', en: 'IT Technical Specialist' },
      company: 'Junta Central Electoral',
      period: 'Feb 2012 - Feb 2019',
      color: 'secondary',
      points: {
        es: [
          'Gestioné reparaciones y conectividad para equipos de oficina críticos, manteniendo un 98% de tiempo de actividad para más de 50 dispositivos mensuales.',
        ],
        en: [
          'Managed repairs and connectivity for critical office equipment, maintaining 98% uptime for over 50 devices monthly.',
        ],
      },
    },
  ];

  readonly certifications: Cert[] = [
    { title: 'Talently - Back-end Specialization', link: 'https://talently.tech/certification/117d2581-c40c-4aaa-8ca4-aad7accf16ad', icon: 'bi-patch-check-fill' },
    { title: 'Talently - Full Stack Proficiency', link: 'https://talently.tech/certification/3abb1970-7735-4ae8-8a0a-24b9c957714d', icon: 'bi-patch-check-fill' },
    { title: 'Talently - Advanced Algorithms', link: 'https://talently.tech/certification/1a80c636-0e51-4be8-950a-3be5156ee997', icon: 'bi-patch-check-fill' },
    { title: 'Talently - Software Architecture', link: 'https://talently.tech/certification/d96850b4-479a-4937-97ba-0b8e85130287', icon: 'bi-patch-check-fill' },
    { title: 'Talently - Career Path Readiness', link: 'https://talently.tech/certification/41eeda41-52c3-44ca-97f8-067c91920d5e', icon: 'bi-patch-check-fill' },
    { title: 'Platzi - Flutter Development', link: 'https://platzi.com/p/carlos-feliz/curso/1386-flutter/diploma/detalle/', icon: 'bi-mortarboard-fill' },
    { title: 'Skillshop - Professional Award 1', link: 'https://skillshop.exceedlms.com/student/award/2CaPzGWNZQJps5CDj7JMo2Ld', icon: 'bi-google' },
    { title: 'Skillshop - Professional Award 2', link: 'https://skillshop.exceedlms.com/student/award/MQcm2YnoKAkQcZ4ysfGMstyJ', icon: 'bi-google' },
  ];

  readonly translations: { es: AboutTranslations; en: AboutTranslations } = {
    es: {
      getKnowMe: 'Conóceme',
      aboutMe: 'Sobre Mí',
      intro: 'Soy Carlos Alberto Feliz Recio, un desarrollador Full Stack dinámico y detallista. Especializado en crear aplicaciones web de extremo a extremo y soluciones móviles escalables, seguras y centradas en el usuario.',
      education: 'Educación',
      eduDegree: 'Graduado como Tecnólogo en Desarrollo de Software - ITLA (2024)',
      currentFocus: 'Enfoque Actual',
      focusDetail: 'Desarrollo Web Full Stack y Móvil',
      expTitle: 'Experiencia Profesional',
      totalExp: 'Años de Exp. Total',
      techExpertise: 'Experiencia Técnica',
      techSub: 'Categorizado por especialización. Haz clic en un icono para detalles.',
      frontend: 'Desarrollo Frontend',
      backend: 'Backend e Infraestructura',
      certs: 'Certificaciones y Premios',
      viewCert: 'Ver Credencial',
      overview: 'Descripción',
      proficiencies: 'Fortalezas Clave',
      featuredProjects: 'Proyectos Destacados',
      close: 'Cerrar Detalles',
      years: 'Años',
    },
    en: {
      getKnowMe: 'Get To Know Me',
      aboutMe: 'About Me',
      intro: "I'm Carlos Alberto Feliz Recio, a dynamic and detail-oriented Full Stack Developer. I specialize in building end-to-end web applications and mobile solutions that are scalable, secure, and user-centric.",
      education: 'Education',
      eduDegree: 'Graduated as Software Development Technologist - ITLA (2024)',
      currentFocus: 'Current Focus',
      focusDetail: 'Full Stack Web & Mobile Development',
      expTitle: 'Professional Experience',
      totalExp: 'Years Total Exp',
      techExpertise: 'Technical Expertise',
      techSub: 'Categorized by specialization. Click an icon for details.',
      frontend: 'Frontend Development',
      backend: 'Backend & Infrastructure',
      certs: 'Certifications & Awards',
      viewCert: 'View Credential',
      overview: 'Overview',
      proficiencies: 'Key Proficiencies',
      featuredProjects: 'Featured Projects',
      close: 'Close Details',
      years: 'Years',
    },
  };

  get t(): AboutTranslations {
    return this.translations[this.langService.getCurrentLang()];
  }

  getT(key: string): string {
    return (this.t as unknown as Record<string, string>)[key] || key;
  }

  getSkillIcon(tech: string): string {
    return this.projectService.techIconPath(tech);
  }

  selectTech(tech: string): void {
    if (!this.techDetails[tech]) {
      return;
    }
    this.selectedTech = this.techDetails[tech];
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const win = window as any;
      if (win.bootstrap) {
        if (this.hiddenListener) {
          this.modalEl?.removeEventListener('hidden.bs.modal', this.hiddenListener);
        }
        this.modalEl = document.getElementById('techModal');
        if (this.modalEl) {
          this.modal = new win.bootstrap.Modal(this.modalEl);
          this.hiddenListener = () => {
            this.selectedTech = null;
            this.modalEl?.removeEventListener('hidden.bs.modal', this.hiddenListener);
            this.hiddenListener = undefined;
          };
          this.modalEl.addEventListener('hidden.bs.modal', this.hiddenListener);
          this.modal.show();
        }
      }
    }
  }

  closeModal(): void {
    this.modal?.hide();
  }
}