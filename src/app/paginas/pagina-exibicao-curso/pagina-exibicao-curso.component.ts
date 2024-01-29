import { Component } from '@angular/core';
import { BarraSuperiorComponent } from "../../componentes/barra-superior/barra-superior.component";

@Component({
    selector: 'app-pagina-exibicao-curso',
    standalone: true,
    templateUrl: './pagina-exibicao-curso.component.html',
    styleUrl: './pagina-exibicao-curso.component.css',
    imports: [BarraSuperiorComponent]
})
export class PaginaExibicaoCursoComponent {

}
