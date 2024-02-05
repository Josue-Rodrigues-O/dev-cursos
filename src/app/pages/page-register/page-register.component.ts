import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-register',
  standalone: true,
  imports: [],
  templateUrl: './page-register.component.html',
  styleUrl: './page-register.component.css'
})
export class PageRegisterComponent {
  emailInvalido: boolean = false
  senhaInvalida: boolean = false
  segundaSenhaDiferenteDaPrimeira: boolean = false

  constructor(private route: Router) {
    window.scrollTo(0, 0)
  }

  aoClicarEntrar() {
    this.route.navigate(['/area-do-consumidor'])
  }
}
