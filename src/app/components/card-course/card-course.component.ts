import { Component, Input } from '@angular/core';
import { Curso } from '../../interfaces/curso';

@Component({
  selector: 'app-card-course',
  standalone: true,
  imports: [],
  templateUrl: './card-course.component.html',
  styleUrl: './card-course.component.css'
})
export class CardCourseComponent {
  @Input() mostrarValor!: boolean;
  @Input() objetoCurso!: Curso
  classeTitulo = ""

  constructor() {
    if (this.mostrarValor) {
      this.classeTitulo = "titulo-com-valor"
    } else {
      this.classeTitulo = "titulo-sem-valor"
    }
  }
}
