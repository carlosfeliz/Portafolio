import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  projects: Project[] = [];
  selectedProject: Project | null = null; // Proyecto seleccionado para el modal

  constructor(private projectService: ProjectService) {}

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

}
