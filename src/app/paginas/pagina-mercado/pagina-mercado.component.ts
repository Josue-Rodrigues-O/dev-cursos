import { Component } from '@angular/core';
import { BarraSuperiorComponent } from "../../componentes/barra-superior/barra-superior.component";
import { CardMeuCursoComponent } from "../../componentes/card-meu-curso/card-meu-curso.component";
import { RodapeComponent } from "../../componentes/rodape/rodape.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-pagina-mercado',
    standalone: true,
    templateUrl: './pagina-mercado.component.html',
    styleUrl: './pagina-mercado.component.css',
    imports: [BarraSuperiorComponent, CardMeuCursoComponent, RodapeComponent]
})
export class PaginaMercadoComponent {
    constructor(private route: Router){}
    aoClicarNoCard(){
        this.route.navigate(["detalhes-do-curso"])
    }
}
