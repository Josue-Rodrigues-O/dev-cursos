import { Component } from '@angular/core';
import { BarraSuperiorComponent } from "../../componentes/barra-superior/barra-superior.component";
import { RodapeComponent } from "../../componentes/rodape/rodape.component";
import { CardMeuCursoComponent } from "../../componentes/card-meu-curso/card-meu-curso.component";
import { Router } from '@angular/router';
import { CursosService } from '../../servicos/cursos.service';
import { Curso } from '../../interfaces/curso';

@Component({
    selector: 'app-pagina-area-do-consumidor',
    standalone: true,
    templateUrl: './pagina-area-do-consumidor.component.html',
    styleUrl: './pagina-area-do-consumidor.component.css',
    imports: [BarraSuperiorComponent, RodapeComponent, CardMeuCursoComponent]
})
export class PaginaAreaDoConsumidorComponent {
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
