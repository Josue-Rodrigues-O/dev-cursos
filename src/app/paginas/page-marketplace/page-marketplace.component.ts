import { Component } from '@angular/core';
import { BarraSuperiorComponent } from "../../componentes/barra-superior/barra-superior.component";
import { CardMeuCursoComponent } from "../../componentes/card-meu-curso/card-meu-curso.component";
import { RodapeComponent } from "../../componentes/rodape/rodape.component";
import { Router } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { Curso } from '../../interfaces/curso';

@Component({
    selector: 'app-page-marketplace',
    standalone: true,
    templateUrl: './page-marketplace.component.html',
    styleUrl: './page-marketplace.component.css',
    imports: [BarraSuperiorComponent, CardMeuCursoComponent, RodapeComponent]
})
export class PageMarketplaceComponent {
    constructor(private route: Router, private cursos: CursosService) { }

    listaCursos = this.cursos.getLista();

    titulo = ""

    aoClicarNoCard(id: any) {
        this.route.navigate([`detalhes-do-curso/${id}`])
    }
}
