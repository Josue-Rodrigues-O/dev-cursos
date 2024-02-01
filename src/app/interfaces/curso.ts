import { Video } from "./video"

export interface Curso {
    id: number
    autor: string
    linkFotoCanal: string
    linkCanal: string
    titulo: string
    quantidadeVideos: number
    preco: string
    linkBanner: string
    tabelaVideos: Array<Video>
}
