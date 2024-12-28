import { Component, OnInit, AfterViewInit, TemplateRef } from '@angular/core';
import { CommonModule, NgIfContext } from '@angular/common';
import { ProjectService, Project } from '../../services/project.service';

declare var bootstrap: any; // Declarar manualmente Bootstrap JS

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
[x: string]: any;
  projects: Project[] = [];
  selectedProject: Project | null = null; // Proyecto seleccionado para el modal
  noProjects: TemplateRef<NgIfContext<boolean>> | null | undefined;
  noProjectsTemplate: TemplateRef<NgIfContext<boolean>> | null | undefined;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    // Obtener los proyectos del servicio
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }

  ngAfterViewInit(): void {
    // Inicializa el modal de Bootstrap
    const modal = document.getElementById('projectModal');
    if (modal) {
      new bootstrap.Modal(modal);
    }
  }

  openModal(project: Project): void {
    this.selectedProject = project; // Asigna el proyecto seleccionado
    const modalElement = document.getElementById('projectModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
      modal.show(); // Muestra el modal
    }
  }

  // Método para filtrar proyectos por categoría
  getProjectsByCategory(category: 'web' | 'desktop' | 'mobile'): Project[] {
    return this.projects.filter((project) => project.category === category);
  }

}
