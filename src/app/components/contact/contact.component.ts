import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';

export interface ContactTranslations {
  getInTouch: string;
  contactIntro: string;
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  message: string;
  msgPlaceholder: string;
  sendMessage: string;
  letsWork: string;
  contactInfoTitle: string;
  emailLabel: string;
  phoneLabel: string;
  locationLabel: string;
  locationValue: string;
  socialTitle: string;
  findMe: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  readonly langService = inject(LanguageService);

  readonly translations: { es: ContactTranslations; en: ContactTranslations } = {
    es: {
      getInTouch: 'Ponte en Contacto',
      contactIntro: 'Si tienes alguna pregunta o simplemente quieres saludar, ¡siéntete libre de enviarme un mensaje!',
      name: 'Nombre Completo',
      namePlaceholder: 'Tu nombre...',
      email: 'Correo Electrónico',
      emailPlaceholder: 'tu@correo.com',
      message: 'Mensaje',
      msgPlaceholder: '¿Cómo puedo ayudarte?',
      sendMessage: 'Enviar Mensaje',
      letsWork: 'Trabajemos Juntos',
      contactInfoTitle: 'Información de Contacto',
      emailLabel: 'Correo Electrónico',
      phoneLabel: 'Teléfono / WhatsApp',
      locationLabel: 'Ubicación',
      locationValue: 'República Dominicana',
      socialTitle: 'Redes Sociales',
      findMe: 'También puedes encontrarme en estas plataformas.',
    },
    en: {
      getInTouch: 'Get In Touch',
      contactIntro: "If you have any questions or just want to say hi, feel free to drop me a message!",
      name: 'Full Name',
      namePlaceholder: 'Your name...',
      email: 'Email Address',
      emailPlaceholder: 'you@email.com',
      message: 'Message',
      msgPlaceholder: 'How can I help you?',
      sendMessage: 'Send Message',
      letsWork: "Let's Work Together",
      contactInfoTitle: 'Contact Information',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone / WhatsApp',
      locationLabel: 'Location',
      locationValue: 'Dominican Republic',
      socialTitle: 'Social Connect',
      findMe: 'You can also find me on these platforms.',
    },
  };

  get t(): ContactTranslations {
    return this.translations[this.langService.getCurrentLang()];
  }

  contact = {
    name: '',
    email: '',
    message: '',
  };

  sendEmail(): void {
    if (!this.contact.name || !this.contact.email || !this.contact.message) {
      return;
    }
    const mailtoLink = `mailto:carlosa_feliz@outlook.com?subject=Mensaje de ${encodeURIComponent(this.contact.name)}&body=${encodeURIComponent('Correo: ' + this.contact.email + '%0A%0AMensaje:%0A' + this.contact.message)}`;
    window.location.href = mailtoLink;
  }
}