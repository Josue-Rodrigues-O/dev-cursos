import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { CardCourseComponent } from "../../components/card-course/card-course.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Router } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { Curso } from '../../interfaces/curso';

@Component({
    selector: 'app-page-marketplace',
    standalone: true,
    templateUrl: './page-marketplace.component.html',
    styleUrl: './page-marketplace.component.css',
    imports: [NavBarComponent, CardCourseComponent, FooterComponent]
})
export class PageMarketplaceComponent {
    constructor(private route: Router, private cursos: CursosService) { }

    listaCursos = this.cursos.getLista();

    titulo = ""

    aoClicarNoCard(id: any) {
        this.route.navigate([`detalhes-do-curso/${id}`])
    }
}
