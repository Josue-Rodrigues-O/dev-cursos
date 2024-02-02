import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarraSuperiorComponent } from "../../componentes/barra-superior/barra-superior.component";

@Component({
  selector: 'app-page-login',
  standalone: true,
  templateUrl: './page-login.component.html',
  styleUrl: './pagina-entrar.component.css',
  imports: [BarraSuperiorComponent]
})
export class PageLoginComponent {
  mostrarErroEmail = false
  mostrarErroSenha = false

  constructor(private route: Router) { }

  aoClicarEntrar() {
    this.route.navigate(["area-do-consumidor"])
  }
}
