import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Importante para standalone components
  imports: [RouterModule], // Importa RouterModule para <router-outlet>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  navItems = [
    { label: 'Home', path: '/' },
    { label: 'Proyectos', path: '/projects' },
    { label: 'Sobre Mí', path: '/about' },
    { label: 'Contacto', path: '/contact' },
  ];
}
