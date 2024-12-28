import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule], // Asegúrate de incluir FormsModule
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: '',
  };

  sendEmail(): void {
    const mailtoLink = `mailto:carlosa_feliz@outlook.com?subject=Mensaje de ${this.contact.name}&body=Correo: ${this.contact.email}%0A%0AMensaje:%0A${this.contact.message}`;
    window.location.href = mailtoLink;
  }
}
