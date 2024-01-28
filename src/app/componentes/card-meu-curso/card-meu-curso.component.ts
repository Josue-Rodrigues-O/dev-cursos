import { Component } from '@angular/core';

@Component({
  selector: 'app-card-meu-curso',
  standalone: true,
  imports: [],
  templateUrl: './card-meu-curso.component.html',
  styleUrl: './card-meu-curso.component.css'
})
export class CardMeuCursoComponent {
  mouseEnter = false

  aoPassarMouse() {
    this.mouseEnter = !this.mouseEnter
  }
}
