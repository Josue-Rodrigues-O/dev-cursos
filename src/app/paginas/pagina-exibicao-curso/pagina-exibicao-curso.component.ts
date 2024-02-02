import { Component, OnInit } from '@angular/core';
import { BarraSuperiorComponent } from "../../componentes/barra-superior/barra-superior.component";
import { CursosService } from '../../servicos/cursos.service';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../../interfaces/video';

@Component({
    selector: 'app-pagina-exibicao-curso',
    standalone: true,
    templateUrl: './pagina-exibicao-curso.component.html',
    styleUrl: './pagina-exibicao-curso.component.css',
    imports: [BarraSuperiorComponent]
})
export class PaginaExibicaoCursoComponent implements OnInit {
    objetoRecebido!: any
    id!: any
    tituloVideo!: string
    valorProgresso: number = 0
    porcentagem = "0"

    constructor(private activatedRoute: ActivatedRoute, private cursos: CursosService) {
        this.activatedRoute.paramMap.subscribe(params => {
            this.id = params.get('id');
            this.objetoRecebido = this.cursos.getLista().find(x => x.id == this.id);
            this.tituloVideo = this.objetoRecebido.tabelaVideos[0].titulo
        });
    }

    ngOnInit(): void {
        setTimeout(() => {
            const video = document.getElementById("video")
            video?.setAttribute("src", this.objetoRecebido.tabelaVideos[0].linkVideo)
        }, 500)
    }

    aoClicarNaAula(video: Video) {
        this.tituloVideo = video.titulo
        const videoRecebido = document.getElementById("video")
        videoRecebido?.setAttribute("src", video.linkVideo)
    }

    aoClicarEmConcluido(video: Video){
        let videosConcluidos = 0
        video.concluido = !video.concluido
        if (video.concluido) {
            this.valorProgresso++
        }else{
            this.valorProgresso--
        }
        for (let index = 0; index < this.objetoRecebido.tabelaVideos.length; index++) {
            if (this.objetoRecebido.tabelaVideos[index].concluido) {
                videosConcluidos++
            }            
        }
        this.porcentagem = ((videosConcluidos * 100)/ this.objetoRecebido.quantidadeVideos).toFixed(2)
    }
}
