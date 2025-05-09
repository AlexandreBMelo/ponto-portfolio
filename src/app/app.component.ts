import { Component } from '@angular/core';
import { RegistroPontoComponent } from './registro-ponto/registro-ponto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegistroPontoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ponto-portfolio';
}

