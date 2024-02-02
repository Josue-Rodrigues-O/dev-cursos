import { Component } from '@angular/core';
import { BarraSuperiorComponent } from "../../componentes/barra-superior/barra-superior.component";
import { RodapeComponent } from "../../componentes/rodape/rodape.component";
import { CardMeuCursoComponent } from "../../componentes/card-meu-curso/card-meu-curso.component";
import { Router } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { Curso } from '../../interfaces/curso';

@Component({
    selector: 'app-page-main',
    standalone: true,
    templateUrl: './page-main.component.html',
    styleUrl: './page-main.component.css',
    imports: [BarraSuperiorComponent, RodapeComponent, CardMeuCursoComponent]
})
export class PageMainComponent {
    constructor(private route: Router, private cursos: CursosService){}

    listaCard: number[] = [1,2]

    listaMeusCursos: Array<Curso> = this.cursos.getMeusCursos()

    aoClicarNoCard(id: any){
        this.route.navigate([`curso/${id}`])
    }

    aoClicarNoBanner(){
        this.route.navigate(["mercado"])
    }
}
