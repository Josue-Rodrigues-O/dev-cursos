import { Component, Input, OnInit } from '@angular/core';
import { BarraSuperiorComponent } from "../../componentes/barra-superior/barra-superior.component";
import { RodapeComponent } from "../../componentes/rodape/rodape.component";
import { Curso } from '../../interfaces/curso';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../../services/cursos.service';

@Component({
    selector: 'app-page-acquisition',
    standalone: true,
    templateUrl: './page-acquisition.component.html',
    styleUrl: './page-acquisition.component.css',
    imports: [BarraSuperiorComponent, RodapeComponent]
})
export class PageAcquisitionComponent implements OnInit {
    link: any = "https://www.youtube.com/embed/3tmA3dboV0I?si=Lz5N9VwicWrCDylf"

    classeAba1 = "div-aba-selecionada";
    classeAba2 = "div-aba-nao-selecionada";
    aba1 = true;
    id: any
    objetoRecebido!: any

    podeExibir = true

    constructor(private activatedRoute: ActivatedRoute, private cursos: CursosService) {
        this.activatedRoute.paramMap.subscribe(params => {
            this.id = params.get('id');
            this.objetoRecebido = this.cursos.getLista().find(x => x.id == this.id);
        });
    }
    ngOnInit(): void {
        setTimeout(() => {
            const video = document.getElementById("video")
            video?.setAttribute("src", this.objetoRecebido.tabelaVideos[0].linkVideo)
        }, 500)
    }

    aoClicarButton(objeto: Curso) {
        this.cursos.adicionarCurso(objeto);
        console.log(this.cursos.getMeusCursos())
    }

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
