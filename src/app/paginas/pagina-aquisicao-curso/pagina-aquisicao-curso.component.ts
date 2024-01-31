import { Component } from '@angular/core';
import { BarraSuperiorComponent } from "../../componentes/barra-superior/barra-superior.component";
import { RodapeComponent } from "../../componentes/rodape/rodape.component";

@Component({
    selector: 'app-pagina-aquisicao-curso',
    standalone: true,
    templateUrl: './pagina-aquisicao-curso.component.html',
    styleUrl: './pagina-aquisicao-curso.component.css',
    imports: [BarraSuperiorComponent, RodapeComponent]
})
export class PaginaAquisicaoCursoComponent {
    aba1 = true;
    aoClicarAba1(){
        this.aba1 = true
    }
    aoClicarAba2(){
        this.aba1 = false
    }
}
