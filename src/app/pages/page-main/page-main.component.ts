import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CardCourseComponent } from "../../components/card-course/card-course.component";
import { Router } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { Curso } from '../../interfaces/curso';

@Component({
    selector: 'app-page-main',
    standalone: true,
    templateUrl: './page-main.component.html',
    styleUrl: './page-main.component.css',
    imports: [NavBarComponent, FooterComponent, CardCourseComponent]
})
export class PageMainComponent {
    constructor(private route: Router, private cursos: CursosService){}

    listaMeusCursos: Array<Curso> = this.cursos.getMeusCursos()

    aoClicarNoCard(id: any){
        this.route.navigate([`curso/${id}`])
    }

    aoClicarNoBanner(){
        this.route.navigate(["mercado"])
    }
}
