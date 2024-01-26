import { Component } from '@angular/core';
import { BarraSuperiorComponent } from "../../componentes/barra-superior/barra-superior.component";
import { RodapeComponent } from "../../componentes/rodape/rodape.component";

@Component({
    selector: 'app-pagina-area-do-consumidor',
    standalone: true,
    templateUrl: './pagina-area-do-consumidor.component.html',
    styleUrl: './pagina-area-do-consumidor.component.css',
    imports: [BarraSuperiorComponent, RodapeComponent]
})
export class PaginaAreaDoConsumidorComponent {

}
