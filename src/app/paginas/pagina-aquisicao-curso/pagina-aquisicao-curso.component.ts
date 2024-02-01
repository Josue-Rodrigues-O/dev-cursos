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
    classeAba1 = "div-aba-selecionada";
    classeAba2 = "div-aba-nao-selecionada";
    aba1 = true;
    aoClicarAba1() {
        this.aba1 = true
        this.verificar()
    }
    aoClicarAba2() {
        this.aba1 = false
        this.verificar()
    }

    verificar() {
        if (this.aba1) {
            this.classeAba1 = "div-aba-selecionada";
            this.classeAba2 = "div-aba-nao-selecionada"
        } else {
            this.classeAba1 = "div-aba-nao-selecionada"
            this.classeAba2 = "div-aba-selecionada";
        }
    }
}
