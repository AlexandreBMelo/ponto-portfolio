import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { RegistroPontoComponent } from './registro-ponto/registro-ponto.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]) // ou rotas reais, se houver
  ],

  imports: [RegistroPontoComponent]
};
