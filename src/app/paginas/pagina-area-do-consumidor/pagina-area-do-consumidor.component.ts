import { Component } from '@angular/core';
import { BarraSuperiorComponent } from "../../componentes/barra-superior/barra-superior.component";
import { RodapeComponent } from "../../componentes/rodape/rodape.component";
import { CardMeuCursoComponent } from "../../componentes/card-meu-curso/card-meu-curso.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-pagina-area-do-consumidor',
    standalone: true,
    templateUrl: './pagina-area-do-consumidor.component.html',
    styleUrl: './pagina-area-do-consumidor.component.css',
    imports: [BarraSuperiorComponent, RodapeComponent, CardMeuCursoComponent]
})
export class PaginaAreaDoConsumidorComponent {
    constructor(private route: Router){}

    listaCard: number[] = [1,2]

    aoClicarNoCard(){
        this.route.navigate(["curso"])
    }

    aoClicarNoBanner(){
        this.route.navigate(["mercado"])
    }
}
