import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-cadastrar',
  standalone: true,
  imports: [],
  templateUrl: './pagina-cadastrar.component.html',
  styleUrl: './pagina-cadastrar.component.css'
})
export class PaginaCadastrarComponent {
  constructor(private route: Router){}

  aoClicarEntrar() {
    this.route.navigate(['/area-do-consumidor'])
  }
}
