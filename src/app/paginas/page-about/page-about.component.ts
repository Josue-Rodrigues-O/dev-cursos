import { Component } from '@angular/core';
import { BarraSuperiorComponent } from "../../componentes/barra-superior/barra-superior.component";
import { RodapeComponent } from "../../componentes/rodape/rodape.component";

@Component({
    selector: 'app-page-about',
    standalone: true,
    templateUrl: './page-about.component.html',
    styleUrl: './pagina-doacao.component.css',
    imports: [BarraSuperiorComponent, RodapeComponent]
})
export class PageAboutComponent {

}
