import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true, // Angular Standalone Component
  imports: [FormsModule], // Importa FormsModule para usar ngModel
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  onLogin() {
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
  }
}
