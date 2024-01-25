import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarraSuperiorComponent } from "../../componentes/barra-superior/barra-superior.component";

@Component({
    selector: 'app-pagina-entrar',
    standalone: true,
    templateUrl: './pagina-entrar.component.html',
    styleUrl: './pagina-entrar.component.css',
    imports: [BarraSuperiorComponent]
})
export class PaginaEntrarComponent {
  mostrarErroEmail = false
  mostrarErroSenha = false

  constructor(private route: Router) {}
}
