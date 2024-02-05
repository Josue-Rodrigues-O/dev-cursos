import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { CursosService } from '../../services/cursos.service';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../../interfaces/video';

@Component({
    selector: 'app-page-course',
    standalone: true,
    templateUrl: './page-course.component.html',
    styleUrl: './page-course.component.css',
    imports: [NavBarComponent]
})
export class PageCourseComponent implements OnInit {
    objetoRecebido!: any
    tituloVideo!: string
    valorProgresso: number = 0
    porcentagem = "0"

    constructor(private activatedRoute: ActivatedRoute, private cursos: CursosService) {
        window.scrollTo(0, 0)
        let id: any
        this.activatedRoute.paramMap.subscribe(params => {
            id = params.get('id');
            this.objetoRecebido = this.cursos.getLista().find(x => x.id == id);
            this.tituloVideo = this.objetoRecebido.tabelaVideos[0].titulo
        });
    }

    ngOnInit(): void {
        setTimeout(() => {
            const video = document.getElementById("video")
            video?.setAttribute("src", this.objetoRecebido.tabelaVideos[0].linkVideo)
        }, 200)
    }

    aoClicarNaAula(video: Video) {
        this.tituloVideo = video.titulo
        const videoRecebido = document.getElementById("video")
        videoRecebido?.setAttribute("src", video.linkVideo)
    }

    aoClicarEmConcluido(video: Video) {
        let videosConcluidos: number = 0
        video.concluido = !video.concluido
        if (video.concluido) {
            this.valorProgresso++
        } else {
            this.valorProgresso--
        }
        for (let index = 0; index < this.objetoRecebido.tabelaVideos.length; index++) {
            if (this.objetoRecebido.tabelaVideos[index].concluido) {
                videosConcluidos++
            }
        }
        this.porcentagem = ((videosConcluidos * 100) / this.objetoRecebido.quantidadeVideos).toFixed(2)
    }
}
