import { Injectable } from '@angular/core';

export interface NavigationItem {
  label: string;
  path: string;
}

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private navItems: NavigationItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Proyectos', path: '/projects' },
    { label: 'Sobre Mí', path: '/about' },
    { label: 'Contacto', path: '/contact' },
  ];

  getNavigationItems(): NavigationItem[] {
    return this.navItems;
  }
}
