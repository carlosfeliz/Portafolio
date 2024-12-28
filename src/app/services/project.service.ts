import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Project {
  name: string;
  description: string;
  images: string[]; // Rutas de las imágenes
  technologies: string[]; // Rutas de los logos de las tecnologías
  link?: string;
  username?: string; // Usuario de prueba
  password?: string; // Contraseña de prueba
  category: 'web' | 'desktop' | 'mobile';
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  getProjects(): Observable<Project[]> {
    return of([
      {
        name: 'Sistema Administrativo De Campañas Politicas',
        description: 'Este es un proyecto desarrollado con Laravel 10, el potente framework de PHP que facilita la creación de aplicaciones web modernas, seguras y escalables. La estructura de la aplicación se apoya en el motor de plantillas Blade, permitiendo una presentación dinámica y limpia en el lado del frontend. Para la interfaz de administración, el proyecto integra la plantilla AdminLTE ',
        link: 'https://proyecto2028.electord.tech/',

        images: [
          'images/politicalogin.png',
          'images/politicadashboard.png',


        ],
        technologies: [
          'laravel',
          'mysql',
          'bootstrap',
        ],
        username: '12345678901',
        password: '12345678901',

        category: 'web',

      },
      {
        name: 'FM Acesores',
        description: 'Este sistema está diseñado para ofrecer servicios de asesoría contable de manera eficiente y organizada. Permite gestionar clientes, registrar transacciones financieras, generar reportes contables y facilitar el cumplimiento de obligaciones fiscales. Desarrollado con Wordpress y ofrece una interfaz amigable y acceso rápido desde cualquier dispositivo.',
        link: 'https://fmcasesores.com/',

        images: [
          'images/fmasesores1.png',
          'images/fmasesores2.png',
          'images/fmasesores3.png',
        ],
        technologies: [
          'wordpress',

        ],
        category: 'web',
      },
      {
        name: 'Punto de Venta con Contabilidad y Comprobante Fiscal (República Dominicana)',
        description: `
          Este sistema de punto de venta avanzado está diseñado para gestionar operaciones comerciales
          de compra y venta, incluyendo la generación de comprobantes fiscales  (NCF)
          según las normativas de la República Dominicana.
          Cuenta con un módulo completo de contabilidad que permite registrar transacciones financieras,
          gestionar cuentas por cobrar y por pagar, así como generar reportes contables detallados.
          Además, el sistema incluye un panel de control interactivo con métricas en tiempo real y
          funcionalidades de gestión de inventario, clientes y proveedores.

        `,
        link: 'https://punto-de-venta.com/',
        images: [
          'images/pos1.png',
          'images/pos2.png',
          'images/pos3.png',
          'images/pos4.png',
        ],
        technologies: ['laravel', 'livewire', 'mysql', 'bootstrap'],
        username: 'admin@mail.com',
        password: 'admin123',
        category: 'web',
      },

      {
        name: 'VoIP_CFR',
        description: 'Este es un sistema avanzado para gestión de infraestructura digital.',
        link: 'https://voip.electord.tech/',

        images: [
          'images/void4.png',
          'images/void2.png',
          'images/void3.png',
          'images/void1.png',
        ],
        technologies: ['laravel', 'livewire', ],
        username: 'prueba@mail.com',
        password: '123456789',
        category: 'web',
      },
    ]);
  }
}
