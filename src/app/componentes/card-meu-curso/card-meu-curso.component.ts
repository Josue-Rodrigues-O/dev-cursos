import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-meu-curso',
  standalone: true,
  imports: [],
  templateUrl: './card-meu-curso.component.html',
  styleUrl: './card-meu-curso.component.css'
})
export class CardMeuCursoComponent {
  mouseEnter = false
  @Input() mostrarValor!: boolean;
  classeTitulo = ""

  constructor(){
    if (this.mostrarValor) {
      this.classeTitulo = "titulo-com-valor"
    }else{
      this.classeTitulo = "titulo-sem-valor"
    }
  }

  aoPassarMouse() {
    this.mouseEnter = !this.mouseEnter
  }
}
