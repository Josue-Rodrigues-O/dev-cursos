import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-page-login',
  standalone: true,
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.css',
  imports: [NavBarComponent]
})
export class PageLoginComponent {
  mostrarErroEmail = false
  mostrarErroSenha = false

  constructor(private route: Router) { }

  aoClicarEntrar() {
    this.route.navigate(["/area-do-consumidor"])
  }
}
