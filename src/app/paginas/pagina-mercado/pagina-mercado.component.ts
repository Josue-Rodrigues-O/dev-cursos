import { Component } from '@angular/core';
import { BarraSuperiorComponent } from "../../componentes/barra-superior/barra-superior.component";
import { CardMeuCursoComponent } from "../../componentes/card-meu-curso/card-meu-curso.component";
import { RodapeComponent } from "../../componentes/rodape/rodape.component";
import { Router } from '@angular/router';
import { CursosService } from '../../servicos/cursos.service';
import { Curso } from '../../interfaces/curso';

@Component({
    selector: 'app-pagina-mercado',
    standalone: true,
    templateUrl: './pagina-mercado.component.html',
    styleUrl: './pagina-mercado.component.css',
    imports: [BarraSuperiorComponent, CardMeuCursoComponent, RodapeComponent]
})
export class PaginaMercadoComponent {
    constructor(private route: Router, private cursos: CursosService) { }

    listaCursos = this.cursos.getLista();

    titulo = ""

    aoClicarNoCard(id: any) {
        this.route.navigate([`detalhes-do-curso/${id}`])
    }
}
