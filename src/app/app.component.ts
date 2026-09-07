import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly langService = inject(LanguageService);
  readonly currentYear = new Date().getFullYear();

  toggleLang(): void {
    this.langService.toggleLanguage();
  }
}