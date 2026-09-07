import { Component, inject } from '@angular/core';
import { Project, ProjectService } from '../../services/project.service';
import { LanguageService } from '../../services/language.service';

export interface ProjectsTranslations {
  title: string;
  subtitle: string;
  web: string;
  mobile: string;
  desktop: string;
  viewProject: string;
  techUsed: string;
  links: string;
  overview: string;
  viewCert: string;
  close: string;
  next: string;
  prev: string;
  private: string;
  public: string;
  all: string;
  liveDemo: string;
  empty: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  readonly langService = inject(LanguageService);
  private readonly projectService = inject(ProjectService);

  readonly translations: { es: ProjectsTranslations; en: ProjectsTranslations } = {
    es: {
      title: 'Mis Proyectos',
      subtitle: 'Una selección de mis trabajos más recientes en desarrollo web y móvil.',
      web: 'Aplicaciones Web',
      mobile: 'Móvil',
      desktop: 'Escritorio',
      viewProject: 'Ver Detalles',
      techUsed: 'Tecnologías',
      links: 'Enlaces',
      overview: 'Descripción del Proyecto',
      viewCert: 'Ver Código Fuente',
      close: 'Cerrar',
      next: 'Siguiente',
      prev: 'Anterior',
      private: 'Privado',
      public: 'Público',
      all: 'Todos',
      liveDemo: 'Ver Demo',
      empty: 'No se encontraron proyectos con los filtros seleccionados.',
    },
    en: {
      title: 'My Projects',
      subtitle: 'A selection of my most recent works in web and mobile development.',
      web: 'Web Applications',
      mobile: 'Mobile',
      desktop: 'Desktop',
      viewProject: 'View Details',
      techUsed: 'Technologies',
      links: 'Links',
      overview: 'Project Overview',
      viewCert: 'View Source Code',
      close: 'Close',
      next: 'Next',
      prev: 'Previous',
      private: 'Private',
      public: 'Public',
      all: 'All',
      liveDemo: 'View Demo',
      empty: 'No projects found with the selected filters.',
    },
  };

  get t(): ProjectsTranslations {
    return this.translations[this.langService.getCurrentLang()];
  }

  getT(key: string): string {
    return (this.t as unknown as Record<string, string>)[key] || key;
  }

  name(p: Project): string {
    return p.name[this.langService.getCurrentLang()];
  }

  description(p: Project): string {
    return p.description[this.langService.getCurrentLang()];
  }

  projects: Project[] = this.projectService.getProjects();
  readonly tabs: Array<'web' | 'mobile'> = ['web', 'mobile'];
  activeTab: 'web' | 'mobile' = 'web';
  activePrivacyFilter: 'all' | 'public' | 'private' = 'all';
  currentPage = 1;
  readonly pageSize = 6;
  selectedProject: Project | null = null;
  currentImageIndex = 0;
  private modalEl?: any;
  private modal?: any;
  private hiddenListener?: () => void;

  setTab(tab: 'web' | 'mobile'): void {
    this.activeTab = tab;
    this.currentPage = 1;
  }

  setPrivacyFilter(filter: 'all' | 'public' | 'private'): void {
    this.activePrivacyFilter = filter;
    this.currentPage = 1;
  }

  getFilteredProjects(): Project[] {
    return this.projects.filter((p) => {
      const matchesCategory = p.category === this.activeTab;
      const matchesPrivacy =
        this.activePrivacyFilter === 'all' ||
        (this.activePrivacyFilter === 'public' && !p.isPrivate) ||
        (this.activePrivacyFilter === 'private' && p.isPrivate);
      return matchesCategory && matchesPrivacy;
    });
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.getFilteredProjects().length / this.pageSize));
  }

  get totalPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  getPaginatedProjects(): Project[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.getFilteredProjects().slice(start, start + this.pageSize);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  openDetails(project: Project): void {
    this.selectedProject = project;
    this.currentImageIndex = 0;
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const win = window as any;
      if (win.bootstrap) {
        if (this.hiddenListener) {
          this.modalEl?.removeEventListener('hidden.bs.modal', this.hiddenListener);
        }
        this.modalEl = document.getElementById('projectModal');
        if (this.modalEl) {
          this.modal = new win.bootstrap.Modal(this.modalEl);
          this.hiddenListener = () => {
            this.selectedProject = null;
            this.modalEl?.removeEventListener('hidden.bs.modal', this.hiddenListener);
            this.hiddenListener = undefined;
          };
          this.modalEl.addEventListener('hidden.bs.modal', this.hiddenListener);
          this.modal.show();
        }
      }
    }
  }

  closeDetails(): void {
    this.modal?.hide();
  }

  nextImage(): void {
    const p = this.selectedProject;
    if (p) {
      this.currentImageIndex = (this.currentImageIndex + 1) % p.images.length;
    }
  }

  prevImage(): void {
    const p = this.selectedProject;
    if (p) {
      this.currentImageIndex = (this.currentImageIndex - 1 + p.images.length) % p.images.length;
    }
  }

  getTechIcon(tech: string): string {
    return this.projectService.techIconPath(tech);
  }
}