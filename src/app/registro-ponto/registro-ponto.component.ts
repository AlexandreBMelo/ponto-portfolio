import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Batida {
  data: string;
  hora: string;
  tipo: 'Entrada' | 'Saída';
}

@Component({
  selector: 'app-registro-ponto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registro-ponto.component.html',
  styleUrls: ['./registro-ponto.component.css']
})
export class RegistroPontoComponent {
  batidas: Batida[] = [];
  proximaBatida: 'Entrada' | 'Saída' = 'Entrada';

  registrarPonto(): void {
    const agora = new Date();
    const data = agora.toLocaleDateString();
    const hora = agora.toLocaleTimeString();

    this.batidas.unshift({
      data,
      hora,
      tipo: this.proximaBatida
    });

    this.proximaBatida = this.proximaBatida === 'Entrada' ? 'Saída' : 'Entrada';
  }
}


