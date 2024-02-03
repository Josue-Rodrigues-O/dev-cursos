import { Component, Input, OnInit } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Curso } from '../../interfaces/curso';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../../services/cursos.service';

@Component({
    selector: 'app-page-acquisition',
    standalone: true,
    templateUrl: './page-acquisition.component.html',
    styleUrl: './page-acquisition.component.css',
    imports: [NavBarComponent, FooterComponent]
})
export class PageAcquisitionComponent implements OnInit {
    classeAba1 = "div-aba-selecionada";
    classeAba2 = "div-aba-nao-selecionada";
    aba1 = true;
    objetoRecebido!: any

    constructor(private activatedRoute: ActivatedRoute, private cursos: CursosService) {
        let id: any
        this.activatedRoute.paramMap.subscribe(params => {
            id = params.get('id');
            this.objetoRecebido = this.cursos.getLista().find(x => x.id == id);
        });
    }
    ngOnInit(): void {
        setTimeout(() => {
            const video = document.getElementById("video")
            video?.setAttribute("src", this.objetoRecebido.tabelaVideos[0].linkVideo)
        }, 100)
    }

    aoClicarButton(objeto: Curso) {
        this.cursos.adicionarCurso(objeto);
        console.log(this.cursos.getMeusCursos())
    }

    aoClicarAba1() {
        this.aba1 = true
        this.mudarAba()
    }

    aoClicarAba2() {
        this.aba1 = false
        this.mudarAba()
    }

    mudarAba() {
        if (this.aba1) {
            this.classeAba1 = "div-aba-selecionada";
            this.classeAba2 = "div-aba-nao-selecionada"
        } else {
            this.classeAba1 = "div-aba-nao-selecionada"
            this.classeAba2 = "div-aba-selecionada";
        }
    }

}
